---
sidebar_position: 9
description: Learn how to use CSS API to interact with CSS in RESTful way
---

# CSS API

## Overview

The **CSS API** enables RESTful interaction with the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) for **user and role management**. Access to the API requires a **CSS API Account**, which must be requested by a team administrator through the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/).

## Requesting a CSS API Account

1. Log in to the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) and select **My Dashboard** tab.
2. Navigate to **My Teams** and select the appropriate team. To learn more about teams click [here](https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/CSS-App-My-Teams/)
3. Select the **CSS API Account** tab and click **+ Request CSS API Account**.
4. The request is typically approved within seconds. Once approved, you can **copy** or **download** your CSS API Account credentials.

## Accessing the CSS API

1. The CSS API is secured using the **OAuth 2.0 Client Credentials** flow. An access token is required for all API requests.
1. Obtain a bearer token using your **CSS API Account** credentials.
1. Include the token in the `Authorization` header of each request:
1. The CSS API OpenAPI (Swagger) specification is available at [CSS API OpenAPI (Swagger) specification](https://api.loginproxy.gov.bc.ca/openapi/swagger)
1. The token endpoint is: [https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token](https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token)

## Removing CSS API Account

1. Log in to the CSS Application and select the **My Dashboard** tab.
2. Navigate to **My Teams** and select the relevant team.
3. Under the **CSS API Account** tab, select the delete (trash) icon to remove the CSS API Account for that team.

## Troubleshooting

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
