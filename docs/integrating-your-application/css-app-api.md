---
sidebar_position: 20
---

# CSS App API

--- RESTful interaction

### If you need to interact with the CSS App in a RESTful way

Through our engagements with our clients, we listened to your request to have an api so your apps can connect to our CSS App.

Note: Often times, you do not want to be the only person with access to your client details or you may want to create multiple clients. If this the case, please visit [CSS App and My Teams](https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/CSS-App-My-Teams/) for more info on Team Admins and Team Members.

The SSO CSS API let's you interact with CSS Application in a RESTful way for both user and role management. To get the access to this API, an admin from a team needs to request CSS API Account through CSS Application.

## How to request a CSS API Account:

1. Login to CSS Application and select `My Dashboard` tab
1. Navigate to `My Teams` tab and select a team. [More on teams here](https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/CSS-App-My-Teams/)
1. Select `CSS API Account` tab and click on `+ Request CSS API Account` to request for an API Account
1. The request shall be approved within a few seconds and you shall be provided with the options to `copy` or `download` your CSS API Account credentials

## How to use CSS API:

1. CSS API is protected by OAuth2 client credentials flow, so a token is mandatory to make requests to CSS API
1. You can acquire a bearer token using your CSS API Account credentials
1. Add this token in the `Authorization` header in the form of `Bearer <access_token>` and make a request to the API
1. The OpenAPI Spec of the CSS API can be accessed at https://api.loginproxy.gov.bc.ca/openapi/swagger
1. Note the token endpoint will be: https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token

## How to delete CSS API Account:

1. Login to CSS Application and select `My Dashboard` tab
1. Navigate to `My Teams` tab and select a team
1. Under `CSS API Account` tab, you can find delete icon to delete your CSS API Account for that team

## FAQs

### Q: How many CSS API Accounts are permitted per team?

A: Only one CSS API Account is permitted per team

### Q: Can I use my CSS API Account to manage other team's integrations?

A: No, your CSS API Account is used only to manage your team's integrations

### Q: Can I use my CSS API Account to manage all my team's integrations in silver and gold clusters?

A: No, your CSS API Account is used only to manage your team's gold integrations

### Q: Do I need to delete CSS API Account before deleting a team?

A: When the team is deleted, the associated CSS API Account gets deleted automatically

### Q: Do I need to create an integration before requesting CSS API Account?

A: You can request CSS API Account even if there are no integrations associated with your team

### Q: Can I manage my service account's roles through the CSS API?

A: Yes, you can. For integrations that include a service account, you can provide the client ID as the username to manage that account's roles.
