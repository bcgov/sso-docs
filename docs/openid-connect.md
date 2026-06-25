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

## Terminology

This section covers general terms used throughout this documentation.

Here's a shortcut to additional [resources and links](#more-resources) for learning about and using this service.

### Authentication

Authentication is the process of verifying who someone is.

### Authorization

Authorization is the process of verifying what specific applications, files, and data an entity has access to. Authorization can be broken into two categories based on the entity being authorized:

- **Client Authorization**: This determines the resources that a client is allowed to access on a user's behalf, and is most often what is meant by Authorization in an OAuth context.

- **User Authorization**: This determines the resources a user is allowed access, and usually applies when the user is interacting directly with the resource server.

User authorization can be implemented in many ways. Our service supports user roles allowing RBAC for robust user authorization. See [Creating and Managing a Role](./css-application/roles.md) for more information on managing roles.

### Identity Provider

An **Identity Provider (IDP)** is the authoritative source for user identity and credentials. Examples include IDIR, BCeID, GitHub, and BC Services Card.

The SSO service itself is **not** an identity provider — it is an identity broker that mediates authentication between your application and the upstream IDPs. When a user logs in:

1. They authenticate directly with their chosen IDP (e.g., entering IDIR credentials).
2. The IDP confirms their identity and returns that information to the SSO service.
3. The SSO service (Keycloak) issues signed tokens to your application proving the user's identity.
4. Your application uses these tokens to establish the user's session.

User credentials are never handled by your application or by Keycloak — they remain under the IDP's control at all times.

### Keycloak

[Keycloak](https://www.keycloak.org/) is an open source identity and access management tool. Our team runs [Redhat Build of Keycloak](https://access.redhat.com/products/red-hat-build-of-keycloak/), a component built on top of keycloak, and this documentation may use the terms interchangeably. [See here](#what-is-openid-connect) for a general overview of how we use keycloak.

### Client

Clients are entities that can request Keycloak to authenticate a user. Most often, clients are applications and services that want to use Keycloak to secure themselves and provide a single sign-on solution. Clients can also be entities that just want to request identity information or an access token so that they can securely invoke other services on the network that are secured by Keycloak. Clients can be either public or confidential:

- **Public Clients** are unable to use registered client secrets, for example applications running in the browser.
- **Confidential Clients** are applications that are able to securely store a client secret, such as server-rendered web applications.

### Realm

A realm manages a set of users, credentials, roles, and groups. A user belongs to and logs into a realm. Realms are isolated from one another and can only manage and authenticate the users that they control.

### Standard Realm

Clients created through our [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) will be configured into the standard realm, which includes a default set of optional IDP's and configurations suitable for most applications. Additional client-level configurations can be made through the webapp.

### Custom Realm

Custom realms are regular keycloak realms, which may be required by some clients who need features not supported in the standard realm. [See here](./advanced/custom-realms/introduction.md#standard-realm-vs-custom-realm) for more information on the difference between standard and custom realms.

## More Resources

### Readings for OAuth 2.0

- [The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [The State Of The Implicit Flow In Oauth2](https://brockallen.com/2019/01/03/the-state-of-the-implicit-flow-in-oauth2/)
- [OAuth 2.0 Threat Model and Security Considerations](https://tools.ietf.org/html/rfc6819)
- [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-13)
- [OAuth 2.0 for Browser-Based Apps](https://tools.ietf.org/html/draft-parecki-oauth-browser-based-apps-02)

### Learn about the OpenID-Connect and OAuth Protocols

- [Example OIDC Applications Repository](https://github.com/bcgov/keycloak-example-apps/tree/dev/examples/oidc)
- [Our videos material from August 2023 Iteration on OIDC Learning ](https://www.youtube.com/playlist?list=PL9CV_8JBQHirMRjBk62jeYUE_MpE4unU8)
- [Powerpoint of OIDC and OAuth](https://github.com/bcgov/sso-keycloak/files/12422946/oidc-oauth-presentationk-beta.pptx)
- [OIDC Primer](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1)
- [SAML2 vs JWT: Understanding OpenID Connect Part 1](https://medium.com/@robert.broeckelmann/saml2-vs-jwt-understanding-openid-connect-part-1-fffe0d50f953)
- [Whats The Difference Between Oauth, Openid Connect And Saml](https://www.okta.com/identity-101/whats-the-difference-between-oauth-openid-connect-and-saml/)
- [SAML2 vs JWT: Understanding OpenID Connect Part 2](https://medium.com/@robert.broeckelmann/saml2-vs-jwt-understanding-openid-connect-part-2-f361ca867baa)
- [How OIDC authorization code flow works with a public client](https://www.pingidentity.com/en/company/blog/posts/2018/securely-using-oidc-authorization-code-flow-public-client-single-page-apps.html)

### Learn about Keycloak and its admin API

- [Redhat Build of Keycloak (Keycloak)](https://access.redhat.com/products/red-hat-build-of-keycloak/)
- [Realm Admin guide](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.6/html/server_administration_guide/index)
