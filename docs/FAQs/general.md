---
sidebar_position: 1
tags:
  - general
  - faq
  - sso
description: Common questions regaring css and sso service
---

# General

---

## Where can I find more information about the BC Government Keycloak offerings?

You can refer to the [guide](../index.md) for more details or contact the SSO team through [Microsoft Teams How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) (preferred for quick questions) or via [email](mailto:bcgov.sso@gov.bc.ca)

---

## Can vendor-built applications use SSO service?

Yes. The SSO service is available to BC Government applications whether they are built in-house or by a vendor. The key requirement is that the request comes from a valid BC Government team with an IDIR-backed requestor

---

## How should I secure a frontend and backend application?

You can secure a frontend and backend using either a **stateful** or **stateless** authentication pattern.

### Stateful (server session)

Use a backend-managed login flow (typically with a confidential client), store tokens server-side, and maintain an application session cookie for the user.

- Frontend calls backend using the session cookie
- Backend performs downstream API callouts using server-held tokens
- Recommended when your backend is the primary application boundary

### Stateless (token-per-request)

Use a public client in the frontend, send the user access token to the backend on each request, and validate it server-side.

- Validate token signature, expiry, issuer (`iss`), and audience (`aud`)
- Apply IDP and role checks based on your business rules
- Recommended for SPA + API architectures where the frontend authenticates directly

---

## How should I identify users in my application?

You should use the user's GUID to identify them. See the [identity mappers](/docs/advanced/identity-mappers.md) section for which claim the different providers will map it to. The standard realm will also include the GUID in the `sub` claim with the identity provider alias appended, e.g `<user-guid>@idir`. This is to ensure users are unique within the standard realm. Storing just the GUID without the alias is preferable to match the upstream IDP's identifier.

---

## Could SSO Keycloak be used to allow members of the federal government to authenticate and access resources?

This is restricted to BC Government only at the moment

---

## Is there a way to check if an IDIR user exists in an automated fashion?

There are a couple approaches to this:

- Using the Azure (graph) API to lookup the user. This is the more modern approach which allows the use of a service token to make a REST callout. You can setup your own API service account at `https://entra.microsoft.com/#home`. Note that you will have to grant the `User.ReadAll` permission to your service account

```sh
https://github.com/bcgov/sso-requests/blob/bfc275c47414570ed1688d486d3d6e92547004a5/app/utils/graph-api.ts#L36
```

- The BCeID (CAP) web service. This is a SOAP-based web service which allows IDIR & BCeID account lookup. This requires a sign-up with the IDIM team, you can reach out to them for further detail

```sh
https://github.com/bcgov/sso-requests/blob/bfc275c47414570ed1688d486d3d6e92547004a5/app/utils/idim-ws-idir.ts#L73
```

---

## While using IDIR or BCeID as an identity provider, the word GUID often shows up - what is it?

GUID is Globally unique identifier and the identity partners we work with (IDIR and BCeID), make use of a SAML protocol. Accordingly certain user attributes are sent with a "payload" and one of those attributes is the GUID.

---

## Where can I find more information on identity providers?

Please refer to this [guide](../css-application/identity-providers.md) to learn about Identity Providers

---

## Is there any reason why the SSO project doesn’t support Personal BCeID?

Personal BCeID has been deprecated by the IDIM team so its recommended for teams to use BC Services Card instead.

---

## Where can I get help?

- Email: [bcgov.sso@gov.bc.ca](mailto:bcgov.sso@gov.bc.ca)
- Chat: [Microsoft Teams How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)

---

## I received an "In-active IDIR User Removed" email, and a teammate's invite is expired - what do I do?

These two situations are part of the same housekeeping process and are expected behaviour:

- **"In-active IDIR User Removed"** — the SSO service periodically reconciles team members against the IDIR source of truth. When an IDIR account is deactivated (for example, the person has left government or changed ministries), that user is automatically removed from any integration teams they belonged to, and the remaining team admins are notified by email. No action is needed unless the removed user was your only team admin — in that case, contact the SSO team so access can be restored.
- **Expired invite** — team invitations are valid for a limited time. If a teammate's invite has expired before they accepted it, simply re-send the invitation from the **My Teams** section of [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/). The new invite link will let them join.

If you are left without an active admin on an integration, reach out to the SSO team at [bcgov.sso@gov.bc.ca](mailto:bcgov.sso@gov.bc.ca).