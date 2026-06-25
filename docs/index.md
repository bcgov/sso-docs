---
sidebar_position: 1
slug: /
---

# Introduction

Welcome to the documentation for the BC Government **Single Sign-On (SSO) Service** — a shared, self-serve identity and access management platform built on [RedHat Build Of Keycloak](https://access.redhat.com/products/red-hat-build-keycloak/) and powered by the [OpenID Connect (OIDC)](https://openid.net/connect/) and [SAML 2.0](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html) protocols.

## What is SSO?

The **Single Sign-On (SSO) service** is a cloud-native identity and access management solution designed for BC Government digital product teams building modern web and mobile applications. It acts as a shared platform component, allowing teams to fully offload authentication and user security compliance — so they can focus on their core application features rather than building and maintaining login infrastructure.

At its core, the service uses **Keycloak as an identity broker**. Rather than authenticating users directly, Keycloak federates authentication requests to [supported identity providers (IDPs)](#supported-identity-providers). This means your application only ever communicates with Keycloak — Keycloak handles the trust relationships and protocol translations with each upstream IDP on your behalf.

When a user authenticates through a particular IDP, Keycloak establishes a session tied to that IDP. If the same user accesses another application that is integrated with SSO and configured to use the same IDP, Keycloak recognises the active session and grants access without prompting the user to log in again — providing true **Single Sign-On** across all participating applications.

## Supported Identity Providers

The SSO service supports a range of identity providers (IDPs) to cover different user populations — from government employees and contractors to BC residents and businesses:

| Identity Provider       | Use Case                                               |
| ----------------------- | ------------------------------------------------------ |
| **IDIR**                | BC Government employees and contractors                |
| **Azure IDIR**          | IDIR accounts federated through Azure Active Directory |
| **Basic BCeID**         | BC residents with a basic BCeID account                |
| **Business BCeID**      | Organizations transacting with government              |
| **BC Services Card**    | BC residents using the BC Services Card app            |
| **Digital Credential**  | Verifiable credential-based authentication             |
| **GitHub BC Gov**       | BC Government GitHub organization members              |
| **One-Time Passcode**   | Any user with a valid email address                    |

> **Note:** In line with the BC Government's MFA Everywhere policy **IDIR is no longer available for new integrations**. Teams requiring employee authentication should use **Azure IDIR** instead, which enforces MFA by default. Existing IDIR integrations continue to function and are not affected.

Many times, our clients ask, which identity provider should we use for our product. We can't really make that decision for you and with our partners, can refer you to a few helpful links

* [ID services](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/id-services)
* [Compare ID services by who uses your service](https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/id-services/compare-people)

## Features

### Self-serve integration provisioning

Request and manage OIDC or SAML integrations through the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) without involving the SSO team for routine changes.

### Multi-IDP federation

Broker authentication across IDIR, Azure IDIR, BCeID (Basic and Business), BC Services Card, Digital Credential, and GitHub BC Gov from a single integration.

### Standard and Custom Service Options

Use the shared Standard Realm for most use cases, or request a Custom Realm for teams with unique IDP, protocol, or policy requirements.

### OIDC Authorization Code Flow with PKCE

Industry-standard secure login flow for web and mobile applications, with PKCE enforced for public clients.

### Service account support

Machine-to-machine authentication via the OAuth 2.0 Client Credentials Flow for backend integrations that do not involve a human user.

### Role-based access control (RBAC)

Define roles per integration and assign users to roles through the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) or [CSS API](https://api.loginproxy.gov.bc.ca/openapi/swagger/); roles are included in the access token for your application to consume.

### Configurable token and session lifetimes

Adjust access token lifespan, refresh token lifespan, and session maximums per integration to match your application's security requirements.

### Token signature validation

All tokens are signed with realm-specific keys and exposed via JWKS endpoints, enabling your application to verify token integrity without a network call to Keycloak.

### Programmatic management via CSS API

Automate user and role management using the RESTful [CSS API](https://api.loginproxy.gov.bc.ca/openapi/swagger/), secured with a dedicated API account.

### High Availability

The SSO service is deployed across a primary and a secondary site. In the event of a primary site failure, traffic is automatically redirected to the secondary site, ensuring continued availability of authentication for all integrated applications with minimal disruption.

## Limitations

The SSO service is shared across many teams and applications. Most use cases are well-supported, but the following scenarios may require direct IDP integration:

### High Volume Expectations

If your application expects millions of login requests, direct IDP integration may be more appropriate. The shared SSO platform has resource limits, and excessive traffic from a single client can degrade service for all integrated applications.

### BC Services Card

BC Services Card is available for OIDC and SAML clients. However, user personal information is not stored in the Keycloak database for security and privacy reasons. This means:

- **No Role Management** — roles cannot be assigned without persistent user data.
- **No Single Sign-On** — each application requires separate user authentication and consent, even if a user has an active BC Services Card session elsewhere.

### Digital Credentials

Digital Credentials are available **only for OIDC clients** (SAML is not supported). Like BC Services Card, user attributes are not retained after authentication to prioritize privacy. This results in:

- **No Role Management** — no persistent user data means roles cannot be managed.
- **No Single Sign-On** — users must authenticate separately for each application.

## Quickstart

You should be a **product owner, product admin, or technical team lead** for the project before submitting a request, as you will be responsible for managing the integration lifecycle.

Requesting integration is **fully self-serve** process and typically takes minutes:

1. Sign in to [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) with your **IDIR with MFA** enabled account.
2. Request a new integration by selecting your target IDP(s), environments (dev / test / prod), and the valid redirect URIs for your application.
3. Carefully read and accept the Terms Of Use (TOU) and submit the integration request
4. Once provisioning is complete, your client credentials are available securely through the CSS Application.

For a step-by-step walkthrough, see the [CSS Guide](./css-application/introduction.md#raising-an-integration-request).

## Hosting on BCGov Private Cloud (OpenShift)?

If your application runs on the BC Government's OpenShift-based Private Cloud Platform, visit [BCGov Private Cloud PaaS](https://cloud.gov.bc.ca/private-cloud) for platform-specific guidance on deploying containerized workloads alongside CSS integrations.

## Support and Contact

Many development teams have gone through similar processes in exploring SSO integration with their applications. When you have questions or issues, it is highly likely that someone in the community has had a similar experience previously. These issues may already have a solution or are actively resolving. Here are some ways to get SSO help:

- **FAQ(S)** - The SSO team tracks some frequently asked questions and with answers are made available through the following [FAQ(S)](./category/frequently-asked-questions) link
- **Microsoft Teams** — [Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) (preferred for quick questions)
- **Email** — [bcgov.sso@gov.bc.ca](mailto:bcgov.sso@gov.bc.ca)
