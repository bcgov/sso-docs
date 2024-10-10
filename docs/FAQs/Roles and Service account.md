---
sidebar_position: 8
tags:
  - Roles
  - Service accounts
---

# Roles and Service account

import FaqItem from '../../src/components/FaqItem';

export const faqs = [
{
title: "How do I add client roles to an existing user in Keycloak?",
content: <><p>To add client roles to an existing user, please refer to the following link:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/81/82#82"}>Link to stackoverflow thread</a></li></ul></>}, 
{title: "Is it possible to add users to keycloak and assign groups/roles prior to the user logging on in a Gold custom realm?",
content: <><p>This can be done by following the steps provided in following stack overflow thread:
</p><ul><li><a href={"https://stackoverflow.developer.gov.bc.ca/questions/1041/1042#1042"}>Link to stackoverflow thread</a></li></ul></>},
{title: "Is there a way to manage service account roles in Gold?",
content: <><p>Not available at this point. You can only assign client roles to users via the CSS interface but it is in our backlog.</p></>}];

<FaqItem faqs={faqs}/>