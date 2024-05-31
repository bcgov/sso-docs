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

Redirect URIs are commonly used in a standard scheme (https://) or custom scheme (scheme://path). The allowed URI syntax consists of:

- `Scheme`: the following rules must be met:
  1. must be greater than one character.
  2. must start with an alphabet character followed by optional characters (`alphabets`, `hyphens(-)`, and `periods(.)`).
- `Path`: a minimum of one character is required except for `white spaces` and `#`.
- Notes on the wildcard character `*`:
  - In the standard scheme (`http(s)://`):
    - Wildcard (\*) is allowed in dev and test environments to satisfy the various development processes.
    - This is is not allowed in prod environments.
    - **Examples of valid redirects**: `https://www.example.com/path*` would be valid, but `https://www.example*.com` would not. The wildcard character `*` is not permitted in the domain or subdomain part of a redirect URI. However, it can be used within the path of the URI. Essentially, any valid domain or subdomain can be used as long as they don't include a wildcard.
  - In custom schemes (`scheme://path`):
    - If an application client is using non http(s) custom schemes, the validation now requires that a valid redirect pattern explicitly allows that scheme.
    - Example patterns for allowing custom schemes are `custom:/test`, `custom:/test/`, `custom:`, or `custom:/test/*`.
    - For security reasons, a general pattern such as wildcard `*` is no longer supported by keycloak. See more [here](https://access.redhat.com/documentation/it-it/red_hat_build_of_keycloak/22.0/html/migration_guide/migrating-applications#changes_in_validating_schemes_for_valid_redirect_uris).
- The wildcard `*` is allowed to be added to the path, however, this is not recommended in prod environments.

* We made an exception to allow wildcard (\*) in the dev, and test environments to satisfy the various development processes.
