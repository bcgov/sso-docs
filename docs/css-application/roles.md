---
sidebar_position: 3
description: Learn how to manage roles and role-based access control in the CSS App
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
