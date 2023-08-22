"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[882],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(7462),r=(n(7294),n(4137));const a={sidebar_position:4},i="Client setup without an adapter",p={unversionedId:"integrating-your-application/settingup-no-adapter",id:"integrating-your-application/settingup-no-adapter",title:"Client setup without an adapter",description:"---",source:"@site/docs/integrating-your-application/settingup-no-adapter.md",sourceDirName:"integrating-your-application",slug:"/integrating-your-application/settingup-no-adapter",permalink:"/sso-docs/integrating-your-application/settingup-no-adapter",draft:!1,editUrl:"https://github.com/bcgov/sso-docs/docs/integrating-your-application/settingup-no-adapter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Redirects",permalink:"/sso-docs/integrating-your-application/redirects"},next:{title:"Client setup with an adapter",permalink:"/sso-docs/integrating-your-application/settingup-adapter"}},l={},s=[{value:"Using a client without an adapter",id:"using-a-client-without-an-adapter",level:3},{value:"Endpoints by environment",id:"endpoints-by-environment",level:3},{value:"Important note:",id:"important-note",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"client-setup-without-an-adapter"},"Client setup without an adapter"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"using-a-client-without-an-adapter"},"Using a client without an adapter"),(0,r.kt)("p",null,"If you are not using an adapter/library, you will require some additional information to set up your OpenID connection. Required information can be found behind the publicly accessible ",(0,r.kt)("inlineCode",{parentName:"p"},"provider configuration endpoint")," for your environment."),(0,r.kt)("p",null,"Based on our integration with us, you will either have your integration connected to our Gold Standard offering. ",(0,r.kt)("a",{parentName:"p",href:"https://chat.developer.gov.bc.ca/channel/sso"},"Reach out to us")," if you have questions."),(0,r.kt)("h3",{id:"endpoints-by-environment"},"Endpoints by environment"),(0,r.kt)("p",null,"Dev: ",(0,r.kt)("a",{parentName:"p",href:"https://dev.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration"},"https://dev.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration")),(0,r.kt)("p",null,"Test: ",(0,r.kt)("a",{parentName:"p",href:"https://test.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration"},"https://test.loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration")),(0,r.kt)("p",null,"Prod: ",(0,r.kt)("a",{parentName:"p",href:"https://loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration"},"https://loginproxy.gov.bc.ca/auth/realms/standard/.well-known/openid-configuration")),(0,r.kt)("p",null,"The above URLs gives you OpenID Provider Metadata required for the OpenID connect configuration."),(0,r.kt)("p",null,"Here's a sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "issuer": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>", // Issuer URL\n  "authorization_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/auth", // Authorization URL\n  "token_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/token", // Token URL\n  "userinfo_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/userinfo", // User Info UR\n  "end_session_endpoint": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/logout", // Logout URL\n  "jwks_uri": "https://<env>.loginproxy.gov.bc.ca/auth/realms/<realm_name>/protocol/openid-connect/certs", // JSON Web Key Set URL\n  ...\n}\n')),(0,r.kt)("h3",{id:"important-note"},"Important note:"),(0,r.kt)("p",null,"According to ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#OpenID.Core"},"OpenID Connect Discovery documentation"),", ",(0,r.kt)("em",{parentName:"p"},'"OpenID Providers have metadata describing their configuration. These OpenID Provider Metadata values are used by OpenID Connect"')),(0,r.kt)("p",null,"You can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Installation JSON")," downloaded through the request process. More ",(0,r.kt)("a",{parentName:"p",href:"installation-json"},"on understanding the json file")),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/securing_apps/index.html#endpoints"},"here")," for a full list of endpoints and their descriptions."),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/securing_apps/index.html#other-openid-connect-libraries"},"here")," for a other OpenID Connect Libraries."))}d.isMDXComponent=!0}}]);