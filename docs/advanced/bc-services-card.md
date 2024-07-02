---
sidebar_position: 2
---

# BC Services Card

The BC Services Card is an optional IDP offered for new and existing Integrations. The Pathfinder SSO Service assumes that clients have secured the required approvals before submitting requests for Integration with BC Services Card through the [CSS](https://bcgov.github.io/sso-requests/) app. These approvals enable client systems to retrieve pertinent attributes from approved privacy zones.

## Privacy Zones

The BC Services Team has established multiple [privacy zones](https://id.gov.bc.ca/oauth2/privacy-zones) tailored to various business contexts, ensuring that each zone assigns a distinct identifier to users. This approach safeguards user activity confidentiality across government systems.

## User Attributes

BC Services Team has defined several standard claims or user attributes that can requested by client systems when authenticating users. These claims provide information about the authenticated user. Navigate to this [site](https://id.gov.bc.ca/oauth2/claim-types) to find available attributes.

Once an integration request is approved by the BC Services Card team, the Pathfinder SSO Service configures the required scopes for the client, enabling access to approved attributes that are subsequently returned to the client system. For `dev` and `test` environments, approval from the BC Services Card team is typically not necessary. Clients can expect their integration to be provisioned within 5 minutes of submitting a request. Any requests for custom claims shall be taken up with BC Services Card team directly.

## References

- https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card
