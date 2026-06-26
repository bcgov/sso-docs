---
sidebar_position: 3
description: How to set up BC Services Card as an identity provider in a custom realm
tags:
  - custom-realm
  - bc-services-card
  - identity-provider
---

# Set Up BC Services Card IDP

## Overview

BC Services Card (BCSC) is a government-issued identity credential that enables high-assurance authentication for BC residents. It is available through **Standard Realm** but if you have a custom realm and unique needs of BCSC, then follow this guide to configure BCSC as a whole new IDP.

This guide covers the three components required for a functional BCSC integration in your custom realm:

1. **Identity Provider (IDP)** — connects your realm to the BCSC OIDC service
2. **IDP Mappers** — imports BCSC user attributes into Keycloak user records
3. **Client Mappers** — exposes those attributes in the tokens returned to your application

---

## Before You Begin — On-Boarding with IDIM

Before configuring anything in Keycloak, your team must complete the BCSC on-boarding process with IDIM (Identity Information Management).

Contact IDIM to initiate on-boarding. Once the process is underway, IDIM will provide you with:

| Credential | Description |
|---|---|
| **Client ID** | Your integration's unique identifier |
| **Client Secret** | The shared secret for authenticating to the BCSC token endpoint |
| **Discovery Endpoint** | The OIDC well-known configuration URL for your IDIM environment |

> The discovery endpoint exposes all the URLs you need (authorization, token, userinfo, JWKS). Example for the test environment: `https://idtest.gov.bc.ca/login/.well-known/openid-configuration`

Keep these credentials secure. You will enter them directly into the Keycloak admin console in the steps below.

---

## Step 1 — Create the BC Services Card IDP

1. In your realm's Keycloak admin console, click **Identity Providers** in the left navigation.
2. Click **Add provider…** and select **OpenID Connect v1.0**.
3. Set **Alias** to a short identifier for the IDP (e.g. `bcsc`).
4. Fill in the following fields using the URLs provided by your IDIM discovery endpoint:

   | Field | Value |
   |---|---|
   | **Authorization URL** | `https://<IDIM_ENVIRONMENT>/login/oidc/authorize` |
   | **Token URL** | `https://<IDIM_ENVIRONMENT>/oauth2/token` |
   | **User Info URL** | `https://<IDIM_ENVIRONMENT>/oauth2/userinfo` |
   | **Issuer** | `https://<IDIM_ENVIRONMENT>/oauth2/` |
   | **JWKS URL** | `https://<IDIM_ENVIRONMENT>/oauth2/jwk` |
   | **Client Authentication** | Client secret sent as post |
   | **Client ID** | Provided by IDIM |
   | **Client Secret** | Provided by IDIM |
   | **Default Scopes** | `openid profile email address` |
   | **Validate Signatures** | Enabled |
   | **Use JWKS URL** | Enabled |

5. Click **Save**.

> Replace `<IDIM_ENVIRONMENT>` with the hostname for your environment (e.g. `idtest.gov.bc.ca` for test). Confirm exact URLs against your discovery endpoint document.

---

## Step 2 — Create IDP Mappers

IDP mappers tell Keycloak which BCSC claims to import and store as user attributes. Because every BCSC integration has a different approved attribute set, the mappers you need will vary. Refer to the BCSC OIDC specification provided by IDIM for the full list of available claims.

**To create a mapper:**

1. In your realm, navigate to **Identity Providers** and open the BCSC IDP you created.
2. Click the **Mappers** tab, then click **Add mapper**.
3. Configure the mapper fields and click **Save**.

The examples below illustrate two common mappers:

### Directed Identifier (DID)

Maps the OIDC `sub` (subject) claim to a stored user attribute named `did`. The directed identifier is a privacy-preserving unique identifier assigned per-service by BC Services Card.

| Field | Value |
|---|---|
| **Name** | `did` |
| **Sync Mode Override** | Force |
| **Mapper Type** | Attribute Importer |
| **Claim** | `sub` |
| **User Attribute Name** | `did` |

### Given Name

Maps the `given_name` claim to the Keycloak `firstName` property.

| Field | Value |
|---|---|
| **Name** | `given_name` |
| **Sync Mode Override** | Force |
| **Mapper Type** | Attribute Importer |
| **Claim** | `given_name` |
| **User Attribute Name** | `firstName` |

Repeat this pattern for every attribute your integration requires.

### Username Mapper (Recommended)

> **Recommendation:** Configure a `username` mapper that includes the IDP alias in the username. This prevents username collisions between IDPs and makes it possible to search for users by IDP type in the Keycloak admin console.

Configure a **Username Template Importer** mapper with a template such as `${ALIAS}.${CLAIM.sub}` to produce usernames like `bcsc.abc123`.

---

## Step 3 — Create Client Mappers

IDP mappers import attributes into the Keycloak user record, but they do not automatically include those attributes in tokens. To expose attributes in the ID token, access token, or userinfo response, you need **client mappers**.

1. In your realm, navigate to **Clients** and open the client your application uses.
2. Click the **Client Scopes** tab.
3. Click the dedicated scope link at the top of the list (named `<your-client-name>-dedicated`).
4. Click **Configure a new mapper**, then select **User Attribute**.
5. Fill in the mapper fields:

   | Field | Value | Notes |
   |---|---|---|
   | **Name** | Friendly label (e.g. `givenName`) | Displayed in admin console only |
   | **User Attribute** | Stored attribute name (e.g. `firstName`) | Must match the User Attribute Name from the IDP mapper |
   | **Token Claim Name** | Claim name in the token (e.g. `givenName`) | This is what your application will read |
   | **Claim JSON Type** | `String` | |
   | **Add to ID token** | Enabled | |
   | **Add to access token** | Your choice | Enable only if your application reads attributes from the access token |
   | **Add to userinfo** | Enabled | |

6. Click **Save**.

Repeat for each attribute your application needs to receive in its tokens.
