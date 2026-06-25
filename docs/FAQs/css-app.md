---
sidebar_position: 2
tags:
  - css
  - faq
  - css-api
description: Common questions about CSS integrations, identity providers, roles, and operational support
---

# CSS App

---

## What is the Common Hosted Single Sign-On (CSS) app?

[CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) is the BC Government self-serve portal for requesting and managing SSO integrations. It provisions Keycloak clients for your selected environments (DEV, TEST, PROD) and lets you configure identity providers, roles, teams, and service account access.

---

## How long does it take for an integration to be provisioned?

Most DEV and TEST requests are provisioned automatically in about **5 minutes** after submission.

For some production identity providers, additional approval and onboarding is required, so timelines are longer.

---

## Which identity providers can I select in CSS?

Common options include:

- IDIR
- IDIR - MFA (Azure IDIR)
- Basic BCeID
- Business BCeID
- Basic or Business BCeID
- GitHub
- GitHub BC Gov
- BC Services Card
- Digital Credential
- One Time Passcode (OTP)

**Note:** 

- The `Basic BCeID` and `Basic or Business BCeID` are being discontinued so even DEV and TEST environments require explicit approval from [IDIM](mailto:IDIM.consulting@gov.bc.ca) team. For further details please contact [IDIM](mailto:IDIM.consulting@gov.bc.ca) team.

- The OTP IDP is currently being piloted by one team and is not generally available yet. If you would like to join the pilot, please contact SSO team.

---

## Which Identity Providers do not support role assignment?

Role assignment is not available for:

- BC Services Card (BCSC)
- Digital Credential
- One Time Passcode (OTP)

If your integration uses only these Identity Providers, Role Management and user-role assignment features are disabled.

---

## Are there IDP combinations that are not allowed?

Yes. CSS blocks incompatible combinations:

- `Basic or Business BCeID` cannot be combined with `Basic BCeID` or `Business BCeID`
- `GitHub Public` cannot be combined with `GitHub BCGOV`

---

## Where do I download my integration's client credentials?

After your integration reaches **Completed** status:

1. Open your integration in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/)
2. Go to **Technical Details** tab
3. Download the **Installation JSON** for each required environment

Each environment has its own client credentials.

---

## What do integration statuses mean?

| Status shown in CSS | Meaning |
| --- | --- |
| In Draft | Saved but not submitted |
| Submitted | Submitted and being processed |
| Completed | Provisioning successful and configuration is ready |

If a request remains in Submitted for longer than expected, contact the SSO team.

---

## Can I change my use case (Browser Login vs Service Account) after submitting?

No. The use case (auth type) cannot be changed after submission.

If you need a different use case, create a new integration.

---

## Which production integrations require extra approval?

Production onboarding is required for:

- BCeID
- BC Services Card
- One Time Passcode (OTP)
- GitHub

DEV and TEST are generally self-serve. Production approval is handled with partner teams such as IDIM, CDT, or via IM/IT exemption workflows, depending on IDP.

**Note:** The BCeID is being deprecated so new integrations with BCeID are not permitted unless you have an exemption. Going forward even DEV and TEST environments require explicit approval from [IDIM](mailto:IDIM.consulting@gov.bc.ca) team.

---

## How do I rotate a client secret?

For confidential clients:

1. Open your integration in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/)
2. Go to **Secrets**
3. Regenerate the secret for the target environment
4. Download updated Installation JSON from **Technical Details**
5. Update your application configuration

> Rotating the secret invalidates the previous secret immediately.

---

## What should I check if login fails with redirect URI errors?

Verify that your application's redirect URI exactly matches the URI configured in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) for the same environment.

Common mismatches:

- trailing slash differences
- `http` vs `https`
- wrong hostname
- wrong port

---

## How do I let multiple people manage an integration?

Use a **Team** in [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/):

- Create/select a team during request creation, or manage teams from the dashboard
- Invite members by IDIR email
- Use team roles (`admin` and `member`) to control who can manage integrations

A team must always have at least one active admin.

---

## How do I get programmatic access to my integration instead of using the CSS UI?

