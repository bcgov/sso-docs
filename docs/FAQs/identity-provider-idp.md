---
sidebar_position: 5
tags:
  - IDP (Identity provider)
---

# Identity Provider (IDP)

import FaqItem from '../../src/components/FaqItem';

export const faqs = [
{
title: "How to integrate BC Service Card login in my application?",
content: <><p>The information about integrating BCSC login with the application can be found in the stack overflow thread given below:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/512/515#515"}>Link to stackoverflow thread</a></li></ul></>},
{title: "While using IDIR or BCeID as an identity provider, the word GUID often shows up - what is it?",
content: <><p>GUID is Globally unique identifier and the identity partners we work with (IDIR and BCeID), make use of a SAML protocol. Accordingly certain user attributes are sent with a "payload" and one of those attributes is the GUID.</p></>
},
{title: "Where can I find more information on identity providers?",
content: <><p>Please refer to the following stack overflow link for the similar question:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/1185/1186#1186"}>Link to stackoverflow thread</a></li></ul></>},
{title: "Is there any reason why the SSO project doesn’t support Personal BCeID?",
<<<<<<< HEAD
content: <><p>Personal BCeID is now being deprecated by the IDIM team; they discourage use of it and are actively trying to move teams using it to use BC Services Card</p></>}];
=======
content: <><p>This has been discussed in SSO-DOCS page and the below given link can be used to access the discussion:
</p><ul><li><a href={"https://github.com/bcgov-c/pathfinder-sso-docs/discussions/29"}>Link to the thread</a></li></ul></>}];
>>>>>>> 08b8f4dcb4a603650a0bd5590929b0b41e3b5f88

<FaqItem faqs={faqs}/>