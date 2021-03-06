// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 328);
/******/ })
/************************************************************************/
/******/ ({

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(329)
)

/* script */
__vue_exports__ = __webpack_require__(330)

/* template */
var __vue_template__ = __webpack_require__(331)
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
__vue_options__.__file = "/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/host.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-374f9a18"
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

/***/ 329:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


exports.default = {
    components: {},
    data: {
        logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
        target: 'World',
        index: 0,
        items: ['home.js', 'inputs.js', 'lopper.js', 'nav1.js']
    },
    methods: {
        update: function update(e) {
            this.target = 'Weex';
            console.log('target:', this.target);
        },
        change: function change(i) {
            this.index = i;
        },
        show: function show() {
            var modal = weex.requireModule("modal");
            var p = weex.config.env.osVersion;
            //              p=p.replace('.', "")
            //          p=p.replace(/./g,"");
            p = p.replace(/\./g, '');
            modal.alert({ message: p });
        }
    },

    created: function created() {

        var globalEvent = weex.requireModule('globalEvent');
        var self = this;
        globalEvent.addEventListener("onPageInit", function (e) {

            var page = weex.requireModule('page');
            page.closeSplash();
        });
    }
};

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flex: "1"
    }
  }, [_c('host', {
    staticStyle: {
      position: "absolute",
      left: "0",
      top: "0",
      right: "0",
      bottom: "100"
    },
    attrs: {
      "index": _vm.index,
      "items": _vm.items
    }
  }), _c('div', {
    staticStyle: {
      height: "100",
      width: "750",
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      flexDirection: "row",
      backgroundColor: "#0088fb"
    }
  }, [_c('div', {
    staticStyle: {
      flex: "1",
      alignItems: "center",
      justifyContent: "center"
    },
    on: {
      "click": function($event) {
        _vm.change(0)
      }
    }
  }, [_c('text', [_vm._v("推荐")])]), _c('div', {
    staticStyle: {
      flex: "1",
      alignItems: "center",
      justifyContent: "center"
    },
    on: {
      "click": function($event) {
        _vm.change(1)
      }
    }
  }, [_c('text', [_vm._v("电视剧")])]), _c('div', {
    staticStyle: {
      flex: "1",
      alignItems: "center",
      justifyContent: "center"
    },
    on: {
      "click": function($event) {
        _vm.change(2)
      }
    }
  }, [_c('text', [_vm._v("电影")])]), _c('div', {
    staticStyle: {
      flex: "1",
      alignItems: "center",
      justifyContent: "center"
    },
    on: {
      "click": function($event) {
        _vm.change(3)
      }
    }
  }, [_c('text', [_vm._v("收藏")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });