(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"100":function(e,t,n){"use strict";var a=n(0),i=n(8),r=n(90),s=n(88),o={"name":"DbEvent","components":{},"props":{"useType":{"type":String,"default":"normal"}},"data":function data(){return{"currentItem":null,"currentList":[]}},"computed":{"storeItems":function storeItems(){var e=this.$store.state.storeItems;return Object.keys(e).map((function(e){return r.a[e]})).filter((function(e){return"card"===e.type}))}},"mounted":function mounted(){console.log(this.storeItems),this.init()},"methods":{"setItem":function setItem(e){this.currentItem=e},"onClick":function onClick(e,t){var n=this;null==this.currentItem&&(this.currentItem=this.currentList.splice(t,1)[0],this.useItem(e.id),setTimeout((function(){n.currentItem=null,Object(i.showToast)({"title":r.a[e.id].descript,"icon":"none","duration":1e3})}),1e3))},"useItem":function useItem(e){var t=Object(a.a)({},this.$store.state.storeItems);1==t[e]?delete t[e]:t[e]-=1,this.$store.dispatch("updateStoreItems",Object(a.a)({},t));var n="";n="blueCard"==r.a[e].useType?[["at","30"],["de","30"]]:r.a[e].useType.split(",").map((function(e){return e.split("_")})),this.$emit("card-gain",n)},"init":function init(){var e=this;if(0!=this.storeItems.length){var t=this.storeItems.map((function(e,t){return t})),n=t.length>=4?4:t.length;if(t.length>n){for(var i=[],r=0;r<n;r++)i.push(t.splice(Object(s.h)(0,t.length-1),1)[0]);this.currentList=i.reduce((function(t,n){return t.push(Object(a.a)({},e.storeItems[n])),t}),[])}else this.currentList=this.storeItems.map((function(e){return Object(a.a)({},e)}));console.log(this.currentList)}}},"onReady":function onReady(){}},c=(n(98),n(86)),m=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("taro-view",{"staticClass":"use-card"},[a("taro-view",{"staticClass":"current-item","class":{"active":e.currentItem&&e.currentItem.id}},[a("taro-image",{"staticClass":"current-img","attrs":{"src":e.currentItem&&e.currentItem.img}})],1),e._v(" "),a("taro-image",{"staticClass":"card-blj","class":{"active":e.currentItem&&e.currentItem.id},"attrs":{"src":n(97)}}),e._v(" "),"normal"==e.useType?a("div",{"staticClass":"card-view"},e._l(e.currentList,(function(t,n){return a("taro-image",{"key":t.id,"staticClass":"card-img","attrs":{"src":t.img},"on":{"tap":function(a){return e.onClick(t,n)}}})})),1):e._e()],1)}),[],!1,null,null,null);t.a=m.exports},"137":function(e,t,n){var a=n(21),i=n(3439);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});e.exports=s},"138":function(e,t,n){var a=n(21),i=n(3441);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});e.exports=s},"3437":function(e,t,n){e.exports=n.p+"static/images/redcard.png"},"3438":function(e,t,n){"use strict";n(137)},"3439":function(e,t,n){var a=n(22),i=n(89),r=n(93),s=n(106);t=a(!1);var o=i(r),c=i(s);t.push([e.i,"@-webkit-keyframes btnbgRotate {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes btnbgRotate {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes showenview {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n20% {\n    -webkit-transform: translateY(-80vh) scale(0.8);\n            transform: translateY(-80vh) scale(0.8);\n}\n50% {\n    -webkit-transform: translateY(-60vh);\n            transform: translateY(-60vh);\n}\n100% {\n    -webkit-transform: translateY(-100vh) scale(1);\n            transform: translateY(-100vh) scale(1);\n}\n}\n@keyframes showenview {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n20% {\n    -webkit-transform: translateY(-80vh) scale(0.8);\n            transform: translateY(-80vh) scale(0.8);\n}\n50% {\n    -webkit-transform: translateY(-60vh);\n            transform: translateY(-60vh);\n}\n100% {\n    -webkit-transform: translateY(-100vh) scale(1);\n            transform: translateY(-100vh) scale(1);\n}\n}\n@-webkit-keyframes scaleCard {\n0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-box-shadow: 0 0 0.85333rem #2929eb;\n            box-shadow: 0 0 0.85333rem #2929eb;\n}\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-box-shadow: 0 0 2.13333rem #2929eb;\n            box-shadow: 0 0 2.13333rem #2929eb;\n}\n100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-box-shadow: 0 0 0.85333rem #2929eb;\n            box-shadow: 0 0 0.85333rem #2929eb;\n}\n}\n@keyframes scaleCard {\n0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-box-shadow: 0 0 0.85333rem #2929eb;\n            box-shadow: 0 0 0.85333rem #2929eb;\n}\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-box-shadow: 0 0 2.13333rem #2929eb;\n            box-shadow: 0 0 2.13333rem #2929eb;\n}\n100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-box-shadow: 0 0 0.85333rem #2929eb;\n            box-shadow: 0 0 0.85333rem #2929eb;\n}\n}\n.digimon-enhance .main-button {\n  width: 5.33333rem;\n  height: 5.33333rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.digimon-enhance .main-button:active {\n  -webkit-transform: scale(1.5);\n      -ms-transform: scale(1.5);\n          transform: scale(1.5);\n  -webkit-filter: invert(1) brightness(1.2);\n          filter: invert(1) brightness(1.2);\n}\n.digimon-enhance .main-button .btn-bg {\n  position: absolute;\n  width: 5.33333rem;\n  height: 5.33333rem;\n  -webkit-animation: btnbgRotate 5s ease infinite;\n          animation: btnbgRotate 5s ease infinite;\n}\n.digimon-enhance .main-button .btn-text {\n  width: 5.33333rem;\n  height: 2.34667rem;\n  margin-left: -0.04267rem;\n  -webkit-filter: drop-shadow(0.04267rem 0.08533rem 0.128rem black);\n          filter: drop-shadow(0.04267rem 0.08533rem 0.128rem black);\n}\n.digimon-enhance .red-card {\n  position: fixed;\n  bottom: 8.53333rem;\n  right: 0.42667rem;\n  width: 2.13333rem;\n  height: 4.26667rem;\n}\n.digimon-enhance .red-card img {\n  width: 2.13333rem;\n  height: 3.2rem;\n}\n.digimon-enhance .enhance-button {\n  position: fixed;\n  bottom: 2.13333rem;\n  left: 50%;\n  margin-left: -2.66667rem;\n  width: 5.33333rem;\n  height: 5.33333rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.digimon-enhance .enhance-button:active {\n  -webkit-transform: scale(1.5);\n      -ms-transform: scale(1.5);\n          transform: scale(1.5);\n  -webkit-filter: invert(1) brightness(1.2);\n          filter: invert(1) brightness(1.2);\n}\n.digimon-enhance .enhance-button .btn-bg {\n  position: absolute;\n  width: 5.33333rem;\n  height: 5.33333rem;\n  -webkit-animation: btnbgRotate 5s ease infinite;\n          animation: btnbgRotate 5s ease infinite;\n}\n.digimon-enhance .enhance-button .btn-text {\n  width: 5.33333rem;\n  height: 2.34667rem;\n  margin-left: -0.04267rem;\n}\n.digimon-enhance .enhance-view {\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n  position: fixed;\n  z-index: 999;\n  top: 100vh;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: all 1s ease-in-out;\n  -o-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  background: url("+o+") no-repeat;\n  background-size: 100vw 100vh;\n}\n.digimon-enhance .enhance-view .back-button {\n  width: 2.13333rem;\n  height: 1.70667rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.digimon-enhance .enhance-view .total-count {\n  width: 2.13333rem;\n  height: 1.70667rem;\n  position: absolute;\n  top: 0.42667rem;\n  right: 0.42667rem;\n  font-size: 1.06667rem;\n  color: gold;\n}\n.digimon-enhance .enhance-view.active {\n  -webkit-transform: translateY(-100vh);\n      -ms-transform: translateY(-100vh);\n          transform: translateY(-100vh);\n  opacity: 1;\n}\n.digimon-enhance .enhance-view .main-box {\n  width: 11.73333rem;\n  height: 12.8rem;\n  margin: 0.85333rem auto 0;\n  background: url("+c+") no-repeat;\n  background-size: 11.73333rem 12.8rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.digimon-enhance .enhance-view .main-box .blue-card {\n  width: 6.4rem;\n  height: 9.28rem;\n  -webkit-animation: scaleCard 5s ease-in-out infinite;\n          animation: scaleCard 5s ease-in-out infinite;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-filter: saturate(0.1);\n          filter: saturate(0.1);\n}\n.digimon-enhance .enhance-view .success-percent {\n  color: #12ddf8;\n  text-align: center;\n  font-size: 0.85333rem;\n}\n.digimon-enhance .enhance-view .btns-box {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 80vw;\n  margin: 10vh auto;\n}\n.digimon-enhance .enhance-view .blue-total {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  bottom: 1.38667rem;\n  left: 0;\n  width: 100vw;\n  font-size: 0.85333rem;\n}\n.digimon-enhance .enhance-view .blue-total .bbb {\n  color: #4a70ee;\n  margin: 0 0.21333rem;\n}\n.digimon-enhance .enhance-view .enhance-texiao {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-transition: opacity 1s ease, -webkit-transform 0.5s ease;\n  transition: opacity 1s ease, -webkit-transform 0.5s ease;\n  -o-transition: opacity 1s ease, transform 0.5s ease;\n  transition: opacity 1s ease, transform 0.5s ease;\n  transition: opacity 1s ease, transform 0.5s ease, -webkit-transform 0.5s ease;\n  -webkit-transform: scale(0.8);\n      -ms-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0;\n  z-index: -1;\n}\n.digimon-enhance .enhance-view .enhance-texiao.active {\n  z-index: 500;\n  top: 0;\n  opacity: 1;\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n}\n.digimon-enhance .enhance-view .enhance-texiao .tx-img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n.digimon-enhance .enhance-view .enhance-texiao .round {\n  width: 0.85333rem;\n  height: 0.85333rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -0.42667rem 0 0 -0.42667rem;\n  background: red;\n  border-radius: 50%;\n  opacity: 0;\n}\n.digimon-enhance .enhance-view .enhance-texiao .round.success {\n  -webkit-transition: all 2s ease, background 3s linear;\n  -o-transition: all 2s ease, background 3s linear;\n  transition: all 2s ease, background 3s linear;\n  opacity: 1;\n  -webkit-transform: scale(15);\n      -ms-transform: scale(15);\n          transform: scale(15);\n}\n.digimon-enhance .enhance-view .enhance-texiao .round.fail {\n  -webkit-transition: all 2s ease, background 3s linear;\n  -o-transition: all 2s ease, background 3s linear;\n  transition: all 2s ease, background 3s linear;\n  opacity: 1;\n  -webkit-transform: scale(15);\n      -ms-transform: scale(15);\n          transform: scale(15);\n  background: black;\n}\n",""]),e.exports=t},"3440":function(e,t,n){"use strict";n(138)},"3441":function(e,t,n){var a=n(22),i=n(89),r=n(113);t=a(!1);var s=i(r);t.push([e.i,".digimon-info {\n  position: relative;\n  padding-top: 2.13333rem;\n}\n.digimon-info .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.digimon-info .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.digimon-info .top-box {\n  background: url("+s+") no-repeat;\n  background-size: cover;\n  height: 10.66667rem;\n  width: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n}\n.digimon-info .top-box [class*='side'] {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.digimon-info .top-box .current-attr {\n  position: absolute;\n  right: 0.85333rem;\n  top: 0.85333rem;\n  color: #fff;\n  font-size: 0.85333rem;\n}\n.digimon-info .top-box .left-side {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.28rem 0 0 0.85333rem;\n}\n.digimon-info .top-box .left-side .digimon-img {\n  width: 6.18667rem;\n  height: 6.18667rem;\n}\n.digimon-info .top-box .left-side .digimon-name {\n  color: #fff;\n  font-size: 0.74667rem;\n  text-align: center;\n}\n.digimon-info .top-box .left-side .digimon-name.active {\n  color: #f7e32e;\n  text-shadow: 0 0 0.21333rem red;\n}\n.digimon-info .top-box .right-side {\n  padding-top: 1.06667rem;\n  padding-left: 0.21333rem;\n}\n.digimon-info .top-box .right-side .attr-box {\n  color: #fff;\n  font-size: 0.59733rem;\n  text-shadow: 0 0 0.42667rem black;\n}\n.digimon-info .top-box .right-side .attr-box.active {\n  color: #f7e32e;\n  text-shadow: 0 0 0.21333rem red;\n}\n.digimon-info .top-box .right-side .attr-box .enhance-num {\n  color: gold !important;\n}\n.digimon-info .top-box .bottom-box .chart-box {\n  width: 6.4rem;\n  height: 6.4rem;\n  background: #fff;\n}\n",""]),e.exports=t},"3450":function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(87),r=n(8),s=n(140),o=n(10),c=n(2),m=n(88),d={"name":"DigimonEnhance","components":{"UseCard":n(100).a},"data":function data(){return{"redCardImg":n(3437),"redCardInfo":null,"num":10,"showEnView":!1,"showTx":!1,"status":""}},"computed":{"storeItems":function storeItems(){return this.$store.state.storeItems},"blueCardNum":function blueCardNum(){return this.storeItems[2]||0},"digimonEnhance":function digimonEnhance(){return this.$store.state.enhance||{}},"currentEvoName":function currentEvoName(){return i.d[this.$store.state.tamerData.currentDigimon].evolutionLineName},"totalCount":function totalCount(){try{return Object.values(this.digimonEnhance[this.currentEvoName]).reduce((function(e,t){return e+t.length}),0)}catch(e){return 0}}},"methods":{"useRedCard":function useRedCard(){var e=this;Object(r.showModal)({"title":"警告","content":"将会清空当前数码兽所有强化数据！！","confirmText":"清空","success":function success(t){t.confirm&&(e.redCardInfo={"id":+new Date,"img":e.redCardImg},e.$nextTick((function(){setTimeout((function(){e.$refs.useCardRef.setItem(e.redCardInfo)}),500),setTimeout((function(){e.redCardInfo=null,e.$refs.useCardRef.setItem(null),e.$store.dispatch("updateEnhance",Object(c.a)({},e.currentEvoName,{}))}),1800)})))}})},"backbtn":function backbtn(){this.showEnView=!1},"beginEnhance":function beginEnhance(){var e=this;this.blueCardNum<this.num?Object(r.showToast)({"title":"蓝卡不够了","icon":"none","duration":1e3}):this.totalCount>=15?Object(r.showToast)({"title":"再强化 数码兽就要消失了","icon":"none","duration":1e3}):Object(r.showModal)({"title":"强化","content":"确定使用".concat(this.num,"张蓝卡来强化？"),"success":function success(t){t.confirm?(e.showTx=!0,e.computedResult()):t.cancel}})},"getRandomAttr":function getRandomAttr(){var e=["at","de","hp","ev"][Object(m.h)(0,3)];return[e,m.h.apply(void 0,Object(o.a)({"at":[5,10],"de":[4,8],"hp":[5,10],"ev":[0,2]}[e]))]},"computedResult":function computedResult(){var e=this,t=this,n=Math.random()<this.num/100;this.status=n?"success":"fail";var i=Object(a.a)({},this.$store.state.storeItems);i[2]-=this.num,this.$store.dispatch("updateStoreItems",i);var s=t.getRandomAttr();setTimeout((function(){if(e.status="",Object(r.showToast)({"title":n?"强化成功 ".concat(s[0]," + ").concat(s[1],"%"):"强化失败","icon":"none","duration":1500}),n){var a=t.digimonEnhance[e.currentEvoName]||{};a[s[0]]?a[s[0]].push(s[1]):a[s[0]]=[s[1]],t.$store.dispatch("updateEnhance",Object(c.a)({},e.currentEvoName,a))}t.showTx=!1}),3e3)},"tapHnadle":function tapHnadle(){this.showEnView=!0},"addBlueCard":function addBlueCard(){this.num>=100||(this.num+=10)},"reduceBlueCard":function reduceBlueCard(){this.num<=10||(this.num-=10)}},"onReady":function onReady(){}},u=(n(3438),n(86)),l=Object(u.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("taro-view",{"staticClass":"digimon-enhance"},[a("taro-view",{"staticClass":"enhance-button","on":{"tap":e.tapHnadle}},[a("taro-image",{"staticClass":"btn-bg","attrs":{"src":n(95)}}),e._v(" "),a("taro-image",{"staticClass":"btn-text","attrs":{"src":n(108)}})],1),e._v(" "),a("taro-view",{"staticClass":"red-card","on":{"tap":e.useRedCard}},[a("taro-image",{"attrs":{"src":e.redCardImg}})],1),e._v(" "),a("use-card",{"directives":[{"name":"show","rawName":"v-show","value":e.redCardInfo,"expression":"redCardInfo"}],"ref":"useCardRef","staticStyle":{"position":"fixed","bottom":"5vh"},"attrs":{"useType":"enhance"}}),e._v(" "),a("taro-view",{"staticClass":"enhance-view","class":{"active":e.showEnView}},[a("taro-image",{"staticClass":"back-button","attrs":{"src":n(94)},"on":{"tap":e.backbtn}}),e._v(" "),e.totalCount>0?a("taro-view",{"staticClass":"total-count"},[e._v("+ "+e._s(e.totalCount))]):e._e(),e._v(" "),a("taro-view",{"staticClass":"main-box"},[a("taro-image",{"staticClass":"blue-card","style":{"filter":"saturate("+e.num/100+")"},"attrs":{"src":n(105)},"on":{"tap":e.beginEnhance}})],1),e._v(" "),a("taro-view",{"staticClass":"success-percent"},[e._v(e._s(e.num)+"张 成功率 "+e._s(e.num)+"%")]),e._v(" "),a("taro-view",{"staticClass":"btns-box"},[a("taro-view",{"staticClass":"main-button","on":{"tap":e.addBlueCard}},[a("taro-image",{"staticClass":"btn-bg","attrs":{"src":n(95)}}),e._v(" "),a("taro-image",{"staticClass":"btn-text","attrs":{"src":n(111)}})],1),e._v(" "),a("taro-view",{"staticClass":"main-button","on":{"tap":e.reduceBlueCard}},[a("taro-image",{"staticClass":"btn-bg","attrs":{"src":n(109)}}),e._v(" "),a("taro-image",{"staticClass":"btn-text","attrs":{"src":n(107)}})],1)],1),e._v(" "),a("taro-view",{"staticClass":"blue-total"},[a("taro-text",{"staticClass":"bbb"},[e._v("蓝卡")]),e._v("剩余量"),a("taro-text",{"staticClass":"bbb"},[e._v(e._s(e.blueCardNum))]),e._v("张")],1),e._v(" "),a("taro-view",{"staticClass":"enhance-texiao","class":{"active":e.showTx}},[a("taro-view",{"staticClass":"round","class":e.status}),e._v(" "),a("taro-image",{"staticClass":"tx-img","attrs":{"src":n(110)}})],1)],1)],1)}),[],!1,null,null,null).exports,g={"name":"DigimonInfo","components":{"DigimonNormal":s.a,"DigimonEnhance":l},"props":{},"data":function data(){return{"chart":null}},"computed":{"currentEvoName":function currentEvoName(){return i.d[this.$store.state.tamerData.currentDigimon].evolutionLineName},"digimonEnhance":function digimonEnhance(){return this.$store.state.enhance||{}},"currentDigimonEnhance":function currentDigimonEnhance(){return this.digimonEnhance[this.currentEvoName]||null},"currentDigimon":function currentDigimon(){return Object(a.a)(Object(a.a)({},this.$store.state.tamerData),this.$store.state.currentDigimonInfo)},"currentData":function currentData(){return i.d[this.currentDigimon.currentDigimon]},"computedAttrData":function computedAttrData(){var e=this,t=this.currentData,n=t.attr,i=t.growAttr,r=this.currentDigimon.attr.level,s=null;this.currentDigimonEnhance&&(s=Object.keys(this.currentDigimonEnhance).reduce((function(t,n){return t[n]=e.currentDigimonEnhance[n].reduce((function(e,t){return e+ +t}),0),t}),{}));var o={"hp":i.hp*r+n.hp,"de":i.de*r+n.de,"at":i.at*r+n.at,"ev":n.ev,"realm":n.realm,"growAttr":Object(a.a)({},i)};if(s)for(var c in s)o[c]="ev"==c?o[c]+s[c]:Math.round(o[c]+o[c]*s[c]/100);return o}},"mounted":function mounted(){},"methods":{"backHandle":function backHandle(){this.$store.commit("UPDATE_SCENETYPE","normal")}},"onReady":function onReady(){}},p=(n(3440),Object(u.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("taro-view",{"staticClass":"digimon-info"},[n("taro-view",{"staticClass":"back-button","on":{"tap":e.backHandle}},[e._v("返回")]),e._v(" "),n("taro-view",{"staticClass":"top-box"},[n("taro-view",{"staticClass":"current-attr"},[e._v(e._s(e.computedAttrData.realm.toUpperCase()))]),e._v(" "),n("taro-view",{"staticClass":"left-side"},[n("taro-image",{"staticClass":"digimon-img","attrs":{"src":e.currentData.img}}),e._v(" "),n("taro-view",{"staticClass":"digimon-name","class":{"active":e.currentDigimon.attr.level>=1e3}},[e._v(e._s(e.currentData.name)+" "),n("br"),e._v("\n        "+e._s(e.currentDigimon.attr.level)+"级")])],1),e._v(" "),n("taro-view",{"staticClass":"right-side"},[n("taro-view",{"staticClass":"attr-box","class":{"active":e.computedAttrData.at>5e4}},[e._v("AT "+e._s(e.computedAttrData.at)+"\n        "),n("taro-text",{"staticClass":"enhance-num"},[e._v(e._s(e.currentDigimonEnhance&&e.currentDigimonEnhance.at&&"+"+e.currentDigimonEnhance.at.reduce((function(e,t){return e+ +t}),0)+"% (+"+e.currentDigimonEnhance.at.length+")"))])],1),e._v(" "),n("taro-view",{"staticClass":"attr-box","class":{"active":e.computedAttrData.de>2e3}},[e._v("DE "+e._s(e.computedAttrData.de)+"\n        "),n("taro-text",{"staticClass":"enhance-num"},[e._v(e._s(e.currentDigimonEnhance&&e.currentDigimonEnhance.de&&"+"+e.currentDigimonEnhance.de.reduce((function(e,t){return e+ +t}),0)+"% (+"+e.currentDigimonEnhance.de.length+")"))])],1),e._v(" "),n("taro-view",{"staticClass":"attr-box","class":{"active":e.computedAttrData.hp>5e4}},[e._v("HP "+e._s(e.computedAttrData.hp)+"\n        "),n("taro-text",{"staticClass":"enhance-num"},[e._v(e._s(e.currentDigimonEnhance&&e.currentDigimonEnhance.hp&&"+"+e.currentDigimonEnhance.hp.reduce((function(e,t){return e+ +t}),0)+"% (+"+e.currentDigimonEnhance.hp.length+")"))])],1),e._v(" "),n("taro-view",{"staticClass":"attr-box","class":{"active":e.computedAttrData.ev>40}},[e._v("EV "+e._s(e.computedAttrData.ev)+"%\n        "),n("taro-text",{"staticClass":"enhance-num"},[e._v(e._s(e.currentDigimonEnhance&&e.currentDigimonEnhance.ev&&"+"+e.currentDigimonEnhance.ev.reduce((function(e,t){return e+ +t}),0)+" (+"+e.currentDigimonEnhance.ev.length+")"))])],1),e._v(" "),n("taro-view",{"staticClass":"attr-box","class":{"active":e.computedAttrData.growAttr.at>80}},[e._v("成长AT "+e._s(e.computedAttrData.growAttr.at))]),e._v(" "),n("taro-view",{"staticClass":"attr-box","class":{"active":e.computedAttrData.growAttr.de>10}},[e._v("成长DE "+e._s(e.computedAttrData.growAttr.de))]),e._v(" "),n("taro-view",{"staticClass":"attr-box","class":{"active":e.computedAttrData.growAttr.at>100}},[e._v("成长HP "+e._s(e.computedAttrData.growAttr.hp))]),e._v(" "),n("taro-view",{"staticClass":"attr-box","class":{"active":1.5*e.computedAttrData.at>1e5}},[e._v("最高伤害(无视防御) "),n("br"),e._v("\n        "+e._s(1.5*e.computedAttrData.at))])],1)],1),e._v(" "),n("taro-view",{"staticClass":"bottom-box"},[n("digimon-normal",{"staticStyle":{"margin-top":"4vh"},"attrs":{"hidden-control":!0}}),e._v(" "),n("digimon-enhance")],1)],1)}),[],!1,null,null,null));t.default=p.exports},"90":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=function gimg(e){try{return n(92)("./".concat(e))}catch(e){return console.warn(e),""}},i={"1":{"id":1,"name":"数码蛋","img":a("eggs/01.png"),"maxNum":100,"type":"egg","useType":"egg","descript":"普通的数码蛋 可以随机获得一个数码兽"},"2":{"id":2,"name":"蓝卡","img":a("card/bcard.jpg"),"maxNum":100,"type":"card","useType":"blueCard","descript":"蓝卡(AT/DE+30%)"},"3":{"id":3,"name":"at增益30%","img":a("card/at.jpg"),"maxNum":100,"type":"card","useType":"at_30","descript":"攻击组件A(at+30%)"},"4":{"id":4,"name":"at增益50%","img":a("card/at3.jpeg"),"maxNum":100,"type":"card","useType":"at_50","descript":"数码皇后卡(at+50%)"},"5":{"id":5,"name":"atde增益","img":a("card/atde.jpeg"),"maxNum":100,"type":"card","useType":"at_20,de_20","descript":"强化组件W(at/de+30%)"},"6":{"id":6,"name":"de增益99","img":a("card/de.jpg"),"maxNum":100,"type":"card","useType":"dec_99","descript":"防御组件C(de+99)"},"7":{"id":7,"name":"de增益999","img":a("card/de999.jpeg"),"maxNum":100,"type":"card","useType":"dec_999","descript":"无效化组件P(de+999)"},"8":{"id":8,"name":"de增益9999","img":a("card/de9999.jpeg"),"maxNum":100,"type":"card","useType":"dec_9999","descript":"勇者封印(10秒内 de+9999)"},"9":{"id":9,"name":"hp回复50%","img":a("card/hp50.jpeg"),"maxNum":100,"type":"card","useType":"hp_50","descript":"充填组件Q(HP+50%)"},"10":{"id":10,"name":"hp回复100%","img":a("card/hp100.jpg"),"maxNum":100,"type":"card","useType":"hp_100","descript":"宇宙大膨胀(HP+100%)"},"11":{"id":11,"name":"数码蛋","img":a("eggs/04.png"),"maxNum":100,"type":"egg","useType":"jczzegg","descript":"交错战争数码蛋"},"12":{"id":12,"name":"数码蛋","img":a("eggs/05.png"),"maxNum":100,"type":"egg","useType":"hjqsegg","descript":"皇家骑士副本限定数码蛋"},"13":{"id":13,"name":"中世纪红莲怪物卡","img":a("card/zsj.jpg"),"maxNum":100,"type":"useCard","useType":"zsjCard","descript":"任务:请击败红莲骑士兽凑齐十张中世纪红莲卡片"},"14":{"id":14,"name":"数码蛋","img":a("eggs/06.png"),"maxNum":100,"type":"egg","useType":"mowegg","descript":"七魔王限定数码蛋"},"15":{"id":15,"name":"暗龙怪物卡","img":a("card/anlong.jpg"),"maxNum":10,"type":"useCard","useType":"anlongCard","descript":"任务:击败最终千年兽凑齐十张暗龙兽卡片"},"16":{"id":16,"name":"千年怪物卡","img":a("card/qiannian.jpg"),"maxNum":10,"type":"useCard","useType":"qianinanCard","descript":"任务:击败最终千年兽凑齐十张千年兽卡片"},"17":{"id":17,"name":"金甲龙X怪物卡","img":a("card/jjlx.jpg"),"maxNum":10,"type":"useCard","useType":"jjlxCard","descript":"任务:击败金甲龙兽X凑齐十张金甲龙兽X抗体卡片"},"18":{"id":18,"name":"数码蛋","img":a("eggs/07.png"),"maxNum":100,"type":"egg","useType":"hjqsxegg","descript":"皇家骑士X副本限定数码蛋"},"19":{"id":19,"name":"数码蛋","img":a("eggs/08.png"),"maxNum":100,"type":"egg","useType":"sssegg","descript":"最后的数码蛋"},"20":{"id":20,"name":"数码蛋","img":a("eggs/09.png"),"maxNum":100,"type":"egg","useType":"testegg","descript":"黑暗四天王限定蛋"},"21":{"id":21,"name":"命运的装甲进化","img":a("card/mingyun.png"),"maxNum":10,"type":"useCard","useType":"mingyunCard","descript":"任务:请击败金甲龙兽凑齐十张命运的装甲蛋卡片"},"22":{"id":22,"name":"水母兽的资料","img":a("card/shuimu.jpg"),"maxNum":100,"type":"useCard","useType":"shuimuCard","descript":"任务:超恶魔兽逆袭副本击败任意怪凑齐一百张水母兽卡片"},"23":{"id":23,"name":"黑暗齿轮之力","img":a("card/chilun.jpeg"),"maxNum":100,"type":"useCard","useType":"chilunCard","descript":"任务:在四天王副本凑齐100张黑暗齿轮卡片"},"24":{"id":24,"name":"丧尸暴龙兽","img":a("card/sangshi.jpeg"),"maxNum":10,"type":"useCard","useType":"sangshiCard","descript":"任务:请击败丧尸暴龙兽凑齐十张丧尸暴龙兽卡片"},"25":{"id":25,"name":"魔王のX程序","img":a("card/aogudu.jpeg"),"maxNum":100,"type":"useCard","useType":"aoguduCard","descript":"任务:在奥古杜X副本收集100张魔王のX程序卡片"},"26":{"id":26,"name":"奥米加兽抉择者","img":a("card/jzz.jpg"),"maxNum":10,"type":"useCard","useType":"jzzCard","descript":"任务:请击败奥古杜兽X凑齐十张抉择者卡片"},"27":{"id":27,"name":"X程序暴龙机","img":a("card/x.jpeg"),"maxNum":10,"type":"useCard","useType":"xCard","descript":"任务:请击败杰斯X凑齐十张X程序暴龙机"},"28":{"id":28,"name":"数码蛋","img":a("eggs/10.png"),"maxNum":100,"type":"egg","useType":"aoguduxegg","descript":"奥古杜X本限定蛋"},"29":{"id":29,"name":"暴龙机（盾）","img":a("card/dun.png"),"maxNum":10,"type":"useCard","useType":"dunCard","descript":"任务:在四圣兽副本收集十张暴龙机（盾）"},"30":{"id":30,"name":"暴龙机（剑）","img":a("card/jian.png"),"maxNum":10,"type":"useCard","useType":"jianCard","descript":"任务:击败黄龙兽收集十张暴龙机（剑）"},"31":{"id":31,"name":"黑暗塔","img":a("card/heianta.jpeg"),"maxNum":100,"type":"useCard","useType":"heiantaCard","descript":"任务:在七魔王本收集100张黑暗塔"},"32":{"id":32,"name":"X抗体全属性增加70%","img":a("card/xkangti.jpeg"),"maxNum":5,"type":"card","useType":"at_70,de_70","descript":"X抗体(AT/DE+70%)"},"33":{"id":33,"name":"电波暴龙机","img":a("card/digivice.jpeg"),"maxNum":10,"type":"card","useType":"at_20,de_30","descript":"电波暴龙机(AT+20%,DE+30%)"},"34":{"id":34,"name":"D3暴龙机","img":a("card/d3.jpeg"),"maxNum":10,"type":"card","useType":"at_15,de_50","descript":"D3暴龙机(AT+15%,DE+50%)"},"35":{"id":35,"name":"D-ARK暴龙机","img":a("card/ark.jpeg"),"maxNum":10,"type":"card","useType":"at_60,de_10","descript":"D-ARK暴龙机(AT+60%,DE+10%)"},"36":{"id":36,"name":"数码扫描器","img":a("card/saomiaoqi.jpeg"),"maxNum":10,"type":"card","useType":"at_45,de_20","descript":"数码扫描器(AT+45%,DE+20%)"},"37":{"id":37,"name":"IC暴龙机","img":a("card/ic.jpeg"),"maxNum":10,"type":"card","useType":"at_150,de_-90","descript":"IC暴龙机(at+150%,de-90%)"},"38":{"id":38,"name":"Xros Leader","img":a("card/xros.jpeg"),"maxNum":10,"type":"card","useType":"at_-30,de_100","descript":"Xros Leader(AT-30%,DE+100%)"},"39":{"id":39,"name":"徽章钥匙","img":a("card/yaoshi.jpeg"),"maxNum":10,"type":"card","useType":"hp_70","descript":"徽章钥匙(hp+70%)"},"40":{"id":40,"name":"斗士之魂（火）","img":a("card/huo.jpg"),"maxNum":10,"type":"useCard","useType":"huoCard","descript":"任务:在十斗士副本收集10个斗士之魂(火)"},"41":{"id":41,"name":"斗士之魂（光）","img":a("card/guang.jpg"),"maxNum":10,"type":"useCard","useType":"guangCard","descript":"任务:在十斗士副本收集10个斗士之魂(光)"},"42":{"id":42,"name":"斗士之魂（暗）","img":a("card/an.jpg"),"maxNum":10,"type":"useCard","useType":"anCard","descript":"任务:在十斗士副本收集10个斗士之魂(暗)"},"43":{"id":43,"name":"斗士之魂（冰）","img":a("card/bing.jpg"),"maxNum":10,"type":"useCard","useType":"bingCard","descript":"任务:在十斗士副本收集10个斗士之魂(冰)"},"44":{"id":44,"name":"斗士之魂（风）","img":a("card/feng.jpg"),"maxNum":10,"type":"useCard","useType":"fengCard","descript":"任务:在十斗士副本收集10个斗士之魂(风)"},"45":{"id":45,"name":"斗士之魂（钢）","img":a("card/gang.jpg"),"maxNum":10,"type":"useCard","useType":"gangCard","descript":"任务:在十斗士副本收集10个斗士之魂(钢)"},"46":{"id":46,"name":"斗士之魂（雷）","img":a("card/lei.jpg"),"maxNum":10,"type":"useCard","useType":"leiCard","descript":"任务:在十斗士副本收集10个斗士之魂(雷)"},"47":{"id":47,"name":"斗士之魂（木）","img":a("card/mu.jpg"),"maxNum":10,"type":"useCard","useType":"muCard","descript":"任务:在十斗士副本收集10个斗士之魂(木)"},"48":{"id":48,"name":"斗士之魂（水）","img":a("card/shui.jpg"),"maxNum":10,"type":"useCard","useType":"shuiCard","descript":"任务:在十斗士副本收集10个斗士之魂(水)"},"49":{"id":49,"name":"斗士之魂（土）","img":a("card/tu.jpg"),"maxNum":10,"type":"useCard","useType":"tuCard","descript":"任务:在十斗士副本收集10个斗士之魂(土)"},"50":{"id":50,"name":"白帝剑","img":a("card/baidi.jpg"),"maxNum":10,"type":"card","useType":"at_100","descript":"奥米茄之剑(AT+100%)"},"51":{"id":51,"name":"V驯兽师01","img":a("card/vl.jpg"),"maxNum":10,"type":"card","useType":"at_10,de_99","descript":"V驯兽师暴龙机(AT+10%,DE+99%)"},"52":{"id":52,"name":"神圣指环","img":a("card/huan.jpeg"),"maxNum":10,"type":"card","useType":"at_50,de_70","descript":"神圣之环(AT+50%)(DE+70%)"},"53":{"id":53,"name":"恐龙克星","img":a("card/klkx.jpeg"),"maxNum":10,"type":"card","useType":"at_120,de_-30","descript":"恐龙克星(AT+120%,DE-30%)"},"54":{"id":54,"name":"基兹兽母体","img":a("card/jz.jpeg"),"maxNum":100,"type":"useCard","useType":"jzCard","descript":"任务:在基兹兽副本收集100张基兹兽母体"},"55":{"id":55,"name":"白色羽毛","img":a("card/baiyu.jpeg"),"maxNum":10,"type":"card","useType":"de_10","descript":"白色羽毛(de+10%)"},"56":{"id":56,"name":"高速组件B","img":a("card/gaosu.jpg"),"maxNum":10,"type":"card","useType":"de_15","descript":"高速组件B(de+15%)"},"57":{"id":57,"name":"光子郎电脑","img":a("card/diannao.jpeg"),"maxNum":10,"type":"card","useType":"at_10","descript":"光子郎电脑(at+10%)"},"58":{"id":58,"name":"恶魔增幅器","img":a("card/emo.jpeg"),"maxNum":10,"type":"card","useType":"at_15","descript":"恶魔增幅器(at+15%)"},"59":{"id":59,"name":"反弹","img":a("card/fantan.jpeg"),"maxNum":10,"type":"card","useType":"at_200,de_-100","descript":"反弹(at+200%,de-100%)"},"60":{"id":60,"name":"汉堡包","img":a("card/hanbao.jpg"),"maxNum":10,"type":"card","useType":"hp_10","descript":"吃汉堡包(hp+10%)"},"61":{"id":61,"name":"药箱","img":a("card/yaoxiang.jpeg"),"maxNum":10,"type":"card","useType":"hp_15","descript":"药箱(hp+15%)"},"62":{"id":62,"name":"混乱电波","img":a("card/hunluan.jpeg"),"maxNum":10,"type":"card","useType":"at_-50,de_50","descript":"混乱电波(hp-50%,de+50%)"},"63":{"id":63,"name":"斗士之魂(暗黑兽)","img":a("card/an2.jpg"),"maxNum":10,"type":"useCard","useType":"an2Card","descript":"任务:在十斗士副本收集10个斗士之魂(暗黑兽)"}}},"91":function(e,t,n){var a=n(21),i=n(99);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});e.exports=s},"98":function(e,t,n){"use strict";n(91)},"99":function(e,t,n){(t=n(22)(!1)).push([e.i,".use-card {\n  position: absolute;\n  width: 100vw;\n  height: 8.53333rem;\n  bottom: 0;\n  left: 0;\n}\n.use-card .card-blj {\n  width: 12.8rem;\n  height: 14.656rem;\n  position: absolute;\n  top: -45vh;\n  left: 50%;\n  margin-left: -10.24rem;\n  -webkit-transition: 0.2s ease;\n  -o-transition: 0.2s ease;\n  transition: 0.2s ease;\n  z-index: 9999;\n  -webkit-transform: translateX(-100vw);\n      -ms-transform: translateX(-100vw);\n          transform: translateX(-100vw);\n}\n.use-card .card-blj.active {\n  -webkit-transform: translateX(0);\n      -ms-transform: translateX(0);\n          transform: translateX(0);\n}\n.use-card .current-item {\n  width: 8.53333rem;\n  height: 12.288rem;\n  position: absolute;\n  top: -40vh;\n  right: 50%;\n  margin-right: -9.17333rem;\n  -webkit-transform: translateY(90vh);\n      -ms-transform: translateY(90vh);\n          transform: translateY(90vh);\n}\n.use-card .current-item .current-img {\n  width: 8.53333rem;\n  height: 12.288rem;\n}\n.use-card .current-item.active {\n  -webkit-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -o-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -webkit-transform: translateY(-90vh);\n      -ms-transform: translateY(-90vh);\n          transform: translateY(-90vh);\n  -webkit-filter: brightness(2);\n          filter: brightness(2);\n  -webkit-box-shadow: 0 0 0.85333rem #fff;\n          box-shadow: 0 0 0.85333rem #fff;\n}\n.use-card .card-view {\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.use-card .card-view .card-img {\n  width: 3.2rem;\n  height: 4.608rem;\n}\n",""]),e.exports=t}}]);