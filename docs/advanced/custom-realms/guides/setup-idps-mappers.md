---
sidebar_position: 2
description: How to setup identity provider and its mappers
tags:
   - custom-realm
   - keycloak-mappers
   - identity-providers
---

# Set Up IDP(S) and Mappers

## Overview

When your custom realm is first provisioned, it contains only the default Terraform-managed resources — a small set of `roles`, `groups`, and `service accounts`. It does not yet have any identity providers (IDPs) configured.

This guide walks you through the four steps required to federate your custom realm to the BC Government Standard Realm, so that users can authenticate through [supported identity providers (IDPs)](../../../index.md#supported-identity-providers)

**What you'll learn:**

- How to provision a CSS integration to act as the upstream client
- How to configure an OpenID Connect IDP inside your Keycloak realm
- How to create attribute mappers for additional user claims

> **Note:** Unlike Silver custom realms, Gold custom realms are self-served. You provision the upstream integration through the CSS App — no SSO team involvement is required for this step.

---

## Step 1 — Request an Integration via the CSS App

Your custom realm will authenticate users by brokering through the Standard Realm. To do this, it needs a confidential OIDC client registered in the Standard Realm. You create this client using the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/).

1. Navigate to the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/).

1. Create a **Confidential OIDC** integration and select all the IDPs your realm will need.

> **Important:** Create a **single integration with all required IDPs selected**. Do not create one integration per IDP. Multiple integrations for the same realm can cause user session conflicts.

1. In each environment tab, add a redirect URI that allows your realm's callback:

   | Environment | Redirect URI |
   |-------------|-------------|
   | Dev | `https://dev.loginproxy.gov.bc.ca/auth/realms/<your-realm-name>/*` |
   | Test | `https://test.loginproxy.gov.bc.ca/auth/realms/<your-realm-name>/*` |
   | Prod | `https://loginproxy.gov.bc.ca/auth/realms/<your-realm-name>/*` |

   > You can tighten these redirect URIs to more specific paths later, once your IDPs are configured and tested.

2. Review and submit the integration. Provisioning typically completes within **5 minutes**.

3. Once provisioned, navigate to **My Dashboard** and **My Projects**, select your integration and you should see **Technical Details** tab pre-selected. Download the **Installation JSON** for each environment and note the **client name** (also called `resource`) and **client secret** — you will use these in Step 2.

---

## Step 2 — Create an IDP in Your Realm

For each IDP you selected in the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) integration, create a corresponding IDP in your Keycloak realm.

1. In your realm's Keycloak admin console, click **Identity Providers** in the left navigation.

2. Click **Add provider…** and select **OpenID Connect v1.0**.

3. Set **Alias** to a short identifier for the IDP (e.g. `idir`, `azureidir`).

4. Set **Sync Mode** to **Force**.

5. Set **Authorization URL** using the appropriate environment URL and IDP key:

   | Environment | Authorization URL |
   |-------------|-------------------|
   | Dev | `https://dev.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/auth?kc_idp_hint=<idp-key>` |
   | Test | `https://test.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/auth?kc_idp_hint=<idp-key>` |
   | Prod | `https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/auth?kc_idp_hint=<idp-key>` |

   Replace `<idp-key>` with the correct value from the table below:

   | Display Name | IDP Key |
   |---|---|
   | IDIR | `idir` |
   | Azure IDIR | `azureidir` |
   | Basic BCeID | `bceidbasic` |
   | Business BCeID | `bceidbusiness` |
   | Basic or Business BCeID | `bceidboth` |
   | GitHub BC Gov | `githubbcgov` |
   | GitHub Public | `githubpublic` |

   > **Note:** `kc_idp_hint` is case-sensitive. Use the keys exactly as shown — all lowercase.

6. Set **Token URL**:

   | Environment | Token URL |
   |-------------|-----------|
   | Dev | `https://dev.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token` |
   | Test | `https://test.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token` |
   | Prod | `https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token` |

7. Set **Logout URL**:

   | Environment | Logout URL |
   |-------------|------------|
   | Dev | `https://dev.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/logout` |
   | Test | `https://test.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/logout` |
   | Prod | `https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/logout` |

8. Set **User Info URL**:

   | Environment | User Info URL |
   |-------------|---------------|
   | Dev | `https://dev.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/userinfo` |
   | Test | `https://test.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/userinfo` |
   | Prod | `https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/userinfo` |

9. Set **Client Authentication** to **Client secret sent as post**.

10. Set **Client ID** to the `resource` value from your CSS App installation details.

11. Set **Client Secret** to the `secret` value from your CSS App installation details.

12. Enable **Validate Signatures**.

13. Enable **Use JWKS URL**, then set **JWKS URL**:

    | Environment | JWKS URL |
    |-------------|----------|
    | Dev | `https://dev.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/certs` |
    | Test | `https://test.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/certs` |
    | Prod | `https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/certs` |

14. Click **Save**.

---

## Step 3 — Create Attribute Mappers for the IDP

Keycloak automatically maps the following basic user properties from the upstream token **without** any additional mapper configuration:

| User Property | Mapped From Claim |
|---------------|-------------------|
| `username` | `preferred_username` (already includes the IDP suffix in the Standard Realm) |
| `firstName` | `given_name` |
| `lastName` | `family_name` |
| `email` | `email` |

> Do not create mappers for the properties in the table above — they are handled automatically.

For any **additional attributes** your application needs, you must create an **Attribute Importer** mapper. The available attributes per IDP are:

| IDP | Available Attributes |
|-----|---------------------|
| `idir` | `display_name`, `idir_user_guid`, `idir_username` |
| `azureidir` | `display_name`, `idir_user_guid`, `idir_username`, `user_principal_name` |
| `bceidbasic` | `display_name`, `bceid_user_guid`, `bceid_username` |
| `bceidbusiness` | `display_name`, `bceid_user_guid`, `bceid_business_guid`, `bceid_business_name`, `bceid_username` |
| `bceidboth` | `display_name`, `bceid_user_guid`, `bceid_business_guid`, `bceid_business_name`, `bceid_username` |
| `githubbcgov` | `display_name`, `github_id`, `github_username`, `org_verified`, `orgs` |
| `githubpublic` | `display_name`, `github_id`, `github_username`, `org_verified`, `orgs` |

**To create a mapper for an attribute:**

1. In your realm, navigate to **Identity Providers** and open the IDP you created.
2. Click the **Mappers** tab, then click **Add mapper**.
3. Configure the mapper:
   - **Name** — use the same value as the attribute key (e.g. `idir_user_guid`)
   - **Sync Mode Override** — set to **Force**
   - **Mapper Type** — set to **Attribute Importer**
   - **Claim** — enter the attribute key from the table above
   - **User Attribute Name** — enter the name to store on the user record (recommended: use the same key as the claim)
4. Click **Save**.

Repeat for each attribute you need. You do not need to create mappers for attributes your application will not use.

---

## Step 4 — Repeat for Additional IDPs

Repeat Steps 2 and 3 for each additional IDP you selected in the CSS App integration. Use the same CSS App client credentials (`resource` and `secret`) for each IDP — they all come from the single integration created in Step 1.
