---
sidebar_position: 1
description: How to grant admin permissions
---

# Grant Admin Permissions

When the SSO team provisions your Custom Realm, they create the initial realm administrator accounts for **product owner**, **technical contact**, and **secondary technical contacts** and give you access via the **master realm console**. From that point, your team is responsible for provisioning all future realm administrators.

**Understanding the two admin console URLs:**

| Console | URL Pattern | When to Use |
| --- | --- | --- |
| **Master console** | `https://<env>.loginproxy.gov.bc.ca/auth/admin/master/console/#<your-realm>` | Required for initial setup and for adding admins before the realm's own IDP is configured. |
| **Realm console** | `https://<env>.loginproxy.gov.bc.ca/auth/admin/<your-realm>/console/` | Standard day-to-day admin URL once your IDP is configured. |

**Environment base URLs:**

| Environment | Base URL |
| --- | --- |
| DEV | `https://dev.loginproxy.gov.bc.ca` |
| TEST | `https://test.loginproxy.gov.bc.ca` |
| PROD | `https://loginproxy.gov.bc.ca` |

**Steps to add a new Realm Administrator:**

1. **Ensure your IDP is configured.** If it is not yet set up, follow the [IDP setup guide](https://stackoverflow.developer.gov.bc.ca/questions/864) with particular attention to step 2 before proceeding.

2. **Import the new admin's user account into the realm.** Ask the new admin to visit the realm console URL for their target environment and log in:
   ```
   https://<env>.loginproxy.gov.bc.ca/auth/admin/<your-realm>/console/
   ```
   They will see a **Forbidden** message — this is expected. The login attempt creates their user record in the realm's user store, which is required before they can be assigned to a group.

3. **Add the user to the Realm Administrator group.** An existing Realm Administrator logs in to the master console:
   ```
   https://<env>.loginproxy.gov.bc.ca/auth/admin/master/console/#<your-realm>
   ```
   Navigate to **Users**, find the newly imported user, open their **Groups** tab, and assign them to the **Realm Administrator** group.

4. **Verify access.** The new admin can now log in to the realm console and will have full administrative access:
   ```
   https://<env>.loginproxy.gov.bc.ca/auth/admin/<your-realm>/console/
   ```

> **If a new admin needs access before the IDP is configured:** They can only be added via the master console. Contact the SSO team if you require assistance.

> **Repeat for each environment.** The above steps must be performed separately for DEV, TEST, and PROD — user accounts and group memberships are not shared between environments.