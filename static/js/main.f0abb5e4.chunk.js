(this["webpackJsonpmovie-app-2021"]=this["webpackJsonpmovie-app-2021"]||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),c=s.n(i),r=s(4),o=s.n(r),l=s(14),m=s(15),d=s(16),j=s(19),u=s(18),v=s(17),h=s.n(v),b=(s(43),s(0));var p=function(e){return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:e.poster,alt:e.title,title:e.title}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:e.title}),Object(b.jsx)("h5",{className:"movie__year",children:e.year}),Object(b.jsx)("ul",{className:"genre",children:e.genres.map((function(e,t){return Object(b.jsx)("li",{className:"genre__genre",children:e},t)}))}),Object(b.jsxs)("p",{className:"movie__summary",children:[e.summary.slice(0,140),"..."]})]})]})},O=(s(45),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).getMovies=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,a.setState({movies:t.data.data.movies,isLoading:!1});case 4:case"end":return e.stop()}}),e)}))),a.state={isLoading:!0,movies:[]},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:s.map((function(e){return console.log(e),Object(b.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.f0abb5e4.chunk.js.map