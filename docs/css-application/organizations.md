---
sidebar_position: 9
description: Learn how organizations share access to team integrations
tags:
  - organizations
  - css-api
  - css
---

# Organizations

:::info Coming soon

Organizations will be available in the CSS application soon.

:::

## Overview

Organizations group development teams and provide organization members with shared access to team integrations. When an organization invites a team, it requests one of the following default access levels:

- **Viewer**: View integration data, roles, and role assignments.
- **Editor**: Edit integration data and view or rotate client secrets.
- **Role Manager**: View and edit integration roles and role assignments.
- **Admin**: Full write access to integrations and their roles, including access to client secrets.

The invited team can accept or decline the request. When accepting, the team can reduce the access level for individual integrations. The team's consent determines the access available to organization members and API accounts.

## Example Use Case

An organization may need to manage roles consistently across applications maintained by different development teams. Each team can share its integrations with the organization at the **Role Manager** or **Admin** access level, allowing organization members to manage roles and role assignments across those applications.

The development teams remain separate. Inviting multiple teams to the same organization does not make them members of one another's teams or give them access to one another's integrations. Access is available only to organization members and is limited to the level consented to by each team.

## Create an Organization

To request an organization, contact the SSO team in the [Microsoft Teams Keycloak How-to channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc). An SSO service administrator will create the organization and give you access.

## Invite Members

Organization Admins can invite people to an organization and assign one of two organization roles:

- **Admin**: Add or remove members, invite or remove teams, and create or delete API accounts.
- **Member**: View organization details.

> Organization roles control organization management only. Both Admins and Members can access shared integrations at the access level consented to by each team.

## Invite Teams

1. Open the **Teams** tab.
2. Search for and select a team.
3. Choose the default access level to request.
4. Send the invitation.

The requested default applies to all current team integrations and to integrations added to the team later. When accepting the invitation, the team can reduce the access level for individual integrations.

After the team accepts, the **Teams** tab displays the access level consented to for each integration. The team can change an integration's access level or revoke the organization's access at any time. An organization cannot change a team's consented access; it can only remove the team and send a new invitation.

## Create API Accounts

Organization Admins can create API accounts for an organization. Each account inherits the access level consented to for each integration. See the [CSS API documentation](./css-app-api.md) for details on using API accounts.
