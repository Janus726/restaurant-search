(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{334:function(t,o,e){var content=e(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(84).default)("e485b0bc",content,!0,{sourceMap:!1})},344:function(t,o,e){"use strict";e(334)},345:function(t,o,e){var n=e(83)(!1);n.push([t.i,".thumbnail[data-v-684f1251]{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;height:100%;max-height:120px;width:110px;overflow:hidden;border-radius:10px 0 0 10px}.card[data-v-684f1251]{background-color:#fafafa;border-radius:10px;border:none;max-height:120px;box-shadow:0 7px 10px #b25f00}",""]),t.exports=n},349:function(t,o,e){"use strict";e.r(o);var n=e(329),r=e(328),c={name:"Bookmark",data:function(){return{loaded:!0,length:this.$store.getters.bookmark.length,data:this.$store.getters.bookmark}},computed:{faBookmark:function(){return n.a},faBookmarked:function(){return r.e}},mounted:function(){var t=this;this.$store.watch((function(t,o){return o.bookmark}),(function(o){t.loaded=!1,t.data=o,t.length=o.length,t.$nextTick((function(){return t.loaded=!0}))}))}},l=(e(344),e(67)),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.loaded?e("div",{staticStyle:{color:"#757575","font-family":"'Noto Sans JP', sans-serif"}},[e("b-container",[e("b-row",{staticClass:"px-2"},[e("b-col",[e("div",{staticClass:"d-flex mt-3",staticStyle:{color:"#fafafa"}},[e("h4",{staticClass:"pl-2 mx-3"},[t._v("\n            "+t._s(t.length)+"\n          ")]),t._v(" "),e("p",{staticClass:"mt-1 mb-0"},[t._v("\n            件のブックマーク\n          ")])])])],1),t._v(" "),e("b-row",{staticClass:"mx-2 px-1 justify-content-center align-items-start",staticStyle:{"max-height":"38rem",overflow:"auto","border-radius":"14px"}},t._l(t.data,(function(o,n){return e("b-col",{key:n,staticClass:"mb-3 card px-0 col-12 col-md-5 mx-md-2"},[e("div",{staticClass:"d-flex"},[e("div",{on:{click:function(e){return t.$store.dispatch("resultSelect",o)}}},[e("b-img-lazy",{staticClass:"thumbnail",attrs:{src:o.photo.pc.m,alt:"image"}})],1),t._v(" "),e("div",{staticClass:"mx-2 mt-2",staticStyle:{width:"100%"}},[e("div",{staticStyle:{"font-size":"16px","text-align":"right"}},[t.$store.getters.bookmark.some((function(b){return b.id===o.id}))?e("fa",{staticClass:"mr-2",staticStyle:{color:"#007bff"},attrs:{icon:t.faBookmarked},on:{click:function(e){return t.$store.dispatch("removeBookmark",o.id)}}}):e("fa",{staticClass:"mr-2",staticStyle:{color:"#007bff"},attrs:{icon:t.faBookmark},on:{click:function(e){return t.$store.dispatch("addBookmark",o)}}})],1),t._v(" "),e("div",{staticClass:"align-items-end",on:{click:function(e){return t.$store.dispatch("resultSelect",o)}}},[e("h5",{staticClass:"mt-0",staticStyle:{"font-size":"16px"}},[t._v("\n                "+t._s(o.name)+"\n              ")]),t._v(" "),e("p",{staticStyle:{"font-size":"11px"}},[t._v("\n                "+t._s(o.mobile_access)+"\n              ")])])])])])})),1)],1)],1):t._e()}),[],!1,null,"684f1251",null);o.default=component.exports}}]);