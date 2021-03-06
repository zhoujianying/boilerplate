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
/******/ 	return __webpack_require__(__webpack_require__.s = 238);
/******/ })
/************************************************************************/
/******/ ({

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(50)
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
__vue_options__.__file = "/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/input.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3960f0c8"
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

/***/ 48:
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41B883"
  }
}

/***/ }),

/***/ 49:
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


exports.default = {
    props: {
        placeholder: {
            default: ''

        },
        placeholder_color: {
            default: '#ffffff'

        },
        color: {
            default: '#000000'

        },
        value: {
            default: ''
        },

        type: {
            type: String,
            default: 'text'
        },
        font_size: {
            default: 20
        },
        autofocus: {
            default: false
        },
        return_key_type: {
            default: 'defalut'
        }

    },
    data: function data() {
        return {

            pulldistance: 180,
            visiable: true

        };
    },

    methods: {
        onchange: function onchange(event) {
            this.visiable = !event.value == '';
            //                this.$emit('onchange',event.value);
            this.value = event.value;
            //                this.name="xxx"
        },
        onfocus: function onfocus() {
            this.$emit('focus');
        },
        focus: function focus() {
            this.$refs.input.focus();
        },
        blur: function blur() {
            this.$refs.input.blur();
            this.$emit('blur');
        },
        oninput: function oninput(e) {

            //                this.$emit('oninput');
            this.value = e.value;
            this.visiable = e.value != '';
            this.$emit('onchange', e.value);
        },
        onreturn: function onreturn(e) {
            this.$emit('return', e);
        },
        onclose: function onclose() {
            this.value = '';
            this.visiable = false;
            this.$emit('onchange', '');
        }
    },

    created: function created() {
        var globalEvent = weex.requireModule('globalEvent');
        globalEvent.addEventListener("onPageInit", function (e) {});

        this.visiable = !this.value == '';
    },
    ready: function ready() {}
};

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      height: "100",
      alignItems: "center",
      backgroundColor: "red"
    }
  }, [_c('input', {
    ref: "input",
    staticStyle: {
      flex: "1",
      paddingLeft: "20",
      height: "100"
    },
    style: {
      'color': _vm.color,
      'placeholder-color': _vm.placeholder_color
    },
    attrs: {
      "returnKeyType": _vm.return_key_type,
      "autofocus": _vm.autofocus,
      "placeholder": _vm.placeholder,
      "type": _vm.type,
      "value": (_vm.value)
    },
    on: {
      "return": _vm.onreturn,
      "focus": _vm.onfocus,
      "change": _vm.onchange,
      "input": [function($event) {
        _vm.value = $event.target.attr.value
      }, _vm.oninput]
    }
  }), (_vm.visiable) ? _c('div', {
    staticStyle: {
      width: "50px",
      height: "100px",
      marginRight: "10",
      alignItems: "center",
      justifyContent: "center"
    },
    on: {
      "click": function($event) {
        _vm.onclose()
      }
    }
  }, [_c('image', {
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      "src": "root:img/delete.png"
    }
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });