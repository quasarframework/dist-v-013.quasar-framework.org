webpackJsonp([10],{169:function(t,e,o){function a(t){o(362)}var i=o(2)(o(304),o(406),a,null,null);t.exports=i.exports},304:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(0);e.default={components:{QBtn:a.QBtn,QIcon:a.QIcon,QFixedPosition:a.QFixedPosition},directives:{BackToTop:a.BackToTop,Ripple:a.Ripple}}},343:function(t,e,o){e=t.exports=o(93)(void 0),e.push([t.i,".play-backtotop{color:#fff;position:fixed;left:0;top:30%;padding:15px;width:90px;background-color:#26a69a;border-radius:0 15px 15px 0}.play-backtotop:hover{color:#e0e0e0}",""])},362:function(t,e,o){var a=o(343);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(94)("1318ec30",a,!0)},406:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout-padding row justify-center"},[o("div",{staticStyle:{width:"500px","max-width":"90vw"}},[o("p",{staticClass:"caption"},[t._v("\n      Scroll down "),o("q-icon",{staticClass:"animate-bounce",staticStyle:{"font-size":"3rem"},attrs:{name:"keyboard_arrow_down"}})],1),t._v(" "),t._m(0),t._v(" "),o("q-fixed-position",{attrs:{corner:"bottom-right",offset:[18,18]}},[o("q-btn",{directives:[{name:"back-to-top",rawName:"v-back-to-top.animate",value:{offset:500,duration:200},expression:"{offset: 500, duration: 200}",modifiers:{animate:!0}}],staticClass:"animate-pop",attrs:{color:"primary",round:""}},[o("q-icon",{attrs:{name:"keyboard_arrow_up"}})],1)],1),t._v(" "),o("q-fixed-position",{attrs:{corner:"top-left",offset:[0,100]}},[o("a",{directives:[{name:"back-to-top",rawName:"v-back-to-top.animate",value:1e3,expression:"1000",modifiers:{animate:!0}},{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],staticClass:"animate-pop play-backtotop non-selectable"},[t._v("\n        Back to top\n      ")])]),t._v(" "),t._l(50,function(e){return o("p",{staticClass:"caption"},[t._v("Keep scrolling...")])})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"caption"},[t._v("\n      A circular button is set to appear after scrolling 500px.\n      "),o("br"),t._v("\n      After another 500px another element will appear on the left.\n    ")])}]}}});