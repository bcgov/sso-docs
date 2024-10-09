---
sidebar_position: 6
tags:
  - Redirects
  - URI
---

import FaqItem from '../../src/components/FaqItem';

export const faqs = [
{
title: "When using CSS app - trying to update ‘redirect Uris’ for an existing IDP?",
<<<<<<< HEAD
content: <><p>This is due to the access control checks. Guidance: Try in fresh browser or in "incognito window"<p></>},
=======
content: <><p>The workaround is posted on SSO-DOCS discussions page, please follow the given link for the same:
</p><ul><li><a href={"https://github.com/bcgov-c/pathfinder-sso-docs/discussions/30"}>Link to the thread</a></li></ul></>},
>>>>>>> 08b8f4dcb4a603650a0bd5590929b0b41e3b5f88
{title: "How can I have a back to app/website navigation on an IDP login page using the broker URL?",
content: <><p>Please follow the link below for more understanding on this:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/1240/1241#1241"}>Link to stackoverflow thread</a></li></ul></>},
{title: "Replacing keycloak logout param redirect_uri to post_logout_redirect_uri not doing full SSO with Keycloak version 18 and above.",
content: <><p>This question has been answered in this StackOverflow: Logging out of Keycloak does not kill my session with the identity provider. 
For more information on this, please refer to the following link for stack overflow discussion on GUID:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/998/999#999S"}>Link to stackoverflow thread</a></li></ul></>}];

<FaqItem faqs={faqs}/>
