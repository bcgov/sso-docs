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
content: <><p>To add client roles to an existing user, please refer to this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/81/82#82"}>discussion</a>.</p></>}, 
{title: "Is it possible to add users to keycloak and assign groups/roles prior to the user logging on in a Gold custom realm?",
content: <><p>This can be done by following the steps provided in this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1041/1042#1042"}>discussion</a>.</p></>},
{title: "Is there a way to manage service account roles in Gold?",
content: <><p>Yes. You can assign client roles to service account via the CSS interface. Click <a href={"https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/Creating-a-Role/#service-account-role-management"}>here</a> for more information.</p></>}];

<FaqItem faqs={faqs}/>