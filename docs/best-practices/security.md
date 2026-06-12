---
sidebar_position: 2
title: Security considerations
description: Security best practices
---

## Overview

This guide covers key security practices for integrating your application with the SSO service. Applying these principles from the start will help you avoid common vulnerabilities, protect user credentials, and ensure your application handles authentication correctly in all scenarios.

**What you'll learn:**

- How to secure a confidential client and protect the client secret
- How to structure route-level authentication using a Keycloak adapter
- How to handle publicly accessible pages alongside protected resources

---

## Confidential Client Security

A confidential client requires a **client ID and client secret** to authenticate with Keycloak. These credentials must be treated like passwords — they must never be exposed to the user's browser or included in any client-side code.

### Keep Credentials Server-Side

> **Critical:** The Keycloak adapter for a confidential client must be configured exclusively in a **server-side component**. Any exposure of the client secret on the client side (browser, mobile app, or public repository) is a security breach.

The adapter configuration includes sensitive values such as:

- `client_id` — identifies your application to Keycloak
- `client_secret` — authenticates your application during the token exchange

Both values must be stored securely on the server. See [Do's and Don'ts — Protect the Client Secret](./dos-donts.md#do-protect-the-client-secret) for platform-specific guidance on secret storage.

### Use the Adapter for Route Protection

Unless you have a specific, well-justified reason to implement your own OIDC logic, use the [Keycloak adapter](../integrating-your-application/configuring-your-client.md) to handle authentication. Building a custom OIDC implementation introduces significant risk of subtle security errors.

**How to structure route protection:**

1. **Define public routes** — routes that do not require authentication (e.g., a home page, marketing content, or a login landing page).
2. **Define secured routes** — routes that require an authenticated session (e.g., dashboards, user data, API endpoints).
3. **Invoke the adapter on every secured request** — the adapter must check the user's authentication state on each request to a protected route, not just at login time.

> **Important:** Do not assume that a user who authenticated once is still authenticated on subsequent requests. Sessions can expire, tokens can be revoked, and users can log out from other applications sharing the same realm. Always verify the session state per request on protected routes.

---

## Handling a Publicly Accessible Home Page

Many applications have a home or landing page that is intentionally public — visible to unauthenticated users. This page should **not** trigger the authentication flow automatically.

### Recommended Pattern

A common and user-friendly approach is:

1. Serve the home page as a **public, unauthenticated route** — no adapter invocation, no redirect to Keycloak.
2. Include a **Login button** on the home page that links to or triggers a request to a **secured resource**.
3. When the user clicks Login, the request hits a protected route, the adapter detects there is no active session, and the OIDC authentication flow begins automatically.

This pattern gives users a clear, intentional entry point into the authenticated experience rather than immediately redirecting all visitors to a login page.

> **Note:** All server-side API endpoints and non-public routes must be protected by the Keycloak adapter — not just the UI pages. Unprotected API routes are a common source of unauthorised data access.

---

## Next Steps

- Review the [Do's and Don'ts](./dos-donts.md) guide for a broader set of integration best practices, including token validation, logout handling, and client secret management.
- See [Client Setup with an Adapter](../integrating-your-application/configuring-your-client.md) for implementation guidance for your language or framework.
- See [Client Types](../integrating-your-application/client-types.md) if you are unsure whether your application should use a confidential or public client.
