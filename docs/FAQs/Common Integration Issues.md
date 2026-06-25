---
sidebar_position: 9
tags:
  - Integration
---

# Common Integration Issues

---

## When using the keycloak.js library I get a Content-Security-Policy error in the browser console?

This is a fairly common error we see when developers are integrating the keycloak javascript library with their application.

This due to how the Keycloak JavaScript client is initialized. While initializing be sure to disable `checkLoginIframe`. See the code snippet below

```js
kc.init({'messageReceiveTimeout': 100000, checkLoginIframe: false}).then()
```
