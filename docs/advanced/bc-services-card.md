---
sidebar_position: 2
---

# BC Services Card

The BC Services Card is an optional IDP offered for new and existing Integrations. The Pathfinder SSO Service assumes that clients have secured the required approvals before submitting requests for Integration with BC Services Card through the [CSS](https://bcgov.github.io/sso-requests/) app. These approvals enable client systems to retrieve pertinent attributes from approved privacy zones.

## Privacy Zones

A Privacy zone is a logical grouping of services that would share the same user identifiers between them. When choosing a Privacy Zone for your service, think of the government sector you are in or supporting (Health, Justice, Natural Resources, etc.) and the type of user that is logging in (member of the public vs a Professional in that sector).

The BC Services Team has established multiple [privacy zones](https://id.gov.bc.ca/oauth2/privacy-zones) tailored to various business contexts, ensuring that each zone assigns a distinct identifier to users. This approach safeguards user activity confidentiality across government systems.

For example, a new Health team could choose one of two options. If the team was creating a service that is for people to access their health records or the service needs to look up a PHN, you should choose the **Health (Citizen)** Privacy Zone. If that Health team is building a service for Health Professionals (doctors, nurses, pharmacists, etc.) for new digital forms, registration, reporting to the Ministry, etc. They should choose the **Health (Provider)** Privacy Zone.

The following table highlights the algorithms and examples of the User Identifier format used by the currently implemented Privacy Zones. When these zones were initially created, Ministry or Sector teams would have been consulted to define the format of the identifier for their services:

| Algorithm Name  | Length | Example Of User Identifier                           | Privacy Zone                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | :----: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HMAC_SHA160     |   32   | H47QQPZ7H47TUKYQOZIGKPYPH56CIPZ7                     | BC Public Service Agency (Citizen)<br />Business and Economy (Citizen)<br />Citizens' Services (Citizens)<br />Citizens' Services (Professional)<br />Education (Citizen)<br />Education (Professional)<br />Finance (Citizen)<br />Health (Provider)<br />Justice (Citizen)<br />Natural Resources (Citizen)<br />Natural Resources (Professional)<br />Transportation (Professional) |
| HMAC_SHA256     |   44   | WnpPFP9SV8kh7f7eIPcw81ttFYb3CxPSHIRUHtwN+Gs=         | Social (Citizen)                                                                                                                                                                                                                                                                                                                                                                       |
| HMAC_SHA256_B32 |   52   | H47T6D35H47SWPZFIIHT6DB7H47T6DJ7DE7T6PZ7DM7T6OSNH4NQ | Health (Citizen)                                                                                                                                                                                                                                                                                                                                                                       |

Have questions about which Privacy Zone to choose, your area is not represented, or any other technical or general questions about a BC Services Card Login service including system improvement suggestions, please contact [IDIM.Consulting@gov.bc.ca](mailto:IDIM.Consulting@gov.bc.ca) and they will ensure you get set up quickly and correctly the first time.

## User Attributes

BC Services Team has defined several standard claims or user attributes that can requested by client systems when authenticating users. These claims provide information about the authenticated user. Navigate to this [site](https://id.gov.bc.ca/oauth2/claim-types) to find available attributes.

Once an integration request is approved by the BC Services Card team, the Pathfinder SSO Service configures the required scopes for the client, enabling access to approved attributes that are subsequently returned to the client system. For `dev` and `test` environments, approval from the BC Services Card team is typically not necessary. Clients can expect their integration to be provisioned within 5 minutes of submitting a request. Any requests for custom claims shall be taken up with BC Services Card team directly.

## Home Page URI

The URL provided in this field must link to a valid web page, serving as the home page of the client application. This URL will be displayed to end users in BCSC Account Activity and potentially during authentication. Typically, the BC Services Card team lists all integrated client applications [here](https://id.gov.bc.ca/account/services), including this URL for user reference and navigation.

## References

- https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card
