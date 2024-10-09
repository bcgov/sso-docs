---
sidebar_position: 7
tags:
  - Protocol
  - Redirects
  - URI
  - IDP (Identity provider)
  - CSS App
  - Roles
  - Service accounts Admin and approval
---

# CSS App Errors

import FaqItem from '../../src/components/FaqItem';

export const faqs = [
{
title: "After login into CSS App with the IDP, user sees a KeyCloak page with a message: User with (email/ username) already exists.How do you want to continue?",
content: <><p>Please follow the given stack overflow discussion link to debug the issue:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/1037/1038#1038"}>Link to stackoverflow thread</a></li></ul></>},
{title: "Warning: You are not authorized to access this page” while accessing Business BCeID account.",
content: <><p>You need to contact IDIM team to get the access</p></>},
{title: "Error message: “InvalidFedratedIdentityActionMessage” while login into CSS app using Business BCeID.",
content: <><p>This could happen because of a cross-session issue, please try a clean incognito window and log in again. This occurs when you’re logged in with IDIR and then try to login with BCeID or vice-versa. </p></>},
{title: "How can I resolve Pathfinder SSO login error in dev (Invalid parameter: redirect_uri)?",
content: <><p>This issue has been answered in stack overflow: </p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/1202/1203#1203"}>Link to stackoverflow thread</a></li></ul></>}];

<FaqItem faqs={faqs}/>