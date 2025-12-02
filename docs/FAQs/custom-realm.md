---
sidebar_position: 3
tags:
  - Custom realm
---

# Custom Realms

import FaqItem from '../../src/components/FaqItem';

export const faqs = [
{
title: "How do I create and use a custom Authentication flow in my custom realm?",
content: <><p>Custom authentication flows can be created & used by any team with a custom realm. For more information, please visit <a href={"https://stackoverflow.developer.gov.bc.ca/questions/483/484#484"}>here</a>.</p></>},
{title: "Is it possible to change the client type / Auth. type change in Gold after the integration has been created?",
content: <><p>Auth. type is not changeable once the integration is completed, need to create a new integration with another auth. Type.</p></>},
{title: "How to add another admin in Gold custom realm?",
content: <><p>Please refer to this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/939/940#940"}>discussion</a> for more information.</p></>},
{title: "How to be mindful while working in Gold custom realm?",
content: <><p>We need you to be mindful of our linkage to certain properties and resources mapped to our Terraform state and the answer to the above question has been addressed on this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/920/921#921"}>discussion</a>.</p></>},
{title: "How do I grant Realm Administrator access to my custom realm to another team member?",
content: <><p>This scenario has been explained in the following <a href={"https://stackoverflow.developer.gov.bc.ca/questions/235/997#997"}>discussion</a>.</p></>}];

<FaqItem faqs={faqs}/>

