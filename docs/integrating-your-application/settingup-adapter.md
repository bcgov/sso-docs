---
sidebar_position: 5
title: Client Setup With an Adapter
description: Learn how to set up your OpenID connection if you are using an adapter/library.
---

## Using a Client With an Adapter

Once you have downloaded your `Installation JSON`, you can configure your application quickly using a Keycloak adapter or a standards‑based OpenID Connect (OIDC) client library. Keycloak provides adapters for several languages, including Java, JavaScript, and .NET (C#).

In most cases, no additional configuration is required beyond the Installation JSON generated during the request process.
Keycloak and the community also provide example applications that demonstrate common integration patterns, including authentication, token handling, and logout flows.
For more details on what the Installation JSON contains and how it is used, see [installation-json](installation-json).


## Our Guidance on Libraries and Adapters

We regularly evaluate existing OIDC client libraries to decide which technologies to reference and which example applications to maintain for our client teams.

Libraries are evaluated using the following criteria::

- **Actively maintained?** - Evidence of recent commits, releases, or issue resolution.
- **Meets required feature set** - Supports standard OIDC authorization flows and Keycloak‑specific parameters (for example, kc_idp_hint).
- **Popularity** - Relative adoption based on community usage (for example, approximate weekly downloads).
- **Open source** - Source code is publicly available and community‑reviewable.
- **PCKE Support** - Required for modern, secure public‑client implementations.
- **SPA compatibility** - Suitable for single‑page application (SPA) architectures where applicable.
- **Comments** - Notable limitations, use cases, or ecosystem considerations.

**Note**
Popularity values are approximate and change over time. They are provided for comparison only and should not be the sole factor in library selection. Data collected as of May 2026

### JavaScript

| Library                                                                            | Being Maintained? | Meets Feature Set | Popularity (~ weekly)    | Open Source | PKCE Support | SPA Support | Comments                                   |
| ---------------------------------------------------------------------------------- | ----------------- | ----------------- | -------------- | ----------- | ---------------- | -------------- | ------------------------------------------ |
| [passport-keycloak-bearer](https://www.npmjs.com/package/passport-keycloak-bearer) | &#10004;          | &#10004;          | ~500   | &#10004;    | &#10004;         | &#10004;       |                                            |
| [oidc-client-ts](https://authts.github.io/oidc-client-ts/)                         | &#10004;          | &#10004;          | ~35k-40k  | &#10004;    | &#10004;         | &#10004;       |
| [sso-express](https://www.npmjs.com/package/@bcgov-cas/sso-express)                | &#10004;          | &#10004;          | ~100-150    | &#10004;    | &#10004;         | &#10004;       | Being used by some community teams.        |
| [openid-client](https://www.npmjs.com/package/openid-client)                       | &#10004;          | &#10004;          | ~300k-900k| &#10004;    | &#10004;         |                | For Node.js only.                          |
| [keycloak-js](https://www.npmjs.com/package/keycloak-js)                           | &#10004;          | &#10004;          | ~90k-120k | &#10004;    | &#10004;         | &#10004;       | Keycloak supported in their documentation. |

### TypeScript

| Library                                                             | Being Maintained? | Meets Feature Set | Popularity (~ weekly)    | Open Source | PKCE Support | SPA Support | Comments                                                         |
| ------------------------------------------------------------------- | ----------------- | ----------------- | -------------- | ----------- | ---------------- | -------------- | ---------------------------------------------------------------- |
| [oidc-client-ts](https://authts.github.io/oidc-client-ts/)          | &#10004;          | &#10004;          | ~35k-40k  | &#10004;    | &#10004;         | &#10004;       |                                                                  |
| [sso-express](https://www.npmjs.com/package/@bcgov-cas/sso-express) | &#10004;          | &#10004;          | ~100-150    | &#10004;    | &#10004;         | &#10004;       | Being used by some community teams. Works for TypeScript.        |
| [keycloak-js](https://www.npmjs.com/package/keycloak-js)            | &#10004;          | &#10004;          | ~90k-120k | &#10004;    | &#10004;         | &#10004;       | Keycloak supported in their documentation. Works for TypeScript. |

### C#/.Net

| Library                                                                               | Being Maintained? | Meets Feature Set | Popularity (~ weekly) | Open Source | PKCE Support | SPA Support | Comments |
| ------------------------------------------------------------------------------------- | ----------------- | ----------------- | ---------- | ----------- | ---------------- | -------------- | -------- |
| [IdentityModel.OidcClient](https://github.com/IdentityModel/IdentityModel.OidcClient) | &#10004;          | &#10004;          | N/A        |             | &#10004;         |                |          |

### Python

| Library                                                                                | Being Maintained? | Meets Feature Set | Popularity (~ weekly)  | Open Source | PKCE Support | SPA Support | Comments |
| -------------------------------------------------------------------------------------- | ----------------- | ----------------- | ----------- | ----------- | ---------------- | -------------- | -------- |
| [JWTConnect-Python-OidcRP](https://github.com/IdentityPython/JWTConnect-Python-OidcRP) | &#10004;          | &#10004;          | ~400 | &#10004;    | &#10004;         | &#10004;       |          |
| [pyoidc](https://github.com/OpenIDC/pyoidc/)                                           | &#10004;          | &#10004;          | N/A         | &#10004;    | &#10004;         | &#10004;       |          |

### Java

| Library                                                                                           | Being Maintained? | Meets Feature Set | Popularity         | Open Source | PKCE Support | SPA Support | Comments |
| ------------------------------------------------------------------------------------------------- | ----------------- | ----------------- | ------------------ | ----------- | ---------------- | -------------- | -------- |
| [Spring Security](https://www.baeldung.com/spring-security-openid-connect)                        | &#10004;          | &#10004;          | Very high | &#10004;    | N/A              |                |          |
| [SpringBoot ](https://www.keycloak.org/docs/latest/securing_apps/index.html#_spring_boot_adapter) | &#10004;          | &#10004;          | Very high | &#10004;    | N/A              |                |          |

### AngularJS

| Library                                                                           | Being Maintained? | Meets Feature Set | Popularity (~ weekly)    | Open Source | PKCE Support | SPA Support | Comments |
| --------------------------------------------------------------------------------- | ----------------- | ----------------- | ------------- | ----------- | ---------------- | -------------- | -------- |
| [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) | &#10004;          | &#10004;          | ~25k-30k | &#10004;    | &#10004;         | &#10004;       |          |

### Additional Notes

- Libraries being considered which were not maintained are not included in this list.
