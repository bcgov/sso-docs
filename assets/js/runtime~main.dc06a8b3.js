(()=>{"use strict";var e,t,r,a,o,d={},f={};function n(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=d,n.c=f,e=[],n.O=(t,r,a,o)=>{if(!r){var d=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var f=!0,c=0;c<r.length;c++)(!1&o||d>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(f=!1,o<d&&(d=o));if(f){e.splice(i--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);n.r(o);var d={};t=t||[null,r({}),r([]),r(r)];for(var f=2&a&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,n.d(o,d),o},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({53:"935f2afb",60:"e4e2bfdc",72:"90f18338",73:"f878bdf6",85:"1f391b9e",204:"9943fc86",222:"823d5d41",233:"739c4ded",344:"420d1f60",360:"ad17972e",414:"393be207",514:"1be78505",584:"a0eba6a9",589:"783df42e",606:"10d726e6",607:"898dbba4",611:"17a5a6aa",722:"60ca4257",729:"66a236a1",764:"c03cfd1a",817:"14eb3368",918:"17896441",971:"c377a04b",974:"6e68be93"}[e]||e)+"."+{53:"9422e179",60:"a4ba1f86",72:"e33522c3",73:"4135d4bc",85:"1ea99fcc",204:"fbf6ff74",222:"6cbeee14",233:"1a93d274",248:"cd2b05a7",344:"2f09b5f0",360:"fe94e733",411:"aed43c01",414:"3d5b7fc5",514:"ebabd708",584:"160f8ce4",589:"704e13b9",606:"0badc620",607:"be668137",611:"b2e3f9bb",722:"db98316e",729:"a0d54888",764:"7586aece",817:"d042819d",918:"99e899b0",971:"c8ac2c9d",974:"de7d206c"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="sso-docs:",n.l=(e,t,r,d)=>{if(a[e])a[e].push(t);else{var f,c;if(void 0!==r)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var s=b[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+r){f=s;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",o+r),f.src=e),a[e]=[t];var u=(t,r)=>{f.onerror=f.onload=null,clearTimeout(l);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(r))),t)return t(r)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=u.bind(null,f.onerror),f.onload=u.bind(null,f.onload),c&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/sso-docs/",n.gca=function(e){return e={17896441:"918","935f2afb":"53",e4e2bfdc:"60","90f18338":"72",f878bdf6:"73","1f391b9e":"85","9943fc86":"204","823d5d41":"222","739c4ded":"233","420d1f60":"344",ad17972e:"360","393be207":"414","1be78505":"514",a0eba6a9:"584","783df42e":"589","10d726e6":"606","898dbba4":"607","17a5a6aa":"611","60ca4257":"722","66a236a1":"729",c03cfd1a:"764","14eb3368":"817",c377a04b:"971","6e68be93":"974"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var d=n.p+n.u(t),f=new Error;n.l(d,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",f.name="ChunkLoadError",f.type=o,f.request=d,a[1](f)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,d=r[0],f=r[1],c=r[2],b=0;if(d.some((t=>0!==e[t]))){for(a in f)n.o(f,a)&&(n.m[a]=f[a]);if(c)var i=c(n)}for(t&&t(r);b<d.length;b++)o=d[b],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},r=self.webpackChunksso_docs=self.webpackChunksso_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();