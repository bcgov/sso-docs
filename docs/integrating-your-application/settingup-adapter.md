---
sidebar_position: 5
---

# Client setup with an adapter

--- Learn how to set up your OpenID connection if you are using an adapter/library.

## Using a client with an adapter

After having your `Installation JSON`, you can setup your application quickly using the Keycloak adapters/libaries. Keycloak has adapters for a number of languages, including java, javascript and C#. For a list of adapters and instructions on how to connect see here.

There are example applications available to demonstrate integrating with Keycloak here
In most cases, it does not require any additional information than the `Installation JSON` you can download.

More [on understanding the json file](installation-json)

## Our guidance on libraries/adapters

Evaluation of existing OIDC client libraries to select which example apps we should create for our client teams.

We are evaluating on the following criteria:

- **Being maintained?** - Is the library being currently maintained? Recent commits/publish?
- **Meets feature set** - Does the library allow teams to perform auth flows? Will it allow for custom KC params? (kc_idp_hint)
- **Popularity** - How popular is it?
- **Open source** - Is it Open Source?
- **Support for PKCE** - Does it support PKCE?
- **Works for SPAs** - Does the library work for single page applications?
- **Comments** - Relevant comments

### JavaScript

| Library                                                                            | Being Maintained? | Meets feature set | Popularity     | Open source | Support for PKCE | Works for SPAs | Comments                                   |
| ---------------------------------------------------------------------------------- | ----------------- | ----------------- | -------------- | ----------- | ---------------- | -------------- | ------------------------------------------ |
| [passport-keycloak-bearer](https://www.npmjs.com/package/passport-keycloak-bearer) | &#10004;          | &#10004;          | 1889 DL/Week   | &#10004;    | &#10004;         | &#10004;       |                                            |
| [oidc-client-ts](https://authts.github.io/oidc-client-ts/)                         | &#10004;          | &#10004;          | 38550 DL/Week  | &#10004;    | &#10004;         | &#10004;       |
| [sso-express](https://www.npmjs.com/package/@bcgov-cas/sso-express)                | &#10004;          | &#10004;          | 127 DL/Week    | &#10004;    | &#10004;         | &#10004;       | Being used by some community teams.        |
| [openid-client](https://www.npmjs.com/package/openid-client)                       | &#10004;          | &#10004;          | 940475 DL/Week | &#10004;    | &#10004;         |                | For Node.js only.                          |
| [keycloak-js](https://www.npmjs.com/package/keycloak-js)                           | &#10004;          | &#10004;          | 222218 DL/Week | &#10004;    | &#10004;         | &#10004;       | Keycloak supported in their documentation. |

### TypeScript

| Library                                                             | Being Maintained? | Meets feature set | Popularity     | Open source | Support for PKCE | Works for SPAs | Comments                                                         |
| ------------------------------------------------------------------- | ----------------- | ----------------- | -------------- | ----------- | ---------------- | -------------- | ---------------------------------------------------------------- |
| [oidc-client-ts](https://authts.github.io/oidc-client-ts/)          | &#10004;          | &#10004;          | 38550 DL/Week  | &#10004;    | &#10004;         | &#10004;       |                                                                  |
| [sso-express](https://www.npmjs.com/package/@bcgov-cas/sso-express) | &#10004;          | &#10004;          | 127 DL/Week    | &#10004;    | &#10004;         | &#10004;       | Being used by some community teams. Works for TypeScript.        |
| [keycloak-js](https://www.npmjs.com/package/keycloak-js)            | &#10004;          | &#10004;          | 222218 DL/Week | &#10004;    | &#10004;         | &#10004;       | Keycloak supported in their documentation. Works for TypeScript. |

### C#/.Net

| Library                                                                               | Being Maintained? | Meets feature set | Popularity | Open source | Support for PKCE | Works for SPAs | Comments |
| ------------------------------------------------------------------------------------- | ----------------- | ----------------- | ---------- | ----------- | ---------------- | -------------- | -------- |
| [IdentityModel.OidcClient](https://github.com/IdentityModel/IdentityModel.OidcClient) | &#10004;          | &#10004;          | N/A        |             | &#10004;         |                |          |

### Python

| Library                                                                                | Being Maintained? | Meets feature set | Popularity  | Open source | Support for PKCE | Works for SPAs | Comments |
| -------------------------------------------------------------------------------------- | ----------------- | ----------------- | ----------- | ----------- | ---------------- | -------------- | -------- |
| [JWTConnect-Python-OidcRP](https://github.com/IdentityPython/JWTConnect-Python-OidcRP) | &#10004;          | &#10004;          | 400 DL/Week | &#10004;    | &#10004;         | &#10004;       |          |
| [pyoidc](https://github.com/OpenIDC/pyoidc/)                                           | &#10004;          | &#10004;          | N/A         | &#10004;    | &#10004;         | &#10004;       |          |

### Java

| Library                                                                                           | Being Maintained? | Meets feature set | Popularity         | Open source | Support for PKCE | Works for SPAs | Comments |
| ------------------------------------------------------------------------------------------------- | ----------------- | ----------------- | ------------------ | ----------- | ---------------- | -------------- | -------- |
| [Spring Security](https://www.baeldung.com/spring-security-openid-connect)                        | &#10004;          | &#10004;          | N/A (Very popular) | &#10004;    | N/A              |                |          |
| [SpringBoot ](https://www.keycloak.org/docs/latest/securing_apps/index.html#_spring_boot_adapter) | &#10004;          | &#10004;          | N/A (Very popular) | &#10004;    | N/A              |                |          |

### AngularJS

| Library                                                                           | Being Maintained? | Meets feature set | Popularity    | Open source | Support for PKCE | Works for SPAs | Comments |
| --------------------------------------------------------------------------------- | ----------------- | ----------------- | ------------- | ----------- | ---------------- | -------------- | -------- |
| [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) | &#10004;          | &#10004;          | 28000 DL/week | &#10004;    | &#10004;         | &#10004;       |          |

### Additional Notes

- Libraries being considered which were not maintained are not included in this list.
