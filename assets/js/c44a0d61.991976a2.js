"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[7168],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const i={sidebar_position:-10},o="CSS v3.12.0",s={unversionedId:"releases/v3.9.0",id:"releases/v3.9.0",title:"CSS v3.12.0",description:"2024-9-27",source:"@site/docs/releases/v3.9.0.md",sourceDirName:"releases",slug:"/releases/v3.9.0",permalink:"/sso-docs/releases/v3.9.0",draft:!1,tags:[],version:"current",sidebarPosition:-10,frontMatter:{sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"CSS v3.13.1",permalink:"/sso-docs/releases/v3.13.1"},next:{title:"CSS v3.7.0",permalink:"/sso-docs/releases/v3.7.0"}},l={},c=[{value:"New Features \ud83c\udf89",id:"new-features-",level:3},{value:"Bug fixes and enhancement \ud83d\udc1b",id:"bug-fixes-and-enhancement-",level:3},{value:"Miscellaneous \ud83e\udde9",id:"miscellaneous-",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"css-v3120"},"CSS v3.12.0"),(0,a.yg)("p",null,"2024-9-27"),(0,a.yg)("h3",{id:"new-features-"},"New Features \ud83c\udf89"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Added BC Service Card (Alpha) as an Identity Provider option in standard service. Please refer to ",(0,a.yg)("a",{parentName:"li",href:"https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/Our-Partners-the-Identity-Providers#what-are-identity-providers?utm_source=sso-wiki&utm_medium=web&utm_campaign=retirement-notice-sso"},"Identity Providers")," and ",(0,a.yg)("a",{parentName:"li",href:"https://bcgov.github.io/sso-docs/advanced/bc-services-card"},"BC Services Card")," for more information."),(0,a.yg)("li",{parentName:"ul"},"Digital Credential integrations now do not require a production approval process. However, clients still need to engage with DIT to learn about the Digital Credential Configuration ID. You can contact them at ",(0,a.yg)("a",{parentName:"li",href:"mailto:ditp.support@gov.bc.ca"},"ditp.support@gov.bc.ca"))),(0,a.yg)("h3",{id:"bug-fixes-and-enhancement-"},"Bug fixes and enhancement \ud83d\udc1b"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Being Alpha released in v3.6.2, with Red Hat Build of Keycloak (RHBK) 24 deployed in production, Digital Credential is now supported as MVP in standard service. Please refer to ",(0,a.yg)("a",{parentName:"li",href:"https://mvp.developer.gov.bc.ca/docs/default/component/css-docs/#digital-credentials"},"Digital Credentials")," for MVP limitations"),(0,a.yg)("li",{parentName:"ul"},"Fixed an issue for Digital Credential integrations, that in some cases, a user need to log in again if there are other users logged in from different applications.")),(0,a.yg)("h3",{id:"miscellaneous-"},"Miscellaneous \ud83e\udde9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Automation is now merged into the same code base with application and full regression runs every week.")))}p.isMDXComponent=!0}}]);