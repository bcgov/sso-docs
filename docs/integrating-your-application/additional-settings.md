---
sidebar_position: 10
---

# Additional Settings

---
## What are the additional settings
Through the Common Hosted Single Sign On Application, with a suitable justification, you can request to configure the following settings
* **Access Token Lifespan** - This setting is for the max time before an access token is expired. The value is recommended to be short relative to the SSO timeout. _Default set to 5 mins_

* **Client Session Idle** - this setting is the time a client session is allowed to be idle before it expires. Tokens are invalidated when a client session is expired. If not set it uses the standard SSO session idle value.  _Default set to 30 mins_

* **Client Session Max** - this setting is the max time for a client session before it expires. Tokens are invalidated when a client session is expired. If not set it uses the standard SSO session max value. _Default set to 10hrs_

* **Client Offline Session Idle** - this setting is the time that client offline session is allowed to be idle before it expires. Offline tokens are invalidated when a client offline session is expired. If not set it uses the offline session idle value. _Default setting - talk to us_

* **Client Offline Session Max** - this setting is the max time before a client offline session is expired. Offline tokens are invalidate when a client offline session is expired. If not set, it uses the offline session max value. _Default setting - talk to us_

More information can be found [here](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.5/html/server_administration_guide/managing_user_sessions#timeouts)