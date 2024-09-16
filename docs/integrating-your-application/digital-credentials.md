---
sidebar_position: 10
---

# Digital Credentials

## Limitations

The Pathfinder SSO Service provides the Digital Credentials as a login option for only OpenID clients. The reason this is not available for SAML clients due to lack of support for additional request query param pres_req_conf_id.

In our system, we do not store user attributes after a successful login using Digital Credentials. As a result, we lack access to persistent user data, which is essential for managing user roles and permissions. Consequently, this limitation means that we are unable to offer Role Management feature, as we cannot maintain or reference user-specific information required for such functionality. This design choice prioritizes user privacy and security by ensuring that personal data is not retained, aligning with the principles of decentralized identity management.

Since we do not retain any user-specific data during authentication with Digital Credentials, we cannot offer Single Sign-On (SSO) across client applications. As a result, users must provide consent each time they log into a new application using Digital Credentials.

## using the keycloak-js library

Please note the [keycloak-js](https://www.npmjs.com/package/keycloak-js) library which is frequently used by applications authenticating via Keycloak has a limitation when it comes to providing additional attributes to the authentication callout. Teams can use the following snippet to provide the required **pres_req_conf_id** attribute for Digital Credentials:

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

Only for Digital Credential integrations, please be mindful that for security reasons, using our Standard Service, end user’s sessions are ended when they consent to another application using Digital Credential in the standard realm.
