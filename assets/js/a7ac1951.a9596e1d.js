"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[8235],{2546:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,faqs:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var l=o(8168),n=o(6540),a=o(5680),s=o(3687);const r={sidebar_position:1,tags:["Keycloak"]},i="Keycloak",c={unversionedId:"FAQs/keycloak",id:"FAQs/keycloak",title:"Keycloak",description:"",source:"@site/docs/FAQs/keycloak.md",sourceDirName:"FAQs",slug:"/FAQs/keycloak",permalink:"/sso-docs/FAQs/keycloak",draft:!1,tags:[{label:"Keycloak",permalink:"/sso-docs/tags/keycloak"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Keycloak"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/sso-docs/category/faqs"},next:{title:"CSS App",permalink:"/sso-docs/FAQs/CSS App"}},u={},g=[],h=[{title:"Why does Logging out of Keycloak does not kill my session with the identity provider?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"This is a known issue with identity providers which retain session and has been discussed on stack overflow. Please refer tothe following thread: "),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/83/84#84"},"Link to stackoverflow thread"))))},{title:"Where can I find libraries or client adapters to connect to Keycloak?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"Please follow the given stack overflow thread link to learn more about this topic: "),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/89/90#90"},"Link to stackoverflow thread"))))},{title:"How to share Keycloak Realm between application teams without sharing the admin credentials?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"This question was discussed previously on stack overflow. Please refer to the following link for more information: "),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/770/771#771"},"Link to stackoverflow thread"))))},{title:"How do I test protected pages with Cypress and Keycloak?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"Please refer to the following link for the different approaches to address this query: "),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/100/101#101"},"Link to stackoverflow thread"))))},{title:"How do i get the GUID of the client under Client settings in Keyclock?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"We do not provide this unless you are a custom realm owner pursuing a migration."))},{title:"Which time zone is used for the SSO (Keycloak) product?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"The time zone used is PST (Pacific Standard Time). Please refer to the following stackoverflow thread:"),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/1260/1261#1261"},"Link to stackoverflow thread"))))},{title:"Does the SSO/Keycloak support indigenous characters?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"Yes, it does. This question has been answered in following stackoverflow thread:"),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/1267/1268#1268"},"Link to stackoverflow thread"))))},{title:"When using the IDIR IDP is there a way to automatically detect the BC Gov VPN so the user doesn\u2019t have to enter their credentials? E.g. Compass Intranet?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null," This is a functionality specifically on the identity provider side and needs to be discussed with them. "))},{title:"Could SSO/Keycloak be used to allow members of the federal gov to authenticate and access resources?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"This is restricted to BC Gov only at the moment."))},{title:"Is there a way to check if an IDIR user exists in an automated fashion?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"There are a couple of approaches to this which can be found in following thread:"),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/1237/1238#1238"},"Link to stackoverflow thread"))))},{title:"How can I get user details from the KeyCloak API in the default realm?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"For more information, please refer: "),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/173/175#175"},"Link to stackoverflow thread"))))},{title:"What is the recommended timeout for an access token? What about a refresh token?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,"The recommended settings can be found here: "),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/508/509#509"},"Link to stackoverflow thread"))))},{title:"Where can I find more information about the BC Government Keycloak offerings?",content:(0,a.yg)(n.Fragment,null,(0,a.yg)("p",null,'The BC Gov SSO team has created "http://mvp.developer.gov.bc.ca" You can also refer to the following stack overflow thread for more information:'),(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("a",{href:"https://stackoverflow.developer.gov.bc.ca/questions/95/96#96"},"Link to stackoverflow thread"))))}],d={toc:g,faqs:h},y="wrapper";function f(e){let{components:t,...o}=e;return(0,a.yg)(y,(0,l.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"keycloak"},"Keycloak"),(0,a.yg)(s.A,{faqs:h,mdxType:"FaqItem"}))}f.isMDXComponent=!0},3687:(e,t,o)=>{o.d(t,{A:()=>a});var l=o(6540),n=o(7640);function a(e){return l.createElement(l.Fragment,null,l.createElement(n.nD,null,e.faqs.map((e=>l.createElement(n.As,{key:e.title},l.createElement(n.IZ,null,l.createElement(n.SR,null,e.title)),l.createElement(n.IT,null,e.content))))))}}}]);