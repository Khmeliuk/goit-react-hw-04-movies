(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{10:function(e,t,n){e.exports={listMovies:"Home_listMovies__1wRlX",text:"Home_text__2-G2J"}},13:function(e,t,n){"use strict";var c=n(16),i=n(17),a=new(function(){function e(){Object(c.a)(this,e),this.KEY="5e6b8abd0147cec83180492b4338bf27",this.URL="https://api.themoviedb.org/3"}return Object(i.a)(e,[{key:"trendMovies",value:function(){return fetch("".concat(this.URL,"/trending/movie/day?api_key=").concat(this.KEY)).then((function(e){return e.json()}))}},{key:"searchMovie",value:function(e){var t=new URLSearchParams({api_key:"5e6b8abd0147cec83180492b4338bf27",query:e,include_adult:!1,year:2021});return fetch(" ".concat(this.URL,"/search/movie?").concat(t)).then((function(e){return e.json()}))}},{key:"movieInfo",value:function(e){return fetch("".concat(this.URL,"/movie/").concat(e,"?api_key=").concat(this.KEY,"&language=en-US")).then((function(e){return console.log(e),e.json()}))}},{key:"artistInfo",value:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(this.KEY,"&language=en-US")).then((function(e){return e.json()}))}},{key:"reviews",value:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(this.KEY,"&language=en-US&page=1")).then((function(e){return e.json()}))}}]),e}());t.a=a},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(15),o=n.n(a),s=(n(24),n(2)),r=n(14),u=n(5),l=n(13),h=n(10),j=n.n(h),v=n(1);function b(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(s.g)();return console.log(a,"location"),Object(c.useEffect)((function(){return l.a.trendMovies().then(i)}),[]),n&&Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsx)("h2",{children:"Trending today"}),Object(v.jsx)("ul",{className:j.a.listMovies,children:n.results.map((function(e){return Object(v.jsx)("li",{className:j.a.text,children:Object(v.jsx)(u.c,{to:{pathname:"movies/".concat(e.id),state:{from:a}},children:Object(v.jsx)("p",{children:e.title||e.name})})},e.id)}))})]})}var d=n(6),m=n.n(d);function f(){return Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:m.a.nav,children:[Object(v.jsxs)("li",{children:[" ",Object(v.jsx)(u.c,{exact:!0,to:"/",activeClassName:m.a.active,className:m.a.text,children:"Home"})]}),Object(v.jsx)("li",{children:Object(v.jsx)(u.c,{to:"/movies",activeClassName:m.a.active,className:m.a.text,children:"Movies"})})]})})]})}var x=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,39))})),O=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,36))})),p=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,37))})),g=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,41))}));function _(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(f,{}),Object(v.jsx)(c.Suspense,{fallback:Object(v.jsx)("h3",{children:"download..."}),children:Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{exact:!0,path:"/",component:b}),Object(v.jsx)(s.a,{path:"/movies/:movieId",component:x}),Object(v.jsx)(s.a,{path:"/movies",component:g}),Object(v.jsx)(s.a,{path:"//movies/:movieId/cast",component:p}),Object(v.jsx)(s.a,{path:"/movies/:movieId/reviews",component:O})]})})]})}var y=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(u.a,{children:Object(v.jsx)(_,{})})}),document.getElementById("root")),y()},6:function(e,t,n){e.exports={nav:"Nav_nav__m0qr7",text:"Nav_text__2Yt2B",active:"Nav_active__fpPof"}}},[[34,1,2]]]);
//# sourceMappingURL=main.b047fa44.chunk.js.map