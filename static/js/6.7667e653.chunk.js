(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{42:function(e,t,r){"use strict";function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,"default",(function(){return h}));var i=r(14),a=r(0),s=r(13),u=r(5),b=r(2),f=r(35),l=r(1);function h(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),r=t[0],c=t[1],n=Object(b.f)(),h=Object(b.g)(),j=new URLSearchParams(h.search).get("search");return Object(f.useEffect)((function(){j&&s.a.searchMovie(j).then((function(e){c(e)}))}),[j]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.push(o(o({},h),{},{search:"search=".concat(e.target.elements.search.value)})),j&&s.a.searchMovie(j).then((function(e){c(e)}))},children:[Object(l.jsx)("input",{type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:" enter title to search"}),Object(l.jsx)("button",{type:"submit",children:"Search"})]}),Object(l.jsx)("ul",{children:r&&r.results.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:{pathname:"movies/".concat(e.id),state:{from:h}},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=6.7667e653.chunk.js.map