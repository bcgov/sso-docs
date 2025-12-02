---
sidebar_position: 4
tags:
  - SSO
---

# SSO

import FaqItem from '../../src/components/FaqItem';

export const faqs = [
{
title: "What are the discovery endpoints for the BC Gov SSO product?",
content: <><p>The information about discovery endpoints is given under following <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1265/1266#1266"}>discussion</a>.</p></>},
{title: "Where can I find the public key for the BC Government's SSO instances?",
content: <><p>You can find the public keys for the standard realm information at the following <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1256/1257#1257"}>discussion</a>.</p></>},
{title: "What are the requirements for two apps to have SSO?",
content: <><p>If they're both in the same realm and you're using the same IDP it should be a seamless experience.</p></>
}];

<FaqItem faqs={faqs}/>