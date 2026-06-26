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

---

## What do I need to integrate a Java Spring Boot back-end API to Keycloak?

This is a common flow, and how you wire it up depends on your architecture. The starting point is the same: the user logs into your application, and Keycloak produces and returns an access token and an ID token.

What happens next depends on how your front end is deployed:

- **React app with a server-side component** — you have two options:
  1. Use the JWT produced by the user login to call your API endpoints directly, or
  2. Use a separate **service account** in your server-side component to retrieve tokens and use them to call your downstream Spring Boot API.
- **Single Page Application (SPA)** — use the token produced when the user logs in to make the API callouts.

One final note which is paramount: **securing your API endpoints.** If you are using the standard realm, you must validate incoming tokens using a combination of roles (created in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/)), the issuer and audience, and the public key, to confirm the token is genuinely valid for *your* API. Otherwise, other teams in the same realm would be able to make the same calls.

For a working reference, see this example Spring Boot API that validates incoming tokens:

- Repo: [bcgov/EDUC-DIGITALID-API](https://github.com/bcgov/EDUC-DIGITALID-API)
- Endpoint security (by scopes, in this case): [`DigitalIDEndpoint.java`](https://github.com/bcgov/EDUC-DIGITALID-API/blob/master/api/src/main/java/ca/bc/gov/educ/api/digitalid/endpoint/v1/DigitalIDEndpoint.java)