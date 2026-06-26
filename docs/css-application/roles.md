---
sidebar_position: 6
description: Learn how to manage roles and role-based access control in the CSS App
tags:
  - roles
  - css-api
---

# Role Management

## Overview

Roles let you control what users can do inside your application. Rather than assigning permissions to individual users — which becomes difficult to manage at scale — you assign permissions to roles, then assign users to those roles. This pattern is known as **Role-Based Access Control (RBAC)**.

The [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) supports role management directly within each integration. Roles you create in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) are included in the user's access token at login, so your application can read them and make authorization decisions.

---

## How Roles Work

When a user authenticates through your integration, Keycloak includes their assigned roles in the `client_roles` claim of the access token. Your application reads this claim and grants or restricts access accordingly.

> Roles are scoped to an integration. A role named `admin` in your integration is independent of a role with the same name in another team's integration.

---

## Creating and Managing Roles

[Watch a short video walkthrough of role management](https://github.com/bcgov/sso-keycloak/assets/56739669/435f502a-aed8-49de-9ff7-f64dd4a38ff0), or follow the steps below.

### Prerequisites

- Your integration must be in **Completed** status before you can create roles.
- You must be a **Team Admin** to create, edit, or delete roles.

### Steps

1. Open your integration in the CSS App and navigate to the **Role Management** tab.
2. Select the environment (dev, test, or prod) and click **Create a New Role**.
3. Once the role exists, go to **Assign Users to Roles** and add at least one user to the role.
4. Log in to your application — the role will appear in the `client_roles` attribute of the user's token.

> You can create different roles for each environment in your integration. Roles are environment-specific and do not sync across dev, test, and prod automatically.

### Notes

- Deleting a role removes it from all users currently assigned to it.
- Team Admins can create, edit, and delete roles, and assign or remove users from roles.
- Team Members can view roles and assign or remove users from roles, but cannot create or delete roles.

---

## Using the CSS API Instead of the UI

If you need to manage roles and users programmatically, the CSS API provides a RESTful interface for the same operations available in the CSS App.

To get access, a Team Admin must request a **CSS API Account** through the CSS App. See [CSS API](./css-app-api.md) for details.

---

## Service Account Role Management

Some teams need to create roles for their **service accounts** — for example, to restrict which endpoints a service account can call on a client API.

Because the Standard Realm is shared across many teams, role names are not globally unique. A role named `editor` in your integration could exist in other integrations too. To ensure tokens are validated correctly for your API, your endpoint checks **must** verify both the role and the audience (`aud`) claim.

> **Audience check is required** if your application exposes an API and uses a Standard Realm integration. Without an audience check, a valid token issued to a different integration in the same realm could be used to call your API.

The `aud` claim identifies the intended recipient of the token. Combine it with the issuer (`iss`) and the role to confirm a token is genuinely valid for your API:

```
token.aud === "<your-client-id>"
  && token.iss === "https://loginproxy.gov.bc.ca/auth/realms/standard"
  && token.client_roles.includes("<your-role>")
```

---

## Role Assignments

The most important step in role assignment is accurate user identification. When you search in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/), the platform retrieves matching users from both Keycloak and the upstream identity providers. This helps you find users even when they are not yet present in Keycloak. Because profile attributes are not always unique, you should still validate identity carefully. In BC Government contexts, different users can share the same first name, last name, or email. Always verify the **GUID** before assigning a role, because it is the most reliable identifier for confirming you are assigning access to the correct person.

### User Search

When you search for users in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/), the platform can query both:

- existing users already present in Keycloak
- users available in the identity provider directory (for example, on-prem Active Directory for IDIR and cloud Active Directory for Azure IDIR)

This means a user can be discovered and assigned roles even if they have not yet logged into Keycloak.

When assigning roles in CSS, the available user search fields depend on the identity provider (IDP) configured for your integration.

| IDP | Searchable attributes in CSS |
| --- | --- |
| IDIR | First Name, Last Name, Email, Username |
| Azure IDIR | First Name, Last Name, Email, Username |
| BCeID | Display Name, Username, Email, IDP GUID |
| GitHub BC Gov | Name, Login, Email, IDP GUID |
| BC Services Card | Not searchable |
| Digital Credential | Not searchable |

### Why Some IDPs Are Not Searchable

For **BC Services Card** and **Digital Credential**, CSS cannot search users because user profile attributes are not retained in Keycloak for these IDPs.

> If your integration relies on role assignments through user lookup, use an IDP that supports searchable attributes.

### What happens when you assign a role pre-login?

If user is not already in Keycloak, [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) imports the user first and then assigns the role. 

**Note:** Upon un-assigning the role from the user, the user record will still stay in Keycloak and not automatically deleted unless the user's IDIR account is deactivated.

### Why teams use this

- enables day-one access for new users
- reduces onboarding delays
- avoids "first login succeeded but no permissions" support issues
