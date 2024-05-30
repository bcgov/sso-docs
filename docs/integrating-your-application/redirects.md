---
sidebar_position: 4
---

# Redirects

--- Learn what Redirect URI(s) are and why they are required in OIDC.

## What is a redirect?

Redirect URI(s) is a required field to enable standard OpenID Connect redirect based authentication with authorization code. In terms of OpenID Connect or OAuth2 specifications, this enables support of 'Authorization Code Flow' for this client.

### Specifying redirect URIs are important

It is important to register redirect URIs as specifically as possible to prevents bad guys from accessing your client and obtaining your users' information.

Please see [here](https://www.keycloak.org/docs/latest/server_admin/index.html#unspecific-redirect-uris_server_administration_guide) for more detail.

### Mininum redirects

You can use any valid URI for your redirect URIs. At least one redirect URI is required for each or DEV, TEST and PROD. If you don't know the redirect URI for one or more of these environments, you may provide any valid URI for now and change it later. We suggest something like 'http://localhost:1000'

- For local dev environment, localhost URIs can be used, i.e. http://localhost:3000/\*

### Wildcards and Web Origins

- Wildcards (_) are commonly used to allow dynamical redirect URIs and can be added at the end of a URI only, i.e. http://host.com/_
- Web Origins - The redirect URIs will be copied over to Keycloak Web Origins setup. In addition, adding ‘+’ to permit all origins of Valid Redirect URIs

### Valid Redirect Format

In CSS app, the allowed URI syntax consists of two parts with `://` in the middle:

- `<scheme>://<path>`
- `scheme`: the following rules must be met:
  1. must be greater than one character.
  2. must start with an alphabet character followed by optional characters (`alphabets`, `hyphens(-)`, and `periods(.)`)
- `path`: a minimum of one character is required except for `white spaces` and `#`.
- The wildcard character `*` is not permitted in the domain or subdomain part of a redirect URI. However, it can be used within the path of the URI. Essentially, any valid domain or subdomain can be used as long as they don't include a wildcard. For instance, `https://www.example.com/path*` would be valid, but `https://www.example*.com` would not.
- The wildcard `*` is allowed to be added to the path, however, this is not recommended in prod environments.

* We made an exception to allow wildcard (\*) in the dev, and test environments to satisfy the various development processes.
