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
content: <><p>This is a known issue with identity providers which retain session and has been discussed in <a href={"https://stackoverflow.developer.gov.bc.ca/questions/83/84#84"}>here</a>.</p></>},
{title: "Where can I find libraries or client adapters to connect to Keycloak?",
content: <><p>Please refer to <a href={"https://stackoverflow.developer.gov.bc.ca/questions/89/90#90"}>here</a> to learn more about this topic.</p></>},
{title: "How to share Keycloak Realm between application teams without sharing the admin credentials?",
content: <><p>This question was discussed previously. Please refer to <a href={"https://stackoverflow.developer.gov.bc.ca/questions/770/771#771"}>here</a>.</p></>},
{title: "How do I test protected pages with Cypress and Keycloak?",
content: <><p>Click <a href={"https://stackoverflow.developer.gov.bc.ca/questions/100/101#101"}>here</a> for the different approaches to address this query.</p></>},
{title: "How do i get the GUID of the client under Client settings in Keyclock?",
content: <><p>We do not provide this unless you are a custom realm owner pursuing a migration.</p></>
},
{title: "Which time zone is used for the SSO (Keycloak) product?",
content: <><p>The time zone used is PST (Pacific Standard Time). For more information, click <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1260/1261#1261"}>here</a>.</p></>},
{title: "Does the SSO/Keycloak support indigenous characters?",
content: <><p>Yes, it does. This question has been answered in following <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1267/1268#1268"}>discussion</a>.</p></>},
{title: "When using the IDIR IDP is there a way to automatically detect the BC Gov VPN so the user doesn’t have to enter their credentials? E.g. Compass Intranet?",
content: <><p> This is a functionality specifically on the identity provider side and needs to be discussed with them. </p></>},
{title: "Could SSO/Keycloak be used to allow members of the federal gov to authenticate and access resources?",
content: <><p>This is restricted to BC Gov only at the moment.</p></>},
{title: "Is there a way to check if an IDIR user exists in an automated fashion?",
content: <><p>There are a couple of approaches to this which can be found in this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1237/1238#1238"}>discussion</a>.</p></>},
{title: "How can I get user details from the KeyCloak API in the default realm?",
content: <><p>For more information, please refer to <a href={"https://stackoverflow.developer.gov.bc.ca/questions/173/175#175"}>here</a>.</p></>},
{title: "What is the recommended timeout for an access token? What about a refresh token?",
content: <><p>The recommended settings can be found <a href={"https://stackoverflow.developer.gov.bc.ca/questions/508/509#509"}>here</a>.</p></>},
{title: "Where can I find more information about the BC Government Keycloak offerings?",
content: <><p>The BC Gov SSO team has created <a href={"https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/"}>SSO Pathfinder Knowledge Base</a>. 
You can also refer to <a href={"https://stackoverflow.developer.gov.bc.ca/questions/95/96#96"}>here</a> for more information.</p></>}];

<FaqItem faqs={faqs}/>