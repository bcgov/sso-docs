---
sidebar_position: 9
tags:
  - faq
  - keycloak-adapter
  - keycloak
description: Troubleshooting issues with setting up keycloak adapter with your application
---

# Keycloak Adapters

---

## Where can I find libraries or client adapters to connect to Keycloak?

Although the SSO service supports both SAML and OIDC for client integration with identity providers, we recommend OIDC for new implementations because it is a modern protocol with broad community and library support. For supported adapters and integration libraries, refer to the official Keycloak guidance [here](https://www.keycloak.org/securing-apps/overview)

---

## When using the `keycloak.js` library I get a Content-Security-Policy error in the browser console?

This is a fairly common error we see when developers are integrating the keycloak javascript library with their application.

This due to how the Keycloak JavaScript client is initialized. While initializing be sure to disable `checkLoginIframe`. See the code snippet below

```js
kc.init({'messageReceiveTimeout': 100000, checkLoginIframe: false}).then()
```

---

## What should I use for logout if a third-party Keycloak library gives me issues?

The SSO team recommends using the `keycloak-js` library rather than relying on unsupported third-party Keycloak integrations for logout behavior.

---

## How do I skip the standard login page and go directly to an IDP when using `keycloak-js` library?

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

## Can I implement SSO in plain JavaScript?

Yes. For browser-based apps, you can use the `keycloak-js` library directly without requiring a framework-specific wrapper.