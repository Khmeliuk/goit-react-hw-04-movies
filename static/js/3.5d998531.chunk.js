(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3,4,6],{35:function(e,t,c){e.exports={img:"Cast_img__ZQxeh",castList:"Cast_castList__2xuxE"}},36:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return o}));var i=c(14),n=c(13),s=c(0),a=c(2),r=c(1);function o(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],o=t[1],l=Object(a.h)().movieId;return Object(s.useEffect)((function(){n.a.reviews(l).then((function(e){o(e)}))}),[l]),c&&(0===c.total_results?Object(r.jsx)("p",{children:"No reviews"}):Object(r.jsx)("ul",{children:c.results.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:e.author}),Object(r.jsx)("p",{children:e.content})]},e.id)}))}))}},37:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return j}));var i=c(14),n=c(2),s=c(0),a=c(13),r=c(35),o=c.n(r),l=c(1);function j(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],r=t[1],j=Object(n.h)().movieId;return Object(s.useEffect)((function(){a.a.artistInfo(j).then((function(e){return r(e)}))}),[j]),c&&Object(l.jsx)("ul",{className:o.a.castList,children:c.cast.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{className:o.a.img,src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:""}),Object(l.jsx)("p",{children:e.name}),Object(l.jsxs)("p",{children:["character:",e.character]})]},e.cast_id)}))})}},38:function(e,t,c){e.exports={MovieInfo:"MovieDetailsPage_MovieInfo__3CVIA",info:"MovieDetailsPage_info__3TK1V",genres:"MovieDetailsPage_genres__1DyHz",gen:"MovieDetailsPage_gen__2dKzC",link:"MovieDetailsPage_link__3AKIQ"}},39:function(e,t,c){"use strict";c.r(t);var i=c(14),n=c(0),s=c(2),a=c(13),r=c(36),o=c(37),l=c(5),j=c(38),u=c.n(j),h=c(1);t.default=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],j=t[1],d=Object(s.h)(),b=Object(s.i)(),O=Object(s.g)(),v=Object(s.f)();return Object(n.useEffect)((function(){a.a.movieInfo(d.movieId).then(j)}),[d]),c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",onClick:function(){var e,t;v.push(null!==(e=null===O||void 0===O||null===(t=O.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:"<-Go back"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:u.a.MovieInfo,children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(c.poster_path),alt:c.title,width:"200px"}),Object(h.jsxs)("div",{className:u.a.info,children:[Object(h.jsx)("h2",{children:c.original_title||c.name}),Object(h.jsxs)("p",{children:[" User score ",10*c.vote_average," %"]}),Object(h.jsx)("h3",{children:"Overview"}),Object(h.jsx)("p",{children:c.overview}),Object(h.jsx)("h3",{children:"Genres"}),Object(h.jsx)("ul",{className:u.a.genres,children:c.genres.map((function(e){return Object(h.jsx)("li",{className:u.a.gen,children:e.name},e.id)}))})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:"Additional information"}),Object(h.jsx)(l.c,{className:u.a.link,to:"".concat(b.url,"/cast"),children:Object(h.jsx)("p",{children:"Cast"})}),Object(h.jsx)(l.c,{className:u.a.link,to:"".concat(b.url,"/reviews"),children:"Reviews"}),Object(h.jsx)(s.a,{path:"/movies/:movieId/cast",children:Object(h.jsx)(o.default,{})}),Object(h.jsx)(s.a,{path:"/movies/:movieId/reviews",children:Object(h.jsx)(r.default,{})})]})]})}}}]);
//# sourceMappingURL=3.5d998531.chunk.js.map