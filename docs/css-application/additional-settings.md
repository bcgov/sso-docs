---
sidebar_position: 5
title: Additional Settings
description: Learn about token and session lifespans
---

## What are the Additional Settings?

When requesting an integration via the [CSS App](https://sso-requests.apps.gold.devops.gov.bc.ca/), a set of session and token lifetime values are pre-configured for your client. These defaults are carefully chosen to align with BC Government security best practices and are suitable for the majority of applications.

In most cases, no changes are needed. However, if your application has specific requirements — for example, a mobile app that needs users to remain authenticated beyond the default idle timeout — some of these values may need to be adjusted. If you have a valid justification, contact the SSO team and they will guide you through the options.

> **Example:** If you have a mobile application and want users to stay logged in after 30 minutes of inactivity, you may need to use the `offline_access` scope in combination with the Client Offline Session settings below.

The settings below are grouped into two categories:

- **Online sessions** — govern standard browser-based or interactive sessions using regular access and refresh tokens.
- **Offline sessions** — govern long-lived sessions using offline tokens, intended for use cases where the application needs to act on behalf of the user without an active session (e.g., background jobs or mobile apps).

---

### Access Token Lifespan

Defines the maximum lifetime of an **access token** before it expires and must be renewed using a refresh token.

Access tokens should be kept short-lived. A short lifespan limits the window of exposure if a token is leaked or intercepted, as it becomes useless once expired. Your application should handle token expiry gracefully by using the refresh token to obtain a new access token transparently.

**Default:** 5 minutes

---

### Refresh Token Lifespan (Client Session Idle)

Specifies how long a **client session** may remain idle — with no token refresh activity — before it expires. When the idle timeout is reached, the session and all associated tokens (including the refresh token) are invalidated, and the user must log in again.

This value should not exceed the SSO realm's session idle timeout, as the Keycloak session governs the upper bound regardless of the client setting.

**Default:** 30 minutes

---

### Session Max Lifespan (Client Session Max)

Specifies the **absolute maximum lifetime** of a client session, regardless of how active the user is. Once this limit is reached, the session expires and all tokens are invalidated — even if the user has been continuously active.

This setting is useful for enforcing periodic re-authentication for security-sensitive applications. It must not exceed the SSO realm's session maximum.

**Default:** 10 hours

---

### Client Offline Session Idle

Determines how long an **offline client session** may remain idle before it expires. Offline sessions are used in conjunction with the `offline_access` scope and produce offline tokens — long-lived refresh tokens that persist beyond the user's active Keycloak session.

When the offline session idle timeout is reached without any token refresh activity, the offline session is invalidated and all associated offline tokens are revoked. The user must re-authenticate to obtain a new offline token.

This setting is relevant for mobile applications or background services that need to maintain access on behalf of a user over extended periods of inactivity.

**Default:** 30 Days

---

### Client Offline Session Max

Defines the **absolute maximum lifetime** of an offline client session, regardless of activity. Once this limit is reached, the offline session is invalidated and all offline tokens are revoked. The user must authenticate again to obtain a new offline token.

This acts as a hard expiry for long-lived offline access, ensuring that delegated access cannot persist indefinitely without the user re-consenting.

**Default:** 60 Days

