---
sidebar_position: 3
title: Login Page Best Practices
description: For more than 1 Identity Provider in your app, use IDP hint
---

If more than one Identity Provider (IDP) is configured in a realm, Keycloak directs users to a login page where they can select the IDP they want to use for authentication. You can skip this selection page or override the default IDP by passing the optional query parameter `kc_idp_hint`. See [here](dos-donts#do-skip-the-standard-login-page) for list of supported kc_idp_hints

There are two common ways to provide the IdP hint:

- **When using a Keycloak adapter:** configure the idpHint option in the adapter settings.
- **When not using an adapter:** include the parameter directly in the authorization URL in your code or configuration, for example: `http://localhost:8080/auth?kc_idp_hint=<idp_name>`

For more details, refer to the [Keycloak documentation](https://www.keycloak.org/docs/latest/server_admin/index.html#_client_suggested_idp).

If the framework you are using does not allow you to pass an IDP hint, please contact our team via [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) or by [email](mailto:bcgov.sso@gov.bc.ca) to discuss alternative options.
