---
sidebar_position: 4
title: Client Setup Without an adapter
description: Learn how to set up your OpenID connection if you are not using an adapter/library.
---

### Using a Client Without an Adapter

If you are not using a Keycloak adapter or client library, you’ll need to manually configure your OpenID Connect (OIDC) integration. The required information is available from the **OpenID Provider Configuration Endpoint** for your environment. This endpoint is publicly accessible and exposes all standard OIDC metadata.

Your integration will connect to our **Gold Standard** offering. If you have questions or need assistance, reach out to the Pathfinder SSO team via [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc).

### Provider Configuration Endpoints by Environment
- **DEV**  
  https://dev.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration

- **TEST**  
  https://test.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration

- **PROD**  
  https://loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration

Each of these URLs returns the OpenID Provider metadata required to configure an OIDC client.


### Example OpenID Provider Metadata
Below is a simplified example of the information returned by the provider configuration endpoint:

```json
{
  "issuer": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>", // Issuer URL
  "authorization_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/auth", // Authorization URL
  "token_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/token", // Token URL
  "userinfo_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/userinfo", // User Info UR
  "end_session_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/logout", // Logout URL
  "jwks_uri": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/certs", // JSON Web Key Set URL
  ...
}
```

### Important Note


As described in the OpenID Connect Discovery specification,  
> “OpenID Providers have metadata describing their configuration. These OpenID Provider Metadata values are used by OpenID Connect.”

Source: https://openid.net/specs/openid-connect-discovery-1_0.html#OpenID.Core

Your `client_id` and, for confidential clients, `client_secret` are provided in the **installation JSON** generated during the request process. For more details, see [installation-json](installation-json).

For a complete list of available OpenID Connect endpoints and their purposes, refer to the [Keycloak documentation](https://www.keycloak.org/securing-apps/oidc-layers)





