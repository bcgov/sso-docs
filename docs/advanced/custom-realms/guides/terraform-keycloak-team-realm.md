# Running Terraform in a Custom Realm

**Audience:** Application teams that own a single Keycloak / RHBK realm and want to manage it as code.

**Terraform Provider:** [`keycloak/keycloak`](https://registry.terraform.io/providers/keycloak/keycloak/latest/docs) (the official provider; successor to `mrparkers/keycloak`).

**Applies to:** Keycloak / RHBK 26.x (Quarkus distribution). Notes for 26.4+ behaviour changes are included.

---

## 1. How it works

Keycloak admin permissions are **per realm**. Every realm has a built-in client called `realm-management` whose client roles (`manage-clients`, `manage-users`, `realm-admin`, …) grant admin API rights **over that realm only**. A service account that lives in your realm and holds those roles can call `/admin/realms/<your-realm>/...` without ever touching `master`.

The Terraform provider supports this directly: its `realm` argument is the realm used **for authentication** (default `master`). Point it at your own realm and authenticate with a service-account client that lives there.

```
Terraform ──client_credentials──▶ /realms/<team-realm>/protocol/openid-connect/token
          ◀── access token (realm-management client roles) ──
Terraform ──Bearer token──▶ /admin/realms/<team-realm>/...   ✅
                            /admin/realms/master/...          ❌ 403
                            /admin/realms (create realm)      ❌ 403
```

---

## 2. One-time bootstrap

Terraform needs a credential before it can manage anything, so the Terraform client is created **once, by hand**, by someone who already has realm-admin rights in the team realm (a team realm administrator).

### 2.1 Admin Console

In **your realm**:

1. **Clients → Create client**
   - Client type: `OpenID Connect`
   - Client ID: `terraform` (or `terraform-ci`)
2. **Capability config**
   - Client authentication: **On** (confidential)
   - Authorization: Off
   - Standard flow: **Off**
   - Direct access grants: **Off**
   - Service accounts roles: **On**
3. **Credentials tab** → copy the client secret (or switch to *Signed JWT*, see §6).
4. **Service accounts roles tab → Assign role → Filter by clients** → pick roles from the `realm-management` client (see §3).


> **Privilege rule:** The person doing the bootstrap can only grant `realm-management` roles they hold themselves. If you can't grant a role, your platform/SSO team needs to do it or grant it to you first.

---

## 3. Choosing roles (least privilege)

All roles below are **client roles of `realm-management`** in your realm.

| What Terraform manages | Roles needed |
|---|---|
| Clients, client scopes, protocol mappers, client roles | `manage-clients`, `view-clients`, `query-clients` |
| Users, groups, role mappings | `manage-users`, `view-users`, `query-users`, `query-groups` |
| Realm settings, realm roles, auth flows, required actions, keys, default scopes | `manage-realm`, `view-realm` |
| Identity providers + IdP mappers | `manage-identity-providers`, `view-identity-providers` |
| Fine-grained authorization (resources/policies/permissions on clients) | `manage-authorization`, `view-authorization` |
| Event / admin event settings | `manage-events`, `view-events` |
| Everything in the realm | `realm-admin` (composite of all of the above) |

Recommendation: start with the specific roles for what you actually manage. `realm-admin` is fine for a small team that manages the whole realm, but it makes the Terraform credential equivalent to a full realm administrator.

Only add roles your realm's resources need — e.g. if your platform team manages IdPs centrally, leave out `manage-identity-providers`.

---

## 4. Provider configuration

```hcl
terraform {
  required_version = ">= 1.6"

  required_providers {
    keycloak = {
      source  = "keycloak/keycloak"
      version = "~> X.Y"   # pin to the current release you've tested (check the Registry)
    }
  }

  backend "s3" {        # or kubernetes, azurerm, http, etc. — never local state in CI
    # ...
  }
}

provider "keycloak" {
  url       = var.keycloak_url   # e.g. https://sso.example.gov.bc.ca  (no /auth on Quarkus)
  realm     = var.realm          # <-- the realm the terraform client LIVES in, not master
  client_id = "terraform"
  # client_secret supplied via KEYCLOAK_CLIENT_SECRET

  # Required on Keycloak/RHBK 26.4+ unless the SA can read /admin/serverinfo (see §7)
  keycloak_version = var.keycloak_version  # e.g. "26.4.7"
}
```

Environment variables (preferred in CI so nothing secret lives in `.tf` files):

| Variable | Purpose |
|---|---|
| `KEYCLOAK_URL` | Base URL |
| `KEYCLOAK_REALM` | Auth realm (your team realm) |
| `KEYCLOAK_CLIENT_ID` | `terraform` |
| `KEYCLOAK_CLIENT_SECRET` | Client secret |
| `KEYCLOAK_VERSION` | Pinned server version (26.4+) |
| `KEYCLOAK_BASE_PATH` | Only `/auth` on legacy WildFly-based servers |

> **Important:** The `realm` argument only controls **where Terraform authenticates**. Every resource still needs its own `realm_id`. Use a single local so you can't accidentally target another realm:

```hcl
locals {
  realm_id = var.realm
}

resource "keycloak_openid_client" "my_app" {
  realm_id              = local.realm_id
  client_id             = "my-app"
  access_type           = "CONFIDENTIAL"
  standard_flow_enabled = true
  valid_redirect_uris   = ["https://my-app.example.gov.bc.ca/*"]
}

resource "keycloak_role" "app_admin" {
  realm_id = local.realm_id
  name     = "app-admin"
}

resource "keycloak_group" "admins" {
  realm_id = local.realm_id
  name     = "app-admins"
}

resource "keycloak_group_roles" "admins" {
  realm_id = local.realm_id
  group_id = keycloak_group.admins.id
  role_ids = [keycloak_role.app_admin.id]
}
```

---

## 5. The realm resource itself

Creating or deleting a realm (`POST /admin/realms`, `DELETE /admin/realms/{realm}`) requires master-realm rights. You therefore **cannot `terraform apply` a new `keycloak_realm`** and must never let Terraform try to destroy it. Two options:

### Option A — Read-only (simplest, recommended if the platform team owns realm settings)

```hcl
data "keycloak_realm" "this" {
  realm = var.realm
}

# use data.keycloak_realm.this.id as realm_id
```

### Option B — Import and manage realm settings

Updating an existing realm only needs `manage-realm` in that realm, so you can import it:

```hcl
resource "keycloak_realm" "this" {
  realm   = var.realm
  enabled = true
  # display_name, login settings, token lifespans, SMTP, security headers, etc.

  lifecycle {
    prevent_destroy = true
  }
}
```

```bash
terraform import keycloak_realm.this team-realm
terraform plan   # reconcile every attribute until the plan is clean BEFORE applying
```

Cautions for Option B:
- `keycloak_realm` has many attributes with provider defaults. Any attribute you don't set may be "corrected" to the provider default on apply. Run `terraform plan` after import and copy the current values into code until the plan shows no changes.
- If your platform team enforces realm settings (themes, brute-force, token lifespans), agree on ownership first, or use `lifecycle { ignore_changes = [...] }` for platform-owned attributes.
- If your realm runs IdP-first or custom auth flows owned by the platform, don't manage `browser_flow` / `first_broker_login_flow` bindings from your state.

---

## 6. Credentials in CI/CD

**Client secret (baseline):** store `KEYCLOAK_CLIENT_SECRET` in your CI secret store (GitHub Actions secret, OpenShift Secret, Vault). Rotate it from the client's *Credentials* tab; consider enabling client secret rotation policies in the realm.

**Signed JWT (better):** switch the `terraform` client's authenticator to *Signed JWT* and give the provider a private key (`jwt_signing_key`) or a pre-signed assertion (`jwt_token_file`). No shared secret on the wire.

**Federated (no stored credential):** on recent Keycloak/RHBK, the client can use *Signed JWT – Federated* with a Kubernetes/OpenShift service-account token as the client assertion; the provider reads it via `jwt_token_file`. This is a good fit for pipelines running on OpenShift. Check that your Keycloak version and your platform team's configuration support it before relying on it.

Example GitHub Actions step:

```yaml
- name: Terraform apply
  env:
    KEYCLOAK_URL: https://sso.example.gov.bc.ca
    KEYCLOAK_REALM: team-realm
    KEYCLOAK_CLIENT_ID: terraform
    KEYCLOAK_CLIENT_SECRET: ${{ secrets.KEYCLOAK_TF_SECRET }}
    KEYCLOAK_VERSION: "26.4.7"
  run: |
    terraform init -input=false
    terraform plan -input=false -out=tfplan
    terraform apply -input=false tfplan
```

Use one Terraform client **per environment realm** (dev/test/prod) with separate secrets, so a dev pipeline can never write to prod.

---

## 7. Keycloak / RHBK 26.4+: version detection

The provider calls `/admin/serverinfo` to detect the server version and toggle version-specific API behaviour. Starting with Keycloak 26.4, that endpoint only returns system information to `master`-realm admins or to service accounts with an elevated role — `view-system` on 26.4.x, replaced by `manage-realms` from 26.5.4 (per the provider docs, roles on your realm's `realm-management` client).

If your service account can't read it, the provider **does not fail** — it assumes the newest version it was tested against and logs a warning. That guess can produce wrong plans. Fix it one of two ways:

1. **Pin the version (recommended for tenant teams):** set `keycloak_version` / `KEYCLOAK_VERSION` to the exact server version. For RHBK, use the upstream Keycloak version it's based on. Keep it updated when the platform upgrades (Renovate or a pipeline variable owned by the platform team works well).
2. **Request the role:** ask the platform team to grant `manage-realms` (26.5.4+) or `view-system` (26.4.x). Many shared platforms will decline because these roles expose server-level information, so plan on option 1.

---

## 8. Guardrails

- **Don't let Terraform manage its own client in the same state.** If `keycloak_openid_client.terraform` and its service-account role mappings are in state, a bad change can revoke Terraform's own access mid-apply. Keep the bootstrap client out of state, or in a separate state applied by a human, with `prevent_destroy`.
- **Beware "exclusive" role mapping resources.** `keycloak_group_roles`, `keycloak_user_roles` and `keycloak_openid_client_service_account_role`-style resources can remove mappings not declared in code. Use `exhaustive = false` where the resource supports it if humans or other tooling also assign roles.
- **No privilege escalation:** the Terraform service account cannot grant `realm-management` roles it doesn't hold. Expect a 403 if your code tries.
- **Users:** avoid managing human users in Terraform if they come from an IdP (IDIR, BCeID, BC Services Card, etc.) — they're created on first login. Manage groups and group→role mappings instead, and assign people to groups via the IdP mappers or admin UI.
- **Secrets in state:** client secrets, IdP client secrets and SMTP passwords end up in state. Encrypt the backend and restrict who can read it.
- **Plan before apply in CI** and require review on the plan output for prod.

---

## 9. What a realm-scoped team cannot do

| Action | Why |
|---|---|
| Create or delete the realm | Requires `create-realm` / admin in `master` |
| Anything in `master` or another team's realm | Token issued by your realm has no rights there (403) |
| Deploy themes, SPIs/providers, change server config | Server-level, not realm-level |
| Read `/admin/serverinfo` on 26.4+ (without extra role) | See §7 |
| Grant roles you don't hold | Keycloak blocks privilege escalation |

These stay with the platform team. Agree up front which realm settings are platform-owned so your Terraform doesn't fight with platform automation.

---

## 10. Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| `error initializing keycloak provider ... 401` | Wrong `realm` (still defaulting to `master`), wrong secret, or service accounts not enabled on the client. |
| `403 Forbidden` on a specific resource type | Missing `realm-management` role for that area (see §3). Decode the token at the token endpoint and check `resource_access.realm-management.roles`. |
| `403` creating `keycloak_realm` | Expected — import it or use the data source (§5). |
| Warning about Keycloak version / unexpected plan diffs on 26.4+ | Set `keycloak_version` (§7). |
| `404` on every call | Legacy server needs `base_path = "/auth"`, or URL includes `/auth` on a Quarkus server where it shouldn't. |
| Plan wants to change many realm attributes after import | Provider defaults differ from current values — copy real values into code before applying (§5). |
| Role mappings disappear for users/groups managed outside TF | An exhaustive mapping resource is removing them — set `exhaustive = false` or stop managing that mapping. |

Quick token check:

```bash
curl -s -X POST "$KC/realms/$REALM/protocol/openid-connect/token" \
  -d grant_type=client_credentials \
  -d client_id=terraform \
  -d client_secret="$KEYCLOAK_CLIENT_SECRET" \
| jq -r .access_token | cut -d. -f2 | base64 -d 2>/dev/null | jq '.resource_access["realm-management"]'
```

---
