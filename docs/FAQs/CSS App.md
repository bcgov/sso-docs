---
sidebar_position: 2
tags:
  - Protocol
  - Redirects
  - URI
  - IDP (Identity provider)
  - CSS App
  - Roles
  - Service accounts Admin and approval
---

# CSS App

import FaqItem from '../../src/components/FaqItem';

export const faqs = [
{
title: "How to add a new admin in CSS App?",
content: <><p>To add a new admin, please refer to this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1231/1232#1232"}>discussion</a>.</p></>},
{title: "What's the business level description of the Common Hosted Single Sign On App's use cases?",
content: <><p>As an IDIR user you make use of our CSS App; In the CSS App you can request one of 3 use cases:

<ul>
 <li>Browser Login</li>
 <li>Service Account</li>
 <li>Browser Login and Service Account</li>
</ul>

For more information, please refer to the following <a href={"https://stackoverflow.developer.gov.bc.ca/questions/984/985#985"}>discussion</a> thread. </p></>},
{title: "Once I sign up for a test BCeID, is there an easy way to find my GUID for use in CSS App?",
content: <><p>Unfortunately, it’s IDIM’s policy that folks can’t “phish” for individual BCeIDs by name. They have to know the GUID to find the data.</p></>},
{title: "Can I have a pop-up style login window instead of redirection?",
content: <><p>You can customize your login experience by referring to this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/922/926#926"}>discussion</a>.</p></>},
{title: "How to setup BCeID test accounts while integrating SSO-Keycloak with client app, using the SSO team's CSS app?",
content: <><p>Please click <a href={"https://stackoverflow.developer.gov.bc.ca/questions/704/707#707"}>here</a> for more information.</p></>},
{title: "How to address custom realm IDIR and BCeID accounts with missing (or empty) e-mail issue?",
content: <><p>This issue has been addressed in this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1039/1040#1040"}>discussion</a>.</p></>},
{title: "How can I integrate my digital application with a with BC government approved login option?",
content: <><p>Please refer this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/95/96#96"}>discussion</a> to get started. </p></>},
{title: "When you have to translate for a businessperson who doesn't speak technical and not have IDIR yet to know more about your offerings?",
content: <><p>When the businessperson can't speak technical and the technical person doesn`t have an IDIR yet, share this video link with them so they can understand and give some context to their developer/technical staff.
</p><ul><li><a href={"https://user-images.githubusercontent.com/56739669/231529538-0e1efa5a-51df-401a-99c2-dbc964e8cac6.mp4"}>Link to learning video</a></li></ul></>},
{title: "Is there any way to prevent CSS apps from colliding with each other? We have one app that uses IDIR, and another that uses BCeID, and I cannot be logged into both at the same time?",
content: <><p>This is a limitation from siteminder. You can use incognito windows if you’re working locally. It’s not really a normal scenario in PROD for users to log in with both in the same browser.</p></>},
{title: "Which protocol should I connect my application with? SAML or OIDC?",
content: <><p>Please click <a href={"https://stackoverflow.developer.gov.bc.ca/questions/490/491#491S"}>here</a> for more information. </p></>}];


<FaqItem faqs={faqs}/>