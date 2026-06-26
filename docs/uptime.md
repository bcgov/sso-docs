---
sidebar_position: 6
tags:
  - sso-contact
  - uptime
  - service-levels
---

# Service Uptime and Monitoring

## Overview

The SSO service operates across a primary cluster and a disaster recovery (DR) cluster to ensure high availability. This page provides links to uptime monitoring dashboards and explains what each health check measures and what happens when the service enters disaster recovery mode.

For current service status and incident updates, visit [status.loginproxy.gov.bc.ca](https://status.loginproxy.gov.bc.ca/).

---

## Do you think SSO service is down?

1. Check [status.loginproxy.gov.bc.ca](https://status.loginproxy.gov.bc.ca/)
2. We will provide live updates as we learn more in our [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)
3. If you see the other alerts please know we are working to resolve this. We will post in [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) and update the history and incident section
4. you can always reach a human via our [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) or by emailing us at [SSO Team](mailto:bcgov.sso@gov.bc.ca)

---

## Uptime Monitoring Checks

The following checks measure different aspects of the SSO service health:

| Check | Purpose | Link |
| --- | --- | --- |
| **PROD Service Uptime** | Measures whether the production SSO service itself is running | [View Check](https://status.loginproxy.gov.bc.ca/statuspage/sso-keycloak-uptime/5830615) |
| **TEST Service Uptime** | Measures whether the test SSO service itself is running | [View Check](https://status.loginproxy.gov.bc.ca/statuspage/sso-keycloak-uptime/5830621) |
| **DEV Service Uptime** | Measures whether the dev SSO service itself is running | [View Check](https://status.loginproxy.gov.bc.ca/statuspage/sso-keycloak-uptime/5830618) |

---

## DNS Checks

DNS checks verify that each environment's hostname is correctly routing to the primary Gold cluster. If a DNS check fails while other uptime checks pass, the service may be running in disaster recovery mode with traffic routed to the DR cluster.

| Environment | DNS Check |
| --- | --- |
| **PROD** | [Prod DNS Check](https://status.loginproxy.gov.bc.ca/statuspage/sso-keycloak-uptime/5825176) — Verifies `loginproxy.gov.bc.ca` routes to Gold cluster |
| **TEST** | [Test DNS Check](https://status.loginproxy.gov.bc.ca/statuspage/sso-keycloak-uptime/5825173) — Verifies `test.loginproxy.gov.bc.ca` routes to Gold cluster |
| **DEV** | [Dev DNS Check](https://status.loginproxy.gov.bc.ca/statuspage/sso-keycloak-uptime/5825170) — Verifies `dev.loginproxy.gov.bc.ca` routes to Gold cluster |

---

## Disaster Recovery Mode

When the primary cluster is unavailable, the SSO service automatically fails over to the disaster recovery cluster. Traffic is rerouted transparently, and service continues with minimal interruption.

### When Failover Occurs

Failover may be triggered by:

- **OpenShift platform upgrades** — the SSO team coordinates in advance and notifies the community via the Microsoft Teams Keycloak How-to Channel.
- **Incidents on the primary cluster** — the SSO team sends notifications as failover is initiated and completed.

### Communication During Failover

The SSO team communicates failover status through:

- **Email notifications** — sent to all teams with active integrations
- **Microsoft Teams** — updates posted in the [Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)
- **Status page** — [status.loginproxy.gov.bc.ca](https://status.loginproxy.gov.bc.ca/)

### Important: Configuration Changes Are Not Preserved

> **Critical:** Any configuration changes made to your integration during disaster recovery mode **will be lost** when the service returns to the primary cluster. The DR cluster runs from a backup snapshot and does not sync changes back to production.

If you need to make configuration changes during a failover, wait until the service is restored to the primary cluster.

### Typical Failover Timeline

1. **Failover initiated** — "The Gold Keycloak instance is failing over to the DR cluster"
   - The CSS App may be put into maintenance mode
   - Check the [status page](https://status.loginproxy.gov.bc.ca/) for updates

2. **Failover complete** — "The Gold Keycloak instance has failed over to the DR cluster"
   - End users can continue logging in to integrated applications
   - The SSO service prioritizes availability for end-user authentication and automation
   - Do not make configuration changes

3. **Service restored** — "The Gold Keycloak instance has been restored to the primary cluster"
   - Normal operations resume
   - Configuration changes made during DR are not present — re-apply them if needed
   - Service returns to normal SLA targets

---

## Service Level Agreement (SLA)

The SSO service targets **99.95% availability**, translating to approximately **22 minutes of downtime per month**. However, actual availability is constrained by several external dependencies beyond the SSO team's direct control.

### Availability Guarantees

The SSO service operates **24/7**, except during planned maintenance windows. Planned outages within the Kamloops and Calgary data centers are communicated in advance through the [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc).

**Business Hours Support:**

- **Hours:** Weekdays 9:00 AM–5:00 PM Pacific Time (excluding statutory holidays)
- **Scope:** Client provisioning questions, feature requests, and general guidance
- **Response time:** Best effort during business hours

**After-Hours Support:**

- **Scope:** Service outages and incidents impacting authentication
- **Availability:** 24/7 incident response
- **Contact:** Email [bcgov.sso@gov.bc.ca](mailto:bcgov.sso@gov.bc.ca) or the [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc)

---

### Incident Response Times

The SSO team classifies incidents into four priority levels with target response times:

| Priority | Severity | Example | Business Hours | After Hours |
| --- | --- | --- | --- | --- |
| **P1 — Critical** | Service outage | Keycloak or authentication is unavailable | < 15 min | < 30 min |
| **P2 — High** | Stability warning | Stability issue that may cause an outage if not addressed | < 30 min | < 60 min |
| **P3 — Moderate** | Degradation warning | Moderate issue not requiring immediate intervention | < 30 min | Best effort |
| **P4 — Low** | Minor warning | Non-critical system health issue | < 45 min | Best effort |

All incidents are detected and escalated through the SSO team's 24/7 monitoring system.

---

### Limitations: Zero-Downtime Deployments

The current version of Red Hat Build of Keycloak does not support zero-downtime (blue-green) deployments. When the SSO team upgrades Keycloak or applies security patches, brief downtime is required.

**During upgrades and patches:**

- Users with active sessions must re-authenticate
- Users are notified in advance via the [Teams channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) with the specific maintenance window

---

### Change Communications

The SSO team provides advance notice for all planned changes:

| Change Type | Advance Notice | Announcement Channel | Example |
| --- | --- | --- | --- |
| **Minor** | 24 hours | [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) | Bug fixes, low-impact changes |
| **Medium/Major** | 5 business days | [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) | Keycloak version upgrades |
| **Emergency** | As soon as possible | [Microsoft Teams Keycloak How-to Channel](https://teams.microsoft.com/l/channel/19%3A35d0b3389e39479590ba45a19a67a3ba%40thread.tacv2/SSOKeycloak-howto?groupId=a80418da-c27b-406e-89ab-7695b61924d8&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) + [SSO Team Email](mailto:bcgov.sso@gov.bc.ca) | Security vulnerabilities, service recovery |

---

### Factors That Impact SSO Service SLA

The SSO service is one component in a larger infrastructure stack. Outages or performance issues in any of the following layers can affect the availability of SSO:

#### 1. Private Cloud Platform Services (OpenShift)

The SSO service runs on the BC Government's Private Cloud Platform (OpenShift), hosted in data centers in Kamloops (primary) and Calgary (disaster recovery).

| Factor | Details |
| --- | --- |
| **Availability Commitment** | 99.95% uptime |
| **Impact of Planned Outages** | Minimal — the SSO team uses automated failover to the DR cluster (typically ≤15 minutes) |
| **Impact of Unplanned Outages** | Affects SSO availability if both primary and DR clusters are impacted |

#### 2. Data Center Infrastructure

The Kamloops and Calgary data centers provide the underlying physical and network infrastructure for the OpenShift platform. The SSO team relies on the SLAs negotiated between the Province and the data center operators.

| Factor | Details |
| --- | --- |
| **Availability Commitment** | 99.5% uptime |
| **Responsibility** | Data center operators and the Province; not controlled by the SSO team |
| **Impact** | Any unplanned outage at the data center level directly impacts SSO availability |

#### 3. Upstream Identity Providers (IDPs)

The SSO service depends on external identity providers for authentication. Outages in these services are entirely outside the SSO team's control.

| IDP | Operated By | Impact If Down |
| --- | --- | --- |
| **IDIR / IDIR - MFA** | Access Directory Management Services (ADMS/WAM) | Users cannot authenticate with IDIR or IDIR - MFA |
| **BCeID** | Provincial Identity Information Management (IDIM) | Users cannot authenticate with BCeID |
| **BC Services Card** | BC Services Card team | Users cannot authenticate with BC Services Card |
| **Other IDPs** | GitHub, Digital Credential, etc. | Users cannot authenticate with that specific IDP |

> **Note:** While the SSO service itself may be running, if all upstream IDPs are unavailable, end users cannot log in to any applications.

### Overall SLA Calculation

The effective SLA of the SSO service is constrained by the weakest link in the dependency chain. Because the SSO team depends on 99.5% availability from data centers (rather than 99.95%), the realistic SLA target is **99.5%** when accounting for all infrastructure dependencies.

Upstream IDP outages further reduce the effective end-user availability, as users cannot authenticate even if SSO is operational.

### How the SSO Team Manages Availability

- **Automated failover** — detects primary cluster failures and automatically routes traffic to the DR cluster with minimal latency
- **Monitoring and alerts** — 24/7 monitoring of service health and upstream IDP status
- **Maintenance windows** — coordinated in advance via the Teams Keycloak How-to Channel to minimize impact

For the complete list of current monitoring checks and real-time status, visit [status.loginproxy.gov.bc.ca](https://status.loginproxy.gov.bc.ca/).

---

## Cost

There is no cost for the SSO service for BC Government ministries, central agencies, and Crown corporations. Any future changes to the cost model will be communicated in advance
