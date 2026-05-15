---
sidebar_position: 20
title: CSS App API
description: RESTful interaction
---


### Interacting with the CSS App via REST APIs

Based on feedback from our client teams, we now offer a RESTful API that allows applications to integrate programmatically with the Common Hosted Single Sign‑On (CSS) App.

> **Note**  
> In many cases, you may not want client details to be accessible by only one individual, or you may need to manage multiple clients. If so, review CSS App and My Teams for guidance on using **Team Admins** and **Team Members**:
> https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/CSS-App-My-Teams/

The **CSS API** enables RESTful interaction with the CSS App for **user and role management**. Access to the API requires a **CSS API Account**, which must be requested by a team administrator through the CSS App.



## Requesting a CSS API Account

1. Log in to the CSS App and select the **My Dashboard** tab.
2. Navigate to **My Teams** and select the appropriate team.  
   Learn more about teams here: https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/CSS-App-My-Teams/
3. Select the **CSS API Account** tab and click **+ Request CSS API Account**.
4. The request is typically approved within seconds. Once approved, you can **copy** or **download** your CSS API Account credentials.


## Using the CSS API:

1. The CSS API is secured using the **OAuth 2.0 Client Credentials** flow. An access token is required for all API requests.
1. Obtain a bearer token using your **CSS API Account** credentials.
1. Include the token in the `Authorization` header of each request:
1. The CSS API OpenAPI (Swagger) specification is available at: https://api.loginproxy.gov.bc.ca/openapi/swagger
1. The token endpoint is: https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token



## Deleting a CSS API Account

1. Log in to the CSS Application and select the **My Dashboard** tab.
2. Navigate to **My Teams** and select the relevant team.
3. Under the **CSS API Account** tab, select the delete (trash) icon to remove the CSS API Account for that team.



## FAQs

### How many CSS API Accounts are permitted per team?
Only **one CSS API Account** is permitted per team.

### Can I use my CSS API Account to manage other teams’ integrations?
No. A CSS API Account can be used **only to manage integrations for its own team**.

### Can I use my CSS API Account to manage all my team’s integrations across Silver and Gold clusters?
No. A CSS API Account can be used **only for managing Gold Standard integrations**.

### Do I need to delete the CSS API Account before deleting a team?
No. When a team is deleted, the associated CSS API Account is automatically deleted.

### Do I need to create an integration before requesting a CSS API Account?
No. You may request a CSS API Account even if your team does not yet have any integrations.

### Can I manage service account roles through the CSS API?
Yes. For integrations that include a service account, you can manage its roles by providing the **client ID as the username** when making role‑management requests.
