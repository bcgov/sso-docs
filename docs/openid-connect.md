---
sidebar_position: 1
---

# OpenID Connect

## What is OpenID-Connect?

OpenID Connect (OIDC) is an identity layer built on top of the OAuth 2.0 protocol. It allows applications to verify the identity of end-users based on authentication performed by an authorization server, and to obtain basic profile information about users in an interoperable and REST-like manner.

Keycloak acts as an OIDC-compliant identity provider (IDP) within the SSO service. When a user attempts to access a protected application, Keycloak handles the authentication process and issues tokens that the application can use to confirm the user's identity and authorize access. This enables centralized authentication across multiple applications without requiring each application to manage credentials directly.

Key concepts in OIDC with Keycloak:

- **ID Token**: A JSON Web Token (JWT) that contains claims about the authenticated user.
- **Access Token**: Used by the application to access protected resources on behalf of the user.
- **Refresh Token**: Allows the application to obtain new access tokens without requiring the user to re-authenticate.
- **Realm**: A Keycloak concept that defines an isolated authentication domain, containing users, roles, and client configurations.
- **Offline Token**: A special long-lived refresh token that allows an application to obtain new access tokens even when the user is not actively logged in. Unlike regular refresh tokens, offline tokens do not expire when the Keycloak session ends — they persist until explicitly revoked or until they reach their configured maximum lifespan. They are intended for use cases such as background jobs or scheduled tasks that need to act on behalf of a user without requiring an active session.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TKU7KycFL2w?si=_vwld-fhrHmnU60r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## What is Authorization Code Flow?

The [Authorization Code Flow](https://auth0.com/docs/authorization/flows/authorization-code-flow) is the recommended OAuth 2.0 / OIDC grant type for applications that need to securely authenticate users and obtain tokens. It is the flow used by all SSO integrations.

To learn more, see [How OIDC Authorization Code Flow works with a public client](https://www.pingidentity.com/en/company/blog/posts/2018/securely-using-oidc-authorization-code-flow-public-client-single-page-apps.html)

### How it works

1. The user clicks "Login" in your application.
2. Your application redirects the user to Keycloak with a request containing your `client_id`, requested `scopes`, and a `redirect_uri`.
3. Keycloak authenticates the user (via IDIR, BCeID, BC Services Card, or another configured identity provider) and, upon success, redirects back to your application with a short-lived **authorization code**.
4. Your application exchanges the authorization code for an **ID token**, **access token**, and optionally a **refresh token** — this exchange happens server-to-server, keeping tokens out of the browser.
5. Your application uses the access token to call protected APIs, and the ID token to establish the user's session.

This flow ensures that user credentials are only ever handled by Keycloak, and that tokens are never exposed in the browser's URL or history.

### Benefits for web applications

- **Tokens stay server-side**: The token exchange happens on the back-end, so access tokens and refresh tokens are never exposed to the browser.
- **Session management**: Keycloak manages the user session centrally. Logging out of one application can propagate to all others sharing the same Keycloak session.
- **Refresh without re-login**: Refresh tokens allow web apps to silently renew access tokens in the background, providing a seamless user experience.

### Benefits for mobile applications

- **PKCE (Proof Key for Code Exchange)**: Mobile apps use the public client variant of Authorization Code Flow with PKCE, which protects against authorization code interception attacks — critical in environments where a client secret cannot be safely stored.
- **No embedded credentials**: The app never handles or stores user passwords; authentication is fully delegated to Keycloak.
- **Deep link redirect support**: Keycloak supports custom URI schemes and app-claimed HTTPS redirect URIs, allowing the authorization response to be securely returned to the mobile app.
- **Cross-platform consistency**: Because OIDC is an open standard, the same flow works across iOS, Android, and cross-platform frameworks, reducing integration complexity.

### What is Keycloak's role?

Within the SSO service, Keycloak acts as an **identity broker** — it does not authenticate users itself, but instead mediates authentication by delegating to [supported identity providers (IDPs)](./index.md#supported-identity-providers). Your application only ever communicates with Keycloak using OIDC; Keycloak handles the underlying trust relationships and protocol translations with each upstream IDP transparently.

Keycloak supports both **OIDC** and **SAML 2.0** client protocols. While SAML is available for legacy or enterprise systems that require it, **OIDC is strongly recommended** for new integrations. OIDC is a modern, lightweight protocol with broad library support across all major languages and frameworks, simpler token handling via JSON Web Tokens (JWTs), and better alignment with current security best practices.

Once a user is authenticated through their chosen IDP, Keycloak issues signed tokens on behalf of your application. These tokens can be validated independently by your application without contacting Keycloak on every request, keeping the authentication flow efficient and loosely coupled from the upstream IDPs.