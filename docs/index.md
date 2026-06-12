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

> **Note:** In line with the BC Government's MFA Everywhere policy **IDIR is no longer available for new integrations**. Teams requiring employee authentication should use **Azure IDIR** instead, which enforces MFA by default. Existing IDIR integrations continue to function and are not affected.

## Quickstart

You should be a **product owner, product admin, or technical team lead** for the project before submitting a request, as you will be responsible for managing the integration lifecycle.

Requesting integration is **fully self-serve** process and typically takes minutes:

1. Sign in to [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) with your **IDIR with MFA** enabled account.
2. Request a new integration by selecting your target IDP(s), environments (dev / test / prod), and the valid redirect URIs for your application.
3. Carefully read and accept the Terms Of Use (TOU) and submit the integration request
4. Once provisioning is complete, your client credentials are available securely through the CSS Application.

For a step-by-step walkthrough, see the [Getting Started guide](./getting-started/css-app.md).

## Hosting on BCGov Private Cloud (OpenShift)?

If your application runs on the BC Government's OpenShift-based Private Cloud Platform, visit [BCGov Private Cloud PaaS](https://cloud.gov.bc.ca/private-cloud) for platform-specific guidance on deploying containerized workloads alongside CSS integrations.

## Support and Contact

Have questions or need help? The SSO team is available through:

- **Microsoft Teams** — [Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) (preferred for quick questions)
- **Email** — [bcgov.sso@gov.bc.ca](mailto:bcgov.sso@gov.bc.ca)
