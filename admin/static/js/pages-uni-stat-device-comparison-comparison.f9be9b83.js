(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-comparison-comparison"],{"134d":function(t,e,a){"use strict";a.r(e);var n=a("fb0c"),r=a("c1ef");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("4410");var o=a("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"5bc1b396",null,!1,n["a"],void 0);e["default"]=c.exports},"2a82":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-charts-box1[data-v-5bc1b396]{padding:10px;height:420px}',""]),t.exports=e},4410:function(t,e,a){"use strict";var n=a("8b3d"),r=a.n(n);r.a},"6f6e":function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.createUniStatQuery=function(t){return Object.assign({},t,{type:"native_app",create_env:"uni-stat"})},e.debounce=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];a&&clearTimeout(a),a=setTimeout((function(){t.apply(n,i)}),e)}},e.division=u,e.fileToUrl=function(t){for(var e in p)if(p.hasOwnProperty(e)){var a=p[e];if(a===t)return e}var n=(window.URL||window.webkitURL).createObjectURL(t);return p[n]=t,n},e.fillTrendChartData=function(t,e,a){var n=e.start_time,r=e.dimension;if(["hour","day"].indexOf(r)>-1){var i,o=[];"hour"===r?i=36e5:"day"===r&&(i=864e5);var c=n[0],u=n[1],s=c;o=[c];while(s+i<=u)s+=i,o.push(s);for(var d=[],l=function(e){var n=o[e],r=t.find((function(t,e){return t.start_time===n}));if(r)d.push(r);else{var i={start_time:n};a.map((function(t,e){i[t.field]=0})),d.push(i)}},f=0;f<o.length;f++)l(f);return d}return t},e.format=s,e.formatDate=d,e.formatterData=function(t){var e=t.fieldsMap,a=t.data,n=t.formatter,r=void 0===n||n,i=JSON.parse(JSON.stringify(a));return i.map((function(t){var a=function(a){var n=e.find((function(t){return t.field==a}));if("object"===(0,o.default)(n)){var i=n.fix,c=void 0===i?0:i;"number"===typeof n.multiple&&"number"===typeof t[a]&&(t[a]=Number((t[a]*n.multiple).toFixed(c))),r&&n.formatter&&"number"===typeof t[a]&&(","===n.formatter?t[a]=function(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}(t[a]):"%"===n.formatter?t[a]="".concat((100*t[a]).toFixed(c),"%"):"-"===n.formatter&&(t[a]=l(t[a])))}};for(var n in t)a(n)})),i},e.getAllDateCN=function(t,e){var a=[],n=0;while(e.getTime()-t.getTime()>=0)a[n]=t.getTime(),t.setDate(t.getDate()+1),n+=1;return a},e.getFieldTotal=function(){var e,a=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"total_devices";"object"===(0,o.default)(n)&&(n=c(n,!1,["uni_platform"]));var i=t.database();return i.collection("uni-stat-result").where(n).field("".concat(r," as temp_").concat(r,", start_time")).groupBy("start_time").groupField("sum(temp_".concat(r,") as ").concat(r)).orderBy("start_time","desc").get().then((function(t){var n=t.result.data;return e=n.length&&n[0][r],e=s(e),a.panelData&&a.panelData.forEach((function(t){t.field===r&&(t.value=e)})),Promise.resolve(e)}))},e.getTimeOfSomeDayAgo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),a=new Date(e),n=864e5,r=[a.getFullYear(),a.getMonth()+1,a.getDate()].join("/");r+=" 00:00:00";var i=new Date(r).getTime()-n*t;return i},e.mapfields=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"value",c=[],d=a;t=JSON.parse(JSON.stringify(t));var l,f=JSON.parse(JSON.stringify(e)),v=(0,i.default)(t);try{for(v.s();!(l=v.n()).done;){var p=l.value,h=p.field,m=p.computed,g=p.formatter,y=p.disable,_=p.fix;if(!y){a=d||p;var b=a.hasOwnProperty(o),w=n+h;if(e){var D=e[w];if(m){var x=m.split("/"),O=(0,r.default)(x,2),C=O[0],S=O[1];C=Number(f[n+C]),S=Number(f[n+S]);var M=s(u(C,S),g,_);b&&h===a.field?a[o]=M:a[h]=M}else if(D){var j=s(D,g,_);b?a.field===h&&(a[o]=j):a[h]=j}}b&&c.push(a)}}}catch(q){v.e(q)}finally{v.f()}return c},e.maxDeltaDay=v,e.parseDateTime=l,e.stringifyField=function(t,e,a){e&&(t=t.filter((function(t){return t.field===e})));a&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(a)})));var n=t.map((function(t){var e=[];return t.computed?e=t.computed.split("/"):e.push(t.field),e=e.map((function(e){return-1===t.stat?e:"".concat(e," as ").concat("temp_"+e)})),e.join()}));return n.join()},e.stringifyGroupField=function(t,e,a){e&&(t=t.filter((function(t){return t.field===e})));a&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(a)})));var n=t.map((function(t){var e=t.stat,a=[];return t.computed?a=t.computed.split("/"):a.push(t.field),a=a.map((function(t){if(-1!==e)return"".concat(e||"sum","(").concat("temp_"+t,") as ").concat(t)})),a.filter(Boolean).join()})).filter(Boolean).join();return n},e.stringifyQuery=c;var r=n(a("3835")),i=n(a("b85c")),o=n(a("53ca"));function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=[],r=Object.keys(t),i=t.start_time;r.forEach((function(r){if("time_range"!==r&&-1===a.indexOf(r)){var o=t[r];o&&("string"===typeof o&&o.indexOf(r)>-1?n.push(o):("string"===typeof o&&(o='"'.concat(o,'"')),Array.isArray(o)?2===o.length&&r.indexOf("time")>-1?n.push("".concat(r," >= ").concat(o[0]," && ").concat(r," <= ").concat(o[1])):(o=o.map((function(t){return"".concat(r,' == "').concat(t,'"')})).join(" || "),o&&n.push("(".concat(o,")"))):e&&"dimension"===r?v(i)?n.push('dimension == "hour"'):o&&'"hour"'!==o?n.push("".concat(r," == ").concat(o)):n.push('dimension == "day"'):n.push("".concat(r," == ").concat(o))))}}));var o=n.join(" && ");return o||{}}function u(t,e){return e?t/e:0}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=arguments.length>2?arguments[2]:void 0;if("number"!==typeof t)return t;if("%"===e)return t*=100,String(t).indexOf(".")>-1&&(t=t.toFixed(2)),t=t?t+e:t,t;if("%%"===e)return t=Number(t),t.toFixed(2)+"%";if("-"===e)return d(t,"day");if(":"===e){var n,r,i;t=Math.ceil(t),n=r=i=0;var o=3600,c=60;if(t>=o){n=Math.floor(t/o);var u=t%o;u>=c?(r=Math.floor(u/c),i=u%c):i=u}else o>=t&&t>=c?(r=Math.floor(t/c),i=t%c):i=t;var s=[n,r,i].map((function(t){return t<10?"0"+t:t}));return s.join(e)}return","===e?t.toLocaleString():(String(t).indexOf(".")>-1&&(t=Math.abs(t)>1?t.toFixed(a||0):t.toFixed(a||2)),t)}function d(t,e){var a=new Date(t);if("hour"===e){var n=a.getHours();return n=n<10?"0"+n:n,"".concat(n,":00 ~ ").concat(n,":59")}if("week"===e){var r=a.getDate()-a.getDay()+1,i=r+6,o=new Date(a.setDate(r));o=l(o);var c=new Date(a.setDate(i));return c=l(c),"".concat(o," ~ ").concat(c)}if("month"===e){var u=new Date(a.getFullYear(),a.getMonth(),1);u=l(u);var s=new Date(a.getFullYear(),a.getMonth()+1,0);return s=l(s),"".concat(u," ~ ").concat(s)}return l(a)}function l(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",n=t;"object"!==(0,o.default)(n)&&(n=new Date(n));var r=n.getFullYear(),i=n.getMonth()+1,c=n.getDate(),u=n.getHours(),s=n.getMinutes(),d=n.getSeconds(),l=[r,f(i),f(c)].join(a),v=[f(u),f(s),f(d)].join(":");return"dateTime"===e?l+" "+v:l}function f(t){return t<10?"0"+t:t}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!t.length)return!0;var a=864e5,n=(0,r.default)(t,2),i=n[0],o=n[1],c=o-i<a*e;return c}a("ac1f"),a("5319"),a("e9c4"),a("d81d"),a("7db0"),a("d3b7"),a("a9e3"),a("c975"),a("14d9"),a("b64b"),a("159b"),a("99af"),a("4de4"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861");var p={}}).call(this,a("a9ff")["default"])},"8b3d":function(t,e,a){var n=a("2a82");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("172e1fb8",n,!0,{sourceMap:!1,shadowMode:!1})},c1ef:function(t,e,a){"use strict";a.r(e);var n=a("c466"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},c466:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af"),a("e9c4"),a("3c65"),a("d3b7"),a("159b"),a("14d9");var r=n(a("b85c")),i=n(a("2909")),o=a("6f6e"),c={data:function(){return{query:{dimension:"day",appid:"",version_id:"",start_time:(0,o.getTimeOfSomeDayAgo)(0)},platforms:[],dayChartsData:[],monChartsData:[],errorMessage:""}},created:function(){var t=this;this.debounceGet=(0,o.debounce)((function(){t.getAllData(t.query)}),300)},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}}},computed:{chartsData:function(){return[].concat((0,i.default)(this.dayChartsData),(0,i.default)(this.monChartsData))},versionQuery:function(){var t=this.query.appid,e=(0,o.stringifyQuery)({appid:t});return e}},methods:{getAllData:function(t){t.appid?(this.errorMessage="",this.getChartData(t),this.getRangeCountData(t,"month")):this.errorMessage="请先选择应用"},getChartData:function(e){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day";e=JSON.parse(JSON.stringify(e));var r=(0,o.getTimeOfSomeDayAgo)(0);if(e.start_time>=r){var i=(new Date).getTime();e.start_time=[r,i],e=(0,o.stringifyQuery)(e,!0)}else e=(0,o.stringifyQuery)(e);var c=t.database();c.collection("uni-stat-result").where(e).field("active_device_count,new_device_count,total_devices,platform_id").groupBy("platform_id").groupField("sum(active_device_count) as ".concat(n,"_active_device_count, sum(new_device_count) as ").concat(n,"_new_device_count, max(total_devices) as ").concat(n,"_total_devices")).get().then((function(t){var e=t.result.data;a.initChartOption(e,"dayChartsData")}))},getRangeCountData:function(e,a){var n=this;e=(0,o.stringifyQuery)(e);var r=t.database();r.collection("uni-stat-result").where(e).field("active_device_count, new_device_count, platform_id, ".concat(a,'(add(new Date(0),start_time), "Asia/Shanghai") as ').concat(a,',year(add(new Date(0),start_time), "Asia/Shanghai") as year')).groupBy("year, ".concat(a?a+",":"","platform_id")).groupField("sum(active_device_count) as ".concat(a,"_active_device_count, sum(new_device_count) as ").concat(a,"_new_device_count")).orderBy("year asc, ".concat(a," asc")).get().then((function(t){var e=t.result.data;n.initChartOption(e,"monChartsData","month")}))},initChartOption:function(e,a){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day",o=t.database();o.collection("uni-stat-app-platforms").get().then((function(t){var o=[{field:"".concat(i,"_new_device_count"),title:"".concat("day"===i?"日":"月","新增设备对比"),series:[{data:[]}]},{field:"".concat(i,"_active_device_count"),title:"".concat("day"===i?"日":"月","活跃设备对比"),series:[{data:[]}]}];"day"===i&&o.unshift({field:"day_total_devices",title:"总设备数对比",series:[{data:[]}]}),n[a]=o;var c=t.result.data,u={};c.forEach((function(t){u[t._id]=t.name}));var s,d=(0,r.default)(n[a]);try{for(d.s();!(s=d.n()).done;){var l,f=s.value,v=f.series[0].data,p=JSON.parse(JSON.stringify(u)),h=(0,r.default)(e);try{for(h.s();!(l=h.n()).done;){var m=l.value;for(var g in m)if(f.field===g){var y=m.platform_id,_={name:p[y],value:m[g]};v.push(_),delete p[y]}}}catch(D){h.e(D)}finally{h.f()}for(var b in p){var w={name:p[b],value:0};v.push(w)}}}catch(D){d.e(D)}finally{d.f()}}))}}};e.default=c}).call(this,a("a9ff")["default"])},fb0c:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("18be").default,uniDataSelect:a("7688").default,uniDatetimePicker:a("a1a0").default,qiunDataCharts:a("1962").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group hide-on-phone"},[a("v-uni-view",{staticClass:"uni-sub-title"},[t._v("多个指标在不同平台数据的占比，可以直观看出各个平台引流的效果")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex mb-m",staticStyle:{padding:"0px 15px"}},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}}),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"ml-m label-text hide-on-phone"},[t._v("日期选择:")]),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":!!t.query.start_time},attrs:{type:"date",returnType:"timestamp",clearIcon:!1},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1)],1),a("v-uni-view",{staticClass:"dispaly-grid"},t._l(t.chartsData,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-stat--x uni-charts-box1"},[a("v-uni-view",{staticClass:"label-text",staticStyle:{margin:"5px 0 20px 0"}},[t._v(t._s(t.chartsData[n].title))]),a("qiun-data-charts",{attrs:{type:"ring",chartData:t.chartsData[n],echartsH5:!0,echartsApp:!0,errorMessage:t.errorMessage}})],1)})),1)],1)],1)},i=[]}}]);