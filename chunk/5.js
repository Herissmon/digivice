(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"100":function(n,e,t){"use strict";var a=t(0),i=t(8),r=t(90),s=t(88),o={"name":"DbEvent","components":{},"props":{"useType":{"type":String,"default":"normal"}},"data":function data(){return{"currentItem":null,"currentList":[]}},"computed":{"storeItems":function storeItems(){var n=this.$store.state.storeItems;return Object.keys(n).map((function(n){return r.a[n]})).filter((function(n){return"card"===n.type}))}},"mounted":function mounted(){console.log(this.storeItems),this.init()},"methods":{"setItem":function setItem(n){this.currentItem=n},"onClick":function onClick(n,e){var t=this;null==this.currentItem&&(this.currentItem=this.currentList.splice(e,1)[0],this.useItem(n.id),setTimeout((function(){t.currentItem=null,Object(i.showToast)({"title":r.a[n.id].descript,"icon":"none","duration":1e3})}),1e3))},"useItem":function useItem(n){var e=Object(a.a)({},this.$store.state.storeItems);1==e[n]?delete e[n]:e[n]-=1,this.$store.dispatch("updateStoreItems",Object(a.a)({},e));var t="";t="blueCard"==r.a[n].useType?[["at","30"],["de","30"]]:r.a[n].useType.split(",").map((function(n){return n.split("_")})),this.$emit("card-gain",t)},"init":function init(){var n=this;if(0!=this.storeItems.length){var e=this.storeItems.map((function(n,e){return e})),t=e.length>=4?4:e.length;if(e.length>t){for(var i=[],r=0;r<t;r++)i.push(e.splice(Object(s.h)(0,e.length-1),1)[0]);this.currentList=i.reduce((function(e,t){return e.push(Object(a.a)({},n.storeItems[t])),e}),[])}else this.currentList=this.storeItems.map((function(n){return Object(a.a)({},n)}));console.log(this.currentList)}}},"onReady":function onReady(){}},c=(t(98),t(86)),m=Object(c.a)(o,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("taro-view",{"staticClass":"use-card"},[a("taro-view",{"staticClass":"current-item","class":{"active":n.currentItem&&n.currentItem.id}},[a("taro-image",{"staticClass":"current-img","attrs":{"src":n.currentItem&&n.currentItem.img}})],1),n._v(" "),a("taro-image",{"staticClass":"card-blj","class":{"active":n.currentItem&&n.currentItem.id},"attrs":{"src":t(97)}}),n._v(" "),"normal"==n.useType?a("div",{"staticClass":"card-view"},n._l(n.currentList,(function(e,t){return a("taro-image",{"key":e.id,"staticClass":"card-img","attrs":{"src":e.img},"on":{"tap":function(a){return n.onClick(e,t)}}})})),1):n._e()],1)}),[],!1,null,null,null);e.a=m.exports},"134":function(n,e,t){var a=t(21),i=t(2885);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});n.exports=s},"135":function(n,e,t){var a=t(21),i=t(2887);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});n.exports=s},"2883":function(n,e,t){n.exports=t.p+"static/images/redcard.png"},"2884":function(n,e,t){"use strict";t(134)},"2885":function(n,e,t){var a=t(22),i=t(89),r=t(93),s=t(106);e=a(!1);var o=i(r),c=i(s);e.push([n.i,"@-webkit-keyframes btnbgRotate {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes btnbgRotate {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes showenview {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n20% {\n    -webkit-transform: translateY(-80vh) scale(0.8);\n            transform: translateY(-80vh) scale(0.8);\n}\n50% {\n    -webkit-transform: translateY(-60vh);\n            transform: translateY(-60vh);\n}\n100% {\n    -webkit-transform: translateY(-100vh) scale(1);\n            transform: translateY(-100vh) scale(1);\n}\n}\n@keyframes showenview {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n20% {\n    -webkit-transform: translateY(-80vh) scale(0.8);\n            transform: translateY(-80vh) scale(0.8);\n}\n50% {\n    -webkit-transform: translateY(-60vh);\n            transform: translateY(-60vh);\n}\n100% {\n    -webkit-transform: translateY(-100vh) scale(1);\n            transform: translateY(-100vh) scale(1);\n}\n}\n@-webkit-keyframes scaleCard {\n0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-box-shadow: 0 0 0.85333rem #2929eb;\n            box-shadow: 0 0 0.85333rem #2929eb;\n}\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-box-shadow: 0 0 2.13333rem #2929eb;\n            box-shadow: 0 0 2.13333rem #2929eb;\n}\n100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-box-shadow: 0 0 0.85333rem #2929eb;\n            box-shadow: 0 0 0.85333rem #2929eb;\n}\n}\n@keyframes scaleCard {\n0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-box-shadow: 0 0 0.85333rem #2929eb;\n            box-shadow: 0 0 0.85333rem #2929eb;\n}\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-box-shadow: 0 0 2.13333rem #2929eb;\n            box-shadow: 0 0 2.13333rem #2929eb;\n}\n100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-box-shadow: 0 0 0.85333rem #2929eb;\n            box-shadow: 0 0 0.85333rem #2929eb;\n}\n}\n.digimon-enhance .main-button {\n  width: 5.33333rem;\n  height: 5.33333rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.digimon-enhance .main-button:active {\n  -webkit-transform: scale(1.5);\n      -ms-transform: scale(1.5);\n          transform: scale(1.5);\n  -webkit-filter: invert(1) brightness(1.2);\n          filter: invert(1) brightness(1.2);\n}\n.digimon-enhance .main-button .btn-bg {\n  position: absolute;\n  width: 5.33333rem;\n  height: 5.33333rem;\n  -webkit-animation: btnbgRotate 5s ease infinite;\n          animation: btnbgRotate 5s ease infinite;\n}\n.digimon-enhance .main-button .btn-text {\n  width: 5.33333rem;\n  height: 2.34667rem;\n  margin-left: -0.04267rem;\n  -webkit-filter: drop-shadow(0.04267rem 0.08533rem 0.128rem black);\n          filter: drop-shadow(0.04267rem 0.08533rem 0.128rem black);\n}\n.digimon-enhance .red-card {\n  position: fixed;\n  bottom: 8.53333rem;\n  right: 0.42667rem;\n  width: 2.13333rem;\n  height: 4.26667rem;\n}\n.digimon-enhance .red-card img {\n  width: 2.13333rem;\n  height: 3.2rem;\n}\n.digimon-enhance .enhance-button {\n  position: fixed;\n  bottom: 2.13333rem;\n  left: 50%;\n  margin-left: -2.66667rem;\n  width: 5.33333rem;\n  height: 5.33333rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.digimon-enhance .enhance-button:active {\n  -webkit-transform: scale(1.5);\n      -ms-transform: scale(1.5);\n          transform: scale(1.5);\n  -webkit-filter: invert(1) brightness(1.2);\n          filter: invert(1) brightness(1.2);\n}\n.digimon-enhance .enhance-button .btn-bg {\n  position: absolute;\n  width: 5.33333rem;\n  height: 5.33333rem;\n  -webkit-animation: btnbgRotate 5s ease infinite;\n          animation: btnbgRotate 5s ease infinite;\n}\n.digimon-enhance .enhance-button .btn-text {\n  width: 5.33333rem;\n  height: 2.34667rem;\n  margin-left: -0.04267rem;\n}\n.digimon-enhance .enhance-view {\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n  position: fixed;\n  z-index: 999;\n  top: 100vh;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: all 1s ease-in-out;\n  -o-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  background: url("+o+") no-repeat;\n  background-size: 100vw 100vh;\n}\n.digimon-enhance .enhance-view .back-button {\n  width: 2.13333rem;\n  height: 1.70667rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.digimon-enhance .enhance-view .total-count {\n  width: 2.13333rem;\n  height: 1.70667rem;\n  position: absolute;\n  top: 0.42667rem;\n  right: 0.42667rem;\n  font-size: 1.06667rem;\n  color: gold;\n}\n.digimon-enhance .enhance-view.active {\n  -webkit-transform: translateY(-100vh);\n      -ms-transform: translateY(-100vh);\n          transform: translateY(-100vh);\n  opacity: 1;\n}\n.digimon-enhance .enhance-view .main-box {\n  width: 11.73333rem;\n  height: 12.8rem;\n  margin: 0.85333rem auto 0;\n  background: url("+c+") no-repeat;\n  background-size: 11.73333rem 12.8rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.digimon-enhance .enhance-view .main-box .blue-card {\n  width: 6.4rem;\n  height: 9.28rem;\n  -webkit-animation: scaleCard 5s ease-in-out infinite;\n          animation: scaleCard 5s ease-in-out infinite;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-filter: saturate(0.1);\n          filter: saturate(0.1);\n}\n.digimon-enhance .enhance-view .success-percent {\n  color: #12ddf8;\n  text-align: center;\n  font-size: 0.85333rem;\n}\n.digimon-enhance .enhance-view .btns-box {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 80vw;\n  margin: 10vh auto;\n}\n.digimon-enhance .enhance-view .blue-total {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  bottom: 1.38667rem;\n  left: 0;\n  width: 100vw;\n  font-size: 0.85333rem;\n}\n.digimon-enhance .enhance-view .blue-total .bbb {\n  color: #4a70ee;\n  margin: 0 0.21333rem;\n}\n.digimon-enhance .enhance-view .enhance-texiao {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-transition: opacity 1s ease, -webkit-transform 0.5s ease;\n  transition: opacity 1s ease, -webkit-transform 0.5s ease;\n  -o-transition: opacity 1s ease, transform 0.5s ease;\n  transition: opacity 1s ease, transform 0.5s ease;\n  transition: opacity 1s ease, transform 0.5s ease, -webkit-transform 0.5s ease;\n  -webkit-transform: scale(0.8);\n      -ms-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0;\n  z-index: -1;\n}\n.digimon-enhance .enhance-view .enhance-texiao.active {\n  z-index: 500;\n  top: 0;\n  opacity: 1;\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n}\n.digimon-enhance .enhance-view .enhance-texiao .tx-img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n.digimon-enhance .enhance-view .enhance-texiao .round {\n  width: 0.85333rem;\n  height: 0.85333rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -0.42667rem 0 0 -0.42667rem;\n  background: red;\n  border-radius: 50%;\n  opacity: 0;\n}\n.digimon-enhance .enhance-view .enhance-texiao .round.success {\n  -webkit-transition: all 2s ease, background 3s linear;\n  -o-transition: all 2s ease, background 3s linear;\n  transition: all 2s ease, background 3s linear;\n  opacity: 1;\n  -webkit-transform: scale(15);\n      -ms-transform: scale(15);\n          transform: scale(15);\n}\n.digimon-enhance .enhance-view .enhance-texiao .round.fail {\n  -webkit-transition: all 2s ease, background 3s linear;\n  -o-transition: all 2s ease, background 3s linear;\n  transition: all 2s ease, background 3s linear;\n  opacity: 1;\n  -webkit-transform: scale(15);\n      -ms-transform: scale(15);\n          transform: scale(15);\n  background: black;\n}\n",""]),n.exports=e},"2886":function(n,e,t){"use strict";t(135)},"2887":function(n,e,t){var a=t(22),i=t(89),r=t(113);e=a(!1);var s=i(r);e.push([n.i,".digimon-info {\n  position: relative;\n  padding-top: 2.13333rem;\n}\n.digimon-info .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.digimon-info .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.digimon-info .top-box {\n  background: url("+s+") no-repeat;\n  background-size: cover;\n  height: 10.66667rem;\n  width: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n}\n.digimon-info .top-box [class*='side'] {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.digimon-info .top-box .current-attr {\n  position: absolute;\n  right: 0.85333rem;\n  top: 0.85333rem;\n  color: #fff;\n  font-size: 0.85333rem;\n}\n.digimon-info .top-box .left-side {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.28rem 0 0 0.85333rem;\n}\n.digimon-info .top-box .left-side .digimon-img {\n  width: 6.18667rem;\n  height: 6.18667rem;\n}\n.digimon-info .top-box .left-side .digimon-name {\n  color: #fff;\n  font-size: 0.74667rem;\n  text-align: center;\n}\n.digimon-info .top-box .left-side .digimon-name.active {\n  color: #f7e32e;\n  text-shadow: 0 0 0.21333rem red;\n}\n.digimon-info .top-box .right-side {\n  padding-top: 1.06667rem;\n  padding-left: 0.21333rem;\n}\n.digimon-info .top-box .right-side .attr-box {\n  color: #fff;\n  font-size: 0.59733rem;\n  text-shadow: 0 0 0.42667rem black;\n}\n.digimon-info .top-box .right-side .attr-box.active {\n  color: #f7e32e;\n  text-shadow: 0 0 0.21333rem red;\n}\n.digimon-info .top-box .right-side .attr-box .enhance-num {\n  color: gold !important;\n}\n.digimon-info .top-box .bottom-box .chart-box {\n  width: 6.4rem;\n  height: 6.4rem;\n  background: #fff;\n}\n",""]),n.exports=e},"2896":function(n,e,t){"use strict";t.r(e);var a=t(0),i=t(87),r=t(8),s=t(137),o=t(10),c=t(2),m=t(88),l={"name":"DigimonEnhance","components":{"UseCard":t(100).a},"data":function data(){return{"redCardImg":t(2883),"redCardInfo":null,"num":10,"showEnView":!1,"showTx":!1,"status":""}},"computed":{"storeItems":function storeItems(){return this.$store.state.storeItems},"blueCardNum":function blueCardNum(){return this.storeItems[2]||0},"digimonEnhance":function digimonEnhance(){return this.$store.state.enhance||{}},"currentEvoName":function currentEvoName(){return i.c[this.$store.state.tamerData.currentDigimon].evolutionLineName},"totalCount":function totalCount(){try{return Object.values(this.digimonEnhance[this.currentEvoName]).reduce((function(n,e){return n+e.length}),0)}catch(n){return 0}}},"methods":{"useRedCard":function useRedCard(){var n=this;Object(r.showModal)({"title":"警告","content":"将会清空当前数码兽所有强化数据！！","confirmText":"清空","success":function success(e){e.confirm&&(n.redCardInfo={"id":+new Date,"img":n.redCardImg},n.$nextTick((function(){setTimeout((function(){n.$refs.useCardRef.setItem(n.redCardInfo)}),500),setTimeout((function(){n.redCardInfo=null,n.$refs.useCardRef.setItem(null),n.$store.dispatch("updateEnhance",Object(c.a)({},n.currentEvoName,{}))}),1800)})))}})},"backbtn":function backbtn(){this.showEnView=!1},"beginEnhance":function beginEnhance(){var n=this;this.blueCardNum<this.num?Object(r.showToast)({"title":"蓝卡不够了","icon":"none","duration":1e3}):this.totalCount>=15?Object(r.showToast)({"title":"再强化 数码兽就要消失了","icon":"none","duration":1e3}):Object(r.showModal)({"title":"强化","content":"确定使用".concat(this.num,"张蓝卡来强化？"),"success":function success(e){e.confirm?(n.showTx=!0,n.computedResult()):e.cancel}})},"getRandomAttr":function getRandomAttr(){var n=["at","de","hp","ev"][Object(m.h)(0,3)];return[n,m.h.apply(void 0,Object(o.a)({"at":[5,10],"de":[4,8],"hp":[5,10],"ev":[0,2]}[n]))]},"computedResult":function computedResult(){var n=this,e=this,t=Math.random()<this.num/100;this.status=t?"success":"fail";var i=Object(a.a)({},this.$store.state.storeItems);i[2]-=this.num,this.$store.dispatch("updateStoreItems",i);var s=e.getRandomAttr();setTimeout((function(){if(n.status="",Object(r.showToast)({"title":t?"强化成功 ".concat(s[0]," + ").concat(s[1],"%"):"强化失败","icon":"none","duration":1500}),t){var a=e.digimonEnhance[n.currentEvoName]||{};a[s[0]]?a[s[0]].push(s[1]):a[s[0]]=[s[1]],e.$store.dispatch("updateEnhance",Object(c.a)({},n.currentEvoName,a))}e.showTx=!1}),3e3)},"tapHnadle":function tapHnadle(){this.showEnView=!0},"addBlueCard":function addBlueCard(){this.num>=100||(this.num+=10)},"reduceBlueCard":function reduceBlueCard(){this.num<=10||(this.num-=10)}},"onReady":function onReady(){}},u=(t(2884),t(86)),d=Object(u.a)(l,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("taro-view",{"staticClass":"digimon-enhance"},[a("taro-view",{"staticClass":"enhance-button","on":{"tap":n.tapHnadle}},[a("taro-image",{"staticClass":"btn-bg","attrs":{"src":t(95)}}),n._v(" "),a("taro-image",{"staticClass":"btn-text","attrs":{"src":t(108)}})],1),n._v(" "),a("taro-view",{"staticClass":"red-card","on":{"tap":n.useRedCard}},[a("taro-image",{"attrs":{"src":n.redCardImg}})],1),n._v(" "),a("use-card",{"directives":[{"name":"show","rawName":"v-show","value":n.redCardInfo,"expression":"redCardInfo"}],"ref":"useCardRef","staticStyle":{"position":"fixed","bottom":"5vh"},"attrs":{"useType":"enhance"}}),n._v(" "),a("taro-view",{"staticClass":"enhance-view","class":{"active":n.showEnView}},[a("taro-image",{"staticClass":"back-button","attrs":{"src":t(94)},"on":{"tap":n.backbtn}}),n._v(" "),n.totalCount>0?a("taro-view",{"staticClass":"total-count"},[n._v("+ "+n._s(n.totalCount))]):n._e(),n._v(" "),a("taro-view",{"staticClass":"main-box"},[a("taro-image",{"staticClass":"blue-card","style":{"filter":"saturate("+n.num/100+")"},"attrs":{"src":t(105)},"on":{"tap":n.beginEnhance}})],1),n._v(" "),a("taro-view",{"staticClass":"success-percent"},[n._v(n._s(n.num)+"张 成功率 "+n._s(n.num)+"%")]),n._v(" "),a("taro-view",{"staticClass":"btns-box"},[a("taro-view",{"staticClass":"main-button","on":{"tap":n.addBlueCard}},[a("taro-image",{"staticClass":"btn-bg","attrs":{"src":t(95)}}),n._v(" "),a("taro-image",{"staticClass":"btn-text","attrs":{"src":t(111)}})],1),n._v(" "),a("taro-view",{"staticClass":"main-button","on":{"tap":n.reduceBlueCard}},[a("taro-image",{"staticClass":"btn-bg","attrs":{"src":t(109)}}),n._v(" "),a("taro-image",{"staticClass":"btn-text","attrs":{"src":t(107)}})],1)],1),n._v(" "),a("taro-view",{"staticClass":"blue-total"},[a("taro-text",{"staticClass":"bbb"},[n._v("蓝卡")]),n._v("剩余量"),a("taro-text",{"staticClass":"bbb"},[n._v(n._s(n.blueCardNum))]),n._v("张")],1),n._v(" "),a("taro-view",{"staticClass":"enhance-texiao","class":{"active":n.showTx}},[a("taro-view",{"staticClass":"round","class":n.status}),n._v(" "),a("taro-image",{"staticClass":"tx-img","attrs":{"src":t(110)}})],1)],1)],1)}),[],!1,null,null,null).exports,h={"name":"DigimonInfo","components":{"DigimonNormal":s.a,"DigimonEnhance":d},"props":{},"data":function data(){return{"chart":null}},"computed":{"currentEvoName":function currentEvoName(){return i.c[this.$store.state.tamerData.currentDigimon].evolutionLineName},"digimonEnhance":function digimonEnhance(){return this.$store.state.enhance||{}},"currentDigimonEnhance":function currentDigimonEnhance(){return this.digimonEnhance[this.currentEvoName]||null},"currentDigimon":function currentDigimon(){return Object(a.a)(Object(a.a)({},this.$store.state.tamerData),this.$store.state.currentDigimonInfo)},"currentData":function currentData(){return i.c[this.currentDigimon.currentDigimon]},"computedAttrData":function computedAttrData(){var n=this,e=this.currentData,t=e.attr,i=e.growAttr,r=this.currentDigimon.attr.level,s=null;this.currentDigimonEnhance&&(s=Object.keys(this.currentDigimonEnhance).reduce((function(e,t){return e[t]=n.currentDigimonEnhance[t].reduce((function(n,e){return n+ +e}),0),e}),{}));var o={"hp":i.hp*r+t.hp,"de":i.de*r+t.de,"at":i.at*r+t.at,"ev":t.ev,"realm":t.realm,"growAttr":Object(a.a)({},i)};if(s)for(var c in s)o[c]="ev"==c?o[c]+s[c]:Math.round(o[c]+o[c]*s[c]/100);return o}},"mounted":function mounted(){},"methods":{"backHandle":function backHandle(){this.$store.commit("UPDATE_SCENETYPE","normal")}},"onReady":function onReady(){}},g=(t(2886),Object(u.a)(h,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("taro-view",{"staticClass":"digimon-info"},[t("taro-view",{"staticClass":"back-button","on":{"tap":n.backHandle}},[n._v("返回")]),n._v(" "),t("taro-view",{"staticClass":"top-box"},[t("taro-view",{"staticClass":"current-attr"},[n._v(n._s(n.computedAttrData.realm.toUpperCase()))]),n._v(" "),t("taro-view",{"staticClass":"left-side"},[t("taro-image",{"staticClass":"digimon-img","attrs":{"src":n.currentData.img}}),n._v(" "),t("taro-view",{"staticClass":"digimon-name","class":{"active":n.currentDigimon.attr.level>=1e3}},[n._v(n._s(n.currentData.name)+" "),t("br"),n._v("\n        "+n._s(n.currentDigimon.attr.level)+"级")])],1),n._v(" "),t("taro-view",{"staticClass":"right-side"},[t("taro-view",{"staticClass":"attr-box","class":{"active":n.computedAttrData.at>5e4}},[n._v("AT "+n._s(n.computedAttrData.at)+"\n        "),t("taro-text",{"staticClass":"enhance-num"},[n._v(n._s(n.currentDigimonEnhance&&n.currentDigimonEnhance.at&&"+"+n.currentDigimonEnhance.at.reduce((function(n,e){return n+ +e}),0)+"% (+"+n.currentDigimonEnhance.at.length+")"))])],1),n._v(" "),t("taro-view",{"staticClass":"attr-box","class":{"active":n.computedAttrData.de>2e3}},[n._v("DE "+n._s(n.computedAttrData.de)+"\n        "),t("taro-text",{"staticClass":"enhance-num"},[n._v(n._s(n.currentDigimonEnhance&&n.currentDigimonEnhance.de&&"+"+n.currentDigimonEnhance.de.reduce((function(n,e){return n+ +e}),0)+"% (+"+n.currentDigimonEnhance.de.length+")"))])],1),n._v(" "),t("taro-view",{"staticClass":"attr-box","class":{"active":n.computedAttrData.hp>5e4}},[n._v("HP "+n._s(n.computedAttrData.hp)+"\n        "),t("taro-text",{"staticClass":"enhance-num"},[n._v(n._s(n.currentDigimonEnhance&&n.currentDigimonEnhance.hp&&"+"+n.currentDigimonEnhance.hp.reduce((function(n,e){return n+ +e}),0)+"% (+"+n.currentDigimonEnhance.hp.length+")"))])],1),n._v(" "),t("taro-view",{"staticClass":"attr-box","class":{"active":n.computedAttrData.ev>40}},[n._v("EV "+n._s(n.computedAttrData.ev)+"%\n        "),t("taro-text",{"staticClass":"enhance-num"},[n._v(n._s(n.currentDigimonEnhance&&n.currentDigimonEnhance.ev&&"+"+n.currentDigimonEnhance.ev.reduce((function(n,e){return n+ +e}),0)+" (+"+n.currentDigimonEnhance.ev.length+")"))])],1),n._v(" "),t("taro-view",{"staticClass":"attr-box","class":{"active":n.computedAttrData.growAttr.at>80}},[n._v("成长AT "+n._s(n.computedAttrData.growAttr.at))]),n._v(" "),t("taro-view",{"staticClass":"attr-box","class":{"active":n.computedAttrData.growAttr.de>10}},[n._v("成长DE "+n._s(n.computedAttrData.growAttr.de))]),n._v(" "),t("taro-view",{"staticClass":"attr-box","class":{"active":n.computedAttrData.growAttr.at>100}},[n._v("成长HP "+n._s(n.computedAttrData.growAttr.hp))]),n._v(" "),t("taro-view",{"staticClass":"attr-box","class":{"active":1.5*n.computedAttrData.at>1e5}},[n._v("最高伤害(无视防御) "),t("br"),n._v("\n        "+n._s(1.5*n.computedAttrData.at))])],1)],1),n._v(" "),t("taro-view",{"staticClass":"bottom-box"},[t("digimon-normal",{"staticStyle":{"margin-top":"4vh"},"attrs":{"hidden-control":!0}}),n._v(" "),t("digimon-enhance")],1)],1)}),[],!1,null,null,null));e.default=g.exports},"90":function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=function gimg(n){try{return t(92)("./".concat(n))}catch(n){return console.warn(n),""}},i={"1":{"id":1,"name":"数码蛋","img":a("eggs/01.png"),"maxNum":100,"type":"egg","useType":"egg","descript":"普通的数码蛋 可以随机获得一个数码兽"},"2":{"id":2,"name":"蓝卡","img":a("card/bcard.jpg"),"maxNum":100,"type":"card","useType":"blueCard","descript":"蓝卡：全属性强化"},"3":{"id":3,"name":"at增益","img":a("card/at.jpg"),"maxNum":100,"type":"card","useType":"at_10","descript":"at增加10%"},"4":{"id":4,"name":"at增益30%","img":a("card/at3.jpeg"),"maxNum":100,"type":"card","useType":"at_30","descript":"at增加30%"},"5":{"id":5,"name":"atde增益","img":a("card/atde.jpeg"),"maxNum":100,"type":"card","useType":"at_10,de_10","descript":"at/de增加10%"},"6":{"id":6,"name":"de增益","img":a("card/de.jpg"),"maxNum":100,"type":"card","useType":"de_10","descript":"de增加10%"},"7":{"id":7,"name":"de增益999","img":a("card/de999.jpeg"),"maxNum":100,"type":"card","useType":"dec_999","descript":"de增加999"},"8":{"id":8,"name":"de增益9999","img":a("card/de9999.jpeg"),"maxNum":100,"type":"card","useType":"dec_9999","descript":"10秒内 de增加9999"},"9":{"id":9,"name":"hp回复50%","img":a("card/hp50.jpeg"),"maxNum":100,"type":"card","useType":"hp_50","descript":"恢复生命值50%"},"10":{"id":10,"name":"hp回复100%","img":a("card/hp100.jpg"),"maxNum":100,"type":"card","useType":"hp_100","descript":"恢复生命值100%"},"11":{"id":11,"name":"数码蛋","img":a("eggs/04.png"),"maxNum":100,"type":"egg","useType":"jczzegg","descript":"交错战争数码蛋"},"12":{"id":12,"name":"数码蛋","img":a("eggs/05.png"),"maxNum":100,"type":"egg","useType":"hjqsegg","descript":"皇家骑士副本限定数码蛋"},"13":{"id":13,"name":"中世纪红莲怪物卡","img":a("card/zsj.jpg"),"maxNum":100,"type":"useCard","useType":"zsjCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"14":{"id":14,"name":"数码蛋","img":a("eggs/06.png"),"maxNum":100,"type":"egg","useType":"mowegg","descript":"七魔王限定数码蛋"},"15":{"id":15,"name":"暗龙怪物卡","img":a("card/anlong.jpg"),"maxNum":10,"type":"useCard","useType":"anlongCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"16":{"id":16,"name":"千年怪物卡","img":a("card/qiannian.jpg"),"maxNum":10,"type":"useCard","useType":"qianinanCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"17":{"id":17,"name":"金甲龙X怪物卡","img":a("card/jjlx.jpg"),"maxNum":10,"type":"useCard","useType":"jjlxCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"18":{"id":18,"name":"数码蛋","img":a("eggs/07.png"),"maxNum":100,"type":"egg","useType":"hjqsxegg","descript":"皇家骑士X副本限定数码蛋"},"19":{"id":19,"name":"数码蛋","img":a("eggs/08.png"),"maxNum":100,"type":"egg","useType":"sssegg","descript":"最后的数码蛋"},"20":{"id":20,"name":"数码蛋","img":a("eggs/09.png"),"maxNum":100,"type":"egg","useType":"testegg","descript":"黑暗四天王限定蛋"},"21":{"id":21,"name":"命运的装甲进化","img":a("card/mingyun.png"),"maxNum":10,"type":"useCard","useType":"mingyunCard","descript":"可以进行命运的装甲进化"},"22":{"id":22,"name":"水母兽的资料","img":a("card/shuimu.jpg"),"maxNum":100,"type":"useCard","useType":"shuimuCard","descript":"凑齐一百张试试看"}}},"91":function(n,e,t){var a=t(21),i=t(99);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});n.exports=s},"98":function(n,e,t){"use strict";t(91)},"99":function(n,e,t){(e=t(22)(!1)).push([n.i,".use-card {\n  position: absolute;\n  width: 100vw;\n  height: 8.53333rem;\n  bottom: 0;\n  left: 0;\n}\n.use-card .card-blj {\n  width: 12.8rem;\n  height: 14.656rem;\n  position: absolute;\n  top: -45vh;\n  left: 50%;\n  margin-left: -10.24rem;\n  -webkit-transition: 0.2s ease;\n  -o-transition: 0.2s ease;\n  transition: 0.2s ease;\n  z-index: 9999;\n  -webkit-transform: translateX(-100vw);\n      -ms-transform: translateX(-100vw);\n          transform: translateX(-100vw);\n}\n.use-card .card-blj.active {\n  -webkit-transform: translateX(0);\n      -ms-transform: translateX(0);\n          transform: translateX(0);\n}\n.use-card .current-item {\n  width: 8.53333rem;\n  height: 12.288rem;\n  position: absolute;\n  top: -40vh;\n  right: 50%;\n  margin-right: -9.17333rem;\n  -webkit-transform: translateY(90vh);\n      -ms-transform: translateY(90vh);\n          transform: translateY(90vh);\n}\n.use-card .current-item .current-img {\n  width: 8.53333rem;\n  height: 12.288rem;\n}\n.use-card .current-item.active {\n  -webkit-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -o-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -webkit-transform: translateY(-90vh);\n      -ms-transform: translateY(-90vh);\n          transform: translateY(-90vh);\n  -webkit-filter: brightness(2);\n          filter: brightness(2);\n  -webkit-box-shadow: 0 0 0.85333rem #fff;\n          box-shadow: 0 0 0.85333rem #fff;\n}\n.use-card .card-view {\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.use-card .card-view .card-img {\n  width: 3.2rem;\n  height: 4.608rem;\n}\n",""]),n.exports=e}}]);