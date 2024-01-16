"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[963],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return a?o.createElement(y,i(i({ref:t},p),{},{components:a})):o.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=a(7462),n=(a(7294),a(4137));const r={sidebar_position:1},i="Do's and Don'ts",l={unversionedId:"best-practices/dos-donts",id:"best-practices/dos-donts",title:"Do's and Don'ts",description:"--- Our advice on what to do",source:"@site/docs/best-practices/dos-donts.md",sourceDirName:"best-practices",slug:"/best-practices/dos-donts",permalink:"/sso-docs/best-practices/dos-donts",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Best Practices",permalink:"/sso-docs/category/best-practices"},next:{title:"Security considerations",permalink:"/sso-docs/best-practices/security"}},s={},c=[{value:"Do Not call the KeyCloak API on every request",id:"do-not-call-the-keycloak-api-on-every-request",level:3},{value:"Do Not load test in Production",id:"do-not-load-test-in-production",level:3},{value:"Do not reuse clients for multiple applications",id:"do-not-reuse-clients-for-multiple-applications",level:3},{value:"Do protect the client secret (confidential client only)",id:"do-protect-the-client-secret-confidential-client-only",level:3},{value:"Do carefully manage your list of Valid Redirect URIs",id:"do-carefully-manage-your-list-of-valid-redirect-uris",level:3},{value:"Do apply appropriate logout calls",id:"do-apply-appropriate-logout-calls",level:3},{value:"Do skip the standard login page",id:"do-skip-the-standard-login-page",level:3},{value:"Do validate the IDP in the JWT",id:"do-validate-the-idp-in-the-jwt",level:3},{value:"Do revoke tokens",id:"do-revoke-tokens",level:3},{value:"Do validate tokens at application level",id:"do-validate-tokens-at-application-level",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dos-and-donts"},"Do's and Don'ts"),(0,n.kt)("p",null,"--- Our advice on what to do"),(0,n.kt)("h3",{id:"do-not-call-the-keycloak-api-on-every-request"},"Do Not call the KeyCloak API on every request"),(0,n.kt)("p",null,"This can potentially bring down the shared service for all clients. This was the issue we saw with ",(0,n.kt)("a",{parentName:"p",href:"https://flask-oidc.readthedocs.io/en/latest/"},"Flask-OIDC")," with some teams. The adapter was making a call to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"},"Token Introspection Endpoint")," with every request and it was a high-volume service. Most adapters don't do this as the token information is available within the token itself, but this one adapter seems to have a defect."),(0,n.kt)("p",null,"Another important technique to be aware of is that you should cache the JWT in a cookie so that you don't have to check the status of your session with every request. Keycloak has a feature that provides a cookie for you, and libraries like keycloak-js make use of this to limit the number of round trips to the Keycloak server."),(0,n.kt)("h3",{id:"do-not-load-test-in-production"},"Do Not load test in Production"),(0,n.kt)("p",null,"Please let the SSO team in advance when you want to do load testing in DEV and TEST so we can plan ahead and coordinate with other teams. These are shared environments that many teams are actively using. A failed load test can affect many other teams."),(0,n.kt)("h3",{id:"do-not-reuse-clients-for-multiple-applications"},"Do not reuse clients for multiple applications"),(0,n.kt)("p",null,"If you have multiple web applications you would like to integrate with our service we recommend creating a new request for each one. This will allow you to customize your configuration appropriately, e.g when setting your valid redirect URIs, as well as lower your application's potential exposure by having unique client secrets per application."),(0,n.kt)("h3",{id:"do-protect-the-client-secret-confidential-client-only"},"Do protect the client secret (confidential client only)"),(0,n.kt)("p",null,"It stays on the server. Use OCP secrets if you are on OpenShift. Don't put it in your public JavaScript or in your GitHub repository. Don't build it into your Docker image."),(0,n.kt)("h3",{id:"do-carefully-manage-your-list-of-valid-redirect-uris"},"Do carefully manage your list of Valid Redirect URIs"),(0,n.kt)("p",null,"Your redirect URIs should only be resources that you control. Most of the time you will only need one URI (the one that you want the client to return to after a login event)."),(0,n.kt)("h3",{id:"do-apply-appropriate-logout-calls"},"Do apply appropriate logout calls"),(0,n.kt)("p",null,"There is known issue with identity providers which retain session. ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.developer.gov.bc.ca/questions/83"},"More info here")),(0,n.kt)("h3",{id:"do-skip-the-standard-login-page"},"Do skip the standard login page"),(0,n.kt)("p",null,"In KeyCloak, if the realm that contains your client has more than one IDP configured, KeyCloak shows a page that prompts the user to select which IDP they want to log in with. Almost all teams have chosen to hide this page from their users by specifying the IDP as a query string parameter in the KeyCloak Authorization URI value behind their login button. The querystring is 'kc_idp_hint'. (The IDPs available will depend on the standard realm in which your client exists.) By specifying the IDP in this way, the user will be redirected directly to the login page for the identity provider and will not see the KeyCloak login choice page at all."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"kc_idp_hint"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IDIR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"idir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Azure IDIR"),(0,n.kt)("td",{parentName:"tr",align:"center"},"azureidir")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Basic BCeID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"bceidbasic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Business BCeID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"bceidbusiness")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Basic or Business BCeID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"bceidboth")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GitHub BC Gov"),(0,n.kt)("td",{parentName:"tr",align:"center"},"githubbcgov")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GitHub Public"),(0,n.kt)("td",{parentName:"tr",align:"center"},"githubpublic")))),(0,n.kt)("p",null,"We do have a work around for those of you who ABSOLUTELY need the ",(0,n.kt)("a",{parentName:"p",href:"../integrating-your-application/login-guide#skipping-the-standard-login-page"},"keycloak login page"),", please talk to us about this"),(0,n.kt)("h3",{id:"do-validate-the-idp-in-the-jwt"},"Do validate the IDP in the JWT"),(0,n.kt)("p",null,"Because there are multiple IDPs available to your client in the standard realm, if your application has business logic that specifies a particular login method, you have to enforce that. For example, if your application requires BCeID to authenticate, you have to make sure that the user didn't somehow log in with IDIR instead. Your client has a mapper configured to provide the alias of the IDP that was used to log in. The name of the claim is 'identity_provider' and the possible aliases are the same as the ones that are used for the kc_idp_hint query parameter (see above)."),(0,n.kt)("p",null,"In the standard realms that support BCeID there are multiple IDPs (both BCeID and IDIR) and it is theoretically possible for a user to change the IDP hint (see above) maliciously using scripting or other techniques. Additionally, a user that is signed into another application that shares the same realm will get single sign-on with your app, so if you want to enforce a particular IDP, that's another good reason to validate the IDP that they used to sign in. It's up to you and your business logic requirements to make sure that your users have a good user experience and that you don't leave any room for unintended login flows."),(0,n.kt)("p",null,"If for some reason you want to make sure that your users do NOT have a single sign-on experience, you can force them to re-authenticate according to the OIDC spec at: ",(0,n.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#Authenticates"},"3.1.2.3. Authorization Server Authenticates End-User.")),(0,n.kt)("h3",{id:"do-revoke-tokens"},"Do revoke tokens"),(0,n.kt)("p",null,"Ensure offline tokens are revoked after use or set the maximum time."),(0,n.kt)("h3",{id:"do-validate-tokens-at-application-level"},"Do validate tokens at application level"),(0,n.kt)("p",null,"Validate the token at the application level rather than using an introspection endpoint"))}u.isMDXComponent=!0}}]);