"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[584],{4137:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),k=p(a),g=r,s=k["".concat(m,".").concat(g)]||k[g]||N[g]||l;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[k]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4685:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_position:12},i="Gold Identity Mapper Guide",d={unversionedId:"guides/identity-mappers",id:"guides/identity-mappers",title:"Gold Identity Mapper Guide",description:"---",source:"@site/docs/guides/identity-mappers.md",sourceDirName:"guides",slug:"/guides/identity-mappers",permalink:"/sso-docs/guides/identity-mappers",draft:!1,editUrl:"https://github.com/bcgov/sso-docs/docs/guides/identity-mappers.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Login Page Guide",permalink:"/sso-docs/guides/login-guide"},next:{title:"Releases",permalink:"/sso-docs/category/releases"}},m={},p=[{value:"IDP Attributes &amp; Mappers",id:"idp-attributes--mappers",level:2},{value:"IDIR",id:"idir",level:3},{value:"Azure IDIR",id:"azure-idir",level:3},{value:"Basic BCeID",id:"basic-bceid",level:3},{value:"Business BCeID",id:"business-bceid",level:3},{value:"BCeID Both",id:"bceid-both",level:3},{value:"GitHub Public",id:"github-public",level:3},{value:"GitHub BCGov",id:"github-bcgov",level:3}],u={toc:p},k="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gold-identity-mapper-guide"},"Gold Identity Mapper Guide"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"idp-attributes--mappers"},"IDP Attributes & Mappers"),(0,r.kt)("h3",{id:"idir"},"IDIR"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Gold, the SAML payload contains ",(0,r.kt)("inlineCode",{parentName:"p"},"<NameID>"),", whose value is same as that of the ",(0,r.kt)("inlineCode",{parentName:"p"},"idir_user_guid")," will be mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," of the logging in user inside parent realm"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Property/Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"IDP - SAML Payload(","*",")"),(0,r.kt)("th",{parentName:"tr",align:null},"Parent Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom/Standard Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Realm - OIDC Payload"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"First Name"),(0,r.kt)("td",{parentName:"tr",align:null},"first_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Last Name"),(0,r.kt)("td",{parentName:"tr",align:null},"last_name"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDIR Username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDIR User GUID"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Generated Preferred Username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{preferred_username}}@idir")),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username")))))),(0,r.kt)("h3",{id:"azure-idir"},"Azure IDIR"),(0,r.kt)("p",null," In Gold"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Property/Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"IDP - SAML Payload(","*",")"),(0,r.kt)("th",{parentName:"tr",align:null},"Parent Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom/Standard Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Realm - OIDC Payload"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"First Name"),(0,r.kt)("td",{parentName:"tr",align:null},"first_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Last Name"),(0,r.kt)("td",{parentName:"tr",align:null},"last_name"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDIR Username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IDIR User GUID"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Principal Name"),(0,r.kt)("td",{parentName:"tr",align:null},"user_principal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"user_principal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"user_principal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"user_principal_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Generated Preferred Username"),(0,r.kt)("td",{parentName:"tr",align:null},"idir_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{preferred_username}}@azureidir")),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username")))),(0,r.kt)("h3",{id:"basic-bceid"},"Basic BCeID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Gold"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Property/Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"IDP - SAML Payload(","*",")"),(0,r.kt)("th",{parentName:"tr",align:null},"Parent Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom/Standard Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Realm - OIDC Payload"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID Username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID User GUID"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Generated Preferred Username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{bceid_user_guid}}@bceidbasic")),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username")))))),(0,r.kt)("h3",{id:"business-bceid"},"Business BCeID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Gold"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Property/Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"IDP - SAML Payload(","*",")"),(0,r.kt)("th",{parentName:"tr",align:null},"Parent Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom/Standard Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Realm - OIDC Payload"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID Username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID User GUID"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Generated Preferred Username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{bceid_user_guid}}@bceidbusiness")),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID Business Guid"),(0,r.kt)("td",{parentName:"tr",align:null},"SMGOV_BUSINESSGUID"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_guid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID Business Name"),(0,r.kt)("td",{parentName:"tr",align:null},"SMGOV_BUSINESSLEGALNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_name"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_name"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_name")))))),(0,r.kt)("h3",{id:"bceid-both"},"BCeID Both"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Gold"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Property/Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"IDP - SAML Payload(","*",")"),(0,r.kt)("th",{parentName:"tr",align:null},"Parent Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom/Standard Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Realm - OIDC Payload"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID Username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID User GUID"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Generated Preferred Username"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_user_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{bceid_user_guid}}@bceidboth")),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID Business Guid"),(0,r.kt)("td",{parentName:"tr",align:null},"SMGOV_BUSINESSGUID"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_guid"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_guid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCeID Business Name"),(0,r.kt)("td",{parentName:"tr",align:null},"SMGOV_BUSINESSLEGALNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_name"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_name"),(0,r.kt)("td",{parentName:"tr",align:null},"bceid_business_name")))))),(0,r.kt)("h3",{id:"github-public"},"GitHub Public"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Gold"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Property/Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"IDP - SAML Payload(","*",")"),(0,r.kt)("th",{parentName:"tr",align:null},"Parent Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom/Standard Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Realm - OIDC Payload"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub ID"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"github_id"),(0,r.kt)("td",{parentName:"tr",align:null},"github_id"),(0,r.kt)("td",{parentName:"tr",align:null},"github_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Generated Preferred Username"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{id}}@githubpublic")),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{id}}@githubpublic"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub Username"),(0,r.kt)("td",{parentName:"tr",align:null},"login"),(0,r.kt)("td",{parentName:"tr",align:null},"github_username"),(0,r.kt)("td",{parentName:"tr",align:null},"github_username"),(0,r.kt)("td",{parentName:"tr",align:null},"github_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCGov Github Membership"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"org_verified"),(0,r.kt)("td",{parentName:"tr",align:null},"org_verified"),(0,r.kt)("td",{parentName:"tr",align:null},"org_verified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCGov Github Orgs"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"orgs"),(0,r.kt)("td",{parentName:"tr",align:null},"orgs"),(0,r.kt)("td",{parentName:"tr",align:null},"orgs")))))),(0,r.kt)("h3",{id:"github-bcgov"},"GitHub BCGov"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Gold"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Property/Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"IDP - SAML Payload(","*",")"),(0,r.kt)("th",{parentName:"tr",align:null},"Parent Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom/Standard Realm Mapper"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Realm - OIDC Payload"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name"),(0,r.kt)("td",{parentName:"tr",align:null},"given_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub ID"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"github_id"),(0,r.kt)("td",{parentName:"tr",align:null},"github_id"),(0,r.kt)("td",{parentName:"tr",align:null},"github_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Generated Preferred Username"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{id}}@githubbcgov")),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username=",(0,r.kt)("inlineCode",{parentName:"td"},"{{id}}@githubbcgov"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GitHub Username"),(0,r.kt)("td",{parentName:"tr",align:null},"login"),(0,r.kt)("td",{parentName:"tr",align:null},"github_username"),(0,r.kt)("td",{parentName:"tr",align:null},"github_username"),(0,r.kt)("td",{parentName:"tr",align:null},"github_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCGov Github Membership"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"org_verified"),(0,r.kt)("td",{parentName:"tr",align:null},"org_verified"),(0,r.kt)("td",{parentName:"tr",align:null},"org_verified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BCGov Github Orgs"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"orgs"),(0,r.kt)("td",{parentName:"tr",align:null},"orgs"),(0,r.kt)("td",{parentName:"tr",align:null},"orgs")))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"org_verified"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if the authenticated user has ",(0,r.kt)("inlineCode",{parentName:"li"},"bcgov")," GitHub org membership, otherwise, ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"orgs"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"space-separated")," list of BCGov GitHub org that the authenticated user has a membership of.")))))}N.isMDXComponent=!0}}]);