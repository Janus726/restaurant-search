(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{374:function(t,e,r){var content=r(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("234399a8",content,!0,{sourceMap:!1})},386:function(t,e,r){"use strict";r(374)},387:function(t,e,r){var n=r(65)(!1);n.push([t.i,".arrowbtn[data-v-474d91f2]{background-color:#fafafa;color:#f99305;border-radius:50%;border:none;max-width:32px;height:32px;box-shadow:0 5px 8px #c07104}.arrowbtn[data-v-474d91f2]:active,.arrowbtn[data-v-474d91f2]:focus,.arrowbtn[data-v-474d91f2]:hover{color:#f99305!important;background-color:#fafafa!important;outline:none}.pageNumM[data-v-474d91f2]{max-width:36px;height:36px;font-size:24px;padding-top:5px}.pageNumM[data-v-474d91f2],.pageNumS[data-v-474d91f2]{background-color:transparent;color:#fafafa;border-radius:50%;border:none}.pageNumS[data-v-474d91f2]{max-width:28px;height:28px;font-size:16px;padding-top:4px}",""]),t.exports=n},392:function(t,e,r){"use strict";r.r(e);r(40);var n=r(363),o={name:"PageController",data:function(){return{buttonPressed:!1}},computed:{faAngleLeft:function(){return n.b},faAngleRight:function(){return n.c}},methods:{nextPage:function(){var t=this;if(!1===this.buttonPressed){this.buttonPressed=!0;var e=this.$store.getters.currentPage;e++,this.$store.dispatch("nextPage",e),setTimeout((function(){t.buttonPressed=!1}),1e3)}},prevPage:function(){var t=this;if(!1===this.buttonPressed){this.buttonPressed=!0;var e=this.$store.getters.currentPage;e--,this.$store.dispatch("prevPage",e),setTimeout((function(){t.buttonPressed=!1}),1e3)}}}},c=(r(386),r(35)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-2 fixed-bottom",staticStyle:{position:"absolute",bottom:"25px",left:"0",right:"0"}},[r("b-container",[r("b-row",{staticClass:"mx-3 py-1 justify-content-center d-flex align-items-center",staticStyle:{"background-color":"rgb(249, 147, 5)","border-radius":"50px"}},[r("b-col",{staticClass:"text-center"},[t.$store.getters.currentPage>0?r("b-button",{staticClass:"arrowbtn col-2",attrs:{variant:"outline-primary"},on:{click:function(e){return t.prevPage()}}},[r("fa",{staticClass:"d-flex align-items-center",attrs:{icon:t.faAngleLeft}})],1):t._e()],1),t._v(" "),r("b-col",{staticClass:"text-center col-2 d-flex justify-content-center"},[0!==t.$store.getters.currentPage?r("div",{staticClass:"pageNumS"},[t._v("\n          1\n        ")]):t._e()]),t._v(" "),r("b-col",{staticClass:"col-2 d-flex justify-content-center"},[0!==t.$store.getters.pages?r("div",{staticClass:"pageNumM mb-2"},[t._v("\n          "+t._s(t.$store.getters.currentPage+1)+"\n        ")]):t._e()]),t._v(" "),r("b-col",{staticClass:"text-center col-2 d-flex justify-content-center"},[t.$store.getters.currentPage+1!==t.$store.getters.pages&&0!==t.$store.getters.pages?r("div",{staticClass:"pageNumS"},[t._v("\n          "+t._s(t.$store.getters.pages)+"\n        ")]):t._e()]),t._v(" "),r("b-col",{staticClass:"text-center"},[t.$store.getters.currentPage+1<t.$store.getters.pages?r("b-button",{staticClass:"arrowbtn col-2",attrs:{variant:"outline-primary"},on:{click:function(e){return t.nextPage()}}},[r("fa",{staticClass:"d-flex align-items-center",attrs:{icon:t.faAngleRight}})],1):t._e()],1)],1)],1)],1)}),[],!1,null,"474d91f2",null);e.default=component.exports}}]);