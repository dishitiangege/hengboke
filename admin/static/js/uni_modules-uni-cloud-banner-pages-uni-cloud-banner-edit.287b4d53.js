(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-cloud-banner-pages-uni-cloud-banner-edit"],{"33b9":function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("53ca")),n=r(i("c7eb")),o=r(i("ade3")),l=r(i("1da1"));i("a9e3"),i("14d9"),i("d3b7"),i("159b"),i("a434");var s={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(t){this.init()},"form.labelWidth":function(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition":function(t){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(t){}},created:function(){var t=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var e=t.form._getDataValue(t.name,t.form.localData);return e}),(function(e,i){var r=t.form._isEqual(e,i);if(!r){var a=t.itemSetValue(e);t.onFieldChange(a,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=t,this.init(!1)},setValue:function(){},onFieldChange:function(t){var e=arguments,i=this;return(0,l.default)((0,n.default)().mark((function r(){var a,l,s,u,f,d,c,m,b,h,v,p;return(0,n.default)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=!(e.length>1&&void 0!==e[1])||e[1],l=i.form,s=l.formData,l.localData,u=l.errShowType,f=l.validateCheck,d=l.validateTrigger,c=l._isRequiredField,m=l._realName,b=m(i.name),t||(t=i.form.formData[b]),h=i.itemRules.rules&&i.itemRules.rules.length,i.validator&&h&&0!==h){r.next=7;break}return r.abrupt("return");case 7:if(v=c(i.itemRules.rules||[]),p=null,"bind"!==d&&!a){r.next=18;break}return r.next=12,i.validator.validateUpdate((0,o.default)({},b,t),s);case 12:p=r.sent,v||void 0!==t&&""!==t||(p=null),p&&p.errorMessage?("undertext"===u&&(i.errMsg=p?p.errorMessage:""),"toast"===u&&uni.showToast({title:p.errorMessage||"校验错误",icon:"none"}),"modal"===u&&uni.showModal({title:"提示",content:p.errorMessage||"校验错误"})):i.errMsg="",f(p||null),r.next=19;break;case 18:i.errMsg="";case 19:return r.abrupt("return",p||null);case 20:case"end":return r.stop()}}),r)})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.form||{},i=e.validator,r=e.formRules,n=e.childrens,o=(e.formData,e.localData),l=e._realName,s=e.labelWidth,u=e._getDataValue;e._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(s),this.localLabelPos=this._labelPosition(),this.form&&t&&n.push(this),i&&r){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var f=l(this.name),d=this.userRules||this.rules;"object"===(0,a.default)(r)&&d&&(r[f]={rules:d},i.updateSchema(r));var c=r[f]||{};this.itemRules=c,this.validator=i,this.itemSetValue(u(this.name,o))}},unInit:function(){var t=this;if(this.form){var e=this.form,i=e.childrens,r=e.formData,a=e._realName;i.forEach((function(e,i){e===t&&(t.form.childrens.splice(i,1),delete r[a(e.name)])}))}},itemSetValue:function(t){var e=this.form._realName(this.name),i=this.itemRules.rules||[],r=this.form._getValue(e,t,i);return this.form._setDataValue(e,this.form.formData,r),r},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var t=this.form.labelAlign,e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit:function(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?65:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(t,e,i){return"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===i?"bind":"submit":"bind":"submit"},num2px:function(t){return"number"===typeof t?"".concat(t,"px"):t}}};e.default=s},"4a42":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-forms-item[data-v-7b4c51d5]{position:relative;display:flex;margin-bottom:22px;flex-direction:row}.uni-forms-item__label[data-v-7b4c51d5]{display:flex;flex-direction:row;align-items:center;text-align:left;font-size:14px;color:#606266;height:36px;padding:0 12px 0 0;vertical-align:middle;flex-shrink:0;box-sizing:border-box}.uni-forms-item__label.no-label[data-v-7b4c51d5]{padding:0}.uni-forms-item__content[data-v-7b4c51d5]{position:relative;font-size:14px;flex:1;box-sizing:border-box;flex-direction:row}.uni-forms-item .uni-forms-item__nuve-content[data-v-7b4c51d5]{display:flex;flex-direction:column;flex:1}.uni-forms-item__error[data-v-7b4c51d5]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0;transition:transform .3s;transform:translateY(-100%);opacity:0}.uni-forms-item__error .error-text[data-v-7b4c51d5]{color:#f56c6c;font-size:12px}.uni-forms-item__error.msg--active[data-v-7b4c51d5]{opacity:1;transform:translateY(0)}.uni-forms-item.is-direction-left[data-v-7b4c51d5]{flex-direction:row}.uni-forms-item.is-direction-top[data-v-7b4c51d5]{flex-direction:column}.uni-forms-item.is-direction-top .uni-forms-item__label[data-v-7b4c51d5]{padding:0 0 8px;line-height:1.5715;text-align:left;white-space:normal}.uni-forms-item .is-required[data-v-7b4c51d5]{color:#dd524d;font-weight:700}.uni-forms-item--border[data-v-7b4c51d5]{margin-bottom:0;padding:10px 0;border-top:1px #eee solid}.uni-forms-item--border .uni-forms-item__content[data-v-7b4c51d5]{flex-direction:column;justify-content:flex-start;align-items:flex-start}.uni-forms-item--border .uni-forms-item__content .uni-forms-item__error[data-v-7b4c51d5]{position:relative;top:5px;left:0;padding-top:0}.is-first-border[data-v-7b4c51d5]{border:none}',""]),t.exports=e},"68de":function(t,e,i){"use strict";(function(t){i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("5530"));i("caad"),i("2532"),i("b64b"),i("d3b7");var n=i("7df0"),o=t.database();o.command;function l(t){var e={};for(var i in n.validator)t.includes(i)&&(e[i]=n.validator[i]);return e}var s={data:function(){var t={bannerfile:null,open_url:"",title:"",sort:null,category_id:"",status:!0,description:""};return{formData:t,formOptions:{},rules:(0,a.default)({},l(Object.keys(t)))}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;o.collection("opendb-banner").doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),o.collection("opendb-banner").doc(t).field("bannerfile,open_url,title,sort,category_id,status,description").get().then((function(t){var i=t.result.data[0];i&&(e.formData=i)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=s}).call(this,i("a9ff")["default"])},"75b5":function(t,e,i){var r=i("4a42");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=i("4f06").default;a("349d3510",r,!0,{sourceMap:!1,shadowMode:!1})},7857:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var r={uniForms:i("6b2c").default,uniFormsItem:i("fbb8").default,uniFilePicker:i("d38b").default,uniEasyinput:i("e6ab").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-container"},[i("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[i("uni-forms-item",{attrs:{name:"bannerfile",label:"图片文件",required:!0}},[i("uni-file-picker",{attrs:{"file-mediatype":"image","return-type":"object"},model:{value:t.formData.bannerfile,callback:function(e){t.$set(t.formData,"bannerfile",e)},expression:"formData.bannerfile"}})],1),i("uni-forms-item",{attrs:{name:"open_url",label:"点击目标地址"}},[i("uni-easyinput",{attrs:{placeholder:"点击跳转目标地址。如果是web地址则使用内置web-view打开；如果是本地页面则跳转本地页面；如果是schema地址则打开本地的app",trim:"both"},model:{value:t.formData.open_url,callback:function(e){t.$set(t.formData,"open_url",e)},expression:"formData.open_url"}})],1),i("uni-forms-item",{attrs:{name:"title",label:"标题"}},[i("uni-easyinput",{attrs:{placeholder:"注意标题文字颜色和背景图靠色导致看不清的问题",trim:"both"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),i("uni-forms-item",{attrs:{name:"sort",label:"排序"}},[i("uni-easyinput",{attrs:{placeholder:"数字越小，排序越前",type:"number"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort",e)},expression:"formData.sort"}})],1),i("uni-forms-item",{attrs:{name:"category_id",label:"分类id"}},[i("uni-easyinput",{attrs:{placeholder:"多个栏目的banner都存在一个表里时可用这个字段区分"},model:{value:t.formData.category_id,callback:function(e){t.$set(t.formData,"category_id",e)},expression:"formData.category_id"}})],1),i("uni-forms-item",{attrs:{name:"status",label:"生效状态"}},[i("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("status",e.detail.value)}}})],1),i("uni-forms-item",{attrs:{name:"description",label:"备注"}},[i("uni-easyinput",{attrs:{placeholder:"维护者自用描述",trim:"both"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1),i("v-uni-view",{staticClass:"uni-button-group"},[i("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),i("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[i("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},n=[]},"7df0":function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.enumConverter=void 0,e.filterToWhere=function(t,e){var i={};for(var r in t){var o=t[r],l=o.type,s=o.value;switch(l){case"search":"string"===typeof s&&s.length&&(i[r]=new RegExp(s));break;case"select":if(s.length){var u,f=[],d=(0,n.default)(s);try{for(d.s();!(u=d.n()).done;){var c=u.value;f.push(e.eq(c))}}catch(D){d.e(D)}finally{d.f()}i[r]=e.or(f)}break;case"range":if(s.length){var m=s[0],b=s[1];i[r]=e.and([e.gte(m),e.lte(b)])}break;case"date":if(s.length){var h=(0,a.default)(s,2),v=h[0],p=h[1],g=new Date(v),_=new Date(p);i[r]=e.and([e.gte(g),e.lte(_)])}break;case"timestamp":if(s.length){var x=(0,a.default)(s,2),y=x[0],w=x[1];i[r]=e.and([e.gte(y),e.lte(w)])}break}}return i},e.validator=void 0;var a=r(i("3835")),n=r(i("b85c"));i("4d63"),i("c607"),i("ac1f"),i("2c3e"),i("25f0"),i("14d9");e.validator={bannerfile:{rules:[{required:!0},{format:"file"}],label:"图片文件"},open_url:{rules:[{format:"string"},{format:"url"},{pattern:"^(http://|https://|/|./|@/)\\S"}],label:"点击目标地址"},title:{rules:[{format:"string"},{maxLength:20}],label:"标题"},sort:{rules:[{format:"int"}],label:"排序"},category_id:{rules:[{format:"string"}],label:"分类id"},status:{rules:[{format:"bool"}],defaultValue:!0,label:"生效状态"},description:{rules:[{format:"string"}],label:"备注"}};e.enumConverter={}},"8c5a":function(t,e,i){"use strict";i.r(e);var r=i("68de"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a},af46:function(t,e,i){"use strict";i.r(e);var r=i("7857"),a=i("8c5a");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var o=i("f0c5"),l=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=l.exports},e3f7:function(t,e,i){"use strict";var r=i("75b5"),a=i.n(r);a.a},ef50:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-forms-item",class:["is-direction-"+t.localLabelPos,t.border?"uni-forms-item--border":"",t.border&&t.isFirstBorder?"is-first-border":""]},[t._t("label",[i("v-uni-view",{staticClass:"uni-forms-item__label",class:{"no-label":!t.label&&!t.required},style:{width:t.localLabelWidth,justifyContent:t.localLabelAlign}},[t.required?i("v-uni-text",{staticClass:"is-required"},[t._v("*")]):t._e(),i("v-uni-text",[t._v(t._s(t.label))])],1)]),i("v-uni-view",{staticClass:"uni-forms-item__content"},[t._t("default"),i("v-uni-view",{staticClass:"uni-forms-item__error",class:{"msg--active":t.msg}},[i("v-uni-text",[t._v(t._s(t.msg))])],1)],2)],2)},a=[]},fbb8:function(t,e,i){"use strict";i.r(e);var r=i("ef50"),a=i("ffbc");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("e3f7");var o=i("f0c5"),l=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"7b4c51d5",null,!1,r["a"],void 0);e["default"]=l.exports},ffbc:function(t,e,i){"use strict";i.r(e);var r=i("33b9"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=a.a}}]);