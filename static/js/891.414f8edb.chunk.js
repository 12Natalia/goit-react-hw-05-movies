"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{6713:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return d},Mc:function(){return f},_k:function(){return s},uV:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),o=e(1243),i="https://api.themoviedb.org",u="0894a3a8e07707c6da6855dbe93d4ef8",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"}/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3225:function(n,t,e){e.d(t,{Fg:function(){return v},HC:function(){return h},NZ:function(){return l},PP:function(){return f},aV:function(){return d}});var r,a,c,o,i,u=e(168),s=e(6444),p=e(1087),f=s.ZP.section(r||(r=(0,u.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),l=s.ZP.h2(a||(a=(0,u.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n"]))),d=s.ZP.ul(c||(c=(0,u.Z)(["\n  list-style: disc;\n  color: #008001;\n"]))),h=s.ZP.li(o||(o=(0,u.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),v=(0,s.ZP)(p.rU)(i||(i=(0,u.Z)(["\n  font-size: 20px;\n  color: #008001;\n  border-bottom: 2px solid #008001;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #008001;\n    border-bottom: 2px solid #ADFF2F;\n  }\n"])))},1724:function(n,t,e){e.d(t,{T:function(){return c}});var r=e(5243),a=e(184),c=function(){return(0,a.jsx)(r.Z1,{height:"300",width:"100%",color:"#3f51b5",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",margin:"0 auto",position:"fixed",top:"0",left:"0",right:"0",bottom:"0"},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"#008001",innerCircleColor:"#ADFF2F",middleCircleColor:"#008001"})}},4891:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(5861),a=e(9439),c=e(7757),o=e.n(c),i=e(2791),u=e(6713),s=e(3225),p=e(184),f=function(n){var t=n.trendingMovies;return(0,p.jsxs)(s.PP,{children:[(0,p.jsx)(s.NZ,{children:"Trending today"}),(0,p.jsx)(s.aV,{children:t.map((function(n){return(0,p.jsx)(s.HC,{children:(0,p.jsx)(s.Fg,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})},l=e(1724),d=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],s=(0,i.useState)(!0),d=(0,a.Z)(s,2),h=d[0],v=d[1],g=(0,i.useState)(!1),x=(0,a.Z)(g,2),m=x[0],Z=x[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!1),v(!0),n.next=5,(0,u._k)();case 5:t=n.sent,e=t.results,c(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),Z(!0);case 13:return n.prev=13,v(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsx)(p.Fragment,{children:h?(0,p.jsx)(l.T,{}):m?(0,p.jsx)("p",{children:"Sorry, we could not fetch the trending movies. Please try again later."}):(0,p.jsx)(f,{trendingMovies:e})})}}}]);
//# sourceMappingURL=891.414f8edb.chunk.js.map