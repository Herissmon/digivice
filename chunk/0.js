(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"100":function(t,e,a){"use strict";var n=a(0),i=a(8),r=a(90),s=a(88),o={"name":"DbEvent","components":{},"props":{"useType":{"type":String,"default":"normal"}},"data":function data(){return{"currentItem":null,"currentList":[]}},"computed":{"storeItems":function storeItems(){var t=this.$store.state.storeItems;return Object.keys(t).map((function(t){return r.a[t]})).filter((function(t){return"card"===t.type}))}},"mounted":function mounted(){console.log(this.storeItems),this.init()},"methods":{"setItem":function setItem(t){this.currentItem=t},"onClick":function onClick(t,e){var a=this;null==this.currentItem&&(this.currentItem=this.currentList.splice(e,1)[0],this.useItem(t.id),setTimeout((function(){a.currentItem=null,Object(i.showToast)({"title":r.a[t.id].descript,"icon":"none","duration":1e3})}),1e3))},"useItem":function useItem(t){var e=Object(n.a)({},this.$store.state.storeItems);1==e[t]?delete e[t]:e[t]-=1,this.$store.dispatch("updateStoreItems",Object(n.a)({},e));var a="";a="blueCard"==r.a[t].useType?[["at","30"],["de","30"]]:r.a[t].useType.split(",").map((function(t){return t.split("_")})),this.$emit("card-gain",a)},"init":function init(){var t=this;if(0!=this.storeItems.length){var e=this.storeItems.map((function(t,e){return e})),a=e.length>=4?4:e.length;if(e.length>a){for(var i=[],r=0;r<a;r++)i.push(e.splice(Object(s.h)(0,e.length-1),1)[0]);this.currentList=i.reduce((function(e,a){return e.push(Object(n.a)({},t.storeItems[a])),e}),[])}else this.currentList=this.storeItems.map((function(t){return Object(n.a)({},t)}));console.log(this.currentList)}}},"onReady":function onReady(){}},m=(a(98),a(86)),c=Object(m.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("taro-view",{"staticClass":"use-card"},[n("taro-view",{"staticClass":"current-item","class":{"active":t.currentItem&&t.currentItem.id}},[n("taro-image",{"staticClass":"current-img","attrs":{"src":t.currentItem&&t.currentItem.img}})],1),t._v(" "),n("taro-image",{"staticClass":"card-blj","class":{"active":t.currentItem&&t.currentItem.id},"attrs":{"src":a(97)}}),t._v(" "),"normal"==t.useType?n("div",{"staticClass":"card-view"},t._l(t.currentList,(function(e,a){return n("taro-image",{"key":e.id,"staticClass":"card-img","attrs":{"src":e.img},"on":{"tap":function(n){return t.onClick(e,a)}}})})),1):t._e()],1)}),[],!1,null,null,null);e.a=c.exports},"131":function(t,e,a){var n=a(21),i=a(3360);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={"insert":"head","singleton":!1},s=(n(i,r),i.locals?i.locals:{});t.exports=s},"3359":function(t,e,a){"use strict";a(131)},"3360":function(t,e,a){(e=a(22)(!1)).push([t.i,"@-webkit-keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@-webkit-keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n@keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n.digimon-battle {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.digimon-battle .count-down {\n  color: #fff;\n  font-size: 2.13333rem;\n  width: 100%;\n  top: 3.84rem;\n  text-align: center;\n  position: absolute;\n}\n.digimon-battle .kz-title {\n  position: absolute;\n  top: 6.4rem;\n  left: 0;\n  text-align: center;\n  color: #fff;\n  width: 100%;\n}\n.digimon-battle .kz-title .active {\n  color: #e95014;\n  font-size: 1.70667rem;\n}\n.digimon-battle .battle-container {\n  width: 100%;\n  height: 10.66667rem;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .hp-box {\n  width: 100%;\n  height: 0.256rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n  top: 25%;\n  padding: 0 4%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-filter: blur(0.02133rem);\n          filter: blur(0.02133rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item {\n  width: 1.70667rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(#6a6a6a), to(#434343));\n  background: -webkit-linear-gradient(#6a6a6a, #434343);\n  background: -o-linear-gradient(#6a6a6a, #434343);\n  background: linear-gradient(#6a6a6a, #434343);\n  border: 0.04267rem solid #d5d7d3;\n  border-radius: 0.08533rem;\n  overflow: hidden;\n}\n.digimon-battle .battle-container .hp-box .hp-item .hp-item-inner {\n  background: -webkit-gradient(linear, left top, left bottom, from(#da3c2e), to(#a31c0f));\n  background: -webkit-linear-gradient(#da3c2e, #a31c0f);\n  background: -o-linear-gradient(#da3c2e, #a31c0f);\n  background: linear-gradient(#da3c2e, #a31c0f);\n  height: 0.256rem;\n  width: 1.70667rem;\n  -webkit-transform: translateX(-1.06667rem);\n      -ms-transform: translateX(-1.06667rem);\n          transform: translateX(-1.06667rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item:first-child {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.digimon-battle .battle-container .hp-box .hp-hurt {\n  color: red;\n  font-size: 1.06667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.active {\n  -webkit-transform: translate3d(0, -1.28rem, 0) scale(1.1);\n          transform: translate3d(0, -1.28rem, 0) scale(1.1);\n  opacity: 0.8;\n  -webkit-transition: all 0.35s ease;\n  -o-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-right {\n  position: absolute;\n  top: -0.42667rem;\n  right: 0.64rem;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-left {\n  position: absolute;\n  top: -0.42667rem;\n  left: 0.64rem;\n}\n.digimon-battle .battle-container .digimon-box {\n  width: 2.56rem;\n  height: 2.56rem;\n  position: absolute;\n}\n.digimon-battle .battle-container .digimon-box .behit {\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  opacity: 0.2;\n  -webkit-transform: translateX(0.10667rem);\n      -ms-transform: translateX(0.10667rem);\n          transform: translateX(0.10667rem);\n}\n.digimon-battle .battle-container .digimon-box.enemy-digimon {\n  top: 50%;\n  left: 0.42667rem;\n  -webkit-transform: translateY(-50%) rotateY(180deg);\n          transform: translateY(-50%) rotateY(180deg);\n}\n.digimon-battle .battle-container .digimon-box.current-digimon {\n  top: 50%;\n  right: 0.42667rem;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .digimon-box image,\n.digimon-battle .battle-container .digimon-box img,\n.digimon-battle .battle-container .digimon-box taro-image-core {\n  width: 100%;\n  height: 100%;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal {\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n  right: 2.98667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.active {\n  opacity: 1;\n  -webkit-animation: attackNormal 1s linear alternate;\n          animation: attackNormal 1s linear alternate;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.bigactive {\n  opacity: 1;\n  -webkit-animation: attackZoom 1s linear alternate;\n          animation: attackZoom 1s linear alternate;\n}\n",""]),t.exports=e},"3379":function(t,e,a){"use strict";a.r(e);var n=a(2),i=a(10),r=a(0),s=a(8),o=a(87),m=a(90),c=a(100),u=a(88),d={"wzs10":{"width":"130px","height":"130px","marginLeft":"-30px","marginTop":"-20px"},"beiersita":{"width":"85px","height":"85px","marginRight":"-6px","marginTop":"-10px"}},l={"name":"NumberDisplay","components":{"UseCard":c.a},"props":{"battelBackground":{"type":String,"default":""},"enemyDigimon":{"type":String,"default":""},"enemyAttrGain":{"type":Object,"default":function _default(t){return{}}},"tamerAttrGain":{"type":Object,"default":function _default(t){return{}}},"finallyCallback":{"type":Function,"default":null},"gifs":{"type":Object,"default":null}},"computed":{"enemyDigimonSize":function enemyDigimonSize(){return d[this.enemyDigimon]||""},"currentDigimonSize":function currentDigimonSize(){return d[this.$store.state.tamerData.currentDigimon]||""},"allBuff":function allBuff(){return this.$store.state.buff},"isKz":function isKz(){var t=o.o[this.computedDigimonAttr.attr.realm].includes(this.computedEnemyDigimonAttr.attr.realm),e=o.o[this.computedEnemyDigimonAttr.attr.realm].includes(this.computedDigimonAttr.attr.realm);return t?"克制":e?"被克制":"无"},"currentEvoName":function currentEvoName(){return o.d[this.$store.state.tamerData.currentDigimon].evolutionLineName},"digimonEnhance":function digimonEnhance(){return this.$store.state.enhance||{}},"currentDigimonEnhance":function currentDigimonEnhance(){return this.digimonEnhance[this.currentEvoName]||null},"enemyDigimonAttrGain":function enemyDigimonAttrGain(){return Object(r.a)(Object(r.a)({},o.b),this.enemyAttrGain)},"tamerDigimonAttrGain":function tamerDigimonAttrGain(){return Object(r.a)(Object(r.a)({},o.b),this.tamerAttrGain)},"getTamerData":function getTamerData(){return this.$store.getters.getTamerData},"computedDigimonAttr":function computedDigimonAttr(){var t=this,e=Object(u.a)(this.currrentDigimonData,this.currentDigimonInfo),a=null;if(this.currentDigimonEnhance&&(a=Object.keys(this.currentDigimonEnhance).reduce((function(e,a){return e[a]=t.currentDigimonEnhance[a].reduce((function(t,e){return t+ +e}),0),e}),{})),a)for(var n in a)e.attr[n]="ev"==n?e.attr[n]+a[n]:Math.round(e.attr[n]+e.attr[n]*a[n]/100);return this.cardGainList.forEach((function(t){"dec"===t[0]?(e.attr.de=e.attr.de+parseInt(t[1]),console.log("de增加".concat(t[1]))):(e.attr[t[0]]=parseInt(e.attr[t[0]]+e.attr[t[0]]*(t[1]/100)),console.log("".concat(t[0],"增加").concat(t[1],"%")))})),e},"currrentDigimonData":function currrentDigimonData(){return o.d[this.getTamerData.currentDigimon]},"normalAction":function normalAction(){return this.currrentDigimonData.actionGroup.normal},"touchAction":function touchAction(){return this.currrentDigimonData.actionGroup.touch},"attackAction":function attackAction(){return this.currrentDigimonData.actionGroup.attack},"enemyDigimonData":function enemyDigimonData(){return this.enemyDigimon?o.d[this.enemyDigimon]:this.targetBoss?o.d.zeedmillenniumon:o.d[this.randomDigimon]},"computedEnemyDigimonAttr":function computedEnemyDigimonAttr(){var t={"attr":{"level":this.enemyDigimonAttrGain.level}};return Object(u.a)(this.enemyDigimonData,t)},"enemyNormalAction":function enemyNormalAction(){return this.enemyDigimonData.actionGroup.normal},"enemyTouchAction":function enemyTouchAction(){return this.enemyDigimonData.actionGroup.touch},"enemyAttackAction":function enemyAttackAction(){return this.enemyDigimonData.actionGroup.attack},"isCurrentAttack":function isCurrentAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==1&&this.showAttackNormal},"isEnemyAttack":function isEnemyAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==0&&this.showAttackNormal},"currentHpPrecent":function currentHpPrecent(){return 100-this.battleInfo.current.hp/this.computedDigimonAttr.attr.hp*100+"%"},"enemyHpPrecent":function enemyHpPrecent(){return 100-this.battleInfo.enemy.hp/this.computedEnemyDigimonAttr.attr.hp*100+"%"},"currentDigimonInfo":function currentDigimonInfo(){return this.$store.state.currentDigimonInfo}},"data":function data(){return{"DIGIMON_SIZE":d,"currentMiss":!1,"enemyMiss":!1,"cardTitle":[],"cardGainList":[],"touchHandle":0,"enemyHurt":"","currentHurt":"","randomDigimon":"","targetBoss":Math.random()>.97,"timer":null,"time":1,"isAttackNormal":"wzs10"==this.enemyDigimon?1:0,"intervalTime":1e3,"showAttackNormal":!1,"behit":!1,"battleInfo":{"enemy":{"hp":0},"current":{"hp":0}}}},"created":function created(){this.getRandomDigimon()},"mounted":function mounted(){this.initCountDown(),this.initAttr()},"methods":{"cardGainHandle":function cardGainHandle(t){var e,a,n=this;if((e=this.cardTitle).push.apply(e,Object(i.a)(t)),"hp"!=t[0][0])(a=this.cardGainList).push.apply(a,Object(i.a)(t)),"dec"===t[0][0]&&"9999"==t[0][1]&&setTimeout((function(){console.log("移除buff"),n.cardGainList=n.cardGainList.filter((function(t){return!("dec"===t[0]&&"9999"==t[1])}))}),1e4);else{console.log("回血".concat(t[0][1]));var r=parseInt(this.battleInfo.current.hp+this.computedDigimonAttr.attr.hp*(t[0][1]/100));this.battleInfo.current.hp=r>this.computedDigimonAttr.attr.hp?this.computedDigimonAttr.attr.hp:r}},"getRandomDigimon":function getRandomDigimon(){var t=Object.keys(o.d).reduce((function(t,e){return t[e]=e,t}),{}),e=t.agumon,a=t.greymon,n=t.wargreymon,i=t.metalgreymon,r=t.gabumon,s=t.garurumon,m=t.weregarurumon,c=t.metalgarurumon,d=t.patamon,l=t.angemon,h=t.shenshengtianshi,g=t.jiujitianshi,p=t.jiachongshou,f=t.biduoshou,b=t.chaobiduoshou,y=t.jiujibiduoshou,v=t.xiaogou,I=t.dilu,k=t.tiannv,x=t.shenglong,j=t.shenshengtiannv,w=t.balu,D=t.xianrenzhang,_=t.huaxian,C=t.meigui,A=t.biqiu,N=t.baduola,T=t.jialouda,$=t.fenghuang,M=t.gema,O=t.haishi,z=t.zudun,H=t.weijing,E=[e,r,d,p,v,w,A,M];this.currentDigimonInfo.attr.level>=10&&E.push(a,s,l,f,I,D,N,O),this.currentDigimonInfo.attr.level>=30&&E.push(i,n,h,b,k,_,T,z),this.currentDigimonInfo.attr.level>=40&&E.push(m,c,g,y,x,C,$,H,j),this.randomDigimon=E[Object(u.h)(0,E.length-1)]},"initAttr":function initAttr(){var t=this.computedDigimonAttr.attr.hp,e=this.computedEnemyDigimonAttr.attr.hp;this.battleInfo={"enemy":{"hp":e*this.enemyDigimonAttrGain.hp},"current":{"hp":t}}},"initCountDown":function initCountDown(){var t=this;this.timer=setInterval((function(){t.time++,t.time>=3&&t.beginBattle(),3==t.time&&(setTimeout((function(){t.intervalTime=1500,t.initCountDown()}),200),clearInterval(t.timer))}),this.intervalTime)},"beginBattle":function beginBattle(){var t=this;this.isAttackNormal+=1,this.showAttackNormal=!0,setTimeout((function(){t.showAttackNormal=!1,t.handleHit()}),900)},"getHurt":function getHurt(t,e,a){var n=o.o[t.realm].includes(e.realm),i=o.o[e.realm].includes(t.realm),r=t.at*a.at-e.de,s=Math.random()<e.ev/100;return(n&&!i||n&&i)&&("UN"==t.realm?(r+=.1*r,s=Math.random()<e.ev/100):(r+=.3*r,s=Math.random()<(e.ev+10)/100),console.log("克制")),!n&&i&&("UN"==e.realm?(r+=.1*r,s=Math.random()<e.ev/100):(r+=.3*r,s=Math.random()<(e.ev+10)/100),console.log("被克制")),{"hurt":r>0?parseInt(r):0,"miss":s}},"handleHit":function handleHit(){var t=this;if(this.behit=!0,this.isAttackNormal%2==0){var e=this.getHurt(this.computedEnemyDigimonAttr.attr,this.computedDigimonAttr.attr,this.enemyDigimonAttrGain),a=e.hurt;e.miss?(this.enemyHurt="Miss",console.log("Miss")):(this.battleInfo.current.hp-=a>0?a:0,console.log("敌人造成伤害"+a),this.enemyHurt=String(a))}else{var n=this.getHurt(this.computedDigimonAttr.attr,this.computedEnemyDigimonAttr.attr,this.tamerDigimonAttrGain),i=n.hurt;this.touchHandle>10&&(i*=1.5,i=parseInt(i),this.touchHandle=0),n.miss?(this.currentHurt="Miss",console.log("Miss")):(this.battleInfo.enemy.hp-=i>0?i:0,console.log("我方造成伤害"+i),this.currentHurt=String(i))}if(this.battleInfo.current.hp<=0||this.battleInfo.enemy.hp<=0){var r="success";this.battleInfo.current.hp<=0&&(r="fail"),clearInterval(this.timer),setTimeout((function(){t.handleFinish(r)}),800)}setTimeout((function(){t.behit=!1}),300),setTimeout((function(){t.enemyHurt="",t.currentHurt=""}),600)},"handleFinish":function handleFinish(t){var e=this,a=Object(u.d)({"level":this.currentDigimonInfo.attr.level}),i="",o={};if(this.gifs&&"success"===t){var c=this.gifs.type;if("expGain"==c)a*=this.gifs.expGain;else if("jcegg"==c)Math.random()>this.gifs.percent&&(o={"11":this.$store.state.storeItems[11]&&this.$store.state.storeItems[11]+1||1});else if("zsj_card"==c){if(Math.random()>this.gifs.percent){var d=this.$store.state.storeItems[13]&&this.$store.state.storeItems[13]+1||1;d<=10&&(o={"13":d})}}else if("mingyun_card"==c){if(Math.random()>this.gifs.percent){var l=this.$store.state.storeItems[21]&&this.$store.state.storeItems[21]+1||1;l<=10&&(o={"21":l})}}else if("sangshi_card"==c){if(Math.random()>this.gifs.percent){var h=this.$store.state.storeItems[24]&&this.$store.state.storeItems[24]+1||1;h<=10&&(o={"24":h})}}else if("xkangti_card"==c){if(Math.random()>this.gifs.percent){var g=this.$store.state.storeItems[32]&&this.$store.state.storeItems[32]+1||1;g<=10&&(o={"32":g})}}else if("jzz_card"==c){if(Math.random()>this.gifs.percent){var p=this.$store.state.storeItems[26]&&this.$store.state.storeItems[26]+1||1;p<=10&&(o={"26":p})}}else if("dun_card"==c){if(Math.random()>this.gifs.percent){var f=this.$store.state.storeItems[29]&&this.$store.state.storeItems[29]+1||1;f<=10&&(o={"29":f})}}else if("jian_card"==c){if(Math.random()>this.gifs.percent){var b=this.$store.state.storeItems[30]&&this.$store.state.storeItems[30]+1||1;b<=10&&(o={"30":b})}}else if("x_card"==c){if(Math.random()>this.gifs.percent){var y=this.$store.state.storeItems[27]&&this.$store.state.storeItems[27]+1||1;y<=10&&(o={"27":y})}}else if("huo_card"==c){if(Math.random()>this.gifs.percent){var v=this.$store.state.storeItems[40]&&this.$store.state.storeItems[40]+1||1;v<=10&&(o={"40":v})}}else if("guang_card"==c){if(Math.random()>this.gifs.percent){var I=this.$store.state.storeItems[41]&&this.$store.state.storeItems[41]+1||1;I<=10&&(o={"41":I})}}else if("an_card"==c){if(Math.random()>this.gifs.percent){var k=this.$store.state.storeItems[42]&&this.$store.state.storeItems[42]+1||1;k<=10&&(o={"42":k})}}else if("bing_card"==c){if(Math.random()>this.gifs.percent){var x=this.$store.state.storeItems[43]&&this.$store.state.storeItems[43]+1||1;x<=10&&(o={"43":x})}}else if("feng_card"==c){if(Math.random()>this.gifs.percent){var j=this.$store.state.storeItems[44]&&this.$store.state.storeItems[44]+1||1;j<=10&&(o={"44":j})}}else if("gang_card"==c){if(Math.random()>this.gifs.percent){var w=this.$store.state.storeItems[45]&&this.$store.state.storeItems[45]+1||1;w<=10&&(o={"45":w})}}else if("lei_card"==c){if(Math.random()>this.gifs.percent){var D=this.$store.state.storeItems[46]&&this.$store.state.storeItems[46]+1||1;D<=10&&(o={"46":D})}}else if("mu_card"==c){if(Math.random()>this.gifs.percent){var _=this.$store.state.storeItems[47]&&this.$store.state.storeItems[47]+1||1;_<=10&&(o={"47":_})}}else if("shui_card"==c){if(Math.random()>this.gifs.percent){var C=this.$store.state.storeItems[48]&&this.$store.state.storeItems[48]+1||1;C<=10&&(o={"48":C})}}else if("tu_card"==c){if(Math.random()>this.gifs.percent){var A=this.$store.state.storeItems[49]&&this.$store.state.storeItems[49]+1||1;A<=10&&(o={"49":A})}}else if("an2_card"==c){if(Math.random()>this.gifs.percent){var N=this.$store.state.storeItems[54]&&this.$store.state.storeItems[54]+1||1;N<=10&&(o={"54":N})}}else if("shuimu_card"==c){if(Math.random()>this.gifs.percent){var T=this.$store.state.storeItems[22]&&this.$store.state.storeItems[22]+1||1;T<=100&&(o={"22":T})}}else if("chilun_card"==c){if(Math.random()>this.gifs.percent){var $=this.$store.state.storeItems[23]&&this.$store.state.storeItems[23]+1||1;$<=100&&(o={"23":$})}}else if("aogudu_card"==c){if(Math.random()>this.gifs.percent){var M=this.$store.state.storeItems[25]&&this.$store.state.storeItems[25]+1||1;M<=100&&(o={"25":M})}}else if("heianta_card"==c){if(Math.random()>this.gifs.percent){var O=this.$store.state.storeItems[31]&&this.$store.state.storeItems[31]+1||1;O<=100&&(o={"31":O})}}else if("hjegg"==c){if(Math.random()>this.gifs.percent){var z=this.$store.state.storeItems[12]&&this.$store.state.storeItems[12]+1||1;z<=100&&(o={"12":z})}}else if("testegg"==c){if(Math.random()>this.gifs.percent){var H=this.$store.state.storeItems[20]&&this.$store.state.storeItems[20]+1||1;H<=100&&(o={"20":H})}}else if("mowegg"==c){if(Math.random()>this.gifs.percent){var E=this.$store.state.storeItems[14]&&this.$store.state.storeItems[14]+1||1;E<=100&&(o={"14":E})}}else if("aoguduxegg"==c){if(Math.random()>this.gifs.percent){var G=this.$store.state.storeItems[28]&&this.$store.state.storeItems[28]+1||1;G<=100&&(o={"28":G})}}else if("GET_ITEM"==c&&Math.random()>this.gifs.percent){var X=this.gifs,Y=X.itemId,S=X.count,L=X.countRandom;if(void 0!==L&&L){var B=Object(u.h)(S[0],S[1]);console.log("蓝卡".concat(B));var R=this.$store.state.storeItems[Y]&&this.$store.state.storeItems[Y]+B||B;o=Object(n.a)({},Y,R)}else{var P=this.$store.state.storeItems[Y]&&this.$store.state.storeItems[Y]+S||S;o=Object(n.a)({},Y,P)}}}if(!this.enemyDigimon&&this.targetBoss)if((a*=5)<3e3&&(a=3e3),Math.random()<.3){var q=this.$store.state.storeItems[15]&&this.$store.state.storeItems[15]+1||1;q<=10&&(o=Object(r.a)(Object(r.a)({},o),{},{"15":q}))}else if(Math.random()<.1){var K=this.$store.state.storeItems[16]&&this.$store.state.storeItems[16]+1||1;K<=10&&(o=Object(r.a)(Object(r.a)({},o),{},{"16":K}))}var F=(new Date).getHours();F>=12&&F<=22&&(a*=5),this.allBuff&&this.allBuff.dabianshou&&(a+=Math.round(a*parseFloat(this.allBuff.dabianshou)));var Z=this.enemyDigimon&&Math.random()>.98,U=this.enemyDigimon&&Math.random()>.9;"success"==t&&(Z||U)&&(i+="".concat(Z?" 获得数码蛋 ":""),i+="".concat(U?"获得卡片":"")),Object(s.showToast)({"title":"success"==t?"获得".concat(a,"经验").concat(i):"打不过？就这就这","icon":"none","duration":2e3,"success":function success(i){if("success"==t){var c=Object(u.b)({"level":e.currentDigimonInfo.attr.level,"exp":a,"nowExp":e.currentDigimonInfo.attr.exp});if("shijieshu"===e.enemyDigimon&&Object(s.showModal)({"title":"击败世界树了啊","content":"交流群：961490006 不要随意公开\n携带该码可进群：".concat(+new Date),"confirmText":"欢迎加入"}),o){var d=Object(r.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},d),o))}if(Z){var l=Object(r.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},l),{},{"1":l[1]&&l[1]+1||1}))}if(U){var h=Object(r.a)({},e.$store.state.storeItems),g=Object.values(m.a).filter((function(t){return"card"===t.type})),p=g[Object(u.h)(0,g.length-1)].id;e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},h),{},Object(n.a)({},p,h[p]&&h[p]+1||1)))}e.$store.dispatch("updateCurrentDigimonInfo",{"attr":Object(r.a)(Object(r.a)({},e.currentDigimonInfoattr),{},{"exp":c.exp,"level":c.level}),"name":e.currentDigimonInfo.name})}setTimeout((function(){e.finallyCallback?e.finallyCallback(t):e.$store.state.sceneType="normal"}),800)}})}}},h=(a(3359),a(86)),g=Object(h.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("taro-view",{"staticClass":"digimon-battle"},[t.time<=2?a("taro-view",{"staticClass":"count-down"},[t._v("\n    "+t._s(3-t.time)+"\n  ")]):t._e(),t._v(" "),a("taro-view",{"staticClass":"kz-title"},[a("taro-text",{"class":{"active":"被克制"==t.isKz}},[t._v(t._s(t.computedEnemyDigimonAttr.attr.realm))]),t._v(" vs "),a("taro-text",{"class":{"active":"克制"==t.isKz}},[t._v(t._s(t.computedDigimonAttr.attr.realm))])],1),t._v(" "),a("taro-view",{"staticClass":"battle-container","style":{"backgroundImage":"url("+t.battelBackground+")","backgroundSize":"96%","backgroundRepeat":"no-repeat","backgroundPosition":"50% 40%"}},[a("taro-view",{"staticClass":"hp-box"},[a("taro-view",{"staticClass":"hp-item"},[a("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.enemyHpPrecent+")"}})],1),t._v(" "),a("taro-view",{"staticClass":"hp-hurt hurt-left","class":{"active":!!t.currentHurt}},[t._v(t._s(t.currentHurt))]),t._v(" "),a("taro-view",{"staticClass":"hp-item"},[a("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.currentHpPrecent+")"}})],1),t._v(" "),a("taro-view",{"staticClass":"hp-hurt hurt-right","class":{"active":!!t.enemyHurt}},[t._v(t._s(t.enemyHurt))])],1),t._v(" "),a("taro-view",{"staticClass":"digimon-box enemy-digimon","style":t.enemyDigimonSize},[t.isEnemyAttack?t._e():a("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyNormalAction[0]}}),t._v(" "),t.isEnemyAttack?a("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyTouchAction[0]}}):t._e(),t._v(" "),a("taro-image",{"staticClass":"attack-normal","class":{"active":t.isEnemyAttack},"attrs":{"src":t.enemyAttackAction[0]}})],1),t._v(" "),a("taro-view",{"staticClass":"digimon-box current-digimon","style":t.currentDigimonSize,"on":{"tap":function(e){t.touchHandle++}}},[t.isCurrentAttack?t._e():a("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.normalAction[0]}}),t._v(" "),t.isCurrentAttack?a("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.touchAction[0]}}):t._e(),t._v(" "),a("taro-image",{"staticClass":"attack-normal","class":{"active":t.isCurrentAttack&&t.touchHandle<10,"bigactive":t.isCurrentAttack&&t.touchHandle>10},"attrs":{"src":t.attackAction[0]}})],1)],1),t._v(" "),a("use-card",{"on":{"card-gain":t.cardGainHandle}})],1)}),[],!1,null,null,null);e.default=g.exports},"90":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=function gimg(t){try{return a(92)("./".concat(t))}catch(t){return console.warn(t),""}},i={"1":{"id":1,"name":"数码蛋","img":n("eggs/01.png"),"maxNum":100,"type":"egg","useType":"egg","descript":"普通的数码蛋 可以随机获得一个数码兽"},"2":{"id":2,"name":"蓝卡","img":n("card/bcard.jpg"),"maxNum":100,"type":"card","useType":"blueCard","descript":"蓝卡：全属性强化"},"3":{"id":3,"name":"at增益30%","img":n("card/at.jpg"),"maxNum":100,"type":"card","useType":"at_30","descript":"at增加30%"},"4":{"id":4,"name":"at增益50%","img":n("card/at3.jpeg"),"maxNum":100,"type":"card","useType":"at_50","descript":"at增加50%"},"5":{"id":5,"name":"atde增益","img":n("card/atde.jpeg"),"maxNum":100,"type":"card","useType":"at_20,de_20","descript":"at/de增加30%"},"6":{"id":6,"name":"de增益99","img":n("card/de.jpg"),"maxNum":100,"type":"card","useType":"dec_99","descript":"de增加99"},"7":{"id":7,"name":"de增益999","img":n("card/de999.jpeg"),"maxNum":100,"type":"card","useType":"dec_999","descript":"de增加999"},"8":{"id":8,"name":"de增益9999","img":n("card/de9999.jpeg"),"maxNum":100,"type":"card","useType":"dec_9999","descript":"10秒内 de增加9999"},"9":{"id":9,"name":"hp回复50%","img":n("card/hp50.jpeg"),"maxNum":100,"type":"card","useType":"hp_50","descript":"恢复生命值50%"},"10":{"id":10,"name":"hp回复100%","img":n("card/hp100.jpg"),"maxNum":100,"type":"card","useType":"hp_100","descript":"恢复生命值100%"},"11":{"id":11,"name":"数码蛋","img":n("eggs/04.png"),"maxNum":100,"type":"egg","useType":"jczzegg","descript":"交错战争数码蛋"},"12":{"id":12,"name":"数码蛋","img":n("eggs/05.png"),"maxNum":100,"type":"egg","useType":"hjqsegg","descript":"皇家骑士副本限定数码蛋"},"13":{"id":13,"name":"中世纪红莲怪物卡","img":n("card/zsj.jpg"),"maxNum":100,"type":"useCard","useType":"zsjCard","descript":"任务:请击败红莲骑士兽凑齐十张中世纪红莲卡片"},"14":{"id":14,"name":"数码蛋","img":n("eggs/06.png"),"maxNum":100,"type":"egg","useType":"mowegg","descript":"七魔王限定数码蛋"},"15":{"id":15,"name":"暗龙怪物卡","img":n("card/anlong.jpg"),"maxNum":10,"type":"useCard","useType":"anlongCard","descript":"任务:击败最终千年兽凑齐十张暗龙兽卡片"},"16":{"id":16,"name":"千年怪物卡","img":n("card/qiannian.jpg"),"maxNum":10,"type":"useCard","useType":"qianinanCard","descript":"任务:击败最终千年兽凑齐十张千年兽卡片"},"17":{"id":17,"name":"金甲龙X怪物卡","img":n("card/jjlx.jpg"),"maxNum":10,"type":"useCard","useType":"jjlxCard","descript":"任务:击败金甲龙兽X凑齐十张金甲龙兽X抗体卡片"},"18":{"id":18,"name":"数码蛋","img":n("eggs/07.png"),"maxNum":100,"type":"egg","useType":"hjqsxegg","descript":"皇家骑士X副本限定数码蛋"},"19":{"id":19,"name":"数码蛋","img":n("eggs/08.png"),"maxNum":100,"type":"egg","useType":"sssegg","descript":"最后的数码蛋"},"20":{"id":20,"name":"数码蛋","img":n("eggs/09.png"),"maxNum":100,"type":"egg","useType":"testegg","descript":"黑暗四天王限定蛋"},"21":{"id":21,"name":"命运的装甲进化","img":n("card/mingyun.png"),"maxNum":10,"type":"useCard","useType":"mingyunCard","descript":"任务:请击败金甲龙兽凑齐十张命运的装甲蛋卡片"},"22":{"id":22,"name":"水母兽的资料","img":n("card/shuimu.jpg"),"maxNum":100,"type":"useCard","useType":"shuimuCard","descript":"任务:超恶魔兽逆袭副本击败任意怪凑齐一百张水母兽卡片"},"23":{"id":23,"name":"黑暗齿轮之力","img":n("card/chilun.jpeg"),"maxNum":100,"type":"useCard","useType":"chilunCard","descript":"任务:在四天王副本凑齐100张黑暗齿轮卡片"},"24":{"id":24,"name":"丧尸暴龙兽","img":n("card/sangshi.jpeg"),"maxNum":10,"type":"useCard","useType":"sangshiCard","descript":"任务:请击败丧尸暴龙兽凑齐十张丧尸暴龙兽卡片"},"25":{"id":25,"name":"魔王のX程序","img":n("card/aogudu.jpeg"),"maxNum":100,"type":"useCard","useType":"aoguduCard","descript":"任务:在奥古杜X副本收集100张魔王のX程序卡片"},"26":{"id":26,"name":"奥米加兽抉择者","img":n("card/jzz.jpg"),"maxNum":10,"type":"useCard","useType":"jzzCard","descript":"任务:请击败奥古杜兽X凑齐十张抉择者卡片"},"27":{"id":27,"name":"X程序暴龙机","img":n("card/x.jpeg"),"maxNum":10,"type":"useCard","useType":"xCard","descript":"任务:请击败杰斯X凑齐十张X程序暴龙机"},"28":{"id":28,"name":"数码蛋","img":n("eggs/10.png"),"maxNum":100,"type":"egg","useType":"aoguduxegg","descript":"奥古杜X本限定蛋"},"29":{"id":29,"name":"暴龙机（盾）","img":n("card/dun.png"),"maxNum":10,"type":"useCard","useType":"dunCard","descript":"任务:在四圣兽副本收集十张暴龙机（盾）"},"30":{"id":30,"name":"暴龙机（剑）","img":n("card/jian.png"),"maxNum":10,"type":"useCard","useType":"jianCard","descript":"任务:击败黄龙兽收集十张暴龙机（剑）"},"31":{"id":31,"name":"黑暗塔","img":n("card/heianta.jpeg"),"maxNum":100,"type":"useCard","useType":"heiantaCard","descript":"任务:在七魔王本收集100张黑暗塔"},"32":{"id":32,"name":"X抗体全属性增加70%","img":n("card/xkangti.jpeg"),"maxNum":5,"type":"card","useType":"at_70,de_70","descript":"X抗体全属性增加70%"},"33":{"id":33,"name":"电波暴龙机","img":n("card/digivice.jpeg"),"maxNum":10,"type":"card","useType":"at_20,de_30","descript":"电波暴龙机增值"},"34":{"id":34,"name":"D3暴龙机","img":n("card/d3.jpeg"),"maxNum":10,"type":"card","useType":"at_15,de_50","descript":"D3暴龙机增值"},"35":{"id":35,"name":"D-ARK暴龙机","img":n("card/ark.jpeg"),"maxNum":10,"type":"card","useType":"at_60,de_10","descript":"D-ARK暴龙机增值"},"36":{"id":36,"name":"数码扫描器","img":n("card/saomiaoqi.jpeg"),"maxNum":10,"type":"card","useType":"at_45,de_20","descript":"数码扫描器增值"},"37":{"id":37,"name":"IC暴龙机","img":n("card/ic.jpeg"),"maxNum":10,"type":"card","useType":"at_180,de_-100","descript":"IC暴龙机增值"},"38":{"id":38,"name":"Xros Leader","img":n("card/xros.jpeg"),"maxNum":10,"type":"card","useType":"at_-20,de_80","descript":"Xros Leader增值"},"39":{"id":39,"name":"徽章钥匙","img":n("card/yaoshi.jpeg"),"maxNum":10,"type":"card","useType":"hp_70","descript":"徽章钥匙增值"},"40":{"id":40,"name":"斗士之魂（火）","img":n("card/huo.jpg"),"maxNum":10,"type":"useCard","useType":"huoCard","descript":"任务:在十斗士副本收集10个斗士之魂(火)"},"41":{"id":41,"name":"斗士之魂（光）","img":n("card/guang.jpg"),"maxNum":10,"type":"useCard","useType":"guangCard","descript":"任务:在十斗士副本收集10个斗士之魂(光)"},"42":{"id":42,"name":"斗士之魂（暗）","img":n("card/an.jpg"),"maxNum":10,"type":"useCard","useType":"anCard","descript":"任务:在十斗士副本收集10个斗士之魂(暗)"},"43":{"id":43,"name":"斗士之魂（冰）","img":n("card/bing.jpg"),"maxNum":10,"type":"useCard","useType":"bingCard","descript":"任务:在十斗士副本收集10个斗士之魂(冰)"},"44":{"id":44,"name":"斗士之魂（风）","img":n("card/feng.jpg"),"maxNum":10,"type":"useCard","useType":"fengCard","descript":"任务:在十斗士副本收集10个斗士之魂(风)"},"45":{"id":45,"name":"斗士之魂（钢）","img":n("card/gang.jpg"),"maxNum":10,"type":"useCard","useType":"gangCard","descript":"任务:在十斗士副本收集10个斗士之魂(钢)"},"46":{"id":46,"name":"斗士之魂（雷）","img":n("card/lei.jpg"),"maxNum":10,"type":"useCard","useType":"leiCard","descript":"任务:在十斗士副本收集10个斗士之魂(雷)"},"47":{"id":47,"name":"斗士之魂（木）","img":n("card/mu.jpg"),"maxNum":10,"type":"useCard","useType":"muCard","descript":"任务:在十斗士副本收集10个斗士之魂(木)"},"48":{"id":48,"name":"斗士之魂（水）","img":n("card/shui.jpg"),"maxNum":10,"type":"useCard","useType":"shuiCard","descript":"任务:在十斗士副本收集10个斗士之魂(水)"},"49":{"id":49,"name":"斗士之魂（土）","img":n("card/tu.jpg"),"maxNum":10,"type":"useCard","useType":"tuCard","descript":"任务:在十斗士副本收集10个斗士之魂(土)"},"50":{"id":50,"name":"白帝剑","img":n("card/baidi.jpg"),"maxNum":10,"type":"card","useType":"at_100","descript":"奥米茄之剑(AT+100%)"},"51":{"id":51,"name":"V驯兽师01","img":n("card/baidi.jpg"),"maxNum":10,"type":"card","useType":"at_10,de_99,hp_30","descript":"V驯兽师暴龙机增益"},"52":{"id":52,"name":"神圣指环","img":n("card/huan.jpeg"),"maxNum":10,"type":"card","useType":"at_50,de_70","descript":"神圣之环增益"},"53":{"id":53,"name":"恐龙克星","img":n("card/klkx.jpeg"),"maxNum":10,"type":"card","useType":"at_120,de_-30","descript":"恐龙克星(AT+120%)(DE-30%)"},"54":{"id":54,"name":"斗士之魂（暗黑）","img":n("card/an2.jpg"),"maxNum":10,"type":"useCard","useType":"an2Card","descript":"任务:在十斗士副本收集10个斗士之魂(暗黑兽)"}}},"91":function(t,e,a){var n=a(21),i=a(99);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={"insert":"head","singleton":!1},s=(n(i,r),i.locals?i.locals:{});t.exports=s},"98":function(t,e,a){"use strict";a(91)},"99":function(t,e,a){(e=a(22)(!1)).push([t.i,".use-card {\n  position: absolute;\n  width: 100vw;\n  height: 8.53333rem;\n  bottom: 0;\n  left: 0;\n}\n.use-card .card-blj {\n  width: 12.8rem;\n  height: 14.656rem;\n  position: absolute;\n  top: -45vh;\n  left: 50%;\n  margin-left: -10.24rem;\n  -webkit-transition: 0.2s ease;\n  -o-transition: 0.2s ease;\n  transition: 0.2s ease;\n  z-index: 9999;\n  -webkit-transform: translateX(-100vw);\n      -ms-transform: translateX(-100vw);\n          transform: translateX(-100vw);\n}\n.use-card .card-blj.active {\n  -webkit-transform: translateX(0);\n      -ms-transform: translateX(0);\n          transform: translateX(0);\n}\n.use-card .current-item {\n  width: 8.53333rem;\n  height: 12.288rem;\n  position: absolute;\n  top: -40vh;\n  right: 50%;\n  margin-right: -9.17333rem;\n  -webkit-transform: translateY(90vh);\n      -ms-transform: translateY(90vh);\n          transform: translateY(90vh);\n}\n.use-card .current-item .current-img {\n  width: 8.53333rem;\n  height: 12.288rem;\n}\n.use-card .current-item.active {\n  -webkit-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -o-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -webkit-transform: translateY(-90vh);\n      -ms-transform: translateY(-90vh);\n          transform: translateY(-90vh);\n  -webkit-filter: brightness(2);\n          filter: brightness(2);\n  -webkit-box-shadow: 0 0 0.85333rem #fff;\n          box-shadow: 0 0 0.85333rem #fff;\n}\n.use-card .card-view {\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.use-card .card-view .card-img {\n  width: 3.2rem;\n  height: 4.608rem;\n}\n",""]),t.exports=e}}]);