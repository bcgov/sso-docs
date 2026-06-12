---
sidebar_position: 3
description: Learn about your integration credentials
---

# Integration Credentials

Once your integration in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) has been provisioned, you can download an **Installation JSON** file for each environment (dev / test / prod). This file contains the client-specific configuration your application needs to communicate with the SSO service — including the realm name, the Keycloak server URL, your client ID, and (for confidential clients) your client secret.

The Installation JSON is environment-specific, meaning the values for dev, test, and production are different. You should download and configure each environment separately to ensure your application points to the correct Keycloak instance and uses the correct credentials.

![integration Details](using_json_Dec2023.svg)

## Client Types

- **Confidential clients** include a `credentials.secret` field. This secret must be stored securely on your back end and never exposed to the browser or end users.
- **Public clients** omit the client secret entirely and set `"public-client": true`. They must use PKCE to secure the Authorization Code Flow.

For more details, see [client types](client-types).

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
