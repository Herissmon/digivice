(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"122":function(t,e,n){var a=n(21),i=n(2197);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});t.exports=s},"123":function(t,e,n){var a=n(21),i=n(2199);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});t.exports=s},"2196":function(t,e,n){"use strict";n(122)},"2197":function(t,e,n){(e=n(22)(!1)).push([t.i,".use-card {\n  position: absolute;\n  width: 100vw;\n  height: 8.53333rem;\n  bottom: 0;\n  left: 0;\n}\n.use-card .card-blj {\n  width: 12.8rem;\n  height: 14.656rem;\n  position: absolute;\n  top: -45vh;\n  left: 50%;\n  margin-left: -10.24rem;\n  -webkit-transition: 0.2s ease;\n  -o-transition: 0.2s ease;\n  transition: 0.2s ease;\n  z-index: 9999;\n  -webkit-transform: translateX(-100vw);\n      -ms-transform: translateX(-100vw);\n          transform: translateX(-100vw);\n}\n.use-card .card-blj.active {\n  -webkit-transform: translateX(0);\n      -ms-transform: translateX(0);\n          transform: translateX(0);\n}\n.use-card .current-item {\n  width: 8.53333rem;\n  height: 12.288rem;\n  position: absolute;\n  top: -40vh;\n  right: 50%;\n  margin-right: -9.17333rem;\n  -webkit-transform: translateY(90vh);\n      -ms-transform: translateY(90vh);\n          transform: translateY(90vh);\n}\n.use-card .current-item .current-img {\n  width: 8.53333rem;\n  height: 12.288rem;\n}\n.use-card .current-item.active {\n  -webkit-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -o-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -webkit-transform: translateY(-90vh);\n      -ms-transform: translateY(-90vh);\n          transform: translateY(-90vh);\n  -webkit-filter: brightness(2);\n          filter: brightness(2);\n  -webkit-box-shadow: 0 0 0.85333rem #fff;\n          box-shadow: 0 0 0.85333rem #fff;\n}\n.use-card .card-view {\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.use-card .card-view .card-img {\n  width: 3.2rem;\n  height: 4.608rem;\n}\n",""]),t.exports=e},"2198":function(t,e,n){"use strict";n(123)},"2199":function(t,e,n){(e=n(22)(!1)).push([t.i,"@-webkit-keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@-webkit-keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n@keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n.digimon-battle {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.digimon-battle .count-down {\n  color: #fff;\n  font-size: 2.13333rem;\n  width: 100%;\n  top: 3.84rem;\n  text-align: center;\n  position: absolute;\n}\n.digimon-battle .battle-container {\n  width: 100%;\n  height: 10.66667rem;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .hp-box {\n  width: 100%;\n  height: 0.256rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n  top: 32%;\n  padding: 0 4%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-filter: blur(0.02133rem);\n          filter: blur(0.02133rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item {\n  width: 1.70667rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(#6a6a6a), to(#434343));\n  background: -webkit-linear-gradient(#6a6a6a, #434343);\n  background: -o-linear-gradient(#6a6a6a, #434343);\n  background: linear-gradient(#6a6a6a, #434343);\n  border: 0.04267rem solid #d5d7d3;\n  border-radius: 0.08533rem;\n  overflow: hidden;\n}\n.digimon-battle .battle-container .hp-box .hp-item .hp-item-inner {\n  background: -webkit-gradient(linear, left top, left bottom, from(#da3c2e), to(#a31c0f));\n  background: -webkit-linear-gradient(#da3c2e, #a31c0f);\n  background: -o-linear-gradient(#da3c2e, #a31c0f);\n  background: linear-gradient(#da3c2e, #a31c0f);\n  height: 0.256rem;\n  width: 1.70667rem;\n  -webkit-transform: translateX(-1.06667rem);\n      -ms-transform: translateX(-1.06667rem);\n          transform: translateX(-1.06667rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item:first-child {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.digimon-battle .battle-container .hp-box .hp-hurt {\n  color: red;\n  font-size: 1.06667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.active {\n  -webkit-transform: translate3d(0, -1.28rem, 0) scale(1.1);\n          transform: translate3d(0, -1.28rem, 0) scale(1.1);\n  opacity: 0.8;\n  -webkit-transition: all 0.35s ease;\n  -o-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-right {\n  position: absolute;\n  top: -0.42667rem;\n  right: 0.64rem;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-left {\n  position: absolute;\n  top: -0.42667rem;\n  left: 0.64rem;\n}\n.digimon-battle .battle-container .digimon-box {\n  width: 2.56rem;\n  height: 2.56rem;\n  position: absolute;\n}\n.digimon-battle .battle-container .digimon-box .behit {\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  opacity: 0.2;\n  -webkit-transform: translateX(0.10667rem);\n      -ms-transform: translateX(0.10667rem);\n          transform: translateX(0.10667rem);\n}\n.digimon-battle .battle-container .digimon-box.enemy-digimon {\n  top: 50%;\n  left: 0.42667rem;\n  -webkit-transform: translateY(-50%) rotateY(180deg);\n          transform: translateY(-50%) rotateY(180deg);\n}\n.digimon-battle .battle-container .digimon-box.current-digimon {\n  top: 50%;\n  right: 0.42667rem;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .digimon-box image,\n.digimon-battle .battle-container .digimon-box img,\n.digimon-battle .battle-container .digimon-box taro-image-core {\n  width: 100%;\n  height: 100%;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal {\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n  right: 2.98667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.active {\n  opacity: 1;\n  -webkit-animation: attackNormal 1s linear alternate;\n          animation: attackNormal 1s linear alternate;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.bigactive {\n  opacity: 1;\n  -webkit-animation: attackZoom 1s linear alternate;\n          animation: attackZoom 1s linear alternate;\n}\n",""]),t.exports=e},"2215":function(t,e,n){"use strict";n.r(e);var a=n(2),i=n(10),r=n(0),s=n(8),o=n(87),c=n(91),m=n(88),l={"name":"DbEvent","components":{},"props":{},"data":function data(){return{"currentItem":null,"currentList":[]}},"computed":{"storeItems":function storeItems(){var t=this.$store.state.storeItems;return Object.keys(t).map((function(t){return c.a[t]})).filter((function(t){return"card"===t.type}))}},"mounted":function mounted(){console.log(this.storeItems),this.init()},"methods":{"onClick":function onClick(t,e){var n=this;null==this.currentItem&&(this.currentItem=this.currentList.splice(e,1)[0],this.useItem(t.id),setTimeout((function(){n.currentItem=null,Object(s.showToast)({"title":c.a[t.id].descript,"icon":"none","duration":1e3})}),1e3))},"useItem":function useItem(t){var e=Object(r.a)({},this.$store.state.storeItems);1==e[t]?delete e[t]:e[t]-=1,this.$store.dispatch("updateStoreItems",Object(r.a)({},e));var n="";n="blueCard"==c.a[t].useType?[["at","30"],["de","30"]]:c.a[t].useType.split(",").map((function(t){return t.split("_")})),this.$emit("card-gain",n)},"init":function init(){var t=this;if(0!=this.storeItems.length){var e=this.storeItems.map((function(t,e){return e})),n=e.length>=4?4:e.length;if(e.length>n){for(var a=[],i=0;i<n;i++)a.push(e.splice(Object(m.h)(0,e.length-1),1)[0]);this.currentList=a.reduce((function(e,n){return e.push(Object(r.a)({},t.storeItems[n])),e}),[])}else this.currentList=this.storeItems.map((function(t){return Object(r.a)({},t)}));console.log(this.currentList)}}},"onReady":function onReady(){}},u=(n(2196),n(86)),h={"name":"NumberDisplay","components":{"UseCard":Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("taro-view",{"staticClass":"use-card"},[a("taro-view",{"staticClass":"current-item","class":{"active":t.currentItem&&t.currentItem.id}},[a("taro-image",{"staticClass":"current-img","attrs":{"src":t.currentItem&&t.currentItem.img}})],1),t._v(" "),a("taro-image",{"staticClass":"card-blj","class":{"active":t.currentItem&&t.currentItem.id},"attrs":{"src":n(117)}}),t._v(" "),a("div",{"staticClass":"card-view"},t._l(t.currentList,(function(e,n){return a("taro-image",{"key":e.id,"staticClass":"card-img","attrs":{"src":e.img},"on":{"tap":function(a){return t.onClick(e,n)}}})})),1)],1)}),[],!1,null,null,null).exports},"props":{"battelBackground":{"type":String,"default":""},"enemyDigimon":{"type":String,"default":""},"enemyAttrGain":{"type":Object,"default":function _default(t){return{}}},"tamerAttrGain":{"type":Object,"default":function _default(t){return{}}},"finallyCallback":{"type":Function,"default":null},"gifs":{"type":Object,"default":null}},"computed":{"allBuff":function allBuff(){return this.$store.state.buff},"currentEvoName":function currentEvoName(){return o.c[this.$store.state.tamerData.currentDigimon].evolutionLineName},"digimonEnhance":function digimonEnhance(){return this.$store.state.enhance||{}},"currentDigimonEnhance":function currentDigimonEnhance(){return this.digimonEnhance[this.currentEvoName]||null},"enemyDigimonAttrGain":function enemyDigimonAttrGain(){return Object(r.a)(Object(r.a)({},o.a),this.enemyAttrGain)},"tamerDigimonAttrGain":function tamerDigimonAttrGain(){return Object(r.a)(Object(r.a)({},o.a),this.tamerAttrGain)},"getTamerData":function getTamerData(){return this.$store.getters.getTamerData},"computedDigimonAttr":function computedDigimonAttr(){var t=this,e=Object(m.a)(this.currrentDigimonData,this.currentDigimonInfo),n=null;if(this.currentDigimonEnhance&&(n=Object.keys(this.currentDigimonEnhance).reduce((function(e,n){return e[n]=t.currentDigimonEnhance[n].reduce((function(t,e){return t+ +e}),0),e}),{})),n)for(var a in n)e.attr[a]=Math.round(e.attr[a]+e.attr[a]*n[a]/100);return this.cardGainList.forEach((function(t){"dec"===t[0]?(e.attr.de=e.attr.de+parseInt(t[1]),console.log("de增加".concat(t[1]))):(e.attr[t[0]]=parseInt(e.attr[t[0]]+e.attr[t[0]]*(t[1]/100)),console.log("".concat(t[0],"增加").concat(t[1],"%")))})),e},"currrentDigimonData":function currrentDigimonData(){return o.c[this.getTamerData.currentDigimon]},"normalAction":function normalAction(){return this.currrentDigimonData.actionGroup.normal},"touchAction":function touchAction(){return this.currrentDigimonData.actionGroup.touch},"attackAction":function attackAction(){return this.currrentDigimonData.actionGroup.attack},"enemyDigimonData":function enemyDigimonData(){return this.enemyDigimon?o.c[this.enemyDigimon]:this.targetBoss?o.c.zeedmillenniumon:o.c[this.randomDigimon]},"computedEnemyDigimonAttr":function computedEnemyDigimonAttr(){var t={"attr":{"level":this.enemyDigimonAttrGain.level}};return Object(m.a)(this.enemyDigimonData,t)},"enemyNormalAction":function enemyNormalAction(){return this.enemyDigimonData.actionGroup.normal},"enemyTouchAction":function enemyTouchAction(){return this.enemyDigimonData.actionGroup.touch},"enemyAttackAction":function enemyAttackAction(){return this.enemyDigimonData.actionGroup.attack},"isCurrentAttack":function isCurrentAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==1&&this.showAttackNormal},"isEnemyAttack":function isEnemyAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==0&&this.showAttackNormal},"currentHpPrecent":function currentHpPrecent(){return 100-this.battleInfo.current.hp/this.computedDigimonAttr.attr.hp*100+"%"},"enemyHpPrecent":function enemyHpPrecent(){return 100-this.battleInfo.enemy.hp/this.computedEnemyDigimonAttr.attr.hp*100+"%"},"currentDigimonInfo":function currentDigimonInfo(){return this.$store.state.currentDigimonInfo}},"data":function data(){return{"cardTitle":[],"cardGainList":[],"touchHandle":0,"enemyHurt":"","currentHurt":"","randomDigimon":"","targetBoss":Math.random()>.97,"timer":null,"time":1,"isAttackNormal":0,"intervalTime":1e3,"showAttackNormal":!1,"behit":!1,"battleInfo":{"enemy":{"hp":0},"current":{"hp":0}}}},"created":function created(){this.getRandomDigimon()},"mounted":function mounted(){this.initCountDown(),this.initAttr()},"methods":{"cardGainHandle":function cardGainHandle(t){var e,n,a=this;if((e=this.cardTitle).push.apply(e,Object(i.a)(t)),"hp"!=t[0][0])(n=this.cardGainList).push.apply(n,Object(i.a)(t)),"dec"===t[0][0]&&"9999"==t[0][1]&&setTimeout((function(){console.log("移除buff"),a.cardGainList=a.cardGainList.filter((function(t){return!("dec"===t[0]&&"9999"==t[1])}))}),1e4);else{console.log("回血".concat(t[0][1]));var r=parseInt(this.battleInfo.current.hp+this.computedDigimonAttr.attr.hp*(t[0][1]/100));this.battleInfo.current.hp=r>this.computedDigimonAttr.attr.hp?this.computedDigimonAttr.attr.hp:r}},"getRandomDigimon":function getRandomDigimon(){var t=Object.keys(o.c).reduce((function(t,e){return t[e]=e,t}),{}),e=t.agumon,n=t.greymon,a=t.wargreymon,i=t.metalgreymon,r=t.gabumon,s=t.garurumon,c=t.weregarurumon,l=t.metalgarurumon,u=t.patamon,h=t.angemon,d=t.shenshengtianshi,g=t.jiujitianshi,f=t.jiachongshou,p=t.biduoshou,b=t.chaobiduoshou,y=t.jiujibiduoshou,v=t.xiaogou,k=t.dilu,w=t.tiannv,D=t.shenglong,j=t.shenshengtiannv,A=t.balu,x=t.xianrenzhang,I=t.huaxian,N=t.meigui,C=t.biqiu,_=t.baduola,O=t.jialouda,T=t.fenghuang,H=t.gema,$=t.haishi,E=t.zudun,G=t.weijing,Y=[e,r,u,f,v,A,C,H];this.currentDigimonInfo.attr.level>=10&&Y.push(n,s,h,p,k,x,_,$),this.currentDigimonInfo.attr.level>=30&&Y.push(i,a,d,b,w,I,O,E),this.currentDigimonInfo.attr.level>=40&&Y.push(c,l,g,y,D,N,T,G,j),this.randomDigimon=Y[Object(m.h)(0,Y.length-1)]},"initAttr":function initAttr(){var t=this.computedDigimonAttr.attr.hp,e=this.computedEnemyDigimonAttr.attr.hp;this.battleInfo={"enemy":{"hp":e*this.enemyDigimonAttrGain.hp},"current":{"hp":t}}},"initCountDown":function initCountDown(){var t=this;this.timer=setInterval((function(){t.time++,t.time>=3&&t.beginBattle(),3==t.time&&(setTimeout((function(){t.intervalTime=1500,t.initCountDown()}),200),clearInterval(t.timer))}),this.intervalTime)},"beginBattle":function beginBattle(){var t=this;this.isAttackNormal+=1,this.showAttackNormal=!0,setTimeout((function(){t.showAttackNormal=!1,t.handleHit()}),900)},"getHurt":function getHurt(t,e,n){var a=t.at*n.at-e.de;return a>0?a:0},"handleHit":function handleHit(){var t=this;if(this.behit=!0,this.isAttackNormal%2==0){var e=this.getHurt(this.computedEnemyDigimonAttr.attr,this.computedDigimonAttr.attr,this.enemyDigimonAttrGain);this.battleInfo.current.hp-=e>0?e:0,console.log("敌人造成伤害"+e),this.enemyHurt=e}else{var n=this.getHurt(this.computedDigimonAttr.attr,this.computedEnemyDigimonAttr.attr,this.tamerDigimonAttrGain);this.touchHandle>10&&(n*=1.5,n=parseInt(n),this.touchHandle=0),this.battleInfo.enemy.hp-=n>0?n:0,console.log("我方造成伤害"+n),this.currentHurt=n}if(this.battleInfo.current.hp<=0||this.battleInfo.enemy.hp<=0){var a="success";this.battleInfo.current.hp<=0&&(a="fail"),clearInterval(this.timer),setTimeout((function(){t.handleFinish(a)}),800)}setTimeout((function(){t.behit=!1}),300),setTimeout((function(){t.enemyHurt="",t.currentHurt=""}),600)},"handleFinish":function handleFinish(t){var e=this,n=Object(m.d)({"level":this.currentDigimonInfo.attr.level}),i="",o={};if(this.gifs&&"success"===t){var l=this.gifs.type;if("expGain"==l)n*=this.gifs.expGain;else if("jcegg"==l)Math.random()>this.gifs.percent&&(o={"11":this.$store.state.storeItems[11]&&this.$store.state.storeItems[11]+1||1});else if("zsj_card"==l){if(Math.random()>this.gifs.percent){var u=this.$store.state.storeItems[13]&&this.$store.state.storeItems[13]+1||1;u<=10&&(o={"13":u})}}else if("hjegg"==l){if(Math.random()>this.gifs.percent){var h=this.$store.state.storeItems[12]&&this.$store.state.storeItems[12]+1||1;h<=100&&(o={"12":h})}}else if("mowegg"==l){if(Math.random()>this.gifs.percent){var d=this.$store.state.storeItems[14]&&this.$store.state.storeItems[14]+1||1;d<=100&&(o={"14":d})}}else if("GET_ITEM"==l&&Math.random()>this.gifs.percent){var g=this.gifs,f=g.itemId,p=g.count,b=this.$store.state.storeItems[f]&&this.$store.state.storeItems[f]+p||p;o=Object(a.a)({},f,b)}}if(!this.enemyDigimon&&this.targetBoss)if((n*=5)<3e3&&(n=3e3),Math.random()<.3){var y=this.$store.state.storeItems[15]&&this.$store.state.storeItems[15]+1||1;y<=10&&(o=Object(r.a)(Object(r.a)({},o),{},{"15":y}))}else if(Math.random()<.1){var v=this.$store.state.storeItems[16]&&this.$store.state.storeItems[16]+1||1;v<=10&&(o=Object(r.a)(Object(r.a)({},o),{},{"16":v}))}var k=(new Date).getHours();k>=18&&k<=21&&(n*=5),this.allBuff&&this.allBuff.dabianshou&&(n+=Math.round(n*parseFloat(this.allBuff.dabianshou)));var w=this.enemyDigimon&&Math.random()>.98,D=this.enemyDigimon&&Math.random()>.9;"success"==t&&(w||D)&&(i+="".concat(w?" 获得数码蛋 ":""),i+="".concat(D?"获得卡片":"")),Object(s.showToast)({"title":"success"==t?"获得".concat(n,"经验").concat(i):"打不过？就这就这","icon":"none","duration":2e3,"success":function success(i){if("success"==t){var l=Object(m.b)({"level":e.currentDigimonInfo.attr.level,"exp":n,"nowExp":e.currentDigimonInfo.attr.exp});if("shijieshu"===e.enemyDigimon&&Object(s.showModal)({"title":"击败世界树了啊","content":"交流群：961490006 不要随意公开\n携带该码可进群：".concat(+new Date),"confirmText":"欢迎加入"}),o){var u=Object(r.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},u),o))}if(w){var h=Object(r.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},h),{},{"1":h[1]&&h[1]+1||1}))}if(D){var d=Object(r.a)({},e.$store.state.storeItems),g=Object.values(c.a).filter((function(t){return"card"===t.type})),f=g[Object(m.h)(0,g.length-1)].id;e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},d),{},Object(a.a)({},f,d[f]&&d[f]+1||1)))}e.$store.dispatch("updateCurrentDigimonInfo",{"attr":Object(r.a)(Object(r.a)({},e.currentDigimonInfoattr),{},{"exp":l.exp,"level":l.level}),"name":e.currentDigimonInfo.name})}setTimeout((function(){e.finallyCallback?e.finallyCallback(t):e.$store.state.sceneType="normal"}),800)}})}}},d=(n(2198),Object(u.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("taro-view",{"staticClass":"digimon-battle"},[t.time<=2?n("taro-view",{"staticClass":"count-down"},[t._v("\n    "+t._s(3-t.time)+"\n  ")]):t._e(),t._v(" "),n("taro-view",{"staticClass":"battle-container","style":{"backgroundImage":"url("+t.battelBackground+")","backgroundSize":"96%","backgroundRepeat":"no-repeat","backgroundPosition":"50% 40%"}},[n("taro-view",{"staticClass":"hp-box"},[n("taro-view",{"staticClass":"hp-item"},[n("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.enemyHpPrecent+")"}})],1),t._v(" "),n("taro-view",{"staticClass":"hp-hurt hurt-left","class":{"active":t.currentHurt>0}},[t._v("-"+t._s(t.currentHurt))]),t._v(" "),n("taro-view",{"staticClass":"hp-item"},[n("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.currentHpPrecent+")"}})],1),t._v(" "),n("taro-view",{"staticClass":"hp-hurt hurt-right","class":{"active":t.enemyHurt>0}},[t._v("-"+t._s(t.enemyHurt))])],1),t._v(" "),n("taro-view",{"staticClass":"digimon-box enemy-digimon"},[t.isEnemyAttack?t._e():n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyNormalAction[0]}}),t._v(" "),t.isEnemyAttack?n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyTouchAction[0]}}):t._e(),t._v(" "),n("taro-image",{"staticClass":"attack-normal","class":{"active":t.isEnemyAttack},"attrs":{"src":t.enemyAttackAction[0]}})],1),t._v(" "),n("taro-view",{"staticClass":"digimon-box current-digimon","on":{"tap":function(e){t.touchHandle++}}},[t.isCurrentAttack?t._e():n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.normalAction[0]}}),t._v(" "),t.isCurrentAttack?n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.touchAction[0]}}):t._e(),t._v(" "),n("taro-image",{"staticClass":"attack-normal","class":{"active":t.isCurrentAttack&&t.touchHandle<10,"bigactive":t.isCurrentAttack&&t.touchHandle>10},"attrs":{"src":t.attackAction[0]}})],1)],1),t._v(" "),n("use-card",{"on":{"card-gain":t.cardGainHandle}})],1)}),[],!1,null,null,null));e.default=d.exports},"91":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=function gimg(t){try{return n(92)("./".concat(t))}catch(t){return console.warn(t),""}},i={"1":{"id":1,"name":"数码蛋","img":a("eggs/01.png"),"maxNum":100,"type":"egg","useType":"egg","descript":"普通的数码蛋 可以随机获得一个数码兽"},"2":{"id":2,"name":"蓝卡","img":a("card/bcard.jpg"),"maxNum":100,"type":"card","useType":"blueCard","descript":"平平无奇的蓝卡"},"3":{"id":3,"name":"at增益","img":a("card/at.jpg"),"maxNum":100,"type":"card","useType":"at_10","descript":"at增加10%"},"4":{"id":4,"name":"at增益30%","img":a("card/at3.jpeg"),"maxNum":100,"type":"card","useType":"at_30","descript":"at增加30%"},"5":{"id":5,"name":"atde增益","img":a("card/atde.jpeg"),"maxNum":100,"type":"card","useType":"at_10,de_10","descript":"at/de增加10%"},"6":{"id":6,"name":"de增益","img":a("card/de.jpg"),"maxNum":100,"type":"card","useType":"de_10","descript":"de增加10%"},"7":{"id":7,"name":"de增益999","img":a("card/de999.jpeg"),"maxNum":100,"type":"card","useType":"dec_999","descript":"de增加999"},"8":{"id":8,"name":"de增益9999","img":a("card/de9999.jpeg"),"maxNum":100,"type":"card","useType":"dec_9999","descript":"10秒内 de增加9999"},"9":{"id":9,"name":"hp回复50%","img":a("card/hp50.jpeg"),"maxNum":100,"type":"card","useType":"hp_50","descript":"恢复生命值50%"},"10":{"id":10,"name":"hp回复100%","img":a("card/hp100.jpg"),"maxNum":100,"type":"card","useType":"hp_100","descript":"恢复生命值100%"},"11":{"id":11,"name":"数码蛋","img":a("eggs/04.png"),"maxNum":100,"type":"egg","useType":"jczzegg","descript":"交错战争数码蛋"},"12":{"id":12,"name":"数码蛋","img":a("eggs/05.png"),"maxNum":100,"type":"egg","useType":"hjqsegg","descript":"皇家骑士副本限定数码蛋"},"13":{"id":13,"name":"中世纪红莲怪物卡","img":a("card/zsj.jpg"),"maxNum":100,"type":"useCard","useType":"zsjCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"14":{"id":14,"name":"数码蛋","img":a("eggs/06.png"),"maxNum":100,"type":"egg","useType":"mowegg","descript":"七魔王限定数码蛋"},"15":{"id":15,"name":"暗龙怪物卡","img":a("card/anlong.jpg"),"maxNum":10,"type":"useCard","useType":"anlongCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"16":{"id":16,"name":"千年怪物卡","img":a("card/qiannian.jpg"),"maxNum":10,"type":"useCard","useType":"qianinanCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"17":{"id":17,"name":"金甲龙X怪物卡","img":a("card/jjlx.jpg"),"maxNum":10,"type":"useCard","useType":"jjlxCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"18":{"id":18,"name":"数码蛋","img":a("eggs/07.png"),"maxNum":100,"type":"egg","useType":"hjqsxegg","descript":"皇家骑士X副本限定数码蛋"}}}}]);