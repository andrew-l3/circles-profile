(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3544:function(e,t,n){Promise.resolve().then(n.bind(n,3445)),Promise.resolve().then(n.bind(n,3606))},551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let l=n(9920);n(7437),n(2265);let i=l._(n(148));function r(e,t){var n;let l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let r={...l,...t};return(0,i.default)({...r,modules:null==(n=r.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let l=n(5592);function i(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let l=n(7437),i=n(2265),r=n(912),s=n(1481);function a(e){return{default:e&&"default"in e?e.default:e}}let u={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},c=function(e){let t={...u,...e},n=(0,i.lazy)(()=>t.loader().then(a)),c=t.loading;function d(e){let a=c?(0,l.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,u=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(s.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(i.Suspense,{fallback:a,children:u})}return d.displayName="LoadableComponent",d}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return r}});let l=n(7437),i=n(8512);function r(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,i.getExpectedRequestStore)("next/dynamic css"),r=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));r.push(...t)}}return 0===r.length?null:(0,l.jsx)(l.Fragment,{children:r.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},3445:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var l=n(7437);n(7403);var i=n(551);let r=n.n(i)()(()=>Promise.all([n.e(689),n.e(918),n.e(674),n.e(690)]).then(n.bind(n,7690)),{loadableGenerated:{webpack:()=>[7690]},loading:()=>(0,l.jsx)("p",{className:"plh",children:"Hey, it's me."})});var s=function(){return(0,l.jsx)("section",{className:"flex flex-1 justify-center align-middle items-center",children:(0,l.jsxs)("div",{className:"flex flex-col justify-center align-middle items-center gap-4",children:[(0,l.jsx)("div",{className:"sc absolute justify-center items-center align-middle",children:(0,l.jsx)(r,{})}),(0,l.jsxs)("div",{className:"hero-info inline-flex justify-center align-middle items-center gap-4 py-1.5 px-4",children:[(0,l.jsx)("p",{className:"feature-sub",children:"Web Developer"}),(0,l.jsx)("p",{className:"feature-sub",children:"•"}),(0,l.jsx)("p",{className:"feature-sub",children:"Master of Information Technology"}),(0,l.jsx)("p",{className:"feature-sub",children:"•"}),(0,l.jsx)("p",{className:"feature-sub",children:"Touch Football"})]})]})})}},3606:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var l=n(7437);n(9358);let i=[{id:1,title:"Home",link:"/circles-profile"},{id:2,title:"LinkedIn",link:"https://www.linkedin.com/in/andrew-lei33/"},{id:3,title:"GitHub",link:"https://github.com/andrew-l3"},{id:4,title:"Contact",link:"/circles-profile"}];var r=n(2265),s=function(){let[e]=(0,r.useState)(i[0].id);return(0,l.jsx)("section",{className:"nav_header",children:(0,l.jsx)("div",{className:"navbar",children:(0,l.jsx)("div",{className:"hamburger_menu_container",children:(0,l.jsxs)("label",{className:"hamburger_menu",children:[(0,l.jsx)("input",{type:"checkbox"}),(0,l.jsx)("div",{className:"nav_buttons",children:(0,l.jsx)("div",{className:"nav_top flex space-x-5",children:i.map(t=>(0,l.jsx)("a",{href:t.link,className:"".concat(e===t.id?"absolute bg-white text-black rounded-full mix-blend-difference":"text-white hover:opacity-50"," relative px-3 py-1.5"),children:t.title},t.id))})})]})})})})}},7403:function(){},9358:function(){}},function(e){e.O(0,[807,971,23,744],function(){return e(e.s=3544)}),_N_E=e.O()}]);