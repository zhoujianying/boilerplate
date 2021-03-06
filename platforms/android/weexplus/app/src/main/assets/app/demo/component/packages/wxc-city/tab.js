// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(159)
	)

	/* script */
	__vue_exports__ = __webpack_require__(160)

	/* template */
	var __vue_template__ = __webpack_require__(161)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/packages/wxc-city/tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-210aec70"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

	module.exports = {
	  "tab-box": {
	    "width": 750,
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "tab-item": {
	    "flex": 1,
	    "height": 90,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "tab-item-text": {
	    "textAlign": "center",
	    "color": "#000000",
	    "fontSize": 28,
	    "fontWeight": "normal"
	  },
	  "text-selected": {
	    "fontWeight": "bold"
	  },
	  "tab-item-selected-bar": {
	    "width": 750,
	    "backgroundColor": "#f2f3f4"
	  },
	  "tab-item-selected-bar-in": {
	    "width": 375,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row",
	    "height": 6
	  },
	  "tab-item-active": {
	    "backgroundColor": "#ffb200",
	    "width": 92,
	    "height": 6
	  }
	}

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {},
	  data: function data() {
	    return {
	      checkedIndex: 0
	    };
	  },
	  methods: {
	    switchTab: function switchTab(index) {
	      var animation = weex.requireModule('animation');
	      this.checkedIndex = index;
	      this.$emit('wxcTabSwitch', {
	        index: index
	      });
	      animation.transition(this.$refs['tab-bar'], {
	        styles: {
	          transform: 'translateX(' + index * 375 + 'px)'
	        },
	        duration: 150, // ms
	        timingFunction: 'ease',
	        delay: 0 // ms
	      }, function () {});
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["tab-box"]
	  }, _vm._l((['国内', '国际']), function(name, i) {
	    return _c('div', {
	      key: i,
	      staticClass: ["tab-item"],
	      on: {
	        "click": function($event) {
	          _vm.switchTab(i)
	        }
	      }
	    }, [_c('text', {
	      staticClass: ["['tab-item-text',", "i===checkedIndex", "&&", "'text-selected']"]
	    }, [_vm._v(_vm._s(name))])])
	  })), _c('div', {
	    staticClass: ["tab-item-selected-bar"]
	  }, [_c('div', {
	    ref: "tab-bar",
	    staticClass: ["tab-item-selected-bar-in"]
	  }, [_c('div', {
	    staticClass: ["tab-item-active"]
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });