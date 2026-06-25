---
sidebar_position: 5
description: Learn how to use sso playground to test your oidc or saml client
---

# SSO Playground

OIDC and SAML playground is a next.js application built by the SSO Team

## Features

Multiple configurations: The playground offers flexibility in testing. You can choose from pre-configured OIDC providers like Keycloak, Auth0 or Google Accounts, or you can even enter your own OIDC URLs to test against a custom provider.

Hands-on experimentation: By allowing users to interact with the OIDC flow manually, the playground provides a practical learning experience. Developers can experiment with different parameters and scopes to see how they affect the authorization process and the claims returned.

Improved debugging: Since you can isolate and test each step individually, the playground can simplify debugging OIDC integration issues within your application.

## Usage

### OpenID Connect

1. Access the [SSO Playground](https://sso-playground.apps.gold.devops.gov.bc.ca) in a browser and select a flow type that's relevant to your client.
2. After selecting the flow type, a form is displayed asking for parameters to run the authentication process.
3. The Discovery URL is a JSON document that contains important configuration details for the OpenID Connect provider. This document includes information such as:
   1. Authorization endpoint URL
   2. Token endpoint URL (optional for implicit flow)
   3. Userinfo endpoint URL (optional)
   4. JSON Web Key Set (JWKS) document URL
   5. Issuer identifier, and other relevant settings
4. After you enter the Discovery URL, it should auto populate other URLs if they exist in the JSON document.
5. Enter rest of the fields and click on Login button to run the authentication process. If the login was successful, the application should display a panel on the right of the form with a drop-down listing retrieved tokens.

### SAML

1. Access the [SSO Playground](https://sso-playground.apps.gold.devops.gov.bc.ca) and click on `SAML` tab
2. Ensure your client has `Logout Service URL` set with `https://sso-playground.apps.gold.devops.gov.bc.ca/saml` in CSS for logout to work
3. Navigate to `https://dev.loginproxy.gov.bc.ca/auth/realms/standard/protocol/saml/descriptor`
4. Copy `SingleSignOnService`, `SingleLogoutService`, `X509Certificate` for completing the login form
5. Use your `client ID` as the `Entity ID`
6. Click login button
7. Click logout to start fresh
8. The reset button should wipe out recent form data
