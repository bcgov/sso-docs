"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[749],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?i.createElement(b,a(a({ref:t},u),{},{components:n})):i.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=n(7462),r=(n(7294),n(4137));const o={sidebar_position:3},a="Confidential vs Public Client",c={unversionedId:"guides/publicvsconfidential",id:"guides/publicvsconfidential",title:"Confidential vs Public Client",description:"---",source:"@site/docs/guides/publicvsconfidential.md",sourceDirName:"guides",slug:"/guides/publicvsconfidential",permalink:"/sso-docs/guides/publicvsconfidential",draft:!1,editUrl:"https://github.com/bcgov/sso-docs/docs/guides/publicvsconfidential.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to set up and use your Client",permalink:"/sso-docs/guides/code-flow"},next:{title:"Public Client",permalink:"/sso-docs/guides/public_pkce"}},l={},s=[{value:"Client Type Confidential vs Public",id:"client-type-confidential-vs-public",level:3},{value:"Diagram",id:"diagram",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"confidential-vs-public-client"},"Confidential vs Public Client"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"client-type-confidential-vs-public"},"Client Type Confidential vs Public"),(0,r.kt)("p",null,"When requesting a new client you can specify whether you want it set up as a ",(0,r.kt)("em",{parentName:"p"},"Confidential client")," or you want it set up as a ",(0,r.kt)("em",{parentName:"p"},"Public Client")," with PKCE."),(0,r.kt)("p",null,"With a confidential client, the back-end component securely stores an application secret that allows it to communicate with the KeyCloak server to facilitate the OIDC authentication process."),(0,r.kt)("p",null,"A public client is slightly less secure because there is no secret, but this configuration is required by some architectures and is supported as well. Public clients can use PKCE (Proof Key for Code Exchange) as a more secure flow."),(0,r.kt)("p",null,"PKCE provides dynamic client secrets, meaning your app\u2019s client secrets can stay secret (even without a back end for your app). PKCE is better and more secure than the implicit flow (AKA the \u201ctoken flow\u201d). If you\u2019re using the implicit flow, then you should switch to PKCE. If you use an implicit flow to authorize your Dropbox app, then PKCE is a better, more secure replacement, and you should no longer use implicit flow."),(0,r.kt)("p",null,"See the diagram below for use cases where each option is appropriate."),(0,r.kt)("h3",{id:"diagram"},"Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Private vs Confidential",src:n(6513).Z,width:"3778",height:"2320"})))}d.isMDXComponent=!0},6513:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/public_conf_aug2023-71c7487a4b4c98be640cedc16668859b.png"}}]);