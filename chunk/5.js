/*! For license information please see 5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"54":function(o,t,r){"use strict";r.r(t),r.d(t,"taro_button_core",(function(){return n}));var e=r(21),a=r(86),n=function(){function Button(o){Object(e.g)(this,o),this.hoverClass="button-hover",this.type="",this.hoverStartTime=20,this.hoverStayTime=70,this.loading=!1,this.formType=null,this.hover=!1,this.touch=!1,this.onSubmit=Object(e.d)(this,"tarobuttonsubmit",7),this.onReset=Object(e.d)(this,"tarobuttonreset",7)}return Button.prototype.onTouchStart=function(){var o=this;this.disabled||(this.touch=!0,this.hoverClass&&!this.disabled&&setTimeout((function(){o.touch&&(o.hover=!0)}),this.hoverStartTime))},Button.prototype.onTouchEnd=function(){var o=this;this.disabled||(this.touch=!1,this.hoverClass&&!this.disabled&&setTimeout((function(){o.touch||(o.hover=!1)}),this.hoverStayTime),"submit"===this.formType?this.onSubmit.emit():"reset"===this.formType&&this.onReset.emit())},Button.prototype.render=function(){var o,t=this,r=t.disabled,n=t.hoverClass,i=t.type,c=t.size,l=t.plain,s=t.loading,b=t.hover,d=Object(a.a)(((o={})[""+n]=b&&!r,o));return Object(e.f)(e.a,{"class":d,"type":i,"plain":l,"loading":s,"size":c,"disabled":r},s&&Object(e.f)("i",{"class":"weui-loading"}),Object(e.f)("slot",null))},Object.defineProperty(Button.prototype,"el",{"get":function get(){return Object(e.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(Button,"style",{"get":function get(){return'taro-button-core{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;color:#000;background-color:#f8f8f8;line-height:2.55555556;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden;width:100%;border-width:0;outline:0;-webkit-appearance:none}taro-button-core:not([disabled]):active{color:rgba(0,0,0,.6);background-color:#dedede}taro-button-core:focus{outline:0}taro-button-core:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:10px}taro-button-core+taro-button-core{margin-top:15px}taro-button-core[type=default]{color:#000;background-color:#f8f8f8}taro-button-core[type=default]:not([disabled]):visited{color:#000}taro-button-core[type=default]:not([disabled]):active{color:rgba(0,0,0,.6);background-color:#dedede}taro-button-core[size=mini]{width:auto;display:inline-block;padding:0 1.32em;line-height:2.3;font-size:13px}taro-button-core[plain],taro-button-core[plain][type=default],taro-button-core[plain][type=primary]{border-width:1px;background-color:transparent}taro-button-core[disabled]{color:hsla(0,0%,100%,.6)}taro-button-core[disabled][type=default]{color:rgba(0,0,0,.3);background-color:#f7f7f7}taro-button-core[disabled][type=primary]{background-color:#9ed99d}taro-button-core[disabled][type=warn]{background-color:#ec8b89}taro-button-core[loading] .weui-loading{margin:-.2em .34em 0 0}taro-button-core[loading][type=primary],taro-button-core[loading][type=warn]{color:hsla(0,0%,100%,.6)}taro-button-core[loading][type=primary]{background-color:#179b16}taro-button-core[loading][type=warn]{background-color:#ce3c39}taro-button-core[plain][type=primary]{color:#1aad19;border:1px solid #1aad19}taro-button-core[plain][type=primary]:not([disabled]):active{color:rgba(26,173,25,.6);border-color:rgba(26,173,25,.6);background-color:transparent}taro-button-core[plain][type=primary]:after{border-width:0}taro-button-core[plain],taro-button-core[plain][type=default]{color:#353535;border:1px solid #353535}taro-button-core[plain]:not([disabled]):active,taro-button-core[plain][type=default]:not([disabled]):active{color:rgba(53,53,53,.6);border-color:rgba(53,53,53,.6);background-color:transparent}taro-button-core[plain]:after,taro-button-core[plain][type=default]:after{border-width:0}taro-button-core[type=primary]{color:#fff;background-color:#1aad19}taro-button-core[type=primary]:not([disabled]):visited{color:#fff}taro-button-core[type=primary]:not([disabled]):active{color:hsla(0,0%,100%,.6);background-color:#179b16}taro-button-core[type=warn]{color:#fff;background-color:#e64340}taro-button-core[type=warn]:not([disabled]):visited{color:#fff}taro-button-core[type=warn]:not([disabled]):active{color:hsla(0,0%,100%,.6);background-color:#ce3c39}taro-button-core[plain][disabled],taro-button-core[plain][disabled][type=primary]{color:rgba(0,0,0,.3);border:1px solid rgba(0,0,0,.2);background-color:#f7f7f7}'},"enumerable":!0,"configurable":!0}),Button}()},"86":function(o,t,r){"use strict";r.d(t,"a",(function(){return a}));var e=r(2);var a=function createCommonjsModule(o,t){return o(t={"exports":{}},t.exports),t.exports}((function(o){!function(){var t={}.hasOwnProperty;function classNames(){for(var o=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var n=Object(e.a)(a);if("string"===n||"number"===n)o.push(a);else if(Array.isArray(a)&&a.length){var i=classNames.apply(null,a);i&&o.push(i)}else if("object"===n)for(var c in a)t.call(a,c)&&a[c]&&o.push(c)}}return o.join(" ")}o.exports?(classNames.default=classNames,o.exports=classNames):window.classNames=classNames}()}))}}]);