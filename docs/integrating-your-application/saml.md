---
sidebar_position: 21
title: SAML Integrations
---

## Choosing an Identity Provider

While our primary focus is on OpenID-Connect (OIDC), we recently identified an issue affecting SAML integrations when multiple identity providers (IDPs) are selected. Specifically, selecting more than one IDP results in a duplicated payload.

To avoid this issue and ensure correct behavior, we have implemented a restriction that allows **only one IDP to be selected at a time** for SAML integrations.

## Custom Client ID

In SAML, the **Client ID** is also referred to as the **Entity ID** — a unique identifier that distinguishes your application (the Service Provider) from others registered in Keycloak.

By default, the CSS uses your project name and integration id to formulate Entity ID when provisioning a SAML client. However, some **Commercial Off-The-Shelf (COTS) products** — such as enterprise platforms, content management systems, or third-party SaaS tools — require the Entity ID to match a specific, predetermined value. This is commonly because:

- The product has a fixed Entity ID embedded in its SAML metadata or configuration that cannot be changed without a paid support contract or vendor involvement.
- The product's SAML implementation validates the incoming `Issuer` field in assertions against a hardcoded expected value, and will reject assertions that do not match.
- The vendor's documentation specifies a particular Entity ID format (e.g., a URN or a specific URL pattern) that must be honoured for the SAML trust to function correctly.

If your product falls into this category and requires a custom Entity ID, please contact the SSO team. We can provision a custom Client ID upon request.

Reach out via [Email](mailto:bcgov.sso@gov.bc.ca) or the [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)