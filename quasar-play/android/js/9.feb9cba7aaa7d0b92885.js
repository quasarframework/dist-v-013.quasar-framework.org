webpackJsonp([9],{183:function(e,t,i){function o(e){i(468)}var n=i(3)(i(470),i(471),o,null,null);e.exports=n.exports},468:function(e,t,i){var o=i(469);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(101)("5769f129",o,!0)},469:function(e,t,i){t=e.exports=i(100)(void 0),t.push([e.i,"#view-colors div.main-color{width:110px;margin:5px;height:40px}#view-colors .detailed-color{width:100%}#view-colors div.detailed-color{height:55px}#view-colors div.detail{margin-bottom:25px;max-width:400px;min-width:135px;display:inline-block;margin-right:5px}#view-colors h5{margin-bottom:5px;padding:10px 5px}",""])},470:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{mainColors:["primary","secondary","tertiary","positive","negative","info","warning","faded","dark"],mainLightColors:["white","light"],colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"]}}}},471:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout-padding text-center",attrs:{id:"view-colors"}},[i("p",{staticClass:"caption"},[e._v("Main Colors")]),e._v(" "),e._l(e.mainColors,function(t){return i("div",{staticClass:"main-color shadow-1 row inline flex-center text-white",class:"bg-"+t},[e._v("\n    "+e._s(t)+"\n  ")])}),e._v(" "),e._l(e.mainLightColors,function(t){return i("div",{staticClass:"main-color shadow-1 row inline flex-center text-dark",class:"bg-"+t},[e._v("\n    "+e._s(t)+"\n  ")])}),e._v(" "),i("p",{staticClass:"caption"},[e._v("Full Palette")]),e._v(" "),e._l(e.colors,function(t){return i("div",{staticClass:"detail"},[i("h5",{staticClass:"detailed-color shadow-1 column flex-center text-white",class:"bg-"+t},[e._v(e._s(t))]),e._v(" "),e._l(14,function(o){return i("div",{staticClass:"detailed-color column flex-center",class:"bg-"+t+"-"+o},[e._v(e._s(t)+"-"+e._s(o))])})],2)})],2)},staticRenderFns:[]}}});