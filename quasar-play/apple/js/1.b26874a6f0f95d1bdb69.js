webpackJsonp([1],{105:function(t,n,e){function r(t){e(252)}var o=e(3)(e(254),e(260),r,null,null);t.exports=o.exports},189:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},190:function(t,n){var e=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=e)},191:function(t,n,e){t.exports=!e(201)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},193:function(t,n,e){var r=e(203),o=e(211);t.exports=e(191)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},194:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},196:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},197:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},198:function(t,n,e){var r=e(219),o=e(196);t.exports=function(t){return r(o(t))}},199:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},200:function(t,n,e){var r=e(194);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},201:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},202:function(t,n,e){var r=e(207)("keys"),o=e(208);t.exports=function(t){return r[t]||(r[t]=o(t))}},203:function(t,n,e){var r=e(200),o=e(226),a=e(227),i=Object.defineProperty;n.f=e(191)?Object.defineProperty:function(t,n,e){if(r(t),n=a(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},206:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},207:function(t,n,e){var r=e(189),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},208:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},209:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},210:function(t,n,e){var r=e(194),o=e(189).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},211:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},216:function(t,n,e){var r=e(196);t.exports=function(t){return Object(r(t))}},217:function(t,n,e){var r=e(218),o=e(209);t.exports=Object.keys||function(t){return r(t,o)}},218:function(t,n,e){var r=e(197),o=e(198),a=e(220)(!1),i=e(202)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),u=0,l=[];for(e in c)e!=i&&r(c,e)&&l.push(e);for(;n.length>u;)r(c,e=n[u++])&&(~a(l,e)||l.push(e));return l}},219:function(t,n,e){var r=e(206);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},220:function(t,n,e){var r=e(198),o=e(221),a=e(222);t.exports=function(t){return function(n,e,i){var c,u=r(n),l=o(u.length),s=a(i,l);if(t&&e!=e){for(;l>s;)if((c=u[s++])!=c)return!0}else for(;l>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}}},221:function(t,n,e){var r=e(199),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},222:function(t,n,e){var r=e(199),o=Math.max,a=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):a(t,n)}},223:function(t,n,e){var r=e(189),o=e(190),a=e(224),i=e(193),c=function(t,n,e){var u,l,s,f=t&c.F,d=t&c.G,p=t&c.S,v=t&c.P,h=t&c.B,m=t&c.W,y=d?o:o[n]||(o[n]={}),b=y.prototype,g=d?r:p?r[n]:(r[n]||{}).prototype;d&&(e=n);for(u in e)(l=!f&&g&&void 0!==g[u])&&u in y||(s=l?g[u]:e[u],y[u]=d&&"function"!=typeof g[u]?e[u]:h&&l?a(s,r):m&&g[u]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):v&&"function"==typeof s?a(Function.call,s):s,v&&((y.virtual||(y.virtual={}))[u]=s,t&c.R&&b&&!b[u]&&i(b,u,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},224:function(t,n,e){var r=e(225);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},225:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},226:function(t,n,e){t.exports=!e(191)&&!e(201)(function(){return 7!=Object.defineProperty(e(210)("div"),"a",{get:function(){return 7}}).a})},227:function(t,n,e){var r=e(194);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},252:function(t,n,e){var r=e(253);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(99)("1ca867bb",r,!0)},253:function(t,n,e){n=t.exports=e(98)(void 0),n.push([t.i,".play-cards{padding-bottom:90px}.play-cards .q-card-title{font-size:18px;line-height:20px;margin-bottom:8px}",""])},254:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,n){var e=Math.random().toString(36).substr(2,9);u.default.set(e,{name:t,url:n}),l.Toast.create.positive("URL added")}Object.defineProperty(n,"__esModule",{value:!0});var a=e(255),i=r(a),c=e(259),u=r(c),l=e(0);n.default={components:{QBtn:l.QBtn,QFab:l.QFab,QFabAction:l.QFabAction,QCard:l.QCard,QCardTitle:l.QCardTitle,QCardActions:l.QCardActions,QCardSeparator:l.QCardSeparator,QIcon:l.QIcon,QPopover:l.QPopover,QFixedPosition:l.QFixedPosition},data:function(){return{urls:u.default.state}},computed:{hasURLs:function(){return(0,i.default)(this.urls).length>0}},methods:{deleteURL:function(t){l.Dialog.create({title:"Confirm",message:"\n          Are you sure you want to delete the following entry?<br><br>\n          <strong>"+this.urls[t].name+"</strong> - <em>"+this.urls[t].url+"</em>\n        ",buttons:["Cancel",{label:"Delete",handler:function(){u.default.del(t),l.Toast.create.positive("URL removed")}}]})},editURL:function(t){var n=u.default.state[t];l.Dialog.create({title:"Edit URL",form:{name:{type:"text",label:"Name",model:n.name},url:{type:"text",label:"URL",model:n.url}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(n,e){return n.name.length?n.url.length?(e(),void u.default.set(t,{name:n.name,url:n.url})):void l.Toast.create.warning("Please fill in a URL"):void l.Toast.create.warning("Please fill in a name")}}]})},addURL:function(){l.Dialog.create({title:"Add URL",message:"",form:{name:{type:"text",label:"Name",model:""},url:{type:"text",label:"URL",model:"http://"}},buttons:["Cancel",{label:"Add",preventClose:!0,handler:function(t,n){return t.name.length?t.url.length&&"http://"!==t.url?(n(),void o(t.name,t.url)):void l.Toast.create.warning("Please fill in a URL"):void l.Toast.create.warning("Please fill in a name")}}]})},play:function(t){this.$router.push({name:"play-url",params:{url:encodeURIComponent(t)}})},scanQR:function(){var t=this.play;cordova.plugins.barcodeScanner.scan(function(n){if(n.cancelled)return void l.Toast.create("QR code scanning aborted...");l.Dialog.create({title:"QR Scanned",message:"\n              What would you like to do with the URL?<br><br>\n              <strong>"+n.text+"</strong>\n            ",buttons:["Cancel",{label:"Save",handler:function(){l.Dialog.create({title:"New URL",message:"Set a name for your URL ("+n.text+"):",form:{name:{type:"textbox",label:"Name"}},buttons:["Cancel",{label:"Add URL",preventClose:!0,handler:function(t,e){if(!t.name.length)return void l.Toast.create("Please fill in a name");e(),o(t.name,n.text)}}]})}},{label:"Play",handler:function(){t(n.text)}}]})},function(t){l.Dialog.create({message:"Failed to scan the QR code: "+t})})}}}},255:function(t,n,e){t.exports={default:e(256),__esModule:!0}},256:function(t,n,e){e(257),t.exports=e(190).Object.keys},257:function(t,n,e){var r=e(216),o=e(217);e(258)("keys",function(){return function(t){return o(r(t))}})},258:function(t,n,e){var r=e(223),o=e(190),a=e(201);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],i={};i[t]=n(e),r(r.S+r.F*a(function(){e(1)}),"Object",i)}},259:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(1),o=function(t){return t&&t.__esModule?t:{default:t}}(r),a=e(0);n.default={state:a.LocalStorage.get.item("playURLs")||{},set:function(t,n){o.default.set(this.state,t,n),a.LocalStorage.set("playURLs",this.state)},del:function(t){o.default.delete(this.state,t),a.LocalStorage.set("playURLs",this.state)}}},260:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout-padding play-cards"},[t.hasURLs?t._e():e("blockquote",[e("small",[t._v("\n      Register your first URL by tapping on the FAB button on the lower\n      right corner of this screen.\n      You can either scan a QR code ("),e("i",[t._v("phonelink_ring")]),t._v(") or manually add a URL\n      ("),e("i",[t._v("add")]),t._v(").\n    ")])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.urls,function(n,r){return e("div",{key:n,staticClass:"col-xs-12 col-sm-6 col-lg-4 col-xl-3"},[e("q-card",[e("q-card-title",[e("div",{staticClass:"ellipsis-2-lines"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"ellipsis-3-lines",slot:"subtitle"},[t._v(t._s(n.url))])]),t._v(" "),e("q-card-separator"),t._v(" "),e("q-card-actions",[e("q-btn",{attrs:{flat:"",color:"tertiary",icon:"ondemand_video"},on:{click:function(e){t.play(n.url)}}},[t._v("Play")]),t._v(" "),e("div",{staticClass:"col"}),t._v(" "),e("q-btn",{attrs:{flat:"",color:"secondary"},on:{click:function(n){t.editURL(r)}}},[e("q-icon",{attrs:{name:"edit"}})],1),t._v(" "),e("q-btn",{attrs:{flat:"",color:"secondary"},on:{click:function(n){t.deleteURL(r)}}},[e("q-icon",{attrs:{name:"delete"}})],1)],1)],1)],1)})),t._v(" "),e("q-fixed-position",{attrs:{corner:"bottom-right",offset:[16,16]}},[t.$q.platform.is.cordova?e("q-fab",{attrs:{color:"primary",direction:"up"}},[e("q-fab-action",{attrs:{color:"secondary",icon:"phonelink_ring"},nativeOn:{click:function(n){t.scanQR()}}}),t._v(" "),e("q-fab-action",{attrs:{color:"primary",icon:"add"},nativeOn:{click:function(n){t.addURL()}}})],1):e("q-btn",{staticClass:"cordova-hide absolute-bottom-right shadow-4",staticStyle:{right:"16px",bottom:"16px"},attrs:{color:"primary",round:"",glossy:""},on:{click:function(n){t.addURL()}}},[e("q-icon",{attrs:{name:"add"}})],1)],1)],1)},staticRenderFns:[]}}});