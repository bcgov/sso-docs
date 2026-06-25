---
sidebar_position: 4
description: Learn about BCeID environments and how to set up test accounts.
---

# BCeID Integration

## Overview

BCeID is a BC Government identity service that allows residents and businesses to access government services using a single account. The SSO service supports three BCeID variants: **Basic BCeID**, **Business BCeID**, and **Basic or Business BCeID**.

Each environment (dev, test, and prod) uses a separate BCeID instance. You must create accounts in the correct environment for your testing and integration work.

please ensure you have BCeID accounts mapped to the correct BCeID environment listed below

| SSO CSS APP GOLD        | BCeID Env           | Visual Clue          |
| ------------- |:-------------:| :-----: |
| DEV     | BCeID DEV| ![bceid dev banner](/img/bceid-dev-banner.png) |
| TEST      | BCeID TEST       |   ![bceid test banner](/img/bceid-test-banner.png) |
| PROD | BCeID PROD      |    ![bceid prod banner](/img/bceid-banner.png) |

**Note:** If you want to point other instances of your application to your clients (such as ephemeral instances that are spun up for pull request validation or something), feel free to use DEV and TEST (but you will have to have valid redirect URIs configured for those instances).

---

## BCeID Environments

| Environment | BCeID URL | Notes |
|---|---|---|
| **Dev** | [www.development.bceid.ca](https://www.development.bceid.ca/) | Use for development and local testing |
| **Test** | [www.test.bceid.ca](https://www.test.bceid.ca/) | Use for pre-production and QA testing |
| **Prod** | [www.bceid.ca](https://www.bceid.ca/) | Contact IDIM Consulting to onboard |

---

## Creating Test Accounts

### Basic BCeID

Creating a Basic BCeID account in the dev and test environments is straightforward — register at the environment URL above and follow the prompts. No additional approval is required.

### Business BCeID

Business BCeID accounts require an additional approval step from the IDIM team:

1. Register a business account at the appropriate environment URL ([dev](https://www.development.bceid.ca/) or [test](https://www.test.bceid.ca/)).
2. Fill in all required fields. When prompted to **make an appointment**, select any location — this is simulated in non-production environments.
3. Send an email to [IDIM.Consulting@gov.bc.ca](mailto:IDIM.Consulting@gov.bc.ca) to request approval. Include the following in your request:

   | Field | Details |
   |---|---|
   | **BCeID environment** | Development or Test |
   | **User ID** | The user ID from the account you registered |
   | **First and last name** | Your name, or a test name if required |
   | **Business name** | The name of the registered test business |
   | **Ministry / Crown Corp** | Your organization and the online service name |
   | **Authorization** | Ask your manager or a colleague already known to the IDIM team to confirm you represent the online service |

4. IDIM will perform a simulated "over-the-counter" identity proofing and approve the account. You will receive a confirmation email.

> **For Production BCeID:** Work directly with [idim.consulting@gov.bc.ca](mailto:idim.consulting@gov.bc.ca) as part of your onboarding process. Production accounts are not self-serve.

---

## Choosing a Business Type When Registering

When registering a business account, you will be prompted to choose a business type. There are two recommended options:

### Option 1 — Sole Proprietorship (Easiest)

Select **Sole Proprietorship**, then answer "No" to any questions about connections to government. The final screen will ask you to pick a BCeID Point of Service (POS) — the choice does not matter, as IDIM will do a simulated approval regardless.

> The business name will default to the name on the account. If your testing requires a specific business name, use Option 2 instead.

### Option 2 — Other (Control Business Name)

Select **Other** to specify a custom business name and address. Use this option when your application needs to test behaviour based on a particular business name (e.g. testing field length limits or display formatting).

---

## Account Management Best Practices

When setting up test Business BCeID accounts, avoid the following common mistakes that can lead to losing control of the account:

| Risk | Recommendation |
|---|---|
| **No valid email address on the account** | Use a valid work email — it is required for password resets and account issue notifications |
| **Forgetting password reset answers** | Choose three questions whose answers you will reliably remember |
| **No backup administrator account** | Create a second account for a colleague with the **Business Profile Manager (BPM)** role so the business can be managed in your absence |

> **Accounts belong to individuals** — they cannot be shared or transferred. Create as many accounts in the test business as your team requires, and ensure at least one colleague has BPM or BAM (Business Account Manager) rights.

---

## Using Test Accounts Across Application Instances

If you need multiple instances of your application to authenticate with BCeID — for example, ephemeral environments for pull request validation — you can use the Dev or Test BCeID environments freely.

Ensure that each application instance has its own valid **redirect URI** configured in your SSO integration.

---

## Support

For account approval or BCeID integration questions, contact:

- **IDIM Consulting** — [IDIM.Consulting@gov.bc.ca](mailto:IDIM.Consulting@gov.bc.ca)
- **SSO team** — [bcgov.sso@gov.bc.ca](mailto:bcgov.sso@gov.bc.ca) or the [Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)
