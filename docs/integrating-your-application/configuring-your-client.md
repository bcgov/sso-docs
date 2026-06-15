---
sidebar_position: 2
description: Learn how to configure keycloak client with your application
---

# Keycloak Client Setup

## Configuration without using an Adapter

Some teams prefer to integrate with the SSO service without using a Keycloak-specific adapter or third-party OIDC library — for example, when working with a custom framework, a language without a mature OIDC library, or when the team wants full control over the authentication flow without introducing additional dependencies.

In this case, you implement the **Authorization Code Flow** (or **Client Credentials Flow** for service accounts) directly against Keycloak's OIDC endpoints using standard HTTP requests. Because OIDC is built on open standards, all the information you need to do this is published by Keycloak at the **OpenID Provider Configuration Endpoint** for your environment — no proprietary SDK or adapter is required.

At a high level, a manual integration involves:

1. Fetching the OpenID Provider Configuration to discover the relevant endpoints (authorization, token, userinfo, logout, JWKS).
2. Redirecting the user to the `authorization_endpoint` with your `client_id`, `redirect_uri`, `scope`, `response_type=code`, and (for public clients) a PKCE `code_challenge`.
3. Handling the redirect back to your application and extracting the `code` parameter.
4. Exchanging the `code` for tokens by posting to the `token_endpoint`, including your `client_id`, `redirect_uri`, `code`, and (for confidential clients) your `client_secret` or (for public clients) your `code_verifier`.
5. Validating the returned **ID token** (a signed JWT) by verifying its signature against the public keys published at `jwks_uri`, and checking standard claims such as `iss`, `aud`, `exp`, and `iat`.
6. Using the **access token** to call protected APIs, and the **refresh token** to silently renew the session.

Your `client_id` and (for confidential clients) `client_secret` are available in the **Installation JSON** downloaded from the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/). For more details, see [installation JSON](installation-json).

If you have questions or need assistance, reach out to the [SSO team](../index.md#support-and-contact).

### OpenID Provider Configuration

The first step in a manual OIDC integration is fetching the **OpenID Provider Configuration** — a standardised JSON document published by Keycloak that describes all available endpoints and capabilities for the Standard Realm. Rather than hardcoding endpoint URLs in your application, you should read them dynamically from this document at startup or cache them for the lifetime of your application.

As described in the [OpenID Connect Discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#OpenID.Core): OpenID Providers have metadata describing their configuration. These OpenID Provider Metadata values are used by OpenID Connect.

### Configuration Endpoints by Environment

| Environment | URL |
| --- | --- |
| **DEV** | https://dev.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration |
| **TEST** | https://test.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration |
| **PROD** | https://loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration |

Make an HTTP GET request to the appropriate URL for your environment. The response is a JSON object containing all the metadata your application needs.

### Key Endpoints and Their Purpose

Below is a simplified example of the metadata returned, with an explanation of each key field:

```json
{
  "issuer": "https://<env>.loginproxy.gov.bc.ca/auth/realms/standard",
  "authorization_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/auth",
  "token_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token",
  "userinfo_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/userinfo",
  "end_session_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/logout",
  "jwks_uri": "https://<env>.loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/certs"
}
```

| Endpoint | Purpose |
| --- | --- |
| `issuer` | The canonical identifier of the Keycloak realm. Your application must verify that the `iss` claim in every received ID token or access token matches this value exactly. |
| `authorization_endpoint` | The URL your application redirects the user's browser to in order to initiate login. You append query parameters such as `client_id`, `redirect_uri`, `response_type=code`, `scope`, and (for public clients) `code_challenge` and `code_challenge_method`. |
| `token_endpoint` | The URL your application posts to in order to exchange an authorization code for tokens (ID token, access token, refresh token). For confidential clients, include your `client_secret`. For public clients, include your `code_verifier`. Also used to refresh tokens using a `grant_type=refresh_token` request, or to obtain tokens directly for service accounts using `grant_type=client_credentials`. |
| `userinfo_endpoint` | An optional endpoint your application can call with a valid access token to retrieve up-to-date claims about the authenticated user (e.g., name, email, preferred_username). Useful when the access token does not contain all the user attributes your application needs. |
| `end_session_endpoint` | The URL your application redirects the user to in order to log them out of their Keycloak session. Pass `id_token_hint` (the user's ID token) and `post_logout_redirect_uri` so Keycloak can redirect back to your application after logout. |
| `jwks_uri` | The URL that publishes Keycloak's public signing keys as a JSON Web Key Set (JWKS). Your application fetches these keys to cryptographically verify the signature of ID tokens and access tokens. Keys should be cached and only refreshed when an unknown `kid` (key ID) is encountered in a token header. |

Your `client_id` and, for confidential clients, `client_secret` are available in the **Installation JSON** downloaded from the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/). For more details, see [installation JSON](installation-json).

For a complete reference of all available metadata fields and endpoint parameters, see the [Keycloak OIDC documentation](https://www.keycloak.org/securing-apps/oidc-layers)

## Configuration using an Adapter

Once you have downloaded your `Installation JSON`, you can configure your application quickly using a Keycloak adapter or a standards‑based OpenID Connect (OIDC) client library. Keycloak provides adapters for several languages, including Java, JavaScript, and .NET (C#).

In most cases, no additional configuration is required beyond the Installation JSON generated during the request process.
Keycloak and the community also provide example applications that demonstrate common integration patterns, including authentication, token handling, and logout flows.
For more details on what the Installation JSON contains and how it is used, see [installation-json](installation-json).

### Our Guidance on Libraries and Adapters

Before selecting a library or adapter, review the official [Keycloak Securing Applications Guide](https://www.keycloak.org/securing-apps/overview). It provides implementation patterns, security considerations, and language-specific guidance for integrating applications and services.

Use the criteria below to evaluate whether a library is suitable for production use in BC Government environments.

**Evaluation criteria:**

| Criterion | Description |
| --- | --- |
| **Actively maintained** | Evidence of recent commits, releases, or issue resolution. Unmaintained libraries may have unpatched security vulnerabilities. |
| **Meets required feature set** | Supports the Authorization Code Flow and Keycloak-specific parameters such as `kc_idp_hint` for IDP selection. |
| **Popularity** | Approximate weekly downloads as a proxy for community adoption and ecosystem health. Higher adoption generally means better documentation and faster bug resolution. |
| **Open source** | Source code is publicly available and community-reviewable, which is important for security auditing and trust. |
| **PKCE support** | Required for public clients (SPAs, mobile apps). Without PKCE, public clients are vulnerable to authorization code interception attacks. |
| **SPA compatibility** | Suitable for browser-based single-page applications where tokens are handled client-side. |
| **Comments** | Notable use cases, limitations, or ecosystem considerations relevant to BC Government teams. |