(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"132":function(e,n,t){var i=t(21),a=t(3208);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={"insert":"head","singleton":!1},s=(i(a,o),a.locals?a.locals:{});e.exports=s},"133":function(e,n,t){var i=t(21),a=t(3210);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={"insert":"head","singleton":!1},s=(i(a,o),a.locals?a.locals:{});e.exports=s},"3207":function(e,n,t){"use strict";t(132)},"3208":function(e,n,t){var i=t(22),a=t(89),o=t(116),s=t(96);n=i(!1);var r=a(o),c=a(s);n.push([e.i,".zone-list {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100vw;\n  height: 90%;\n}\n.zone-list.disabled-scroll {\n  overflow: hidden;\n}\n.zone-list .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.zone-list .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.zone-list .zone-item {\n  width: 30%;\n  height: 4.26667rem;\n  background: url("+r+") no-repeat 50% 0;\n  background-size: 4.26667rem;\n  position: relative;\n  overflow: hidden;\n}\n.zone-list .zone-item:last-child {\n  width: 60%;\n  margin: 0 auto;\n  background: url("+c+") no-repeat 50% 0;\n  background-size: 100% 100%;\n}\n.zone-list .zone-item .enemy-name {\n  width: 100%;\n  height: 0.85333rem;\n  line-height: 0.85333rem;\n  text-align: center;\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-size: 0.256rem;\n  z-index: 100;\n}\n.zone-list .zone-item .enemy-img {\n  display: block;\n  width: 3.41333rem;\n  height: 3.41333rem;\n  margin: 0.42667rem auto 0;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  -o-transition: transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.zone-list .zone-item .enemy-img.un-open {\n  -webkit-filter: brightness(0);\n          filter: brightness(0);\n  opacity: 0.8;\n}\n.zone-list .zone-item .enemy-img.open:active {\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n",""]),e.exports=n},"3209":function(e,n,t){"use strict";t(133)},"3210":function(e,n,t){var i=t(22),a=t(89),o=t(93),s=t(96);n=i(!1);var r=a(o),c=a(s);n.push([e.i,".digimon-zones {\n  width: 100vw;\n  height: 100vh;\n  padding: 0.42667rem 0 0.42667rem;\n  overflow-y: auto;\n  background: url("+r+") no-repeat;\n  background-size: 100vw 100vh;\n}\n.digimon-zones .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.digimon-zones .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.digimon-zones .zone-list-item {\n  width: 10.66667rem;\n  height: 5.12rem;\n  -webkit-box-shadow: 0 0 0.42667rem rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 0.42667rem rgba(0, 0, 0, 0.4);\n  margin: 1.28rem auto 1.28rem;\n  border-radius: 0.128rem;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  -o-transition: transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  background: url("+c+") no-repeat;\n  background-size: 100% 100%;\n  position: relative;\n}\n.digimon-zones .zone-list-item .zone-name {\n  position: absolute;\n  right: 0.34133rem;\n  bottom: 0.256rem;\n  font-size: 1.28rem;\n  color: rgba(255, 255, 255, 0.8);\n  z-index: 100;\n}\n.digimon-zones .zone-list-item .zone-img {\n  width: 10.24rem;\n  height: 4.69333rem;\n  margin: 0.21333rem 0 0 0.256rem;\n}\n.digimon-zones .zone-list-item:active {\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n",""]),e.exports=n},"3229":function(e,n,t){"use strict";t.r(n);var i=t(8),a=t(0),o=t(2),s=t(3225),r=t(87),c={"name":"ZoneList","components":{"DigimonBattle":s.default},"props":{"activeZoneItem":{"type":Object,"default":function _default(){return{}}},"activeZone":{"type":String,"default":""},"enemyList":{"type":Array,"default":function _default(){return[]}},"gifsMap":{"type":Object,"default":null}},"data":function data(){return{"enemyDigimonName":""}},"computed":{"zoneStatus":function zoneStatus(){return this.$store.state.zoneStatus[this.activeZone]},"computedEnemyList":function computedEnemyList(){return this.enemyList.map((function(e){return{"img":r.d[e].img,"name":e,"nameZh":r.d[e].name}}))}},"mounted":function mounted(){this.zoneStatus||this.$store.dispatch("updateZoneStatus",Object(o.a)({},this.activeZone,0))},"methods":{"backHandle":function backHandle(){this.$emit("chengeZone","")},"finallyCallback":function finallyCallback(e){var n=this;"success"==e&&this.zoneIndex>=this.zoneStatus&&this.$store.dispatch("updateZoneStatus",Object(o.a)({},this.activeZone,this.zoneStatus+1)),this.$nextTick((function(){n.enemyDigimonName=""}))},"selectEnemy":function selectEnemy(e,n){if(this.zoneStatus<n)Object(i.showToast)({"title":"前面都没打 想跳关？？","icon":"none","duration":1e3});else{var t=Object(i.getStorageSync)("allTimes");if(t&&t[this.activeZone]){var s=t[this.activeZone];if(s>(this.activeZoneItem.maxLimit||10))return void Object(i.showToast)({"title":"今天就到这吧 不接客了","icon":"none","duration":1e3});Object(i.setStorageSync)("allTimes",Object(a.a)(Object(a.a)({},t),{},Object(o.a)({},this.activeZone,s+1)))}this.zoneIndex=n,this.enemyDigimonName=e.name}}},"onReady":function onReady(){}},m=(t(3207),t(86)),u={"name":"DigimonZones","components":{"ZoneList":Object(m.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("taro-view",{"staticClass":"zone-list","class":{"disabled-scroll":!!e.enemyDigimonName}},[""==e.enemyDigimonName?t("taro-view",{"staticClass":"back-button","on":{"tap":e.backHandle}},[e._v("返回")]):e._e(),e._v(" "),e.enemyDigimonName?e._e():t("taro-view",{"staticClass":"zone-list"},e._l(e.computedEnemyList,(function(n,i){return t("taro-view",{"key":i,"staticClass":"zone-item","on":{"tap":function(t){return e.selectEnemy(n,i)}}},[t("taro-view",{"staticClass":"enemy-name"},[e._v(e._s(i<=e.zoneStatus?n.nameZh:"？？？"))]),e._v(" "),t("taro-image",{"staticClass":"enemy-img","class":{"un-open":i>e.zoneStatus,"open":i<=e.zoneStatus},"attrs":{"src":n.img}})],1)})),1),e._v(" "),e.enemyDigimonName?t("digimon-battle",{"attrs":{"battel-background":e.activeZoneItem.img,"gifs":e.gifsMap&&e.enemyDigimonName&&e.gifsMap[e.enemyDigimonName],"enemy-digimon":e.enemyDigimonName,"finally-callback":e.finallyCallback}}):e._e()],1)}),[],!1,null,null,null).exports},"computed":{},"data":function data(){return{"activeZone":"","activeZoneItem":{},"enemyList":[],"gifsMap":null,"zonesList":[{"zoneId":"20210119","name":"大冒号","enemyList":Object.keys(r.A),"img":t(121),"gifsMap":Object.keys(r.A).reduce((function(e,n,t){return e[n]={"type":"expGain","expGain":t<9?2:5},e}),{})},{"zoneId":"20210204","name":"四天王","enemyList":Object.keys(r.r),"img":t(117),"gifsMap":Object.keys(r.r).reduce((function(e,n,t){return e[n]="sangshibaolong"===n?{"type":"sangshi_card","percent":.5}:"qishilu"===n?{"type":"testegg","percent":.9}:{"type":"chilun_card","percent":t<9?.7:.5},e}),{})},{"zoneId":"20210220","name":"七魔王","enemyList":Object.keys(r.x),"img":t(123),"gifsMap":Object.keys(r.x).reduce((function(e,n,t){return e[n]="liuchi"===n?{"type":"mowegg","percent":.5}:{"type":"heianta_card","percent":.5},e}),{})},{"zoneId":"20210221","name":"帝厉魔","enemyList":Object.keys(r.p),"img":t(115),"gifsMap":Object.keys(r.p).reduce((function(e,n,t){return e[n]={"type":"expGain","expGain":t<9?5:10},e}),{})},{"zoneId":"20210224","name":"超恶魔兽的逆袭","enemyList":Object.keys(r.v),"img":t(122),"gifsMap":Object.keys(r.v).reduce((function(e,n,t){return e[n]={"type":"shuimu_card","percent":t<9?.9:.5},e}),{})},{"zoneId":"20210225","name":"皇家骑士","enemyList":Object.keys(r.t),"img":t(119),"gifsMap":Object.keys(r.t).reduce((function(e,n,t){return e[n]="honglianfb"===n?{"type":"zsj_card","percent":.9}:"jinjialongfb"===n?{"type":"mingyun_card","percent":.5}:{"type":"hjegg","percent":t<9?.9:.5},e}),{})},{"zoneId":"20210314","name":"组合战争","enemyList":Object.keys(r.u),"img":t(120),"gifsMap":Object.keys(r.u).reduce((function(e,n,t){return e[n]={"type":"jcegg","percent":t<9?.9:.5},e}),{})},{"zoneId":"20210522","name":"皇骑X","enemyList":Object.keys(r.s),"img":t(118),"gifsMap":Object.keys(r.s).reduce((function(e,n,t){return e[n]="jinjialongxfb"===n?{"type":"GET_ITEM","itemId":17,"count":1,"percent":.9}:"jiesigxfb"===n?{"type":"x_card","percent":.5}:"wanglongfafb"===n?{"type":"GET_ITEM","itemId":32,"count":1,"percent":.6}:{"type":"GET_ITEM","itemId":18,"count":1,"percent":t<9?.9:.5},e}),{})},{"zoneId":"20210620","maxLimit":10,"name":"伪装伪装兽","enemyList":Object.keys(r.z),"img":t(126),"gifsMap":Object.keys(r.z).reduce((function(e,n,t){return e[n]={"type":"GET_ITEM","itemId":2,"count":[1,30],"countRandom":!0,"percent":.01},e}),{})},{"zoneId":"20220421","maxLimit":10,"name":"奥古杜兽X","enemyList":Object.keys(r.q),"img":t(114),"gifsMap":Object.keys(r.q).reduce((function(e,n,t){return e[n]="aoguduxfb"===n?{"type":"jzz_card","percent":.5}:"guangmingxfb"===n?{"type":"aoguduxegg","percent":.7}:{"type":"aogudu_card","percent":t<9?.5:.3},e}),{})},{"zoneId":"20211024","maxLimit":10,"name":"四圣兽","enemyList":Object.keys(r.y),"img":t(125),"gifsMap":Object.keys(r.y).reduce((function(e,n,t){return e[n]="huanglongfb"===n?{"type":"jian_card","percent":.5}:"zhuquefb"===n?{"type":"dun_card","percent":.5}:{"type":"GET_ITEM","itemId":19,"count":1,"percent":.8},e}),{})},{"zoneId":"20220506","name":"古代十斗士","enemyList":Object.keys(r.w),"img":t(124),"gifsMap":Object.keys(r.w).reduce((function(e,n,t){return e[n]={"type":"expGain","expGain":t<9?7:12},e}),{})},{"zoneId":"","name":"","enemyList":[],"img":"","gifsMap":null}]}},"methods":{"backHandle":function backHandle(){this.$store.commit("UPDATE_SCENETYPE","normal")},"tapHandle":function tapHandle(e){var n=this;e.zoneId?(this.enemyList=e.enemyList,this.gifsMap=e.gifsMap||null,this.activeZoneItem=e,setTimeout((function(){n.activeZone=e.zoneId}),400)):Object(i.showToast)({"title":"还没做好啊 别点了","icon":"none","duration":1e3})}},"onReady":function onReady(){}},l=(t(3209),Object(m.a)(u,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("taro-view",{"staticClass":"digimon-zones"},[""==e.activeZone?t("taro-view",{"staticClass":"back-button","on":{"tap":e.backHandle}},[e._v("返回")]):e._e(),e._v(" "),e._l(e.zonesList,(function(n,i){return t("taro-view",{"directives":[{"name":"show","rawName":"v-show","value":""==e.activeZone,"expression":"activeZone == ''"}],"key":i,"staticClass":"zone-list-item","on":{"tap":function(t){return e.tapHandle(n)}}},[n.name?t("taro-view",{"staticClass":"zone-name"},[e._v(e._s(n.name))]):e._e(),e._v(" "),n.img?t("taro-image",{"staticClass":"zone-img","attrs":{"src":n.img}}):e._e()],1)})),e._v(" "),e.activeZone?t("zone-list",{"attrs":{"activeZoneItem":e.activeZoneItem,"activeZone":e.activeZone,"enemyList":e.enemyList,"gifsMap":e.gifsMap},"on":{"chengeZone":function(n){e.activeZone=""}}}):e._e()],2)}),[],!1,null,null,null));n.default=l.exports}}]);