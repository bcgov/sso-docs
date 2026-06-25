---
sidebar_position: 4
tags:
  - SSO
---

# SSO

---

## What is the SSO configuration endpoint for my app?

Use the Keycloak discovery endpoint for the environment you are targeting. The discovery URL provides the authorization, token, and related endpoints your application needs.

---

## How do I skip the standard login page and go directly to an IDP?

Use the `idpHint` query parameter to send the user directly to a specific identity provider. This is the supported way to customize the login path.

```js
// Initialize the Keycloak instance
const keycloak = new Keycloak({
  url: 'https://<sso-keycloak-server>/auth',
  realm: 'standard',
  clientId: 'your-client-id'
});

keycloak.init({ onLoad: 'check-auth' }).then((authenticated) => {
  if (!authenticated) {
    // Force redirect directly to a specific provider
    keycloak.login({
      idpHint: 'google' // Matches the 'Alias' configured in your Keycloak admin console
    });
  }
});

```

---

## Can vendor-built applications use SSO service?

Yes. The SSO service is available to BC Government applications whether they are built in-house or by a vendor. The key requirement is that the request comes from a valid BC Government team with an IDIR-backed requestor.

---

## Can I implement SSO in plain JavaScript?

Yes. For browser-based apps, you can use the `keycloak-js` library directly without requiring a framework-specific wrapper.

---

## How should I secure a frontend and backend application?

For an SPA plus API pattern, use a public client in the frontend, send the user token to the backend, and validate the token signature, expiry, issuer, and audience on the server side.

---

## What are the discovery endpoints for the SSO product?

The discovery endpoints are the following:

| environment | URI |
|---|---|
| dev | https://dev.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration |
| test | https://test.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration |
| prod | https://loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration|

---

## Where can I find the public key for the BC Government's SSO instances?

You can find the public keys for the standard realm at the following links:

| environment | URI |
|---|---|
| dev | https://dev.loginproxy.gov.bc.ca/auth/realms/standard |
| test | https://test.loginproxy.gov.bc.ca/auth/realms/standard |
| prod | https://loginproxy.gov.bc.ca/auth/realms/standard |

For custom realms, the link format is the following:

| environment | URI |
|---|---|
| dev | https://dev.loginproxy.gov.bc.ca/auth/realms/[YOUR-CUSTOM-REALM-ID] |
| test | https://test.loginproxy.gov.bc.ca/auth/realms/[YOUR-CUSTOM-REALM-ID] |
| prod | https://loginproxy.gov.bc.ca/auth/realms/[YOUR-CUSTOM-REALM-ID] |