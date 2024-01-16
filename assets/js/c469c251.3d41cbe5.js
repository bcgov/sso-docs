"use strict";(self.webpackChunksso_docs=self.webpackChunksso_docs||[]).push([[158],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(4137));const a={sidebar_position:3},o="Using your installation JSON file",l={unversionedId:"integrating-your-application/installation-json",id:"integrating-your-application/installation-json",title:"Using your installation JSON file",description:"--- Learn more about verified/digital credential",source:"@site/docs/integrating-your-application/installation-json.md",sourceDirName:"integrating-your-application",slug:"/integrating-your-application/installation-json",permalink:"/sso-docs/integrating-your-application/installation-json",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Login Page Guide",permalink:"/sso-docs/integrating-your-application/login-guide"},next:{title:"Usecases",permalink:"/sso-docs/integrating-your-application/usecases-scenarios"}},s={},c=[{value:"Understanding the installation JSON",id:"understanding-the-installation-json",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-your-installation-json-file"},"Using your installation JSON file"),(0,i.kt)("p",null,"--- Learn more about verified/digital credential"),(0,i.kt)("p",null,"Once your ",(0,i.kt)("a",{parentName:"p",href:"https://bcgov.github.io/sso-request"},"request has been completed"),", you will be able to download your installation file for each environment. It includes the client information to set up your SSO configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"technical detail with installation json",src:t(5672).Z,width:"1440",height:"1011"})),(0,i.kt)("h2",{id:"understanding-the-installation-json"},"Understanding the installation JSON"),(0,i.kt)("p",null,"This file includes the client information to set up your SSO configuration."),(0,i.kt)("p",null,"The main difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"confidential")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," clients is that confidential clients require client secret. Learn more on ",(0,i.kt)("a",{parentName:"p",href:"client-types"},"client types")),(0,i.kt)("p",null,"An example installation JSON for ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," client type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "realm": "<standard_realm_name>",\n  "auth-server-url": "https://<env>.loginproxy.gov.bc.ca/auth/",\n  "ssl-required": "external",\n  "resource": "<client_id>",\n  "public-client": true,\n  "verify-token-audience": true,\n  "use-resource-role-mappings": true,\n  "confidential-port": 0\n}\n')),(0,i.kt)("p",null,"An example installation JSON for ",(0,i.kt)("inlineCode",{parentName:"p"},"confidential")," client type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "realm": "<standard_realm_name>",\n  "auth-server-url": "https://<env>.loginproxy.gov.bc.ca/auth/",\n  "ssl-required": "external",\n  "resource": "<client_id>",\n  "credentials": {\n    "secret": "<client_secret>"\n  },\n  "confidential-port": 0\n}\n')))}d.isMDXComponent=!0},5672:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/using_json_Dec2023-2e9ca1ad4dd3cdddefabe0dc613e1dd4.svg"}}]);