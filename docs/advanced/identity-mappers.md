---
sidebar_position: 1
---

# Gold Identity Mapper Guide

--- Our gold custom service and how we work


**Note**: The first column (`User Property/Attribute`) is just a reference title and must not be consumed for attribute mapping, instead please use the last column (`Standard Realm - OIDC Payload`) to use it as the claim name in your Identity Providers Mappers configuration.

---

## IDP Attributes & Mappers

### IDIR

**Note**:

- In Gold, the SAML payload contains `<NameID>`, whose value is same as that of the `idir_user_guid` will be mapped to `username` of the logging in user inside parent realm

  | User Property/Attribute               | IDP - SAML Payload(\*) | Parent Realm Mapper | Custom/Standard Realm Mapper                     | Standard Realm - OIDC Payload |
  | ------------------------------------- | ---------------------- | ------------------- | ------------------------------------------------ | ----------------------------- |
  | First Name                            | first_name             | given_name          | given_name                                       | given_name                    |
  | Last Name                             | last_name              | family_name         | family_name                                      | family_name                   |
  | Email                                 | email                  | email               | email                                            | email                         |
  | Display Name                          | display_name           | display_name        | display_name                                     | display_name                  |
  | IDIR Username                         | idir_username          | idir_username       | idir_username                                    | idir_username                 |
  | IDIR User GUID                        | idir_user_guid         | idir_user_guid      | idir_user_guid                                   | idir_user_guid                |
  | Keycloak Generated Preferred Username | idir_user_guid         | preferred_username  | preferred_username=`{{preferred_username}}@idir` | preferred_username            |

### Azure IDIR

In Gold

| User Property/Attribute               | IDP - SAML Payload(\*) | Parent Realm Mapper | Custom/Standard Realm Mapper                          | Standard Realm - OIDC Payload |
| ------------------------------------- | ---------------------- | ------------------- | ----------------------------------------------------- | ----------------------------- |
| First Name                            | first_name             | given_name          | given_name                                            | given_name                    |
| Last Name                             | last_name              | family_name         | family_name                                           | family_name                   |
| Email                                 | email                  | email               | email                                                 | email                         |
| Display Name                          | display_name           | display_name        | display_name                                          | display_name                  |
| IDIR Username                         | idir_username          | idir_username       | idir_username                                         | idir_username                 |
| IDIR User GUID                        | idir_user_guid         | idir_user_guid      | idir_user_guid                                        | idir_user_guid                |
| User Principal Name                   | user_principal_name    | user_principal_name | user_principal_name                                   | user_principal_name           |
| Keycloak Generated Preferred Username | idir_user_guid         | preferred_username  | preferred_username=`{{preferred_username}}@azureidir` | preferred_username            |

### Basic BCeID

- In Gold

  | User Property/Attribute               | IDP - SAML Payload(\*) | Parent Realm Mapper | Custom/Standard Realm Mapper                        | Standard Realm - OIDC Payload |
  | ------------------------------------- | ---------------------- | ------------------- | --------------------------------------------------- | ----------------------------- |
  | Email                                 | email                  | email               | email                                               | email                         |
  | Display Name                          | display_name           | display_name        | display_name                                        | display_name                  |
  | Display Name                          | display_name           | display_name        | given_name                                          | given_name                    |
  | BCeID Username                        | bceid_username         | bceid_username      | bceid_username                                      | bceid_username                |
  | BCeID User GUID                       | bceid_user_guid        | bceid_user_guid     | bceid_user_guid                                     | bceid_user_guid               |
  | Keycloak Generated Preferred Username | bceid_user_guid        | preferred_username  | preferred_username=`{{bceid_user_guid}}@bceidbasic` | preferred_username            |

### Business BCeID

- In Gold

  | User Property/Attribute               | IDP - SAML Payload(\*)  | Parent Realm Mapper | Custom/Standard Realm Mapper                           | Standard Realm - OIDC Payload |
  | ------------------------------------- | ----------------------- | ------------------- | ------------------------------------------------------ | ----------------------------- |
  | Email                                 | email                   | email               | email                                                  | email                         |
  | Display Name                          | display_name            | display_name        | display_name                                           | display_name                  |
  | Display Name                          | display_name            | display_name        | given_name                                             | given_name                    |
  | BCeID Username                        | bceid_username          | bceid_username      | bceid_username                                         | bceid_username                |
  | BCeID User GUID                       | bceid_user_guid         | bceid_user_guid     | bceid_user_guid                                        | bceid_user_guid               |
  | Keycloak Generated Preferred Username | bceid_user_guid         | preferred_username  | preferred_username=`{{bceid_user_guid}}@bceidbusiness` | preferred_username            |
  | BCeID Business Guid                   | SMGOV_BUSINESSGUID      | bceid_business_guid | bceid_business_guid                                    | bceid_business_guid           |
  | BCeID Business Name                   | SMGOV_BUSINESSLEGALNAME | bceid_business_name | bceid_business_name                                    | bceid_business_name           |

