---
sidebar_position: 1
tags:
  - Keycloak
---

# Keycloak

import FaqItem from '../../src/components/FaqItem';

export const faqs = [
{
title: "Why does Logging out of Keycloak does not kill my session with the identity provider?",
content: <><p>This is a known issue with identity providers which retain session and has been discussed on stack overflow. Please refer tothe following thread: </p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/83/84#84"}>Link to stackoverflow thread</a></li></ul></>},
{title: "Where can I find libraries or client adapters to connect to Keycloak?",
content: <><p>Please follow the given stack overflow thread link to learn more about this topic: </p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/89/90#90"}>Link to stackoverflow thread</a></li></ul></>},
{title: "How to share Keycloak Realm between application teams without sharing the admin credentials?",
content: <><p>This question was discussed previously on stack overflow. Please refer to the following link for more information: </p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/770/771#771"}>Link to stackoverflow thread</a></li></ul></>},
{title: "How do I test protected pages with Cypress and Keycloak?",
content: <><p>Please refer to the following link for the different approaches to address this query: </p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/100/101#101"}>Link to stackoverflow thread</a></li></ul></>},
{title: "How do i get the GUID of the client under Client settings in Keyclock?",
content: <><p>We do not provide this unless you are a custom realm owner pursuing a migration.</p></>
},
{title: "Which time zone is used for the SSO (Keycloak) product?",
content: <><p>The time zone used is PST (Pacific Standard Time). Please refer to the following stackoverflow thread:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/1260/1261#1261"}>Link to stackoverflow thread</a></li></ul></>},
{title: "Does the SSO/Keycloak support indigenous characters?",
content: <><p>Yes, it does. This question has been answered in following stackoverflow thread:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/1267/1268#1268"}>Link to stackoverflow thread</a></li></ul></>},
{title: "When using the IDIR IDP is there a way to automatically detect the BC Gov VPN so the user doesn’t have to enter their credentials? E.g. Compass Intranet?",
content: <><p> This is a functionality specifically on the identity provider side and needs to be discussed with them. </p></>},
{title: "Could SSO/Keycloak be used to allow members of the federal gov to authenticate and access resources?",
content: <><p>This is restricted to BC Gov only at the moment.</p></>},
{title: "Is there a way to check if an IDIR user exists in an automated fashion?",
content: <><p>There are a couple of approaches to this which can be found in following thread:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/1237/1238#1238"}>Link to stackoverflow thread</a></li></ul></>},
{title: "How can I get user details from the KeyCloak API in the default realm?",
content: <><p>For more information, please refer: </p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/173/175#175"}>Link to stackoverflow thread</a></li></ul></>},
{title: "What is the recommended timeout for an access token? What about a refresh token?",
content: <><p>The recommended settings can be found here: </p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/508/509#509"}>Link to stackoverflow thread</a></li></ul></>},
{title: "Where can I find more information about the BC Government Keycloak offerings?",
content: <><p>The BC Gov SSO team has created "http://mvp.developer.gov.bc.ca"
You can also refer to the following stack overflow thread for more information:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/95/96#96"}>Link to stackoverflow thread</a></li></ul></>}];

<FaqItem faqs={faqs}/>