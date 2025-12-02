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
content: <><p>This is due to the access control checks. Guidance: Try in fresh browser or in "incognito window"</p></>},
{title: "How can I have a back to app/website navigation on an IDP login page using the broker URL?",
content: <><p>Please follow this <a href={"https://stackoverflow.developer.gov.bc.ca/questions/1240/1241#1241"}>dicussion</a> for more information.</p></>}];

<FaqItem faqs={faqs}/>
