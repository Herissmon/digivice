(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"100":function(t,e,n){"use strict";var a=n(0),i=n(8),r=n(90),s=n(88),o={"name":"DbEvent","components":{},"props":{"useType":{"type":String,"default":"normal"}},"data":function data(){return{"currentItem":null,"currentList":[]}},"computed":{"storeItems":function storeItems(){var t=this.$store.state.storeItems;return Object.keys(t).map((function(t){return r.a[t]})).filter((function(t){return"card"===t.type}))}},"mounted":function mounted(){console.log(this.storeItems),this.init()},"methods":{"setItem":function setItem(t){this.currentItem=t},"onClick":function onClick(t,e){var n=this;null==this.currentItem&&(this.currentItem=this.currentList.splice(e,1)[0],this.useItem(t.id),setTimeout((function(){n.currentItem=null,Object(i.showToast)({"title":r.a[t.id].descript,"icon":"none","duration":1e3})}),1e3))},"useItem":function useItem(t){var e=Object(a.a)({},this.$store.state.storeItems);1==e[t]?delete e[t]:e[t]-=1,this.$store.dispatch("updateStoreItems",Object(a.a)({},e));var n="";n="blueCard"==r.a[t].useType?[["at","30"],["de","30"]]:r.a[t].useType.split(",").map((function(t){return t.split("_")})),this.$emit("card-gain",n)},"init":function init(){var t=this;if(0!=this.storeItems.length){var e=this.storeItems.map((function(t,e){return e})),n=e.length>=4?4:e.length;if(e.length>n){for(var i=[],r=0;r<n;r++)i.push(e.splice(Object(s.h)(0,e.length-1),1)[0]);this.currentList=i.reduce((function(e,n){return e.push(Object(a.a)({},t.storeItems[n])),e}),[])}else this.currentList=this.storeItems.map((function(t){return Object(a.a)({},t)}));console.log(this.currentList)}}},"onReady":function onReady(){}},c=(n(98),n(86)),m=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("taro-view",{"staticClass":"use-card"},[a("taro-view",{"staticClass":"current-item","class":{"active":t.currentItem&&t.currentItem.id}},[a("taro-image",{"staticClass":"current-img","attrs":{"src":t.currentItem&&t.currentItem.img}})],1),t._v(" "),a("taro-image",{"staticClass":"card-blj","class":{"active":t.currentItem&&t.currentItem.id},"attrs":{"src":n(97)}}),t._v(" "),"normal"==t.useType?a("div",{"staticClass":"card-view"},t._l(t.currentList,(function(e,n){return a("taro-image",{"key":e.id,"staticClass":"card-img","attrs":{"src":e.img},"on":{"tap":function(a){return t.onClick(e,n)}}})})),1):t._e()],1)}),[],!1,null,null,null);e.a=m.exports},"126":function(t,e,n){var a=n(21),i=n(2229);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});t.exports=s},"2228":function(t,e,n){"use strict";n(126)},"2229":function(t,e,n){(e=n(22)(!1)).push([t.i,"@-webkit-keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@-webkit-keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n@keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n.digimon-battle {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.digimon-battle .count-down {\n  color: #fff;\n  font-size: 2.13333rem;\n  width: 100%;\n  top: 3.84rem;\n  text-align: center;\n  position: absolute;\n}\n.digimon-battle .kz-title {\n  position: absolute;\n  top: 6.4rem;\n  left: 0;\n  text-align: center;\n  color: #fff;\n  width: 100%;\n}\n.digimon-battle .kz-title .active {\n  color: #e95014;\n  font-size: 1.70667rem;\n}\n.digimon-battle .battle-container {\n  width: 100%;\n  height: 10.66667rem;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .hp-box {\n  width: 100%;\n  height: 0.256rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n  top: 32%;\n  padding: 0 4%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-filter: blur(0.02133rem);\n          filter: blur(0.02133rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item {\n  width: 1.70667rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(#6a6a6a), to(#434343));\n  background: -webkit-linear-gradient(#6a6a6a, #434343);\n  background: -o-linear-gradient(#6a6a6a, #434343);\n  background: linear-gradient(#6a6a6a, #434343);\n  border: 0.04267rem solid #d5d7d3;\n  border-radius: 0.08533rem;\n  overflow: hidden;\n}\n.digimon-battle .battle-container .hp-box .hp-item .hp-item-inner {\n  background: -webkit-gradient(linear, left top, left bottom, from(#da3c2e), to(#a31c0f));\n  background: -webkit-linear-gradient(#da3c2e, #a31c0f);\n  background: -o-linear-gradient(#da3c2e, #a31c0f);\n  background: linear-gradient(#da3c2e, #a31c0f);\n  height: 0.256rem;\n  width: 1.70667rem;\n  -webkit-transform: translateX(-1.06667rem);\n      -ms-transform: translateX(-1.06667rem);\n          transform: translateX(-1.06667rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item:first-child {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.digimon-battle .battle-container .hp-box .hp-hurt {\n  color: red;\n  font-size: 1.06667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.active {\n  -webkit-transform: translate3d(0, -1.28rem, 0) scale(1.1);\n          transform: translate3d(0, -1.28rem, 0) scale(1.1);\n  opacity: 0.8;\n  -webkit-transition: all 0.35s ease;\n  -o-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-right {\n  position: absolute;\n  top: -0.42667rem;\n  right: 0.64rem;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-left {\n  position: absolute;\n  top: -0.42667rem;\n  left: 0.64rem;\n}\n.digimon-battle .battle-container .digimon-box {\n  width: 2.56rem;\n  height: 2.56rem;\n  position: absolute;\n}\n.digimon-battle .battle-container .digimon-box .behit {\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  opacity: 0.2;\n  -webkit-transform: translateX(0.10667rem);\n      -ms-transform: translateX(0.10667rem);\n          transform: translateX(0.10667rem);\n}\n.digimon-battle .battle-container .digimon-box.enemy-digimon {\n  top: 50%;\n  left: 0.42667rem;\n  -webkit-transform: translateY(-50%) rotateY(180deg);\n          transform: translateY(-50%) rotateY(180deg);\n}\n.digimon-battle .battle-container .digimon-box.current-digimon {\n  top: 50%;\n  right: 0.42667rem;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .digimon-box image,\n.digimon-battle .battle-container .digimon-box img,\n.digimon-battle .battle-container .digimon-box taro-image-core {\n  width: 100%;\n  height: 100%;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal {\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n  right: 2.98667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.active {\n  opacity: 1;\n  -webkit-animation: attackNormal 1s linear alternate;\n          animation: attackNormal 1s linear alternate;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.bigactive {\n  opacity: 1;\n  -webkit-animation: attackZoom 1s linear alternate;\n          animation: attackZoom 1s linear alternate;\n}\n",""]),t.exports=e},"2248":function(t,e,n){"use strict";n.r(e);var a=n(2),i=n(10),r=n(0),s=n(8),o=n(87),c=n(90),m=n(100),l=n(88),u={"name":"NumberDisplay","components":{"UseCard":m.a},"props":{"battelBackground":{"type":String,"default":""},"enemyDigimon":{"type":String,"default":""},"enemyAttrGain":{"type":Object,"default":function _default(t){return{}}},"tamerAttrGain":{"type":Object,"default":function _default(t){return{}}},"finallyCallback":{"type":Function,"default":null},"gifs":{"type":Object,"default":null}},"computed":{"allBuff":function allBuff(){return this.$store.state.buff},"isKz":function isKz(){var t=o.l[this.computedDigimonAttr.attr.realm].includes(this.computedEnemyDigimonAttr.attr.realm),e=o.l[this.computedEnemyDigimonAttr.attr.realm].includes(this.computedDigimonAttr.attr.realm);return t?"克制":e?"被克制":"无"},"currentEvoName":function currentEvoName(){return o.c[this.$store.state.tamerData.currentDigimon].evolutionLineName},"digimonEnhance":function digimonEnhance(){return this.$store.state.enhance||{}},"currentDigimonEnhance":function currentDigimonEnhance(){return this.digimonEnhance[this.currentEvoName]||null},"enemyDigimonAttrGain":function enemyDigimonAttrGain(){return Object(r.a)(Object(r.a)({},o.a),this.enemyAttrGain)},"tamerDigimonAttrGain":function tamerDigimonAttrGain(){return Object(r.a)(Object(r.a)({},o.a),this.tamerAttrGain)},"getTamerData":function getTamerData(){return this.$store.getters.getTamerData},"computedDigimonAttr":function computedDigimonAttr(){var t=this,e=Object(l.a)(this.currrentDigimonData,this.currentDigimonInfo),n=null;if(this.currentDigimonEnhance&&(n=Object.keys(this.currentDigimonEnhance).reduce((function(e,n){return e[n]=t.currentDigimonEnhance[n].reduce((function(t,e){return t+ +e}),0),e}),{})),n)for(var a in n)e.attr[a]="ev"==a?e.attr[a]+n[a]:Math.round(e.attr[a]+e.attr[a]*n[a]/100);return this.cardGainList.forEach((function(t){"dec"===t[0]?(e.attr.de=e.attr.de+parseInt(t[1]),console.log("de增加".concat(t[1]))):(e.attr[t[0]]=parseInt(e.attr[t[0]]+e.attr[t[0]]*(t[1]/100)),console.log("".concat(t[0],"增加").concat(t[1],"%")))})),e},"currrentDigimonData":function currrentDigimonData(){return o.c[this.getTamerData.currentDigimon]},"normalAction":function normalAction(){return this.currrentDigimonData.actionGroup.normal},"touchAction":function touchAction(){return this.currrentDigimonData.actionGroup.touch},"attackAction":function attackAction(){return this.currrentDigimonData.actionGroup.attack},"enemyDigimonData":function enemyDigimonData(){return this.enemyDigimon?o.c[this.enemyDigimon]:this.targetBoss?o.c.zeedmillenniumon:o.c[this.randomDigimon]},"computedEnemyDigimonAttr":function computedEnemyDigimonAttr(){var t={"attr":{"level":this.enemyDigimonAttrGain.level}};return Object(l.a)(this.enemyDigimonData,t)},"enemyNormalAction":function enemyNormalAction(){return this.enemyDigimonData.actionGroup.normal},"enemyTouchAction":function enemyTouchAction(){return this.enemyDigimonData.actionGroup.touch},"enemyAttackAction":function enemyAttackAction(){return this.enemyDigimonData.actionGroup.attack},"isCurrentAttack":function isCurrentAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==1&&this.showAttackNormal},"isEnemyAttack":function isEnemyAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==0&&this.showAttackNormal},"currentHpPrecent":function currentHpPrecent(){return 100-this.battleInfo.current.hp/this.computedDigimonAttr.attr.hp*100+"%"},"enemyHpPrecent":function enemyHpPrecent(){return 100-this.battleInfo.enemy.hp/this.computedEnemyDigimonAttr.attr.hp*100+"%"},"currentDigimonInfo":function currentDigimonInfo(){return this.$store.state.currentDigimonInfo}},"data":function data(){return{"currentMiss":!1,"enemyMiss":!1,"cardTitle":[],"cardGainList":[],"touchHandle":0,"enemyHurt":"","currentHurt":"","randomDigimon":"","targetBoss":Math.random()>.97,"timer":null,"time":1,"isAttackNormal":0,"intervalTime":1e3,"showAttackNormal":!1,"behit":!1,"battleInfo":{"enemy":{"hp":0},"current":{"hp":0}}}},"created":function created(){this.getRandomDigimon()},"mounted":function mounted(){this.initCountDown(),this.initAttr()},"methods":{"cardGainHandle":function cardGainHandle(t){var e,n,a=this;if((e=this.cardTitle).push.apply(e,Object(i.a)(t)),"hp"!=t[0][0])(n=this.cardGainList).push.apply(n,Object(i.a)(t)),"dec"===t[0][0]&&"9999"==t[0][1]&&setTimeout((function(){console.log("移除buff"),a.cardGainList=a.cardGainList.filter((function(t){return!("dec"===t[0]&&"9999"==t[1])}))}),1e4);else{console.log("回血".concat(t[0][1]));var r=parseInt(this.battleInfo.current.hp+this.computedDigimonAttr.attr.hp*(t[0][1]/100));this.battleInfo.current.hp=r>this.computedDigimonAttr.attr.hp?this.computedDigimonAttr.attr.hp:r}},"getRandomDigimon":function getRandomDigimon(){var t=Object.keys(o.c).reduce((function(t,e){return t[e]=e,t}),{}),e=t.agumon,n=t.greymon,a=t.wargreymon,i=t.metalgreymon,r=t.gabumon,s=t.garurumon,c=t.weregarurumon,m=t.metalgarurumon,u=t.patamon,d=t.angemon,h=t.shenshengtianshi,g=t.jiujitianshi,f=t.jiachongshou,p=t.biduoshou,b=t.chaobiduoshou,v=t.jiujibiduoshou,y=t.xiaogou,k=t.dilu,w=t.tiannv,D=t.shenglong,A=t.shenshengtiannv,j=t.balu,x=t.xianrenzhang,I=t.huaxian,_=t.meigui,N=t.biqiu,C=t.baduola,T=t.jialouda,O=t.fenghuang,H=t.gema,$=t.haishi,E=t.zudun,G=t.weijing,M=[e,r,u,f,y,j,N,H];this.currentDigimonInfo.attr.level>=10&&M.push(n,s,d,p,k,x,C,$),this.currentDigimonInfo.attr.level>=30&&M.push(i,a,h,b,w,I,T,E),this.currentDigimonInfo.attr.level>=40&&M.push(c,m,g,v,D,_,O,G,A),this.randomDigimon=M[Object(l.h)(0,M.length-1)]},"initAttr":function initAttr(){var t=this.computedDigimonAttr.attr.hp,e=this.computedEnemyDigimonAttr.attr.hp;this.battleInfo={"enemy":{"hp":e*this.enemyDigimonAttrGain.hp},"current":{"hp":t}}},"initCountDown":function initCountDown(){var t=this;this.timer=setInterval((function(){t.time++,t.time>=3&&t.beginBattle(),3==t.time&&(setTimeout((function(){t.intervalTime=1500,t.initCountDown()}),200),clearInterval(t.timer))}),this.intervalTime)},"beginBattle":function beginBattle(){var t=this;this.isAttackNormal+=1,this.showAttackNormal=!0,setTimeout((function(){t.showAttackNormal=!1,t.handleHit()}),900)},"getHurt":function getHurt(t,e,n){var a=o.l[t.realm].includes(e.realm),i=o.l[e.realm].includes(t.realm),r=t.at*n.at-e.de,s=Math.random()<e.ev/100;return(a&&!i||a&&i)&&("UN"==t.realm?(r+=.1*r,s=Math.random()<e.ev/100):(r+=.3*r,s=Math.random()<(e.ev+10)/100),console.log("克制")),!a&&i&&("UN"==e.realm?(r+=.1*r,s=Math.random()<e.ev/100):(r+=.3*r,s=Math.random()<(e.ev+10)/100),console.log("被克制")),{"hurt":r>0?parseInt(r):0,"miss":s}},"handleHit":function handleHit(){var t=this;if(this.behit=!0,this.isAttackNormal%2==0){var e=this.getHurt(this.computedEnemyDigimonAttr.attr,this.computedDigimonAttr.attr,this.enemyDigimonAttrGain),n=e.hurt;e.miss?(this.enemyHurt="Miss",console.log("Miss")):(this.battleInfo.current.hp-=n>0?n:0,console.log("敌人造成伤害"+n),this.enemyHurt=String(n))}else{var a=this.getHurt(this.computedDigimonAttr.attr,this.computedEnemyDigimonAttr.attr,this.tamerDigimonAttrGain),i=a.hurt;this.touchHandle>10&&(i*=1.5,i=parseInt(i),this.touchHandle=0),a.miss?(this.currentHurt="Miss",console.log("Miss")):(this.battleInfo.enemy.hp-=i>0?i:0,console.log("我方造成伤害"+i),this.currentHurt=String(i))}if(this.battleInfo.current.hp<=0||this.battleInfo.enemy.hp<=0){var r="success";this.battleInfo.current.hp<=0&&(r="fail"),clearInterval(this.timer),setTimeout((function(){t.handleFinish(r)}),800)}setTimeout((function(){t.behit=!1}),300),setTimeout((function(){t.enemyHurt="",t.currentHurt=""}),600)},"handleFinish":function handleFinish(t){var e=this,n=Object(l.d)({"level":this.currentDigimonInfo.attr.level}),i="",o={};if(this.gifs&&"success"===t){var m=this.gifs.type;if("expGain"==m)n*=this.gifs.expGain;else if("jcegg"==m)Math.random()>this.gifs.percent&&(o={"11":this.$store.state.storeItems[11]&&this.$store.state.storeItems[11]+1||1});else if("zsj_card"==m){if(Math.random()>this.gifs.percent){var u=this.$store.state.storeItems[13]&&this.$store.state.storeItems[13]+1||1;u<=10&&(o={"13":u})}}else if("hjegg"==m){if(Math.random()>this.gifs.percent){var d=this.$store.state.storeItems[12]&&this.$store.state.storeItems[12]+1||1;d<=100&&(o={"12":d})}}else if("mowegg"==m){if(Math.random()>this.gifs.percent){var h=this.$store.state.storeItems[14]&&this.$store.state.storeItems[14]+1||1;h<=100&&(o={"14":h})}}else if("GET_ITEM"==m&&Math.random()>this.gifs.percent){var g=this.gifs,f=g.itemId,p=g.count,b=this.$store.state.storeItems[f]&&this.$store.state.storeItems[f]+p||p;o=Object(a.a)({},f,b)}}if(!this.enemyDigimon&&this.targetBoss)if((n*=5)<3e3&&(n=3e3),Math.random()<.3){var v=this.$store.state.storeItems[15]&&this.$store.state.storeItems[15]+1||1;v<=10&&(o=Object(r.a)(Object(r.a)({},o),{},{"15":v}))}else if(Math.random()<.1){var y=this.$store.state.storeItems[16]&&this.$store.state.storeItems[16]+1||1;y<=10&&(o=Object(r.a)(Object(r.a)({},o),{},{"16":y}))}var k=(new Date).getHours();k>=18&&k<=21&&(n*=5),this.allBuff&&this.allBuff.dabianshou&&(n+=Math.round(n*parseFloat(this.allBuff.dabianshou)));var w=this.enemyDigimon&&Math.random()>.98,D=this.enemyDigimon&&Math.random()>.9;"success"==t&&(w||D)&&(i+="".concat(w?" 获得数码蛋 ":""),i+="".concat(D?"获得卡片":"")),Object(s.showToast)({"title":"success"==t?"获得".concat(n,"经验").concat(i):"打不过？就这就这","icon":"none","duration":2e3,"success":function success(i){if("success"==t){var m=Object(l.b)({"level":e.currentDigimonInfo.attr.level,"exp":n,"nowExp":e.currentDigimonInfo.attr.exp});if("shijieshu"===e.enemyDigimon&&Object(s.showModal)({"title":"击败世界树了啊","content":"交流群：961490006 不要随意公开\n携带该码可进群：".concat(+new Date),"confirmText":"欢迎加入"}),o){var u=Object(r.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},u),o))}if(w){var d=Object(r.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},d),{},{"1":d[1]&&d[1]+1||1}))}if(D){var h=Object(r.a)({},e.$store.state.storeItems),g=Object.values(c.a).filter((function(t){return"card"===t.type})),f=g[Object(l.h)(0,g.length-1)].id;e.$store.dispatch("updateStoreItems",Object(r.a)(Object(r.a)({},h),{},Object(a.a)({},f,h[f]&&h[f]+1||1)))}e.$store.dispatch("updateCurrentDigimonInfo",{"attr":Object(r.a)(Object(r.a)({},e.currentDigimonInfoattr),{},{"exp":m.exp,"level":m.level}),"name":e.currentDigimonInfo.name})}setTimeout((function(){e.finallyCallback?e.finallyCallback(t):e.$store.state.sceneType="normal"}),800)}})}}},d=(n(2228),n(86)),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("taro-view",{"staticClass":"digimon-battle"},[t.time<=2?n("taro-view",{"staticClass":"count-down"},[t._v("\n    "+t._s(3-t.time)+"\n  ")]):t._e(),t._v(" "),n("taro-view",{"staticClass":"kz-title"},[n("taro-text",{"class":{"active":"被克制"==t.isKz}},[t._v(t._s(t.computedEnemyDigimonAttr.attr.realm))]),t._v(" vs "),n("taro-text",{"class":{"active":"克制"==t.isKz}},[t._v(t._s(t.computedDigimonAttr.attr.realm))])],1),t._v(" "),n("taro-view",{"staticClass":"battle-container","style":{"backgroundImage":"url("+t.battelBackground+")","backgroundSize":"96%","backgroundRepeat":"no-repeat","backgroundPosition":"50% 40%"}},[n("taro-view",{"staticClass":"hp-box"},[n("taro-view",{"staticClass":"hp-item"},[n("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.enemyHpPrecent+")"}})],1),t._v(" "),n("taro-view",{"staticClass":"hp-hurt hurt-left","class":{"active":!!t.currentHurt}},[t._v(t._s(t.currentHurt))]),t._v(" "),n("taro-view",{"staticClass":"hp-item"},[n("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.currentHpPrecent+")"}})],1),t._v(" "),n("taro-view",{"staticClass":"hp-hurt hurt-right","class":{"active":!!t.enemyHurt}},[t._v(t._s(t.enemyHurt))])],1),t._v(" "),n("taro-view",{"staticClass":"digimon-box enemy-digimon"},[t.isEnemyAttack?t._e():n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyNormalAction[0]}}),t._v(" "),t.isEnemyAttack?n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyTouchAction[0]}}):t._e(),t._v(" "),n("taro-image",{"staticClass":"attack-normal","class":{"active":t.isEnemyAttack},"attrs":{"src":t.enemyAttackAction[0]}})],1),t._v(" "),n("taro-view",{"staticClass":"digimon-box current-digimon","on":{"tap":function(e){t.touchHandle++}}},[t.isCurrentAttack?t._e():n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.normalAction[0]}}),t._v(" "),t.isCurrentAttack?n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.touchAction[0]}}):t._e(),t._v(" "),n("taro-image",{"staticClass":"attack-normal","class":{"active":t.isCurrentAttack&&t.touchHandle<10,"bigactive":t.isCurrentAttack&&t.touchHandle>10},"attrs":{"src":t.attackAction[0]}})],1)],1),t._v(" "),n("use-card",{"on":{"card-gain":t.cardGainHandle}})],1)}),[],!1,null,null,null);e.default=h.exports},"90":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=function gimg(t){try{return n(92)("./".concat(t))}catch(t){return console.warn(t),""}},i={"1":{"id":1,"name":"数码蛋","img":a("eggs/01.png"),"maxNum":100,"type":"egg","useType":"egg","descript":"普通的数码蛋 可以随机获得一个数码兽"},"2":{"id":2,"name":"蓝卡","img":a("card/bcard.jpg"),"maxNum":100,"type":"card","useType":"blueCard","descript":"平平无奇的蓝卡"},"3":{"id":3,"name":"at增益","img":a("card/at.jpg"),"maxNum":100,"type":"card","useType":"at_10","descript":"at增加10%"},"4":{"id":4,"name":"at增益30%","img":a("card/at3.jpeg"),"maxNum":100,"type":"card","useType":"at_30","descript":"at增加30%"},"5":{"id":5,"name":"atde增益","img":a("card/atde.jpeg"),"maxNum":100,"type":"card","useType":"at_10,de_10","descript":"at/de增加10%"},"6":{"id":6,"name":"de增益","img":a("card/de.jpg"),"maxNum":100,"type":"card","useType":"de_10","descript":"de增加10%"},"7":{"id":7,"name":"de增益999","img":a("card/de999.jpeg"),"maxNum":100,"type":"card","useType":"dec_999","descript":"de增加999"},"8":{"id":8,"name":"de增益9999","img":a("card/de9999.jpeg"),"maxNum":100,"type":"card","useType":"dec_9999","descript":"10秒内 de增加9999"},"9":{"id":9,"name":"hp回复50%","img":a("card/hp50.jpeg"),"maxNum":100,"type":"card","useType":"hp_50","descript":"恢复生命值50%"},"10":{"id":10,"name":"hp回复100%","img":a("card/hp100.jpg"),"maxNum":100,"type":"card","useType":"hp_100","descript":"恢复生命值100%"},"11":{"id":11,"name":"数码蛋","img":a("eggs/04.png"),"maxNum":100,"type":"egg","useType":"jczzegg","descript":"交错战争数码蛋"},"12":{"id":12,"name":"数码蛋","img":a("eggs/05.png"),"maxNum":100,"type":"egg","useType":"hjqsegg","descript":"皇家骑士副本限定数码蛋"},"13":{"id":13,"name":"中世纪红莲怪物卡","img":a("card/zsj.jpg"),"maxNum":100,"type":"useCard","useType":"zsjCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"14":{"id":14,"name":"数码蛋","img":a("eggs/06.png"),"maxNum":100,"type":"egg","useType":"mowegg","descript":"七魔王限定数码蛋"},"15":{"id":15,"name":"暗龙怪物卡","img":a("card/anlong.jpg"),"maxNum":10,"type":"useCard","useType":"anlongCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"16":{"id":16,"name":"千年怪物卡","img":a("card/qiannian.jpg"),"maxNum":10,"type":"useCard","useType":"qianinanCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"17":{"id":17,"name":"金甲龙X怪物卡","img":a("card/jjlx.jpg"),"maxNum":10,"type":"useCard","useType":"jjlxCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"18":{"id":18,"name":"数码蛋","img":a("eggs/07.png"),"maxNum":100,"type":"egg","useType":"hjqsxegg","descript":"皇家骑士X副本限定数码蛋"}}},"91":function(t,e,n){var a=n(21),i=n(99);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={"insert":"head","singleton":!1},s=(a(i,r),i.locals?i.locals:{});t.exports=s},"98":function(t,e,n){"use strict";n(91)},"99":function(t,e,n){(e=n(22)(!1)).push([t.i,".use-card {\n  position: absolute;\n  width: 100vw;\n  height: 8.53333rem;\n  bottom: 0;\n  left: 0;\n}\n.use-card .card-blj {\n  width: 12.8rem;\n  height: 14.656rem;\n  position: absolute;\n  top: -45vh;\n  left: 50%;\n  margin-left: -10.24rem;\n  -webkit-transition: 0.2s ease;\n  -o-transition: 0.2s ease;\n  transition: 0.2s ease;\n  z-index: 9999;\n  -webkit-transform: translateX(-100vw);\n      -ms-transform: translateX(-100vw);\n          transform: translateX(-100vw);\n}\n.use-card .card-blj.active {\n  -webkit-transform: translateX(0);\n      -ms-transform: translateX(0);\n          transform: translateX(0);\n}\n.use-card .current-item {\n  width: 8.53333rem;\n  height: 12.288rem;\n  position: absolute;\n  top: -40vh;\n  right: 50%;\n  margin-right: -9.17333rem;\n  -webkit-transform: translateY(90vh);\n      -ms-transform: translateY(90vh);\n          transform: translateY(90vh);\n}\n.use-card .current-item .current-img {\n  width: 8.53333rem;\n  height: 12.288rem;\n}\n.use-card .current-item.active {\n  -webkit-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -o-transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  transition: all 1s cubic-bezier(0.2153, 0.9305, 0.8051, 0.1407);\n  -webkit-transform: translateY(-90vh);\n      -ms-transform: translateY(-90vh);\n          transform: translateY(-90vh);\n  -webkit-filter: brightness(2);\n          filter: brightness(2);\n  -webkit-box-shadow: 0 0 0.85333rem #fff;\n          box-shadow: 0 0 0.85333rem #fff;\n}\n.use-card .card-view {\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.use-card .card-view .card-img {\n  width: 3.2rem;\n  height: 4.608rem;\n}\n",""]),t.exports=e}}]);