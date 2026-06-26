---
sidebar_position: 2
title: Digital Credentials
tags:
  - identity-provider
  - digital-credentials
---

## Overview

Digital credentials are the electronic equivalent of physical documents that you already have. It's a digital equivalent of your physical documents that you could store in a secure digital wallet on your mobile device.

## Limitations

The SSO service supports **Digital Credentials only for OpenID Connect (OIDC) clients**. Digital Credentials are not available for SAML clients due to SAML’s lack of support for the required request query parameter `pres_req_conf_id`.

When users authenticate using Digital Credentials, we **do not store user attributes** after a successful login. As a result, we do not have access to persistent user data, which is required to manage user roles or permissions. For this reason, **role management is not supported** for Digital Credential integrations.

This design intentionally prioritizes **user privacy and security**. By not retaining personal or identifying information, the service aligns with decentralized identity principles and minimizes data retention risks.

Because no user‑specific data is retained, **Single Sign‑On (SSO) across client applications is not supported** for Digital Credentials. Users must provide consent each time they authenticate with a new application using Digital Credentials.

## Using the `keycloak-js` Library

The [keycloak-js](https://www.npmjs.com/package/keycloak-js) library — commonly used by applications integrating with Keycloak — has a limitation when passing additional attributes as part of the authentication request.
For Digital Credential integrations, teams must explicitly include the required `pres_req_conf_id` attribute. The following example demonstrates how to append this parameter when initiating the login flow:

```js
export const handleLogin = (keycloak, loginOptions) => {
  if (loginOptions.pres_req_conf_id) {
    var loginURL = keycloak?.createLoginUrl(loginOptions);
    if (loginURL) {
      window.location.href =
        loginURL + "&pres_req_conf_id=" + loginOptions.pres_req_conf_id;
    }
  } else {
    keycloak?.login(loginOptions);
  }
};
```

## Security Consideration

For **Digital Credential integrations only**, note that when using the **Standard Service**, an end user’s session is intentionally terminated if they consent to authenticate with another application using Digital Credentials within the same standard realm. This behavior is enforced for security reasons and helps prevent credential reuse across applications.
