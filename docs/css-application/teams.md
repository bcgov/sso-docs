---
sidebar_position: 6
description: Learn about CSS teams and member roles
tags:
  - css
  - css-team
---

# Teams & Members

CSS allows users to be able to create teams and add members with a designated role. Teams allow users to grant access to other individuals to their integrations and this is useful in multiple scenarios. Currently two member roles are supported and they are `Admin` and `Member`

- No dependency on a single resource for managing the integration
- Clear distinction of duties by the role
- One or many integrations can belong to a team rather than to one single individual

## How do I create a team?

There are two ways to create teams within the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/).

Method 1: Under `My Dashboard`, select `My Teams` tab, and select the `+Create a New Team” button`

Method 2: Go to the `My Projects` tab, select `+Request SSO Integration`, and enable `Project Team` and click on `Create a New Team (optional)` text

## How to add members?

- When you create a Team, you are automatically assigned an `Admin` role. As an Admin, your permissions let you manage both Integrations and Teams.

- You can add other members to your team with either `Admin` or `Member` role. The key difference is that Admins can manage teams and Members cannot.

- To add a new Team member, Admins must use a government email address, to ensure the user can login to [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/). Once an invitation is sent, the new team member have 2 business days to login to the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) to be added to the team. If the team member is unable to accept the invitation within this time period, their invitation link will expire. In this case, Admins can resend the invitation link

- Admin can also change the role after a member was added with incorrect role

## Allowed Actions by Role

Each role has specific set of actions allowed for managing different aspects of your integration

### Integration Management

When creating a team, you can assign this team to one integration, or several integrations. This will allow all users on the team to view and manage the integration. Here's a table to show the difference between what a **Team Admin** and a _**Team Member**_ can do with an integration:

| Managing Integration(s) Function | Admin Role | Team Member Role |
| ----------- | ----------- | ----------- |
| Create | **Admin** | _**Team Member**_ |
| View | **Admin** | _**Team Member**_ |
| Edit   | **Admin** | _**Team Member**_ |
| Delete| **Admin** | N/A     |

### Team Management

Here's a table to show the difference between what an Admin and a Member can do with a Team:

| Managing Team(s) Function | Admin Role | Team Member Role |
| ----------- | ----------- | ----------- |
| Create Team Name and Membership| **Admin** | N/A |
| View Team Name and Members | **Admin** | _**Team Member**_ |
| Edit Team Name | **Admin** | N/A |
| Delete Team | **Admin** | N/A  |
| Assign Team Members | **Admin** | N/A  |
| Unassign Team Members | **Admin** | N/A  |

### Integration Role Management

When creating an integration, some teams may want to create roles associated to the integration. Only an **Admin** can create roles and once the roles are created, Admins and Members can assign users to the role.

| Managing Roles Associated to Integration  Function | Admin Role | Team Member Role |
| ----------- | ----------- | ----------- |
| Create Role Name| **Admin** | N/A |
| View Role Name | **Admin** | _**Team Member**_ |
| Edit Role Name | **Admin** | N/A |
| Delete Role Name | **Admin** | N/A  |

| Assigning Users to Roles Associated to Integration Function | Admin Role | Team Member Role |
| ----------- | ----------- | ----------- |
| Assign User to Role | **Admin** | _**Team Member**_ |
| View Users of a specific Role | **Admin** | _**Team Member**_ |
| Unassign User to Role | **Admin** | _**Team Member**_ |

### Managing Access to CSS API Account

**Admins** can also create a [CSS API Account](./css-app-api.md) for a team, which will allow you to interact with CSS in a RESTful way for both user and role management.

| Managing Access to CSS API Function | Admin Role | Team Member Role |
| ----------- | ----------- | ----------- |
| Create API Account| **Admin** | N/A |
| View/Download API Account | **Admin** |  N/A |
| Delete API Account | **Admin** | N/A |

## Orphaned Teams

If you are the last Admin on a team, CSS will not allow you to modify your own role or remove yourself from the team. If your IDIR account is deactivated — for example, due to a change in employment status — your CSS account will also be removed. This can leave the team in an orphaned state with no active Admin.

When this happens, the SSO team will assign temporary Admin permissions to an SSO owned user account and work with your brach or division to identify the right individual to take over Admin responsibilities for the team.