### BCeID Both

- In Gold

  | User Property/Attribute               | IDP - SAML Payload(\*)  | Parent Realm Mapper | Custom/Standard Realm Mapper                       | Standard Realm - OIDC Payload |
  | ------------------------------------- | ----------------------- | ------------------- | -------------------------------------------------- | ----------------------------- |
  | Email                                 | email                   | email               | email                                              | email                         |
  | Display Name                          | display_name            | display_name        | display_name                                       | display_name                  |
  | Display Name                          | display_name            | display_name        | given_name                                         | given_name                    |
  | BCeID Username                        | bceid_username          | bceid_username      | bceid_username                                     | bceid_username                |
  | BCeID User GUID                       | bceid_user_guid         | bceid_user_guid     | bceid_user_guid                                    | bceid_user_guid               |
  | Keycloak Generated Preferred Username | bceid_user_guid         | preferred_username  | preferred_username=`{{bceid_user_guid}}@bceidboth` | preferred_username            |
  | BCeID Business Guid                   | SMGOV_BUSINESSGUID      | bceid_business_guid | bceid_business_guid                                | bceid_business_guid           |
  | BCeID Business Name                   | SMGOV_BUSINESSLEGALNAME | bceid_business_name | bceid_business_name                                | bceid_business_name           |

### GitHub Public

- In Gold

  | User Property/Attribute               | IDP - SAML Payload(\*) | Parent Realm Mapper | Custom/Standard Realm Mapper             | Standard Realm - OIDC Payload            |
  | ------------------------------------- | ---------------------- | ------------------- | ---------------------------------------- | ---------------------------------------- |
  | Email                                 | email                  | email               | email                                    | email                                    |
  | Display Name                          | name                   | display_name        | display_name                             | display_name                             |
  | Display Name                          | name                   | display_name        | display_name                             | name                                     |
  | Display Name                          | name                   | display_name        | given_name                               | given_name                               |
  | GitHub ID                             | id                     | github_id           | github_id                                | github_id                                |
  | Keycloak Generated Preferred Username | id                     | preferred_username  | preferred_username=`{{id}}@githubpublic` | preferred_username=`{{id}}@githubpublic` |
  | GitHub Username                       | login                  | github_username     | github_username                          | github_username                          |
  | BCGov Github Membership               |                        | org_verified        | org_verified                             | org_verified                             |
  | BCGov Github Orgs                     |                        | orgs                | orgs                                     | orgs                                     |

### GitHub BCGov

- In Gold

  | User Property/Attribute               | IDP - SAML Payload(\*) | Parent Realm Mapper | Custom/Standard Realm Mapper            | Standard Realm - OIDC Payload           |
  | ------------------------------------- | ---------------------- | ------------------- | --------------------------------------- | --------------------------------------- |
  | Email                                 | email                  | email               | email                                   | email                                   |
  | Display Name                          | name                   | display_name        | display_name                            | display_name                            |
  | Display Name                          | name                   | display_name        | display_name                            | name                                    |
  | Display Name                          | name                   | display_name        | given_name                              | given_name                              |
  | GitHub ID                             | id                     | github_id           | github_id                               | github_id                               |
  | Keycloak Generated Preferred Username | id                     | preferred_username  | preferred_username=`{{id}}@githubbcgov` | preferred_username=`{{id}}@githubbcgov` |
  | GitHub Username                       | login                  | github_username     | github_username                         | github_username                         |
  | BCGov Github Membership               |                        | org_verified        | org_verified                            | org_verified                            |
  | BCGov Github Orgs                     |                        | orgs                | orgs                                    | orgs                                    |

  - `org_verified`: `true` if the authenticated user has `bcgov` GitHub org membership, otherwise, `false`.
  - `orgs`: `space-separated` list of BCGov GitHub org that the authenticated user has a membership of.
