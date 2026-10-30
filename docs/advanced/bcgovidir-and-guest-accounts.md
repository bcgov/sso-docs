---
sidebar_position: 5
title: BCGOV IDIR and Guest Accounts
description: BC Government IDIR login with MFA and support for authorized guest accounts.
tags:
  - idir
  - identity-provider
  - mfa
---

## Overview

All BC government employees and approved contractors use their IDIR account to sign in to work devices, internal networks, and government applications. IDIR authentication is available through two platforms:

- **On-premises Active Directory via SiteMinder** (the `idir` identity provider)
- **Microsoft Entra ID**, formerly Azure Active Directory (the `azureidir` and `bcgovidir` identity providers)

The SiteMinder-based IDIR login provides basic username and password authentication only. It does not support additional verification methods such as Multi-Factor Authentication (MFA), nor does it provide modern identity governance capabilities such as web services security, lifecycle and access request management, access reviews and certification, or privileged account management.

Microsoft Entra ID is Microsoft's cloud-based identity and access management platform. Its core purpose is to verify identities, control access permissions, protect digital resources, and detect and respond to security threats. In addition to standard sign-in, it supports MFA through a variety of methods (for example, the Microsoft Authenticator app, phone call, or text message) and offers a broad set of identity governance features, including:

- **Guest accounts** – allow authorized external users (such as partners or vendors outside the BC government) to access government applications using their own credentials.
- **Access packages** – bundle the groups, applications, and resources a user needs so that access can be requested, approved, and assigned as a single unit.
- **Time-based access grants and revocations** – assign access for a defined period, after which it expires automatically, reducing the risk of lingering or forgotten permissions.

## Guest Accounts

### What is a guest user?

A guest user is an external person who has been invited to collaborate within the BC Government's Microsoft Entra ID tenant. Guest users are typically:

- Business partners
- Contractors and consultants
- Vendors and suppliers
- Customers or other external stakeholders

Guest users have more limited access than internal IDIR users, but they can still securely access the specific resources and applications that have been shared with them.

### Key characteristics

- **External identity** – Guests sign in with their own existing credentials, such as a personal Microsoft account or an account from their own organization's Entra ID tenant. They do not need a separate BC Government password.
- **Controlled access** – Access is granted only through an invitation, and permissions are scoped to what the guest needs.
- **Collaboration** – Guests can take part in Microsoft Teams, SharePoint sites, integrated applications, and other shared resources.
- **Governance** – Guest accounts are subject to the same governance controls as internal accounts, including Conditional Access policies, MFA, and periodic access reviews.

### How guests are invited

Guest users can be invited through any of the following channels:

- The Azure / Microsoft Entra admin portal
- Sharing from Microsoft Teams or SharePoint
- Automation using PowerShell or the Microsoft Graph API

### Invitation process

1. The guest receives an email invitation to join the BC Government tenant.
2. The guest accepts the invitation and signs in with their existing external credentials.
3. A guest account is created in the BC Government tenant and linked to the guest's external identity.

### Security controls

The following controls are applied to guest accounts to protect government resources:

- **Conditional Access** – Policies such as mandatory MFA and location-based restrictions are enforced at sign-in.
- **Access reviews** – Guest access is reviewed periodically (every 180 days) to confirm it is still required. Access that is no longer needed is removed.
- **Role and permission management** – Guests are assigned only the minimum permissions they need (least privilege).
- **Monitoring and auditing** – Guest sign-ins and activities are logged and monitored.

### Common use cases

- **Partner collaboration** – Working with external partners on shared projects.
- **Vendor access** – Giving vendors access to procurement or other business systems.
- **Customer support** – Giving customers access to support portals.
- **Temporary engagements** – Granting time-limited access to consultants for the duration of a contract.


## How is bcgovidir different from azureidir?

Both `azureidir` and `bcgovidir` are Microsoft Entra ID–based identity providers offered by the SSO service. `bcgovidir` is the newer of the two and was introduced to address several limitations of the `azureidir` integration model.

### How azureidir works?

With `azureidir`, the SSO team federates authentication from many Keycloak clients through a **single, shared app registration** in Microsoft Entra ID. This made integration simple for digital product teams, but it introduced several drawbacks:

- **No per-application visibility in Entra ID** – Every authentication request reaches Microsoft Entra ID from the same shared app registration, regardless of which application started the login. Only Keycloak knows which client application the user is actually signing in to.
- **No per-application security policies or auditing** – Because Entra ID cannot tell applications apart, Conditional Access policies, sign-in logs, and audits cannot be applied or reviewed on an app-by-app basis.
- **No support for Entra ID governance features** – Features such as access packages and access reviews cannot be scoped to individual applications.
- **No support for guest users** – Keycloak uses the BCGOV GUID as the unique identifier to create the local user account during federated login. Guest users do not have a BCGOV GUID, so they cannot sign in through `azureidir`.

### How bcgovidir addresses these issues?

- **One app registration per Keycloak client** – Each client integrated with `bcgovidir` gets its own dedicated app registration in Microsoft Entra ID. This gives Entra ID full visibility into each application and allows security policies, Conditional Access, auditing, access packages, and access reviews to be managed per application.
- **Guest user support** – Keycloak uses the Entra ID object identifier (`oid`) claim, rather than the BCGOV GUID, as the subject identifier when creating local user accounts. Because every Entra ID user, including guests, has an `oid`, guest users can now sign in.
- **BCGOV GUID still available** – For BC Government employees, the BCGOV GUID is still included in Keycloak tokens in the `idir_user_guid` claim. For guest users, this claim is `null`.

:::note
If your application relies on `idir_user_guid` to identify users, make sure it handles a `null` value for guest accounts. Use the subject identifier (based on `oid`) as the stable unique identifier for all `bcgovidir` users.
:::
