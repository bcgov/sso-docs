---
sidebar_position: 21
title: SAML Integrations
---


## Choosing an Identity Provider

While our primary focus is on OpenID Connect (OIDC), we recently identified an issue affecting SAML integrations when multiple identity providers (IDPs) are selected. Specifically, selecting more than one IDP results in a duplicated payload.

To avoid this issue and ensure correct behavior, we have implemented a restriction that allows **only one IDP to be selected at a time** for SAML clients.



## Custom Client ID

If your product requires a **custom Client ID (also known as an Entity ID)**, please contact the Pathfinder SSO team. We can provision a custom Client ID upon request.

Reach out to us via:
- [Email](mailto:bcgov.sso@gov.bc.ca)  
- [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)



## Additional Roles Attribute

By default, upon successful authentication, client‑specific roles are returned in the `client_roles` attribute.

If your application cannot accept or process this attribute, please contact the Pathfinder SSO team via [Email](mailto:bcgov.sso@gov.bc.ca)  or [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc). We will work with you to identify a suitable workaround where possible.

