(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4,5,7],{36:function(e,t,c){e.exports={img:"Cast_img__ZQxeh",castList:"Cast_castList__2xuxE"}},37:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return l}));var i=c(14),n=c(13),s=c(0),a=c(2),r=c(35),o=c(1);function l(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],l=t[1],j=Object(a.h)().movieId;return Object(r.useEffect)((function(){n.a.reviews(j).then((function(e){l(e)}))}),[j]),c&&(0===c.total_results?Object(o.jsx)("p",{children:"No reviews"}):Object(o.jsx)("ul",{children:c.results.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{children:e.author}),Object(o.jsx)("p",{children:e.content})]},e.id)}))}))}},38:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));var i=c(14),n=c(2),s=c(0),a=c(13),r=c(35),o=c(36),l=c.n(o),j=c(1);function u(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],o=t[1],u=Object(n.h)().movieId;return Object(r.useEffect)((function(){a.a.artistInfo(u).then((function(e){return o(e)}))}),[u]),c&&Object(j.jsx)("ul",{className:l.a.castList,children:c.cast.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{className:l.a.img,src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:""}),Object(j.jsx)("p",{children:e.name}),Object(j.jsxs)("p",{children:["character:",e.character]})]},e.cast_id)}))})}},39:function(e,t,c){e.exports={MovieInfo:"MovieDetailsPage_MovieInfo__3CVIA",info:"MovieDetailsPage_info__3TK1V",genres:"MovieDetailsPage_genres__1DyHz",gen:"MovieDetailsPage_gen__2dKzC",link:"MovieDetailsPage_link__3AKIQ"}},40:function(e,t,c){"use strict";c.r(t);var i=c(14),n=c(0),s=c(2),a=c(13),r=c(37),o=c(38),l=c(5),j=c(39),u=c.n(j),h=c(1);t.default=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],j=t[1],d=Object(s.h)();console.log(d,"params");var b=Object(s.i)();console.log(b,"march");var O=Object(s.g)(),v=Object(s.f)();return Object(n.useEffect)((function(){a.a.movieInfo(d.movieId).then(j)}),[d]),c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",onClick:function(){var e,t;v.push(null!==(e=null===O||void 0===O||null===(t=O.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:"<-Go back"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:u.a.MovieInfo,children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(c.poster_path),alt:c.title,width:"200px"}),Object(h.jsxs)("div",{className:u.a.info,children:[Object(h.jsx)("h2",{children:c.original_title||c.name}),Object(h.jsxs)("p",{children:[" User score ",10*c.vote_average," %"]}),Object(h.jsx)("h3",{children:"Overview"}),Object(h.jsx)("p",{children:c.overview}),Object(h.jsx)("h3",{children:"Genres"}),Object(h.jsx)("ul",{className:u.a.genres,children:c.genres.map((function(e){return Object(h.jsx)("li",{className:u.a.gen,children:e.name},e.id)}))})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:"Additional information"}),Object(h.jsx)(l.c,{className:u.a.link,to:"".concat(b.url,"/cast"),children:Object(h.jsx)("p",{children:"Cast"})}),Object(h.jsx)(l.c,{className:u.a.link,to:"".concat(b.url,"/reviews"),children:"Reviews"}),Object(h.jsx)(s.a,{path:"/movies/:movieId/cast",children:Object(h.jsx)(o.default,{})}),Object(h.jsx)(s.a,{path:"/movies/:movieId/reviews",children:Object(h.jsx)(r.default,{})})]})]})}}}]);
//# sourceMappingURL=4.b28fd5ee.chunk.js.map