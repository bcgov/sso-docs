---
sidebar_position: 10
---

# A note on digital credentials

---

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
