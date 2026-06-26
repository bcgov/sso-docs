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

```js
token.aud === "<your-client-id>"
  && token.iss === "https://loginproxy.gov.bc.ca/auth/realms/standard"
  && token.client_roles.includes("<your-role>")
```

---

## Role Assignments

The most important step in role assignment is accurate user identification. When you search in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/), the platform returns matching users from available sources, but profile attributes are not always unique. In BC Government contexts, different people can share the same first name, last name, or email address. Always verify the **GUID** before assigning a role, because it is the most reliable identifier for confirming access is granted to the correct person.

### User Search

For IDIR and IDIR - MFA identity providers, user search in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) can query both:

- Existing users already present in Keycloak
- Users available in the upstream identity provider directory (for example, on-prem Active Directory for IDIR and cloud Active Directory for IDIR - MFA)

**What this means:** You can often find and assign roles to users before their first login.

#### BCeID Constraint

Querying the BCeID Web Service requires a separate approval and service agreement with the IDIM team. The SSO Team does not currently have this agreement, so BCeID user search is more limited than IDIR and IDIR - MFA.

**What this means:** For BCeID integrations, user search in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) can only return users that already exist in Keycloak. CSS cannot search the upstream BCeID directory directly. As a result, you generally cannot pre-assign roles. Users must first log in so Keycloak can create their account and link it to their BCeID identity. After that first login, the user appears in CSS and roles can be assigned.

When assigning roles in CSS, the available user search fields depend on the identity provider (IDP) configured for your integration.

| IDP | Searchable attributes in CSS |
| --- | --- |
| IDIR | First Name, Last Name, Email, Username |
| IDIR - MFA | First Name, Last Name, Email, Username |
| BCeID | Display Name, Username, Email, IDP GUID |
| GitHub BC Gov | Name, Login, Email, IDP GUID |
| BC Services Card | Not searchable |
| Digital Credential | Not searchable |

### Why Some IDPs Are Not Searchable

For **BC Services Card** and **Digital Credential**, CSS cannot search users because user profile attributes are not retained in Keycloak for these IDPs.

> If your integration relies on role assignments through user lookup, use an IDP that supports searchable attributes.

### What happens when you assign a role pre-login?

For IDIR and IDIR - MFA IDP(S), if an user does not exist in Keycloak, [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) imports the user first (for example from, on-prem Active Directory for IDIR and cloud Active Directory for IDIR - MFA) and then assigns the role.

### Why teams use this

- Enables day-one access for new users
- Reduces onboarding delays
- Avoids "first login succeeded but no permissions" support issues
