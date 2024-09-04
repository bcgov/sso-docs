"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[5843],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,y=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(y,o(o({ref:t},p),{},{components:n})):i.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(4137));const a={sidebar_position:10},o="A note on digital credential",l={unversionedId:"integrating-your-application/digital-credentials",id:"integrating-your-application/digital-credentials",title:"A note on digital credential",description:"--- Learn more about verified/digital credential",source:"@site/docs/integrating-your-application/digital-credentials.md",sourceDirName:"integrating-your-application",slug:"/integrating-your-application/digital-credentials",permalink:"/sso-docs/integrating-your-application/digital-credentials",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Client setup with an adapter",permalink:"/sso-docs/integrating-your-application/settingup-adapter"},next:{title:"Additional Settings",permalink:"/sso-docs/integrating-your-application/additional-settings"}},s={},c=[{value:"using the keycloak-js library",id:"using-the-keycloak-js-library",level:2},{value:"Security Consideration",id:"security-consideration",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a-note-on-digital-credential"},"A note on digital credential"),(0,r.kt)("p",null,"--- Learn more about verified/digital credential"),(0,r.kt)("h2",{id:"using-the-keycloak-js-library"},"using the keycloak-js library"),(0,r.kt)("p",null,"Please note the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/keycloak-js"},"keycloak-js")," library which is frequently used by applications authenticating via Keycloak has a limitation when it comes to providing additional attributes to the authentication callout. Teams can use the following snippet to provide the required ",(0,r.kt)("strong",{parentName:"p"},"pres_req_conf_id")," attribute for Digital Credentials:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export const handleLogin = (keycloak, loginOptions) => {\n  if (loginOptions.pres_req_conf_id) {\n    var loginURL = keycloak?.createLoginUrl(loginOptions);\n    if (loginURL) {\n      window.location.href =\n        loginURL + "&pres_req_conf_id=" + loginOptions.pres_req_conf_id;\n    }\n  } else {\n    keycloak?.login(loginOptions);\n  }\n};\n')),(0,r.kt)("h2",{id:"security-consideration"},"Security Consideration"),(0,r.kt)("p",null,"Only for Digital Credential integrations, please be mindful that for security reasons, using our Standard Service, end user\u2019s sessions are ended when they consent to another application using Digital Credential in the standard realm."))}u.isMDXComponent=!0}}]);