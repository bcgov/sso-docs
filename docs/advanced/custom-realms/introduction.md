---
sidebar_position: 1
description: Learn about custom realms
---

# Introduction

## Overview

Most BC Government teams integrate with the SSO service through the **Standard Realm** — a shared Keycloak realm operated and maintained by the SSO team, where clients are provisioned automatically via the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/). This is the recommended path for the vast majority of applications.

A **Custom Realm** is an alternative for teams whose requirements cannot be met within the Standard Realm. With a Custom Realm, your team has full control over the realm configuration — but also takes on full responsibility for operating it. This is a significant long-term commitment and should not be undertaken lightly.

**What you'll learn:**

- The difference between the Standard Realm and a Custom Realm
- What your team is responsible for when operating a Custom Realm
- Guidelines for governance, privacy, and technical configuration
- Best practices and common pitfalls to avoid

---

## Standard Realm vs. Custom Realm

### Standard Realm — SSO Team Configures It for You

The Standard Realm is the default service tier. When you submit an integration request through the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/), a client is automatically provisioned in the Standard Realm on your behalf. You do not need to manage realm-level configuration.

**What the SSO team provides:**

- **Self-registration** — fully self-serve onboarding via the [CSS](https://sso-requests.apps.gold.devops.gov.bc.ca/) with no manual steps required.
- **Fast environment access** — **DEV** and **TEST** environments are typically available within minutes.
- **Continuous improvement** — the SSO team actively maintains the realm, applies security patches, and improves configuration over time.
- **Secure defaults** — session timeouts, token lifespans, and security settings are pre-configured to align with BC Government security standards.
- **Architecture best practices** — the realm is structured to support shared-tenancy, with each client isolated within its own credentials and redirect URIs.
- **Developer support** — the SSO team is available via Microsoft Teams and email to help with integration questions.
- **24/7 site reliability monitoring** — the platform is monitored continuously for availability and performance issues.

---

### Custom Realm — Your Team Configures and Operates It

A Custom Realm gives your team direct access to Keycloak's realm-level configuration. This is appropriate for teams that need advanced customisation — for example, specific IDP federation requirements, custom mappers, or governance structures that cannot be expressed within the Standard Realm's shared model.

> **Important:** Before requesting a Custom Realm, discuss your requirements with the SSO team. In many cases, your needs can be met within the Standard Realm without taking on the operational overhead of managing your own realm.

**Your team's responsibilities include:**

- **Governance model** — establishing clear policies for who can make configuration changes, how changes are reviewed and approved, and how access to the realm is managed over time.
- **Infrastructure-as-code** — writing and maintaining the infrastructure code used to promote realm configuration changes across dev, test, and production environments consistently and auditably.
- **Access management** — deciding which teams and individuals have access to the realm and at what level, and handling access changes as teams grow, shrink, or move between ministries.
- **Ministry migration** — managing the migration of project teams if they move between ministries, including updating identity federation and access controls accordingly.
- **Long-term DevOps and technical support** — ensuring there is always someone with the knowledge and capacity to support the realm. The SSO team does not provide operational support for Custom Realm configuration decisions.

---

## Custom Service Guidelines

If you operate a Custom Realm, the following guidelines help ensure the realm is configured safely, privately, and in a way that is maintainable over time.

### Privacy and Governance

- **Understand your privacy obligations** — everyone involved in operating the realm must understand which user identifiers, authorisations, and personal attributes are stored or processed, and the associated privacy implications.
- **Review before sharing** — if you intend to share the realm across multiple teams or ministries, you must first review the applicable STRA (Security Threat and Risk Assessment), PIA (Privacy Impact Assessment), and any relevant legislation or policy. Sharing a realm without this review creates privacy and security risk.

### Configuration Principles

- **Minimise log retention** — Keycloak logs can contain sensitive user information. Ensure logs are either not stored, or stored only for the shortest period required and with appropriate access controls.
- **Avoid realm-level shared resources** — do not use realm-level groups, roles, or other resources as a mechanism to share the realm across multiple application teams. This creates tight coupling between tenants and makes governance and troubleshooting significantly harder. Each application team should operate independently within its own client.

### User Identity

- **Use GUIDs as user identifiers** — do not use Keycloak's internal user ID as the username or as an application-level identifier. Use the GUID provided by the upstream IDP (e.g., the IDIR GUID or BCeID GUID) as the stable, portable identifier for a user.
- **Do not use local Keycloak users** — all users should be federated from an external, authoritative IDP. Local Keycloak users are not auditable against an external source of truth and should be avoided entirely.
- **Use IDP-suffixed usernames** — ensure the Keycloak username includes a suffix that identifies the source IDP (e.g., `user@idir`, `user@bceidbasic`). This prevents username collisions across IDPs and makes it unambiguous which IDP was used to authenticate a given user. This is particularly important for offline token validation and automation scenarios.

### Session and Token Configuration

- **Set appropriate session and token timeouts** — configure access token lifespan, session idle timeout, and session max lifespan to values that balance security and usability for your use case. Do not leave these at Keycloak defaults without reviewing them against your application's requirements.
- **Manage offline tokens explicitly** — offline tokens do not expire when the Keycloak session ends. Revoke them after use for one-time tasks, and set a maximum offline session lifespan for all other cases. Never leave offline token lifespans unconstrained.
- **Validate tokens at the application level** — verify JWT signatures locally using Keycloak's JWKS endpoint rather than calling the Token Introspection endpoint on every request. See [Do's and Don'ts](../../best-practices/dos-donts.md#do-validate-tokens-at-the-application-level) for implementation guidance.

### Environment Management

- **Synchronise configuration across environments using code** — do not manually promote realm configuration from dev to test to prod. Use infrastructure-as-code tooling (e.g., Terraform with the Keycloak provider, or Keycloak's export/import) to ensure environments remain consistent and changes are tracked in version control.

---

## ✅ Do's

| Practice | Why It Matters |
| --- | --- |
| **Write clear realm usage documentation** | Reduces dependency on individuals and helps new team members onboard without needing to reverse-engineer the configuration. |
| **Automate login testing** | Catches authentication regressions before they reach production. Login flows are often broken by Keycloak upgrades or configuration changes. |
| **Document support tiers and escalation paths** | Teams using your realm need to know who to contact for realm-level issues (your team) vs. IDP-level issues (SSO team) vs. platform issues. |
| **Create and maintain a disaster recovery plan** | Covers scenarios such as realm configuration loss, accidental client deletion, credential rotation, and IDP federation failures. |

---

## ⚠️ Don'ts

| Practice | Why It's Harmful |
| --- | --- |
| **Don't call the Token Introspection endpoint on every request** | This generates a synchronous Keycloak call for every authenticated request. At scale, it can overwhelm Keycloak and degrade service for all clients in your realm — and across the platform. |
| **Don't use the IDIR or BCeID user ID as the Keycloak username** | These IDs are not stable across all contexts and can create identifier collisions. Use the GUID provided by the IDP and suffix it with the IDP alias. |
| **Don't manually promote Keycloak configuration across environments** | Manual promotion is error-prone, unauditable, and leads to configuration drift between environments. Use infrastructure-as-code for all configuration changes. |

### What must I never modify or delete in my custom realm?

The SSO team provisions each Custom Realm with a set of roles, groups, and clients required for the realm administration model to function. **Modifying or deleting any of the following will break realm administration and may require SSO team intervention to recover.**

**Protected roles — do not delete or rename:**

| Role | Purpose |
| --- | --- |
| `realm-admin` | Grants full administrative access to the realm. Assigned to the Realm Administrator group. |
| `realm-viewer` | Grants read-only access to realm configuration. Assigned to the Realm Viewer group. |

**Protected groups — do not delete or rename:**

| Group | Purpose |
| --- | --- |
| `Realm Administrator` | Members have full admin access to the realm. |
| `Realm Viewer` | Members have read-only access to realm configuration. |

**Protected clients — do not delete or modify:**

| Client | Purpose |
| --- | --- |
| `realm-admin-cli` | Used for administrative API access scoped to the realm-admin role. |
| `realm-viewer-cli` | Used for read-only API access scoped to the realm-viewer role. |

> **Do not rename the realm itself.** The realm name is embedded in all token issuer URLs (`iss` claim), IDP federation configuration, and client redirect URIs across all environments. Renaming the realm will invalidate all existing tokens, break all client integrations, and require full reconfiguration of all federated IDPs. Contact the SSO team before making any such change.

> **If any of these resources are accidentally deleted or modified**, contact the SSO team immediately. Recovery may require restoring from a realm export — which is another reason to maintain regular infrastructure-as-code exports of your realm configuration.

