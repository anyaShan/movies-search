"use strict";(self.webpackChunkmovies_search=self.webpackChunkmovies_search||[]).push([[806],{806:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,c,u,i,s=t(885),o=t(689),p=t(791),f=t(641),d=t(168),l=t(444),x=l.ZP.div(r||(r=(0,d.Z)(["\n  padding-top: 15px;\n  border-top: 3px solid rgb(52, 162, 212);\n"]))),h=l.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  gap: 15px;\n"]))),v=l.ZP.li(c||(c=(0,d.Z)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=l.ZP.div(u||(u=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  line-height: 1.2;\n  b {\n    font-size: 18px;\n  }\n\n  p {\n    font-weight: 600;\n    font-size: 16px;\n\n    color: grey;\n  }\n"]))),b=l.ZP.div(i||(i=(0,d.Z)(["\n  text-align: center;\n"]))),y=t(184),m=function(){var n=(0,o.UO)().movieId,e=(0,p.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1];return(0,p.useEffect)((function(){(0,f.tx)(n).then(a).catch((function(n){return n.message}))}),[n]),(0,y.jsx)(x,{children:(0,y.jsx)(h,{children:r.length>0?r.map((function(n){var e=n.author,t=n.content,r=n.created_at;return(0,y.jsxs)(v,{children:[(0,y.jsxs)(g,{children:[(0,y.jsxs)("b",{children:["Author: ",e]}),(0,y.jsxs)("p",{children:["Date: ",new Date(r).toLocaleString()]})]}),(0,y.jsx)("p",{children:t})]},e)})):(0,y.jsx)(b,{children:"We don't have any reviews for this movie"})})})}},641:function(n,e,t){t.d(e,{a5:function(){return p},sd:function(){return s},tx:function(){return v},vq:function(){return d},zv:function(){return x}});var r=t(861),a=t(687),c=t.n(a),u=t(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="47d4e1a1a10be98644abcf2b38417f6e";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="trending/movie/day?api_key=".concat(i),n.next=3,u.ZP.get(e);case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&include_adult=false"),n.next=3,u.ZP.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),n.next=3,u.ZP.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),n.next=3,u.ZP.get(t);case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"),n.next=3,u.ZP.get(t);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=806.71e8b3e4.chunk.js.map