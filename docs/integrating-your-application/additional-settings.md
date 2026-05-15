---
sidebar_position: 11
title: Additional Settings
description: Learn about all the additional settings in the CSS app and how you can configure them.
---


## What Are the Additional Settings?

Through the Common Hosted Single Sign‑On (CSS) Application, you may request configuration of the following settings, provided you supply an appropriate justification. These settings allow you to fine‑tune session and token behavior for your client.

- **Access Token Lifespan**  
  Defines the maximum lifetime of an access token before it expires. This value should generally be short relative to the overall SSO session timeout.  
  _Default: 5 minutes_

- **Refresh Token Lifespan**  
  Specifies how long a client session may remain idle before it expires. When the client session expires, all associated tokens are invalidated.  
  If not explicitly set, the standard SSO session idle value is used. This value should not exceed the SSO session idle timeout, as tokens will still expire when the SSO session ends.  
  _Default: 30 minutes_

- **Session Max Lifespan**  
  Specifies the maximum lifetime of a client session, regardless of activity. Once this limit is reached, the client session expires and all tokens are invalidated.  
  If not set, the standard SSO session maximum is applied. This value must not exceed the SSO session maximum, as tokens cannot be refreshed beyond it.  
  _Default: 10 hours_

- **Client Offline Session Idle**  
  Determines how long an offline client session may remain idle before it expires. When the offline session expires, all offline tokens are invalidated.  
  If not set, the standard offline session idle value applies.  
  _Default: Contact the SSO team_

- **Client Offline Session Max**  
  Defines the maximum lifetime of an offline client session. Once expired, all offline tokens are invalidated.  
  If not set, the standard offline session maximum is applied.  
  _Default: Contact the SSO team_

