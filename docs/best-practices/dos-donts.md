---
sidebar_position: 1
description: Our advice on what to do
tags:
  - best-practices
---

# Do's & Don'ts

## Overview

This guide outlines the most important do's and don'ts for integrating with the SSO service. Following these practices will help you build a secure, reliable, and well-behaved integration that performs well in shared environments.

**What you'll learn:**

- How to avoid common performance pitfalls that affect all teams on the platform
- How to secure client secrets, redirect URIs, and tokens
- How to validate identity providers and tokens correctly
- How to handle logout, load testing, and offline tokens safely

---

## ⚠️ Don'ts

### Don't Introspect the Token on Every Request

Calling the [Token Introspection Endpoint](https://www.oauth.com/oauth2-servers/token-introspection-endpoint/) on every request can bring down the shared SSO service for all clients on the platform.

> **Real-world example:** This exact issue was seen with [Flask-OIDC](https://flask-oidc.readthedocs.io/en/latest/). The adapter was making an introspection call on every HTTP request for a high-volume service, overwhelming Keycloak. Most adapters avoid this because token information is available within the JWT itself — but this one had a defect.

**What to do instead:**

- Validate tokens locally using the JWKS endpoint (see [Do: Validate Tokens at the Application Level](#do-validate-tokens-at-the-application-level)).
- Cache the JWT in a cookie to avoid re-checking session state on every request. Libraries like [keycloak-js](https://www.npmjs.com/package/keycloak-js) handle this automatically, limiting round-trips to Keycloak.

---

### Don't Run Load Tests Without SSO Team Approval

The DEV and TEST environments are **shared** across many teams. A poorly configured load test can degrade or break those environments for everyone.

**Before running any load test:**

1. Notify the SSO team in advance via [Email](mailto:bcgov.sso@gov.bc.ca) or the [Teams channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc).
2. Confirm the target environment and expected load profile.
3. Co-ordinate timing to avoid impact on other teams.

---

### Don't Reuse the Same Keycloak Client Across Multiple Applications

If you have multiple web applications, create a **separate integration request** for each one.

**Why this matters:**

- Each application can have its own redirect URIs configured precisely, reducing the risk of misconfiguration.
- Each application gets a unique client secret, so a compromise in one application does not affect others.
- Separate clients make auditing and troubleshooting significantly easier.

---

### Don't Use Email Addresses as Application Identifiers

Do not use a user's email address as the primary identifier in your application. Email addresses are not a stable unique identifier for authentication and authorisation decisions. A user may change their email address over time, and different users can sometimes share the same email address pattern across identity providers or account migration scenarios.

If your application keys access to the email address, a second user who signs in with the same email value could inherit the access that was originally granted to the first user. This creates a serious account-linking and privilege-assignment risk.

**What to do instead:**

- Use the OIDC `sub` claim as the stable identifier for the user.
- Treat `sub` as the canonical user key in your application database and access-control logic.
- If you need a display value, store email as a profile attribute, not as the identity key.

---

## ✅ Do's

### Do Protect the Client Secret

> **Confidential clients only.** Public clients do not have a client secret.

The client secret must **never leave the server**. Treat it with the same care as a database password.

| Platform | Recommended Approach |
| --- | --- |
| **OpenShift** | Store as an [OCP Secret](https://docs.openshift.com/container-platform/latest/nodes/pods/nodes-pods-secrets.html) and inject as an environment variable or mounted file. Never hardcode in a ConfigMap. |
| **Other platforms** | Use a secret management solution such as HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault. |

**Never:**

- Embed the secret in client-side JavaScript, HTML, or any browser-served asset — it would be publicly visible.
- Commit it to a Git repository, even a private one. Use tools like [git-secrets](https://github.com/awslabs/git-secrets) or pre-commit hooks to prevent accidental exposure.
- Bake it into a container image — images can be inspected with `docker history` or image layer tools.

> **If a secret is compromised:** Rotate it immediately in the [CSS](../css-application/introduction.md) and revoke any tokens issued with the old secret.

---

### Do Keep Your Redirect URIs Precise and Up to Date

Your redirect URIs should **only point to resources you control**. An overly broad or stale redirect URI can be exploited in open redirect attacks.

**Best practices:**

- Register only the exact URIs your application uses — avoid wildcards where possible.
- Remove URIs that are no longer in use.
- In most cases, you will only need one URI per environment (the post-login return URL).

---

### Do Apply Appropriate Logout Calls

Logout in SSO is not a single action — it involves terminating sessions at multiple layers: your application, Keycloak, and the upstream IDP. Failing to handle all layers correctly can leave users believing they are logged out when an active session still exists.

#### Standard Keycloak Logout

For all integrations, your logout flow must:

1. Redirect the user to Keycloak's `end_session_endpoint` with `id_token_hint` (the user's ID token) and `post_logout_redirect_uri` (where Keycloak should redirect after logout).
2. Clear any local session state, cookies, and tokens held by your application.
3. Inform the user if a full IDP-level logout could not be completed.

#### SiteMinder (IDIR / Azure IDIR) — Chained Logout

IDPs that use SiteMinder — such as IDIR — retain their own session independently of Keycloak. Even after the Keycloak session is destroyed, the SiteMinder session remains active. This means that when the user next clicks Login, they are silently authenticated again without being prompted to enter credentials.

**The fix is to chain your logout calls** so that both the SiteMinder and Keycloak sessions are terminated in sequence:

1. Redirect the user to the **SiteMinder logout endpoint**, passing the Keycloak logout URL as the return URL.
2. SiteMinder terminates its session and redirects to **Keycloak's logout endpoint**.
3. Keycloak terminates its session and redirects back to your **application's post-logout URL**.

**URL format:**

```
https://${SM_LOGOUT_URL}?retnow=1&returl=${KC_LOGOUT_URL}?post_logout_redirect_uri=${APP_LOGOUT_URL}
```

**Example (production):**

```
https://logon7.gov.bc.ca/clp-cgi/logoff.cgi?retnow=1&returl=https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/logout?post_logout_redirect_uri=https://myapp/logout
```

> **Note:** Replace `loginproxy.gov.bc.ca` with `dev.loginproxy.gov.bc.ca` or `test.loginproxy.gov.bc.ca` for non-production environments.

---

### Do Skip the Keycloak Default Login Page

When a client is configured with multiple IDPs, Keycloak displays a login page prompting the user to choose an IDP. **Almost all teams bypass this page** by passing the `kc_idp_hint` query parameter directly in the authorization request, routing users straight to the correct IDP login.

**Supported `kc_idp_hint` values:**

| Display Name            | `kc_idp_hint`       |
| ----------------------- | :-----------------: |
| IDIR                    | `idir`              |
| Azure IDIR              | `azureidir`         |
| Basic BCeID             | `bceidbasic`        |
| Business BCeID          | `bceidbusiness`     |
| Basic or Business BCeID | `bceidboth`         |
| GitHub BC Gov           | `githubbcgov`       |
| GitHub Public           | `githubpublic`      |
| Digital Credential      | `digitalcredential` |
| BC Services Card        | Your client ID      |

---

### Do Revoke Offline Tokens Appropriately

Offline tokens provide long-lived access on behalf of a user and do not expire when the Keycloak session ends. They must be managed deliberately.

**Best practices:**

- **Revoke immediately after use** for one-time or short-lived background tasks.
- **Set a maximum offline session lifespan** via [Additional Settings](../css-application/additional-settings.md) — never leave it unconstrained.
- **Revoke on logout** — when a user explicitly logs out, revoke any offline tokens issued to them.
- **Store securely** — treat offline tokens like client secrets. Never log them, store them in browser storage, or expose them in client-side code.

Offline tokens can be revoked via Keycloak's token revocation endpoint or the user's account management console.

---

### Do Validate Tokens at the Application Level

Validate JWTs **locally** rather than calling Keycloak's introspection endpoint on every request. JWTs are self-contained and cryptographically signed — no network call to Keycloak is required.

#### Local Validation Steps

1. **Verify the signature** — Fetch Keycloak's public keys from the JWKS endpoint and verify the token signature. Most OIDC libraries do this automatically.
   ```
   <KEYCLOAK_BASE_URL>/auth/realms/{realm}/protocol/openid-connect/certs
   ```
2. **Check standard claims:**
   - `exp` — token has not expired
   - `iat` — token was issued at a reasonable time (guards against replay attacks)
   - `iss` — issuer matches your Keycloak realm URL exactly
   - `aud` — audience includes your `client_id`
3. **Cache the JWKS** — Fetch public keys once and cache them. Only re-fetch when you encounter a `kid` (key ID) that is not in your cache — this handles Keycloak key rotation gracefully.

#### When to Use the Introspection Endpoint

The introspection endpoint is appropriate **only** in these two cases:

- You need to verify whether a token has been **explicitly revoked** before its natural expiry (e.g. a user was deprovisioned or force-logged-out).
- You are validating an **opaque (non-JWT) token**.

> **If you do use introspection:** Cache the results with a short TTL (30–60 seconds) to avoid a synchronous Keycloak call on every request.
