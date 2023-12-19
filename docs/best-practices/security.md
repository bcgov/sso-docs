---
sidebar_position: 2
---

# Security considerations

--- Security best practices

### Confidential client security

The KeyCloak adapter for a Confidential client is configured in your _server-side component_ because it requires a client ID and client secret that must be kept securely on the server and never provided to the user's browser. You can specify in your application logic which routes are secure and which are not. Use the [adapter](../integrating-your-application/settingup-adapter) for this unless you really want to code your own OIDC logic. Your secure routes should invoke the adapter on each request to make sure the user is authenticated.

### If you have an insecure "home" page

If you have an insecure "Home" page, the URI to load that page should not be secured and should not invoke authentication. If you create a "Login" button that makes an http request to a secure resource, that should kick off an authentication process. Any non-public API calls to your server-side component should be secured with the KeyCloak adapter.
