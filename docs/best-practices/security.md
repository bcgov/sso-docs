---
sidebar_position: 2
title: Security considerations
description: Security best practices
---

### Confidential Client Security

For a confidential client, the Keycloak adapter must be configured in a server-side component. This is required because the configuration includes a client ID and client secret, which must be kept secure and must never be exposed to the user’s browser.
Within your application logic, you can define which routes require authentication and which are public. Unless you have a strong reason to implement your own OpenID Connect (OIDC) logic, you should use the [adapter](../integrating-your-application/settingup-adapter).  Any route marked as secure should invoke the adapter on each request to ensure the user is authenticated.

### Handling an Insecure “Home” Page

If your application has an insecure “Home” page, the URI for that page should remain public and should not trigger authentication. A common pattern is to include a Login button on the home page that sends an HTTP request to a secure resource; this request then initiates the authentication flow.
All non-public API calls to your server-side component must be protected using the Keycloak adapter to ensure proper authentication and access control.
