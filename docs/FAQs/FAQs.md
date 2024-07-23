---
sidebar_position: 7
---

# 1. Where to find information about BC Govt. Keycloak offerings?

The BC Gov SSO team has created significant documentation available here. You can also create issues & make requests from these links:
•	https://github.com/bcgov/sso-keycloak/issues
•	https://github.com/bcgov/sso-keycloak/discussions/new?category=q-a


# 2. Where can I find libraries (client adapters) to connect to Keycloak?

: Keycloak offers both SAML and OIDC as a means to connect your client applications. OIDC is recommended. You can find a number of adapters here: https://www.keycloak.org/downloads


# 3.How to share Keycloak realm between application teams without sharing the admin credentials?

It is not currently possible with our version of RedHat SSO. Currently, once a user has been granted administrative privileges to a realm, they have full access. There is no middle ground where only certain features are available to the user.
RedHat SSO has fine-grained authorization (FGA) as a technology preview feature. It is not yet ready for enterprise consumption. The SSO team is keeping a close eye on that.
Note: this only applies for teams in a custom realm; in the standard realm there is separation given the CSS application is used as another layer of security/access control.
