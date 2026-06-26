---
sidebar_position: 4
title: Redirect URIs
description: Learn about redirect uri and how is it used in oidc flow
tags:
  - css
  - best-practices
---

## Overview

Redirect URIs are a required configuration for standard OpenID Connect (OIDC) redirect‑based authentication using the **Authorization Code Flow**. In OIDC and OAuth 2.0 terms, redirect URIs define where the authorization server is allowed to send users after successful authentication.

## Why do you need Redirect URIs?

It is important to register redirect URIs as precisely and narrowly as possible. Overly permissive redirect settings can allow malicious actors to intercept authorization codes or tokens and gain unauthorized access to user data.

For additional background, see the [Keycloak documentation](https://www.keycloak.org/docs/latest/server_admin/index.html#unspecific-redirect-uris_server_administration_guide).

### Mininum Redirect Requirements

- At least **one redirect URI is required for each environment**: **DEV**, **TEST**, and **PROD**.
- If the exact redirect URI is not yet known for an environment, you may temporarily supply a placeholder and update it later.
  - Suggested placeholder: `http://localhost:1000`
- For local development, `localhost` redirect URIs can be used, e.g. `http://localhost:3000/*`

### Wildcards and Web Origins

- Wildcards (`*`) may be used **only at the end of a redirect URI path**, for example: `http://host.com/*`
- Redirect URIs are automatically copied into the Keycloak **Web Origins** configuration.

### Valid Redirect URI Format

Redirect URIs are commonly used in a http(s) scheme (`http(s)://`) or custom scheme (`scheme://path`). The allowed URI syntax consists of:

#### Scheme

- Must be greater than one character.
- Must start with an alphabet character followed by optional characters (`alphabets`, `hyphens(-)`, and `periods(.)`).

#### Path

- Must contain at least one character
- Must not include `white spaces` or `#`
  
#### Rules for using a Wildcard (`*`)

1. HTTP(S) scheme (`http(s)://`)

- Wildcards may be used **only in the path**, not in the domain or subdomain.
  - Examples:
    - ✅ `https://www.example.com/path*` or `https://www.example.com/path/*`
    - ❌ `https://www.example*.com`
- Wildcard (\*) is allowed in **DEV and TEST** environments only to support various development workflows.
- Wildcard (\*) is not allowed in **PROD** environments.

1. Custom schemes (`scheme://path`)

- If an application client is using non http(s) custom schemes, the custom schemes must be explicitly allowed in the redirect URI pattern.
- Supported examples include: `custom:/test`, `custom:/test/`, `custom:`, or `custom:/test/*`
- For security reasons, a general wildcard (`*`) is no longer supported by keycloak. For more details follow [here](https://access.redhat.com/documentation/it-it/red_hat_build_of_keycloak/22.0/html/migration_guide/migrating-applications#changes_in_validating_schemes_for_valid_redirect_uris).
