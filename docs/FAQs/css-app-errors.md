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

## Warning: You are not authorized to access this page” while accessing Business BCeID account

You need to contact [IDIM team](mailto:IDIM.Consulting@gov.bc.ca) to get the access

---

## How can I resolve SSO login error in dev (Invalid parameter: redirect_uri)?

The easy way to track down this error is to take the URL and decode it using any online utility. Usually what we see is that there's a `/` on the end or that the configuration in CSS has an incorrect scheme (http vs https). Once you've noted the delta, either change it in your application configuration or the CSS configuration for your client

---

## Error message: “Invalid signature in response from identity provider” while login into CSS app using Business BCeID

This could happen because of a cross-session issue, please try a clean incognito window and log in again. This occurs when you’re logged in with IDIR and then try to login with BCeID or vice-versa.

