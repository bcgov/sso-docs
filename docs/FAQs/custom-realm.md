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
content: <><p>Custom authentication flows can be created & used by any team with a custom realm. For more information, please visit:   </p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/483/484#484"}>Link to stackoverflow thread</a></li></ul></>},
{title: "Is it possible to change the client type / Auth. type change in Gold after the integration has been created?",
content: <><p>Guidance: Auth. type is not changeable once the integration is completed, need to create a new integration with another authentication type. Refer this: </p><ul><li><a href={"https://github.com/bcgov-c/pathfinder-sso-docs/discussions/21"}>Link to github discussion</a></li></ul></>},
{title: "How to add another admin in Gold custom realm?",
content: <><p>Please refer to the following stack overflow thread for more information:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/939/940#940"}>Link to stackoverflow thread</a></li></ul></>},
{title: "How to be mindful while working in Gold custom realm?",
content: <><p>We need you to be mindful of our linkage to certain properties and resources mapped to our Terraform state and the answer to the above question has been addressed on stack overflow thread:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/920/921#921"}>Link to stackoverflow thread</a></li></ul></>},
{title: "How do I grant Realm Administrator access to my custom realm to another team member?",
content: <><p>This scenario has been explained in following stack overflow thread:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/235/997#997"}>Link to stackoverflow thread</a></li></ul></>}];

<FaqItem faqs={faqs}/>

