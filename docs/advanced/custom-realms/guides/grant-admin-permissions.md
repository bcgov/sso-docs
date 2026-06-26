---
sidebar_position: 1
description: How to grant admin permissions
tags:
  - custom-realm
  - keycloak-realm-admin
---

# Grant Admin Permissions

When the SSO team provisions your Custom Realm, they create the initial realm administrator accounts for your **product owner**, **technical contact**, and **secondary technical contacts** using the **master console**. After that, your team is responsible for granting admin access to additional users.

This guide explains how to add Realm Administrators safely and consistently across environments.

## Before you begin

- You must already have Realm Administrator access.
- You must know the target environment: DEV, TEST, or PROD.
- You must add an IDP to your realm
- The user seeking admin access should be able to login with that IDP at `https://<env>.loginproxy.gov.bc.ca/auth/admin/<your-realm>/console/`
- Admin access is environment-specific. Repeat these steps separately for DEV, TEST, and PROD.

## Understanding the two admin console URLs

| Console | URL Pattern | When to Use |
| --- | --- | --- |
| **Master console** | `https://<env>.loginproxy.gov.bc.ca/auth/admin/master/console/#<your-realm>` | Required for initial setup and for adding admins before your realm IDP is configured. |
| **Realm console** | `https://<env>.loginproxy.gov.bc.ca/auth/admin/<your-realm>/console/` | Standard day-to-day admin URL after your realm IDP is configured. |

## Environment base URLs

| Environment | Base URL |
| --- | --- |
| DEV | `https://dev.loginproxy.gov.bc.ca` |
| TEST | `https://test.loginproxy.gov.bc.ca` |
| PROD | `https://loginproxy.gov.bc.ca` |

## Choose the right workflow

### If your realm IDP is already configured

Use the **standard workflow** in the next section.

### If your realm IDP is not configured yet

You can only add admins through the **master console**. Follow the fallback workflow under [Adding an admin before IDP setup](#adding-an-admin-before-idp-setup).

## Standard workflow: add a new Realm Administrator

### Step 1: Import the user into the realm

Ask the user to open the realm console URL for the target environment and log in:

```sh
https://<env>.loginproxy.gov.bc.ca/auth/admin/<your-realm>/console/
```

They will see a **Forbidden** message. This is expected.

The login attempt creates the user record in your realm, which is required before group assignment.

### Step 2: Assign Realm Administrator group

An existing Realm Administrator signs in to the master console:

```sh
https://<env>.loginproxy.gov.bc.ca/auth/admin/master/console/#<your-realm>
```

Then:

- Go to **Users**.
- Find and open the newly imported user.
- Open the **Groups** tab.
- Add the user to the **Realm Administrator** group.

### Step 3: Verify access

Ask the new admin to log in again via the realm console:

```sh
https://<env>.loginproxy.gov.bc.ca/auth/admin/<your-realm>/console/
```

They should now have full administrative access.

## Adding an admin before IDP setup

If your realm IDP is not configured yet, perform admin assignment in the master console only.

1. Sign in to the master console for the environment.
2. Locate the target user record.
3. Add the user to **Realm Administrator** group.
4. Confirm access after IDP setup is complete.

If you need help with this pre-IDP scenario, contact the SSO team.

## Important notes

- Access is not shared between DEV, TEST, and PROD.
- Group membership is environment-specific and must be managed separately.
- Keep at least two active Realm Administrators per environment to avoid lockout risk.