(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{373:function(t,o,e){var content=e(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(66).default)("4204a946",content,!0,{sourceMap:!1})},384:function(t,o,e){"use strict";e(373)},385:function(t,o,e){var r=e(65)(!1);r.push([t.i,".thumbnail[data-v-d4b2526e]{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;height:100%;max-height:120px;width:110px;overflow:hidden;border-radius:10px 0 0 10px}.card[data-v-d4b2526e]{background-color:#fafafa;border-radius:10px;border:none;max-height:120px;box-shadow:0 5px 8px #c1c1c1}",""]),t.exports=r},391:function(t,o,e){"use strict";e.r(o);var r=e(364),n=e(363),c={name:"Bookmark",data:function(){return{loaded:!0,length:this.$store.getters.bookmark.length,data:this.$store.getters.bookmark}},computed:{faBookmark:function(){return r.a},faBookmarked:function(){return n.e}},mounted:function(){var t=this;this.$store.watch((function(t,o){return o.bookmark}),(function(o){t.loaded=!1,t.data=o,t.length=o.length,t.$nextTick((function(){return t.loaded=!0}))}))}},l=(e(384),e(35)),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.loaded?e("div",{staticStyle:{color:"#757575","font-family":"'Noto Sans JP', sans-serif","background-color":"#fafafa","border-radius":"14px 14px 0 0"}},[e("b-container",[e("b-row",{staticClass:"px-2"},[e("b-col",[e("div",{staticClass:"d-flex mt-3",staticStyle:{color:"#757575"}},[e("h4",{staticClass:"pl-2 mx-3"},[t._v("\n            "+t._s(t.length)+"\n          ")]),t._v(" "),e("p",{staticClass:"mt-1 mb-0"},[t._v("\n            件のブックマーク\n          ")])])])],1),t._v(" "),e("b-row",{staticClass:"px-2 justify-content-center align-items-start",staticStyle:{"max-height":"38rem",overflow:"auto","border-radius":"14px"}},t._l(t.data,(function(o,r){return e("b-col",{key:r,staticClass:"mb-3 card px-0 col-12 col-md-5 mx-md-2"},[e("div",{staticClass:"d-flex"},[e("div",{on:{click:function(e){return t.$store.dispatch("resultSelect",o)}}},[e("b-img-lazy",{staticClass:"thumbnail",attrs:{src:o.photo.pc.m,alt:"image"}})],1),t._v(" "),e("div",{staticClass:"mx-2 mt-2",staticStyle:{width:"100%"}},[e("div",{staticStyle:{"font-size":"16px","text-align":"right"}},[t.$store.getters.bookmark.some((function(b){return b.id===o.id}))?e("fa",{staticClass:"mr-2",staticStyle:{color:"#007bff"},attrs:{icon:t.faBookmarked},on:{click:function(e){return t.$store.dispatch("removeBookmark",o.id)}}}):e("fa",{staticClass:"mr-2",staticStyle:{color:"#007bff"},attrs:{icon:t.faBookmark},on:{click:function(e){return t.$store.dispatch("addBookmark",o)}}})],1),t._v(" "),e("div",{staticClass:"align-items-end",on:{click:function(e){return t.$store.dispatch("resultSelect",o)}}},[e("h5",{staticClass:"mt-0",staticStyle:{"font-size":"16px"}},[t._v("\n                "+t._s(o.name)+"\n              ")]),t._v(" "),e("p",{staticStyle:{"font-size":"11px"}},[t._v("\n                "+t._s(o.mobile_access)+"\n              ")])])])])])})),1)],1)],1):t._e()}),[],!1,null,"d4b2526e",null);o.default=component.exports}}]);