---
sidebar_position: 2
description: Learn about the different types of client authentication
tags:
  - css
  - client-types
---

# Types of Client Authentication

## Overview

When integrating with the SSO service, your application will authenticate in one of three ways depending on its architecture and purpose:

| Use Case | Who authenticates | OAuth 2.0 / OIDC Flow | Client Type Required |
| --- | --- | --- | --- |
| **Browser Login** | An end user via a browser | Authorization Code Flow (+ PKCE for public clients) | Public or Confidential |
| **Service Account** | The application itself (no user) | Client Credentials Flow | Confidential |
| **Browser Login and Service Account** | Both end users and the application | Authorization Code Flow + Client Credentials Flow | Confidential |

Each use case maps to a specific OAuth 2.0 grant type supported by Keycloak. Choosing the right configuration ensures that your application requests only the tokens it needs and follows the principle of least privilege.

---

## Browser Login

A browser-based application that requires an interactive user login. This is the most common use case for web and mobile applications integrating with the SSO service.

From a client perspective, the application initiates the **Authorization Code Flow** by redirecting the user's browser to Keycloak's authorization endpoint. After the user authenticates with their chosen IDP (e.g., IDIR, BCeID, or BC Services Card), Keycloak redirects back to the application with an authorization code. The application then exchanges this code for an **ID token**, **access token**, and **refresh token**.

- The **ID token** is used to establish the user's session within the application.
- The **access token** is used to call protected APIs on behalf of the user.
- The **refresh token** allows the application to silently renew the access token without requiring the user to log in again.

This use case requires a **public** or **confidential** client depending on whether the application has a secure back end. Public clients (e.g., SPAs) must use PKCE; confidential clients authenticate using a client secret during the token exchange.

---

## Service Account

A service account is a non-human (digital) identity used by an application or automated process to authenticate and interact with other systems — without any user involvement. This is suited for machine-to-machine (M2M) scenarios such as back-end API integrations, scheduled jobs, or microservice communication.

From a client perspective, the application uses the **Client Credentials Flow** (an OAuth 2.0 grant type). The client authenticates directly with Keycloak's token endpoint using its `client_id` and `client_secret`, and receives an **access token** in return. There is no user redirect, no authorization code, and no ID token — only an access token scoped to the service itself.

- This use case requires a **confidential client**, as a client secret is mandatory for the Client Credentials Flow.
- The access token is used to call downstream APIs or services that trust Keycloak-issued tokens.
- Refresh tokens are not issued in this flow; the application simply requests a new access token when the current one expires.

Service accounts are managed and enabled through the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) when configuring your integration.

---

## Browser Login and Service Account

A hybrid configuration that enables both interactive user login and service-to-service authentication within the same Keycloak client. This is useful when an application needs to authenticate end users via the browser while also making authenticated back-end calls to other services using its own identity.

From a client perspective, this combines both flows:

- **Authorization Code Flow** (with or without PKCE) for user-facing browser login, producing ID tokens, access tokens, and refresh tokens tied to the authenticated user.
- **Client Credentials Flow** for back-end service calls, producing access tokens scoped to the application itself.

This use case requires a **confidential client** to support the Client Credentials Flow. The same client ID is used for both flows, but the tokens issued differ in their claims and intended audience depending on which flow was used.
