---
sidebar_position: 5
tags:
  - IDP (Identity provider)
---

# Identity Provider (IDP)

---

## How to integrate BC Service Card login in my application?

If you are using SSO standard realm, then you can simply login to [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) and select `BC Services Card` IDP when requesting new or updating your existing integration.

If you own a custom realm then to integrate with the services card, your team will first need to follow the on-boarding process provided by IDIM. Once that has been kicked-off, the services card team will provide you with a `client ID`, `client secret` and the discovery endpoint. This will allow your team to setup a new identity provider (IDP) in your custom realm.

### Technical Setup

We'll start by noting the list of items you'll need to create for a functional integration:

- Identity Provider for BCSC

- IDP Mappers

- Client Mappers

### Create the Identity Provider

Create a new identity provider by clicking on the `Identity Providers` tab and select the drop-down to `Add New Provider`. The option you want is `OpenID Connect V1.0`. Give your new BCSC IDP an alias (bcsc?) and then fill out the following details. Note the URLs are also available via the discovery endpoint: https://idtest.gov.bc.ca/login/.well-known/openid-configuration

- *Authorization URL* -\> https://\<IDIM ENVIRONMENT\>/login/oidc/authorize

- *Token URL* -\> https://\<IDIM ENVIRONMENT\>/oauth2/token

- *User Info URL* -\> https://\<IDIM ENVIRONMENT/oauth2/userinfo

- *Client Authentication* -\> Client secret sent as post

- *Client ID* -\> Provided to you by IDIM

- *Client Secret* -\> Provided to you by IDIM

- *Issuer* -\> https://\<IDIM ENVIRONMENT/oauth2/

- *Default Scopes* -\> openid profile email address

- *Validate Signatures* -\> On

- *Use JWKS URL* -\> On

- *JWKS URL* -\> https://\<IDIM ENVIRONMENT/oauth2/jwk

### Create IDP Mappers

Since every BC Services Card integration is different in terms of attribute set received, the mappers will vary from team to team. The examples below show a couple of mappers; the others are done the same. The attribute names can be found in the OIDC specification for BCSC.

Find the BCSC identity provider you created and select the `Mappers` tab. The first attribute we're going to import is the directed identifier (DID). Click the `Create` button and fill out the details as below:

![BCSC Sub DID Mapper](/img/bcsc_sub_did.png)

As you can see we've taken the `sub` (subject) claim and mapped it as attribute `did`.

Following the same pattern as above, we also import the `given_name` claim as the `firstName` value for the user.

![BCSC given name mapper](/img/bcsc_givenname.png)

**Note on the Username Mapper:** The SSO team highly recommends that your team uses a `username` mapper which includes the alias in your username. This will ensure you're able to search for users by IDP type in the interface and elsewhere; it will also ensure there's no username collisions between IDPs. Here is a sample of what it should look like:

![BCSC Username DID Mapper](/img/bcsc_username_did.png)

### Create Client Mappers

With the above we've only set Keycloak up to import the attribute values we've mapped into the user details. At this point they will not be provided in the token when a user logs in. For that we'll need some client mappers.

Navigate to your client using the `Clients` link. Once selected click the `Client Scopes` tab. Then locate the top link in the list which should be `<<your-client-name>>-dedicated`. Click the `Configure New Mapper` button select the mapper type `User Attribute`. 

- *Name* -\> Friendly name of the stored attribute on the user (firstName)

- *User Attribute* -\> Name of the stored attribute on the user (firstName)

- *Token Claim Name* -\> What you want the attribute called in your token (givenName)

- *Claim JSON Type* -\> String

- *Add to ID Token* -\> On

- *Add to access token* -\> On or off (your choice if you want it in the access token)

- *Add to userinfo* -\> On

![BCSC Client Mapper](/img/bcsc_firstname_mapper.png)

Add as many mappers as you need. Once the above is in place, you will have a working BCSC login flow through Keycloak with the attributes available to your team in the token(s).

---

## While using IDIR or BCeID as an identity provider, the word GUID often shows up - what is it?

GUID is Globally unique identifier and the identity partners we work with (IDIR and BCeID), make use of a SAML protocol. Accordingly certain user attributes are sent with a "payload" and one of those attributes is the GUID.

---

## Where can I find more information on identity providers?

Please refer to this [guide](../css-application/identity-providers.md) to learn about Identity Providers

---

## Is there any reason why the SSO project doesn’t support Personal BCeID?

Personal BCeID has been deprecated by the IDIM team so its recommended for teams to use BC Services Card instead.
