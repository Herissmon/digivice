(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"125":function(e,t,i){var n=i(21),s=i(2205);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var o={"insert":"head","singleton":!1},a=(n(s,o),s.locals?s.locals:{});e.exports=a},"2204":function(e,t,i){"use strict";i(125)},"2205":function(e,t,i){var n=i(22),s=i(89),o=i(90);t=n(!1);var a=s(o);t.push([e.i,".digimon-store {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: url("+a+") no-repeat;\n  background-size: 100vw 100vh;\n}\n.digimon-store .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.digimon-store .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.digimon-store .tabs {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 6.4rem;\n  margin: 0 auto;\n}\n.digimon-store .tabs .tab-item {\n  padding: 0.21333rem;\n  color: #797979;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.digimon-store .tabs .tab-item.active {\n  color: white;\n}\n.digimon-store .digimon-store-box {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 85vh;\n}\n.digimon-store .digimon-store-box .digimon-select {\n  height: 60vh;\n  margin-top: 8vh;\n}\n.digimon-store .digimon-store-box .digimon-select .digimon-img-box {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  position: relative;\n}\n.digimon-store .digimon-store-box .digimon-select .digimon-img-box .digimon-level {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n  color: #fff;\n  font-size: 0.59733rem;\n  width: 100%;\n  text-align: center;\n}\n.digimon-store .digimon-store-box .digimon-select .digimon-img-box .digimon-img {\n  width: 7.25333rem;\n  height: 7.25333rem;\n}\n.digimon-store .item-store-box {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.digimon-store .item-store-box .items {\n  width: 2.13333rem;\n  height: 2.13333rem;\n  border: 0.02133rem solid #fff;\n  margin: 0.21333rem 0.34133rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n}\n.digimon-store .item-store-box .items .count {\n  position: absolute;\n  right: 0.17067rem;\n  top: 0;\n  color: #fff;\n  font-size: 0.512rem;\n}\n.digimon-store .item-store-box .items .img {\n  max-width: 1.70667rem;\n  max-height: 1.70667rem;\n}\n.digimon-store .item-store-box .items .img img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.digimon-store .item-store-box .items.active {\n  border-color: #dbfa2d;\n  -webkit-box-shadow: 0 0 0.17067rem rgba(219, 250, 45, 0.5);\n          box-shadow: 0 0 0.17067rem rgba(219, 250, 45, 0.5);\n}\n.digimon-store .digi-submit {\n  width: 5.97333rem;\n  border-radius: 0.21333rem;\n  background: #fff;\n  text-align: center;\n  margin: 0 auto;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  position: fixed;\n  bottom: 0.42667rem;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n.digimon-store .digi-submit:active {\n  background: rgba(0, 0, 0, 0.4);\n}\n",""]),e.exports=t},"2221":function(e,t,i){"use strict";i.r(t);var n=i(10),s=i(0),o=i(87),a=i(8),r=i(91),m=i(88),c={"name":"DigimonStore","components":{},"props":{},"data":function data(){return{"activeTab":1,"currentItem":null,"DIGIMONS_DATA":o.c,"currentDigimonIndex":0}},"computed":{"canExchange":function canExchange(){var e=o.c[this.$store.state.tamerData.currentDigimon];return null==e.evolutionLevelLimit||0==e.evolutionLevelLimit},"storeItems":function storeItems(){var e=this.$store.state.storeItems;return Object.keys(e).map((function(e){return r.a[e]}))},"storeItemsCount":function storeItemsCount(){return Object.values(this.$store.state.storeItems)},"digimonStore":function digimonStore(){return this.$store.state.digimonStore},"tamerData":function tamerData(){return this.$store.state.tamerData}},"mounted":function mounted(){},"methods":{"selectItems":function selectItems(e){this.currentItem=e,Object(a.showToast)({"image":this.storeItems[e-1].img,"title":this.storeItems[e-1].descript,"icon":"none","duration":2e3})},"onChangeEventDeatil":function onChangeEventDeatil(e){this.currentDigimonIndex=e.detail.current},"selectDigimon":function selectDigimon(){var e=this;if(this.canExchange){var t=this.digimonStore[this.currentDigimonIndex],i=JSON.parse(JSON.stringify(this.digimonStore));i.splice(this.currentDigimonIndex,1,{"name":this.$store.state.tamerData.currentDigimon,"attr":{"level":this.$store.state.currentDigimonInfo.attr.level,"exp":this.$store.state.currentDigimonInfo.attr.exp||0}}),this.$store.dispatch("updateTamerData",{"digimonType":"digimon","currentDigimon":t.name}),this.$store.dispatch("updateCurrentDigimonInfo",JSON.parse(JSON.stringify({"attr":{"exp":t.attr.exp||0,"level":t.attr.level},"name":o.c[t.name].name}))),this.$store.dispatch("updateDigimonStore",JSON.parse(JSON.stringify(i))),Object(a.showToast)({"title":"就决定是你了 ".concat(o.c[t.name].name),"icon":"none","duration":1e3}),this.$nextTick((function(){e.$store.state.sceneType="normal"}))}},"backHandle":function backHandle(){this.$store.commit("UPDATE_SCENETYPE","normal")},"useItems":function useItems(e){var t=1;Object(a.hideToast)();var i=this.storeItems[this.currentItem-1];if(this.currentItem&&i){if("egg"===i.useType)this.getDigimon();else if("jczzegg"===i.useType){var n=o.g[Object(m.h)(0,o.g.length-1)];this.getDigimon(n)}else if("hjqsegg"===i.useType){var r=o.f[Object(m.h)(0,o.f.length-1)];this.getDigimon(r)}else if("hjqsxegg"===i.useType){var c=o.e[Object(m.h)(0,o.e.length-1)];this.getDigimon(c)}else if("zsjCard"===i.useType){if(!(this.$store.state.storeItems[i.id]>=10))return void Object(a.showToast)({"title":"太少了吧","icon":"none","duration":1e3});t=this.$store.state.storeItems[i.id],this.getDigimon("zhongshijigongjue")}else if("anlongCard"===i.useType){if(!(this.$store.state.storeItems[i.id]>=10))return void Object(a.showToast)({"title":"太少了吧","icon":"none","duration":1e3});t=this.$store.state.storeItems[i.id],this.getDigimon("anlong")}else if("qianinanCard"===i.useType){if(!(this.$store.state.storeItems[i.id]>=10))return void Object(a.showToast)({"title":"太少了吧","icon":"none","duration":1e3});t=this.$store.state.storeItems[i.id],this.getDigimon("jimihua")}else if("jjlxCard"===i.useType){if(!(this.$store.state.storeItems[i.id]>=10))return void Object(a.showToast)({"title":"太少了吧","icon":"none","duration":1e3});t=this.$store.state.storeItems[i.id],this.getDigimon("jinjialongx")}else{if("mowegg"!==i.useType)return void Object(a.showToast)({"title":"无法使用（还没做）","icon":"none","duration":1e3});var d=o.j[Object(m.h)(0,o.j.length-1)];this.getDigimon(d)}var g=Object(s.a)({},this.$store.state.storeItems);0==g[i.id]-t?delete g[i.id]:g[i.id]-=t,this.$store.dispatch("updateStoreItems",g)}},"getDigimon":function getDigimon(e){var t=this,i=this;console.log("随机获取数码兽");var r=e||o.k[Object(m.h)(0,o.k.length-1)],c=i.digimonStore.findIndex((function(e){return e.name==r})),d=o.c[i.tamerData.currentDigimon],g=o.c[r];Object(a.showModal)({"title":"孵化成功","content":"成功孵化出"+o.c[r].name+(c>=0||d.evolutionLineName===g.evolutionLineName?"(已存在 转换为蓝卡)":""),"showCancel":!1,"success":function success(o){if(o.confirm)if(c>=0||d.evolutionLineName===g.evolutionLineName){var a=Object(s.a)({},t.$store.state.storeItems);i.$store.dispatch("updateStoreItems",Object(s.a)(Object(s.a)({},a),{},{"2":a[2]&&a[2]+1||1}))}else{var m=[].concat(Object(n.a)(i.digimonStore),[{"name":r,"attr":{"level":"zhongshijigongjue"===e?100:1,"exp":0}}]);i.$store.dispatch("updateDigimonStore",m)}}})}},"onReady":function onReady(){}},d=(i(2204),i(86)),g=Object(d.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("taro-view",{"staticClass":"digimon-store"},[i("taro-view",{"staticClass":"back-button","on":{"tap":e.backHandle}},[e._v("返回")]),e._v(" "),i("taro-view",{"staticClass":"tabs"},[i("taro-view",{"staticClass":"tab-item","class":{"active":1==e.activeTab},"on":{"tap":function(t){e.activeTab=1}}},[e._v("数码兽")]),e._v(" "),i("taro-view",{"staticClass":"tab-item","class":{"active":2==e.activeTab},"on":{"tap":function(t){e.activeTab=2}}},[e._v("物品")])],1),e._v(" "),1==e.activeTab?i("taro-view",{"staticClass":"digimon-store-box"},[i("taro-swiper",{"ref":"swiper","staticClass":"digimon-select","attrs":{"indicator-color":"#999","indicator-active-color":"#333","indicator-dots":"","previous-margin":"100px","next-margin":"100px"},"on":{"change":e.onChangeEventDeatil}},e._l(e.digimonStore,(function(t){return i("taro-swiper-item",{"key":t.name},[i("taro-view",{"staticClass":"digimon-img-box"},[i("taro-view",{"staticClass":"digimon-level"},[e._v(e._s(e.DIGIMONS_DATA[t.name].name)+" "+e._s(t.attr.level)+"级")]),e._v(" "),i("taro-image",{"staticClass":"digimon-img","attrs":{"src":e.DIGIMONS_DATA[t.name].img}})],1)],1)})),1),e._v(" "),i("taro-view",{"staticClass":"digi-submit","on":{"tap":e.selectDigimon}},[e._v("\n      "+e._s(e.canExchange?"选择":"请退化")+"\n    ")])],1):i("taro-view",{"staticClass":"item-store-box"},[e._l(40,(function(t){return i("taro-view",{"key":t,"staticClass":"items","class":{"active":e.currentItem===t},"on":{"tap":function(i){return e.selectItems(t)}}},[e.storeItems[t-1]?i("taro-image",{"staticClass":"img","attrs":{"src":e.storeItems[t-1].img}}):e._e(),e._v(" "),i("taro-view",{"staticClass":"count"},[e._v(e._s(e.storeItemsCount[t-1]))])],1)})),e._v(" "),i("taro-view",{"staticClass":"digi-submit","on":{"tap":e.useItems}},[e._v(" 使用 ")])],2)],1)}),[],!1,null,null,null);t.default=g.exports},"91":function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=function gimg(e){try{return i(92)("./".concat(e))}catch(e){return console.warn(e),""}},s={"1":{"id":1,"name":"数码蛋","img":n("eggs/01.png"),"maxNum":100,"type":"egg","useType":"egg","descript":"普通的数码蛋 可以随机获得一个数码兽"},"2":{"id":2,"name":"蓝卡","img":n("card/bcard.jpg"),"maxNum":100,"type":"card","useType":"blueCard","descript":"平平无奇的蓝卡"},"3":{"id":3,"name":"at增益","img":n("card/at.jpg"),"maxNum":100,"type":"card","useType":"at_10","descript":"at增加10%"},"4":{"id":4,"name":"at增益30%","img":n("card/at3.jpeg"),"maxNum":100,"type":"card","useType":"at_30","descript":"at增加30%"},"5":{"id":5,"name":"atde增益","img":n("card/atde.jpeg"),"maxNum":100,"type":"card","useType":"at_10,de_10","descript":"at/de增加10%"},"6":{"id":6,"name":"de增益","img":n("card/de.jpg"),"maxNum":100,"type":"card","useType":"de_10","descript":"de增加10%"},"7":{"id":7,"name":"de增益999","img":n("card/de999.jpeg"),"maxNum":100,"type":"card","useType":"dec_999","descript":"de增加999"},"8":{"id":8,"name":"de增益9999","img":n("card/de9999.jpeg"),"maxNum":100,"type":"card","useType":"dec_9999","descript":"10秒内 de增加9999"},"9":{"id":9,"name":"hp回复50%","img":n("card/hp50.jpeg"),"maxNum":100,"type":"card","useType":"hp_50","descript":"恢复生命值50%"},"10":{"id":10,"name":"hp回复100%","img":n("card/hp100.jpg"),"maxNum":100,"type":"card","useType":"hp_100","descript":"恢复生命值100%"},"11":{"id":11,"name":"数码蛋","img":n("eggs/04.png"),"maxNum":100,"type":"egg","useType":"jczzegg","descript":"交错战争数码蛋"},"12":{"id":12,"name":"数码蛋","img":n("eggs/05.png"),"maxNum":100,"type":"egg","useType":"hjqsegg","descript":"皇家骑士副本限定数码蛋"},"13":{"id":13,"name":"中世纪红莲怪物卡","img":n("card/zsj.jpg"),"maxNum":100,"type":"useCard","useType":"zsjCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"14":{"id":14,"name":"数码蛋","img":n("eggs/06.png"),"maxNum":100,"type":"egg","useType":"mowegg","descript":"七魔王限定数码蛋"},"15":{"id":15,"name":"暗龙怪物卡","img":n("card/anlong.jpg"),"maxNum":10,"type":"useCard","useType":"anlongCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"16":{"id":16,"name":"千年怪物卡","img":n("card/qiannian.jpg"),"maxNum":10,"type":"useCard","useType":"qianinanCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"17":{"id":17,"name":"金甲龙X怪物卡","img":n("card/jjlx.jpg"),"maxNum":10,"type":"useCard","useType":"jjlxCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"18":{"id":18,"name":"数码蛋","img":n("eggs/07.png"),"maxNum":100,"type":"egg","useType":"hjqsxegg","descript":"皇家骑士X副本限定数码蛋"}}}}]);