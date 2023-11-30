---
sidebar_position: 1
---

# Do's and Don'ts

---

### Do Not call the KeyCloak API on every request

This can potentially bring down the shared service for all clients. This was the issue we saw with [Flask-OIDC](https://flask-oidc.readthedocs.io/en/latest/) with some teams. The adapter was making a call to the [Token Introspection Endpoint](https://www.oauth.com/oauth2-servers/token-introspection-endpoint/) with every request and it was a high-volume service. Most adapters don't do this as the token information is available within the token itself, but this one adapter seems to have a defect.

Another important technique to be aware of is that you should cache the JWT in a cookie so that you don't have to check the status of your session with every request. Keycloak has a feature that provides a cookie for you, and libraries like keycloak-js make use of this to limit the number of round trips to the Keycloak server.

### Do Not load test in Production

Please let the SSO team in advance when you want to do load testing in DEV and TEST so we can plan ahead and coordinate with other teams. These are shared environments that many teams are actively using. A failed load test can affect many other teams.

### Do not reuse clients for multiple applications

If you have multiple web applications you would like to integrate with our service we recommend creating a new request for each one. This will allow you to customize your configuration appropriately, e.g when setting your valid redirect URIs, as well as lower your application's potential exposure by having unique client secrets per application.

### Do protect the client secret (confidential client only)

It stays on the server. Use OCP secrets if you are on OpenShift. Don't put it in your public JavaScript or in your GitHub repository. Don't build it into your Docker image.

### Do carefully manage your list of Valid Redirect URIs

Your redirect URIs should only be resources that you control. Most of the time you will only need one URI (the one that you want the client to return to after a login event).

### Do apply appropriate logout calls

There is known issue with identity providers which retain session. [More info here](https://stackoverflow.developer.gov.bc.ca/questions/83)

### Do skip the standard login page

In KeyCloak, if the realm that contains your client has more than one IDP configured, KeyCloak shows a page that prompts the user to select which IDP they want to log in with. Almost all teams have chosen to hide this page from their users by specifying the IDP as a query string parameter in the KeyCloak Authorization URI value behind their login button. The querystring is 'kc_idp_hint'. (The IDPs available will depend on the standard realm in which your client exists.) By specifying the IDP in this way, the user will be redirected directly to the login page for the identity provider and will not see the KeyCloak login choice page at all.

| Display Name            |  kc_idp_hint  |
| ----------------------- | :-----------: |
| IDIR                    |     idir      |
| Azure IDIR              |   azureidir   |
| Basic BCeID             |  bceidbasic   |
| Business BCeID          | bceidbusiness |
| Basic or Business BCeID |   bceidboth   |
| GitHub BC Gov           |  githubbcgov  |
| GitHub Public           | githubpublic  |

We do have a work around for those of you who ABSOLUTELY need the [keycloak login page](../integrating-your-application/login-guide#skipping-the-standard-login-page), please talk to us about this

### Do validate the IDP in the JWT

Because there are multiple IDPs available to your client in the standard realm, if your application has business logic that specifies a particular login method, you have to enforce that. For example, if your application requires BCeID to authenticate, you have to make sure that the user didn't somehow log in with IDIR instead. Your client has a mapper configured to provide the alias of the IDP that was used to log in. The name of the claim is 'identity_provider' and the possible aliases are the same as the ones that are used for the kc_idp_hint query parameter (see above).

In the standard realms that support BCeID there are multiple IDPs (both BCeID and IDIR) and it is theoretically possible for a user to change the IDP hint (see above) maliciously using scripting or other techniques. Additionally, a user that is signed into another application that shares the same realm will get single sign-on with your app, so if you want to enforce a particular IDP, that's another good reason to validate the IDP that they used to sign in. It's up to you and your business logic requirements to make sure that your users have a good user experience and that you don't leave any room for unintended login flows.

If for some reason you want to make sure that your users do NOT have a single sign-on experience, you can force them to re-authenticate according to the OIDC spec at: [3.1.2.3. Authorization Server Authenticates End-User.](https://openid.net/specs/openid-connect-core-1_0.html#Authenticates)

### Do revoke tokens

Ensure offline tokens are revoked after use or set the maximum time.

### Do validate tokens at application level

Validate the token at the application level rather than using an introspection endpoint
