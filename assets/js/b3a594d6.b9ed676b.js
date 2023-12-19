"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[262],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(y,r(r({ref:t},p),{},{components:a})):n.createElement(y,r({ref:t},p))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(7462),o=(a(7294),a(4137));const i={sidebar_position:20},r="CSS App API",c={unversionedId:"integrating-your-application/css-app-api",id:"integrating-your-application/css-app-api",title:"CSS App API",description:"--- RESTful interaction",source:"@site/docs/integrating-your-application/css-app-api.md",sourceDirName:"integrating-your-application",slug:"/integrating-your-application/css-app-api",permalink:"/sso-docs/integrating-your-application/css-app-api",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Additional Settings",permalink:"/sso-docs/integrating-your-application/additional-settings"},next:{title:"Best Practices",permalink:"/sso-docs/category/best-practices"}},s={},l=[{value:"If you need to interact with the CSS App in a RESTful way",id:"if-you-need-to-interact-with-the-css-app-in-a-restful-way",level:3},{value:"How to request a CSS API Account:",id:"how-to-request-a-css-api-account",level:2},{value:"How to use CSS API:",id:"how-to-use-css-api",level:2},{value:"How to delete CSS API Account:",id:"how-to-delete-css-api-account",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Q: How many CSS API Accounts are permitted per team?",id:"q-how-many-css-api-accounts-are-permitted-per-team",level:3},{value:"Q: Can I use my CSS API Account to manage other team&#39;s integrations?",id:"q-can-i-use-my-css-api-account-to-manage-other-teams-integrations",level:3},{value:"Q: Can I use my CSS API Account to manage all my team&#39;s integrations in silver and gold clusters?",id:"q-can-i-use-my-css-api-account-to-manage-all-my-teams-integrations-in-silver-and-gold-clusters",level:3},{value:"Q: Do I need to delete CSS API Account before deleting a team?",id:"q-do-i-need-to-delete-css-api-account-before-deleting-a-team",level:3},{value:"Q: Do I need to create an integration before requesting CSS API Account?",id:"q-do-i-need-to-create-an-integration-before-requesting-css-api-account",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"css-app-api"},"CSS App API"),(0,o.kt)("p",null,"--- RESTful interaction"),(0,o.kt)("h3",{id:"if-you-need-to-interact-with-the-css-app-in-a-restful-way"},"If you need to interact with the CSS App in a RESTful way"),(0,o.kt)("p",null,"Through our engagements with our clients, we listened to your request to have an api so your apps can connect to our CSS App. "),(0,o.kt)("p",null,"Note: Often times, you do not want to be the only person with access to your client details or you may want to create multiple clients. If this the case, please visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bcgov/sso-keycloak/wiki/CSS-App-My-Teams"},"CSS App and My Teams")," for more info on Team Admins and Team Members."),(0,o.kt)("p",null,"The SSO CSS API let's you interact with CSS Application in a RESTful way for both user and role management. To get the access to this API, an admin from a team needs to request CSS API Account through CSS Application."),(0,o.kt)("h2",{id:"how-to-request-a-css-api-account"},"How to request a CSS API Account:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to CSS Application and select ",(0,o.kt)("inlineCode",{parentName:"li"},"My Dashboard")," tab"),(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"My Teams")," tab and select a team. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bcgov/sso-keycloak/wiki/CSS-App-My-Teams"},"More on teams here")),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"CSS API Account")," tab and click on ",(0,o.kt)("inlineCode",{parentName:"li"},"+ Request CSS API Account")," to request for an API Account"),(0,o.kt)("li",{parentName:"ol"},"The request shall be approved within 20 minutes and you shall be provided with the options to ",(0,o.kt)("inlineCode",{parentName:"li"},"copy")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"download")," your CSS API Account credentials")),(0,o.kt)("h2",{id:"how-to-use-css-api"},"How to use CSS API:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"CSS API is protected by OAuth2 client credentials flow, so a token is mandatory to make requests to CSS API"),(0,o.kt)("li",{parentName:"ol"},"You can acquire a bearer token using your CSS API Account credentials"),(0,o.kt)("li",{parentName:"ol"},"Add this token in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header in the form of ",(0,o.kt)("inlineCode",{parentName:"li"},"Bearer <access_token>")," and make a request to the API"),(0,o.kt)("li",{parentName:"ol"},"The OpenAPI Spec of the CSS API can be accessed at ",(0,o.kt)("a",{parentName:"li",href:"https://api.loginproxy.gov.bc.ca/openapi/swagger"},"https://api.loginproxy.gov.bc.ca/openapi/swagger")),(0,o.kt)("li",{parentName:"ol"},"Note the token endpoint will be: ",(0,o.kt)("a",{parentName:"li",href:"https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token"},"https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token"))),(0,o.kt)("h2",{id:"how-to-delete-css-api-account"},"How to delete CSS API Account:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to CSS Application and select ",(0,o.kt)("inlineCode",{parentName:"li"},"My Dashboard")," tab"),(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"My Teams")," tab and select a team"),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("inlineCode",{parentName:"li"},"CSS API Account")," tab, you can find delete icon to delete your CSS API Account for that team")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("h3",{id:"q-how-many-css-api-accounts-are-permitted-per-team"},"Q: How many CSS API Accounts are permitted per team?"),(0,o.kt)("p",null,"A: Only one CSS API Account is permitted per team"),(0,o.kt)("h3",{id:"q-can-i-use-my-css-api-account-to-manage-other-teams-integrations"},"Q: Can I use my CSS API Account to manage other team's integrations?"),(0,o.kt)("p",null,"A: No, your CSS API Account is used only to manage your team's integrations"),(0,o.kt)("h3",{id:"q-can-i-use-my-css-api-account-to-manage-all-my-teams-integrations-in-silver-and-gold-clusters"},"Q: Can I use my CSS API Account to manage all my team's integrations in silver and gold clusters?"),(0,o.kt)("p",null,"A: No, your CSS API Account is used only to manage your team's gold integrations"),(0,o.kt)("h3",{id:"q-do-i-need-to-delete-css-api-account-before-deleting-a-team"},"Q: Do I need to delete CSS API Account before deleting a team?"),(0,o.kt)("p",null,"A: When the team is deleted, the associated CSS API Account gets deleted automatically"),(0,o.kt)("h3",{id:"q-do-i-need-to-create-an-integration-before-requesting-css-api-account"},"Q: Do I need to create an integration before requesting CSS API Account?"),(0,o.kt)("p",null,"A: You can request CSS API Account even if there are no integrations associated with your team"))}d.isMDXComponent=!0}}]);