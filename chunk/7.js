(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"121":function(t,a,e){var n=e(17),s=e(1932);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var o={"insert":"head","singleton":!1},i=(n(s,o),s.locals?s.locals:{});t.exports=i},"1931":function(t,a,e){"use strict";e(121)},"1932":function(t,a,e){(a=e(18)(!1)).push([t.i,".data-files {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-size: 100vw 100vh;\n}\n.data-files .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.data-files .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.data-files .btns {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  color: #fff;\n  width: 60vw;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n.data-files .datas {\n  position: absolute;\n  top: 10vh;\n  left: 10vw;\n  color: #fff;\n  width: 80vw;\n  height: 80vh;\n  overflow: auto;\n  word-break: break-all;\n}\n.data-files .datas .data-tip {\n  text-align: center;\n}\n.data-files .datas .datas-code {\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n}\n.data-files .input-datas {\n  position: absolute;\n  top: 10vh;\n  left: 10vw;\n  color: #fff;\n  width: 80vw;\n  height: 70vh;\n}\n.data-files .input-datas .input-area {\n  width: 100%;\n  height: 100%;\n  font-size: 0.42667rem;\n}\n.data-files .input-datas .input-area textarea {\n  background: rgba(255, 255, 255, 0.6);\n}\n.data-files .input-datas .submit {\n  text-align: center;\n}\n",""]),t.exports=a},"1941":function(t,a,e){"use strict";e.r(a);var n=e(8),s=e(92),o={"name":"data-files","data":function data(){return{"datas":"","step":"","submidData":""}},"computed":{},"methods":{"submitDatas":function submitDatas(){if(this.submidData)try{var t=Object(s.c)(),a=Object(s.f)(this.submidData).split("di=gi").map((function(t){return window.atob(t)})),e=decodeURI(a.splice(-1)[0]);t===e?(console.log(e),a=decodeURI(a.join("")),a=JSON.parse(a),console.log(a),Object(n.clearStorageSync)(),Object.keys(a).forEach((function(t){Object(n.setStorageSync)(t,JSON.parse(a[t]).data)})),Object(n.showToast)({"title":"数据继承成功","icon":"none","duration":1e3}),setTimeout((function(){var t;null===(t=location)||void 0===t||t.reload()}),1e3)):Object(n.showToast)({"title":"无效的继承码403","icon":"none","duration":1e3})}catch(t){console.error(t),Object(n.showToast)({"title":"无效的继承码500","icon":"none","duration":1e3})}},"copyData":function copyData(){var t=document.createElement("input");t.value=document.querySelector(".datas-code").innerText,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),Object(n.showToast)({"title":"复制成功","icon":"none","duration":1e3})},"createData":function createData(){this.datas=Object(s.e)(),this.step="view"},"readData":function readData(){this.step="input"},"backHandle":function backHandle(){this.step?this.step="":this.$store.commit("UPDATE_SCENETYPE","normal")}}},i=(e(1931),e(26)),l=Object(i.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("taro-view",{"staticClass":"data-files"},[e("taro-view",{"staticClass":"back-button","on":{"tap":t.backHandle}},[t._v("返回")]),t._v(" "),""===t.step?e("taro-view",{"staticClass":"btns"},[e("taro-view",{"staticClass":"btn","on":{"tap":t.readData}},[t._v("继承数据")]),t._v(" "),e("taro-view",{"staticClass":"btn","on":{"tap":t.createData}},[t._v("生成数据")])],1):t._e(),t._v(" "),"view"===t.step?e("taro-view",{"staticClass":"datas"},[e("taro-view",{"staticClass":"data-tip","on":{"tap":t.copyData}},[t._v("点击这里复制")]),t._v(" "),e("taro-view",{"staticClass":"datas-code"},[t._v(t._s(t.datas))])],1):t._e(),t._v(" "),"input"===t.step?e("taro-view",{"staticClass":"input-datas"},[e("taro-textarea",{"staticClass":"input-area","attrs":{"auto-focusd":"true","placeholder":"请输入数据","maxlength":-1},"model":{"value":t.submidData,"callback":function(a){t.submidData=a},"expression":"submidData"}}),t._v(" "),e("taro-view",{"staticClass":"submit","on":{"tap":t.submitDatas}},[t._v("提交")])],1):t._e()],1)}),[],!1,null,null,null);a.default=l.exports}}]);