Request a **service account (API account)** through [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) (team admin required). Then use client credentials to obtain a token and call the [CSS API](https://api.loginproxy.gov.bc.ca/openapi/swagger/).

Use this token endpoint:

```sh
https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token
```

---

## Is there a limit on how many new requests I can submit?

Yes. In production, CSS enforces a daily cap on new integration requests.

If you hit the limit, wait for the next window or contact the SSO team with your business need.

---

## What is the difference between Gold and Silver?

**Gold** is the current platform and default for new integrations.

- Realm: `standard`
- Hostnames: `loginproxy.gov.bc.ca` (`dev`, `test`, `prod` variants)

**Silver** is the older platform and is deprecated.

---

## How to add a new admin in CSS App?

Please refer to this [guide](../css-application/teams.md#how-to-add-members) to learn about adding admins to the team

---

## What's the business level description of the CSS use cases?

The CSS App provides three common ways to use the SSO service, depending on how your application needs to access user identity and protected services.

| Use case | Business purpose | Typical scenario |
| --- | --- | --- |
| Browser Login | Let a person sign in to your web application | Staff or public users log in through IDIR, BCeID, or another configured identity provider |
| Service Account | Let one system securely call another system | Backend-to-backend API calls, scheduled jobs, or integrations that run without a human user |
| Browser Login and Service Account | Support both user sign-in and secure system integrations | A web application where users log in, and the app also calls protected APIs in the background |

### How to Choose

- Choose **Browser Login** if your main requirement is interactive user authentication.
- Choose **Service Account** if no end user signs in and only machine-to-machine access is needed.
- Choose **Browser Login and Service Account** if you need both user sign-in and backend API integration in one application.

### In Plain Terms

At a business level, CSS helps teams quickly enable secure sign-in, controlled API access, or both, without building and maintaining identity infrastructure from scratch.

---

## Once I sign up for a test BCeID, is there an easy way to find my GUID for use in CSS App?

Yes. After you complete a BCeID login for a client integrated through the SSO **Standard Realm**, you can use CSS App to retrieve the GUID from your account record.

### Steps to Find Your GUID

1. **Log in** with your test BCeID account to confirm it's provisioned in the system.

2. **Open CSS App** and navigate to your client integration:
   - Go to [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/)
   - Select your client integration

3. **Find your account**:
   - Select **Integration Details** → **Assign Users to Roles**
   - Select **BCeID Basic** as the identity provider
   - Search by one of these attributes:
     - Display Name
     - Username
     - Email
   - Click **Search**

4. **Copy the GUID** from your account record in the search results.

### Important Notes

- This method only works for **Standard Realm** integrations where the user is already provisioned.
- IDIM policy restricts directory searches by name alone — you must have the account already set up in CSS App.
- If you cannot find your account, contact your integration administrator to confirm provisioning is complete.

---

## How to address custom realm IDIR and BCeID accounts with missing (or empty) e-mail issue?

Check with your user first to confirm the IDIR/BCeID account has an email in the profile

### IDIR

Ask user to either call 77000, or login to summer.gov.bc.ca, if Outlook could successfully load, then you could confirm user has email

### BCeID

You need to login to you account at [BCeID App](https://www.bceid.ca) and navigate to `/profile_management` to confirm if email has been added

---

## How can I integrate my digital application with a with BC government approved login option?

Please use this quickstart [guide](../index.md) to learn about requesting an integration. The quickest option to setup your integration would be to use our standard service but if you have more sophisticated requirement, please contact SSO team either through [Microsoft Teams How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) (preferred for quick questions) or via [email](mailto:bcgov.sso@gov.bc.ca) and we will be able to help you

---

## When you have to translate for a businessperson who doesn't speak technical and does not have IDIR yet to know more about your offerings?

We have created a [video](https://user-images.githubusercontent.com/56739669/231529538-0e1efa5a-51df-401a-99c2-dbc964e8cac6.mp4) to help non-technical folks to understand our service offerings

---

## Is there any way to prevent CSS apps from colliding with each other? We have one app that uses IDIR, and another that uses BCeID, and I cannot be logged into both at the same time?

This is a limitation from siteminder. You can use incognito windows if you’re working locally. It’s not really a normal scenario in PROD for users to log in with both in the same browser.

---

## Which protocol should I connect my application with? SAML or OIDC?

**Use OIDC.** OIDC (OpenID Connect) is the primary recommendation for new integrations. SAML (Security Assertion Markup Language) is only recommended when your application does not support OIDC.

### Key Differences

| Aspect | OIDC | SAML |
| --- | --- | --- |
| **Certificate management** | No periodic certificate exchange required | Requires periodic certificate renewal and exchange |
| **Library support** | Extensive modern library support across all platforms | Limited and legacy library support |
| **Protocol age** | Modern standard (built on OAuth 2.0) | Legacy standard (XML-based, older) |
| **Token format** | JSON Web Tokens (JWT) | XML assertions |
| **Use case fit** | Web, mobile, and API integrations | Legacy enterprise systems |

### When to Use Each

**Choose OIDC if:**

- Your application natively supports OpenID Connect
- You want to avoid certificate management overhead
- You need library support for modern frameworks (React, Angular, Node.js, Java, Python, etc.)
- You're building or modernizing an application

**Choose SAML only if:**

- Your application explicitly requires SAML
- You're integrating a legacy system that doesn't support OIDC. Example: commercial off-the-shelf (COTS) Apps
- Your vendor or platform mandates SAML

### Next Steps

- If unsure which your application supports, check your framework or platform documentation
- Contact the SSO team via [Microsoft Teams](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) or [email](mailto:bcgov.sso@gov.bc.ca) if you need protocol guidance for your specific application

---

## Can I assign roles before a user logs in for the first time?

Yes. [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) can search users from both Keycloak and the identity provider directory, which lets you pre-import and assign roles before the user's first login for IDIR and Azure IDIR integrations.

---

## What is the `idpHint` for BC Services Card?

For BC Services Card integrations, the `idpHint` is the same value as the client ID, which is stored in the downloaded Installation JSON under `resource`.

---

## How do I distinguish Basic and Business BCeID users?

Use the user attributes returned in the token or lookup response. The `identity_provider` value alone does not always tell you whether a BCeID user is Basic or Business.

---

## Does IDIR with MFA work for guest or Entra accounts?

No. The IDIR with MFA option applies to IDIR accounts only.

---

## How do I get a token for a service account?

Use the OAuth 2.0 `client_credentials` grant against the token endpoint. A service account is not a user login and should not be used with the userinfo endpoint.

---

## Why do client roles not appear for IDIR with MFA?

IDIR and IDIR with MFA are separate identity providers. If you need roles for both login paths, configure the roles separately for each IDP.

---

## Can I convert a confidential client to a public client?

Yes. You can update the client type through [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) if your integration needs to change from confidential to public.

---

## How do I set up a custom login page?

You can setup a custom login page for your application. However, depending upon number of IDP(S) associated with your integration, you may need to use `idpHint` to bypass the default keycloak's login page. Please refer to this [guide](../integrating-your-application/login-guide.md#skipping-the-default-login-page) to learn more.

---

## Can I read first name and last name separately for BCeID?

Not possible. BCeID only provides a full display name but does not provide separate given and family name attributes. This display name is mapped into the `given_name` (first_name) claim in your token, so you cannot derive or split it into separate first and last name components on the application side. For your reference please check this [link](../advanced/identity-mappers.md#basic-bceid) to learn about how the attributes are mapped to claims in your token.

---

## Is it possible to change the client auth type after the integration has been provisioned?

Auth type cannot be modified after the integration is provisioned, you need to request a new integration with required Auth type.

---

## Is it possible to add users to keycloak and assign groups/roles prior to the user logging on?

Yes. In many cases, [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) lets you assign roles before a user's first login. Please refer to this [guide](../css-application/roles.md#user-search) for more details.

---

## Is there a way to manage service account roles in Gold?

Yes, [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) lets you assign/un-assingn roles to your service acconts. Please refer to this [section](../css-application/roles.md#service-account-role-management) for more details.