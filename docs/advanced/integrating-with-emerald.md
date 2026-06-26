---
sidebar_position: 12
title: Emerald Integrations
description: Learn how to configure keycloak client with your application in emerald cluster
tags:
  - emerald
---

If your project is hosted on the **Emerald cluster**, you must account for its security restrictions and network policies when using our Keycloak instance as a login proxy.

To support a standard integration, you’ll need to define an appropriate network policy, and add a yaml stanza to the app's deployment configuration to allow outbound connectivity to Keycloak.

## Network Policies

Below is an example of a network policy that grants your application access to keycloak. 

**Note:**

- The labels shown must be customized to match your application’s namespace and selectors.
- This policy is additional to any other network policies your application may require to operate correctly.

```yaml
kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: enable-api-to-keycloak
  labels:
    name: enable-api-to-keycloak
    <<LABEL_KEY>>: <<DEPLOYMENT_LABEL>>
    version: 1.0.0
  annotations:
    description: Enable the api to communicate with the keycloak
spec:
  egress:
    - to:
        - ipBlock:
            cidr: 142.34.229.4/32 # Gold cluster *.apps IP
        - ipBlock:
            cidr: 142.34.64.4/32 # Gold DR cluster *.apps IP in case SSO fails over
      ports:
        - protocol: TCP
          port: 443
  podSelector:
    matchLabels:
      <<LABEL_KEY>>: <<DEPLOYMENT_LABEL>>
      <<LABEL_KEY_2>>: <<COMPONENT_LABEL>>
  policyTypes:
    - Egress
```

## Deployment Config

Your application deployment config must include the `loginproxy.gov.bc.ca` domain in the `NO_PROXY` environment variable. This ensures traffic destined for Keycloak bypasses the platform proxy.

```yaml
kind: Deployment
apiVersion: apps/v1
spec:
  template:
    spec:
      containers:
        - name: api
          image: ""
          imagePullPolicy: Always
          env:
            - name: NO_PROXY
              value: <<COMMA SEPARATED LIST>>,loginproxy.gov.bc.ca
```

The comma‑separated list specifies destinations that should bypass the platform proxy, ensuring traffic to those URLs is sent directly. For more details on how the NO_PROXY environment variable is interpreted, see the [curl documentation](https://curl.se/docs/manpage.html#--noproxy). 
