---
sidebar_position: 8
tags:
  - Roles
  - Service accounts
---

# Roles and Service account

---

## How do I add client roles to an existing user in Keycloak's custom realm?

In order to add client roles, ensure your client has the role created and then navigate to the user's `Role Mappings` tab. In the Client Roles area, search for your client. Once the client is selected, you should have the ability to add the client role to your user

---

## Is it possible to add users to keycloak and assign groups/roles prior to the user logging on?

Yes. In many cases, [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) lets you assign roles before a user's first login. Please refer to this [guide](../css-application/roles.md#user-search) for more details.

---

## Is there a way to manage service account roles in Gold?

Yes, [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) lets you assign/un-assingn roles to your service acconts. Please refer to this [section](../css-application/roles.md#service-account-role-management) for more details.