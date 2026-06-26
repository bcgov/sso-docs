---
sidebar_position: 1
description: Learn about your integration credentials
tags:
  - client-credentials
  - client-types
  - idp-approval
---

# Integration Credentials

Once your integration in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) has been provisioned, you can download an **Installation JSON** file for each environment (dev / test / prod). This file contains the client-specific configuration your application needs to communicate with the SSO service — including the realm name, the Keycloak server URL, your client ID, and (for confidential clients) your client secret.

The Installation JSON is environment-specific, meaning the values for dev, test, and production are different. You should download and configure each environment separately to ensure your application points to the correct Keycloak instance and uses the correct credentials.

![integration Details](/img/using_json_Dec2023.svg)

## Approvals

### Production Approval Required for Certain IDPs

For the following identity providers, **production provisioning is not automatic**. Instead, the respective IDP owner must manually approve your production integration before it becomes active:

- **BCeID** (Basic, Business, or Both variants)
- **BC Services Card**
- **GitHub** (BC Gov or Public)

For dev and test environments, these IDPs are provisioned immediately upon [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) submission. Production, however, requires an explicit approval step from the IDP owner.

### The Approval Process

1. Submit your integration in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) with the desired IDP(s) and select the production environment.
2. If the integration request includes `BCeID / BC Services Card / GitHub` IDP(S), then the request enters a **pending approval** state for production environment.
3. The respective IDP owner reviews your request (usually within 1–2 business days, though integration status update after approval itself takes less than a few minutes).
4. Once approved, the production environment is automatically provisioned and your Installation JSON becomes available for download.

### Expediting Approval

If you have tight timelines or deadlines, do not wait passively for approval. **Proactively reach out to the IDP owner** directly to inform them of your approval request and ask them to prioritize it. This significantly reduces approval delays.

### IDP Contact Information

| IDP | Contact Method |
|---|---|
| **BCeID** | Reach out to [IDIM Consulting](mailto:idim.consulting@gov.bc.ca) |
| **BC Services Card** | Reach out to [IDIM Consulting](mailto:idim.consulting@gov.bc.ca) |
| **GitHub BC Gov** | Contact the SSO team |

### Important: Approved IDP Restrictions

Once an IDP variant has been approved for production, **you cannot add additional related IDP variants** to the same integration, though you may remove the approved one if needed and re-add right IDP(S) and wait for approval from IDP owners.

**Examples:**

- If `bceidbasic` (Basic BCeID) is approved for production, you **cannot** add `bceidbusiness` (Business BCeID) or `bceidboth` (Both variants) to the same integration. You can always de-select `bceidbasic` and select `bceidbusiness` or `bceidboth` and wait for approval.
- If `githubbcgov` (GitHub BC Gov) is approved for production, you **cannot** add `githubpublic` (GitHub Public) to the same integration, and vice versa. You can always de-select `githubbcgov` and select `githubpublic` and wait for approval.

**To use a different IDP variant** in production, you will need to request a new integration through CSS.

> This restriction is in place to prevent IDP confusion and to ensure that teams maintain clear governance over which identity provider is authorized for each application's user base.

---

## Client Types

- **Confidential clients** include a `credentials.secret` field. This secret must be stored securely on your back end and never exposed to the browser or end users.
- **Public clients** omit the client secret entirely and set `"public-client": true`. They must use PKCE to secure the Authorization Code Flow.

For more details, see [client types](../css-application/client-types).

Below is an example of an installation JSON for a `public` client.

```json
{
  "realm": "<standard_realm_name>",
  "auth-server-url": "https://<env>.loginproxy.gov.bc.ca/auth/",
  "ssl-required": "external",
  "resource": "<client_id>",
  "public-client": true,
  "verify-token-audience": true,
  "use-resource-role-mappings": true,
  "confidential-port": 0
}
```

Below is an example of an installation JSON for a `confidential` client.

```json
{
  "realm": "<standard_realm_name>",
  "auth-server-url": "https://<env>.loginproxy.gov.bc.ca/auth/",
  "ssl-required": "external",
  "resource": "<client_id>",
  "credentials": {
    "secret": "<client_secret>"
  },
  "confidential-port": 0
}
```
