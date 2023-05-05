(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-futuan-config-pages-futuan-config-edit"],{"1e8f":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.enumConverter=void 0,e.filterToWhere=function(t,e){var a={};for(var i in t){var o=t[i],l=o.type,s=o.value;switch(l){case"search":"string"===typeof s&&s.length&&(a[i]=new RegExp(s));break;case"select":if(s.length){var u,f=[],d=(0,n.default)(s);try{for(d.s();!(u=d.n()).done;){var c=u.value;f.push(e.eq(c))}}catch(_){d.e(_)}finally{d.f()}a[i]=e.or(f)}break;case"range":if(s.length){var m=s[0],b=s[1];a[i]=e.and([e.gte(m),e.lte(b)])}break;case"date":if(s.length){var p=(0,r.default)(s,2),v=p[0],h=p[1],g=new Date(v),x=new Date(h);a[i]=e.and([e.gte(g),e.lte(x)])}break;case"timestamp":if(s.length){var D=(0,r.default)(s,2),w=D[0],j=D[1];a[i]=e.and([e.gte(w),e.lte(j)])}break}}return a},e.validator=void 0;var r=i(a("3835")),n=i(a("b85c"));a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("14d9");e.validator={wxconf:{rules:[{format:"string"}],title:"微信设置",label:"微信设置"},wxadbanner:{rules:[{format:"string"}],title:"微信banner广告ID",label:"微信banner广告ID"},wxadvideo:{rules:[{format:"string"}],title:"微信视频贴片广告ID",label:"微信视频贴片广告ID"},wxadcp:{rules:[{format:"string"}],title:"微信插屏广告ID",label:"微信插屏广告ID"},wxadjili:{rules:[{format:"string"}],title:"微信激励视频广告ID",label:"微信激励视频广告ID"},wxadtp:{rules:[{format:"string"}],title:"微信视频贴片广告ID",label:"微信视频贴片广告ID"},wxadgz:{rules:[{format:"string"}],title:"微信原生模板广告ID",label:"微信原生模板广告ID"},zjconf:{rules:[{format:"string"}],title:"字节设置",label:"字节设置"},zjbanner:{rules:[{format:"string"}],title:"字节banner广告ID",label:"字节banner广告ID"},zjvideo:{rules:[{format:"string"}],title:"字节视频贴片广告ID",label:"字节视频贴片广告ID"},zjcp:{rules:[{format:"string"}],title:"字节插屏广告ID",label:"字节插屏广告ID"},zjjili:{rules:[{format:"string"}],title:"字节激励视频广告ID",label:"字节激励视频广告ID"},zjtp:{rules:[{format:"string"}],title:"字节视频贴片广告ID",label:"字节视频贴片广告ID"},zjgz:{rules:[{format:"string"}],title:"字节原生模板广告ID",label:"字节原生模板广告ID"}};e.enumConverter={}},"33b9":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("53ca")),n=i(a("c7eb")),o=i(a("ade3")),l=i(a("1da1"));a("a9e3"),a("14d9"),a("d3b7"),a("159b"),a("a434");var s={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(t){this.init()},"form.labelWidth":function(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition":function(t){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(t){}},created:function(){var t=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var e=t.form._getDataValue(t.name,t.form.localData);return e}),(function(e,a){var i=t.form._isEqual(e,a);if(!i){var r=t.itemSetValue(e);t.onFieldChange(r,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=t,this.init(!1)},setValue:function(){},onFieldChange:function(t){var e=arguments,a=this;return(0,l.default)((0,n.default)().mark((function i(){var r,l,s,u,f,d,c,m,b,p,v,h;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r=!(e.length>1&&void 0!==e[1])||e[1],l=a.form,s=l.formData,l.localData,u=l.errShowType,f=l.validateCheck,d=l.validateTrigger,c=l._isRequiredField,m=l._realName,b=m(a.name),t||(t=a.form.formData[b]),p=a.itemRules.rules&&a.itemRules.rules.length,a.validator&&p&&0!==p){i.next=7;break}return i.abrupt("return");case 7:if(v=c(a.itemRules.rules||[]),h=null,"bind"!==d&&!r){i.next=18;break}return i.next=12,a.validator.validateUpdate((0,o.default)({},b,t),s);case 12:h=i.sent,v||void 0!==t&&""!==t||(h=null),h&&h.errorMessage?("undertext"===u&&(a.errMsg=h?h.errorMessage:""),"toast"===u&&uni.showToast({title:h.errorMessage||"校验错误",icon:"none"}),"modal"===u&&uni.showModal({title:"提示",content:h.errorMessage||"校验错误"})):a.errMsg="",f(h||null),i.next=19;break;case 18:a.errMsg="";case 19:return i.abrupt("return",h||null);case 20:case"end":return i.stop()}}),i)})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.form||{},a=e.validator,i=e.formRules,n=e.childrens,o=(e.formData,e.localData),l=e._realName,s=e.labelWidth,u=e._getDataValue;e._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(s),this.localLabelPos=this._labelPosition(),this.form&&t&&n.push(this),a&&i){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var f=l(this.name),d=this.userRules||this.rules;"object"===(0,r.default)(i)&&d&&(i[f]={rules:d},a.updateSchema(i));var c=i[f]||{};this.itemRules=c,this.validator=a,this.itemSetValue(u(this.name,o))}},unInit:function(){var t=this;if(this.form){var e=this.form,a=e.childrens,i=e.formData,r=e._realName;a.forEach((function(e,a){e===t&&(t.form.childrens.splice(a,1),delete i[r(e.name)])}))}},itemSetValue:function(t){var e=this.form._realName(this.name),a=this.itemRules.rules||[],i=this.form._getValue(e,t,a);return this.form._setDataValue(e,this.form.formData,i),i},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var t=this.form.labelAlign,e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit:function(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?65:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(t,e,a){return"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===a?"bind":"submit":"bind":"submit"},num2px:function(t){return"number"===typeof t?"".concat(t,"px"):t}}};e.default=s},"42aa":function(t,e,a){"use strict";a.r(e);var i=a("ffb1"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},"4a42":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-forms-item[data-v-7b4c51d5]{position:relative;display:flex;margin-bottom:22px;flex-direction:row}.uni-forms-item__label[data-v-7b4c51d5]{display:flex;flex-direction:row;align-items:center;text-align:left;font-size:14px;color:#606266;height:36px;padding:0 12px 0 0;vertical-align:middle;flex-shrink:0;box-sizing:border-box}.uni-forms-item__label.no-label[data-v-7b4c51d5]{padding:0}.uni-forms-item__content[data-v-7b4c51d5]{position:relative;font-size:14px;flex:1;box-sizing:border-box;flex-direction:row}.uni-forms-item .uni-forms-item__nuve-content[data-v-7b4c51d5]{display:flex;flex-direction:column;flex:1}.uni-forms-item__error[data-v-7b4c51d5]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0;transition:transform .3s;transform:translateY(-100%);opacity:0}.uni-forms-item__error .error-text[data-v-7b4c51d5]{color:#f56c6c;font-size:12px}.uni-forms-item__error.msg--active[data-v-7b4c51d5]{opacity:1;transform:translateY(0)}.uni-forms-item.is-direction-left[data-v-7b4c51d5]{flex-direction:row}.uni-forms-item.is-direction-top[data-v-7b4c51d5]{flex-direction:column}.uni-forms-item.is-direction-top .uni-forms-item__label[data-v-7b4c51d5]{padding:0 0 8px;line-height:1.5715;text-align:left;white-space:normal}.uni-forms-item .is-required[data-v-7b4c51d5]{color:#dd524d;font-weight:700}.uni-forms-item--border[data-v-7b4c51d5]{margin-bottom:0;padding:10px 0;border-top:1px #eee solid}.uni-forms-item--border .uni-forms-item__content[data-v-7b4c51d5]{flex-direction:column;justify-content:flex-start;align-items:flex-start}.uni-forms-item--border .uni-forms-item__content .uni-forms-item__error[data-v-7b4c51d5]{position:relative;top:5px;left:0;padding-top:0}.is-first-border[data-v-7b4c51d5]{border:none}',""]),t.exports=e},"75b5":function(t,e,a){var i=a("4a42");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("349d3510",i,!0,{sourceMap:!1,shadowMode:!1})},"9f43":function(t,e,a){"use strict";a.r(e);var i=a("faa4"),r=a("42aa");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);var o=a("f0c5"),l=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=l.exports},e3f7:function(t,e,a){"use strict";var i=a("75b5"),r=a.n(i);r.a},ef50:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-forms-item",class:["is-direction-"+t.localLabelPos,t.border?"uni-forms-item--border":"",t.border&&t.isFirstBorder?"is-first-border":""]},[t._t("label",[a("v-uni-view",{staticClass:"uni-forms-item__label",class:{"no-label":!t.label&&!t.required},style:{width:t.localLabelWidth,justifyContent:t.localLabelAlign}},[t.required?a("v-uni-text",{staticClass:"is-required"},[t._v("*")]):t._e(),a("v-uni-text",[t._v(t._s(t.label))])],1)]),a("v-uni-view",{staticClass:"uni-forms-item__content"},[t._t("default"),a("v-uni-view",{staticClass:"uni-forms-item__error",class:{"msg--active":t.msg}},[a("v-uni-text",[t._v(t._s(t.msg))])],1)],2)],2)},r=[]},faa4:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uniForms:a("6b2c").default,uniFormsItem:a("fbb8").default,uniEasyinput:a("e6ab").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{model:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"wxconf",label:"微信设置"}},[a("uni-easyinput",{attrs:{placeholder:"微信设置。暂时没用处"},model:{value:t.formData.wxconf,callback:function(e){t.$set(t.formData,"wxconf",e)},expression:"formData.wxconf"}})],1),a("uni-forms-item",{attrs:{name:"wxad-banner",label:"微信banner广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"微信banner广告ID"},model:{value:t.formData.wxadbanner,callback:function(e){t.$set(t.formData,"wxadbanner",e)},expression:"formData.wxadbanner"}})],1),a("uni-forms-item",{attrs:{name:"wxad-video",label:"微信视频贴片广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"微信视频贴片广告ID"},model:{value:t.formData.wxadvideo,callback:function(e){t.$set(t.formData,"wxadvideo",e)},expression:"formData.wxadvideo"}})],1),a("uni-forms-item",{attrs:{name:"wxad-cp",label:"微信插屏广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"微信插屏广告ID"},model:{value:t.formData.wxadcp,callback:function(e){t.$set(t.formData,"wxadcp",e)},expression:"formData.wxadcp"}})],1),a("uni-forms-item",{attrs:{name:"wxad-jili",label:"微信激励视频广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"微信激励视频广告ID"},model:{value:t.formData.wxadjili,callback:function(e){t.$set(t.formData,"wxadjili",e)},expression:"formData.wxadjili"}})],1),a("uni-forms-item",{attrs:{name:"wxad-tp",label:"微信视频贴片广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"微信贴片广告ID"},model:{value:t.formData.wxadtp,callback:function(e){t.$set(t.formData,"wxadtp",e)},expression:"formData.wxadtp"}})],1),a("uni-forms-item",{attrs:{name:"wxad-gz",label:"微信原生模板广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"微信原生模板广告ID"},model:{value:t.formData.wxadgz,callback:function(e){t.$set(t.formData,"wxadgz",e)},expression:"formData.wxadgz"}})],1),a("uni-forms-item",{attrs:{name:"zjconf",label:"字节设置"}},[a("uni-easyinput",{attrs:{placeholder:"字节设置。暂时没用处"},model:{value:t.formData.zjconf,callback:function(e){t.$set(t.formData,"zjconf",e)},expression:"formData.zjconf"}})],1),a("uni-forms-item",{attrs:{name:"zj-banner",label:"字节banner广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"字节banner广告ID"},model:{value:t.formData.zjbanner,callback:function(e){t.$set(t.formData,"zjbanner",e)},expression:"formData.zjbanner"}})],1),a("uni-forms-item",{attrs:{name:"zj-video",label:"字节视频贴片广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"字节视频贴片广告ID"},model:{value:t.formData.zjvideo,callback:function(e){t.$set(t.formData,"zjvideo",e)},expression:"formData.zjvideo"}})],1),a("uni-forms-item",{attrs:{name:"zj-cp",label:"字节插屏广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"字节插屏广告ID"},model:{value:t.formData.zjcp,callback:function(e){t.$set(t.formData,"zjcp",e)},expression:"formData.zjcp"}})],1),a("uni-forms-item",{attrs:{name:"zj-jili",label:"字节激励视频广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"字节激励视频广告ID"},model:{value:t.formData.zjjili,callback:function(e){t.$set(t.formData,"zjjili",e)},expression:"formData.zjjili"}})],1),a("uni-forms-item",{attrs:{name:"zj-tp",label:"字节视频贴片广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"字节贴片广告ID"},model:{value:t.formData.zjtp,callback:function(e){t.$set(t.formData,"zjtp",e)},expression:"formData.zjtp"}})],1),a("uni-forms-item",{attrs:{name:"zj-gz",label:"字节原生模板广告ID"}},[a("uni-easyinput",{attrs:{placeholder:"字节原生模板广告ID"},model:{value:t.formData.zjgz,callback:function(e){t.$set(t.formData,"zjgz",e)},expression:"formData.zjgz"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},n=[]},fbb8:function(t,e,a){"use strict";a.r(e);var i=a("ef50"),r=a("ffbc");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("e3f7");var o=a("f0c5"),l=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"7b4c51d5",null,!1,i["a"],void 0);e["default"]=l.exports},ffb1:function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("5530"));a("caad"),a("2532"),a("b64b"),a("d3b7");var n=a("1e8f"),o=t.database();o.command;function l(t){var e={};for(var a in n.validator)t.includes(a)&&(e[a]=n.validator[a]);return e}var s={data:function(){var t={wxconf:"",wxadbanner:"",wxadvideo:"",wxadcp:"",wxadjili:"",wxadtp:"",wxadgz:"",zjconf:"",zjbanner:"",zjvideo:"",zjcp:"",zjjili:"",zjtp:"",zjgz:""};return{formData:t,formOptions:{},rules:(0,r.default)({},l(Object.keys(t)))}},onLoad:function(){var t="config-info";this.formDataId=t,this.getDetail(t)},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return o.collection("futuan-config").doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),o.collection("futuan-config").doc(t).field("wxconf,wxadbanner,wxadvideo,wxadcp,wxadjili,wxadtp,wxadgz,zjconf,zjbanner,zjvideo,zjcp,zjjili,zjtp,zjgz").get().then((function(t){var a=t.result.data[0];a&&(e.formData=a)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=s}).call(this,a("a9ff")["default"])},ffbc:function(t,e,a){"use strict";a.r(e);var i=a("33b9"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a}}]);