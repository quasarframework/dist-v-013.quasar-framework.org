webpackJsonp([8],{184:function(e,t,i){function n(e){i(472)}var r=i(3)(i(474),i(475),n,null,null);e.exports=r.exports},472:function(e,t,i){var n=i(473);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(101)("1bb5d4b1",n,!0)},473:function(e,t,i){t=e.exports=i(100)(void 0),t.push([e.i,".docs-ripple>div>.relative-position{height:150px;border-radius:3px;cursor:pointer;color:#fff;transition:background 1.5s;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}",""])},474:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=["primary","amber","secondary","orange","tertiary","lime","cyan","purple","brown","blue"];t.default={directives:{Ripple:n.Ripple},data:function(){return{color:r[0],index:0}},computed:{classes:function(){return"bg-"+this.color}},mounted:function(){var e=this;this.timer=setInterval(function(){e.index=(e.index+1)%r.length,e.color=r[e.index]},3e3)},beforeDestroy:function(){clearInterval(this.timer)}}},475:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout-padding docs-ripple row justify-center"},[i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[e._m(0),e._v(" "),i("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"relative-position",class:e.classes},[e._v(" ")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"caption"},[i("span",{staticClass:"desktop-only"},[e._v("Click")]),e._v(" "),i("span",{staticClass:"mobile-only"},[e._v("Tap")]),e._v("\n      on the area below to see it in action.\n    ")])}]}}});