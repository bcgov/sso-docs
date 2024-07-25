---
sidebar_position: 12
---

# Emerald Integrations

If your project is hosted on the emerald cluster, the security restrictions and network policies will need to be taken into account if you wish to use our keycloak instance as a login proxy.

For your standard integration to work, you will need to create a network policy, and add a yaml stanza to the app's deployment config.

## Network Policies

The following is an example of a network policy you can use to give your app access to keycloak.  Note: that the labels will need to be customized for your application.  Also note this network policy is in addition to other network policies your app may need to function.

```
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

## Deployment config

The deployment config, must have the loginproxy.gov.bc.ca urls added to the `NO_PROXY` env variable.  See the following example:

```
kind: DeploymentConfig
apiVersion: apps.openshift.io/v1
spec:
  template:
    spec:
      containers:
        - name: api
          image: ""
          imagePullPolicy: Always
          env:
            - name: NO_PROXY
              value: .cluster.local,.svc,10.91.0.0/16,172.30.0.0/16,127.0.0.1,localhost,dev.loginproxy.gov.bc.ca,test.loginproxy.gov.bc.ca,loginproxy.gov.bc.ca
```

The comma separated list excludes traffic going to those urls from using the platform's proxy.  Further reading about the `NO_PROXY` environment variable can be found in the openshift [documentation](https://docs.openshift.com/container-platform/3.11/install_config/http_proxies.html).