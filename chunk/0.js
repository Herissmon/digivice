(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"100":function(t,e,n){"use strict";var a=n(0),i=n(8),r=n(90),s=n(88),o={"name":"DbEvent","components":{},"props":{"useType":{"type":String,"default":"normal"}},"data":function data(){return{"currentItem":null,"currentList":[]}},"computed":{"storeItems":function storeItems(){var t=this.$store.state.storeItems;return Object.keys(t).map((function(t){return r.a[t]})).filter((function(t){return"card"===t.type}))}},"mounted":function mounted(){console.log(this.storeItems),this.init()},"methods":{"setItem":function setItem(t){this.currentItem=t},"onClick":function onClick(t,e){var n=this;null==this.currentItem&&(this.currentItem=this.currentList.splice(e,1)[0],this.useItem(t.id),setTimeout((function(){n.currentItem=null,Object(i.showToast)({"title":r.a[t.id].descript,"icon":"none","duration":1e3})}),1e3))},"useItem":function useItem(t){var e=Object(a.a)({},this.$store.state.storeItems);1==e[t]?delete e[t]:e[t]-=1,this.$store.dispatch("updateStoreItems",Object(a.a)({},e));var n="";n="blueCard"==r.a[t].useType?[["at","30"],["de","30"]]:r.a[t].useType.split(",").map((function(t){return t.split("_")})),this.$emit("card-gain",n)},"init":function init(){var t=this;if(0!=this.storeItems.length){var e=this.storeItems.map((function(t,e){return e})),n=e.length>=4?4:e.length;if(e.length>n){for(var i=[],r=0;r<n;r++)i.push(e.splice(Object(s.h)(0,e.length-1),1)[0]);this.currentList=i.reduce((function(e,n){return e.push(Object(a.a)({},t.storeItems[n])),e}),[])}else this.currentList=this.storeItems.map((function(t){return Object(a.a)({},t)}));console.log(this.currentList)}}},"onReady":function onReady(){}},m=(n(98),n(86)),c=Object(m.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("taro-view",{"staticClass":"use-card"},[a("taro-view",{"staticClass":"current-item","class":{"active":t.currentItem&&t.currentItem.id}},[a("taro-image",{"staticClass":"current-img","attrs":{"src":t.currentItem&&t.currentItem.img}})],1),t._v(" "),a("taro-image",{"staticClass":"card-blj","class":{"active":t.currentItem&&t.currentItem.id},"attrs":{"src":n(97)}}),t._v(" "),"normal"==t.useType?a("div",{"staticClass":"card-view"},t._l(t.currentList,(function(e,n){return a("taro-image",{"key":e.id,"staticClass":"card-img","attrs":{"src":e.img},"on":{"tap":function(a){return t.onClick(e,n)}}})})),1):t._e()],1)}),[],!1,null,null,null);e.a=c.exports},"130":function(t,e,n){var a=n(21),i=n(3165);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});t.exports=s},"3164":function(t,e,n){"use strict";n(130)},"3165":function(t,e,n){(e=n(22)(!1)).push([t.i,"@-webkit-keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@-webkit-keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n@keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n.digimon-battle {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.digimon-battle .count-down {\n  color: #fff;\n  font-size: 2.13333rem;\n  width: 100%;\n  top: 3.84rem;\n  text-align: center;\n  position: absolute;\n}\n.digimon-battle .kz-title {\n  position: absolute;\n  top: 6.4rem;\n  left: 0;\n  text-align: center;\n  color: #fff;\n  width: 100%;\n}\n.digimon-battle .kz-title .active {\n  color: #e95014;\n  font-size: 1.70667rem;\n}\n.digimon-battle .battle-container {\n  width: 100%;\n  height: 10.66667rem;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .hp-box {\n  width: 100%;\n  height: 0.256rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n  top: 25%;\n  padding: 0 4%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-filter: blur(0.02133rem);\n          filter: blur(0.02133rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item {\n  width: 1.70667rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(#6a6a6a), to(#434343));\n  background: -webkit-linear-gradient(#6a6a6a, #434343);\n  background: -o-linear-gradient(#6a6a6a, #434343);\n  background: linear-gradient(#6a6a6a, #434343);\n  border: 0.04267rem solid #d5d7d3;\n  border-radius: 0.08533rem;\n  overflow: hidden;\n}\n.digimon-battle .battle-container .hp-box .hp-item .hp-item-inner {\n  background: -webkit-gradient(linear, left top, left bottom, from(#da3c2e), to(#a31c0f));\n  background: -webkit-linear-gradient(#da3c2e, #a31c0f);\n  background: -o-linear-gradient(#da3c2e, #a31c0f);\n  background: linear-gradient(#da3c2e, #a31c0f);\n  height: 0.256rem;\n  width: 1.70667rem;\n  -webkit-transform: translateX(-1.06667rem);\n      -ms-transform: translateX(-1.06667rem);\n          transform: translateX(-1.06667rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item:first-child {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.digimon-battle .battle-container .hp-box .hp-hurt {\n  color: red;\n  font-size: 1.06667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.active {\n  -webkit-transform: translate3d(0, -1.28rem, 0) scale(1.1);\n          transform: translate3d(0, -1.28rem, 0) scale(1.1);\n  opacity: 0.8;\n  -webkit-transition: all 0.35s ease;\n  -o-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-right {\n  position: absolute;\n  top: -0.42667rem;\n  right: 0.64rem;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-left {\n  position: absolute;\n  top: -0.42667rem;\n  left: 0.64rem;\n}\n.digimon-battle .battle-container .digimon-box {\n  width: 2.56rem;\n  height: 2.56rem;\n  position: absolute;\n}\n.digimon-battle .battle-container .digimon-box .behit {\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  opacity: 0.2;\n  -webkit-transform: translateX(0.10667rem);\n      -ms-transform: translateX(0.10667rem);\n          transform: translateX(0.10667rem);\n}\n.digimon-battle .battle-container .digimon-box.enemy-digimon {\n  top: 50%;\n  left: 0.42667rem;\n  -webkit-transform: translateY(-50%) rotateY(180deg);\n          transform: translateY(-50%) rotateY(180deg);\n}\n.digimon-battle .battle-container .digimon-box.current-digimon {\n  top: 50%;\n  right: 0.42667rem;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .digimon-box image,\n.digimon-battle .battle-container .digimon-box img,\n.digimon-battle .battle-container .digimon-box taro-image-core {\n  width: 100%;\n  height: 100%;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal {\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n  right: 2.98667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.active {\n  opacity: 1;\n  -webkit-animation: attackNormal 1s linear alternate;\n          animation: attackNormal 1s linear alternate;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.bigactive {\n  opacity: 1;\n  -webkit-animation: attackZoom 1s linear alternate;\n          animation: attackZoom 1s linear alternate;\n}\n",""]),t.exports=e},"3184":function(t,e,n){"use strict";n.r(e);var a=n(2),i=n(10),r=n(0),s=n(8),o=n(87),m=n(90),c=n(100),u=n(88),l={"wzs10":{"width":"130px","height":"130px","marginLeft":"-30px","marginTop":"-20px"},"beiersita":{"width":"85px","height":"85px","marginRight":"-6px","marginTop":"-10px"}},d={"name":"NumberDisplay","components":{"UseCard":c.a},"props":{"battelBackground":{"type":String,"default":""},"enemyDigimon":{"type":String,"default":""},"enemyAttrGain":{"type":Object,"default":function _default(t){return{}}},"tamerAttrGain":{"type":Object,"default":function _default(t){return{}}},"finallyCallback":{"type":Function,"default":null},"gifs":{"type":Object,"default":null}},"computed":{"enemyDigimonSize":function enemyDigimonSize(){return l[this.enemyDigimon]||""},"currentDigimonSize":function currentDigimonSize(){return l[this.$store.state.tamerData.currentDigimon]||""},"allBuff":function allBuff(){return this.$store.state.buff},"isKz":function isKz(){var t=o.o[this.computedDigimonAttr.attr.realm].includes(this.computedEnemyDigimonAttr.attr.realm),e=o.o[this.computedEnemyDigimonAttr.attr.realm].includes(this.computedDigimonAttr.attr.realm);return t?"克制":e?"被克制":"无"},"currentEvoName":function currentEvoName(){return o.d[this.$store.state.tamerData.currentDigimon].evolutionLineName},"digimonEnhance":function digimonEnhance(){return this.$store.state.enhance||{}},"currentDigimonEnhance":function currentDigimonEnhance(){return this.digimonEnhance[this.currentEvoName]||null},"enemyDigimonAttrGain":function enemyDigimonAttrGain(){return Object(r.a)(Object(r.a)({},o.b),this.enemyAttrGain)},"tamerDigimonAttrGain":function tamerDigimonAttrGain(){return Object(r.a)(Object(r.a)({},o.b),this.tamerAttrGain)},"getTamerData":function getTamerData(){return this.$store.getters.getTamerData},"computedDigimonAttr":function computedDigimonAttr(){var t=this,e=Object(u.a)(this.currrentDigimonData,this.currentDigimonInfo),n=null;if(this.currentDigimonEnhance&&(n=Object.keys(this.currentDigimonEnhance).reduce((function(e,n){return e[n]=t.currentDigimonEnhance[n].reduce((function(t,e){return t+ +e}),0),e}),{})),n)for(var a in n)e.attr[a]="ev"==a?e.attr[a]+n[a]:Math.round(e.attr[a]+e.attr[a]*n[a]/100);return this.cardGainList.forEach((function(t){"dec"===t[0]?(e.attr.de=e.attr.de+parseInt(t[1]),console.log("de增加".concat(t[1]))):(e.attr[t[0]]=parseInt(e.attr[t[0]]+e.attr[t[0]]*(t[1]/100)),console.log("".concat(t[0],"增加").concat(t[1],"%")))})),e},"currrentDigimonData":function currrentDigimonData(){return o.d[this.getTamerData.currentDigimon]},"normalAction":function normalAction(){return this.currrentDigimonData.actionGroup.normal},"touchAction":function touchAction(){return this.currrentDigimonData.actionGroup.touch},"attackAction":function attackAction(){return this.currrentDigimonData.actionGroup.attack},"enemyDigimonData":function enemyDigimonData(){return this.enemyDigimon?o.d[this.enemyDigimon]:this.targetBoss?o.d.zeedmillenniumon:o.d[this.randomDigimon]},"computedEnemyDigimonAttr":function computedEnemyDigimonAttr(){var t={"attr":{"level":this.enemyDigimonAttrGain.level}};return Object(u.a)(this.enemyDigimonData,t)},"enemyNormalAction":function enemyNormalAction(){return this.enemyDigimonData.actionGroup.normal},"enemyTouchAction":function enemyTouchAction(){return this.enemyDigimonData.actionGroup.touch},"enemyAttackAction":function enemyAttackAction(){return this.enemyDigimonData.actionGroup.attack},"isCurrentAttack":function isCurrentAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==1&&this.showAttackNormal},"isEnemyAttack":function isEnemyAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==0&&this.showAttackNormal},"currentHpPrecent":function currentHpPrecent(){return 100-this.battleInfo.current.hp/this.computedDigimonAttr.attr.hp*100+"%"},"enemyHpPrecent":function enemyHpPrecent(){return 100-this.battleInfo.enemy.hp/this.computedEnemyDigimonAttr.attr.hp*100+"%"},"currentDigimonInfo":function currentDigimonInfo(){return this.$store.state.currentDigimonInfo}},"data":function data(){return{"DIGIMON_SIZE":l,"currentMiss":!1,"enemyMiss":!1,"cardTitle":[],"cardGainList":[],"touchHandle":0,"enemyHurt":"","currentHurt":"","randomDigimon":"","targetBoss":Math.random()>.97,"timer":null,"time":1,"isAttackNormal":"wzs10"==this.enemyDigimon?1:0,"intervalTime":1e3,"showAttackNormal":!1,"behit":!1,"battleInfo":{"enemy":{"hp":0},"current":{"hp":0}}}},"created":function created(){this.getRandomDigimon()},"mounted":function mounted(){this.initCountDown(),this.initAttr()},"methods":{"cardGainHandle":function cardGainHandle(t){var e,n,a=this;if((e=this.cardTitle).push.apply(e,Object(i.a)(t)),"hp"!=t[0][0])(n=this.cardGainList).push.apply(n,Object(i.a)(t)),"dec"===t[0][0]&&"9999"==t[0][1]&&setTimeout((function(){console.log("移除buff"),a.cardGainList=a.cardGainList.filter((function(t){return!("dec"===t[0]&&"9999"==t[1])}))}),1e4);else{console.log("回血".concat(t[0][1]));var r=parseInt(this.battleInfo.current.hp+this.computedDigimonAttr.attr.hp*(t[0][1]/100));this.battleInfo.current.hp=r>this.computedDigimonAttr.attr.hp?this.computedDigimonAttr.attr.hp:r}},"getRandomDigimon":function getRandomDigimon(){var t=Object.keys(o.d).reduce((function(t,e){return t[e]=e,t}),{}),e=t.agumon,n=t.greymon,a=t.wargreymon,i=t.metalgreymon,r=t.gabumon,s=t.garurumon,m=t.weregarurumon,c=t.metalgarurumon,l=t.patamon,d=t.angemon,h=t.shenshengtianshi,g=t.jiujitianshi,p=t.jiachongshou,f=t.biduoshou,b=t.chaobiduoshou,y=t.jiujibiduoshou,v=t.xiaogou,k=t.dilu,w=t.tiannv,x=t.shenglong,D=t.shenshengtiannv,I=t.balu,j=t.xianrenzhang,A=t.huaxian,_=t.meigui,N=t.biqiu,C=t.baduola,T=t.jialouda,$=t.fenghuang,O=t.gema,M=t.haishi,z=t.zudun,H=t.weijing,E=[e,r,l,p,v,I,N,O];this.currentDigimonInfo.attr.level>=10&&E.push(n,s,d,f,k,j,C,M),this.currentDigimonInfo.attr.level>=30&&E.push(i,a,h,b,w,A,T,z),this.currentDigimonInfo.attr.level>=40&&E.push(m,c,g,y,x,_,$,H,D),this.randomDigimon=E[Object(u.h)(0,E.length-1)]},"initAttr":function initAttr(){var t=this.computedDigimonAttr.attr.hp,e=this.computedEnemyDigimonAttr.attr.hp;this.battleInfo={"enemy":{"hp":e*this.enemyDigimonAttrGain.hp},"current":{"hp":t}}},"initCountDown":function initCountDown(){var t=this;this.timer=setInterval((function(){t.time++,t.time>=3&&t.beginBattle(),3==t.time&&(setTimeout((function(){t.intervalTime=1500,t.initCountDown()}),200),clearInterval(t.timer))}),this.intervalTime)},"beginBattle":function beginBattle(){var t=this;this.isAttackNormal+=1,this.showAttackNormal=!0,setTimeout((function(){t.showAttackNormal=!1,t.handleHit()}),900)},"getHurt":function getHurt(t,e,n){var a=o.o[t.realm].includes(e.realm),i=o.o[e.realm].includes(t.realm),r=t.at*n.at-e.de,s=Math.random()<e.ev/100;return(a&&!i||a&&i)&&("UN"==t.realm?(r+=.1*r,s=Math.random()<e.ev/100):(r+=.3*r,s=Math.random()<(e.ev+10)/100),console.log("克制")),!a&&i&&("UN"==e.realm?(r+=.1*r,s=Math.random()<e.ev/100):(r+=.3*r,s=Math.random()<(e.ev+10)/100),console.log("被克制")),{"hurt":r>0?parseInt(r):0,"miss":s}},"handleHit":function handleHit(){var t=this;if(this.behit=!0,this.isAttackNormal%2==0){var e=this.getHurt(this.computedEnemyDigimonAttr.attr,this.computedDigimonAttr.attr,this.enemyDigimonAttrGain),n=e.hurt;e.miss?(this.enemyHurt="Miss",console.log("Miss")):(this.battleInfo.current.hp-=n>0?n:0,console.log("敌人造成伤害"+n),this.enemyHurt=String(n))}else{var a=this.getHurt(this.computedDigimonAttr.attr,this.computedEnemyDigimonAttr.attr,this.tamerDigimonAttrGain),i=a.hurt;this.touchHandle>10&&(i*=1.5,i=parseInt(i),this.touchHandle=0),a.miss?(this.currentHurt="Miss",console.log("Miss")):(this.battleInfo.enemy.hp-=i>0?i:0,console.log("我方造成伤害"+i),this.currentHurt=String(i))}if(this.battleInfo.current.hp<=0||this.battleInfo.enemy.hp<=0){var r="success";this.battleInfo.current.hp<=0&&(r="fail"),clearInterval(this.timer),setTimeout((function(){t.handleFinish(r)}),800)}setTimeout((function(){t.behit=!1}),300),setTimeout((function(){t.enemyHurt="",t.currentHurt=""}),600)},"handleFinish":function handleFinish(t){var e=this,n=Object(u.d)({"level":this.currentDigimonInfo.attr.level}),i="",o={};if(this.gifs&&"success"===t){var c=this.gifs.type;if("expGain"==c)n*=this.gifs.expGain;else if("jcegg"==c)Math.random()>this.gifs.percent&&(o={"11":this.$store.state.storeItems[11]&&this.$store.state.storeItems[11]+1||1});else if("zsj_card"==c){if(Math.random()>this.gifs.percent){var l=this.$store.state.storeItems[13]&&this.$store.state.storeItems[13]+1||1;l<=10&&(o={"13":l})}}else if("mingyun_card"==c){if(Math.random()>this.gifs.percent){var d=this.$store.state.storeItems[21]&&this.$store.state.storeItems[21]+1||1;d<=10&&(o={"21":d})}}else if("sangshi_card"==c){if(Math.random()>this.gifs.percent){var h=this.$store.state.storeItems[24]&&this.$store.state.storeItems[24]+1||1;h<=10&&(o={"24":h})}}else if("xkangti_card"==c){if(Math.random()>this.gifs.percent){var g=this.$store.state.storeItems[32]&&this.$store.state.storeItems[32]+1||1;g<=10&&(o={"32":g})}}else if("jzz_card"==c){if(Math.random()>this.gifs.percent){var p=this.$store.state.storeItems[26]&&this.$store.state.storeItems[26]+1||1;p<=10&&(o={"26":p})}}else if("dun_card"==c){if(Math.random()>this.gifs.percent){var f=this.$store.state.storeItems[29]&&this.$store.state.storeItems[29]+1||1;f<=10&&(o={"29":f})}}else if("jian_card"==c){if(Math.random()>this.gifs.percent){var b=this.$store.state.storeItems[30]&&this.$store.state.storeItems[30]+1||1;b<=10&&(o={"30":b})}}else if("dun_card"==c){if(Math.random()>this.gifs.percent){var y=this.$store.state.storeItems[27]&&this.$store.state.storeItems[27]+1||1;y<=10&&(o={"27":y})}}else if("shuimu_card"==c){if(Math.random()>this.gifs.percent){var v=this.$store.state.storeItems[22]&&this.$store.state.storeItems[22]+1||1;v<=100&&(o={"22":v})}}else if("chilun_card"==c){if(Math.random()>this.gifs.percent){var k=this.$store.state.storeItems[23]&&this.$store.state.storeItems[23]+1||1;k<=100&&(o={"23":k})}}else if("aogudu_card"==c){if(Math.random()>this.gifs.percent){var w=this.$store.state.storeItems[25]&&this.$store.state.storeItems[25]+1||1;w<=100&&(o={"25":w})}}else if("heianta_card"==c){if(Math.random()>this.gifs.percent){var x=this.$store.state.storeItems[31]&&this.$store.state.storeItems[31]+1||1;x<=100&&(o={"31":x})}}else if("hjegg"==c){if(Math.random()>this.gifs.percent){var D=this.$store.state.storeItems[12]&&this.$store.state.storeItems[12]+1||1;D<=100&&(o={"12":D})}}else if("testegg"==c){if(Math.random()>this.gifs.percent){var I=this.$store.state.storeItems[20]&&this.$store.state.storeItems[20]+1||1;I<=100&&(o={"20":I})}}else if("mowegg"==c){if(Math.random()>this.gifs.percent){var j=this.$store.state.storeItems[14]&&this.$store.state.storeItems[14]+1||1;j<=100&&(o={"14":j})}}else if("aoguduxegg"==c){if(Math.random()>this.gifs.percent){var A=this.$store.state.storeItems[28]&&this.$store.state.storeItems[28]+1||1;A<=100&&(o={"28":A})}}else if("GET_ITEM"==c&&Math.random()>this.gifs.percent){var _=this.gifs,N=_.itemId,C=_.count,T=_.countRandom;if(void 0!==T&&T){var $=Object(u.h)(C[0],C[1]);console.log("蓝卡".concat($));var O=this.$store.state.storeItems[N]&&this.$store.state.storeItems[N]+$||$;o=Object(a.a)({},N,O)}else{var M=this.$store.state.storeItems[N]&&this.$store.state.storeItems[N]+C||C;o=Object(a.a)({},N,M)}}}if(!this.enemyDigimon&&this.targetBoss)if((n*=5)<3e3&&(n=3e3),Math.random()<.3){var z=this.$store.state.storeItems[15]&&this.$store.state.storeItems[15]+1||1;z<=10&&(o=Object(r.a)(Object(r.a)({},o),{},{"15":z}))}else if(Math.random()<.1){var H=this.$store.state.storeItems[16]&&this.$store.state.storeItems[16]+1||1;H<=10&&(o=Object(r.a)(Object(r.a)({},o),{},{"16":H}))}var E=(new Date).getHours();E>=12&&E<=22&&(n*=5),this.allBuff&&this.allBuff.dabianshou&&(n+=Math.round(n*parseFloat(this.allBuff.dabianshou)));var G=this.enemyDigimon&&Math.random()>.98,X=this.enemyDigimon&&Math.random()>.9;"success"==t&&(G||X)&&(i+="".concat(G?" 获得数码蛋 ":""),i+="".concat(X?"获得卡片":"")),Object(s.showToast)({"title":"success"==t?"获得".concat(n,"经验").concat(i):"打不过？就这就这","icon":"none","duration":2e3,"success":function success(i){if("success"==t){var c=Object(u.b)({"level":e.currentDigimonInfo.attr.level,"exp":n,"nowExp":e.currentDigimonInfo.attr.exp});if("shijieshu"===e.enemyDigimon&&Object(s.showModal)({"title":"击败世界树了啊","content":"交流群：961490006 不要随意公开\n携带该码可进群：".concat(+new Date),"confirmText":"欢迎加入"}),o){var l=Object(r.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},l),o))}if(G){var d=Object(r.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},d),{},{"1":d[1]&&d[1]+1||1}))}if(X){var h=Object(r.a)({},e.$store.state.storeItems),g=Object.values(m.a).filter((function(t){return"card"===t.type})),p=g[Object(u.h)(0,g.length-1)].id;e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},h),{},Object(a.a)({},p,h[p]&&h[p]+1||1)))}e.$store.dispatch("updateCurrentDigimonInfo",{"attr":Object(r.a)(Object(r.a)({},e.currentDigimonInfoattr),{},{"exp":c.exp,"level":c.level}),"name":e.currentDigimonInfo.name})}setTimeout((function(){e.finallyCallback?e.finallyCallback(t):e.$store.state.sceneType="normal"}),800)}})}}},h=(n(3164),n(86)),g=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("taro-view",{"staticClass":"digimon-battle"},[t.time<=2?n("taro-view",{"staticClass":"count-down"},[t._v("\n    "+t._s(3-t.time)+"\n  ")]):t._e(),t._v(" "),n("taro-view",{"staticClass":"kz-title"},[n("taro-text",{"class":{"active":"被克制"==t.isKz}},[t._v(t._s(t.computedEnemyDigimonAttr.attr.realm))]),t._v(" vs "),n("taro-text",{"class":{"active":"克制"==t.isKz}},[t._v(t._s(t.computedDigimonAttr.attr.realm))])],1),t._v(" "),n("taro-view",{"staticClass":"battle-container","style":{"backgroundImage":"url("+t.battelBackground+")","backgroundSize":"96%","backgroundRepeat":"no-repeat","backgroundPosition":"50% 40%"}},[n("taro-view",{"staticClass":"hp-box"},[n("taro-view",{"staticClass":"hp-item"},[n("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.enemyHpPrecent+")"}})],1),t._v(" "),n("taro-view",{"staticClass":"hp-hurt hurt-left","class":{"active":!!t.currentHurt}},[t._v(t._s(t.currentHurt))]),t._v(" "),n("taro-view",{"staticClass":"hp-item"},[n("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.currentHpPrecent+")"}})],1),t._v(" "),n("taro-view",{"staticClass":"hp-hurt hurt-right","class":{"active":!!t.enemyHurt}},[t._v(t._s(t.enemyHurt))])],1),t._v(" "),n("taro-view",{"staticClass":"digimon-box enemy-digimon","style":t.enemyDigimonSize},[t.isEnemyAttack?t._e():n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyNormalAction[0]}}),t._v(" "),t.isEnemyAttack?n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyTouchAction[0]}}):t._e(),t._v(" "),n("taro-image",{"staticClass":"attack-normal","class":{"active":t.isEnemyAttack},"attrs":{"src":t.enemyAttackAction[0]}})],1),t._v(" "),n("taro-view",{"staticClass":"digimon-box current-digimon","style":t.currentDigimonSize,"on":{"tap":function(e){t.touchHandle++}}},[t.isCurrentAttack?t._e():n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.normalAction[0]}}),t._v(" "),t.isCurrentAttack?n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.touchAction[0]}}):t._e(),t._v(" "),n("taro-image",{"staticClass":"attack-normal","class":{"active":t.isCurrentAttack&&t.touchHandle<10,"bigactive":t.isCurrentAttack&&t.touchHandle>10},"attrs":{"src":t.attackAction[0]}})],1)],1),t._v(" "),n("use-card",{"on":{"card-gain":t.cardGainHandle}})],1)}),[],!1,null,null,null);e.default=g.exports},"90":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=function gimg(t){try{return n(92)("./".concat(t))}catch(t){return console.warn(t),""}},i={"1":{"id":1,"name":"数码蛋","img":a("eggs/01.png"),"maxNum":100,"type":"egg","useType":"egg","descript":"普通的数码蛋 可以随机获得一个数码兽"},"2":{"id":2,"name":"蓝卡","img":a("card/bcard.jpg"),"maxNum":100,"type":"card","useType":"blueCard","descript":"蓝卡：全属性强化"},"3":{"id":3,"name":"at增益30%","img":a("card/at.jpg"),"maxNum":100,"type":"card","useType":"at_30","descript":"at增加30%"},"4":{"id":4,"name":"at增益50%","img":a("card/at3.jpeg"),"maxNum":100,"type":"card","useType":"at_50","descript":"at增加50%"},"5":{"id":5,"name":"atde增益","img":a("card/atde.jpeg"),"maxNum":100,"type":"card","useType":"at_20,de_20","descript":"at/de增加30%"},"6":{"id":6,"name":"de增益99","img":a("card/de.jpg"),"maxNum":100,"type":"card","useType":"dec_99","descript":"de增加99"},"7":{"id":7,"name":"de增益999","img":a("card/de999.jpeg"),"maxNum":100,"type":"card","useType":"dec_999","descript":"de增加999"},"8":{"id":8,"name":"de增益99999","img":a("card/de9999.jpeg"),"maxNum":100,"type":"card","useType":"dec_99999","descript":"10秒内 de增加99999"},"9":{"id":9,"name":"hp回复50%","img":a("card/hp50.jpeg"),"maxNum":100,"type":"card","useType":"hp_50","descript":"恢复生命值50%"},"10":{"id":10,"name":"hp回复100%","img":a("card/hp100.jpg"),"maxNum":100,"type":"card","useType":"hp_100","descript":"恢复生命值100%"},"11":{"id":11,"name":"数码蛋","img":a("eggs/04.png"),"maxNum":100,"type":"egg","useType":"jczzegg","descript":"交错战争数码蛋"},"12":{"id":12,"name":"数码蛋","img":a("eggs/05.png"),"maxNum":100,"type":"egg","useType":"hjqsegg","descript":"皇家骑士副本限定数码蛋"},"13":{"id":13,"name":"中世纪红莲怪物卡","img":a("card/zsj.jpg"),"maxNum":100,"type":"useCard","useType":"zsjCard","descript":"任务:请击败红莲骑士兽凑齐十张中世纪红莲卡片"},"14":{"id":14,"name":"数码蛋","img":a("eggs/06.png"),"maxNum":100,"type":"egg","useType":"mowegg","descript":"七魔王限定数码蛋"},"15":{"id":15,"name":"暗龙怪物卡","img":a("card/anlong.jpg"),"maxNum":10,"type":"useCard","useType":"anlongCard","descript":"任务:击败最终千年兽凑齐十张暗龙兽卡片"},"16":{"id":16,"name":"千年怪物卡","img":a("card/qiannian.jpg"),"maxNum":10,"type":"useCard","useType":"qianinanCard","descript":"任务:击败最终千年兽凑齐十张千年兽卡片"},"17":{"id":17,"name":"金甲龙X怪物卡","img":a("card/jjlx.jpg"),"maxNum":10,"type":"useCard","useType":"jjlxCard","descript":"任务:击败金甲龙兽X凑齐十张金甲龙兽X抗体卡片"},"18":{"id":18,"name":"数码蛋","img":a("eggs/07.png"),"maxNum":100,"type":"egg","useType":"hjqsxegg","descript":"皇家骑士X副本限定数码蛋"},"19":{"id":19,"name":"数码蛋","img":a("eggs/08.png"),"maxNum":100,"type":"egg","useType":"sssegg","descript":"最后的数码蛋"},"20":{"id":20,"name":"数码蛋","img":a("eggs/09.png"),"maxNum":100,"type":"egg","useType":"testegg","descript":"黑暗四天王限定蛋"},"21":{"id":21,"name":"命运的装甲进化","img":a("card/mingyun.png"),"maxNum":10,"type":"useCard","useType":"mingyunCard","descript":"任务:请击败金甲龙兽凑齐十张命运的装甲蛋卡片"},"22":{"id":22,"name":"水母兽的资料","img":a("card/shuimu.jpg"),"maxNum":100,"type":"useCard","useType":"shuimuCard","descript":"任务:超恶魔兽逆袭副本击败任意怪凑齐一百张水母兽卡片"},"23":{"id":23,"name":"黑暗齿轮之力","img":a("card/chilun.jpeg"),"maxNum":100,"type":"useCard","useType":"chilunCard","descript":"任务:在四天王副本凑齐100张黑暗齿轮卡片"},"24":{"id":24,"name":"丧尸暴龙兽","img":a("card/sangshi.jpeg"),"maxNum":10,"type":"useCard","useType":"sangshiCard","descript":"任务:请击败丧尸暴龙兽凑齐十张丧尸暴龙兽卡片"},"25":{"id":25,"name":"魔王のX程序","img":a("card/aogudu.jpeg"),"maxNum":100,"type":"useCard","useType":"aoguduCard","descript":"任务:在奥古杜X副本收集100张魔王のX程序卡片"},"26":{"id":26,"name":"奥米加兽抉择者","img":a("card/jzz.jpg"),"maxNum":10,"type":"useCard","useType":"jzzCard","descript":"任务:请击败奥古杜兽X凑齐十张抉择者卡片"},"27":{"id":27,"name":"X程序暴龙机","img":a("card/x.jpeg"),"maxNum":10,"type":"useCard","useType":"xCard","descript":"任务:请击败杰斯X凑齐十张X程序暴龙机"},"28":{"id":28,"name":"数码蛋","img":a("eggs/10.png"),"maxNum":100,"type":"egg","useType":"aoguduxegg","descript":"奥古杜X本限定蛋"},"29":{"id":29,"name":"暴龙机（盾）","img":a("card/dun.png"),"maxNum":10,"type":"useCard","useType":"dunCard","descript":"任务:在四圣兽副本收集十张暴龙机（盾）"},"30":{"id":30,"name":"暴龙机（剑）","img":a("card/jian.png"),"maxNum":10,"type":"useCard","useType":"jianCard","descript":"任务:击败黄龙兽收集十张暴龙机（剑）"},"31":{"id":31,"name":"黑暗塔","img":a("card/heianta.jpeg"),"maxNum":100,"type":"useCard","useType":"heiantaCard","descript":"任务:在七魔王本收集100张黑暗塔"},"32":{"id":32,"name":"X抗体全属性增加70%","img":a("card/xkangti.jpeg"),"maxNum":5,"type":"card","useType":"at_70,de_70","descript":"X抗体全属性增加70%"},"33":{"id":33,"name":"电波暴龙机","img":a("card/digivice.jpeg"),"maxNum":10,"type":"card","useType":"hp_30,at_20,de_30","descript":"电波暴龙机增值"},"34":{"id":34,"name":"D3暴龙机","img":a("card/d3.jpeg"),"maxNum":10,"type":"card","useType":"hp_15,at_15,de_50","descript":"D3暴龙机增值"},"35":{"id":35,"name":"D-ARK暴龙机","img":a("card/ark.jpeg"),"maxNum":10,"type":"card","useType":"hp_20,at_60","descript":"D-ARK暴龙机增值"},"36":{"id":36,"name":"数码扫描器","img":a("card/saomiaoqi.jpeg"),"maxNum":10,"type":"card","useType":"hp_60,at_10,de_10","descript":"数码扫描器增值"},"37":{"id":37,"name":"IC暴龙机","img":a("card/ic.jpeg"),"maxNum":10,"type":"card","useType":"hp_5,at_70,de_5","descript":"IC暴龙机增值"},"38":{"id":38,"name":"Xros Leader","img":a("card/xros.jpeg"),"maxNum":10,"type":"card","useType":"hp_20,at_20,de_40","descript":"Xros Leader增值"},"39":{"id":39,"name":"徽章钥匙","img":a("card/yaoshi.jpeg"),"maxNum":10,"type":"card","useType":"hp_100,at_10,de_10","descript":"徽章钥匙增值"}}},"91":function(t,e,n){var a=n(21),i=n(99);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});t.exports=s},"98":function(t,e,n){"use strict";n(91)},"99":function(t,e,n){(e=n(22)(!1)).push([t.i,".use-card {\n  position: absolute;\n  width: 100vw;\n  height: 8.53333rem;\n  bottom: 0;\n  left: 0;\n}\n.use-card .card-blj {\n  width: 12.8rem;\n  height: 14.656rem;\n  position: absolute;\n  top: -45vh;\n  left: 50%;\n  margin-left: -10.24rem;\n  -webkit-transition: 0.2s ease;\n  -o-transition: 0.2s ease;\n  transition: 0.2s ease;\n  z-index: 9999;\n  -webkit-transform: translateX(-100vw);\n      -ms-transform: translateX(-100vw);\n          transform: translateX(-100vw);\n}\n.use-card .card-blj.active {\n  -webkit-transform: translateX(0);\n      -ms-transform: translateX(0);\n          transform: translateX(0);\n}\n.use-card .current-item {\n  width: 8.53333rem;\n  height: 12.288rem;\n  position: absolute;\n  top: -40vh;\n  right: 50%;\n  margin-right: -9.17333rem;\n  -webkit-transform: translateY(90vh);\n      -ms-transform: translateY(90vh);\n          transform: translateY(90vh);\n}\n.use-card .current-item .current-img {\n  width: 8.53333rem;\n  height: 12.288rem;\n}\n.use-card .current-item.active {\n  -webkit-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -o-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -webkit-transform: translateY(-90vh);\n      -ms-transform: translateY(-90vh);\n          transform: translateY(-90vh);\n  -webkit-filter: brightness(2);\n          filter: brightness(2);\n  -webkit-box-shadow: 0 0 0.85333rem #fff;\n          box-shadow: 0 0 0.85333rem #fff;\n}\n.use-card .card-view {\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.use-card .card-view .card-img {\n  width: 3.2rem;\n  height: 4.608rem;\n}\n",""]),t.exports=e}}]);