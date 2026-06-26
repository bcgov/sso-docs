---
sidebar_position: 1
title: Introduction
tags:
  - css
  - bc-services-card
---

## Overview

The **Common Hosted Single Sign-On (CSS)** self-serve portal is built by SSO team. It provides BC Government digital product teams to request and manage integrations with [supported identity providers (IDPs)](../index.md#supported-identity-providers) without building or operating their own authentication infrastructure.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JBaGxqykXJQ?si=uf6iIM8OoY1Kv-Tf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Standard Service

The CSS creates and manages clients within the **Standard Realm** — a shared Keycloak realm centrally operated by the SSO team. The Standard Realm is pre-configured with settings suitable for the majority of BC Government applications, so teams do not need to manage realm-level configuration themselves. When an integration request is submitted through the CSS, a client is automatically provisioned in this realm. Each client is fully isolated within its own set of credentials and redirect URIs.

The CSS was built to abstract away the complexity of the native Keycloak Admin UI. Rather than requiring teams to learn Keycloak's interface, the CSS provides a focused, purpose-built experience for the most common integration tasks:

- Manage identity providers
- Setting allowed redirect URIs and roles
- Managing team members and their access levels
- Promoting integrations across environments (Development, Test, Production)
- Retrieving client credentials securely

![Overview or SSO Standard Service](/img/keycloak_overview_Dec2023.png)

## Accessing the CSS

The [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) is fully self-serve and accessible to BC Government teams. Before getting started, confirm the following with your product owner or technical contact:

**Prerequisites:**

- An IDIR account with MFA enabled
- A role of **product owner**, **product admin**, or **team lead** on the project

Once you have access, you can submit an integration request directly through the CSS. Provisioning is automated and typically completes within minutes. After provisioning, your client credentials — including the client ID and, for confidential clients, the client secret — are available securely within the CSS.

## Raising an Integration request

1. Sign in to [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/)
2. Click on `+ Request SSO Integration`
3. Under `Requester Info`
   1. Add `Project Name:`, example: Driver's Licensing Portal
   2. Choose the categories of the user base using your application
   3. Optionally create or select a team
   4. You need to be a **product owner** or **technical contact** to proceed further, if yes click `Next`
4. Under `Basic Info`
   1. Select `Protocol`. `OpenID Connect` is recommended for most applications as it is modern and popular
   2. Select `Usecase`. Follow this [guide](./usecases-scenarios.md) to choose right option
   3. Select `Client Type`. Follow this [guide](./client-types.md) to choose right option
   4. Choose appropriate `Identity Providers`
   5. Choose right `Environments`. **Note:** `Development` environment is mandatory and cannot be unchecked
   6. Enter `Additional Role Attribute`, an optional claim that holds roles assigned to the user. This is useful if your application expects a custom claim name instead of `client_roles`. **Note:** This is not available for SAML integrations
   7. Click on `Next`
5. Under `Development`
   1. Use this [guide](../integrating-your-application/login-guide.md) to customize default login page
   2. Add your application URI(S) under `Redirect URIs`
   3. Normally you do not require to modify additional settings but just in case you need to then contact SSO team
   4. Click `Next`
   5. Repeat above steps for other environments
6. Under `Terms and Conditions`, read all the Terms Of Use (TOU) and check `I agree to the Terms and Conditions` and click `Next`
7. Review your integration information and click `Submit`

### BC Services Card

When you opt-in for BC Services Card identity provider, its expected that you have received formal go-ahead from that team and the last step to configure this IDP is through [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/).

After you select `BC Services Card` under `Identity Providers(S)`, you have to choose `Privacy Zone` and `Attributes`. Please refer to this [guide](../advanced/bc-services-card.md#privacy-zones) for more information on privacy zones. If you further need assistance, please reach out to [IDIM](mailto:idim.consulting@gov.bc.ca) team
