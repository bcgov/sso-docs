---
sidebar_position: 3
tags:
  - Custom realm
---

# Custom Realms

---

## How do I create and use a custom Authentication flow in my custom realm?

Custom authentication flows can be created & used by any team with a custom realm. Navigate to the Authentication menu item on the left hand side. Any of the existing flows can be modified, however it's recommended that you make a copy of the existing `First Broker Login` and `Browser` flows (these are most common to be modified). Modifying the existing flows could result in a lockout in your custom realm.

![Keycloak Custom Authentication Flows](./keycloak_auth_flows.png)

You can now modify the flow to your needs. Once the flow ready, you can apply it to either a client or an existing identity provider.

![Keycloak Client Authentication Flow Override](./kc_client_auth_flow_override.png)

![Keycloak IDP Authentication Flows](./kc_idp_flow_override.png)

---

## Is it possible to change the client type / Auth. type change in Gold after the integration has been created?

Auth type cannot be modified after the integration is completed, need to create a new integration with required Auth type.

---

## How to add another admin in a custom realm?

Please follow this [guide](../advanced/custom-realms/guides/grant-admin-permissions.md) to learn about adding more admins to your custom realm

---

## How to be mindful while working in Gold custom realm?

Below are the Do(s) and Don't(s) when working with a custom realm. Please contact SSO team if you have any questions.

### Do not

1. update the ***name*** of the realm;
2. delete the role ***realm-admin***
3. delete the role ***realm-viewer***
4. delete the group ***Realm Administrator***
5. delete the group ***Realm Viewer***
6. delete the client ***realm-admin-cli***
7. delete the client ***realm-viewer-cli***

### Do

1. you ensure offline tokens are revoked after use or set the maximum time.
2. you ensure logs not are stored or only store for a short period of time.
3. make sure the user username has a suffix with `@{idp}` and is based on the source of truth of the user type.
4. try to avoid using realm-level resources such as groups and roles to share the realm with multiple application teams.
5. validate the token at the application level rather than using an introspection endpoint
6. try to avoid user registration and create local users.
7. allow duplicate emails in the realm.
8. extensions are not possible in custom realms
9. only use introspection in use-cases where user volume is low and token revocation is required
10. avoid using `custom extensions developed by SSO team` since they are subject to change without notice.
    - `https://github.com/bcgov/sso-keycloak/tree/main/docker/keycloak#custom-extensions`
11. since we don't have a scenario that users regster via Keycloak, and the Keycloak services act as a `IDP broker`, the recommended realm `Login` configs are following:

![Keycloak Recommended Configuration](./keycloak_recommended_config.png)
