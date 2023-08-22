---
sidebar_position: 4
---

# Client setup without an adapter

---

### Using a client without an adapter

If you are not using an adapter/library, you will require some additional information to set up your OpenID connection. Required information can be found behind the publicly accessible `provider configuration endpoint` for your environment.

Based on our integration with us, you will either have your integration connected to our Gold Standard offering. [Reach out to us](https://chat.developer.gov.bc.ca/channel/sso) if you have questions.

### Endpoints by environment

Dev: https://dev.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration

Test: https://test.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration

Prod: https://loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration

The above URLs gives you OpenID Provider Metadata required for the OpenID connect configuration.

Here's a sample:

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

### Important note:

According to [OpenID Connect Discovery documentation](https://openid.net/specs/openid-connect-discovery-1_0.html#OpenID.Core), _"OpenID Providers have metadata describing their configuration. These OpenID Provider Metadata values are used by OpenID Connect"_

You can find the `client_id` and `client_secret` from the `Installation JSON` downloaded through the request process. More [on understanding the json file](installation-json)

Please see [here](https://www.keycloak.org/docs/latest/securing_apps/index.html#endpoints) for a full list of endpoints and their descriptions.

Please see [here](https://www.keycloak.org/docs/latest/securing_apps/index.html#other-openid-connect-libraries) for a other OpenID Connect Libraries.
