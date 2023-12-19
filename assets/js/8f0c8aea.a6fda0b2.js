"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[971],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(4137));const o={sidebar_position:1},a="Client types",c={unversionedId:"integrating-your-application/client-types",id:"integrating-your-application/client-types",title:"Client types",description:"--- Learn about various client types to choose from based on the security needs of your app.",source:"@site/docs/integrating-your-application/client-types.md",sourceDirName:"integrating-your-application",slug:"/integrating-your-application/client-types",permalink:"/sso-docs/integrating-your-application/client-types",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integrating Your Application",permalink:"/sso-docs/category/integrating-your-application"},next:{title:"Login Page Guide",permalink:"/sso-docs/integrating-your-application/login-guide"}},p={},l=[{value:"Client type confidential vs public",id:"client-type-confidential-vs-public",level:3},{value:"Diagram",id:"diagram",level:3},{value:"Proof Key for Code Exchange (PKCE)",id:"proof-key-for-code-exchange-pkce",level:3}],s={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-types"},"Client types"),(0,i.kt)("p",null,"--- Learn about various client types to choose from based on the security needs of your app."),(0,i.kt)("h3",{id:"client-type-confidential-vs-public"},"Client type confidential vs public"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://bcgov.github.io/sso-requests"},"CSS App"),", when requesting a new client you can specify whether you want it set up as a ",(0,i.kt)("em",{parentName:"p"},"Confidential client")," or you want it set up as a ",(0,i.kt)("em",{parentName:"p"},"Public Client")," with PKCE."),(0,i.kt)("p",null,"With a confidential client, the back-end component securely stores an application secret that allows it to communicate with the KeyCloak server to facilitate the OIDC authentication process."),(0,i.kt)("p",null,"A public client is slightly less secure because there is no secret, but this configuration is required by some architectures and is supported as well. ",(0,i.kt)("a",{parentName:"p",href:"client-types#proof-key-for-code-exchange-pkce"},"Public clients can use PKCE (Proof Key for Code Exchange) as a more secure flow.")),(0,i.kt)("p",null,"PKCE provides dynamic client secrets, meaning your app\u2019s client secrets can stay secret (even without a back end for your app). PKCE is better and more secure than the implicit flow (AKA the \u201ctoken flow\u201d). If you\u2019re using the implicit flow, then you should switch to PKCE. If you use an implicit flow to authorize your Dropbox app, then PKCE is a better, more secure replacement, and you should no longer use implicit flow."),(0,i.kt)("p",null,"See the diagram below for use cases where each option is appropriate."),(0,i.kt)("h3",{id:"diagram"},"Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Private vs Confidential",src:n(6850).Z,width:"3778",height:"2320"})),(0,i.kt)("h3",{id:"proof-key-for-code-exchange-pkce"},"Proof Key for Code Exchange (PKCE)"),(0,i.kt)("p",null,"The javascript adapter for keycloak has built-in support for using PKCE. See the documentation under the init method here, specifically the ",(0,i.kt)("inlineCode",{parentName:"p"},"pkceMethod"),". For example, when initializing the adapter you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"keycloak.init({ pkceMethod: 'S256' })")," to use PKCE. Use the 'S256' method for you public client."),(0,i.kt)("p",null,"If not using the adapter, you can use a custom implementation. This will require 4 steps:"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"code_verifier")," (cryptographically secure string)\nHash the code verifier with the SHA256 method to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"code_challenge"),"\nSend the code challenge and code challenge method (S256) as query parameters when redirecting users to the authorization endpoint\nWhen exchanging the received code for an access token, send the initial ",(0,i.kt)("inlineCode",{parentName:"p"},"code_verifier")," to ensure your application initiated the current exchange.\nFor an example of a custom PKCE implementation, see here for generating the authentication URL and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bcgov/sso-requests/blob/dev/app/utils/openid.ts"},"here")," for exchanging the received code for an access token."),(0,i.kt)("p",null,"Learn More ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-proof-key-for-code-exchange-pkce"},"OIDC & PKCE")))}d.isMDXComponent=!0},6850:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/public-conf-aug2023-71c7487a4b4c98be640cedc16668859b.png"}}]);