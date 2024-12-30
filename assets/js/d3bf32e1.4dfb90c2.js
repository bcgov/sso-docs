"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[757],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(c,".").concat(d)]||u[d]||y[d]||i;return t?o.createElement(g,a(a({ref:n},s),{},{components:t})):o.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(8168),r=(t(6540),t(5680));const i={sidebar_position:12},a="Emerald Integrations",l={unversionedId:"integrating-your-application/integrating-with-emerald",id:"integrating-your-application/integrating-with-emerald",title:"Emerald Integrations",description:"If your project is hosted on the emerald cluster, the security restrictions and network policies will need to be taken into account if you wish to use our keycloak instance as a login proxy.",source:"@site/docs/integrating-your-application/integrating-with-emerald.md",sourceDirName:"integrating-your-application",slug:"/integrating-your-application/integrating-with-emerald",permalink:"/sso-docs/integrating-your-application/integrating-with-emerald",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Additional Settings",permalink:"/sso-docs/integrating-your-application/additional-settings"},next:{title:"CSS App API",permalink:"/sso-docs/integrating-your-application/css-app-api"}},c={},p=[{value:"Network Policies",id:"network-policies",level:2},{value:"Deployment config",id:"deployment-config",level:2}],s={toc:p},u="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"emerald-integrations"},"Emerald Integrations"),(0,r.yg)("p",null,"If your project is hosted on the emerald cluster, the security restrictions and network policies will need to be taken into account if you wish to use our keycloak instance as a login proxy."),(0,r.yg)("p",null,"For your standard integration to work, you will need to create a network policy, and add a yaml stanza to the app's deployment config."),(0,r.yg)("h2",{id:"network-policies"},"Network Policies"),(0,r.yg)("p",null,"The following is an example of a network policy you can use to give your app access to keycloak.  Note: that the labels will need to be customized for your application.  Also note this network policy is in addition to other network policies your app may need to function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: enable-api-to-keycloak\n  labels:\n    name: enable-api-to-keycloak\n    <<LABEL_KEY>>: <<DEPLOYMENT_LABEL>>\n    version: 1.0.0\n  annotations:\n    description: Enable the api to communicate with the keycloak\nspec:\n  egress:\n    - to:\n        - ipBlock:\n            cidr: 142.34.229.4/32 # Gold cluster *.apps IP\n        - ipBlock:\n            cidr: 142.34.64.4/32 # Gold DR cluster *.apps IP in case SSO fails over\n      ports:\n        - protocol: TCP\n          port: 443\n  podSelector:\n    matchLabels:\n      <<LABEL_KEY>>: <<DEPLOYMENT_LABEL>>\n      <<LABEL_KEY_2>>: <<COMPONENT_LABEL>>\n  policyTypes:\n    - Egress\n")),(0,r.yg)("h2",{id:"deployment-config"},"Deployment config"),(0,r.yg)("p",null,"The deployment config, must have the loginproxy.gov.bc.ca urls added to the ",(0,r.yg)("inlineCode",{parentName:"p"},"NO_PROXY")," env variable.  See the following example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'kind: Deployment\napiVersion: apps/v1\nspec:\n  template:\n    spec:\n      containers:\n        - name: api\n          image: ""\n          imagePullPolicy: Always\n          env:\n            - name: NO_PROXY\n              value: <<COMMA SEPARATED LIST>>,loginproxy.gov.bc.ca\n')),(0,r.yg)("p",null,"The comma separated list excludes traffic going to those urls from using the platform's proxy.  Further reading about the ",(0,r.yg)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variable can be found in the curl ",(0,r.yg)("a",{parentName:"p",href:"https://curl.se/docs/manpage.html#--noproxy"},"documentation"),"."))}y.isMDXComponent=!0}}]);