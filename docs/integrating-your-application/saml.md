---
sidebar_position: 21
---

# SAML Integrations

## Choosing Identity Provider

- Although our primary focus has been on OIDC, during a recent sprint, we identified an issue related to the selection of multiple identity providers (IDPs) for SAML. We observed that the payload is duplicated when multiple IDPs are chosen. To prevent this issue, we have implemented a restriction, allowing the selection of only one IDP at a time.

## Custom Client ID

- If your product requires a custom Client ID a.k.a Entity ID, please reach out to us through [Email](mailto:bcgov.sso@gov.bc.ca) or [Rocket.Chat](https://chat.developer.gov.bc.ca/channel/sso) and we will set up one for you.

## Additional Roles Attribute

Currently, upon successful authentication, we return associated client roles for user under `client_roles` attribute. If your product does not accept this attribute then reach out to us through [Email](mailto:bcgov.sso@gov.bc.ca) or [Rocket.Chat](https://chat.developer.gov.bc.ca/channel/sso) and we will try to find a workaround for you.
