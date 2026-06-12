---
sidebar_position: 1
title: Introduction
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

## Accessing the CSS

The [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) is fully self-serve and accessible to BC Government teams. Before getting started, confirm the following with your product owner or technical contact:

**Prerequisites:**

- An IDIR account with MFA enabled
- A role of **product owner**, **product admin**, or **team lead** on the project

Once you have access, you can submit an integration request directly through the CSS. Provisioning is automated and typically completes within minutes. After provisioning, your client credentials — including the client ID and, for confidential clients, the client secret — are available securely within the CSS.
