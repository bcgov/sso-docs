---
sidebar_position: 7
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

## Single Logout URI

**Single Logout (SLO)** is a SAML feature that allows a user to end their session across all participating applications in a single action — rather than requiring them to log out of each application individually.

In a typical SAML SSO flow, a user logs in once and receives active sessions in multiple Service Providers (SPs). Without SLO, logging out of one application does not invalidate the sessions in the others. This is a security risk: if a user logs out of your application on a shared or public device, their session may still be active in other integrated applications.

### How it works?

When a user initiates logout from a SAML-integrated application, Keycloak acts as the SAML Identity Provider (IdP) and:

1. Receives the `LogoutRequest` from your application.
2. Sends `LogoutRequest` messages to all other SPs that share the same SSO session.
3. Collects `LogoutResponse` acknowledgements from each SP.
4. Terminates the central Keycloak session.
5. Redirects the user to the configured **Single Logout URI** (also called the SLO redirect URI or post-logout redirect URI) in your application.

The **Single Logout URI** is the URL Keycloak redirects the user to after the global logout is complete. You configure this in the CSS App as part of your SAML integration settings.

### Why it matters?

| Without SLO | With SLO |
|---|---|
| Logging out of App A leaves sessions active in App B and App C | Logging out of any app terminates all SP sessions tied to the same SSO session |
| Risk of session hijacking on shared devices | Sessions are fully invalidated across all applications |
| Each application must implement its own logout-redirect logic | Keycloak orchestrates the full logout flow; your app only needs to handle the final redirect |

> **Best practice:** Always configure a Single Logout URI for SAML integrations used in environments where users may access multiple applications in the same session, or where compliance requirements mandate complete session termination on logout (e.g. applications handling sensitive personal or financial data).

---

## Signed Assertions

**Signed Assertions** is a SAML security feature that cryptographically signs the assertion portion of the SAML response sent from Keycloak (the IdP) to your application (the Service Provider). This is distinct from signing the entire SAML response envelope — assertion signing targets the specific XML element that carries the user's identity and attribute claims.

### Why it matters?

In a SAML flow, Keycloak issues an assertion containing the authenticated user's identity, attributes, and session details. Without assertion signing, a man-in-the-middle attacker who intercepts the response could tamper with the assertion content — for example, elevating privileges by modifying role attributes — while the outer response signature (if present) might still validate correctly.

Signing the assertion directly provides an additional layer of integrity:

- **Tamper detection** — your application can verify that the assertion content has not been modified in transit by validating the assertion signature against Keycloak's public key.
- **Non-repudiation** — the signature provides proof that the assertion was issued by Keycloak and not forged by a third party.
- **Defence in depth** — even if the SAML response envelope is not separately signed, a valid assertion signature guarantees the authenticity of the user claims your application relies on.

### How it works?

When **Signed Assertions** is enabled for your integration, Keycloak signs the `<saml:Assertion>` element inside the SAML response using its private key. Your application verifies this signature using the Keycloak realm's public key, which is available from the SAML metadata endpoint:

```
https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/saml/descriptor
```

Most SAML libraries and COTS products support assertion signature validation natively — you typically configure this by pointing your SP to the IdP metadata URL above.

> **Recommendation:** Enable Signed Assertions for all SAML integrations, especially those handling sensitive data or subject to compliance requirements (e.g. FOIPPA, PIA obligations). This ensures the integrity of the identity claims your application receives, regardless of the transport layer used.