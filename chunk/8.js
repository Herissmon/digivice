(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"135":function(t,a,e){var n=e(21),i=e(3370);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={"insert":"head","singleton":!1},s=(n(i,o),i.locals?i.locals:{});t.exports=s},"3369":function(t,a,e){"use strict";e(135)},"3370":function(t,a,e){(a=e(22)(!1)).push([t.i,".data-files {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-size: 100vw 100vh;\n}\n.data-files .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.data-files .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.data-files .btns {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  color: #fff;\n  width: 60vw;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n.data-files .datas {\n  position: absolute;\n  top: 10vh;\n  left: 10vw;\n  color: #fff;\n  width: 80vw;\n  height: 80vh;\n  overflow: auto;\n  word-break: break-all;\n}\n.data-files .datas .data-tip {\n  text-align: center;\n}\n.data-files .datas .datas-code {\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n}\n.data-files .input-datas {\n  position: absolute;\n  top: 10vh;\n  left: 10vw;\n  color: #fff;\n  width: 80vw;\n  height: 70vh;\n}\n.data-files .input-datas .input-area {\n  width: 100%;\n  height: 100%;\n  font-size: 0.42667rem;\n}\n.data-files .input-datas .input-area textarea {\n  background: rgba(255, 255, 255, 0.6);\n}\n.data-files .input-datas .submit {\n  text-align: center;\n}\n",""]),t.exports=a},"3386":function(t,a,e){"use strict";e.r(a);var n=e(10),i=e(8),o=e(88),s=e(87),r=e(102),c=/^\${2}.+\${2}$/,l={"name":"data-files","data":function data(){return{"datas":"","step":"","submidData":""}},"computed":{"tamerData":function tamerData(){return this.$store.state.tamerData},"digimonStore":function digimonStore(){return this.$store.state.digimonStore},"canExchange":function canExchange(){var t=s.d[this.$store.state.tamerData.currentDigimon];return null==t.evolutionLevelLimit||0==t.evolutionLevelLimit}},"methods":{"getDigimon":function getDigimon(t){var a=this,e=t,o=a.digimonStore.findIndex((function(t){return t.name==e})),r=s.d[a.tamerData.currentDigimon],c=s.d[e];Object(i.showModal)({"title":"使用密码","content":"获得了不知道什么东西","showCancel":!1,"success":function success(i){if(i.confirm&&("dabianshou"===t&&a.$store.dispatch("updateBuff",{"dabianshou":.2}),-1===o&&r.evolutionLineName!==c.evolutionLineName)){var s=[].concat(Object(n.a)(a.digimonStore),[{"name":e,"attr":{"level":1,"exp":0}}]);a.$store.dispatch("updateDigimonStore",s)}}})},"submitDatas":function submitDatas(){if(this.submidData)try{if(c.test(this.submidData)){if(!this.canExchange)return void Object(i.showToast)({"title":"请退化","icon":"none","duration":2e3});if(/^\$\$.*\$\$$/.test(this.submidData)){var t=s.k[Object(r.md5)(this.submidData)];this.getDigimon(t)}else Object(i.showToast)({"title":"?","icon":"none","duration":2e3});return}var a=Object(o.c)(),e=Object(o.f)(this.submidData).split("di=gi").map((function(t,a){try{return window.atob(t.replace(/\"|\'/g,""))}catch(t){console.error(t)}})),n=decodeURI(e.splice(-1)[0]);a===n||"GMSETDATA"===n?(e=decodeURI(e.join("")),e=JSON.parse(e),Object(i.clearStorageSync)(),Object.keys(e).forEach((function(t){Object(i.setStorageSync)(t,JSON.parse(e[t]).data)})),Object(i.showToast)({"title":"数据继承成功","icon":"none","duration":1e3}),setTimeout((function(){var t;null===(t=location)||void 0===t||t.reload()}),1e3)):Object(i.showToast)({"title":"无效的继承码403","icon":"none","duration":1e3})}catch(t){console.error(t),Object(i.showToast)({"title":"无效的继承码500","icon":"none","duration":1e3})}},"copyData":function copyData(){var t=document.createElement("input");t.value=document.querySelector(".datas-code").innerText,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),Object(i.showToast)({"title":"复制成功","icon":"none","duration":1e3})},"createData":function createData(){this.datas=Object(o.e)(!0),this.step="view"},"readData":function readData(){this.step="input"},"backHandle":function backHandle(){this.step?this.step="":this.$store.commit("UPDATE_SCENETYPE","normal")}}},d=(e(3369),e(86)),u=Object(d.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("taro-view",{"staticClass":"data-files"},[e("taro-view",{"staticClass":"back-button","on":{"tap":t.backHandle}},[t._v("返回")]),t._v(" "),""===t.step?e("taro-view",{"staticClass":"btns"},[e("taro-view",{"staticClass":"btn","on":{"tap":t.readData}},[t._v("继承数据")]),t._v(" "),e("taro-view",{"staticClass":"btn","on":{"tap":t.createData}},[t._v("生成数据")])],1):t._e(),t._v(" "),"view"===t.step?e("taro-view",{"staticClass":"datas"},[e("taro-view",{"staticClass":"data-tip","on":{"tap":t.copyData}},[t._v("点击这里复制")]),t._v(" "),e("taro-view",{"staticClass":"datas-code"},[t._v(t._s(t.datas))])],1):t._e(),t._v(" "),"input"===t.step?e("taro-view",{"staticClass":"input-datas"},[e("taro-textarea",{"staticClass":"input-area","attrs":{"auto-focusd":"true","placeholder":"请输入数据","maxlength":-1},"model":{"value":t.submidData,"callback":function(a){t.submidData=a},"expression":"submidData"}}),t._v(" "),e("taro-view",{"staticClass":"submit","on":{"tap":t.submitDatas}},[t._v("提交")])],1):t._e()],1)}),[],!1,null,null,null);a.default=u.exports}}]);