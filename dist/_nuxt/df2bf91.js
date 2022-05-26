(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{365:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("caf35bfe",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n.r(e);n(24);var o=n(364),r=n(363),l={name:"Gmap",data:function(){return{styleMap:{width:"100%",height:"100%"},mapOptions:{disableDefaultUi:!0,mapTypeControl:!1,zoomControl:!1,fullscreenControl:!1,streetViewControl:!1,clickableIcons:!1,styles:[]},zoom:14,initialLocation:{lat:this.$store.getters.userLat,lng:this.$store.getters.userLng},infoWindowPos:{lat:0,lng:0},infoWinOpen:!1,displayitem:{img:"",name:"",access:"",key:"",id:""},restaurantList:this.$store.getters.result.results.shop,innerHeight:"100vh"}},computed:{faBookmark:function(){return o.a},faBookmarked:function(){return r.e},google:n(174).gmapApi},mounted:function(){this.innerHeight=window.innerHeight+"px"},methods:{selectSpot:function(t,e,n){this.initialLocation={lat:t,lng:e},this.infoWindowPos={lat:t,lng:e},this.displayitem.img=this.restaurantList[n].photo.pc.m,this.displayitem.name=this.restaurantList[n].name,this.displayitem.access=this.restaurantList[n].mobile_access,this.displayitem.key=n,this.displayitem.id=this.restaurantList[n].id,this.infoWinOpen=!0}}},c=(n(367),n(35)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{color:"#757575","font-family":"'Noto Sans JP', sans-serif"}},[n("b-container",[n("b-row",{staticStyle:{"padding-bottom":"60px"},style:{height:"calc("+t.innerHeight+" - (16rem + 75px))",overflow:"auto"}},[n("b-col",[n("GmapMap",{staticStyle:{overflow:"hidden","border-radius":"10px"},style:t.styleMap,attrs:{"map-type-id":"roadmap",center:t.initialLocation,zoom:t.zoom,options:t.mapOptions}},[n("GmapInfoWindow",{attrs:{position:t.infoWindowPos,options:{pixelOffset:{width:0,height:-45}},opened:t.infoWinOpen},on:{closeclick:function(e){t.infoWinOpen=!1}}},[n("div",[n("div",{on:{click:function(e){return t.$store.dispatch("resultSelect",t.val)}}},[n("b-img-lazy",{staticClass:"thumbnail",attrs:{src:t.displayitem.img,alt:"image"}})],1),t._v(" "),n("div",{staticClass:"mx-2 mt-2",staticStyle:{width:"100%"}},[n("div",{on:{click:function(e){return t.$store.dispatch("resultSelect",t.restaurantList[t.displayitem.key])}}},[n("h5",{staticClass:"mt-0",staticStyle:{"font-size":"16px"}},[t._v("\n                    "+t._s(t.displayitem.name)+"\n                  ")])])])])]),t._v(" "),t._l(t.restaurantList,(function(e,o){return n("GmapMarker",{key:o,attrs:{position:{lat:e.lat,lng:e.lng},clickable:!0},on:{click:function(n){return t.selectSpot(e.lat,e.lng,o)}}})}))],2)],1)],1)],1)],1)}),[],!1,null,"7ca180fb",null);e.default=component.exports},367:function(t,e,n){"use strict";n(365)},368:function(t,e,n){var o=n(65)(!1);o.push([t.i,".thumbnail[data-v-7ca180fb]{height:100%;max-height:80px;width:100%;overflow:hidden;border-radius:10px}",""]),t.exports=o},369:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("0d6f7ab4",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n(369)},377:function(t,e,n){var o=n(65)(!1);o.push([t.i,".thumbnail[data-v-4327df52]{height:100%;max-height:120px;width:110px;overflow:hidden;border-radius:10px 0 0 10px}.card[data-v-4327df52]{background-color:#fafafa;border-radius:10px;border:none;max-height:120px;box-shadow:0 5px 8px #c1c1c1}.detailbtn[data-v-4327df52]{-webkit-tap-highlight-color:rgba(0,0,0,0);font-size:12px;border:1px solid #007bff;cursor:pointer;outline:none;box-shadow:none!important}.checked[data-v-4327df52]{background-color:#007bff;color:#fafafa}.unchecked[data-v-4327df52]{background-color:transparent;color:#007bff}",""]),t.exports=o},388:function(t,e,n){"use strict";n.r(e);var o=n(364),r=n(363),l={name:"ResultList",components:{Gmap:n(366).default},data:function(){return{loaded:!1,restaurantList:this.$store.getters.result.results.shop,page:0,selectedOrder:null,order:[{text:"近い順",value:null},{text:"おすすめ順",value:"4"}],display:"list",innerHeight:"100vh"}},computed:{faBookmark:function(){return o.a},faBookmarked:function(){return r.e},faListUl:function(){return r.h},faMapMarkedAlt:function(){return r.j}},created:function(){console.log(this.restaurantList),this.loaded=!0},mounted:function(){var t=this;this.innerHeight=window.innerHeight+"px",this.$store.watch((function(t,e){return e.result.results}),(function(e){t.restaurantList=e.shop,t.loaded=!1,t.$nextTick((function(){return t.loaded=!0}))})),this.$store.watch((function(t,e){return e.pages}),(function(e){t.pageMax=e}))}},c=(n(376),n(35)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loaded?n("div",{staticStyle:{color:"#757575","font-family":"'Noto Sans JP', sans-serif","background-color":"#fafafa"}},[n("b-container",{staticClass:"pb-4"},[n("b-row",{staticClass:"px-2"},[n("b-col",[n("div",{staticClass:"d-flex",staticStyle:{color:"#757575"}},[n("h4",{staticClass:"pl-2 mr-3"},[t._v("\n            "+t._s(t.$store.getters.length)+"\n          ")]),t._v(" "),n("p",{staticClass:"mt-1 mb-0"},[t._v("\n            件が見つかりました\n          ")]),t._v(" "),n("div",{staticClass:"ml-auto mr-0"},["map"===t.display?n("b-button",{staticClass:"detailbtn unchecked py-1 px-2",staticStyle:{"border-radius":"50px 0 0 50px"},on:{click:function(e){t.display="list"}}},[n("fa",{attrs:{icon:t.faListUl}})],1):n("b-button",{staticClass:"detailbtn checked py-1 px-2",staticStyle:{"border-radius":"50px 0 0 50px"}},[n("fa",{attrs:{icon:t.faListUl}})],1)],1),t._v(" "),n("div",["list"===t.display?n("b-button",{staticClass:"detailbtn unchecked py-1 px-2",staticStyle:{"border-radius":"0 50px 50px 0"},on:{click:function(e){t.display="map"}}},[n("fa",{attrs:{icon:t.faMapMarkedAlt}})],1):n("b-button",{staticClass:"detailbtn checked py-1 px-2",staticStyle:{"border-radius":"0 50px 50px 0"}},[n("fa",{attrs:{icon:t.faMapMarkedAlt}})],1)],1)])])],1),t._v(" "),t.$store.getters.gpsStatus&&"list"===t.display?n("b-row",{staticClass:"px-2 justify-content-center align-items-start",staticStyle:{"padding-bottom":"60px","border-radius":"10px"},style:{maxHeight:"calc("+t.innerHeight+" - (16rem + 75px))",overflow:"auto"}},t._l(t.restaurantList,(function(e,o){return n("b-col",{key:o,staticClass:"mb-3 card px-0 col-12 col-md-5 mx-md-2"},[n("div",{staticClass:"d-flex"},[n("div",{on:{click:function(n){return t.$store.dispatch("resultSelect",e)}}},[n("b-img-lazy",{staticClass:"thumbnail",attrs:{src:e.photo.pc.m,alt:"image"}})],1),t._v(" "),n("div",{staticClass:"mx-2 mt-2",staticStyle:{width:"100%"}},[n("div",{staticStyle:{"font-size":"16px","text-align":"right"}},[t.$store.getters.bookmark.some((function(b){return b.id===e.id}))?n("fa",{staticClass:"mr-2",staticStyle:{color:"#007bff"},attrs:{icon:t.faBookmarked},on:{click:function(n){return t.$store.dispatch("removeBookmark",e.id)}}}):n("fa",{staticClass:"mr-2",staticStyle:{color:"#007bff"},attrs:{icon:t.faBookmark},on:{click:function(n){return t.$store.dispatch("addBookmark",e)}}})],1),t._v(" "),n("div",{on:{click:function(n){return t.$store.dispatch("resultSelect",e)}}},[n("h5",{staticClass:"mt-0",staticStyle:{"font-size":"16px"}},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),n("p",{staticStyle:{"font-size":"11px"}},[t._v("\n                "+t._s(e.mobile_access)+"\n              ")])])])])])})),1):t.$store.getters.gpsStatus&&"map"===t.display?n("Gmap"):n("b-row",{staticClass:"mx-2 justify-content-center align-items-center",staticStyle:{height:"51vh",overflow:"auto","border-radius":"14px"}},[n("b-col",{staticClass:"text-center"},[n("div",[n("h5",[t._v("\n            位置情報が取得できません\n          ")])])])],1)],1)],1):t._e()}),[],!1,null,"4327df52",null);e.default=component.exports;installComponents(component,{Gmap:n(366).default})}}]);