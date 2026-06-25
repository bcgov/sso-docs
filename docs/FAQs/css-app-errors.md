---
sidebar_position: 7
tags:
  - css
  - keycloak
  - errors
  - faq
description: Troubleshooting guidance for common CSS App login and identity provider errors
---

# CSS App Errors

---

## After login into CSS App with the IDP, user sees a KeyCloak page with a message: User with (email / username) already exists. How do you want to continue?

### Steps to debug duplicated email

- first of all, try to clear cache and reopen browser to test a clean start

- check with realm admin on the login settings: `Realm Settings` -\> `Login` tab -\> `Login with email` If this field is set to true, no new accounts with duplicate email address can be created.

- check if any user account in the realm has the same email address as your currently account. This usually happens between two accounts from the same person (e.g.: IDIR and BCeID with the same email), or different accounts with ***empty email attributes***.

- If that's the case, either enable `Duplicate email` setting, or update one of the accounts with another email address

### Steps to debug duplicated username

- fist of all, try to clear cache and reopen browser to test a clean start

- have you recently updated your IDIR/BCeID account? If so, please request for a KeyCloak user update [here](https://github.com/BCDevOps/devops-requests)

- if above does not apply, please contact through either [Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) or [SSO Team](mailto:bcgov.sso@gov.bc.ca)

NOTE I now see a `Configure -> Realm Settings -> Cache` option that MDS could've tried prior to deleting the 2nd account (with the same email). The 1st account did NOT show up in the list of users but may have been in the cache. In the future, if this happens again we should try clearing the cache before making any config changes.

Reference: [bcgov/ocp-sso#68](https://github.com/bcgov/ocp-sso/issues/68)

---

## Warning: You are not authorized to access this page” while accessing Business BCeID account

You need to contact [IDIM team](mailto:IDIM.Consulting@gov.bc.ca) to get the access

---

## How can I resolve SSO login error in dev (Invalid parameter: redirect_uri)?

The easy way to track down this error is to take the URL and decode it using any online utility. Usually what we see is that there's a `/` on the end or that the configuration in CSS has an incorrect scheme (http vs https). Once you've noted the delta, either change it in your application configuration or the CSS configuration for your client

---

## Error message: “Invalid signature in response from identity provider” while login into CSS app using Business BCeID

This could happen because of a cross-session issue, please try a clean incognito window and log in again. This occurs when you’re logged in with IDIR and then try to login with BCeID or vice-versa.

