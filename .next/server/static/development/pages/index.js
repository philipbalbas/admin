module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./common/EntityProvider.bs.js":
/*!*************************************!*\
  !*** ./common/EntityProvider.bs.js ***!
  \*************************************/
/*! exports provided: initValue, context, useEntity, make, makeProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initValue", function() { return initValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEntity", function() { return useEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProps", function() { return makeProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var initValue_000 = {
  categoryId: "",
  moduleId: "",
  subjecId: ""
};

function initValue_001(param) {}

var initValue =
/* tuple */
[initValue_000, initValue_001];
var context = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](initValue);

function useEntity(param) {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](context);
}

var make = context.Provider;

function makeProps(value, children, param) {
  return {
    value: value,
    children: children
  };
}


/* context Not a pure module */

/***/ }),

/***/ "./common/__generated__/CategoryListQuery_graphql.bs.js":
/*!**************************************************************!*\
  !*** ./common/__generated__/CategoryListQuery_graphql.bs.js ***!
  \**************************************************************/
/*! exports provided: Types, Internal, Utils, node, Preload, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Internal", function() { return Internal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node", function() { return node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preload", function() { return Preload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reason-relay/src/ReasonRelay.bs.js */ "./node_modules/reason-relay/src/ReasonRelay.bs.js");

var Types = {};
var responseConverter = {
  "__root": {
    "listCategories": {
      "n": ""
    }
  }
};

function convertResponse(v) {
  return reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_0__["_convertObj"](v, responseConverter, undefined, undefined);
}

var variablesConverter = {};

function convertVariables(v) {
  return reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_0__["_convertObj"](v, variablesConverter, undefined, undefined);
}

var Internal = {
  responseConverter: responseConverter,
  responseConverterMap: undefined,
  convertResponse: convertResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables
};
var Utils = {};

var node = function () {
  var v0 = [{
    "alias": null,
    "args": null,
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "listCategories",
    "plural": true,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }],
    "storageKey": null
  }];
  return {
    "fragment": {
      "argumentDefinitions": [],
      "kind": "Fragment",
      "metadata": null,
      "name": "CategoryListQuery",
      "selections": v0
      /*: any*/
      ,
      "type": "RootQueryType"
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [],
      "kind": "Operation",
      "name": "CategoryListQuery",
      "selections": v0
      /*: any*/

    },
    "params": {
      "id": null,
      "metadata": {},
      "name": "CategoryListQuery",
      "operationKind": "query",
      "text": "query CategoryListQuery {\n  listCategories {\n    name\n    id\n  }\n}\n"
    }
  };
}();

var Preload = reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_0__["MakePreloadQuery"]({
  query: node,
  convertVariables: convertVariables
});
var preload = Preload.preload;

/* responseConverter Not a pure module */

/***/ }),

/***/ "./components/CategoryList.bs.js":
/*!***************************************!*\
  !*** ./components/CategoryList.bs.js ***!
  \***************************************/
/*! exports provided: Query, make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bs_platform_lib_es6_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bs-platform/lib/es6/array.js */ "./node_modules/bs-platform/lib/es6/array.js");
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reason-relay/src/ReasonRelay.bs.js */ "./node_modules/reason-relay/src/ReasonRelay.bs.js");
/* harmony import */ var bs_platform_lib_es6_caml_chrome_debugger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bs-platform/lib/es6/caml_chrome_debugger.js */ "./node_modules/bs-platform/lib/es6/caml_chrome_debugger.js");
/* harmony import */ var _common_EntityProvider_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/EntityProvider.bs.js */ "./common/EntityProvider.bs.js");
/* harmony import */ var _common_generated_CategoryListQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/__generated__/CategoryListQuery_graphql.bs.js */ "./common/__generated__/CategoryListQuery_graphql.bs.js");









var convertResponse = _common_generated_CategoryListQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_8__["Internal"].convertResponse;
var convertVariables = _common_generated_CategoryListQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_8__["Internal"].convertVariables;
var UseQuery = reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_5__["MakeUseQuery"]({
  query: _common_generated_CategoryListQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_8__["node"],
  convertResponse: convertResponse,
  convertVariables: convertVariables
});
var use = UseQuery.use;
var Query_fetch = UseQuery.$$fetch;
var Query_fetchPromised = UseQuery.fetchPromised;
var Query_preload = UseQuery.preload;
var Query_usePreloaded = UseQuery.usePreloaded;
var Query = {
  Operation: undefined,
  Types: undefined,
  UseQuery: UseQuery,
  use: use,
  $$fetch: Query_fetch,
  fetchPromised: Query_fetchPromised,
  preload: Query_preload,
  usePreloaded: Query_usePreloaded
};

function CategoryList(Props) {
  var queryData = bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_6"](use, undefined, undefined, undefined, undefined, undefined, undefined);

  var match = _common_EntityProvider_bs_js__WEBPACK_IMPORTED_MODULE_7__["useEntity"](undefined);
  var dispatch = match[1];
  var entity = match[0];
  var categories = queryData.listCategories;
  var content = categories !== undefined ? bs_platform_lib_es6_array_js__WEBPACK_IMPORTED_MODULE_1__["mapi"](function (i, cat) {
    var id = cat.id;
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      children: cat.name,
      extra: react__WEBPACK_IMPORTED_MODULE_3__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/[categoryId]",
        as: "/" + (String(id) + ""),
        children: react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", {
          className: "cursor-pointer",
          onClick: function (param) {
            return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](dispatch,
            /* UpdateEntity */
            bs_platform_lib_es6_caml_chrome_debugger_js__WEBPACK_IMPORTED_MODULE_6__["simpleVariant"]("UpdateEntity", [{
              categoryId: id,
              moduleId: entity.moduleId,
              subjecId: entity.subjecId
            }]));
          }
        }, "Select")
      }),
      hoverable: true,
      title: cat.name,
      key: String(i)
    });
  }, categories) : react__WEBPACK_IMPORTED_MODULE_3__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    children: "Nada"
  });
  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: "grid grid-cols-3 gap-4"
  }, content);
}

var make = CategoryList;

/* UseQuery Not a pure module */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/array.js":
/*!***************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/array.js ***!
  \***************************************************/
/*! exports provided: make_float, init, make_matrix, create_matrix, append, concat, sub, copy, fill, blit, to_list, of_list, iter, iteri, map, mapi, fold_left, fold_right, iter2, map2, for_all, exists, mem, memq, sort, stable_sort, fast_sort, Floatarray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make_float", function() { return make_float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make_matrix", function() { return make_matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_matrix", function() { return create_matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blit", function() { return blit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_list", function() { return to_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of_list", function() { return of_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iter", function() { return iter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iteri", function() { return iteri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapi", function() { return mapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold_left", function() { return fold_left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold_right", function() { return fold_right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iter2", function() { return iter2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map2", function() { return map2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "for_all", function() { return for_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mem", function() { return mem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memq", function() { return memq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stable_sort", function() { return stable_sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fast_sort", function() { return fast_sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Floatarray", function() { return Floatarray; });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var _caml_obj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_obj.js */ "./node_modules/bs-platform/lib/es6/caml_obj.js");
/* harmony import */ var _caml_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caml_array.js */ "./node_modules/bs-platform/lib/es6/caml_array.js");
/* harmony import */ var _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caml_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_exceptions.js");
/* harmony import */ var _caml_js_exceptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./caml_js_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_js_exceptions.js");
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");






var make_float = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_float_vect"];
var Floatarray = {};

function init(l, f) {
  if (l === 0) {
    return [];
  }

  if (l < 0) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_5__["invalid_argument"], "Array.init"];
  }

  var res = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_vect"](l, _curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](f, 0));

  for (var i = 1; i < l; ++i) {
    res[i] = _curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](f, i);
  }

  return res;
}

function make_matrix(sx, sy, init) {
  var res = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_vect"](sx, []);

  for (var x = 0; x < sx; ++x) {
    res[x] = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_vect"](sy, init);
  }

  return res;
}

function copy(a) {
  var l = a.length;

  if (l === 0) {
    return [];
  } else {
    return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_sub"](a, 0, l);
  }
}

function append(a1, a2) {
  var l1 = a1.length;

  if (l1 === 0) {
    return copy(a2);
  } else if (a2.length === 0) {
    return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_sub"](a1, 0, l1);
  } else {
    return a1.concat(a2);
  }
}

function sub(a, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (a.length - len | 0)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_5__["invalid_argument"], "Array.sub"];
  }

  return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_sub"](a, ofs, len);
}

function fill(a, ofs, len, v) {
  if (ofs < 0 || len < 0 || ofs > (a.length - len | 0)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_5__["invalid_argument"], "Array.fill"];
  }

  for (var i = ofs, i_finish = ofs + len | 0; i < i_finish; ++i) {
    a[i] = v;
  }
}

function blit(a1, ofs1, a2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_5__["invalid_argument"], "Array.blit"];
  }

  return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_blit"](a1, ofs1, a2, ofs2, len);
}

function iter(f, a) {
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    _curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](f, a[i]);
  }
}

function iter2(f, a, b) {
  if (a.length !== b.length) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_5__["invalid_argument"], "Array.iter2: arrays must have the same length"];
  }

  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](f, a[i], b[i]);
  }
}

function map(f, a) {
  var l = a.length;

  if (l === 0) {
    return [];
  }

  var r = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_vect"](l, _curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](f, a[0]));

  for (var i = 1; i < l; ++i) {
    r[i] = _curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](f, a[i]);
  }

  return r;
}

function map2(f, a, b) {
  var la = a.length;
  var lb = b.length;

  if (la !== lb) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_5__["invalid_argument"], "Array.map2: arrays must have the same length"];
  }

  if (la === 0) {
    return [];
  }

  var r = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_vect"](la, _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](f, a[0], b[0]));

  for (var i = 1; i < la; ++i) {
    r[i] = _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](f, a[i], b[i]);
  }

  return r;
}

function iteri(f, a) {
  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](f, i, a[i]);
  }
}

function mapi(f, a) {
  var l = a.length;

  if (l === 0) {
    return [];
  }

  var r = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_vect"](l, _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](f, 0, a[0]));

  for (var i = 1; i < l; ++i) {
    r[i] = _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](f, i, a[i]);
  }

  return r;
}

function to_list(a) {
  var _i = a.length - 1 | 0;

  var _res =
  /* [] */
  0;

  while (true) {
    var res = _res;
    var i = _i;

    if (i < 0) {
      return res;
    }

    _res =
    /* :: */
    [a[i], res];
    _i = i - 1 | 0;
    continue;
  }

  ;
}

function list_length(_accu, _param) {
  while (true) {
    var param = _param;
    var accu = _accu;

    if (!param) {
      return accu;
    }

    _param = param[1];
    _accu = accu + 1 | 0;
    continue;
  }

  ;
}

function of_list(l) {
  if (!l) {
    return [];
  }

  var a = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_vect"](list_length(0, l), l[0]);
  var _i = 1;
  var _param = l[1];

  while (true) {
    var param = _param;
    var i = _i;

    if (!param) {
      return a;
    }

    a[i] = param[0];
    _param = param[1];
    _i = i + 1 | 0;
    continue;
  }

  ;
}

function fold_left(f, x, a) {
  var r = x;

  for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
    r = _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](f, r, a[i]);
  }

  return r;
}

function fold_right(f, a, x) {
  var r = x;

  for (var i = a.length - 1 | 0; i >= 0; --i) {
    r = _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](f, a[i], r);
  }

  return r;
}

function exists(p, a) {
  var n = a.length;
  var _i = 0;

  while (true) {
    var i = _i;

    if (i === n) {
      return false;
    }

    if (_curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](p, a[i])) {
      return true;
    }

    _i = i + 1 | 0;
    continue;
  }

  ;
}

function for_all(p, a) {
  var n = a.length;
  var _i = 0;

  while (true) {
    var i = _i;

    if (i === n) {
      return true;
    }

    if (!_curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](p, a[i])) {
      return false;
    }

    _i = i + 1 | 0;
    continue;
  }

  ;
}

function mem(x, a) {
  var n = a.length;
  var _i = 0;

  while (true) {
    var i = _i;

    if (i === n) {
      return false;
    }

    if (_caml_obj_js__WEBPACK_IMPORTED_MODULE_1__["caml_equal"](a[i], x)) {
      return true;
    }

    _i = i + 1 | 0;
    continue;
  }

  ;
}

function memq(x, a) {
  var n = a.length;
  var _i = 0;

  while (true) {
    var i = _i;

    if (i === n) {
      return false;
    }

    if (x === a[i]) {
      return true;
    }

    _i = i + 1 | 0;
    continue;
  }

  ;
}

var Bottom = _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["create"]("Array.Bottom");

function sort(cmp, a) {
  var maxson = function (l, i) {
    var i31 = ((i + i | 0) + i | 0) + 1 | 0;
    var x = i31;

    if ((i31 + 2 | 0) < l) {
      if (_curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](cmp, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, i31), _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, i31 + 1 | 0)) < 0) {
        x = i31 + 1 | 0;
      }

      if (_curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](cmp, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, x), _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, i31 + 2 | 0)) < 0) {
        x = i31 + 2 | 0;
      }

      return x;
    }

    if ((i31 + 1 | 0) < l && _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](cmp, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, i31), _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, i31 + 1 | 0)) < 0) {
      return i31 + 1 | 0;
    }

    if (i31 < l) {
      return i31;
    }

    throw [Bottom, i];
  };

  var trickle = function (l, i, e) {
    try {
      var _i = i;

      while (true) {
        var i$1 = _i;
        var j = maxson(l, i$1);

        if (_curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](cmp, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, j), e) <= 0) {
          return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, i$1, e);
        }

        _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, i$1, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, j));
        _i = j;
        continue;
      }

      ;
    } catch (raw_i) {
      var i$2 = _caml_js_exceptions_js__WEBPACK_IMPORTED_MODULE_4__["internalToOCamlException"](raw_i);

      if (i$2[0] === Bottom) {
        return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, i$2[1], e);
      }

      throw i$2;
    }
  };

  var bubble = function (l, i) {
    try {
      var _i = i;

      while (true) {
        var i$1 = _i;
        var j = maxson(l, i$1);
        _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, i$1, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, j));
        _i = j;
        continue;
      }

      ;
    } catch (raw_i) {
      var i$2 = _caml_js_exceptions_js__WEBPACK_IMPORTED_MODULE_4__["internalToOCamlException"](raw_i);

      if (i$2[0] === Bottom) {
        return i$2[1];
      }

      throw i$2;
    }
  };

  var trickleup = function (_i, e) {
    while (true) {
      var i = _i;
      var father = (i - 1 | 0) / 3 | 0;

      if (i === father) {
        throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_5__["assert_failure"],
        /* tuple */
        ["array.ml", 238, 4]];
      }

      if (_curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](cmp, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, father), e) >= 0) {
        return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, i, e);
      }

      _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, i, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, father));

      if (father <= 0) {
        return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, 0, e);
      }

      _i = father;
      continue;
    }

    ;
  };

  var l = a.length;

  for (var i = ((l + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i) {
    trickle(l, i, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, i));
  }

  for (var i$1 = l - 1 | 0; i$1 >= 2; --i$1) {
    var e = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, i$1);
    _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, i$1, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, 0));
    trickleup(bubble(i$1, 0), e);
  }

  if (l <= 1) {
    return;
  }

  var e$1 = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, 1);
  _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, 1, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, 0));
  return _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](a, 0, e$1);
}

function stable_sort(cmp, a) {
  var merge = function (src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
    var src1r = src1ofs + src1len | 0;
    var src2r = src2ofs + src2len | 0;
    var _i1 = src1ofs;

    var _s1 = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, src1ofs);

    var _i2 = src2ofs;

    var _s2 = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](src2, src2ofs);

    var _d = dstofs;

    while (true) {
      var d = _d;
      var s2 = _s2;
      var i2 = _i2;
      var s1 = _s1;
      var i1 = _i1;

      if (_curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](cmp, s1, s2) <= 0) {
        _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](dst, d, s1);
        var i1$1 = i1 + 1 | 0;

        if (i1$1 >= src1r) {
          return blit(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
        }

        _d = d + 1 | 0;
        _s1 = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, i1$1);
        _i1 = i1$1;
        continue;
      }

      _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](dst, d, s2);
      var i2$1 = i2 + 1 | 0;

      if (i2$1 >= src2r) {
        return blit(a, i1, dst, d + 1 | 0, src1r - i1 | 0);
      }

      _d = d + 1 | 0;
      _s2 = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](src2, i2$1);
      _i2 = i2$1;
      continue;
    }

    ;
  };

  var isortto = function (srcofs, dst, dstofs, len) {
    for (var i = 0; i < len; ++i) {
      var e = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, srcofs + i | 0);
      var j = (dstofs + i | 0) - 1 | 0;

      while (j >= dstofs && _curry_js__WEBPACK_IMPORTED_MODULE_0__["_2"](cmp, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](dst, j), e) > 0) {
        _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](dst, j + 1 | 0, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](dst, j));
        j = j - 1 | 0;
      }

      ;
      _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_set"](dst, j + 1 | 0, e);
    }
  };

  var sortto = function (srcofs, dst, dstofs, len) {
    if (len <= 5) {
      return isortto(srcofs, dst, dstofs, len);
    }

    var l1 = len / 2 | 0;
    var l2 = len - l1 | 0;
    sortto(srcofs + l1 | 0, dst, dstofs + l1 | 0, l2);
    sortto(srcofs, a, srcofs + l2 | 0, l1);
    return merge(srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs);
  };

  var l = a.length;

  if (l <= 5) {
    return isortto(0, a, 0, l);
  }

  var l1 = l / 2 | 0;
  var l2 = l - l1 | 0;
  var t = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_make_vect"](l2, _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_get"](a, 0));
  sortto(l1, t, 0, l2);
  sortto(0, a, l2, l1);
  return merge(l2, l1, t, 0, l2, a, 0);
}

var create_matrix = make_matrix;
var concat = _caml_array_js__WEBPACK_IMPORTED_MODULE_2__["caml_array_concat"];
var fast_sort = stable_sort;

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/block.js":
/*!***************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/block.js ***!
  \***************************************************/
/*! exports provided: __ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
function __(tag, block) {
  block.tag = tag;
  return block;
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_array.js":
/*!********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_array.js ***!
  \********************************************************/
/*! exports provided: caml_array_dup, caml_array_sub, caml_array_concat, caml_make_vect, caml_make_float_vect, caml_array_blit, caml_array_get, caml_array_set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_dup", function() { return caml_array_dup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_sub", function() { return caml_array_sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_concat", function() { return caml_array_concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_make_vect", function() { return caml_make_vect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_make_float_vect", function() { return caml_make_float_vect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_blit", function() { return caml_array_blit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_get", function() { return caml_array_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_array_set", function() { return caml_array_set; });
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");


function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;

  while (j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }

  ;
  return result;
}

function len(_acc, _l) {
  while (true) {
    var l = _l;
    var acc = _acc;

    if (!l) {
      return acc;
    }

    _l = l[1];
    _acc = l[0].length + acc | 0;
    continue;
  }

  ;
}

function fill(arr, _i, _l) {
  while (true) {
    var l = _l;
    var i = _i;

    if (!l) {
      return;
    }

    var x = l[0];
    var l$1 = x.length;
    var k = i;
    var j = 0;

    while (j < l$1) {
      arr[k] = x[j];
      k = k + 1 | 0;
      j = j + 1 | 0;
    }

    ;
    _l = l[1];
    _i = k;
    continue;
  }

  ;
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["invalid_argument"], "index out of bounds"];
  }

  xs[index] = newval;
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_0__["invalid_argument"], "index out of bounds"];
  }

  return xs[index];
}

function caml_make_vect(len, init) {
  var b = new Array(len);

  for (var i = 0; i < len; ++i) {
    b[i] = init;
  }

  return b;
}

function caml_make_float_vect(len) {
  var b = new Array(len);

  for (var i = 0; i < len; ++i) {
    b[i] = 0;
  }

  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for (var j = 0; j < len; ++j) {
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }

    return;
  }

  for (var j$1 = len - 1 | 0; j$1 >= 0; --j$1) {
    a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
  }
}

function caml_array_dup(prim) {
  return prim.slice(0);
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js ***!
  \*********************************************************************/
/*! exports provided: out_of_memory, sys_error, failure, invalid_argument, end_of_file, division_by_zero, not_found, match_failure, stack_overflow, sys_blocked_io, assert_failure, undefined_recursive_module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "out_of_memory", function() { return out_of_memory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sys_error", function() { return sys_error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_argument", function() { return invalid_argument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end_of_file", function() { return end_of_file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "division_by_zero", function() { return division_by_zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_found", function() { return not_found; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match_failure", function() { return match_failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stack_overflow", function() { return stack_overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sys_blocked_io", function() { return sys_blocked_io; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert_failure", function() { return assert_failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefined_recursive_module", function() { return undefined_recursive_module; });
var out_of_memory =
/* tuple */
["Out_of_memory", 0];
var sys_error =
/* tuple */
["Sys_error", -1];
var failure =
/* tuple */
["Failure", -2];
var invalid_argument =
/* tuple */
["Invalid_argument", -3];
var end_of_file =
/* tuple */
["End_of_file", -4];
var division_by_zero =
/* tuple */
["Division_by_zero", -5];
var not_found =
/* tuple */
["Not_found", -6];
var match_failure =
/* tuple */
["Match_failure", -7];
var stack_overflow =
/* tuple */
["Stack_overflow", -8];
var sys_blocked_io =
/* tuple */
["Sys_blocked_io", -9];
var assert_failure =
/* tuple */
["Assert_failure", -10];
var undefined_recursive_module =
/* tuple */
["Undefined_recursive_module", -11];
out_of_memory.tag = 248;
sys_error.tag = 248;
failure.tag = 248;
invalid_argument.tag = 248;
end_of_file.tag = 248;
division_by_zero.tag = 248;
not_found.tag = 248;
match_failure.tag = 248;
stack_overflow.tag = 248;
sys_blocked_io.tag = 248;
assert_failure.tag = 248;
undefined_recursive_module.tag = 248;

/*  Not a pure module */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_chrome_debugger.js":
/*!******************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_chrome_debugger.js ***!
  \******************************************************************/
/*! exports provided: __, variant, simpleVariant, polyVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleVariant", function() { return simpleVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyVar", function() { return polyVar; });
/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ "./node_modules/bs-platform/lib/es6/block.js");


var setupChromeDebugger = function (_) {
  // I don't know how to directly refer to the classes that chrome's built-in
  // formatters use. adding "class": "foo" doesn't seem to work
  // tree-outline
  var olStyle = {
    "style": "list-style-type: none; padding-left: 12px; margin: 0"
  }; // object-properties-section-separator

  var colonStyle = {
    "style": "flex-shrink: 0; padding-right: 5px"
  };

  var showObject = function (value) {
    if (value == undefined) {
      return value + '';
    } else {
      return ["object", {
        "object": value
      }];
    }
  };

  var listToArray = function (data) {
    var result = [];
    var cur = data;
    var index = 0;

    while (typeof cur !== "number") {
      result.push(["li", {}, ["span", {
        "style": "color: rgb(227, 110, 236)"
      }, index], ["span", colonStyle, ":"], showObject(cur[0])]);
      cur = cur[1];
      index++;
    }

    return result;
  };

  var variantCustomFormatter = function (data, recordVariant) {
    if (recordVariant === "::") {
      return ["ol", olStyle, ...listToArray(data)];
    } else {
      let spacedData = [];
      data.forEach(cur => {
        spacedData.push(["span", {
          "style": "margin-right: 12px"
        }, showObject(cur)]);
      });
      return ["ol", olStyle, ...spacedData];
    }
  };

  var variantPreview = function (x, recordVariant) {
    if (recordVariant === "::") {
      // show the length, just like for array
      var length = listToArray(x).length;
      return ['span', {}, `list(${length})`];
    }

    return ['span', {}, `${recordVariant}(…)`];
  };

  var isOCamlExceptionOrExtensionHead = function (x) {
    return Array.isArray(x) && x.tag === 248 && typeof x[0] === "string";
  };

  var isOCamlExceptionOrExtension = function (x) {
    return Array.isArray(x) && x[0] !== undefined && isOCamlExceptionOrExtensionHead(x[0]);
  };

  var formatter = {
    header: function (x) {
      var recordVariant;
      var recordPolyVar;

      if ((recordVariant = x[Symbol.for('BsVariant')]) !== undefined) {
        return variantPreview(x, recordVariant);
      } else if (isOCamlExceptionOrExtension(x)) {
        return ['div', {}, `${x[0][0]}(…)`];
      } else if ((recordPolyVar = x[Symbol.for('BsPolyVar')]) !== undefined) {
        return ['div', {}, `\`${recordPolyVar}#${x[0]}`];
      }

      return null;
    },
    hasBody: function (x) {
      var recordVariant;
      var recordPolyVar;

      if ((recordVariant = x[Symbol.for('BsVariant')]) !== undefined) {
        return recordVariant;
      } else if (isOCamlExceptionOrExtension(x)) {
        return true;
      } else if ((recordPolyVar = x[Symbol.for('BsPolyVar')]) !== undefined) {
        return true;
      }

      return false;
    },
    body: function (x) {
      var recordVariant;
      var recordPolyVar;

      if ((recordVariant = x[Symbol.for('BsVariant')]) !== undefined) {
        return variantCustomFormatter(x, recordVariant);
      } else if ((recordPolyVar = x[Symbol.for('BsPolyVar')]) !== undefined) {
        return showObject(x[1]);
      } else if (isOCamlExceptionOrExtension(x)) {
        return ["ol", olStyle, ...x.slice(1).map(cur => showObject(cur))];
      }
    }
  };

  if (true) {
    global.devtoolsFormatters = [formatter];
  } else {}
};

var setup = {
  contents: false
};

function setupOnce(param) {
  if (!setup.contents) {
    setup.contents = true;
    return setupChromeDebugger(undefined);
  }
}

function variant(meta, tag, xs) {
  setupOnce(undefined);
  xs.tag = tag;
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
    value: meta
  });
}

function simpleVariant(meta, xs) {
  setupOnce(undefined);
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
    value: meta
  });
}

function polyVar(meta, xs) {
  setupOnce(undefined);
  return Object.defineProperty(xs, Symbol.for("BsPolyVar"), {
    value: meta
  });
}

var __ = _block_js__WEBPACK_IMPORTED_MODULE_0__["__"];

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_exceptions.js":
/*!*************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_exceptions.js ***!
  \*************************************************************/
/*! exports provided: caml_set_oo_id, caml_fresh_oo_id, create, caml_is_extension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_set_oo_id", function() { return caml_set_oo_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_fresh_oo_id", function() { return caml_fresh_oo_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_is_extension", function() { return caml_is_extension; });
var id = {
  contents: 0
};

function caml_set_oo_id(b) {
  b[1] = id.contents;
  id.contents = id.contents + 1;
  return b;
}

function caml_fresh_oo_id(param) {
  id.contents = id.contents + 1;
  return id.contents;
}

function create(str) {
  var v_001 = caml_fresh_oo_id(undefined);
  var v =
  /* tuple */
  [str, v_001];
  v.tag = 248;
  return v;
}

function caml_is_extension(e) {
  if (e === undefined) {
    return false;
  }

  if (e.tag === 248) {
    return true;
  }

  var slot = e[0];

  if (slot !== undefined) {
    return slot.tag === 248;
  } else {
    return false;
  }
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_js_exceptions.js":
/*!****************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_js_exceptions.js ***!
  \****************************************************************/
/*! exports provided: $$Error, internalToOCamlException, caml_as_js_exn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$Error", function() { return $$Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalToOCamlException", function() { return internalToOCamlException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_as_js_exn", function() { return caml_as_js_exn; });
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/bs-platform/lib/es6/caml_option.js");
/* harmony import */ var _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_exceptions.js");


var $$Error = _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__["create"]("Caml_js_exceptions.Error");

function internalToOCamlException(e) {
  if (_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__["caml_is_extension"](e)) {
    return e;
  } else {
    return [$$Error, e];
  }
}

function caml_as_js_exn(exn) {
  if (exn[0] === $$Error) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_0__["some"](exn[1]);
  }
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_obj.js":
/*!******************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_obj.js ***!
  \******************************************************/
/*! exports provided: caml_obj_block, caml_obj_dup, caml_obj_truncate, caml_lazy_make_forward, caml_lazy_make, caml_update_dummy, caml_compare, caml_equal, caml_equal_null, caml_equal_undefined, caml_equal_nullable, caml_notequal, caml_greaterequal, caml_greaterthan, caml_lessthan, caml_lessequal, caml_min, caml_max, caml_obj_set_tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_obj_block", function() { return caml_obj_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_obj_dup", function() { return caml_obj_dup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_obj_truncate", function() { return caml_obj_truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_lazy_make_forward", function() { return caml_lazy_make_forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_lazy_make", function() { return caml_lazy_make; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_update_dummy", function() { return caml_update_dummy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_compare", function() { return caml_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_equal", function() { return caml_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_equal_null", function() { return caml_equal_null; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_equal_undefined", function() { return caml_equal_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_equal_nullable", function() { return caml_equal_nullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_notequal", function() { return caml_notequal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_greaterequal", function() { return caml_greaterequal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_greaterthan", function() { return caml_greaterthan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_lessthan", function() { return caml_lessthan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_lessequal", function() { return caml_lessequal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_min", function() { return caml_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_max", function() { return caml_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_obj_set_tag", function() { return caml_obj_set_tag; });
/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ "./node_modules/bs-platform/lib/es6/block.js");
/* harmony import */ var _caml_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_primitive.js */ "./node_modules/bs-platform/lib/es6/caml_primitive.js");
/* harmony import */ var _caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");




var for_in = function (o, foo) {
  for (var x in o) {
    foo(x);
  }
};

function caml_obj_block(tag, size) {
  var v = new Array(size);
  v.tag = tag;
  return v;
}

function caml_obj_dup(x) {
  if (!Array.isArray(x)) {
    return Object.assign({}, x);
  }

  var len = x.length | 0;
  var v = new Array(len);

  for (var i = 0; i < len; ++i) {
    v[i] = x[i];
  }

  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;

  if (new_size <= 0 || new_size > len) {
    throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["invalid_argument"], "Obj.truncate"];
  }

  if (len === new_size) {
    return;
  }

  for (var i = new_size; i < len; ++i) {
    x[i] = 0;
  }

  x.length = new_size;
}

function caml_lazy_make_forward(x) {
  return _block_js__WEBPACK_IMPORTED_MODULE_0__["__"](250, [x]);
}

function caml_lazy_make(fn) {
  var block = [fn];
  block.tag = 246;
  return block;
}

var caml_update_dummy = function (x, y) {
  var k;

  if (Array.isArray(y)) {
    for (k = 0; k < y.length; ++k) {
      x[k] = y[k];
    }

    if (y.tag !== undefined) {
      x.tag = y.tag;
    }
  } else {
    for (var k in y) {
      x[k] = y[k];
    }
  }
};

function caml_compare(_a, _b) {
  while (true) {
    var b = _b;
    var a = _a;

    if (a === b) {
      return 0;
    }

    var a_type = typeof a;
    var b_type = typeof b;

    switch (a_type) {
      case "boolean":
        if (b_type === "boolean") {
          return _caml_primitive_js__WEBPACK_IMPORTED_MODULE_1__["caml_bool_compare"](a, b);
        }

        break;

      case "function":
        if (b_type === "function") {
          throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["invalid_argument"], "compare: functional value"];
        }

        break;

      case "number":
        if (b_type === "number") {
          return _caml_primitive_js__WEBPACK_IMPORTED_MODULE_1__["caml_int_compare"](a, b);
        }

        break;

      case "string":
        if (b_type === "string") {
          return _caml_primitive_js__WEBPACK_IMPORTED_MODULE_1__["caml_string_compare"](a, b);
        } else {
          return 1;
        }

      case "undefined":
        return -1;

      default:
    }

    switch (b_type) {
      case "string":
        return -1;

      case "undefined":
        return 1;

      default:
        if (a_type === "boolean") {
          return 1;
        }

        if (b_type === "boolean") {
          return -1;
        }

        if (a_type === "function") {
          return 1;
        }

        if (b_type === "function") {
          return -1;
        }

        if (a_type === "number") {
          if (b === null || b.tag === 256) {
            return 1;
          } else {
            return -1;
          }
        }

        if (b_type === "number") {
          if (a === null || a.tag === 256) {
            return -1;
          } else {
            return 1;
          }
        }

        if (a === null) {
          if (b.tag === 256) {
            return 1;
          } else {
            return -1;
          }
        }

        if (b === null) {
          if (a.tag === 256) {
            return -1;
          } else {
            return 1;
          }
        }

        var tag_a = a.tag | 0;
        var tag_b = b.tag | 0;

        if (tag_a === 250) {
          _a = a[0];
          continue;
        }

        if (tag_b === 250) {
          _b = b[0];
          continue;
        }

        if (tag_a === 256) {
          if (tag_b === 256) {
            return _caml_primitive_js__WEBPACK_IMPORTED_MODULE_1__["caml_int_compare"](a[1], b[1]);
          } else {
            return -1;
          }
        }

        if (tag_a === 248) {
          return _caml_primitive_js__WEBPACK_IMPORTED_MODULE_1__["caml_int_compare"](a[1], b[1]);
        }

        if (tag_a === 251) {
          throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["invalid_argument"], "equal: abstract value"];
        }

        if (tag_a !== tag_b) {
          if (tag_a < tag_b) {
            return -1;
          } else {
            return 1;
          }
        }

        var len_a = a.length | 0;
        var len_b = b.length | 0;

        if (len_a === len_b) {
          if (Array.isArray(a)) {
            var _i = 0;

            while (true) {
              var i = _i;

              if (i === len_a) {
                return 0;
              }

              var res = caml_compare(a[i], b[i]);

              if (res !== 0) {
                return res;
              }

              _i = i + 1 | 0;
              continue;
            }

            ;
          } else if (a instanceof Date && b instanceof Date) {
            return a - b;
          } else {
            var min_key_lhs = {
              contents: undefined
            };
            var min_key_rhs = {
              contents: undefined
            };

            var do_key = function (param, key) {
              var min_key = param[2];
              var b = param[1];

              if (!(!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0)) {
                return;
              }

              var mk = min_key.contents;

              if (mk !== undefined && key >= mk) {
                return;
              } else {
                min_key.contents = key;
                return;
              }
            };

            var partial_arg =
            /* tuple */
            [a, b, min_key_rhs];

            var do_key_a = function (partial_arg) {
              return function do_key_a(param) {
                return do_key(partial_arg, param);
              };
            }(partial_arg);

            var partial_arg$1 =
            /* tuple */
            [b, a, min_key_lhs];

            var do_key_b = function (partial_arg$1) {
              return function do_key_b(param) {
                return do_key(partial_arg$1, param);
              };
            }(partial_arg$1);

            for_in(a, do_key_a);
            for_in(b, do_key_b);
            var match = min_key_lhs.contents;
            var match$1 = min_key_rhs.contents;

            if (match !== undefined) {
              if (match$1 !== undefined) {
                return _caml_primitive_js__WEBPACK_IMPORTED_MODULE_1__["caml_string_compare"](match, match$1);
              } else {
                return -1;
              }
            } else if (match$1 !== undefined) {
              return 1;
            } else {
              return 0;
            }
          }
        } else if (len_a < len_b) {
          var _i$1 = 0;

          while (true) {
            var i$1 = _i$1;

            if (i$1 === len_a) {
              return -1;
            }

            var res$1 = caml_compare(a[i$1], b[i$1]);

            if (res$1 !== 0) {
              return res$1;
            }

            _i$1 = i$1 + 1 | 0;
            continue;
          }

          ;
        } else {
          var _i$2 = 0;

          while (true) {
            var i$2 = _i$2;

            if (i$2 === len_b) {
              return 1;
            }

            var res$2 = caml_compare(a[i$2], b[i$2]);

            if (res$2 !== 0) {
              return res$2;
            }

            _i$2 = i$2 + 1 | 0;
            continue;
          }

          ;
        }

    }
  }

  ;
}

function caml_equal(_a, _b) {
  while (true) {
    var b = _b;
    var a = _a;

    if (a === b) {
      return true;
    }

    var a_type = typeof a;

    if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
      return false;
    }

    var b_type = typeof b;

    if (a_type === "function" || b_type === "function") {
      throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["invalid_argument"], "equal: functional value"];
    }

    if (b_type === "number" || b_type === "undefined" || b === null) {
      return false;
    }

    var tag_a = a.tag | 0;
    var tag_b = b.tag | 0;

    if (tag_a === 250) {
      _a = a[0];
      continue;
    }

    if (tag_b === 250) {
      _b = b[0];
      continue;
    }

    if (tag_a === 248) {
      return a[1] === b[1];
    }

    if (tag_a === 251) {
      throw [_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["invalid_argument"], "equal: abstract value"];
    }

    if (tag_a !== tag_b) {
      return false;
    }

    if (tag_a === 256) {
      return a[1] === b[1];
    }

    var len_a = a.length | 0;
    var len_b = b.length | 0;

    if (len_a === len_b) {
      if (Array.isArray(a)) {
        var _i = 0;

        while (true) {
          var i = _i;

          if (i === len_a) {
            return true;
          }

          if (!caml_equal(a[i], b[i])) {
            return false;
          }

          _i = i + 1 | 0;
          continue;
        }

        ;
      } else if (a instanceof Date && b instanceof Date) {
        return !(a > b || a < b);
      } else {
        var result = {
          contents: true
        };

        var do_key_a = function (b, result) {
          return function do_key_a(key) {
            if (!b.hasOwnProperty(key)) {
              result.contents = false;
              return;
            }
          };
        }(b, result);

        var do_key_b = function (a, b, result) {
          return function do_key_b(key) {
            if (!a.hasOwnProperty(key) || !caml_equal(b[key], a[key])) {
              result.contents = false;
              return;
            }
          };
        }(a, b, result);

        for_in(a, do_key_a);

        if (result.contents) {
          for_in(b, do_key_b);
        }

        return result.contents;
      }
    } else {
      return false;
    }
  }

  ;
}

function caml_equal_null(x, y) {
  if (y !== null) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_undefined(x, y) {
  if (y !== undefined) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_nullable(x, y) {
  if (y == null) {
    return x === y;
  } else {
    return caml_equal(x, y);
  }
}

function caml_notequal(a, b) {
  return !caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return caml_compare(a, b) >= 0;
}

function caml_greaterthan(a, b) {
  return caml_compare(a, b) > 0;
}

function caml_lessequal(a, b) {
  return caml_compare(a, b) <= 0;
}

function caml_lessthan(a, b) {
  return caml_compare(a, b) < 0;
}

function caml_min(x, y) {
  if (caml_compare(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_max(x, y) {
  if (caml_compare(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_obj_set_tag(prim, prim$1) {
  prim.tag = prim$1;
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_option.js":
/*!*********************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_option.js ***!
  \*********************************************************/
/*! exports provided: nullable_to_opt, undefined_to_opt, null_to_opt, valFromOption, some, option_get, option_get_unwrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullable_to_opt", function() { return nullable_to_opt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefined_to_opt", function() { return undefined_to_opt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null_to_opt", function() { return null_to_opt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valFromOption", function() { return valFromOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option_get", function() { return option_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option_get_unwrap", function() { return option_get_unwrap; });
var undefinedHeader = [];

function some(x) {
  if (x === undefined) {
    var block =
    /* tuple */
    [undefinedHeader, 0];
    block.tag = 256;
    return block;
  }

  if (!(x !== null && x[0] === undefinedHeader)) {
    return x;
  }

  var nid = x[1] + 1 | 0;
  var block$1 =
  /* tuple */
  [undefinedHeader, nid];
  block$1.tag = 256;
  return block$1;
}

function nullable_to_opt(x) {
  if (x === null || x === undefined) {
    return;
  } else {
    return some(x);
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return;
  } else {
    return some(x);
  }
}

function null_to_opt(x) {
  if (x === null) {
    return;
  } else {
    return some(x);
  }
}

function valFromOption(x) {
  if (!(x !== null && x[0] === undefinedHeader)) {
    return x;
  }

  var depth = x[1];

  if (depth === 0) {
    return;
  } else {
    return (
      /* tuple */
      [undefinedHeader, depth - 1 | 0]
    );
  }
}

function option_get(x) {
  if (x === undefined) {
    return;
  } else {
    return valFromOption(x);
  }
}

function option_get_unwrap(x) {
  if (x === undefined) {
    return;
  } else {
    return valFromOption(x)[1];
  }
}


/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/caml_primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/caml_primitive.js ***!
  \************************************************************/
/*! exports provided: caml_bytes_compare, caml_bytes_equal, caml_int_compare, caml_bool_compare, caml_float_compare, caml_nativeint_compare, caml_string_compare, caml_int32_compare, caml_bool_min, caml_int_min, caml_float_min, caml_string_min, caml_nativeint_min, caml_int32_min, caml_bool_max, caml_int_max, caml_float_max, caml_string_max, caml_nativeint_max, caml_int32_max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bytes_compare", function() { return caml_bytes_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bytes_equal", function() { return caml_bytes_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int_compare", function() { return caml_int_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bool_compare", function() { return caml_bool_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_float_compare", function() { return caml_float_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_compare", function() { return caml_nativeint_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_compare", function() { return caml_string_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_compare", function() { return caml_int32_compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bool_min", function() { return caml_bool_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int_min", function() { return caml_int_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_float_min", function() { return caml_float_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_min", function() { return caml_string_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_min", function() { return caml_nativeint_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_min", function() { return caml_int32_min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_bool_max", function() { return caml_bool_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int_max", function() { return caml_int_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_float_max", function() { return caml_float_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_string_max", function() { return caml_string_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_nativeint_max", function() { return caml_nativeint_max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caml_int32_max", function() { return caml_int32_max; });
function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_bool_compare(x, y) {
  if (x) {
    if (y) {
      return 0;
    } else {
      return 1;
    }
  } else if (y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_bytes_compare_aux(s1, s2, _off, len, def) {
  while (true) {
    var off = _off;

    if (off >= len) {
      return def;
    }

    var a = s1[off];
    var b = s2[off];

    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    _off = off + 1 | 0;
    continue;
  }

  ;
}

function caml_bytes_compare(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;

  if (len1 === len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, 0);
  } else if (len1 < len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, -1);
  } else {
    return caml_bytes_compare_aux(s1, s2, 0, len2, 1);
  }
}

function caml_bytes_equal(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;

  if (len1 === len2) {
    var _off = 0;

    while (true) {
      var off = _off;

      if (off === len1) {
        return true;
      }

      var a = s1[off];
      var b = s2[off];

      if (a !== b) {
        return false;
      }

      _off = off + 1 | 0;
      continue;
    }

    ;
  } else {
    return false;
  }
}

function caml_bool_min(x, y) {
  if (x) {
    return y;
  } else {
    return x;
  }
}

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_bool_max(x, y) {
  if (x) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

var caml_nativeint_compare = caml_int_compare;
var caml_int32_compare = caml_int_compare;

/* No side effect */

/***/ }),

/***/ "./node_modules/bs-platform/lib/es6/curry.js":
/*!***************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/curry.js ***!
  \***************************************************/
/*! exports provided: app, _1, __1, _2, __2, _3, __3, _4, __4, _5, __5, _6, __6, _7, __7, _8, __8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return _1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__1", function() { return __1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return _2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__2", function() { return __2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return _3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__3", function() { return __3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return _4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__4", function() { return __4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return _5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__5", function() { return __5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return _6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__6", function() { return __6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return _7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__7", function() { return __7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return _8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__8", function() { return __8; });
/* harmony import */ var _caml_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_array.js */ "./node_modules/bs-platform/lib/es6/caml_array.js");


function app(_f, _args) {
  while (true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;

    if (d === 0) {
      return f.apply(null, args);
    }

    if (d >= 0) {
      return function (f, args) {
        return function (x) {
          return app(f, args.concat([x]));
        };
      }(f, args);
    }

    _args = _caml_array_js__WEBPACK_IMPORTED_MODULE_0__["caml_array_sub"](args, arity, -d | 0);
    _f = f.apply(null, _caml_array_js__WEBPACK_IMPORTED_MODULE_0__["caml_array_sub"](args, 0, arity));
    continue;
  }

  ;
}

function _1(o, a0) {
  var arity = o.length;

  if (arity === 1) {
    return o(a0);
  } else {
    switch (arity) {
      case 1:
        return o(a0);

      case 2:
        return function (param) {
          return o(a0, param);
        };

      case 3:
        return function (param, param$1) {
          return o(a0, param, param$1);
        };

      case 4:
        return function (param, param$1, param$2) {
          return o(a0, param, param$1, param$2);
        };

      case 5:
        return function (param, param$1, param$2, param$3) {
          return o(a0, param, param$1, param$2, param$3);
        };

      case 6:
        return function (param, param$1, param$2, param$3, param$4) {
          return o(a0, param, param$1, param$2, param$3, param$4);
        };

      case 7:
        return function (param, param$1, param$2, param$3, param$4, param$5) {
          return o(a0, param, param$1, param$2, param$3, param$4, param$5);
        };

      default:
        return app(o, [a0]);
    }
  }
}

function __1(o) {
  var arity = o.length;

  if (arity === 1) {
    return o;
  } else {
    return function (a0) {
      return _1(o, a0);
    };
  }
}

function _2(o, a0, a1) {
  var arity = o.length;

  if (arity === 2) {
    return o(a0, a1);
  } else {
    switch (arity) {
      case 1:
        return app(o(a0), [a1]);

      case 2:
        return o(a0, a1);

      case 3:
        return function (param) {
          return o(a0, a1, param);
        };

      case 4:
        return function (param, param$1) {
          return o(a0, a1, param, param$1);
        };

      case 5:
        return function (param, param$1, param$2) {
          return o(a0, a1, param, param$1, param$2);
        };

      case 6:
        return function (param, param$1, param$2, param$3) {
          return o(a0, a1, param, param$1, param$2, param$3);
        };

      case 7:
        return function (param, param$1, param$2, param$3, param$4) {
          return o(a0, a1, param, param$1, param$2, param$3, param$4);
        };

      default:
        return app(o, [a0, a1]);
    }
  }
}

function __2(o) {
  var arity = o.length;

  if (arity === 2) {
    return o;
  } else {
    return function (a0, a1) {
      return _2(o, a0, a1);
    };
  }
}

function _3(o, a0, a1, a2) {
  var arity = o.length;

  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    switch (arity) {
      case 1:
        return app(o(a0), [a1, a2]);

      case 2:
        return app(o(a0, a1), [a2]);

      case 3:
        return o(a0, a1, a2);

      case 4:
        return function (param) {
          return o(a0, a1, a2, param);
        };

      case 5:
        return function (param, param$1) {
          return o(a0, a1, a2, param, param$1);
        };

      case 6:
        return function (param, param$1, param$2) {
          return o(a0, a1, a2, param, param$1, param$2);
        };

      case 7:
        return function (param, param$1, param$2, param$3) {
          return o(a0, a1, a2, param, param$1, param$2, param$3);
        };

      default:
        return app(o, [a0, a1, a2]);
    }
  }
}

function __3(o) {
  var arity = o.length;

  if (arity === 3) {
    return o;
  } else {
    return function (a0, a1, a2) {
      return _3(o, a0, a1, a2);
    };
  }
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;

  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    switch (arity) {
      case 1:
        return app(o(a0), [a1, a2, a3]);

      case 2:
        return app(o(a0, a1), [a2, a3]);

      case 3:
        return app(o(a0, a1, a2), [a3]);

      case 4:
        return o(a0, a1, a2, a3);

      case 5:
        return function (param) {
          return o(a0, a1, a2, a3, param);
        };

      case 6:
        return function (param, param$1) {
          return o(a0, a1, a2, a3, param, param$1);
        };

      case 7:
        return function (param, param$1, param$2) {
          return o(a0, a1, a2, a3, param, param$1, param$2);
        };

      default:
        return app(o, [a0, a1, a2, a3]);
    }
  }
}

function __4(o) {
  var arity = o.length;

  if (arity === 4) {
    return o;
  } else {
    return function (a0, a1, a2, a3) {
      return _4(o, a0, a1, a2, a3);
    };
  }
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;

  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    switch (arity) {
      case 1:
        return app(o(a0), [a1, a2, a3, a4]);

      case 2:
        return app(o(a0, a1), [a2, a3, a4]);

      case 3:
        return app(o(a0, a1, a2), [a3, a4]);

      case 4:
        return app(o(a0, a1, a2, a3), [a4]);

      case 5:
        return o(a0, a1, a2, a3, a4);

      case 6:
        return function (param) {
          return o(a0, a1, a2, a3, a4, param);
        };

      case 7:
        return function (param, param$1) {
          return o(a0, a1, a2, a3, a4, param, param$1);
        };

      default:
        return app(o, [a0, a1, a2, a3, a4]);
    }
  }
}

function __5(o) {
  var arity = o.length;

  if (arity === 5) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4) {
      return _5(o, a0, a1, a2, a3, a4);
    };
  }
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;

  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    switch (arity) {
      case 1:
        return app(o(a0), [a1, a2, a3, a4, a5]);

      case 2:
        return app(o(a0, a1), [a2, a3, a4, a5]);

      case 3:
        return app(o(a0, a1, a2), [a3, a4, a5]);

      case 4:
        return app(o(a0, a1, a2, a3), [a4, a5]);

      case 5:
        return app(o(a0, a1, a2, a3, a4), [a5]);

      case 6:
        return o(a0, a1, a2, a3, a4, a5);

      case 7:
        return function (param) {
          return o(a0, a1, a2, a3, a4, a5, param);
        };

      default:
        return app(o, [a0, a1, a2, a3, a4, a5]);
    }
  }
}

function __6(o) {
  var arity = o.length;

  if (arity === 6) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5) {
      return _6(o, a0, a1, a2, a3, a4, a5);
    };
  }
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;

  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    switch (arity) {
      case 1:
        return app(o(a0), [a1, a2, a3, a4, a5, a6]);

      case 2:
        return app(o(a0, a1), [a2, a3, a4, a5, a6]);

      case 3:
        return app(o(a0, a1, a2), [a3, a4, a5, a6]);

      case 4:
        return app(o(a0, a1, a2, a3), [a4, a5, a6]);

      case 5:
        return app(o(a0, a1, a2, a3, a4), [a5, a6]);

      case 6:
        return app(o(a0, a1, a2, a3, a4, a5), [a6]);

      case 7:
        return o(a0, a1, a2, a3, a4, a5, a6);

      default:
        return app(o, [a0, a1, a2, a3, a4, a5, a6]);
    }
  }
}

function __7(o) {
  var arity = o.length;

  if (arity === 7) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6) {
      return _7(o, a0, a1, a2, a3, a4, a5, a6);
    };
  }
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;

  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    switch (arity) {
      case 1:
        return app(o(a0), [a1, a2, a3, a4, a5, a6, a7]);

      case 2:
        return app(o(a0, a1), [a2, a3, a4, a5, a6, a7]);

      case 3:
        return app(o(a0, a1, a2), [a3, a4, a5, a6, a7]);

      case 4:
        return app(o(a0, a1, a2, a3), [a4, a5, a6, a7]);

      case 5:
        return app(o(a0, a1, a2, a3, a4), [a5, a6, a7]);

      case 6:
        return app(o(a0, a1, a2, a3, a4, a5), [a6, a7]);

      case 7:
        return app(o(a0, a1, a2, a3, a4, a5, a6), [a7]);

      default:
        return app(o, [a0, a1, a2, a3, a4, a5, a6, a7]);
    }
  }
}

function __8(o) {
  var arity = o.length;

  if (arity === 8) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6, a7) {
      return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
    };
  }
}


/* No side effect */

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/reason-promise/src/js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/reason-promise/src/js/promise.js ***!
  \*******************************************************/
/*! exports provided: pending, resolved, exec, get, tap, map, flatMap, getOk, tapOk, mapOk, flatMapOk, getError, tapError, mapError, flatMapError, Operators, getSome, tapSome, mapSome, flatMapSome, race, all, allArray, all2, all3, all4, all5, all6, Js, PipeFirst, onUnhandledException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pending", function() { return pending$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolved", function() { return resolved$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exec", function() { return exec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOk", function() { return getOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tapOk", function() { return tapOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOk", function() { return mapOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMapOk", function() { return flatMapOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tapError", function() { return tapError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapError", function() { return mapError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMapError", function() { return flatMapError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operators", function() { return Operators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSome", function() { return getSome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tapSome", function() { return tapSome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSome", function() { return mapSome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMapSome", function() { return flatMapSome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allArray", function() { return allArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all2", function() { return all2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all3", function() { return all3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all4", function() { return all4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all5", function() { return all5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all6", function() { return all6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Js", function() { return Js; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeFirst", function() { return PipeFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnhandledException", function() { return onUnhandledException; });
/* harmony import */ var bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-platform/lib/es6/block.js */ "./node_modules/bs-platform/lib/es6/block.js");
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-platform/lib/es6/caml_option.js */ "./node_modules/bs-platform/lib/es6/caml_option.js");
/* harmony import */ var bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bs-platform/lib/es6/caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE




var onUnhandledException = {
  contents: function (exn) {
    console.error("Unhandled exception in promise callback:");
    console.error(exn);
  }
};

function NestedPromise(p) {
  this.nested = p;
}

;

function unbox(value) {
  if (value instanceof NestedPromise) return value.nested;else return value;
}

function box(value) {
  if (value != null && typeof value.then === 'function') return new NestedPromise(value);else return value;
}

function make(executor) {
  return new Promise(function (resolve, reject) {
    var boxingResolve = function (value) {
      resolve(box(value));
    };

    executor(boxingResolve, reject);
  });
}

;

function resolved(value) {
  return Promise.resolve(box(value));
}

;

function then(promise, callback) {
  return promise.then(function (value) {
    try {
      return callback(unbox(value));
    } catch (exception) {
      onUnhandledException.contents(exception);
    }
  });
}

;

function catch_(promise, callback) {
  var safeCallback = function (error) {
    try {
      return callback(error);
    } catch (exception) {
      onUnhandledException.contents(exception);
    }
  };

  return promise.catch(safeCallback);
}

;

function arrayToList(array) {
  var list = 0;

  for (var index = array.length - 1; index >= 0; --index) {
    list = [array[index], list];
  }

  return list;
}

;

function listToArray(list) {
  var array = [];

  while (list !== 0) {
    array.push(list[0]);
    list = list[1];
  }

  return array;
}

;

function mapArray(f, a) {
  return a.map(f);
}

;
;

function pending(param) {
  var resolve = {
    contents: function (prim) {}
  };
  var reject = {
    contents: function (prim) {}
  };
  var p = make(function (resolve$prime, reject$prime) {
    resolve.contents = resolve$prime;
    reject.contents = reject$prime;
  });
  return (
    /* tuple */
    [p, resolve.contents, reject.contents]
  );
}

function map(promise, callback) {
  return then(promise, function (v) {
    return resolved(bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, v));
  });
}

function get(promise, callback) {
  map(promise, callback);
}

function tap(promise, callback) {
  map(promise, callback);
  return promise;
}

function allArray(promises) {
  return map(Promise.all(promises), function (param) {
    return mapArray(function (prim) {
      return unbox(prim);
    }, param);
  });
}

function all(promises) {
  return map(allArray(listToArray(promises)), function (results) {
    return arrayToList(results);
  });
}

function all2(p1, p2) {
  return Promise.all(
  /* tuple */
  [p1, p2]);
}

function all3(p1, p2, p3) {
  return Promise.all(
  /* tuple */
  [p1, p2, p3]);
}

function all4(p1, p2, p3, p4) {
  return Promise.all(
  /* tuple */
  [p1, p2, p3, p4]);
}

function all5(p1, p2, p3, p4, p5) {
  return Promise.all(
  /* tuple */
  [p1, p2, p3, p4, p5]);
}

function all6(p1, p2, p3, p4, p5, p6) {
  return Promise.all(
  /* tuple */
  [p1, p2, p3, p4, p5, p6]);
}

function race(promises) {
  if (promises ===
  /* [] */
  0) {
    throw [bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_3__["invalid_argument"], "Promise.race([]) would be pending forever"];
  }

  return Promise.race(listToArray(promises));
}

function toResult(promise) {
  return catch_(map(promise, function (v) {
    return (
      /* Ok */
      bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_0__["__"](0, [v])
    );
  }), function (e) {
    return resolved(
    /* Error */
    bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_0__["__"](1, [e]));
  });
}

function fromResult(promise) {
  return then(promise, function (v) {
    if (v.tag) {
      return Promise.reject(v[0]);
    } else {
      return resolved(v[0]);
    }
  });
}

function pending$1(param) {
  var match = pending(undefined);
  return (
    /* tuple */
    [match[0], match[1]]
  );
}

function exec(executor) {
  var match = pending$1(undefined);

  bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](executor, match[1]);

  return match[0];
}

function resolved$1(prim) {
  return resolved(prim);
}

function flatMap(prim, prim$1) {
  return then(prim, prim$1);
}

function flatMapOk(promise, callback) {
  return then(promise, function (result) {
    if (result.tag) {
      return resolved(result);
    } else {
      return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, result[0]);
    }
  });
}

function flatMapError(promise, callback) {
  return then(promise, function (result) {
    if (result.tag) {
      return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, result[0]);
    } else {
      return resolved(result);
    }
  });
}

function mapOk(promise, callback) {
  return map(promise, function (result) {
    if (result.tag) {
      return result;
    } else {
      return (
        /* Ok */
        bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_0__["__"](0, [bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, result[0])])
      );
    }
  });
}

function mapError(promise, callback) {
  return map(promise, function (result) {
    if (result.tag) {
      return (
        /* Error */
        bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_0__["__"](1, [bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, result[0])])
      );
    } else {
      return result;
    }
  });
}

function getOk(promise, callback) {
  return get(promise, function (result) {
    if (result.tag) {
      return;
    } else {
      return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, result[0]);
    }
  });
}

function getError(promise, callback) {
  return get(promise, function (result) {
    if (result.tag) {
      return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, result[0]);
    }
  });
}

function tapOk(promise, callback) {
  getOk(promise, callback);
  return promise;
}

function tapError(promise, callback) {
  getError(promise, callback);
  return promise;
}

var Operators = {
  $great$pipe$eq: mapOk,
  $great$great$eq: flatMapOk
};

function flatMapSome(promise, callback) {
  return then(promise, function (option) {
    if (option !== undefined) {
      return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__["valFromOption"](option));
    } else {
      return resolved(undefined);
    }
  });
}

function mapSome(promise, callback) {
  return map(promise, function (option) {
    if (option !== undefined) {
      return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__["some"](bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__["valFromOption"](option)));
    }
  });
}

function getSome(promise, callback) {
  return get(promise, function (option) {
    if (option !== undefined) {
      return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_1"](callback, bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__["valFromOption"](option));
    }
  });
}

function tapSome(promise, callback) {
  getSome(promise, callback);
  return promise;
}

var PipeFirst = {};

function Js_resolved(prim) {
  return resolved(prim);
}

function Js_rejected(prim) {
  return Promise.reject(prim);
}

function Js_flatMap(prim, prim$1) {
  return then(prim, prim$1);
}

function Js_catch(prim, prim$1) {
  return catch_(prim, prim$1);
}

function Js_relax(prim) {
  return prim;
}

function Js_fromBsPromise(prim) {
  return prim;
}

function Js_toBsPromise(prim) {
  return prim;
}

var Js = {
  pending: pending,
  resolved: Js_resolved,
  rejected: Js_rejected,
  get: get,
  tap: tap,
  map: map,
  flatMap: Js_flatMap,
  $$catch: Js_catch,
  all: all,
  race: race,
  relax: Js_relax,
  toResult: toResult,
  fromResult: fromResult,
  fromBsPromise: Js_fromBsPromise,
  toBsPromise: Js_toBsPromise
};

/*  Not a pure module */

/***/ }),

/***/ "./node_modules/reason-relay/src/ReasonRelay.bs.js":
/*!*********************************************************!*\
  !*** ./node_modules/reason-relay/src/ReasonRelay.bs.js ***!
  \*********************************************************/
/*! exports provided: dataIdToString, makeDataId, makeArguments, generateClientID, generateUniqueClientID, isClientID, storeRootId, storeRootType, _cleanObjectFromUndefined, _cleanVariables, _convertObj, RecordProxy, RecordSourceSelectorProxy, RecordSourceProxy, ConnectionHandler, Observable, Network, RecordSource, Store, Environment, Disposable, mapFetchPolicy, MakeUseQuery, MakePreloadQuery, MakeUseFragment, MakeUseRefetchableFragment, MakeUsePaginationFragment, MakeUseMutation, Context, EnvironmentNotFoundInContext, useEnvironmentFromContext, Mutation_failed, MakeCommitMutation, commitLocalUpdate, fetchQuery, MakeUseSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataIdToString", function() { return dataIdToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDataId", function() { return makeDataId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeArguments", function() { return makeArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateClientID", function() { return generateClientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueClientID", function() { return generateUniqueClientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClientID", function() { return isClientID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRootId", function() { return storeRootId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRootType", function() { return storeRootType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_cleanObjectFromUndefined", function() { return _cleanObjectFromUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_cleanVariables", function() { return _cleanVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_convertObj", function() { return _convertObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordProxy", function() { return RecordProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordSourceSelectorProxy", function() { return RecordSourceSelectorProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordSourceProxy", function() { return RecordSourceProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionHandler", function() { return ConnectionHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordSource", function() { return RecordSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disposable", function() { return Disposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFetchPolicy", function() { return mapFetchPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeUseQuery", function() { return MakeUseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePreloadQuery", function() { return MakePreloadQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeUseFragment", function() { return MakeUseFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeUseRefetchableFragment", function() { return MakeUseRefetchableFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeUsePaginationFragment", function() { return MakeUsePaginationFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeUseMutation", function() { return MakeUseMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentNotFoundInContext", function() { return EnvironmentNotFoundInContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEnvironmentFromContext", function() { return useEnvironmentFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation_failed", function() { return Mutation_failed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeCommitMutation", function() { return MakeCommitMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commitLocalUpdate", function() { return commitLocalUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchQuery", function() { return fetchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeUseSubscription", function() { return MakeUseSubscription; });
/* harmony import */ var bs_platform_lib_es6_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-platform/lib/es6/array.js */ "./node_modules/bs-platform/lib/es6/array.js");
/* harmony import */ var bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bs-platform/lib/es6/block.js */ "./node_modules/bs-platform/lib/es6/block.js");
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/reason-relay/src/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reason_promise_src_js_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reason-promise/src/js/promise.js */ "./node_modules/reason-promise/src/js/promise.js");
/* harmony import */ var bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bs-platform/lib/es6/caml_option.js */ "./node_modules/bs-platform/lib/es6/caml_option.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-relay */ "react-relay");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! relay-runtime */ "relay-runtime");
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(relay_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bs_platform_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bs-platform/lib/es6/caml_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_exceptions.js");
/* harmony import */ var react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-relay/hooks */ "react-relay/hooks");
/* harmony import */ var react_relay_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_relay_lib_relay_experimental__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-relay/lib/relay-experimental */ "react-relay/lib/relay-experimental");
/* harmony import */ var react_relay_lib_relay_experimental__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_relay_lib_relay_experimental__WEBPACK_IMPORTED_MODULE_11__);
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE













function generateClientID(dataId, storageKey, index, param) {
  return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["generateClientID"](dataId, storageKey, index);
}

var _cleanObjectFromUndefined = function cleanObj(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

var _cleanVariables = function cleanVariables(variables) {
  if (typeof variables !== "object" || variables == null) {
    return {};
  }

  return variables;
};

function _convertObj(prim, prim$1, prim$2, prim$3) {
  return _utils__WEBPACK_IMPORTED_MODULE_4__["traverser"](prim, prim$1, prim$2, prim$3);
}

function copyFieldsFrom(t, sourceRecord) {
  t.copyFieldsFrom(sourceRecord);
}

function getDataId(t) {
  return t.getDataID();
}

function getLinkedRecord(t, name, $$arguments, param) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](t.getLinkedRecord(name, $$arguments));
}

function getLinkedRecords(t, name, $$arguments, param) {
  var records = t.getLinkedRecords(name, $$arguments);

  if (!(records == null)) {
    return bs_platform_lib_es6_array_js__WEBPACK_IMPORTED_MODULE_0__["map"](function (v) {
      if (v == null) {
        return;
      } else {
        return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](v);
      }
    }, records == null ? undefined : bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](records));
  }
}

function getOrCreateLinkedRecord(t, name, typeName, $$arguments, param) {
  return t.getOrCreateLinkedRecord(name, typeName, $$arguments);
}

function getType(t) {
  return t.getType();
}

function _getValueArr(t, name, $$arguments) {
  var arr = t.getValue(name, $$arguments);

  if (!(arr == null)) {
    return bs_platform_lib_es6_array_js__WEBPACK_IMPORTED_MODULE_0__["map"](function (value) {
      if (value == null) {
        return;
      } else {
        return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](value);
      }
    }, arr);
  }
}

function getValueString(t, name, $$arguments, param) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](t.getValue(name, $$arguments));
}

function getValueStringArray(t, name, $$arguments, param) {
  return _getValueArr(t, name, $$arguments);
}

function getValueInt(t, name, $$arguments, param) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](t.getValue(name, $$arguments));
}

function getValueIntArray(t, name, $$arguments, param) {
  return _getValueArr(t, name, $$arguments);
}

function getValueFloat(t, name, $$arguments, param) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](t.getValue(name, $$arguments));
}

function getValueFloatArray(t, name, $$arguments, param) {
  return _getValueArr(t, name, $$arguments);
}

function getValueBool(t, name, $$arguments, param) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](t.getValue(name, $$arguments));
}

function getValueBoolArray(t, name, $$arguments, param) {
  return _getValueArr(t, name, $$arguments);
}

function setLinkedRecord(t, record, name, $$arguments, param) {
  return t.setLinkedRecord(record, name, $$arguments);
}

function unsetLinkedRecord(t, name, unsetValue, $$arguments, param) {
  if (unsetValue) {
    return t.setLinkedRecord(undefined, name, $$arguments);
  } else {
    return t.setLinkedRecord(null, name, $$arguments);
  }
}

function setLinkedRecords(t, records, name, $$arguments, param) {
  return t.setLinkedRecords(records, name, $$arguments);
}

function unsetLinkedRecords(t, name, unsetValue, $$arguments, param) {
  if (unsetValue) {
    return t.setLinkedRecords(undefined, name, $$arguments);
  } else {
    return t.setLinkedRecords(null, name, $$arguments);
  }
}

function unsetValue(t, name, unsetValue$1, $$arguments, param) {
  if (unsetValue$1) {
    return t.setValue(undefined, name, $$arguments);
  } else {
    return t.setValue(null, name, $$arguments);
  }
}

function setValueString(t, value, name, $$arguments, param) {
  return t.setValue(value, name, $$arguments);
}

function setValueStringArray(t, value, name, $$arguments, param) {
  return t.setValue(value, name, $$arguments);
}

function setValueInt(t, value, name, $$arguments, param) {
  return t.setValue(value, name, $$arguments);
}

function setValueIntArray(t, value, name, $$arguments, param) {
  return t.setValue(value, name, $$arguments);
}

function setValueFloat(t, value, name, $$arguments, param) {
  return t.setValue(value, name, $$arguments);
}

function setValueFloatArray(t, value, name, $$arguments, param) {
  return t.setValue(value, name, $$arguments);
}

function setValueBool(t, value, name, $$arguments, param) {
  return t.setValue(value, name, $$arguments);
}

function setValueBoolArray(t, value, name, $$arguments, param) {
  return t.setValue(value, name, $$arguments);
}

function create(t, dataId, typeName) {
  return t.create(dataId, typeName);
}

function $$delete(t, dataId) {
  t.delete(dataId);
}

function get(t, dataId) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](t.get(dataId));
}

function getRootField(t, fieldName) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](t.getRootField(fieldName));
}

function getPluralRootField(t, fieldName) {
  var arr = t.getPluralRootField(fieldName);

  if (!(arr == null)) {
    return bs_platform_lib_es6_array_js__WEBPACK_IMPORTED_MODULE_0__["map"](function (v) {
      if (v == null) {
        return;
      } else {
        return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](v);
      }
    }, arr == null ? undefined : bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](arr));
  }
}

function create$1(t, dataId, typeName) {
  return t.create(dataId, typeName);
}

function $$delete$1(t, dataId) {
  t.delete(dataId);
}

function get$1(t, dataId) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](t.get(dataId));
}

function getConnection(record, key, filters, param) {
  return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["nullable_to_opt"](relay_runtime__WEBPACK_IMPORTED_MODULE_8__["ConnectionHandler"].getConnection(record, key, filters));
}

function createEdge(store, connection, node, edgeType) {
  return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["ConnectionHandler"].createEdge(store, connection, node, edgeType);
}

function insertEdgeBefore(connection, newEdge, cursor, param) {
  relay_runtime__WEBPACK_IMPORTED_MODULE_8__["ConnectionHandler"].insertEdgeBefore(connection, newEdge, cursor);
}

function insertEdgeAfter(connection, newEdge, cursor, param) {
  relay_runtime__WEBPACK_IMPORTED_MODULE_8__["ConnectionHandler"].insertEdgeAfter(connection, newEdge, cursor);
}

function deleteNode(connection, nodeId) {
  relay_runtime__WEBPACK_IMPORTED_MODULE_8__["ConnectionHandler"].deleteNode(connection, nodeId);
}

var ConnectionHandler = {
  getConnection: getConnection,
  createEdge: createEdge,
  insertEdgeBefore: insertEdgeBefore,
  insertEdgeAfter: insertEdgeAfter,
  deleteNode: deleteNode
};

function make(sinkFn) {
  return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["Observable"].create(function (s) {
    bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](sinkFn, {
      next: s.next,
      error: s.error,
      completed: s.completed,
      closed: s.closed
    });
  });
}

var Observable = {
  make: make
};

function makePromiseBased(fetchFunction, subscriptionFunction, param) {
  return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["Network"].create(fetchFunction, subscriptionFunction);
}

function makeObservableBased(observableFunction, subscriptionFunction, param) {
  return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["Network"].create(observableFunction, subscriptionFunction);
}

var Network = {
  makePromiseBased: makePromiseBased,
  makeObservableBased: makeObservableBased
};

function make$1(records, param) {
  return new relay_runtime__WEBPACK_IMPORTED_MODULE_8__["RecordSource"](records);
}

function make$2(source, gcReleaseBufferSize, param) {
  return new relay_runtime__WEBPACK_IMPORTED_MODULE_8__["Store"](source, {
    gcReleaseBufferSize: gcReleaseBufferSize
  });
}

function mapRenderPolicy(param) {
  if (param !== undefined) {
    if (param) {
      return "partial";
    } else {
      return "full";
    }
  }
}

function make$3(network, store, getDataID, defaultRenderPolicy, param) {
  return new relay_runtime__WEBPACK_IMPORTED_MODULE_8__["Environment"]({
    network: network,
    store: store,
    UNSTABLE_DO_NOT_USE_getDataID: getDataID !== undefined ? bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["__2"](getDataID) : undefined,
    UNSTABLE_defaultRenderPolicy: mapRenderPolicy(defaultRenderPolicy)
  });
}

var provider = react_relay__WEBPACK_IMPORTED_MODULE_7__["ReactRelayContext"].Provider;

function ReasonRelay$Context$Provider(Props) {
  var environment = Props.environment;
  var children = Props.children;
  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](provider, {
    value: {
      environment: environment
    },
    children: children
  });
}

function useConvertedValue(convert, v) {
  return react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](function () {
    return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](convert, v);
  }, [v]);
}

var EnvironmentNotFoundInContext = bs_platform_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_9__["create"]("ReasonRelay.EnvironmentNotFoundInContext");

function useEnvironmentFromContext(param) {
  var context = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](react_relay__WEBPACK_IMPORTED_MODULE_7__["ReactRelayContext"]);

  if (context !== undefined) {
    return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["valFromOption"](context).environment;
  }

  throw EnvironmentNotFoundInContext;
}

function mapFetchPolicy(param) {
  if (param === undefined) {
    return;
  }

  switch (param) {
    case
    /* StoreOnly */
    0:
      return "store-only";

    case
    /* StoreOrNetwork */
    1:
      return "store-or-network";

    case
    /* StoreAndNetwork */
    2:
      return "store-and-network";

    case
    /* NetworkOnly */
    3:
      return "network-only";
  }
}

function MakePreloadQuery(C) {
  var preload = function (environment, variables, fetchPolicy, fetchKey, networkCacheConfig, param) {
    return react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__["preloadQuery"](environment, C.query, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertVariables, variables)), {
      fetchKey: fetchKey,
      fetchPolicy: mapFetchPolicy(fetchPolicy),
      networkCacheConfig: networkCacheConfig
    });
  };

  return {
    preload: preload
  };
}

function MakeUseFragment(C) {
  var use = function (fr) {
    var data = react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__["useFragment"](C.fragmentSpec, fr);
    return useConvertedValue(C.convertFragment, data);
  };

  return {
    use: use
  };
}

function makeRefetchableFnOpts(fetchPolicy, renderPolicy, onComplete) {
  return {
    fetchPolicy: mapFetchPolicy(fetchPolicy),
    UNSTABLE_renderPolicy: mapRenderPolicy(renderPolicy),
    onComplete: function (maybeExn) {
      var match = maybeExn == null ? undefined : bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](maybeExn);

      if (onComplete !== undefined) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](onComplete, match);
      }
    }
  };
}

function MakeUseRefetchableFragment(C) {
  var useRefetchable = function (fr) {
    var match = react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__["useRefetchableFragment"](C.fragmentSpec, fr);
    var refetchFn = match[1];
    var data = useConvertedValue(C.convertFragment, match[0]);
    return (
      /* tuple */
      [data, function (variables, fetchPolicy, renderPolicy, onComplete, param) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_2"](refetchFn, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanObjectFromUndefined, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertVariables, variables))), makeRefetchableFnOpts(fetchPolicy, renderPolicy, onComplete));
      }]
    );
  };

  return {
    useRefetchable: useRefetchable
  };
}

function MakeUsePaginationFragment(C) {
  var useBlockingPagination = function (fr) {
    var p = react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__["useBlockingPaginationFragment"](C.fragmentSpec, fr);
    var data = useConvertedValue(C.convertFragment, p.data);
    return {
      data: data,
      loadNext: function (count, onComplete, param) {
        return p.loadNext(count, {
          onComplete: onComplete
        });
      },
      loadPrevious: function (count, onComplete, param) {
        return p.loadPrevious(count, {
          onComplete: onComplete
        });
      },
      hasNext: p.hasNext,
      hasPrevious: p.hasPrevious,
      refetch: function (variables, fetchPolicy, renderPolicy, onComplete, param) {
        return p.refetch(bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertVariables, variables)), makeRefetchableFnOpts(fetchPolicy, renderPolicy, onComplete));
      }
    };
  };

  var usePagination = function (fr) {
    var p = react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__["usePaginationFragment"](C.fragmentSpec, fr);
    var data = useConvertedValue(C.convertFragment, p.data);
    return {
      data: data,
      loadNext: function (count, onComplete, param) {
        return p.loadNext(count, {
          onComplete: onComplete
        });
      },
      loadPrevious: function (count, onComplete, param) {
        return p.loadPrevious(count, {
          onComplete: onComplete
        });
      },
      hasNext: p.hasNext,
      hasPrevious: p.hasPrevious,
      isLoadingNext: p.isLoadingNext,
      isLoadingPrevious: p.isLoadingPrevious,
      refetch: function (variables, fetchPolicy, renderPolicy, onComplete, param) {
        return p.refetch(bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertVariables, variables)), makeRefetchableFnOpts(fetchPolicy, renderPolicy, onComplete));
      }
    };
  };

  return {
    useBlockingPagination: useBlockingPagination,
    usePagination: usePagination
  };
}

var Mutation_failed = bs_platform_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_9__["create"]("ReasonRelay.Mutation_failed");

function MakeUseMutation(C) {
  var use = function (param) {
    var match = react_relay_lib_relay_experimental__WEBPACK_IMPORTED_MODULE_11__["useMutation"](C.node);
    var mutate = match[0];
    return (
      /* tuple */
      [function (onError, onCompleted, onUnsubscribe, optimisticResponse, optimisticUpdater, updater, variables, param) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](mutate, {
          onError: onError,
          onCompleted: onCompleted !== undefined ? function (r, errors) {
            return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_2"](onCompleted, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertResponse, r), errors == null ? undefined : bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](errors));
          } : undefined,
          onUnsubscribe: onUnsubscribe,
          optimisticResponse: optimisticResponse !== undefined ? bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.wrapResponse, bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["valFromOption"](optimisticResponse))) : undefined,
          optimisticUpdater: optimisticUpdater,
          updater: updater !== undefined ? function (store, r) {
            return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_2"](updater, store, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertResponse, r));
          } : undefined,
          variables: bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertVariables, variables))
        });
      }, match[1]]
    );
  };

  return {
    use: use
  };
}

function MakeCommitMutation(C) {
  var commitMutation = function (environment, variables, optimisticUpdater, optimisticResponse, updater, onCompleted, onError, param) {
    return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["commitMutation"](environment, {
      mutation: C.node,
      variables: bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertVariables, variables)),
      onCompleted: function (res, err) {
        if (onCompleted !== undefined) {
          return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_2"](onCompleted, !(res == null) ? bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertResponse, res)) : undefined, err == null ? undefined : bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](err));
        }
      },
      onError: function (err) {
        if (onError !== undefined) {
          return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](onError, err == null ? undefined : bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](err));
        }
      },
      optimisticResponse: optimisticResponse !== undefined ? bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.wrapResponse, bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["valFromOption"](optimisticResponse))) : undefined,
      optimisticUpdater: optimisticUpdater,
      updater: updater !== undefined ? function (store, r) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_2"](updater, store, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertResponse, r));
      } : undefined
    });
  };

  var commitMutationPromised = function (environment, variables, optimisticUpdater, optimisticResponse, updater, param) {
    var match = reason_promise_src_js_promise_js__WEBPACK_IMPORTED_MODULE_5__["pending"](undefined);
    var resolve = match[1];
    relay_runtime__WEBPACK_IMPORTED_MODULE_8__["commitMutation"](environment, {
      mutation: C.node,
      variables: bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertVariables, variables)),
      onCompleted: function (res, err) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](resolve,
        /* Ok */
        bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_1__["__"](0, [
        /* tuple */
        [!(res == null) ? bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertResponse, res)) : undefined, err == null ? undefined : bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](err)]]));
      },
      onError: function (err) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](resolve,
        /* Error */
        bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_1__["__"](1, [err == null ? undefined : bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](err)]));
      },
      optimisticResponse: optimisticResponse !== undefined ? bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["some"](bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.wrapResponse, bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["valFromOption"](optimisticResponse))) : undefined,
      optimisticUpdater: optimisticUpdater,
      updater: updater !== undefined ? function (store, r) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_2"](updater, store, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertResponse, r));
      } : undefined
    });
    return match[0];
  };

  return {
    commitMutation: commitMutation,
    commitMutationPromised: commitMutationPromised
  };
}

function commitLocalUpdate(environment, updater) {
  relay_runtime__WEBPACK_IMPORTED_MODULE_8__["commitLocalUpdate"](environment, updater);
}

function MakeUseSubscription(C) {
  var subscribe = function (environment, variables, onCompleted, onError, onNext, updater, param) {
    return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["requestSubscription"](environment, {
      subscription: C.node,
      variables: bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertVariables, variables)),
      onCompleted: onCompleted,
      onError: onError,
      onNext: onNext !== undefined ? function (r) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](onNext, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertResponse, r));
      } : undefined,
      updater: updater !== undefined ? function (store, r) {
        return bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_2"](updater, store, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](C.convertResponse, r));
      } : undefined
    });
  };

  return {
    subscribe: subscribe
  };
}

function dataIdToString(prim) {
  return prim;
}

function makeDataId(prim) {
  return prim;
}

function makeArguments(prim) {
  return prim;
}

function generateUniqueClientID(prim) {
  return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["generateUniqueClientID"]();
}

function isClientID(prim) {
  return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["isClientID"](prim);
}

var storeRootId = relay_runtime__WEBPACK_IMPORTED_MODULE_8__["ROOT_ID"];
var storeRootType = relay_runtime__WEBPACK_IMPORTED_MODULE_8__["ROOT_TYPE"];

function RecordProxy_invalidateRecord(prim) {
  prim.invalidateRecord();
}

var RecordProxy = {
  copyFieldsFrom: copyFieldsFrom,
  getDataId: getDataId,
  getLinkedRecord: getLinkedRecord,
  getLinkedRecords: getLinkedRecords,
  getOrCreateLinkedRecord: getOrCreateLinkedRecord,
  getType: getType,
  getValueString: getValueString,
  getValueStringArray: getValueStringArray,
  getValueInt: getValueInt,
  getValueIntArray: getValueIntArray,
  getValueFloat: getValueFloat,
  getValueFloatArray: getValueFloatArray,
  getValueBool: getValueBool,
  getValueBoolArray: getValueBoolArray,
  setLinkedRecord: setLinkedRecord,
  setLinkedRecords: setLinkedRecords,
  setValueString: setValueString,
  setValueStringArray: setValueStringArray,
  setValueInt: setValueInt,
  setValueIntArray: setValueIntArray,
  setValueFloat: setValueFloat,
  setValueFloatArray: setValueFloatArray,
  setValueBool: setValueBool,
  setValueBoolArray: setValueBoolArray,
  unsetValue: unsetValue,
  unsetLinkedRecord: unsetLinkedRecord,
  unsetLinkedRecords: unsetLinkedRecords,
  invalidateRecord: RecordProxy_invalidateRecord
};

function RecordSourceSelectorProxy_getRoot(prim) {
  return prim.getRoot();
}

function RecordSourceSelectorProxy_invalidateStore(prim) {
  prim.invalidateStore();
}

var RecordSourceSelectorProxy = {
  create: create,
  $$delete: $$delete,
  get: get,
  getRoot: RecordSourceSelectorProxy_getRoot,
  getRootField: getRootField,
  getPluralRootField: getPluralRootField,
  invalidateStore: RecordSourceSelectorProxy_invalidateStore
};

function RecordSourceProxy_getRoot(prim) {
  return prim.getRoot();
}

function RecordSourceProxy_invalidateStore(prim) {
  prim.invalidateStore();
}

var RecordSourceProxy = {
  create: create$1,
  $$delete: $$delete$1,
  get: get$1,
  getRoot: RecordSourceProxy_getRoot,
  invalidateStore: RecordSourceProxy_invalidateStore
};

function RecordSource_toJSON(prim) {
  return prim.toJSON();
}

var RecordSource = {
  make: make$1,
  toJSON: RecordSource_toJSON
};

function Store_getSource(prim) {
  return prim.getSource();
}

var Store = {
  make: make$2,
  getSource: Store_getSource
};

function Environment_getStore(prim) {
  return prim.getStore();
}

var Environment = {
  make: make$3,
  getStore: Environment_getStore
};
var Disposable = {
  dispose: function (prim) {
    prim.dispose();
  }
};

function MakeUseQuery(funarg) {
  var use = function (variables, fetchPolicy, renderPolicy, fetchKey, networkCacheConfig, param) {
    var data = react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__["useLazyLoadQuery"](funarg.query, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanObjectFromUndefined, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](funarg.convertVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, variables))), {
      fetchKey: fetchKey,
      fetchPolicy: mapFetchPolicy(fetchPolicy),
      UNSTABLE_renderPolicy: mapRenderPolicy(renderPolicy),
      networkCacheConfig: networkCacheConfig
    });
    return useConvertedValue(funarg.convertResponse, data);
  };

  var preload = function (environment, variables, fetchPolicy, fetchKey, networkCacheConfig, param) {
    return react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__["preloadQuery"](environment, funarg.query, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](_cleanVariables, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](funarg.convertVariables, variables)), {
      fetchKey: fetchKey,
      fetchPolicy: mapFetchPolicy(fetchPolicy),
      networkCacheConfig: networkCacheConfig
    });
  };

  var usePreloaded = function (token, renderPolicy, param) {
    var data = react_relay_hooks__WEBPACK_IMPORTED_MODULE_10__["usePreloadedQuery"](funarg.query, token, renderPolicy !== undefined ? {
      UNSTABLE_renderPolicy: mapRenderPolicy(renderPolicy)
    } : undefined);
    return useConvertedValue(funarg.convertResponse, data);
  };

  var $$fetch = function (environment, variables, onResult) {
    relay_runtime__WEBPACK_IMPORTED_MODULE_8__["fetchQuery"](environment, funarg.query, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](funarg.convertVariables, variables)).then(function (res) {
      bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](onResult,
      /* Ok */
      bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_1__["__"](0, [bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](funarg.convertResponse, res)]));

      return Promise.resolve(undefined);
    }).catch(function (err) {
      bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](onResult,
      /* Error */
      bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_1__["__"](1, [err]));

      return Promise.resolve(undefined);
    });
  };

  var fetchPromised = function (environment, variables) {
    var match = reason_promise_src_js_promise_js__WEBPACK_IMPORTED_MODULE_5__["pending"](undefined);
    var resolve = match[1];
    relay_runtime__WEBPACK_IMPORTED_MODULE_8__["fetchQuery"](environment, funarg.query, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](funarg.convertVariables, variables)).then(function (res) {
      bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](resolve,
      /* Ok */
      bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_1__["__"](0, [bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](funarg.convertResponse, res)]));

      return Promise.resolve(undefined);
    }).catch(function (err) {
      bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_1"](resolve,
      /* Error */
      bs_platform_lib_es6_block_js__WEBPACK_IMPORTED_MODULE_1__["__"](1, [err]));

      return Promise.resolve(undefined);
    });
    return match[0];
  };

  return {
    use: use,
    $$fetch: $$fetch,
    fetchPromised: fetchPromised,
    preload: preload,
    usePreloaded: usePreloaded
  };
}

var Context_Provider = {
  makeProps: function (prim, prim$1, prim$2, prim$3) {
    var tmp = {
      environment: prim,
      children: prim$1
    };

    if (prim$2 !== undefined) {
      tmp.key = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_6__["valFromOption"](prim$2);
    }

    return tmp;
  },
  make: ReasonRelay$Context$Provider
};
var Context = {
  context: react_relay__WEBPACK_IMPORTED_MODULE_7__["ReactRelayContext"],
  Provider: Context_Provider
};

function fetchQuery(prim, prim$1, prim$2) {
  return relay_runtime__WEBPACK_IMPORTED_MODULE_8__["fetchQuery"](prim, prim$1, prim$2);
}


/* _cleanObjectFromUndefined Not a pure module */

/***/ }),

/***/ "./node_modules/reason-relay/src/utils.js":
/*!************************************************!*\
  !*** ./node_modules/reason-relay/src/utils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This is bound to each nested object with fragments,
 * and used as a dummy function for casting a record
 * to a Js.t object with the fragment references.
 */
function getFragmentRefs() {
  return this;
}

function getNewObj(maybeNewObj, currentObj) {
  return maybeNewObj || Object.assign({}, currentObj);
}

function getPathName(path) {
  return path.join("_");
}

function makeNewPath(currentPath, newKeys) {
  return [].concat(currentPath, newKeys);
}
/**
 * Runs on each object in the tree and follows the provided instructions
 * to apply transforms etc.
 */


function traverse(fullInstructionMap, currentPath, currentObj, instructionMap, converters, nullableValue, instructionPaths, addFragmentOnRoot) {
  var newObj;

  if (addFragmentOnRoot) {
    newObj = getNewObj(newObj, currentObj);
    newObj.getFragmentRefs = getFragmentRefs.bind(newObj);
  }

  for (var key in currentObj) {
    var isUnion = false;
    var originalValue = currentObj[key]; // Instructions are stored by the path in the object where they apply

    var thisPath = makeNewPath(currentPath, [key]);
    var path = getPathName(thisPath);
    var instructions = instructionMap[path];
    var hasDeeperInstructions = instructionPaths.filter(function (p) {
      return p.indexOf(path) === 0 && p.length > path.length;
    }).length > 0;

    if (instructions) {
      if (currentObj[key] == null) {
        if (instructions["n"] === "") {
          newObj = getNewObj(newObj, currentObj);
          newObj[key] = nullableValue;
        }
      } else {
        var shouldConvertRootObj = typeof instructions["r"] === "string" && fullInstructionMap[instructions["r"]];
        var shouldAddFragmentFn = instructions["f"] === "";
        var shouldConvertEnum = typeof instructions["e"] === "string" && !!converters[instructions["e"]];
        var shouldConvertUnion = typeof instructions["u"] === "string" && !!converters[instructions["u"]];
        /**
         * Handle arrays
         */

        if (Array.isArray(currentObj[key])) {
          newObj = getNewObj(newObj, currentObj);
          newObj[key] = currentObj[key].map(function (v) {
            if (v == null) {
              return nullableValue;
            }

            if (shouldConvertRootObj) {
              return traverser(v, fullInstructionMap, converters, nullableValue, instructions["r"]);
            }

            if (shouldConvertEnum) {
              return converters[instructions["e"]](v);
            }

            if (shouldConvertUnion && typeof v === "object" && typeof v.__typename === "string") {
              isUnion = true;
              var newPath = makeNewPath(currentPath, [key, v.__typename.toLowerCase()]);
              var unionRootHasFragment = (instructionMap[getPathName(newPath)] || {}).f === "";
              var traversedValue = traverse(fullInstructionMap, newPath, v, instructionMap, converters, nullableValue, instructionPaths, unionRootHasFragment);
              return converters[instructions["u"]](traversedValue);
            }

            if (shouldAddFragmentFn && typeof v === "object") {
              var objWithFragmentFn = Object.assign({}, v);
              objWithFragmentFn.getFragmentRefs = getFragmentRefs.bind(objWithFragmentFn);
              return objWithFragmentFn;
            }

            return v;
          });
        } else {
          /**
           * Handle normal values.
           */
          var v = currentObj[key];

          if (shouldConvertRootObj) {
            newObj = getNewObj(newObj, currentObj);
            newObj[key] = traverser(v, fullInstructionMap, converters, nullableValue, instructions["r"]);
          }

          if (shouldConvertEnum) {
            newObj = getNewObj(newObj, currentObj);
            newObj[key] = converters[instructions["e"]](v);
          }

          if (shouldConvertUnion && typeof v === "object" && typeof v.__typename === "string") {
            isUnion = true;
            var newPath = makeNewPath(currentPath, [key, v.__typename.toLowerCase()]);
            var unionRootHasFragment = (instructionMap[getPathName(newPath)] || {}).f === "";
            var traversedValue = traverse(fullInstructionMap, newPath, v, instructionMap, converters, nullableValue, instructionPaths, unionRootHasFragment);
            newObj = getNewObj(newObj, currentObj);
            newObj[key] = converters[instructions["u"]](traversedValue);
          }

          if (shouldAddFragmentFn && typeof v === "object") {
            newObj = getNewObj(newObj, currentObj);
            var objWithFragmentFn = Object.assign({}, v);
            objWithFragmentFn.getFragmentRefs = getFragmentRefs.bind(objWithFragmentFn);
            newObj[key] = objWithFragmentFn;
          }
        }
      }
    }

    if (hasDeeperInstructions && originalValue != null && !isUnion) {
      var nextObj = newObj && newObj[key] || currentObj[key];

      if (typeof nextObj === "object" && !Array.isArray(originalValue)) {
        var traversedObj = traverse(fullInstructionMap, thisPath, nextObj, instructionMap, converters, nullableValue, instructionPaths);

        if (traversedObj !== nextObj) {
          newObj = getNewObj(newObj, currentObj);
          newObj[key] = traversedObj;
        }
      } else if (Array.isArray(originalValue)) {
        newObj = getNewObj(newObj, currentObj);
        newObj[key] = nextObj.map(function (o) {
          return typeof o === "object" && o != null ? traverse(fullInstructionMap, thisPath, o, instructionMap, converters, nullableValue, instructionPaths) : o;
        });
      }
    }
  }

  return newObj || currentObj;
}
/**
 * This function takes an object (snapshot from the Relay store) and applies a
 * set of conversions deeply on the object (instructions coming from "converters"-prop).
 * It converts nullable values either to null or undefined, and it wraps/unwraps enums
 * and unions.
 *
 * It preserves structural integrity where possible, and return new objects where properties
 * have been modified.
 */


function traverser(root, _instructionMaps, converters, nullableValue, rootObjectKey) {
  if (!root) {
    return nullableValue;
  }

  var instructionMaps = _instructionMaps || {};
  var instructionMap = instructionMaps[rootObjectKey || "__root"]; // No instructions

  if (!instructionMap) {
    return root;
  }

  var instructionPaths = Object.keys(instructionMap); // Nothing to convert, bail early

  if (instructionPaths.length === 0) {
    return root;
  } // We'll add a getFragmentRefs function to the root if needed here.
  // getFragmentRefs is currently the only thing that's possible to add
  // to the root.


  var fragmentsOnRoot = (instructionMap[""] || {}).f === "";

  if (Array.isArray(root)) {
    return root.map(function (v) {
      if (v == null) {
        return nullableValue;
      }

      return v == null ? nullableValue : traverse(instructionMaps, [], v, instructionMap, converters, nullableValue, instructionPaths, fragmentsOnRoot);
    });
  }

  var newObj = Object.assign({}, root);
  var v = traverse(instructionMaps, [], newObj, instructionMap, converters, nullableValue, instructionPaths, fragmentsOnRoot);
  return v;
}

module.exports = {
  traverser
};

/***/ }),

/***/ "./pages/index.bs.js":
/*!***************************!*\
  !*** ./pages/index.bs.js ***!
  \***************************/
/*! exports provided: make, $$default, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$default", function() { return $$default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return $$default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CategoryList_bs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CategoryList.bs.js */ "./components/CategoryList.bs.js");



function Index(Props) {
  var fallback = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", undefined, "Loading ...");
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "p-8"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    children: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_CategoryList_bs_js__WEBPACK_IMPORTED_MODULE_1__["make"], {}),
    fallback: fallback
  }));
}

var make = Index;
var $$default = Index;

/* react Not a pure module */

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/index.bs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Yves/Projects/Concenix/AdminPanel/pages/index.bs.js */"./pages/index.bs.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-relay":
/*!******************************!*\
  !*** external "react-relay" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "react-relay/hooks":
/*!************************************!*\
  !*** external "react-relay/hooks" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-relay/hooks");

/***/ }),

/***/ "react-relay/lib/relay-experimental":
/*!*****************************************************!*\
  !*** external "react-relay/lib/relay-experimental" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-relay/lib/relay-experimental");

/***/ }),

/***/ "relay-runtime":
/*!********************************!*\
  !*** external "relay-runtime" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21tb24vRW50aXR5UHJvdmlkZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL19fZ2VuZXJhdGVkX18vQ2F0ZWdvcnlMaXN0UXVlcnlfZ3JhcGhxbC5icy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhdGVnb3J5TGlzdC5icy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2Nocm9tZV9kZWJ1Z2dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9qc19leGNlcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb2JqLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb3B0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2N1cnJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhc29uLXByb21pc2Uvc3JjL2pzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYXNvbi1yZWxheS9zcmMvUmVhc29uUmVsYXkuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYXNvbi1yZWxheS9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguYnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlbGF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVsYXkvaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWxheS9saWIvcmVsYXktZXhwZXJpbWVudGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsYXktcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbImluaXRWYWx1ZV8wMDAiLCJjYXRlZ29yeUlkIiwibW9kdWxlSWQiLCJzdWJqZWNJZCIsImluaXRWYWx1ZV8wMDEiLCJwYXJhbSIsImluaXRWYWx1ZSIsImNvbnRleHQiLCJSZWFjdCIsInVzZUVudGl0eSIsIm1ha2UiLCJQcm92aWRlciIsIm1ha2VQcm9wcyIsInZhbHVlIiwiY2hpbGRyZW4iLCJUeXBlcyIsInJlc3BvbnNlQ29udmVydGVyIiwiY29udmVydFJlc3BvbnNlIiwidiIsIlJlYXNvblJlbGF5IiwidW5kZWZpbmVkIiwidmFyaWFibGVzQ29udmVydGVyIiwiY29udmVydFZhcmlhYmxlcyIsIkludGVybmFsIiwicmVzcG9uc2VDb252ZXJ0ZXJNYXAiLCJ2YXJpYWJsZXNDb252ZXJ0ZXJNYXAiLCJVdGlscyIsIm5vZGUiLCJ2MCIsIlByZWxvYWQiLCJxdWVyeSIsInByZWxvYWQiLCJDYXRlZ29yeUxpc3RRdWVyeV9ncmFwaHFsJE5leHRqc0RlZmF1bHQiLCJVc2VRdWVyeSIsInVzZSIsIlF1ZXJ5X2ZldGNoIiwiJCRmZXRjaCIsIlF1ZXJ5X2ZldGNoUHJvbWlzZWQiLCJmZXRjaFByb21pc2VkIiwiUXVlcnlfcHJlbG9hZCIsIlF1ZXJ5X3VzZVByZWxvYWRlZCIsInVzZVByZWxvYWRlZCIsIlF1ZXJ5IiwiT3BlcmF0aW9uIiwiQ2F0ZWdvcnlMaXN0IiwiUHJvcHMiLCJxdWVyeURhdGEiLCJDdXJyeSIsIm1hdGNoIiwiRW50aXR5UHJvdmlkZXIkTmV4dGpzRGVmYXVsdCIsImRpc3BhdGNoIiwiZW50aXR5IiwiY2F0ZWdvcmllcyIsImxpc3RDYXRlZ29yaWVzIiwiY29udGVudCIsIiQkQXJyYXkiLCJpIiwiY2F0IiwiaWQiLCJBbnRkIiwibmFtZSIsImV4dHJhIiwiTGluayIsImhyZWYiLCJhcyIsIlN0cmluZyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDYW1sX2Nocm9tZV9kZWJ1Z2dlciIsImhvdmVyYWJsZSIsInRpdGxlIiwia2V5IiwibWFrZV9mbG9hdCIsIkNhbWxfYXJyYXkiLCJGbG9hdGFycmF5IiwiaW5pdCIsImwiLCJmIiwiQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMiLCJyZXMiLCJtYWtlX21hdHJpeCIsInN4Iiwic3kiLCJ4IiwiY29weSIsImEiLCJsZW5ndGgiLCJhcHBlbmQiLCJhMSIsImEyIiwibDEiLCJjb25jYXQiLCJzdWIiLCJvZnMiLCJsZW4iLCJmaWxsIiwiaV9maW5pc2giLCJibGl0Iiwib2ZzMSIsIm9mczIiLCJpdGVyIiwiaXRlcjIiLCJiIiwibWFwIiwiciIsIm1hcDIiLCJsYSIsImxiIiwiaXRlcmkiLCJtYXBpIiwidG9fbGlzdCIsIl9pIiwiX3JlcyIsImxpc3RfbGVuZ3RoIiwiX2FjY3UiLCJfcGFyYW0iLCJhY2N1Iiwib2ZfbGlzdCIsImZvbGRfbGVmdCIsImZvbGRfcmlnaHQiLCJleGlzdHMiLCJwIiwibiIsImZvcl9hbGwiLCJtZW0iLCJDYW1sX29iaiIsIm1lbXEiLCJCb3R0b20iLCJDYW1sX2V4Y2VwdGlvbnMiLCJzb3J0IiwiY21wIiwibWF4c29uIiwiaTMxIiwidHJpY2tsZSIsImUiLCJpJDEiLCJqIiwicmF3X2kiLCJpJDIiLCJDYW1sX2pzX2V4Y2VwdGlvbnMiLCJidWJibGUiLCJ0cmlja2xldXAiLCJmYXRoZXIiLCJlJDEiLCJzdGFibGVfc29ydCIsIm1lcmdlIiwic3JjMW9mcyIsInNyYzFsZW4iLCJzcmMyIiwic3JjMm9mcyIsInNyYzJsZW4iLCJkc3QiLCJkc3RvZnMiLCJzcmMxciIsInNyYzJyIiwiX2kxIiwiX3MxIiwiX2kyIiwiX3MyIiwiX2QiLCJkIiwiczIiLCJpMiIsInMxIiwiaTEiLCJpMSQxIiwiaTIkMSIsImlzb3J0dG8iLCJzcmNvZnMiLCJzb3J0dG8iLCJsMiIsInQiLCJjcmVhdGVfbWF0cml4IiwiZmFzdF9zb3J0IiwiX18iLCJ0YWciLCJibG9jayIsImNhbWxfYXJyYXlfc3ViIiwib2Zmc2V0IiwicmVzdWx0IiwiQXJyYXkiLCJfYWNjIiwiX2wiLCJhY2MiLCJhcnIiLCJsJDEiLCJrIiwiY2FtbF9hcnJheV9jb25jYXQiLCJjYW1sX2FycmF5X3NldCIsInhzIiwiaW5kZXgiLCJuZXd2YWwiLCJjYW1sX2FycmF5X2dldCIsImNhbWxfbWFrZV92ZWN0IiwiY2FtbF9tYWtlX2Zsb2F0X3ZlY3QiLCJjYW1sX2FycmF5X2JsaXQiLCJqJDEiLCJjYW1sX2FycmF5X2R1cCIsInByaW0iLCJzbGljZSIsIm91dF9vZl9tZW1vcnkiLCJzeXNfZXJyb3IiLCJmYWlsdXJlIiwiaW52YWxpZF9hcmd1bWVudCIsImVuZF9vZl9maWxlIiwiZGl2aXNpb25fYnlfemVybyIsIm5vdF9mb3VuZCIsIm1hdGNoX2ZhaWx1cmUiLCJzdGFja19vdmVyZmxvdyIsInN5c19ibG9ja2VkX2lvIiwiYXNzZXJ0X2ZhaWx1cmUiLCJ1bmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZSIsInNldHVwQ2hyb21lRGVidWdnZXIiLCJfIiwib2xTdHlsZSIsImNvbG9uU3R5bGUiLCJzaG93T2JqZWN0IiwibGlzdFRvQXJyYXkiLCJkYXRhIiwiY3VyIiwicHVzaCIsInZhcmlhbnRDdXN0b21Gb3JtYXR0ZXIiLCJyZWNvcmRWYXJpYW50Iiwic3BhY2VkRGF0YSIsImZvckVhY2giLCJ2YXJpYW50UHJldmlldyIsImlzT0NhbWxFeGNlcHRpb25PckV4dGVuc2lvbkhlYWQiLCJpc0FycmF5IiwiaXNPQ2FtbEV4Y2VwdGlvbk9yRXh0ZW5zaW9uIiwiZm9ybWF0dGVyIiwiaGVhZGVyIiwicmVjb3JkUG9seVZhciIsIlN5bWJvbCIsImZvciIsImhhc0JvZHkiLCJib2R5IiwiZ2xvYmFsIiwiZGV2dG9vbHNGb3JtYXR0ZXJzIiwic2V0dXAiLCJjb250ZW50cyIsInNldHVwT25jZSIsInZhcmlhbnQiLCJtZXRhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzaW1wbGVWYXJpYW50IiwicG9seVZhciIsIkJsb2NrIiwiY2FtbF9zZXRfb29faWQiLCJjYW1sX2ZyZXNoX29vX2lkIiwiY3JlYXRlIiwic3RyIiwidl8wMDEiLCJjYW1sX2lzX2V4dGVuc2lvbiIsInNsb3QiLCIkJEVycm9yIiwiaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uIiwiY2FtbF9hc19qc19leG4iLCJleG4iLCJDYW1sX29wdGlvbiIsImZvcl9pbiIsIm8iLCJmb28iLCJjYW1sX29ial9ibG9jayIsInNpemUiLCJjYW1sX29ial9kdXAiLCJhc3NpZ24iLCJjYW1sX29ial90cnVuY2F0ZSIsIm5ld19zaXplIiwiY2FtbF9sYXp5X21ha2VfZm9yd2FyZCIsImNhbWxfbGF6eV9tYWtlIiwiZm4iLCJjYW1sX3VwZGF0ZV9kdW1teSIsInkiLCJjYW1sX2NvbXBhcmUiLCJfYSIsIl9iIiwiYV90eXBlIiwiYl90eXBlIiwiQ2FtbF9wcmltaXRpdmUiLCJ0YWdfYSIsInRhZ19iIiwibGVuX2EiLCJsZW5fYiIsIkRhdGUiLCJtaW5fa2V5X2xocyIsIm1pbl9rZXlfcmhzIiwiZG9fa2V5IiwibWluX2tleSIsImhhc093blByb3BlcnR5IiwibWsiLCJwYXJ0aWFsX2FyZyIsImRvX2tleV9hIiwicGFydGlhbF9hcmckMSIsImRvX2tleV9iIiwibWF0Y2gkMSIsIl9pJDEiLCJyZXMkMSIsIl9pJDIiLCJyZXMkMiIsImNhbWxfZXF1YWwiLCJjYW1sX2VxdWFsX251bGwiLCJjYW1sX2VxdWFsX3VuZGVmaW5lZCIsImNhbWxfZXF1YWxfbnVsbGFibGUiLCJjYW1sX25vdGVxdWFsIiwiY2FtbF9ncmVhdGVyZXF1YWwiLCJjYW1sX2dyZWF0ZXJ0aGFuIiwiY2FtbF9sZXNzZXF1YWwiLCJjYW1sX2xlc3N0aGFuIiwiY2FtbF9taW4iLCJjYW1sX21heCIsImNhbWxfb2JqX3NldF90YWciLCJwcmltJDEiLCJ1bmRlZmluZWRIZWFkZXIiLCJzb21lIiwibmlkIiwiYmxvY2skMSIsIm51bGxhYmxlX3RvX29wdCIsInVuZGVmaW5lZF90b19vcHQiLCJudWxsX3RvX29wdCIsInZhbEZyb21PcHRpb24iLCJkZXB0aCIsIm9wdGlvbl9nZXQiLCJvcHRpb25fZ2V0X3Vud3JhcCIsImNhbWxfaW50X2NvbXBhcmUiLCJjYW1sX2Jvb2xfY29tcGFyZSIsImNhbWxfZmxvYXRfY29tcGFyZSIsImNhbWxfc3RyaW5nX2NvbXBhcmUiLCJjYW1sX2J5dGVzX2NvbXBhcmVfYXV4IiwiX29mZiIsImRlZiIsIm9mZiIsImNhbWxfYnl0ZXNfY29tcGFyZSIsImxlbjEiLCJsZW4yIiwiY2FtbF9ieXRlc19lcXVhbCIsImNhbWxfYm9vbF9taW4iLCJjYW1sX2ludF9taW4iLCJjYW1sX2Zsb2F0X21pbiIsImNhbWxfc3RyaW5nX21pbiIsImNhbWxfbmF0aXZlaW50X21pbiIsImNhbWxfaW50MzJfbWluIiwiY2FtbF9ib29sX21heCIsImNhbWxfaW50X21heCIsImNhbWxfZmxvYXRfbWF4IiwiY2FtbF9zdHJpbmdfbWF4IiwiY2FtbF9uYXRpdmVpbnRfbWF4IiwiY2FtbF9pbnQzMl9tYXgiLCJjYW1sX25hdGl2ZWludF9jb21wYXJlIiwiY2FtbF9pbnQzMl9jb21wYXJlIiwiYXBwIiwiX2YiLCJfYXJncyIsImFyZ3MiLCJpbml0X2FyaXR5IiwiYXJpdHkiLCJhcHBseSIsIl8xIiwiYTAiLCJwYXJhbSQxIiwicGFyYW0kMiIsInBhcmFtJDMiLCJwYXJhbSQ0IiwicGFyYW0kNSIsIl9fMSIsIl8yIiwiX18yIiwiXzMiLCJfXzMiLCJfNCIsImEzIiwiX180IiwiXzUiLCJhNCIsIl9fNSIsIl82IiwiYTUiLCJfXzYiLCJfNyIsImE2IiwiX183IiwiXzgiLCJhNyIsIl9fOCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJoYW5kbGVyIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsImZpbHRlciIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJvblVuaGFuZGxlZEV4Y2VwdGlvbiIsIk5lc3RlZFByb21pc2UiLCJuZXN0ZWQiLCJ1bmJveCIsImJveCIsImV4ZWN1dG9yIiwiYm94aW5nUmVzb2x2ZSIsInJlc29sdmVkIiwicHJvbWlzZSIsImNhbGxiYWNrIiwiZXhjZXB0aW9uIiwiY2F0Y2hfIiwic2FmZUNhbGxiYWNrIiwiYXJyYXlUb0xpc3QiLCJhcnJheSIsImxpc3QiLCJtYXBBcnJheSIsInBlbmRpbmciLCJyZXNvbHZlJHByaW1lIiwicmVqZWN0JHByaW1lIiwidGFwIiwiYWxsQXJyYXkiLCJwcm9taXNlcyIsInJlc3VsdHMiLCJhbGwyIiwicDEiLCJwMiIsImFsbDMiLCJwMyIsImFsbDQiLCJwNCIsImFsbDUiLCJwNSIsImFsbDYiLCJwNiIsInJhY2UiLCJ0b1Jlc3VsdCIsImZyb21SZXN1bHQiLCJwZW5kaW5nJDEiLCJyZXNvbHZlZCQxIiwiZmxhdE1hcCIsImZsYXRNYXBPayIsImZsYXRNYXBFcnJvciIsIm1hcE9rIiwibWFwRXJyb3IiLCJnZXRPayIsImdldEVycm9yIiwidGFwT2siLCJ0YXBFcnJvciIsIk9wZXJhdG9ycyIsIiRncmVhdCRwaXBlJGVxIiwiJGdyZWF0JGdyZWF0JGVxIiwiZmxhdE1hcFNvbWUiLCJvcHRpb24iLCJtYXBTb21lIiwiZ2V0U29tZSIsInRhcFNvbWUiLCJQaXBlRmlyc3QiLCJKc19yZXNvbHZlZCIsIkpzX3JlamVjdGVkIiwiSnNfZmxhdE1hcCIsIkpzX2NhdGNoIiwiSnNfcmVsYXgiLCJKc19mcm9tQnNQcm9taXNlIiwiSnNfdG9Cc1Byb21pc2UiLCJKcyIsInJlamVjdGVkIiwiJCRjYXRjaCIsInJlbGF4IiwiZnJvbUJzUHJvbWlzZSIsInRvQnNQcm9taXNlIiwiZ2VuZXJhdGVDbGllbnRJRCIsImRhdGFJZCIsInN0b3JhZ2VLZXkiLCJSZWxheVJ1bnRpbWUiLCJfY2xlYW5PYmplY3RGcm9tVW5kZWZpbmVkIiwiY2xlYW5PYmoiLCJvYmoiLCJuZXdPYmoiLCJfY2xlYW5WYXJpYWJsZXMiLCJjbGVhblZhcmlhYmxlcyIsInZhcmlhYmxlcyIsIl9jb252ZXJ0T2JqIiwicHJpbSQyIiwicHJpbSQzIiwiY29weUZpZWxkc0Zyb20iLCJzb3VyY2VSZWNvcmQiLCJnZXREYXRhSWQiLCJnZXREYXRhSUQiLCJnZXRMaW5rZWRSZWNvcmQiLCIkJGFyZ3VtZW50cyIsImdldExpbmtlZFJlY29yZHMiLCJyZWNvcmRzIiwiZ2V0T3JDcmVhdGVMaW5rZWRSZWNvcmQiLCJ0eXBlTmFtZSIsImdldFR5cGUiLCJfZ2V0VmFsdWVBcnIiLCJnZXRWYWx1ZSIsImdldFZhbHVlU3RyaW5nIiwiZ2V0VmFsdWVTdHJpbmdBcnJheSIsImdldFZhbHVlSW50IiwiZ2V0VmFsdWVJbnRBcnJheSIsImdldFZhbHVlRmxvYXQiLCJnZXRWYWx1ZUZsb2F0QXJyYXkiLCJnZXRWYWx1ZUJvb2wiLCJnZXRWYWx1ZUJvb2xBcnJheSIsInNldExpbmtlZFJlY29yZCIsInJlY29yZCIsInVuc2V0TGlua2VkUmVjb3JkIiwidW5zZXRWYWx1ZSIsInNldExpbmtlZFJlY29yZHMiLCJ1bnNldExpbmtlZFJlY29yZHMiLCJ1bnNldFZhbHVlJDEiLCJzZXRWYWx1ZSIsInNldFZhbHVlU3RyaW5nIiwic2V0VmFsdWVTdHJpbmdBcnJheSIsInNldFZhbHVlSW50Iiwic2V0VmFsdWVJbnRBcnJheSIsInNldFZhbHVlRmxvYXQiLCJzZXRWYWx1ZUZsb2F0QXJyYXkiLCJzZXRWYWx1ZUJvb2wiLCJzZXRWYWx1ZUJvb2xBcnJheSIsIiQkZGVsZXRlIiwiZ2V0Um9vdEZpZWxkIiwiZmllbGROYW1lIiwiZ2V0UGx1cmFsUm9vdEZpZWxkIiwiY3JlYXRlJDEiLCIkJGRlbGV0ZSQxIiwiZ2V0JDEiLCJnZXRDb25uZWN0aW9uIiwiZmlsdGVycyIsImNyZWF0ZUVkZ2UiLCJzdG9yZSIsImNvbm5lY3Rpb24iLCJlZGdlVHlwZSIsImluc2VydEVkZ2VCZWZvcmUiLCJuZXdFZGdlIiwiY3Vyc29yIiwiaW5zZXJ0RWRnZUFmdGVyIiwiZGVsZXRlTm9kZSIsIm5vZGVJZCIsIkNvbm5lY3Rpb25IYW5kbGVyIiwic2lua0ZuIiwicyIsImNvbXBsZXRlZCIsImNsb3NlZCIsIk9ic2VydmFibGUiLCJtYWtlUHJvbWlzZUJhc2VkIiwiZmV0Y2hGdW5jdGlvbiIsInN1YnNjcmlwdGlvbkZ1bmN0aW9uIiwibWFrZU9ic2VydmFibGVCYXNlZCIsIm9ic2VydmFibGVGdW5jdGlvbiIsIk5ldHdvcmsiLCJtYWtlJDEiLCJtYWtlJDIiLCJzb3VyY2UiLCJnY1JlbGVhc2VCdWZmZXJTaXplIiwibWFwUmVuZGVyUG9saWN5IiwibWFrZSQzIiwibmV0d29yayIsImRlZmF1bHRSZW5kZXJQb2xpY3kiLCJVTlNUQUJMRV9ET19OT1RfVVNFX2dldERhdGFJRCIsIlVOU1RBQkxFX2RlZmF1bHRSZW5kZXJQb2xpY3kiLCJwcm92aWRlciIsIlJlYWN0UmVsYXkiLCJSZWFzb25SZWxheSRDb250ZXh0JFByb3ZpZGVyIiwiZW52aXJvbm1lbnQiLCJ1c2VDb252ZXJ0ZWRWYWx1ZSIsImNvbnZlcnQiLCJFbnZpcm9ubWVudE5vdEZvdW5kSW5Db250ZXh0IiwidXNlRW52aXJvbm1lbnRGcm9tQ29udGV4dCIsIm1hcEZldGNoUG9saWN5IiwiTWFrZVByZWxvYWRRdWVyeSIsIkMiLCJmZXRjaFBvbGljeSIsImZldGNoS2V5IiwibmV0d29ya0NhY2hlQ29uZmlnIiwiSG9va3MiLCJNYWtlVXNlRnJhZ21lbnQiLCJmciIsImZyYWdtZW50U3BlYyIsImNvbnZlcnRGcmFnbWVudCIsIm1ha2VSZWZldGNoYWJsZUZuT3B0cyIsInJlbmRlclBvbGljeSIsIm9uQ29tcGxldGUiLCJVTlNUQUJMRV9yZW5kZXJQb2xpY3kiLCJtYXliZUV4biIsIk1ha2VVc2VSZWZldGNoYWJsZUZyYWdtZW50IiwidXNlUmVmZXRjaGFibGUiLCJyZWZldGNoRm4iLCJNYWtlVXNlUGFnaW5hdGlvbkZyYWdtZW50IiwidXNlQmxvY2tpbmdQYWdpbmF0aW9uIiwibG9hZE5leHQiLCJjb3VudCIsImxvYWRQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsInJlZmV0Y2giLCJ1c2VQYWdpbmF0aW9uIiwiaXNMb2FkaW5nTmV4dCIsImlzTG9hZGluZ1ByZXZpb3VzIiwiTXV0YXRpb25fZmFpbGVkIiwiTWFrZVVzZU11dGF0aW9uIiwiUmVsYXlFeHBlcmltZW50YWwiLCJtdXRhdGUiLCJvbkVycm9yIiwib25Db21wbGV0ZWQiLCJvblVuc3Vic2NyaWJlIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwib3B0aW1pc3RpY1VwZGF0ZXIiLCJ1cGRhdGVyIiwiZXJyb3JzIiwid3JhcFJlc3BvbnNlIiwiTWFrZUNvbW1pdE11dGF0aW9uIiwiY29tbWl0TXV0YXRpb24iLCJtdXRhdGlvbiIsImNvbW1pdE11dGF0aW9uUHJvbWlzZWQiLCIkJFByb21pc2UiLCJjb21taXRMb2NhbFVwZGF0ZSIsIk1ha2VVc2VTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJvbk5leHQiLCJkYXRhSWRUb1N0cmluZyIsIm1ha2VEYXRhSWQiLCJtYWtlQXJndW1lbnRzIiwiZ2VuZXJhdGVVbmlxdWVDbGllbnRJRCIsImlzQ2xpZW50SUQiLCJzdG9yZVJvb3RJZCIsInN0b3JlUm9vdFR5cGUiLCJSZWNvcmRQcm94eV9pbnZhbGlkYXRlUmVjb3JkIiwiaW52YWxpZGF0ZVJlY29yZCIsIlJlY29yZFByb3h5IiwiUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eV9nZXRSb290IiwiZ2V0Um9vdCIsIlJlY29yZFNvdXJjZVNlbGVjdG9yUHJveHlfaW52YWxpZGF0ZVN0b3JlIiwiaW52YWxpZGF0ZVN0b3JlIiwiUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eSIsIlJlY29yZFNvdXJjZVByb3h5X2dldFJvb3QiLCJSZWNvcmRTb3VyY2VQcm94eV9pbnZhbGlkYXRlU3RvcmUiLCJSZWNvcmRTb3VyY2VQcm94eSIsIlJlY29yZFNvdXJjZV90b0pTT04iLCJ0b0pTT04iLCJSZWNvcmRTb3VyY2UiLCJTdG9yZV9nZXRTb3VyY2UiLCJnZXRTb3VyY2UiLCJTdG9yZSIsIkVudmlyb25tZW50X2dldFN0b3JlIiwiZ2V0U3RvcmUiLCJFbnZpcm9ubWVudCIsIkRpc3Bvc2FibGUiLCJkaXNwb3NlIiwiTWFrZVVzZVF1ZXJ5IiwiZnVuYXJnIiwidG9rZW4iLCJvblJlc3VsdCIsIkNvbnRleHRfUHJvdmlkZXIiLCJ0bXAiLCJDb250ZXh0IiwiZmV0Y2hRdWVyeSIsImdldEZyYWdtZW50UmVmcyIsImdldE5ld09iaiIsIm1heWJlTmV3T2JqIiwiY3VycmVudE9iaiIsImdldFBhdGhOYW1lIiwibWFrZU5ld1BhdGgiLCJjdXJyZW50UGF0aCIsIm5ld0tleXMiLCJ0cmF2ZXJzZSIsImZ1bGxJbnN0cnVjdGlvbk1hcCIsImluc3RydWN0aW9uTWFwIiwiY29udmVydGVycyIsIm51bGxhYmxlVmFsdWUiLCJpbnN0cnVjdGlvblBhdGhzIiwiYWRkRnJhZ21lbnRPblJvb3QiLCJiaW5kIiwiaXNVbmlvbiIsIm9yaWdpbmFsVmFsdWUiLCJ0aGlzUGF0aCIsImluc3RydWN0aW9ucyIsImhhc0RlZXBlckluc3RydWN0aW9ucyIsInNob3VsZENvbnZlcnRSb290T2JqIiwic2hvdWxkQWRkRnJhZ21lbnRGbiIsInNob3VsZENvbnZlcnRFbnVtIiwic2hvdWxkQ29udmVydFVuaW9uIiwidHJhdmVyc2VyIiwiX190eXBlbmFtZSIsIm5ld1BhdGgiLCJ0b0xvd2VyQ2FzZSIsInVuaW9uUm9vdEhhc0ZyYWdtZW50IiwidHJhdmVyc2VkVmFsdWUiLCJvYmpXaXRoRnJhZ21lbnRGbiIsIm5leHRPYmoiLCJ0cmF2ZXJzZWRPYmoiLCJyb290IiwiX2luc3RydWN0aW9uTWFwcyIsInJvb3RPYmplY3RLZXkiLCJpbnN0cnVjdGlvbk1hcHMiLCJmcmFnbWVudHNPblJvb3QiLCJtb2R1bGUiLCJJbmRleCIsImZhbGxiYWNrIiwiQ2F0ZWdvcnlMaXN0JE5leHRqc0RlZmF1bHQiLCIkJGRlZmF1bHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgaW5pdFZhbHVlXzAwMCA9IHtcbiAgY2F0ZWdvcnlJZDogXCJcIixcbiAgbW9kdWxlSWQ6IFwiXCIsXG4gIHN1YmplY0lkOiBcIlwiXG59O1xuXG5mdW5jdGlvbiBpbml0VmFsdWVfMDAxKHBhcmFtKSB7XG4gIFxufVxuXG52YXIgaW5pdFZhbHVlID0gLyogdHVwbGUgKi9bXG4gIGluaXRWYWx1ZV8wMDAsXG4gIGluaXRWYWx1ZV8wMDFcbl07XG5cbnZhciBjb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChpbml0VmFsdWUpO1xuXG5mdW5jdGlvbiB1c2VFbnRpdHkocGFyYW0pIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoY29udGV4dCk7XG59XG5cbnZhciBtYWtlID0gY29udGV4dC5Qcm92aWRlcjtcblxuZnVuY3Rpb24gbWFrZVByb3BzKHZhbHVlLCBjaGlsZHJlbiwgcGFyYW0pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgIH07XG59XG5cbmV4cG9ydCB7XG4gIGluaXRWYWx1ZSAsXG4gIGNvbnRleHQgLFxuICB1c2VFbnRpdHkgLFxuICBtYWtlICxcbiAgbWFrZVByb3BzICxcbiAgXG59XG4vKiBjb250ZXh0IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJcblxuaW1wb3J0ICogYXMgUmVhc29uUmVsYXkgZnJvbSBcInJlYXNvbi1yZWxheS9zcmMvUmVhc29uUmVsYXkuYnMuanNcIjtcblxudmFyIFR5cGVzID0geyB9O1xuXG52YXIgcmVzcG9uc2VDb252ZXJ0ZXIgPSAoe1wiX19yb290XCI6e1wibGlzdENhdGVnb3JpZXNcIjp7XCJuXCI6XCJcIn19fSk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRSZXNwb25zZSh2KSB7XG4gIHJldHVybiBSZWFzb25SZWxheS5fY29udmVydE9iaih2LCByZXNwb25zZUNvbnZlcnRlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xufVxuXG52YXIgdmFyaWFibGVzQ29udmVydGVyID0gKHt9KTtcblxuZnVuY3Rpb24gY29udmVydFZhcmlhYmxlcyh2KSB7XG4gIHJldHVybiBSZWFzb25SZWxheS5fY29udmVydE9iaih2LCB2YXJpYWJsZXNDb252ZXJ0ZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbn1cblxudmFyIEludGVybmFsID0ge1xuICByZXNwb25zZUNvbnZlcnRlcjogcmVzcG9uc2VDb252ZXJ0ZXIsXG4gIHJlc3BvbnNlQ29udmVydGVyTWFwOiB1bmRlZmluZWQsXG4gIGNvbnZlcnRSZXNwb25zZTogY29udmVydFJlc3BvbnNlLFxuICB2YXJpYWJsZXNDb252ZXJ0ZXI6IHZhcmlhYmxlc0NvbnZlcnRlcixcbiAgdmFyaWFibGVzQ29udmVydGVyTWFwOiB1bmRlZmluZWQsXG4gIGNvbnZlcnRWYXJpYWJsZXM6IGNvbnZlcnRWYXJpYWJsZXNcbn07XG5cbnZhciBVdGlscyA9IHsgfTtcblxudmFyIG5vZGUgPSAoKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgXCJhcmdzXCI6IG51bGwsXG4gICAgXCJjb25jcmV0ZVR5cGVcIjogXCJDYXRlZ29yeVwiLFxuICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgXCJuYW1lXCI6IFwibGlzdENhdGVnb3JpZXNcIixcbiAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXSxcbiAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICB9XG5dO1xucmV0dXJuIHtcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcIkNhdGVnb3J5TGlzdFF1ZXJ5XCIsXG4gICAgXCJzZWxlY3Rpb25zXCI6ICh2MC8qOiBhbnkqLyksXG4gICAgXCJ0eXBlXCI6IFwiUm9vdFF1ZXJ5VHlwZVwiXG4gIH0sXG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJDYXRlZ29yeUxpc3RRdWVyeVwiLFxuICAgIFwic2VsZWN0aW9uc1wiOiAodjAvKjogYW55Ki8pXG4gIH0sXG4gIFwicGFyYW1zXCI6IHtcbiAgICBcImlkXCI6IG51bGwsXG4gICAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgICBcIm5hbWVcIjogXCJDYXRlZ29yeUxpc3RRdWVyeVwiLFxuICAgIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gICAgXCJ0ZXh0XCI6IFwicXVlcnkgQ2F0ZWdvcnlMaXN0UXVlcnkge1xcbiAgbGlzdENhdGVnb3JpZXMge1xcbiAgICBuYW1lXFxuICAgIGlkXFxuICB9XFxufVxcblwiXG4gIH1cbn07XG59KSgpKTtcblxudmFyIFByZWxvYWQgPSBSZWFzb25SZWxheS5NYWtlUHJlbG9hZFF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBub2RlLFxuICAgICAgY29udmVydFZhcmlhYmxlczogY29udmVydFZhcmlhYmxlc1xuICAgIH0pO1xuXG52YXIgcHJlbG9hZCA9IFByZWxvYWQucHJlbG9hZDtcblxuZXhwb3J0IHtcbiAgVHlwZXMgLFxuICBJbnRlcm5hbCAsXG4gIFV0aWxzICxcbiAgbm9kZSAsXG4gIFByZWxvYWQgLFxuICBwcmVsb2FkICxcbiAgXG59XG4vKiByZXNwb25zZUNvbnZlcnRlciBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEFudGQgZnJvbSBcImFudGRcIjtcbmltcG9ydCAqIGFzICQkQXJyYXkgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvYXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0ICogYXMgUmVhc29uUmVsYXkgZnJvbSBcInJlYXNvbi1yZWxheS9zcmMvUmVhc29uUmVsYXkuYnMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfY2hyb21lX2RlYnVnZ2VyIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfY2hyb21lX2RlYnVnZ2VyLmpzXCI7XG5pbXBvcnQgKiBhcyBFbnRpdHlQcm92aWRlciROZXh0anNEZWZhdWx0IGZyb20gXCIuLi9jb21tb24vRW50aXR5UHJvdmlkZXIuYnMuanNcIjtcbmltcG9ydCAqIGFzIENhdGVnb3J5TGlzdFF1ZXJ5X2dyYXBocWwkTmV4dGpzRGVmYXVsdCBmcm9tIFwiLi4vY29tbW9uL19fZ2VuZXJhdGVkX18vQ2F0ZWdvcnlMaXN0UXVlcnlfZ3JhcGhxbC5icy5qc1wiO1xuXG52YXIgY29udmVydFJlc3BvbnNlID0gQ2F0ZWdvcnlMaXN0UXVlcnlfZ3JhcGhxbCROZXh0anNEZWZhdWx0LkludGVybmFsLmNvbnZlcnRSZXNwb25zZTtcblxudmFyIGNvbnZlcnRWYXJpYWJsZXMgPSBDYXRlZ29yeUxpc3RRdWVyeV9ncmFwaHFsJE5leHRqc0RlZmF1bHQuSW50ZXJuYWwuY29udmVydFZhcmlhYmxlcztcblxudmFyIFVzZVF1ZXJ5ID0gUmVhc29uUmVsYXkuTWFrZVVzZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBDYXRlZ29yeUxpc3RRdWVyeV9ncmFwaHFsJE5leHRqc0RlZmF1bHQubm9kZSxcbiAgICAgIGNvbnZlcnRSZXNwb25zZTogY29udmVydFJlc3BvbnNlLFxuICAgICAgY29udmVydFZhcmlhYmxlczogY29udmVydFZhcmlhYmxlc1xuICAgIH0pO1xuXG52YXIgdXNlID0gVXNlUXVlcnkudXNlO1xuXG52YXIgUXVlcnlfZmV0Y2ggPSBVc2VRdWVyeS4kJGZldGNoO1xuXG52YXIgUXVlcnlfZmV0Y2hQcm9taXNlZCA9IFVzZVF1ZXJ5LmZldGNoUHJvbWlzZWQ7XG5cbnZhciBRdWVyeV9wcmVsb2FkID0gVXNlUXVlcnkucHJlbG9hZDtcblxudmFyIFF1ZXJ5X3VzZVByZWxvYWRlZCA9IFVzZVF1ZXJ5LnVzZVByZWxvYWRlZDtcblxudmFyIFF1ZXJ5ID0ge1xuICBPcGVyYXRpb246IHVuZGVmaW5lZCxcbiAgVHlwZXM6IHVuZGVmaW5lZCxcbiAgVXNlUXVlcnk6IFVzZVF1ZXJ5LFxuICB1c2U6IHVzZSxcbiAgJCRmZXRjaDogUXVlcnlfZmV0Y2gsXG4gIGZldGNoUHJvbWlzZWQ6IFF1ZXJ5X2ZldGNoUHJvbWlzZWQsXG4gIHByZWxvYWQ6IFF1ZXJ5X3ByZWxvYWQsXG4gIHVzZVByZWxvYWRlZDogUXVlcnlfdXNlUHJlbG9hZGVkXG59O1xuXG5mdW5jdGlvbiBDYXRlZ29yeUxpc3QoUHJvcHMpIHtcbiAgdmFyIHF1ZXJ5RGF0YSA9IEN1cnJ5Ll82KHVzZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gIHZhciBtYXRjaCA9IEVudGl0eVByb3ZpZGVyJE5leHRqc0RlZmF1bHQudXNlRW50aXR5KHVuZGVmaW5lZCk7XG4gIHZhciBkaXNwYXRjaCA9IG1hdGNoWzFdO1xuICB2YXIgZW50aXR5ID0gbWF0Y2hbMF07XG4gIHZhciBjYXRlZ29yaWVzID0gcXVlcnlEYXRhLmxpc3RDYXRlZ29yaWVzO1xuICB2YXIgY29udGVudCA9IGNhdGVnb3JpZXMgIT09IHVuZGVmaW5lZCA/ICQkQXJyYXkubWFwaSgoZnVuY3Rpb24gKGksIGNhdCkge1xuICAgICAgICAgICAgdmFyIGlkID0gY2F0LmlkO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW50ZC5DYXJkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogY2F0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL1tjYXRlZ29yeUlkXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM6IFwiL1wiICsgKFN0cmluZyhpZCkgKyBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoZGlzcGF0Y2gsIC8qIFVwZGF0ZUVudGl0eSAqL0NhbWxfY2hyb21lX2RlYnVnZ2VyLnNpbXBsZVZhcmlhbnQoXCJVcGRhdGVFbnRpdHlcIiwgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBlbnRpdHkubW9kdWxlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY0lkOiBlbnRpdHkuc3ViamVjSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJTZWxlY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBjYXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogU3RyaW5nKGkpXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksIGNhdGVnb3JpZXMpIDogUmVhY3QuY3JlYXRlRWxlbWVudChBbnRkLkNhcmQsIHtcbiAgICAgICAgICBjaGlsZHJlbjogXCJOYWRhXCJcbiAgICAgICAgfSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIlxuICAgICAgICAgICAgfSwgY29udGVudCk7XG59XG5cbnZhciBtYWtlID0gQ2F0ZWdvcnlMaXN0O1xuXG5leHBvcnQge1xuICBRdWVyeSAsXG4gIG1ha2UgLFxuICBcbn1cbi8qIFVzZVF1ZXJ5IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb2JqIGZyb20gXCIuL2NhbWxfb2JqLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5IGZyb20gXCIuL2NhbWxfYXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2V4Y2VwdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfanNfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2pzX2V4Y2VwdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbnZhciBtYWtlX2Zsb2F0ID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfZmxvYXRfdmVjdDtcblxudmFyIEZsb2F0YXJyYXkgPSB7IH07XG5cbmZ1bmN0aW9uIGluaXQobCwgZikge1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAobCA8IDApIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIkFycmF5LmluaXRcIlxuICAgICAgICBdO1xuICB9XG4gIHZhciByZXMgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwsIEN1cnJ5Ll8xKGYsIDApKTtcbiAgZm9yKHZhciBpID0gMTsgaSA8IGw7ICsraSl7XG4gICAgcmVzW2ldID0gQ3VycnkuXzEoZiwgaSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbWFrZV9tYXRyaXgoc3gsIHN5LCBpbml0KSB7XG4gIHZhciByZXMgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KHN4LCBbXSk7XG4gIGZvcih2YXIgeCA9IDA7IHggPCBzeDsgKyt4KXtcbiAgICByZXNbeF0gPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KHN5LCBpbml0KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBjb3B5KGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIoYSwgMCwgbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kKGExLCBhMikge1xuICB2YXIgbDEgPSBhMS5sZW5ndGg7XG4gIGlmIChsMSA9PT0gMCkge1xuICAgIHJldHVybiBjb3B5KGEyKTtcbiAgfSBlbHNlIGlmIChhMi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3N1YihhMSwgMCwgbDEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhMS5jb25jYXQoYTIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YihhLCBvZnMsIGxlbikge1xuICBpZiAob2ZzIDwgMCB8fCBsZW4gPCAwIHx8IG9mcyA+IChhLmxlbmd0aCAtIGxlbiB8IDApKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5zdWJcIlxuICAgICAgICBdO1xuICB9XG4gIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc3ViKGEsIG9mcywgbGVuKTtcbn1cblxuZnVuY3Rpb24gZmlsbChhLCBvZnMsIGxlbiwgdikge1xuICBpZiAob2ZzIDwgMCB8fCBsZW4gPCAwIHx8IG9mcyA+IChhLmxlbmd0aCAtIGxlbiB8IDApKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5maWxsXCJcbiAgICAgICAgXTtcbiAgfVxuICBmb3IodmFyIGkgPSBvZnMgLGlfZmluaXNoID0gb2ZzICsgbGVuIHwgMDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGFbaV0gPSB2O1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBibGl0KGExLCBvZnMxLCBhMiwgb2ZzMiwgbGVuKSB7XG4gIGlmIChsZW4gPCAwIHx8IG9mczEgPCAwIHx8IG9mczEgPiAoYTEubGVuZ3RoIC0gbGVuIHwgMCkgfHwgb2ZzMiA8IDAgfHwgb2ZzMiA+IChhMi5sZW5ndGggLSBsZW4gfCAwKSkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiQXJyYXkuYmxpdFwiXG4gICAgICAgIF07XG4gIH1cbiAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9ibGl0KGExLCBvZnMxLCBhMiwgb2ZzMiwgbGVuKTtcbn1cblxuZnVuY3Rpb24gaXRlcihmLCBhKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBDdXJyeS5fMShmLCBhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gaXRlcjIoZiwgYSwgYikge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5pdGVyMjogYXJyYXlzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGhcIlxuICAgICAgICBdO1xuICB9XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBDdXJyeS5fMihmLCBhW2ldLCBiW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbWFwKGYsIGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHIgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwsIEN1cnJ5Ll8xKGYsIGFbMF0pKTtcbiAgZm9yKHZhciBpID0gMTsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IEN1cnJ5Ll8xKGYsIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBtYXAyKGYsIGEsIGIpIHtcbiAgdmFyIGxhID0gYS5sZW5ndGg7XG4gIHZhciBsYiA9IGIubGVuZ3RoO1xuICBpZiAobGEgIT09IGxiKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5tYXAyOiBhcnJheXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aFwiXG4gICAgICAgIF07XG4gIH1cbiAgaWYgKGxhID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChsYSwgQ3VycnkuXzIoZiwgYVswXSwgYlswXSkpO1xuICBmb3IodmFyIGkgPSAxOyBpIDwgbGE7ICsraSl7XG4gICAgcltpXSA9IEN1cnJ5Ll8yKGYsIGFbaV0sIGJbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBpdGVyaShmLCBhKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBDdXJyeS5fMihmLCBpLCBhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbWFwaShmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChsLCBDdXJyeS5fMihmLCAwLCBhWzBdKSk7XG4gIGZvcih2YXIgaSA9IDE7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBDdXJyeS5fMihmLCBpLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gdG9fbGlzdChhKSB7XG4gIHZhciBfaSA9IGEubGVuZ3RoIC0gMSB8IDA7XG4gIHZhciBfcmVzID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIF9yZXMgPSAvKiA6OiAqL1tcbiAgICAgIGFbaV0sXG4gICAgICByZXNcbiAgICBdO1xuICAgIF9pID0gaSAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGlzdF9sZW5ndGgoX2FjY3UsIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9wYXJhbSA9IHBhcmFtWzFdO1xuICAgIF9hY2N1ID0gYWNjdSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2ZfbGlzdChsKSB7XG4gIGlmICghbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgYSA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX3ZlY3QobGlzdF9sZW5ndGgoMCwgbCksIGxbMF0pO1xuICB2YXIgX2kgPSAxO1xuICB2YXIgX3BhcmFtID0gbFsxXTtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBhW2ldID0gcGFyYW1bMF07XG4gICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkX2xlZnQoZiwgeCwgYSkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gQ3VycnkuXzIoZiwgciwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGZvbGRfcmlnaHQoZiwgYSwgeCkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gQ3VycnkuXzIoZiwgYVtpXSwgcik7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGV4aXN0cyhwLCBhKSB7XG4gIHZhciBuID0gYS5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChDdXJyeS5fMShwLCBhW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yX2FsbChwLCBhKSB7XG4gIHZhciBuID0gYS5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFDdXJyeS5fMShwLCBhW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lbSh4LCBhKSB7XG4gIHZhciBuID0gYS5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChDYW1sX29iai5jYW1sX2VxdWFsKGFbaV0sIHgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZW1xKHgsIGEpIHtcbiAgdmFyIG4gPSBhLmxlbmd0aDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IG4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHggPT09IGFbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbnZhciBCb3R0b20gPSBDYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiQXJyYXkuQm90dG9tXCIpO1xuXG5mdW5jdGlvbiBzb3J0KGNtcCwgYSkge1xuICB2YXIgbWF4c29uID0gZnVuY3Rpb24gKGwsIGkpIHtcbiAgICB2YXIgaTMxID0gKChpICsgaSB8IDApICsgaSB8IDApICsgMSB8IDA7XG4gICAgdmFyIHggPSBpMzE7XG4gICAgaWYgKChpMzEgKyAyIHwgMCkgPCBsKSB7XG4gICAgICBpZiAoQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkzMSksIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaTMxICsgMSB8IDApKSA8IDApIHtcbiAgICAgICAgeCA9IGkzMSArIDEgfCAwO1xuICAgICAgfVxuICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCB4KSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMzEgKyAyIHwgMCkpIDwgMCkge1xuICAgICAgICB4ID0gaTMxICsgMiB8IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKChpMzEgKyAxIHwgMCkgPCBsICYmIEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMzEpLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkzMSArIDEgfCAwKSkgPCAwKSB7XG4gICAgICByZXR1cm4gaTMxICsgMSB8IDA7XG4gICAgfVxuICAgIGlmIChpMzEgPCBsKSB7XG4gICAgICByZXR1cm4gaTMxO1xuICAgIH1cbiAgICB0aHJvdyBbXG4gICAgICAgICAgQm90dG9tLFxuICAgICAgICAgIGlcbiAgICAgICAgXTtcbiAgfTtcbiAgdmFyIHRyaWNrbGUgPSBmdW5jdGlvbiAobCwgaSwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX2kgPSBpO1xuICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICB2YXIgaSQxID0gX2k7XG4gICAgICAgIHZhciBqID0gbWF4c29uKGwsIGkkMSk7XG4gICAgICAgIGlmIChDdXJyeS5fMihjbXAsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaiksIGUpIDw9IDApIHtcbiAgICAgICAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpJDEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgaSQxLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGopKTtcbiAgICAgICAgX2kgPSBqO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAocmF3X2kpe1xuICAgICAgdmFyIGkkMiA9IENhbWxfanNfZXhjZXB0aW9ucy5pbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24ocmF3X2kpO1xuICAgICAgaWYgKGkkMlswXSA9PT0gQm90dG9tKSB7XG4gICAgICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGkkMlsxXSwgZSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBpJDI7XG4gICAgfVxuICB9O1xuICB2YXIgYnViYmxlID0gZnVuY3Rpb24gKGwsIGkpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF9pID0gaTtcbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgdmFyIGkkMSA9IF9pO1xuICAgICAgICB2YXIgaiA9IG1heHNvbihsLCBpJDEpO1xuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGkkMSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBqKSk7XG4gICAgICAgIF9pID0gajtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKHJhd19pKXtcbiAgICAgIHZhciBpJDIgPSBDYW1sX2pzX2V4Y2VwdGlvbnMuaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uKHJhd19pKTtcbiAgICAgIGlmIChpJDJbMF0gPT09IEJvdHRvbSkge1xuICAgICAgICByZXR1cm4gaSQyWzFdO1xuICAgICAgfVxuICAgICAgdGhyb3cgaSQyO1xuICAgIH1cbiAgfTtcbiAgdmFyIHRyaWNrbGV1cCA9IGZ1bmN0aW9uIChfaSwgZSkge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBpID0gX2k7XG4gICAgICB2YXIgZmF0aGVyID0gKGkgLSAxIHwgMCkgLyAzIHwgMDtcbiAgICAgIGlmIChpID09PSBmYXRoZXIpIHtcbiAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5hc3NlcnRfZmFpbHVyZSxcbiAgICAgICAgICAgICAgLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgXCJhcnJheS5tbFwiLFxuICAgICAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF07XG4gICAgICB9XG4gICAgICBpZiAoQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGZhdGhlciksIGUpID49IDApIHtcbiAgICAgICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgaSwgZSk7XG4gICAgICB9XG4gICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGksIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgZmF0aGVyKSk7XG4gICAgICBpZiAoZmF0aGVyIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgMCwgZSk7XG4gICAgICB9XG4gICAgICBfaSA9IGZhdGhlcjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9O1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAoKGwgKyAxIHwgMCkgLyAzIHwgMCkgLSAxIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHRyaWNrbGUobCwgaSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpKSk7XG4gIH1cbiAgZm9yKHZhciBpJDEgPSBsIC0gMSB8IDA7IGkkMSA+PSAyOyAtLWkkMSl7XG4gICAgdmFyIGUgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkkMSk7XG4gICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpJDEsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgMCkpO1xuICAgIHRyaWNrbGV1cChidWJibGUoaSQxLCAwKSwgZSk7XG4gIH1cbiAgaWYgKGwgPD0gMSkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGUkMSA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgMSk7XG4gIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgMSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCAwKSk7XG4gIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIDAsIGUkMSk7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZV9zb3J0KGNtcCwgYSkge1xuICB2YXIgbWVyZ2UgPSBmdW5jdGlvbiAoc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMpIHtcbiAgICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gICAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICAgIHZhciBfaTEgPSBzcmMxb2ZzO1xuICAgIHZhciBfczEgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIHNyYzFvZnMpO1xuICAgIHZhciBfaTIgPSBzcmMyb2ZzO1xuICAgIHZhciBfczIgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KHNyYzIsIHNyYzJvZnMpO1xuICAgIHZhciBfZCA9IGRzdG9mcztcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgZCA9IF9kO1xuICAgICAgdmFyIHMyID0gX3MyO1xuICAgICAgdmFyIGkyID0gX2kyO1xuICAgICAgdmFyIHMxID0gX3MxO1xuICAgICAgdmFyIGkxID0gX2kxO1xuICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgczEsIHMyKSA8PSAwKSB7XG4gICAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoZHN0LCBkLCBzMSk7XG4gICAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgICAgaWYgKGkxJDEgPj0gc3JjMXIpIHtcbiAgICAgICAgICByZXR1cm4gYmxpdChzcmMyLCBpMiwgZHN0LCBkICsgMSB8IDAsIHNyYzJyIC0gaTIgfCAwKTtcbiAgICAgICAgfVxuICAgICAgICBfZCA9IGQgKyAxIHwgMDtcbiAgICAgICAgX3MxID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMSQxKTtcbiAgICAgICAgX2kxID0gaTEkMTtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfVxuICAgICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChkc3QsIGQsIHMyKTtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIGlmIChpMiQxID49IHNyYzJyKSB7XG4gICAgICAgIHJldHVybiBibGl0KGEsIGkxLCBkc3QsIGQgKyAxIHwgMCwgc3JjMXIgLSBpMSB8IDApO1xuICAgICAgfVxuICAgICAgX2QgPSBkICsgMSB8IDA7XG4gICAgICBfczIgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KHNyYzIsIGkyJDEpO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9O1xuICB2YXIgaXNvcnR0byA9IGZ1bmN0aW9uIChzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgICAgdmFyIGUgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIHNyY29mcyArIGkgfCAwKTtcbiAgICAgIHZhciBqID0gKGRzdG9mcyArIGkgfCAwKSAtIDEgfCAwO1xuICAgICAgd2hpbGUoaiA+PSBkc3RvZnMgJiYgQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGRzdCwgaiksIGUpID4gMCkge1xuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGRzdCwgaiArIDEgfCAwLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGRzdCwgaikpO1xuICAgICAgICBqID0gaiAtIDEgfCAwO1xuICAgICAgfTtcbiAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoZHN0LCBqICsgMSB8IDAsIGUpO1xuICAgIH1cbiAgICBcbiAgfTtcbiAgdmFyIHNvcnR0byA9IGZ1bmN0aW9uIChzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pIHtcbiAgICBpZiAobGVuIDw9IDUpIHtcbiAgICAgIHJldHVybiBpc29ydHRvKHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbik7XG4gICAgfVxuICAgIHZhciBsMSA9IGxlbiAvIDIgfCAwO1xuICAgIHZhciBsMiA9IGxlbiAtIGwxIHwgMDtcbiAgICBzb3J0dG8oc3Jjb2ZzICsgbDEgfCAwLCBkc3QsIGRzdG9mcyArIGwxIHwgMCwgbDIpO1xuICAgIHNvcnR0byhzcmNvZnMsIGEsIHNyY29mcyArIGwyIHwgMCwgbDEpO1xuICAgIHJldHVybiBtZXJnZShzcmNvZnMgKyBsMiB8IDAsIGwxLCBkc3QsIGRzdG9mcyArIGwxIHwgMCwgbDIsIGRzdCwgZHN0b2ZzKTtcbiAgfTtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPD0gNSkge1xuICAgIHJldHVybiBpc29ydHRvKDAsIGEsIDAsIGwpO1xuICB9XG4gIHZhciBsMSA9IGwgLyAyIHwgMDtcbiAgdmFyIGwyID0gbCAtIGwxIHwgMDtcbiAgdmFyIHQgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwyLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIDApKTtcbiAgc29ydHRvKGwxLCB0LCAwLCBsMik7XG4gIHNvcnR0bygwLCBhLCBsMiwgbDEpO1xuICByZXR1cm4gbWVyZ2UobDIsIGwxLCB0LCAwLCBsMiwgYSwgMCk7XG59XG5cbnZhciBjcmVhdGVfbWF0cml4ID0gbWFrZV9tYXRyaXg7XG5cbnZhciBjb25jYXQgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfY29uY2F0O1xuXG52YXIgZmFzdF9zb3J0ID0gc3RhYmxlX3NvcnQ7XG5cbmV4cG9ydCB7XG4gIG1ha2VfZmxvYXQgLFxuICBpbml0ICxcbiAgbWFrZV9tYXRyaXggLFxuICBjcmVhdGVfbWF0cml4ICxcbiAgYXBwZW5kICxcbiAgY29uY2F0ICxcbiAgc3ViICxcbiAgY29weSAsXG4gIGZpbGwgLFxuICBibGl0ICxcbiAgdG9fbGlzdCAsXG4gIG9mX2xpc3QgLFxuICBpdGVyICxcbiAgaXRlcmkgLFxuICBtYXAgLFxuICBtYXBpICxcbiAgZm9sZF9sZWZ0ICxcbiAgZm9sZF9yaWdodCAsXG4gIGl0ZXIyICxcbiAgbWFwMiAsXG4gIGZvcl9hbGwgLFxuICBleGlzdHMgLFxuICBtZW0gLFxuICBtZW1xICxcbiAgc29ydCAsXG4gIHN0YWJsZV9zb3J0ICxcbiAgZmFzdF9zb3J0ICxcbiAgRmxvYXRhcnJheSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIF9fKHRhZywgYmxvY2spIHtcbiAgYmxvY2sudGFnID0gdGFnO1xuICByZXR1cm4gYmxvY2s7XG59XG5cbmV4cG9ydCB7XG4gIF9fICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfc3ViKHgsIG9mZnNldCwgbGVuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIGogPSAwO1xuICB2YXIgaSA9IG9mZnNldDtcbiAgd2hpbGUoaiA8IGxlbikge1xuICAgIHJlc3VsdFtqXSA9IHhbaV07XG4gICAgaiA9IGogKyAxIHwgMDtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBsZW4oX2FjYywgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfbCA9IGxbMV07XG4gICAgX2FjYyA9IGxbMF0ubGVuZ3RoICsgYWNjIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGwoYXJyLCBfaSwgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB4ID0gbFswXTtcbiAgICB2YXIgbCQxID0geC5sZW5ndGg7XG4gICAgdmFyIGsgPSBpO1xuICAgIHZhciBqID0gMDtcbiAgICB3aGlsZShqIDwgbCQxKSB7XG4gICAgICBhcnJba10gPSB4W2pdO1xuICAgICAgayA9IGsgKyAxIHwgMDtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfTtcbiAgICBfbCA9IGxbMV07XG4gICAgX2kgPSBrO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FtbF9hcnJheV9jb25jYXQobCkge1xuICB2YXIgdiA9IGxlbigwLCBsKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh2KTtcbiAgZmlsbChyZXN1bHQsIDAsIGwpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjYW1sX2FycmF5X3NldCh4cywgaW5kZXgsIG5ld3ZhbCkge1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHhzLmxlbmd0aCkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiXG4gICAgICAgIF07XG4gIH1cbiAgeHNbaW5kZXhdID0gbmV3dmFsO1xuICBcbn1cblxuZnVuY3Rpb24gY2FtbF9hcnJheV9nZXQoeHMsIGluZGV4KSB7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0geHMubGVuZ3RoKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJpbmRleCBvdXQgb2YgYm91bmRzXCJcbiAgICAgICAgXTtcbiAgfVxuICByZXR1cm4geHNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBjYW1sX21ha2VfdmVjdChsZW4sIGluaXQpIHtcbiAgdmFyIGIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBiW2ldID0gaW5pdDtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gY2FtbF9tYWtlX2Zsb2F0X3ZlY3QobGVuKSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IDA7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfYmxpdChhMSwgaTEsIGEyLCBpMiwgbGVuKSB7XG4gIGlmIChpMiA8PSBpMSkge1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBsZW47ICsrail7XG4gICAgICBhMltqICsgaTIgfCAwXSA9IGExW2ogKyBpMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gbGVuIC0gMSB8IDA7IGokMSA+PSAwOyAtLWokMSl7XG4gICAgYTJbaiQxICsgaTIgfCAwXSA9IGExW2okMSArIGkxIHwgMF07XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfZHVwKHByaW0pIHtcbiAgcmV0dXJuIHByaW0uc2xpY2UoMCk7XG59XG5cbmV4cG9ydCB7XG4gIGNhbWxfYXJyYXlfZHVwICxcbiAgY2FtbF9hcnJheV9zdWIgLFxuICBjYW1sX2FycmF5X2NvbmNhdCAsXG4gIGNhbWxfbWFrZV92ZWN0ICxcbiAgY2FtbF9tYWtlX2Zsb2F0X3ZlY3QgLFxuICBjYW1sX2FycmF5X2JsaXQgLFxuICBjYW1sX2FycmF5X2dldCAsXG4gIGNhbWxfYXJyYXlfc2V0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxudmFyIG91dF9vZl9tZW1vcnkgPSAvKiB0dXBsZSAqL1tcbiAgXCJPdXRfb2ZfbWVtb3J5XCIsXG4gIDBcbl07XG5cbnZhciBzeXNfZXJyb3IgPSAvKiB0dXBsZSAqL1tcbiAgXCJTeXNfZXJyb3JcIixcbiAgLTFcbl07XG5cbnZhciBmYWlsdXJlID0gLyogdHVwbGUgKi9bXG4gIFwiRmFpbHVyZVwiLFxuICAtMlxuXTtcblxudmFyIGludmFsaWRfYXJndW1lbnQgPSAvKiB0dXBsZSAqL1tcbiAgXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gIC0zXG5dO1xuXG52YXIgZW5kX29mX2ZpbGUgPSAvKiB0dXBsZSAqL1tcbiAgXCJFbmRfb2ZfZmlsZVwiLFxuICAtNFxuXTtcblxudmFyIGRpdmlzaW9uX2J5X3plcm8gPSAvKiB0dXBsZSAqL1tcbiAgXCJEaXZpc2lvbl9ieV96ZXJvXCIsXG4gIC01XG5dO1xuXG52YXIgbm90X2ZvdW5kID0gLyogdHVwbGUgKi9bXG4gIFwiTm90X2ZvdW5kXCIsXG4gIC02XG5dO1xuXG52YXIgbWF0Y2hfZmFpbHVyZSA9IC8qIHR1cGxlICovW1xuICBcIk1hdGNoX2ZhaWx1cmVcIixcbiAgLTdcbl07XG5cbnZhciBzdGFja19vdmVyZmxvdyA9IC8qIHR1cGxlICovW1xuICBcIlN0YWNrX292ZXJmbG93XCIsXG4gIC04XG5dO1xuXG52YXIgc3lzX2Jsb2NrZWRfaW8gPSAvKiB0dXBsZSAqL1tcbiAgXCJTeXNfYmxvY2tlZF9pb1wiLFxuICAtOVxuXTtcblxudmFyIGFzc2VydF9mYWlsdXJlID0gLyogdHVwbGUgKi9bXG4gIFwiQXNzZXJ0X2ZhaWx1cmVcIixcbiAgLTEwXG5dO1xuXG52YXIgdW5kZWZpbmVkX3JlY3Vyc2l2ZV9tb2R1bGUgPSAvKiB0dXBsZSAqL1tcbiAgXCJVbmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZVwiLFxuICAtMTFcbl07XG5cbm91dF9vZl9tZW1vcnkudGFnID0gMjQ4O1xuXG5zeXNfZXJyb3IudGFnID0gMjQ4O1xuXG5mYWlsdXJlLnRhZyA9IDI0ODtcblxuaW52YWxpZF9hcmd1bWVudC50YWcgPSAyNDg7XG5cbmVuZF9vZl9maWxlLnRhZyA9IDI0ODtcblxuZGl2aXNpb25fYnlfemVyby50YWcgPSAyNDg7XG5cbm5vdF9mb3VuZC50YWcgPSAyNDg7XG5cbm1hdGNoX2ZhaWx1cmUudGFnID0gMjQ4O1xuXG5zdGFja19vdmVyZmxvdy50YWcgPSAyNDg7XG5cbnN5c19ibG9ja2VkX2lvLnRhZyA9IDI0ODtcblxuYXNzZXJ0X2ZhaWx1cmUudGFnID0gMjQ4O1xuXG51bmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZS50YWcgPSAyNDg7XG5cbmV4cG9ydCB7XG4gIG91dF9vZl9tZW1vcnkgLFxuICBzeXNfZXJyb3IgLFxuICBmYWlsdXJlICxcbiAgaW52YWxpZF9hcmd1bWVudCAsXG4gIGVuZF9vZl9maWxlICxcbiAgZGl2aXNpb25fYnlfemVybyAsXG4gIG5vdF9mb3VuZCAsXG4gIG1hdGNoX2ZhaWx1cmUgLFxuICBzdGFja19vdmVyZmxvdyAsXG4gIHN5c19ibG9ja2VkX2lvICxcbiAgYXNzZXJ0X2ZhaWx1cmUgLFxuICB1bmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZSAsXG4gIFxufVxuLyogIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJcblxuaW1wb3J0ICogYXMgQmxvY2sgZnJvbSBcIi4vYmxvY2suanNcIjtcblxudmFyIHNldHVwQ2hyb21lRGVidWdnZXIgPSAoZnVuY3Rpb24oXyl7XG4gXG4gLy8gSSBkb24ndCBrbm93IGhvdyB0byBkaXJlY3RseSByZWZlciB0byB0aGUgY2xhc3NlcyB0aGF0IGNocm9tZSdzIGJ1aWx0LWluXG4gLy8gZm9ybWF0dGVycyB1c2UuIGFkZGluZyBcImNsYXNzXCI6IFwiZm9vXCIgZG9lc24ndCBzZWVtIHRvIHdvcmtcbiAvLyB0cmVlLW91dGxpbmVcbiB2YXIgb2xTdHlsZSA9IHtcInN0eWxlXCI6IFwibGlzdC1zdHlsZS10eXBlOiBub25lOyBwYWRkaW5nLWxlZnQ6IDEycHg7IG1hcmdpbjogMFwifVxuIC8vIG9iamVjdC1wcm9wZXJ0aWVzLXNlY3Rpb24tc2VwYXJhdG9yXG4gdmFyIGNvbG9uU3R5bGUgPSB7XCJzdHlsZVwiOiBcImZsZXgtc2hyaW5rOiAwOyBwYWRkaW5nLXJpZ2h0OiA1cHhcIn1cbiBcblxuIHZhciBzaG93T2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICBpZiAodmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgIHJldHVybiB2YWx1ZSArICcnXG4gICB9IGVsc2Uge1xuICAgICByZXR1cm4gW1wib2JqZWN0XCIsIHtcIm9iamVjdFwiOiB2YWx1ZX1dXG4gICB9XG4gfVxuIFxuXG52YXIgbGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoZGF0YSl7XG4gdmFyIHJlc3VsdCA9IFtdXG4gdmFyIGN1ciA9IGRhdGFcbiB2YXIgaW5kZXggPSAwXG4gd2hpbGUodHlwZW9mIGN1ciAhPT0gXCJudW1iZXJcIil7XG4gICByZXN1bHQucHVzaChbXG4gICAgIFwibGlcIixcbiAgICAge30sXG4gICAgIFtcInNwYW5cIiwge1wic3R5bGVcIjogXCJjb2xvcjogcmdiKDIyNywgMTEwLCAyMzYpXCJ9LCBpbmRleF0sXG4gICAgIFtcInNwYW5cIiwgY29sb25TdHlsZSwgXCI6XCJdLFxuICAgICBzaG93T2JqZWN0KGN1clswXSlcbiAgIF0pO1xuICAgY3VyID0gY3VyWzFdXG4gICBpbmRleCsrXG4gfVxuIHJldHVybiByZXN1bHRcbn07XG5cbnZhciB2YXJpYW50Q3VzdG9tRm9ybWF0dGVyID0gZnVuY3Rpb24gKGRhdGEscmVjb3JkVmFyaWFudCl7XG4gaWYocmVjb3JkVmFyaWFudCA9PT0gXCI6OlwiKXtcbiAgIHJldHVybiBbXG4gICAgIFwib2xcIixcbiAgICAgb2xTdHlsZSxcbiAgICAgLi4uIGxpc3RUb0FycmF5KGRhdGEpXG4gICBdXG4gfSBlbHNlIHtcbiAgICBsZXQgc3BhY2VkRGF0YSA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaChjdXIgPT4ge1xuICAgICAgc3BhY2VkRGF0YS5wdXNoKFtcInNwYW5cIiwge1wic3R5bGVcIjogXCJtYXJnaW4tcmlnaHQ6IDEycHhcIn0sIHNob3dPYmplY3QoY3VyKV0pO1xuICAgIH0pXG4gICAgIHJldHVybiBbXCJvbFwiLCBvbFN0eWxlLCAuLi5zcGFjZWREYXRhXVxuIH1cblxufTtcblxudmFyIHZhcmlhbnRQcmV2aWV3ID0gZnVuY3Rpb24gKHgsIHJlY29yZFZhcmlhbnQpe1xuIGlmKHJlY29yZFZhcmlhbnQgPT09IFwiOjpcIikge1xuICAgLy8gc2hvdyB0aGUgbGVuZ3RoLCBqdXN0IGxpa2UgZm9yIGFycmF5XG4gICB2YXIgbGVuZ3RoID0gbGlzdFRvQXJyYXkoeCkubGVuZ3RoO1xuICAgcmV0dXJuIFsnc3BhbicsIHt9LCBgbGlzdCgke2xlbmd0aH0pYF1cbiB9XG4gcmV0dXJuIFsnc3BhbicsIHt9LCBgJHtyZWNvcmRWYXJpYW50fSjigKYpYF1cbn07XG52YXIgaXNPQ2FtbEV4Y2VwdGlvbk9yRXh0ZW5zaW9uSGVhZCA9IGZ1bmN0aW9uKHgpe1xuIHJldHVybiBBcnJheS5pc0FycmF5KHgpICYmIHgudGFnID09PSAyNDggJiYgdHlwZW9mIHhbMF0gPT09IFwic3RyaW5nXCJcbn1cbnZhciBpc09DYW1sRXhjZXB0aW9uT3JFeHRlbnNpb24gPSBmdW5jdGlvbih4KXtcbiByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSAmJlxuICAgICAgIHhbMF0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgIGlzT0NhbWxFeGNlcHRpb25PckV4dGVuc2lvbkhlYWQoeFswXSlcbn1cbnZhciBmb3JtYXR0ZXIgPSB7XG4gaGVhZGVyOiBmdW5jdGlvbiAoeCkge1xuICAgICB2YXIgcmVjb3JkVmFyaWFudFxuICAgICB2YXIgcmVjb3JkUG9seVZhclxuICAgICBpZiAoKHJlY29yZFZhcmlhbnQgPSAgeFtTeW1ib2wuZm9yKCdCc1ZhcmlhbnQnKV0pICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgcmV0dXJuIHZhcmlhbnRQcmV2aWV3KHgsIHJlY29yZFZhcmlhbnQpXG4gICAgIH0gZWxzZSBpZiAoaXNPQ2FtbEV4Y2VwdGlvbk9yRXh0ZW5zaW9uKHgpKXtcbiAgICAgICByZXR1cm4gWydkaXYnLHt9LCBgJHt4WzBdWzBdfSjigKYpYF0gICAgIFxuICAgICB9IGVsc2UgaWYgKChyZWNvcmRQb2x5VmFyID0geFtTeW1ib2wuZm9yKCdCc1BvbHlWYXInKV0gKSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICByZXR1cm4gWydkaXYnLCB7fSwgYFxcYCR7cmVjb3JkUG9seVZhcn0jJHt4WzBdfWBdXG4gICAgIH1cbiAgICAgcmV0dXJuIG51bGxcbiB9LFxuIGhhc0JvZHk6IGZ1bmN0aW9uICh4KSB7XG4gICAgIHZhciByZWNvcmRWYXJpYW50XG4gICAgIHZhciByZWNvcmRQb2x5VmFyXG4gICAgIGlmICgocmVjb3JkVmFyaWFudCA9IHhbU3ltYm9sLmZvcignQnNWYXJpYW50JyldICkgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICByZXR1cm4gcmVjb3JkVmFyaWFudFxuICAgICB9IGVsc2UgaWYoaXNPQ2FtbEV4Y2VwdGlvbk9yRXh0ZW5zaW9uKHgpKXtcbiAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9IGVsc2UgaWYoIChyZWNvcmRQb2x5VmFyID0geFtTeW1ib2wuZm9yKCdCc1BvbHlWYXInKV0pICE9PSB1bmRlZmluZWQpe1xuICAgICAgIHJldHVybiB0cnVlXG4gICAgIH1cbiAgICAgcmV0dXJuIGZhbHNlXG4gfSxcbiBib2R5OiBmdW5jdGlvbiAoeCkge1xuICAgICB2YXIgcmVjb3JkVmFyaWFudFxuICAgICB2YXIgcmVjb3JkUG9seVZhclxuICAgICBpZiAoKHJlY29yZFZhcmlhbnQgPSB4W1N5bWJvbC5mb3IoJ0JzVmFyaWFudCcpXSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgIHJldHVybiB2YXJpYW50Q3VzdG9tRm9ybWF0dGVyKHgscmVjb3JkVmFyaWFudClcbiAgICAgfVxuICAgICBlbHNlIGlmICgocmVjb3JkUG9seVZhciA9IHggW1N5bWJvbC5mb3IoJ0JzUG9seVZhcicpXSkgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgcmV0dXJuIHNob3dPYmplY3QoeFsxXSlcbiAgICAgfVxuICAgICBlbHNlIGlmKGlzT0NhbWxFeGNlcHRpb25PckV4dGVuc2lvbih4KSl7XG4gICAgICAgcmV0dXJuIFtcIm9sXCIsIG9sU3R5bGUsIC4uLiB4LnNsaWNlKDEpLm1hcChjdXIgPT4gc2hvd09iamVjdChjdXIpKV1cbiAgICAgfVxuXG4gfVxuXG59XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIil7XG4gZ2xvYmFsLmRldnRvb2xzRm9ybWF0dGVycyA9IFtmb3JtYXR0ZXJdXG59IGVsc2Uge1xuIHdpbmRvdy5kZXZ0b29sc0Zvcm1hdHRlcnMgPSBbZm9ybWF0dGVyXVxufVxufSk7XG5cbnZhciBzZXR1cCA9IHtcbiAgY29udGVudHM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBzZXR1cE9uY2UocGFyYW0pIHtcbiAgaWYgKCFzZXR1cC5jb250ZW50cykge1xuICAgIHNldHVwLmNvbnRlbnRzID0gdHJ1ZTtcbiAgICByZXR1cm4gc2V0dXBDaHJvbWVEZWJ1Z2dlcih1bmRlZmluZWQpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB2YXJpYW50KG1ldGEsIHRhZywgeHMpIHtcbiAgc2V0dXBPbmNlKHVuZGVmaW5lZCk7XG4gIHhzLnRhZyA9IHRhZztcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh4cywgU3ltYm9sLmZvcihcIkJzVmFyaWFudFwiKSwge1xuICAgICAgICAgICAgICB2YWx1ZTogbWV0YVxuICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNpbXBsZVZhcmlhbnQobWV0YSwgeHMpIHtcbiAgc2V0dXBPbmNlKHVuZGVmaW5lZCk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoeHMsIFN5bWJvbC5mb3IoXCJCc1ZhcmlhbnRcIiksIHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1ldGFcbiAgICAgICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwb2x5VmFyKG1ldGEsIHhzKSB7XG4gIHNldHVwT25jZSh1bmRlZmluZWQpO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHhzLCBTeW1ib2wuZm9yKFwiQnNQb2x5VmFyXCIpLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBtZXRhXG4gICAgICAgICAgICB9KTtcbn1cblxudmFyIF9fID0gQmxvY2suX187XG5cbmV4cG9ydCB7XG4gIF9fICxcbiAgdmFyaWFudCAsXG4gIHNpbXBsZVZhcmlhbnQgLFxuICBwb2x5VmFyICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxudmFyIGlkID0ge1xuICBjb250ZW50czogMFxufTtcblxuZnVuY3Rpb24gY2FtbF9zZXRfb29faWQoYikge1xuICBiWzFdID0gaWQuY29udGVudHM7XG4gIGlkLmNvbnRlbnRzID0gaWQuY29udGVudHMgKyAxO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gY2FtbF9mcmVzaF9vb19pZChwYXJhbSkge1xuICBpZC5jb250ZW50cyA9IGlkLmNvbnRlbnRzICsgMTtcbiAgcmV0dXJuIGlkLmNvbnRlbnRzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoc3RyKSB7XG4gIHZhciB2XzAwMSA9IGNhbWxfZnJlc2hfb29faWQodW5kZWZpbmVkKTtcbiAgdmFyIHYgPSAvKiB0dXBsZSAqL1tcbiAgICBzdHIsXG4gICAgdl8wMDFcbiAgXTtcbiAgdi50YWcgPSAyNDg7XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBjYW1sX2lzX2V4dGVuc2lvbihlKSB7XG4gIGlmIChlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGUudGFnID09PSAyNDgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgc2xvdCA9IGVbMF07XG4gIGlmIChzbG90ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gc2xvdC50YWcgPT09IDI0ODtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY2FtbF9zZXRfb29faWQgLFxuICBjYW1sX2ZyZXNoX29vX2lkICxcbiAgY3JlYXRlICxcbiAgY2FtbF9pc19leHRlbnNpb24gLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIENhbWxfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2V4Y2VwdGlvbnMuanNcIjtcblxudmFyICQkRXJyb3IgPSBDYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiQ2FtbF9qc19leGNlcHRpb25zLkVycm9yXCIpO1xuXG5mdW5jdGlvbiBpbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24oZSkge1xuICBpZiAoQ2FtbF9leGNlcHRpb25zLmNhbWxfaXNfZXh0ZW5zaW9uKGUpKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgICQkRXJyb3IsXG4gICAgICAgICAgICBlXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2FzX2pzX2V4bihleG4pIHtcbiAgaWYgKGV4blswXSA9PT0gJCRFcnJvcikge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGV4blsxXSk7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCB7XG4gICQkRXJyb3IgLFxuICBpbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24gLFxuICBjYW1sX2FzX2pzX2V4biAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBCbG9jayBmcm9tIFwiLi9ibG9jay5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9wcmltaXRpdmUgZnJvbSBcIi4vY2FtbF9wcmltaXRpdmUuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbnZhciBmb3JfaW4gPSAoZnVuY3Rpb24obyxmb28pe1xuICAgICAgICBmb3IgKHZhciB4IGluIG8pIHsgZm9vKHgpIH19KTtcblxuZnVuY3Rpb24gY2FtbF9vYmpfYmxvY2sodGFnLCBzaXplKSB7XG4gIHZhciB2ID0gbmV3IEFycmF5KHNpemUpO1xuICB2LnRhZyA9IHRhZztcbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGNhbWxfb2JqX2R1cCh4KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKCh7fSksIHgpO1xuICB9XG4gIHZhciBsZW4gPSB4Lmxlbmd0aCB8IDA7XG4gIHZhciB2ID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgdltpXSA9IHhbaV07XG4gIH1cbiAgdi50YWcgPSB4LnRhZyB8IDA7XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBjYW1sX29ial90cnVuY2F0ZSh4LCBuZXdfc2l6ZSkge1xuICB2YXIgbGVuID0geC5sZW5ndGggfCAwO1xuICBpZiAobmV3X3NpemUgPD0gMCB8fCBuZXdfc2l6ZSA+IGxlbikge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiT2JqLnRydW5jYXRlXCJcbiAgICAgICAgXTtcbiAgfVxuICBpZiAobGVuID09PSBuZXdfc2l6ZSkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBpID0gbmV3X3NpemU7IGkgPCBsZW47ICsraSl7XG4gICAgeFtpXSA9IDA7XG4gIH1cbiAgeC5sZW5ndGggPSBuZXdfc2l6ZTtcbiAgXG59XG5cbmZ1bmN0aW9uIGNhbWxfbGF6eV9tYWtlX2ZvcndhcmQoeCkge1xuICByZXR1cm4gQmxvY2suX18oMjUwLCBbeF0pO1xufVxuXG5mdW5jdGlvbiBjYW1sX2xhenlfbWFrZShmbikge1xuICB2YXIgYmxvY2sgPSBbZm5dO1xuICBibG9jay50YWcgPSAyNDY7XG4gIHJldHVybiBibG9jaztcbn1cblxudmFyIGNhbWxfdXBkYXRlX2R1bW15ID0gKGZ1bmN0aW9uKHgseSl7XG4gIHZhciBrICBcbiAgaWYoQXJyYXkuaXNBcnJheSh5KSl7XG4gICAgZm9yKGsgPSAwOyBrIDwgeS5sZW5ndGggOyArK2spe1xuICAgICAgeFtrXSA9IHlba11cbiAgICB9XG4gICAgaWYoeS50YWcgIT09IHVuZGVmaW5lZCl7XG4gICAgICB4LnRhZyA9IHkudGFnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGsgaW4geSl7XG4gICAgICB4W2tdID0geVtrXVxuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNhbWxfY29tcGFyZShfYSwgX2IpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBiID0gX2I7XG4gICAgdmFyIGEgPSBfYTtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHZhciBhX3R5cGUgPSB0eXBlb2YgYTtcbiAgICB2YXIgYl90eXBlID0gdHlwZW9mIGI7XG4gICAgc3dpdGNoIChhX3R5cGUpIHtcbiAgICAgIGNhc2UgXCJib29sZWFuXCIgOlxuICAgICAgICAgIGlmIChiX3R5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2FtbF9wcmltaXRpdmUuY2FtbF9ib29sX2NvbXBhcmUoYSwgYik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImZ1bmN0aW9uXCIgOlxuICAgICAgICAgIGlmIChiX3R5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgICAgICAgIFwiY29tcGFyZTogZnVuY3Rpb25hbCB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibnVtYmVyXCIgOlxuICAgICAgICAgIGlmIChiX3R5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBDYW1sX3ByaW1pdGl2ZS5jYW1sX2ludF9jb21wYXJlKGEsIGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdHJpbmdcIiA6XG4gICAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIENhbWxfcHJpbWl0aXZlLmNhbWxfc3RyaW5nX2NvbXBhcmUoYSwgYik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIiA6XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgXG4gICAgfVxuICAgIHN3aXRjaCAoYl90eXBlKSB7XG4gICAgICBjYXNlIFwic3RyaW5nXCIgOlxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIiA6XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoYV90eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiX3R5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhX3R5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiX3R5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYV90eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYi50YWcgPT09IDI1Nikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGlmIChhID09PSBudWxsIHx8IGEudGFnID09PSAyNTYpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGIudGFnID09PSAyNTYpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGEudGFnID09PSAyNTYpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0YWdfYSA9IGEudGFnIHwgMDtcbiAgICAgICAgdmFyIHRhZ19iID0gYi50YWcgfCAwO1xuICAgICAgICBpZiAodGFnX2EgPT09IDI1MCkge1xuICAgICAgICAgIF9hID0gYVswXTtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhZ19iID09PSAyNTApIHtcbiAgICAgICAgICBfYiA9IGJbMF07XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YWdfYSA9PT0gMjU2KSB7XG4gICAgICAgICAgaWYgKHRhZ19iID09PSAyNTYpIHtcbiAgICAgICAgICAgIHJldHVybiBDYW1sX3ByaW1pdGl2ZS5jYW1sX2ludF9jb21wYXJlKGFbMV0sIGJbMV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0YWdfYSA9PT0gMjQ4KSB7XG4gICAgICAgICAgcmV0dXJuIENhbWxfcHJpbWl0aXZlLmNhbWxfaW50X2NvbXBhcmUoYVsxXSwgYlsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhZ19hID09PSAyNTEpIHtcbiAgICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgICAgICBcImVxdWFsOiBhYnN0cmFjdCB2YWx1ZVwiXG4gICAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhZ19hICE9PSB0YWdfYikge1xuICAgICAgICAgIGlmICh0YWdfYSA8IHRhZ19iKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuX2EgPSBhLmxlbmd0aCB8IDA7XG4gICAgICAgIHZhciBsZW5fYiA9IGIubGVuZ3RoIHwgMDtcbiAgICAgICAgaWYgKGxlbl9hID09PSBsZW5fYikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgICAgICB2YXIgX2kgPSAwO1xuICAgICAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgaSA9IF9pO1xuICAgICAgICAgICAgICBpZiAoaSA9PT0gbGVuX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgcmVzID0gY2FtbF9jb21wYXJlKGFbaV0sIGJbaV0pO1xuICAgICAgICAgICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoYSAtIGIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWluX2tleV9saHMgPSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRzOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbWluX2tleV9yaHMgPSB7XG4gICAgICAgICAgICAgIGNvbnRlbnRzOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZG9fa2V5ID0gZnVuY3Rpb24gKHBhcmFtLCBrZXkpIHtcbiAgICAgICAgICAgICAgdmFyIG1pbl9rZXkgPSBwYXJhbVsyXTtcbiAgICAgICAgICAgICAgdmFyIGIgPSBwYXJhbVsxXTtcbiAgICAgICAgICAgICAgaWYgKCEoIWIuaGFzT3duUHJvcGVydHkoa2V5KSB8fCBjYW1sX2NvbXBhcmUocGFyYW1bMF1ba2V5XSwgYltrZXldKSA+IDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgbWsgPSBtaW5fa2V5LmNvbnRlbnRzO1xuICAgICAgICAgICAgICBpZiAobWsgIT09IHVuZGVmaW5lZCAmJiBrZXkgPj0gbWspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pbl9rZXkuY29udGVudHMgPSBrZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwYXJ0aWFsX2FyZyA9IC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICBhLFxuICAgICAgICAgICAgICBiLFxuICAgICAgICAgICAgICBtaW5fa2V5X3Joc1xuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHZhciBkb19rZXlfYSA9IChmdW5jdGlvbihwYXJ0aWFsX2FyZyl7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gZG9fa2V5X2EocGFyYW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRvX2tleShwYXJ0aWFsX2FyZywgcGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfShwYXJ0aWFsX2FyZykpO1xuICAgICAgICAgICAgdmFyIHBhcnRpYWxfYXJnJDEgPSAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgYixcbiAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgbWluX2tleV9saHNcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB2YXIgZG9fa2V5X2IgPSAoZnVuY3Rpb24ocGFydGlhbF9hcmckMSl7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gZG9fa2V5X2IocGFyYW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRvX2tleShwYXJ0aWFsX2FyZyQxLCBwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9KHBhcnRpYWxfYXJnJDEpKTtcbiAgICAgICAgICAgIGZvcl9pbihhLCBkb19rZXlfYSk7XG4gICAgICAgICAgICBmb3JfaW4oYiwgZG9fa2V5X2IpO1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gbWluX2tleV9saHMuY29udGVudHM7XG4gICAgICAgICAgICB2YXIgbWF0Y2gkMSA9IG1pbl9rZXlfcmhzLmNvbnRlbnRzO1xuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoJDEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW1sX3ByaW1pdGl2ZS5jYW1sX3N0cmluZ19jb21wYXJlKG1hdGNoLCBtYXRjaCQxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2gkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxlbl9hIDwgbGVuX2IpIHtcbiAgICAgICAgICB2YXIgX2kkMSA9IDA7XG4gICAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGkkMSA9IF9pJDE7XG4gICAgICAgICAgICBpZiAoaSQxID09PSBsZW5fYSkge1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzJDEgPSBjYW1sX2NvbXBhcmUoYVtpJDFdLCBiW2kkMV0pO1xuICAgICAgICAgICAgaWYgKHJlcyQxICE9PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXMkMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9pJDEgPSBpJDEgKyAxIHwgMDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfaSQyID0gMDtcbiAgICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgaSQyID0gX2kkMjtcbiAgICAgICAgICAgIGlmIChpJDIgPT09IGxlbl9iKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlcyQyID0gY2FtbF9jb21wYXJlKGFbaSQyXSwgYltpJDJdKTtcbiAgICAgICAgICAgIGlmIChyZXMkMiAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzJDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfaSQyID0gaSQyICsgMSB8IDA7XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbChfYSwgX2IpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBiID0gX2I7XG4gICAgdmFyIGEgPSBfYTtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBhX3R5cGUgPSB0eXBlb2YgYTtcbiAgICBpZiAoYV90eXBlID09PSBcInN0cmluZ1wiIHx8IGFfdHlwZSA9PT0gXCJudW1iZXJcIiB8fCBhX3R5cGUgPT09IFwiYm9vbGVhblwiIHx8IGFfdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBiX3R5cGUgPSB0eXBlb2YgYjtcbiAgICBpZiAoYV90eXBlID09PSBcImZ1bmN0aW9uXCIgfHwgYl90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcImVxdWFsOiBmdW5jdGlvbmFsIHZhbHVlXCJcbiAgICAgICAgICBdO1xuICAgIH1cbiAgICBpZiAoYl90eXBlID09PSBcIm51bWJlclwiIHx8IGJfdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB0YWdfYSA9IGEudGFnIHwgMDtcbiAgICB2YXIgdGFnX2IgPSBiLnRhZyB8IDA7XG4gICAgaWYgKHRhZ19hID09PSAyNTApIHtcbiAgICAgIF9hID0gYVswXTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKHRhZ19iID09PSAyNTApIHtcbiAgICAgIF9iID0gYlswXTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKHRhZ19hID09PSAyNDgpIHtcbiAgICAgIHJldHVybiBhWzFdID09PSBiWzFdO1xuICAgIH1cbiAgICBpZiAodGFnX2EgPT09IDI1MSkge1xuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgIFwiZXF1YWw6IGFic3RyYWN0IHZhbHVlXCJcbiAgICAgICAgICBdO1xuICAgIH1cbiAgICBpZiAodGFnX2EgIT09IHRhZ19iKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0YWdfYSA9PT0gMjU2KSB7XG4gICAgICByZXR1cm4gYVsxXSA9PT0gYlsxXTtcbiAgICB9XG4gICAgdmFyIGxlbl9hID0gYS5sZW5ndGggfCAwO1xuICAgIHZhciBsZW5fYiA9IGIubGVuZ3RoIHwgMDtcbiAgICBpZiAobGVuX2EgPT09IGxlbl9iKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICB2YXIgX2kgPSAwO1xuICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgdmFyIGkgPSBfaTtcbiAgICAgICAgICBpZiAoaSA9PT0gbGVuX2EpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWNhbWxfZXF1YWwoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICgoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgIHJldHVybiAhKGEgPiBiIHx8IGEgPCBiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgY29udGVudHM6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRvX2tleV9hID0gKGZ1bmN0aW9uKGIscmVzdWx0KXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRvX2tleV9hKGtleSkge1xuICAgICAgICAgIGlmICghYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXN1bHQuY29udGVudHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIH0oYixyZXN1bHQpKTtcbiAgICAgICAgdmFyIGRvX2tleV9iID0gKGZ1bmN0aW9uKGEsYixyZXN1bHQpe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZG9fa2V5X2Ioa2V5KSB7XG4gICAgICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KGtleSkgfHwgIWNhbWxfZXF1YWwoYltrZXldLCBhW2tleV0pKSB7XG4gICAgICAgICAgICByZXN1bHQuY29udGVudHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIH0oYSxiLHJlc3VsdCkpO1xuICAgICAgICBmb3JfaW4oYSwgZG9fa2V5X2EpO1xuICAgICAgICBpZiAocmVzdWx0LmNvbnRlbnRzKSB7XG4gICAgICAgICAgZm9yX2luKGIsIGRvX2tleV9iKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LmNvbnRlbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsX251bGwoeCwgeSkge1xuICBpZiAoeSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBjYW1sX2VxdWFsKHgsIHkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ID09PSB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXF1YWxfdW5kZWZpbmVkKHgsIHkpIHtcbiAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjYW1sX2VxdWFsKHgsIHkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ID09PSB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXF1YWxfbnVsbGFibGUoeCwgeSkge1xuICBpZiAoeSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNhbWxfZXF1YWwoeCwgeSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ub3RlcXVhbChhLCBiKSB7XG4gIHJldHVybiAhY2FtbF9lcXVhbChhLCBiKTtcbn1cblxuZnVuY3Rpb24gY2FtbF9ncmVhdGVyZXF1YWwoYSwgYikge1xuICByZXR1cm4gY2FtbF9jb21wYXJlKGEsIGIpID49IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZ3JlYXRlcnRoYW4oYSwgYikge1xuICByZXR1cm4gY2FtbF9jb21wYXJlKGEsIGIpID4gMDtcbn1cblxuZnVuY3Rpb24gY2FtbF9sZXNzZXF1YWwoYSwgYikge1xuICByZXR1cm4gY2FtbF9jb21wYXJlKGEsIGIpIDw9IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbGVzc3RoYW4oYSwgYikge1xuICByZXR1cm4gY2FtbF9jb21wYXJlKGEsIGIpIDwgMDtcbn1cblxuZnVuY3Rpb24gY2FtbF9taW4oeCwgeSkge1xuICBpZiAoY2FtbF9jb21wYXJlKHgsIHkpIDw9IDApIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX21heCh4LCB5KSB7XG4gIGlmIChjYW1sX2NvbXBhcmUoeCwgeSkgPj0gMCkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfb2JqX3NldF90YWcocHJpbSwgcHJpbSQxKSB7XG4gIHByaW0udGFnID0gcHJpbSQxO1xuICBcbn1cblxuZXhwb3J0IHtcbiAgY2FtbF9vYmpfYmxvY2sgLFxuICBjYW1sX29ial9kdXAgLFxuICBjYW1sX29ial90cnVuY2F0ZSAsXG4gIGNhbWxfbGF6eV9tYWtlX2ZvcndhcmQgLFxuICBjYW1sX2xhenlfbWFrZSAsXG4gIGNhbWxfdXBkYXRlX2R1bW15ICxcbiAgY2FtbF9jb21wYXJlICxcbiAgY2FtbF9lcXVhbCAsXG4gIGNhbWxfZXF1YWxfbnVsbCAsXG4gIGNhbWxfZXF1YWxfdW5kZWZpbmVkICxcbiAgY2FtbF9lcXVhbF9udWxsYWJsZSAsXG4gIGNhbWxfbm90ZXF1YWwgLFxuICBjYW1sX2dyZWF0ZXJlcXVhbCAsXG4gIGNhbWxfZ3JlYXRlcnRoYW4gLFxuICBjYW1sX2xlc3N0aGFuICxcbiAgY2FtbF9sZXNzZXF1YWwgLFxuICBjYW1sX21pbiAsXG4gIGNhbWxfbWF4ICxcbiAgY2FtbF9vYmpfc2V0X3RhZyAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbnZhciB1bmRlZmluZWRIZWFkZXIgPSBbXTtcblxuZnVuY3Rpb24gc29tZSh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgYmxvY2sgPSAvKiB0dXBsZSAqL1tcbiAgICAgIHVuZGVmaW5lZEhlYWRlcixcbiAgICAgIDBcbiAgICBdO1xuICAgIGJsb2NrLnRhZyA9IDI1NjtcbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cbiAgaWYgKCEoeCAhPT0gbnVsbCAmJiB4WzBdID09PSB1bmRlZmluZWRIZWFkZXIpKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgdmFyIG5pZCA9IHhbMV0gKyAxIHwgMDtcbiAgdmFyIGJsb2NrJDEgPSAvKiB0dXBsZSAqL1tcbiAgICB1bmRlZmluZWRIZWFkZXIsXG4gICAgbmlkXG4gIF07XG4gIGJsb2NrJDEudGFnID0gMjU2O1xuICByZXR1cm4gYmxvY2skMTtcbn1cblxuZnVuY3Rpb24gbnVsbGFibGVfdG9fb3B0KHgpIHtcbiAgaWYgKHggPT09IG51bGwgfHwgeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmRlZmluZWRfdG9fb3B0KHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvbWUoeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbnVsbF90b19vcHQoeCkge1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvbWUoeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsRnJvbU9wdGlvbih4KSB7XG4gIGlmICghKHggIT09IG51bGwgJiYgeFswXSA9PT0gdW5kZWZpbmVkSGVhZGVyKSkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIHZhciBkZXB0aCA9IHhbMV07XG4gIGlmIChkZXB0aCA9PT0gMCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgICAgdW5kZWZpbmVkSGVhZGVyLFxuICAgICAgICAgICAgZGVwdGggLSAxIHwgMFxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uX2dldCh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWxGcm9tT3B0aW9uKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbl9nZXRfdW53cmFwKHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbEZyb21PcHRpb24oeClbMV07XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgbnVsbGFibGVfdG9fb3B0ICxcbiAgdW5kZWZpbmVkX3RvX29wdCAsXG4gIG51bGxfdG9fb3B0ICxcbiAgdmFsRnJvbU9wdGlvbiAsXG4gIHNvbWUgLFxuICBvcHRpb25fZ2V0ICxcbiAgb3B0aW9uX2dldF91bndyYXAgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBjYW1sX2ludF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Jvb2xfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgaWYgKHkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Zsb2F0X2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKHggPiB5IHx8IHggPT09IHgpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh5ID09PSB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3RyaW5nX2NvbXBhcmUoczEsIHMyKSB7XG4gIGlmIChzMSA9PT0gczIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChzMSA8IHMyKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYnl0ZXNfY29tcGFyZV9hdXgoczEsIHMyLCBfb2ZmLCBsZW4sIGRlZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG9mZiA9IF9vZmY7XG4gICAgaWYgKG9mZiA+PSBsZW4pIHtcbiAgICAgIHJldHVybiBkZWY7XG4gICAgfVxuICAgIHZhciBhID0gczFbb2ZmXTtcbiAgICB2YXIgYiA9IHMyW29mZl07XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIF9vZmYgPSBvZmYgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbWxfYnl0ZXNfY29tcGFyZShzMSwgczIpIHtcbiAgdmFyIGxlbjEgPSBzMS5sZW5ndGg7XG4gIHZhciBsZW4yID0gczIubGVuZ3RoO1xuICBpZiAobGVuMSA9PT0gbGVuMikge1xuICAgIHJldHVybiBjYW1sX2J5dGVzX2NvbXBhcmVfYXV4KHMxLCBzMiwgMCwgbGVuMSwgMCk7XG4gIH0gZWxzZSBpZiAobGVuMSA8IGxlbjIpIHtcbiAgICByZXR1cm4gY2FtbF9ieXRlc19jb21wYXJlX2F1eChzMSwgczIsIDAsIGxlbjEsIC0xKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2FtbF9ieXRlc19jb21wYXJlX2F1eChzMSwgczIsIDAsIGxlbjIsIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYnl0ZXNfZXF1YWwoczEsIHMyKSB7XG4gIHZhciBsZW4xID0gczEubGVuZ3RoO1xuICB2YXIgbGVuMiA9IHMyLmxlbmd0aDtcbiAgaWYgKGxlbjEgPT09IGxlbjIpIHtcbiAgICB2YXIgX29mZiA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIG9mZiA9IF9vZmY7XG4gICAgICBpZiAob2ZmID09PSBsZW4xKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIGEgPSBzMVtvZmZdO1xuICAgICAgdmFyIGIgPSBzMltvZmZdO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgX29mZiA9IG9mZiArIDEgfCAwO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9taW4oeCwgeSkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50X21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9uYXRpdmVpbnRfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQzMl9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Jvb2xfbWF4KHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludF9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Zsb2F0X21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3RyaW5nX21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfbmF0aXZlaW50X21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50MzJfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxudmFyIGNhbWxfbmF0aXZlaW50X2NvbXBhcmUgPSBjYW1sX2ludF9jb21wYXJlO1xuXG52YXIgY2FtbF9pbnQzMl9jb21wYXJlID0gY2FtbF9pbnRfY29tcGFyZTtcblxuZXhwb3J0IHtcbiAgY2FtbF9ieXRlc19jb21wYXJlICxcbiAgY2FtbF9ieXRlc19lcXVhbCAsXG4gIGNhbWxfaW50X2NvbXBhcmUgLFxuICBjYW1sX2Jvb2xfY29tcGFyZSAsXG4gIGNhbWxfZmxvYXRfY29tcGFyZSAsXG4gIGNhbWxfbmF0aXZlaW50X2NvbXBhcmUgLFxuICBjYW1sX3N0cmluZ19jb21wYXJlICxcbiAgY2FtbF9pbnQzMl9jb21wYXJlICxcbiAgY2FtbF9ib29sX21pbiAsXG4gIGNhbWxfaW50X21pbiAsXG4gIGNhbWxfZmxvYXRfbWluICxcbiAgY2FtbF9zdHJpbmdfbWluICxcbiAgY2FtbF9uYXRpdmVpbnRfbWluICxcbiAgY2FtbF9pbnQzMl9taW4gLFxuICBjYW1sX2Jvb2xfbWF4ICxcbiAgY2FtbF9pbnRfbWF4ICxcbiAgY2FtbF9mbG9hdF9tYXggLFxuICBjYW1sX3N0cmluZ19tYXggLFxuICBjYW1sX25hdGl2ZWludF9tYXggLFxuICBjYW1sX2ludDMyX21heCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5IGZyb20gXCIuL2NhbWxfYXJyYXkuanNcIjtcblxuZnVuY3Rpb24gYXBwKF9mLCBfYXJncykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFyZ3MgPSBfYXJncztcbiAgICB2YXIgZiA9IF9mO1xuICAgIHZhciBpbml0X2FyaXR5ID0gZi5sZW5ndGg7XG4gICAgdmFyIGFyaXR5ID0gaW5pdF9hcml0eSA9PT0gMCA/IDEgOiBpbml0X2FyaXR5O1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgZCA9IGFyaXR5IC0gbGVuIHwgMDtcbiAgICBpZiAoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGlmIChkID49IDApIHtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24oZixhcmdzKXtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gYXBwKGYsIGFyZ3MuY29uY2F0KFt4XSkpO1xuICAgICAgfVxuICAgICAgfShmLGFyZ3MpKTtcbiAgICB9XG4gICAgX2FyZ3MgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc3ViKGFyZ3MsIGFyaXR5LCAtZCB8IDApO1xuICAgIF9mID0gZi5hcHBseShudWxsLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc3ViKGFyZ3MsIDAsIGFyaXR5KSk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfMShvLCBhMCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAxKSB7XG4gICAgcmV0dXJuIG8oYTApO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIG8oYTApO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQsIHBhcmFtJDUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0LCBwYXJhbSQ1KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbYTBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX18xKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMSkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwKSB7XG4gICAgICAgIHJldHVybiBfMShvLCBhMCk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfMihvLCBhMCwgYTEpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMikge1xuICAgIHJldHVybiBvKGEwLCBhMSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbYTFdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTFcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzIobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAyKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExKSB7XG4gICAgICAgIHJldHVybiBfMihvLCBhMCwgYTEpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gXzMobywgYTAsIGExLCBhMikge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAzKSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbYTJdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzMobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAzKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gXzMobywgYTAsIGExLCBhMik7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNChvLCBhMCwgYTEsIGEyLCBhMykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFthM10pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMyk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzQobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMpIHtcbiAgICAgICAgcmV0dXJuIF80KG8sIGEwLCBhMSwgYTIsIGEzKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA1KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFthNF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQpO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNShvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDUpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQpIHtcbiAgICAgICAgcmV0dXJuIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDYpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFthNV0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNihvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDYpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gICAgICAgIHJldHVybiBfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgW2E2XSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNyhvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNikge1xuICAgICAgICByZXR1cm4gXzcobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDgpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSwgW2E3XSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX184KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gOCkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNykge1xuICAgICAgICByZXR1cm4gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGFwcCAsXG4gIF8xICxcbiAgX18xICxcbiAgXzIgLFxuICBfXzIgLFxuICBfMyAsXG4gIF9fMyAsXG4gIF80ICxcbiAgX180ICxcbiAgXzUgLFxuICBfXzUgLFxuICBfNiAsXG4gIF9fNiAsXG4gIF83ICxcbiAgX183ICxcbiAgXzggLFxuICBfXzggLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgQmxvY2sgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvYmxvY2suanNcIjtcbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuanNcIjtcblxudmFyIG9uVW5oYW5kbGVkRXhjZXB0aW9uID0ge1xuICBjb250ZW50czogKGZ1bmN0aW9uIChleG4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmhhbmRsZWQgZXhjZXB0aW9uIGluIHByb21pc2UgY2FsbGJhY2s6XCIpO1xuICAgICAgY29uc29sZS5lcnJvcihleG4pO1xuICAgICAgXG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIE5lc3RlZFByb21pc2UocCkge1xuICAgIHRoaXMubmVzdGVkID0gcDtcbn07XG5cbmZ1bmN0aW9uIHVuYm94KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTmVzdGVkUHJvbWlzZSlcbiAgICAgICAgcmV0dXJuIHZhbHVlLm5lc3RlZDtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYm94KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiBuZXcgTmVzdGVkUHJvbWlzZSh2YWx1ZSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG1ha2UoZXhlY3V0b3IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgYm94aW5nUmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXNvbHZlKGJveCh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICBleGVjdXRvcihib3hpbmdSZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmVzb2x2ZWQodmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGJveCh2YWx1ZSkpO1xufTtcblxuZnVuY3Rpb24gdGhlbihwcm9taXNlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sodW5ib3godmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBvblVuaGFuZGxlZEV4Y2VwdGlvbi5jb250ZW50cyhleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBjYXRjaF8ocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2FmZUNhbGxiYWNrID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIG9uVW5oYW5kbGVkRXhjZXB0aW9uLmNvbnRlbnRzKGV4Y2VwdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb21pc2UuY2F0Y2goc2FmZUNhbGxiYWNrKTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5VG9MaXN0KGFycmF5KSB7XG4gIHZhciBsaXN0ID0gMDtcbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheS5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyAtLWluZGV4KSB7XG4gICAgbGlzdCA9IFthcnJheVtpbmRleF0sIGxpc3RdO1xuICB9XG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gbGlzdFRvQXJyYXkobGlzdCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgd2hpbGUgKGxpc3QgIT09IDApIHtcbiAgICBhcnJheS5wdXNoKGxpc3RbMF0pO1xuICAgIGxpc3QgPSBsaXN0WzFdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cbmZ1bmN0aW9uIG1hcEFycmF5KGYsIGEpIHtcbiAgcmV0dXJuIGEubWFwKGYpO1xufTtcbjtcblxuZnVuY3Rpb24gcGVuZGluZyhwYXJhbSkge1xuICB2YXIgcmVzb2x2ZSA9IHtcbiAgICBjb250ZW50czogKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgIFxuICAgICAgfSlcbiAgfTtcbiAgdmFyIHJlamVjdCA9IHtcbiAgICBjb250ZW50czogKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgIFxuICAgICAgfSlcbiAgfTtcbiAgdmFyIHAgPSBtYWtlKChmdW5jdGlvbiAocmVzb2x2ZSRwcmltZSwgcmVqZWN0JHByaW1lKSB7XG4gICAgICAgICAgcmVzb2x2ZS5jb250ZW50cyA9IHJlc29sdmUkcHJpbWU7XG4gICAgICAgICAgcmVqZWN0LmNvbnRlbnRzID0gcmVqZWN0JHByaW1lO1xuICAgICAgICAgIFxuICAgICAgICB9KSk7XG4gIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICBwLFxuICAgICAgICAgIHJlc29sdmUuY29udGVudHMsXG4gICAgICAgICAgcmVqZWN0LmNvbnRlbnRzXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIG1hcChwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gdGhlbihwcm9taXNlLCAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQoQ3VycnkuXzEoY2FsbGJhY2ssIHYpKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXQocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgbWFwKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgXG59XG5cbmZ1bmN0aW9uIHRhcChwcm9taXNlLCBjYWxsYmFjaykge1xuICBtYXAocHJvbWlzZSwgY2FsbGJhY2spO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gYWxsQXJyYXkocHJvbWlzZXMpIHtcbiAgcmV0dXJuIG1hcChQcm9taXNlLmFsbChwcm9taXNlcyksIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwQXJyYXkoKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5ib3gocHJpbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIHBhcmFtKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIG1hcChhbGxBcnJheShsaXN0VG9BcnJheShwcm9taXNlcykpLCAoZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUb0xpc3QocmVzdWx0cyk7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gYWxsMihwMSwgcDIpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICBwMSxcbiAgICAgICAgICAgICAgcDJcbiAgICAgICAgICAgIF0pO1xufVxuXG5mdW5jdGlvbiBhbGwzKHAxLCBwMiwgcDMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICBwMSxcbiAgICAgICAgICAgICAgcDIsXG4gICAgICAgICAgICAgIHAzXG4gICAgICAgICAgICBdKTtcbn1cblxuZnVuY3Rpb24gYWxsNChwMSwgcDIsIHAzLCBwNCkge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIHAxLFxuICAgICAgICAgICAgICBwMixcbiAgICAgICAgICAgICAgcDMsXG4gICAgICAgICAgICAgIHA0XG4gICAgICAgICAgICBdKTtcbn1cblxuZnVuY3Rpb24gYWxsNShwMSwgcDIsIHAzLCBwNCwgcDUpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICBwMSxcbiAgICAgICAgICAgICAgcDIsXG4gICAgICAgICAgICAgIHAzLFxuICAgICAgICAgICAgICBwNCxcbiAgICAgICAgICAgICAgcDVcbiAgICAgICAgICAgIF0pO1xufVxuXG5mdW5jdGlvbiBhbGw2KHAxLCBwMiwgcDMsIHA0LCBwNSwgcDYpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICBwMSxcbiAgICAgICAgICAgICAgcDIsXG4gICAgICAgICAgICAgIHAzLFxuICAgICAgICAgICAgICBwNCxcbiAgICAgICAgICAgICAgcDUsXG4gICAgICAgICAgICAgIHA2XG4gICAgICAgICAgICBdKTtcbn1cblxuZnVuY3Rpb24gcmFjZShwcm9taXNlcykge1xuICBpZiAocHJvbWlzZXMgPT09IC8qIFtdICovMCkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiUHJvbWlzZS5yYWNlKFtdKSB3b3VsZCBiZSBwZW5kaW5nIGZvcmV2ZXJcIlxuICAgICAgICBdO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJhY2UobGlzdFRvQXJyYXkocHJvbWlzZXMpKTtcbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQocHJvbWlzZSkge1xuICByZXR1cm4gY2F0Y2hfKG1hcChwcm9taXNlLCAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIE9rICovQmxvY2suX18oMCwgW3ZdKTtcbiAgICAgICAgICAgICAgICAgIH0pKSwgKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkKC8qIEVycm9yICovQmxvY2suX18oMSwgW2VdKSk7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gZnJvbVJlc3VsdChwcm9taXNlKSB7XG4gIHJldHVybiB0aGVuKHByb21pc2UsIChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICh2LnRhZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHZbMF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQodlswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHBlbmRpbmckMShwYXJhbSkge1xuICB2YXIgbWF0Y2ggPSBwZW5kaW5nKHVuZGVmaW5lZCk7XG4gIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICBtYXRjaFswXSxcbiAgICAgICAgICBtYXRjaFsxXVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBleGVjKGV4ZWN1dG9yKSB7XG4gIHZhciBtYXRjaCA9IHBlbmRpbmckMSh1bmRlZmluZWQpO1xuICBDdXJyeS5fMShleGVjdXRvciwgbWF0Y2hbMV0pO1xuICByZXR1cm4gbWF0Y2hbMF07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVkJDEocHJpbSkge1xuICByZXR1cm4gcmVzb2x2ZWQocHJpbSk7XG59XG5cbmZ1bmN0aW9uIGZsYXRNYXAocHJpbSwgcHJpbSQxKSB7XG4gIHJldHVybiB0aGVuKHByaW0sIHByaW0kMSk7XG59XG5cbmZ1bmN0aW9uIGZsYXRNYXBPayhwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gdGhlbihwcm9taXNlLCAoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudGFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNhbGxiYWNrLCByZXN1bHRbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBmbGF0TWFwRXJyb3IocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRhZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNhbGxiYWNrLCByZXN1bHRbMF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gbWFwT2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIG1hcChwcm9taXNlLCAoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudGFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogT2sgKi9CbG9jay5fXygwLCBbQ3VycnkuXzEoY2FsbGJhY2ssIHJlc3VsdFswXSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gbWFwRXJyb3IocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIG1hcChwcm9taXNlLCAoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudGFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbQ3VycnkuXzEoY2FsbGJhY2ssIHJlc3VsdFswXSldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gZ2V0T2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGdldChwcm9taXNlLCAoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudGFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoY2FsbGJhY2ssIHJlc3VsdFswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGdldEVycm9yKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBnZXQocHJvbWlzZSwgKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRhZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNhbGxiYWNrLCByZXN1bHRbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiB0YXBPayhwcm9taXNlLCBjYWxsYmFjaykge1xuICBnZXRPayhwcm9taXNlLCBjYWxsYmFjayk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiB0YXBFcnJvcihwcm9taXNlLCBjYWxsYmFjaykge1xuICBnZXRFcnJvcihwcm9taXNlLCBjYWxsYmFjayk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgT3BlcmF0b3JzID0ge1xuICAkZ3JlYXQkcGlwZSRlcTogbWFwT2ssXG4gICRncmVhdCRncmVhdCRlcTogZmxhdE1hcE9rXG59O1xuXG5mdW5jdGlvbiBmbGF0TWFwU29tZShwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gdGhlbihwcm9taXNlLCAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNhbGxiYWNrLCBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKG9wdGlvbikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gbWFwU29tZShwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gbWFwKHByb21pc2UsIChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShDdXJyeS5fMShjYWxsYmFjaywgQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihvcHRpb24pKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGdldFNvbWUocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGdldChwcm9taXNlLCAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNhbGxiYWNrLCBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKG9wdGlvbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiB0YXBTb21lKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIGdldFNvbWUocHJvbWlzZSwgY2FsbGJhY2spO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIFBpcGVGaXJzdCA9IHsgfTtcblxuZnVuY3Rpb24gSnNfcmVzb2x2ZWQocHJpbSkge1xuICByZXR1cm4gcmVzb2x2ZWQocHJpbSk7XG59XG5cbmZ1bmN0aW9uIEpzX3JlamVjdGVkKHByaW0pIHtcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KHByaW0pO1xufVxuXG5mdW5jdGlvbiBKc19mbGF0TWFwKHByaW0sIHByaW0kMSkge1xuICByZXR1cm4gdGhlbihwcmltLCBwcmltJDEpO1xufVxuXG5mdW5jdGlvbiBKc19jYXRjaChwcmltLCBwcmltJDEpIHtcbiAgcmV0dXJuIGNhdGNoXyhwcmltLCBwcmltJDEpO1xufVxuXG5mdW5jdGlvbiBKc19yZWxheChwcmltKSB7XG4gIHJldHVybiBwcmltO1xufVxuXG5mdW5jdGlvbiBKc19mcm9tQnNQcm9taXNlKHByaW0pIHtcbiAgcmV0dXJuIHByaW07XG59XG5cbmZ1bmN0aW9uIEpzX3RvQnNQcm9taXNlKHByaW0pIHtcbiAgcmV0dXJuIHByaW07XG59XG5cbnZhciBKcyA9IHtcbiAgcGVuZGluZzogcGVuZGluZyxcbiAgcmVzb2x2ZWQ6IEpzX3Jlc29sdmVkLFxuICByZWplY3RlZDogSnNfcmVqZWN0ZWQsXG4gIGdldDogZ2V0LFxuICB0YXA6IHRhcCxcbiAgbWFwOiBtYXAsXG4gIGZsYXRNYXA6IEpzX2ZsYXRNYXAsXG4gICQkY2F0Y2g6IEpzX2NhdGNoLFxuICBhbGw6IGFsbCxcbiAgcmFjZTogcmFjZSxcbiAgcmVsYXg6IEpzX3JlbGF4LFxuICB0b1Jlc3VsdDogdG9SZXN1bHQsXG4gIGZyb21SZXN1bHQ6IGZyb21SZXN1bHQsXG4gIGZyb21Cc1Byb21pc2U6IEpzX2Zyb21Cc1Byb21pc2UsXG4gIHRvQnNQcm9taXNlOiBKc190b0JzUHJvbWlzZVxufTtcblxuZXhwb3J0IHtcbiAgcGVuZGluZyQxIGFzIHBlbmRpbmcsXG4gIHJlc29sdmVkJDEgYXMgcmVzb2x2ZWQsXG4gIGV4ZWMgLFxuICBnZXQgLFxuICB0YXAgLFxuICBtYXAgLFxuICBmbGF0TWFwICxcbiAgZ2V0T2sgLFxuICB0YXBPayAsXG4gIG1hcE9rICxcbiAgZmxhdE1hcE9rICxcbiAgZ2V0RXJyb3IgLFxuICB0YXBFcnJvciAsXG4gIG1hcEVycm9yICxcbiAgZmxhdE1hcEVycm9yICxcbiAgT3BlcmF0b3JzICxcbiAgZ2V0U29tZSAsXG4gIHRhcFNvbWUgLFxuICBtYXBTb21lICxcbiAgZmxhdE1hcFNvbWUgLFxuICByYWNlICxcbiAgYWxsICxcbiAgYWxsQXJyYXkgLFxuICBhbGwyICxcbiAgYWxsMyAsXG4gIGFsbDQgLFxuICBhbGw1ICxcbiAgYWxsNiAsXG4gIEpzICxcbiAgUGlwZUZpcnN0ICxcbiAgb25VbmhhbmRsZWRFeGNlcHRpb24gLFxuICBcbn1cbi8qICBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzICQkQXJyYXkgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvYXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIEJsb2NrIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2Jsb2NrLmpzXCI7XG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0ICogYXMgJCRQcm9taXNlIGZyb20gXCJyZWFzb24tcHJvbWlzZS9zcmMvanMvcHJvbWlzZS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIFJlYWN0UmVsYXkgZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgKiBhcyBSZWxheVJ1bnRpbWUgZnJvbSBcInJlbGF5LXJ1bnRpbWVcIjtcbmltcG9ydCAqIGFzIENhbWxfZXhjZXB0aW9ucyBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2V4Y2VwdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIEhvb2tzIGZyb20gXCJyZWFjdC1yZWxheS9ob29rc1wiO1xuaW1wb3J0ICogYXMgUmVsYXlFeHBlcmltZW50YWwgZnJvbSBcInJlYWN0LXJlbGF5L2xpYi9yZWxheS1leHBlcmltZW50YWxcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDbGllbnRJRChkYXRhSWQsIHN0b3JhZ2VLZXksIGluZGV4LCBwYXJhbSkge1xuICByZXR1cm4gUmVsYXlSdW50aW1lLmdlbmVyYXRlQ2xpZW50SUQoZGF0YUlkLCBzdG9yYWdlS2V5LCBpbmRleCk7XG59XG5cbnZhciBfY2xlYW5PYmplY3RGcm9tVW5kZWZpbmVkID0gKGZ1bmN0aW9uIGNsZWFuT2JqKG9iaikge1xuICAgIHZhciBuZXdPYmogPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3T2JqO1xuICB9KTtcblxudmFyIF9jbGVhblZhcmlhYmxlcyA9IChmdW5jdGlvbiBjbGVhblZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICBpZiAodHlwZW9mIHZhcmlhYmxlcyAhPT0gXCJvYmplY3RcIiB8fCB2YXJpYWJsZXMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH0pO1xuXG5mdW5jdGlvbiBfY29udmVydE9iaihwcmltLCBwcmltJDEsIHByaW0kMiwgcHJpbSQzKSB7XG4gIHJldHVybiBVdGlscy50cmF2ZXJzZXIocHJpbSwgcHJpbSQxLCBwcmltJDIsIHByaW0kMyk7XG59XG5cbmZ1bmN0aW9uIGNvcHlGaWVsZHNGcm9tKHQsIHNvdXJjZVJlY29yZCkge1xuICB0LmNvcHlGaWVsZHNGcm9tKHNvdXJjZVJlY29yZCk7XG4gIFxufVxuXG5mdW5jdGlvbiBnZXREYXRhSWQodCkge1xuICByZXR1cm4gdC5nZXREYXRhSUQoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlua2VkUmVjb3JkKHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KHQuZ2V0TGlua2VkUmVjb3JkKG5hbWUsICQkYXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGdldExpbmtlZFJlY29yZHModCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHZhciByZWNvcmRzID0gdC5nZXRMaW5rZWRSZWNvcmRzKG5hbWUsICQkYXJndW1lbnRzKTtcbiAgaWYgKCEocmVjb3JkcyA9PSBudWxsKSkge1xuICAgIHJldHVybiAkJEFycmF5Lm1hcCgoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHYpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLCAocmVjb3JkcyA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUocmVjb3JkcykpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZUxpbmtlZFJlY29yZCh0LCBuYW1lLCB0eXBlTmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LmdldE9yQ3JlYXRlTGlua2VkUmVjb3JkKG5hbWUsIHR5cGVOYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldFR5cGUodCkge1xuICByZXR1cm4gdC5nZXRUeXBlKCk7XG59XG5cbmZ1bmN0aW9uIF9nZXRWYWx1ZUFycih0LCBuYW1lLCAkJGFyZ3VtZW50cykge1xuICB2YXIgYXJyID0gdC5nZXRWYWx1ZShuYW1lLCAkJGFyZ3VtZW50cyk7XG4gIGlmICghKGFyciA9PSBudWxsKSkge1xuICAgIHJldHVybiAkJEFycmF5Lm1hcCgoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLCBhcnIpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZVN0cmluZyh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdCh0LmdldFZhbHVlKG5hbWUsICQkYXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlU3RyaW5nQXJyYXkodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBfZ2V0VmFsdWVBcnIodCwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUludCh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdCh0LmdldFZhbHVlKG5hbWUsICQkYXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlSW50QXJyYXkodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBfZ2V0VmFsdWVBcnIodCwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZsb2F0KHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KHQuZ2V0VmFsdWUobmFtZSwgJCRhcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGbG9hdEFycmF5KHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gX2dldFZhbHVlQXJyKHQsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVCb29sKHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KHQuZ2V0VmFsdWUobmFtZSwgJCRhcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVCb29sQXJyYXkodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBfZ2V0VmFsdWVBcnIodCwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXRMaW5rZWRSZWNvcmQodCwgcmVjb3JkLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0TGlua2VkUmVjb3JkKHJlY29yZCwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiB1bnNldExpbmtlZFJlY29yZCh0LCBuYW1lLCB1bnNldFZhbHVlLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgaWYgKHVuc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdC5zZXRMaW5rZWRSZWNvcmQodW5kZWZpbmVkLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQuc2V0TGlua2VkUmVjb3JkKG51bGwsIG5hbWUsICQkYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRMaW5rZWRSZWNvcmRzKHQsIHJlY29yZHMsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRMaW5rZWRSZWNvcmRzKHJlY29yZHMsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gdW5zZXRMaW5rZWRSZWNvcmRzKHQsIG5hbWUsIHVuc2V0VmFsdWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICBpZiAodW5zZXRWYWx1ZSkge1xuICAgIHJldHVybiB0LnNldExpbmtlZFJlY29yZHModW5kZWZpbmVkLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQuc2V0TGlua2VkUmVjb3JkcyhudWxsLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zZXRWYWx1ZSh0LCBuYW1lLCB1bnNldFZhbHVlJDEsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICBpZiAodW5zZXRWYWx1ZSQxKSB7XG4gICAgcmV0dXJuIHQuc2V0VmFsdWUodW5kZWZpbmVkLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQuc2V0VmFsdWUobnVsbCwgbmFtZSwgJCRhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlU3RyaW5nKHQsIHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0VmFsdWUodmFsdWUsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVTdHJpbmdBcnJheSh0LCB2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldFZhbHVlKHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlSW50KHQsIHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0VmFsdWUodmFsdWUsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVJbnRBcnJheSh0LCB2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldFZhbHVlKHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlRmxvYXQodCwgdmFsdWUsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRWYWx1ZSh2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZUZsb2F0QXJyYXkodCwgdmFsdWUsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRWYWx1ZSh2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZUJvb2wodCwgdmFsdWUsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRWYWx1ZSh2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZUJvb2xBcnJheSh0LCB2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldFZhbHVlKHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSh0LCBkYXRhSWQsIHR5cGVOYW1lKSB7XG4gIHJldHVybiB0LmNyZWF0ZShkYXRhSWQsIHR5cGVOYW1lKTtcbn1cblxuZnVuY3Rpb24gJCRkZWxldGUodCwgZGF0YUlkKSB7XG4gIHQuZGVsZXRlKGRhdGFJZCk7XG4gIFxufVxuXG5mdW5jdGlvbiBnZXQodCwgZGF0YUlkKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQodC5nZXQoZGF0YUlkKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJvb3RGaWVsZCh0LCBmaWVsZE5hbWUpIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdCh0LmdldFJvb3RGaWVsZChmaWVsZE5hbWUpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGx1cmFsUm9vdEZpZWxkKHQsIGZpZWxkTmFtZSkge1xuICB2YXIgYXJyID0gdC5nZXRQbHVyYWxSb290RmllbGQoZmllbGROYW1lKTtcbiAgaWYgKCEoYXJyID09IG51bGwpKSB7XG4gICAgcmV0dXJuICQkQXJyYXkubWFwKChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUodik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksIChhcnIgPT0gbnVsbCkgPyB1bmRlZmluZWQgOiBDYW1sX29wdGlvbi5zb21lKGFycikpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBjcmVhdGUkMSh0LCBkYXRhSWQsIHR5cGVOYW1lKSB7XG4gIHJldHVybiB0LmNyZWF0ZShkYXRhSWQsIHR5cGVOYW1lKTtcbn1cblxuZnVuY3Rpb24gJCRkZWxldGUkMSh0LCBkYXRhSWQpIHtcbiAgdC5kZWxldGUoZGF0YUlkKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGdldCQxKHQsIGRhdGFJZCkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KHQuZ2V0KGRhdGFJZCkpO1xufVxuXG5mdW5jdGlvbiBnZXRDb25uZWN0aW9uKHJlY29yZCwga2V5LCBmaWx0ZXJzLCBwYXJhbSkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KFJlbGF5UnVudGltZS5Db25uZWN0aW9uSGFuZGxlci5nZXRDb25uZWN0aW9uKHJlY29yZCwga2V5LCBmaWx0ZXJzKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkZ2Uoc3RvcmUsIGNvbm5lY3Rpb24sIG5vZGUsIGVkZ2VUeXBlKSB7XG4gIHJldHVybiBSZWxheVJ1bnRpbWUuQ29ubmVjdGlvbkhhbmRsZXIuY3JlYXRlRWRnZShzdG9yZSwgY29ubmVjdGlvbiwgbm9kZSwgZWRnZVR5cGUpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRFZGdlQmVmb3JlKGNvbm5lY3Rpb24sIG5ld0VkZ2UsIGN1cnNvciwgcGFyYW0pIHtcbiAgUmVsYXlSdW50aW1lLkNvbm5lY3Rpb25IYW5kbGVyLmluc2VydEVkZ2VCZWZvcmUoY29ubmVjdGlvbiwgbmV3RWRnZSwgY3Vyc29yKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGluc2VydEVkZ2VBZnRlcihjb25uZWN0aW9uLCBuZXdFZGdlLCBjdXJzb3IsIHBhcmFtKSB7XG4gIFJlbGF5UnVudGltZS5Db25uZWN0aW9uSGFuZGxlci5pbnNlcnRFZGdlQWZ0ZXIoY29ubmVjdGlvbiwgbmV3RWRnZSwgY3Vyc29yKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZU5vZGUoY29ubmVjdGlvbiwgbm9kZUlkKSB7XG4gIFJlbGF5UnVudGltZS5Db25uZWN0aW9uSGFuZGxlci5kZWxldGVOb2RlKGNvbm5lY3Rpb24sIG5vZGVJZCk7XG4gIFxufVxuXG52YXIgQ29ubmVjdGlvbkhhbmRsZXIgPSB7XG4gIGdldENvbm5lY3Rpb246IGdldENvbm5lY3Rpb24sXG4gIGNyZWF0ZUVkZ2U6IGNyZWF0ZUVkZ2UsXG4gIGluc2VydEVkZ2VCZWZvcmU6IGluc2VydEVkZ2VCZWZvcmUsXG4gIGluc2VydEVkZ2VBZnRlcjogaW5zZXJ0RWRnZUFmdGVyLFxuICBkZWxldGVOb2RlOiBkZWxldGVOb2RlXG59O1xuXG5mdW5jdGlvbiBtYWtlKHNpbmtGbikge1xuICByZXR1cm4gUmVsYXlSdW50aW1lLk9ic2VydmFibGUuY3JlYXRlKChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIEN1cnJ5Ll8xKHNpbmtGbiwge1xuICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IHMubmV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogcy5lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IHMuY29tcGxldGVkLFxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NlZDogcy5jbG9zZWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pKTtcbn1cblxudmFyIE9ic2VydmFibGUgPSB7XG4gIG1ha2U6IG1ha2Vcbn07XG5cbmZ1bmN0aW9uIG1ha2VQcm9taXNlQmFzZWQoZmV0Y2hGdW5jdGlvbiwgc3Vic2NyaXB0aW9uRnVuY3Rpb24sIHBhcmFtKSB7XG4gIHJldHVybiBSZWxheVJ1bnRpbWUuTmV0d29yay5jcmVhdGUoZmV0Y2hGdW5jdGlvbiwgc3Vic2NyaXB0aW9uRnVuY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBtYWtlT2JzZXJ2YWJsZUJhc2VkKG9ic2VydmFibGVGdW5jdGlvbiwgc3Vic2NyaXB0aW9uRnVuY3Rpb24sIHBhcmFtKSB7XG4gIHJldHVybiBSZWxheVJ1bnRpbWUuTmV0d29yay5jcmVhdGUob2JzZXJ2YWJsZUZ1bmN0aW9uLCBzdWJzY3JpcHRpb25GdW5jdGlvbik7XG59XG5cbnZhciBOZXR3b3JrID0ge1xuICBtYWtlUHJvbWlzZUJhc2VkOiBtYWtlUHJvbWlzZUJhc2VkLFxuICBtYWtlT2JzZXJ2YWJsZUJhc2VkOiBtYWtlT2JzZXJ2YWJsZUJhc2VkXG59O1xuXG5mdW5jdGlvbiBtYWtlJDEocmVjb3JkcywgcGFyYW0pIHtcbiAgcmV0dXJuIG5ldyBSZWxheVJ1bnRpbWUuUmVjb3JkU291cmNlKHJlY29yZHMpO1xufVxuXG5mdW5jdGlvbiBtYWtlJDIoc291cmNlLCBnY1JlbGVhc2VCdWZmZXJTaXplLCBwYXJhbSkge1xuICByZXR1cm4gbmV3IFJlbGF5UnVudGltZS5TdG9yZShzb3VyY2UsIHtcbiAgICAgICAgICAgICAgZ2NSZWxlYXNlQnVmZmVyU2l6ZTogZ2NSZWxlYXNlQnVmZmVyU2l6ZVxuICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1hcFJlbmRlclBvbGljeShwYXJhbSkge1xuICBpZiAocGFyYW0gIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwYXJhbSkge1xuICAgICAgcmV0dXJuIFwicGFydGlhbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJmdWxsXCI7XG4gICAgfVxuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBtYWtlJDMobmV0d29yaywgc3RvcmUsIGdldERhdGFJRCwgZGVmYXVsdFJlbmRlclBvbGljeSwgcGFyYW0pIHtcbiAgcmV0dXJuIG5ldyBSZWxheVJ1bnRpbWUuRW52aXJvbm1lbnQoe1xuICAgICAgICAgICAgICBuZXR3b3JrOiBuZXR3b3JrLFxuICAgICAgICAgICAgICBzdG9yZTogc3RvcmUsXG4gICAgICAgICAgICAgIFVOU1RBQkxFX0RPX05PVF9VU0VfZ2V0RGF0YUlEOiBnZXREYXRhSUQgIT09IHVuZGVmaW5lZCA/IEN1cnJ5Ll9fMihnZXREYXRhSUQpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBVTlNUQUJMRV9kZWZhdWx0UmVuZGVyUG9saWN5OiBtYXBSZW5kZXJQb2xpY3koZGVmYXVsdFJlbmRlclBvbGljeSlcbiAgICAgICAgICAgIH0pO1xufVxuXG52YXIgcHJvdmlkZXIgPSBSZWFjdFJlbGF5LlJlYWN0UmVsYXlDb250ZXh0LlByb3ZpZGVyO1xuXG5mdW5jdGlvbiBSZWFzb25SZWxheSRDb250ZXh0JFByb3ZpZGVyKFByb3BzKSB7XG4gIHZhciBlbnZpcm9ubWVudCA9IFByb3BzLmVudmlyb25tZW50O1xuICB2YXIgY2hpbGRyZW4gPSBQcm9wcy5jaGlsZHJlbjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvdmlkZXIsIHtcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlQ29udmVydGVkVmFsdWUoY29udmVydCwgdikge1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShjb252ZXJ0LCB2KTtcbiAgICAgICAgICAgICAgfSksIFt2XSk7XG59XG5cbnZhciBFbnZpcm9ubWVudE5vdEZvdW5kSW5Db250ZXh0ID0gQ2FtbF9leGNlcHRpb25zLmNyZWF0ZShcIlJlYXNvblJlbGF5LkVudmlyb25tZW50Tm90Rm91bmRJbkNvbnRleHRcIik7XG5cbmZ1bmN0aW9uIHVzZUVudmlyb25tZW50RnJvbUNvbnRleHQocGFyYW0pIHtcbiAgdmFyIGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFJlYWN0UmVsYXkuUmVhY3RSZWxheUNvbnRleHQpO1xuICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oY29udGV4dCkuZW52aXJvbm1lbnQ7XG4gIH1cbiAgdGhyb3cgRW52aXJvbm1lbnROb3RGb3VuZEluQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gbWFwRmV0Y2hQb2xpY3kocGFyYW0pIHtcbiAgaWYgKHBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHN3aXRjaCAocGFyYW0pIHtcbiAgICBjYXNlIC8qIFN0b3JlT25seSAqLzAgOlxuICAgICAgICByZXR1cm4gXCJzdG9yZS1vbmx5XCI7XG4gICAgY2FzZSAvKiBTdG9yZU9yTmV0d29yayAqLzEgOlxuICAgICAgICByZXR1cm4gXCJzdG9yZS1vci1uZXR3b3JrXCI7XG4gICAgY2FzZSAvKiBTdG9yZUFuZE5ldHdvcmsgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwic3RvcmUtYW5kLW5ldHdvcmtcIjtcbiAgICBjYXNlIC8qIE5ldHdvcmtPbmx5ICovMyA6XG4gICAgICAgIHJldHVybiBcIm5ldHdvcmstb25seVwiO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIE1ha2VQcmVsb2FkUXVlcnkoQykge1xuICB2YXIgcHJlbG9hZCA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCwgdmFyaWFibGVzLCBmZXRjaFBvbGljeSwgZmV0Y2hLZXksIG5ldHdvcmtDYWNoZUNvbmZpZywgcGFyYW0pIHtcbiAgICByZXR1cm4gSG9va3MucHJlbG9hZFF1ZXJ5KGVudmlyb25tZW50LCBDLnF1ZXJ5LCBDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKEMuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSksIHtcbiAgICAgICAgICAgICAgICBmZXRjaEtleTogZmV0Y2hLZXksXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IG1hcEZldGNoUG9saWN5KGZldGNoUG9saWN5KSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrQ2FjaGVDb25maWc6IG5ldHdvcmtDYWNoZUNvbmZpZ1xuICAgICAgICAgICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBwcmVsb2FkOiBwcmVsb2FkXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIE1ha2VVc2VGcmFnbWVudChDKSB7XG4gIHZhciB1c2UgPSBmdW5jdGlvbiAoZnIpIHtcbiAgICB2YXIgZGF0YSA9IEhvb2tzLnVzZUZyYWdtZW50KEMuZnJhZ21lbnRTcGVjLCBmcik7XG4gICAgcmV0dXJuIHVzZUNvbnZlcnRlZFZhbHVlKEMuY29udmVydEZyYWdtZW50LCBkYXRhKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICB1c2U6IHVzZVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlUmVmZXRjaGFibGVGbk9wdHMoZmV0Y2hQb2xpY3ksIHJlbmRlclBvbGljeSwgb25Db21wbGV0ZSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGZldGNoUG9saWN5OiBtYXBGZXRjaFBvbGljeShmZXRjaFBvbGljeSksXG4gICAgICAgICAgVU5TVEFCTEVfcmVuZGVyUG9saWN5OiBtYXBSZW5kZXJQb2xpY3kocmVuZGVyUG9saWN5KSxcbiAgICAgICAgICBvbkNvbXBsZXRlOiAoZnVuY3Rpb24gKG1heWJlRXhuKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IChtYXliZUV4biA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUobWF5YmVFeG4pO1xuICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKG9uQ29tcGxldGUsIG1hdGNoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIE1ha2VVc2VSZWZldGNoYWJsZUZyYWdtZW50KEMpIHtcbiAgdmFyIHVzZVJlZmV0Y2hhYmxlID0gZnVuY3Rpb24gKGZyKSB7XG4gICAgdmFyIG1hdGNoID0gSG9va3MudXNlUmVmZXRjaGFibGVGcmFnbWVudChDLmZyYWdtZW50U3BlYywgZnIpO1xuICAgIHZhciByZWZldGNoRm4gPSBtYXRjaFsxXTtcbiAgICB2YXIgZGF0YSA9IHVzZUNvbnZlcnRlZFZhbHVlKEMuY29udmVydEZyYWdtZW50LCBtYXRjaFswXSk7XG4gICAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIChmdW5jdGlvbiAodmFyaWFibGVzLCBmZXRjaFBvbGljeSwgcmVuZGVyUG9saWN5LCBvbkNvbXBsZXRlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihyZWZldGNoRm4sIEN1cnJ5Ll8xKF9jbGVhbk9iamVjdEZyb21VbmRlZmluZWQsIEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoQy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKSksIG1ha2VSZWZldGNoYWJsZUZuT3B0cyhmZXRjaFBvbGljeSwgcmVuZGVyUG9saWN5LCBvbkNvbXBsZXRlKSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgXTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICB1c2VSZWZldGNoYWJsZTogdXNlUmVmZXRjaGFibGVcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gTWFrZVVzZVBhZ2luYXRpb25GcmFnbWVudChDKSB7XG4gIHZhciB1c2VCbG9ja2luZ1BhZ2luYXRpb24gPSBmdW5jdGlvbiAoZnIpIHtcbiAgICB2YXIgcCA9IEhvb2tzLnVzZUJsb2NraW5nUGFnaW5hdGlvbkZyYWdtZW50KEMuZnJhZ21lbnRTcGVjLCBmcik7XG4gICAgdmFyIGRhdGEgPSB1c2VDb252ZXJ0ZWRWYWx1ZShDLmNvbnZlcnRGcmFnbWVudCwgcC5kYXRhKTtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIGxvYWROZXh0OiAoZnVuY3Rpb24gKGNvdW50LCBvbkNvbXBsZXRlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmxvYWROZXh0KGNvdW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZTogb25Db21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBsb2FkUHJldmlvdXM6IChmdW5jdGlvbiAoY291bnQsIG9uQ29tcGxldGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAubG9hZFByZXZpb3VzKGNvdW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZTogb25Db21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoYXNOZXh0OiBwLmhhc05leHQsXG4gICAgICAgICAgICBoYXNQcmV2aW91czogcC5oYXNQcmV2aW91cyxcbiAgICAgICAgICAgIHJlZmV0Y2g6IChmdW5jdGlvbiAodmFyaWFibGVzLCBmZXRjaFBvbGljeSwgcmVuZGVyUG9saWN5LCBvbkNvbXBsZXRlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLnJlZmV0Y2goQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShDLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLCBtYWtlUmVmZXRjaGFibGVGbk9wdHMoZmV0Y2hQb2xpY3ksIHJlbmRlclBvbGljeSwgb25Db21wbGV0ZSkpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gIH07XG4gIHZhciB1c2VQYWdpbmF0aW9uID0gZnVuY3Rpb24gKGZyKSB7XG4gICAgdmFyIHAgPSBIb29rcy51c2VQYWdpbmF0aW9uRnJhZ21lbnQoQy5mcmFnbWVudFNwZWMsIGZyKTtcbiAgICB2YXIgZGF0YSA9IHVzZUNvbnZlcnRlZFZhbHVlKEMuY29udmVydEZyYWdtZW50LCBwLmRhdGEpO1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgbG9hZE5leHQ6IChmdW5jdGlvbiAoY291bnQsIG9uQ29tcGxldGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAubG9hZE5leHQoY291bnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGxvYWRQcmV2aW91czogKGZ1bmN0aW9uIChjb3VudCwgb25Db21wbGV0ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5sb2FkUHJldmlvdXMoY291bnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhhc05leHQ6IHAuaGFzTmV4dCxcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzOiBwLmhhc1ByZXZpb3VzLFxuICAgICAgICAgICAgaXNMb2FkaW5nTmV4dDogcC5pc0xvYWRpbmdOZXh0LFxuICAgICAgICAgICAgaXNMb2FkaW5nUHJldmlvdXM6IHAuaXNMb2FkaW5nUHJldmlvdXMsXG4gICAgICAgICAgICByZWZldGNoOiAoZnVuY3Rpb24gKHZhcmlhYmxlcywgZmV0Y2hQb2xpY3ksIHJlbmRlclBvbGljeSwgb25Db21wbGV0ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5yZWZldGNoKEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoQy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKSwgbWFrZVJlZmV0Y2hhYmxlRm5PcHRzKGZldGNoUG9saWN5LCByZW5kZXJQb2xpY3ksIG9uQ29tcGxldGUpKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICB9O1xuICByZXR1cm4ge1xuICAgICAgICAgIHVzZUJsb2NraW5nUGFnaW5hdGlvbjogdXNlQmxvY2tpbmdQYWdpbmF0aW9uLFxuICAgICAgICAgIHVzZVBhZ2luYXRpb246IHVzZVBhZ2luYXRpb25cbiAgICAgICAgfTtcbn1cblxudmFyIE11dGF0aW9uX2ZhaWxlZCA9IENhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJSZWFzb25SZWxheS5NdXRhdGlvbl9mYWlsZWRcIik7XG5cbmZ1bmN0aW9uIE1ha2VVc2VNdXRhdGlvbihDKSB7XG4gIHZhciB1c2UgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICB2YXIgbWF0Y2ggPSBSZWxheUV4cGVyaW1lbnRhbC51c2VNdXRhdGlvbihDLm5vZGUpO1xuICAgIHZhciBtdXRhdGUgPSBtYXRjaFswXTtcbiAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAoZnVuY3Rpb24gKG9uRXJyb3IsIG9uQ29tcGxldGVkLCBvblVuc3Vic2NyaWJlLCBvcHRpbWlzdGljUmVzcG9uc2UsIG9wdGltaXN0aWNVcGRhdGVyLCB1cGRhdGVyLCB2YXJpYWJsZXMsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKG11dGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IG9uRXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZWQ6IG9uQ29tcGxldGVkICE9PSB1bmRlZmluZWQgPyAoZnVuY3Rpb24gKHIsIGVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihvbkNvbXBsZXRlZCwgQ3VycnkuXzEoQy5jb252ZXJ0UmVzcG9uc2UsIHIpLCAoZXJyb3JzID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShlcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VbnN1YnNjcmliZTogb25VbnN1YnNjcmliZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSAhPT0gdW5kZWZpbmVkID8gQ2FtbF9vcHRpb24uc29tZShDdXJyeS5fMShDLndyYXBSZXNwb25zZSwgQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihvcHRpbWlzdGljUmVzcG9uc2UpKSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpY1VwZGF0ZXI6IG9wdGltaXN0aWNVcGRhdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIgIT09IHVuZGVmaW5lZCA/IChmdW5jdGlvbiAoc3RvcmUsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIodXBkYXRlciwgc3RvcmUsIEN1cnJ5Ll8xKEMuY29udmVydFJlc3BvbnNlLCByKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShDLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hdGNoWzFdXG4gICAgICAgICAgXTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICB1c2U6IHVzZVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBNYWtlQ29tbWl0TXV0YXRpb24oQykge1xuICB2YXIgY29tbWl0TXV0YXRpb24gPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQsIHZhcmlhYmxlcywgb3B0aW1pc3RpY1VwZGF0ZXIsIG9wdGltaXN0aWNSZXNwb25zZSwgdXBkYXRlciwgb25Db21wbGV0ZWQsIG9uRXJyb3IsIHBhcmFtKSB7XG4gICAgcmV0dXJuIFJlbGF5UnVudGltZS5jb21taXRNdXRhdGlvbihlbnZpcm9ubWVudCwge1xuICAgICAgICAgICAgICAgIG11dGF0aW9uOiBDLm5vZGUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKEMuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSksXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZWQ6IChmdW5jdGlvbiAocmVzLCBlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIob25Db21wbGV0ZWQsICEocmVzID09IG51bGwpID8gQ2FtbF9vcHRpb24uc29tZShDdXJyeS5fMShDLmNvbnZlcnRSZXNwb25zZSwgcmVzKSkgOiB1bmRlZmluZWQsIChlcnIgPT0gbnVsbCkgPyB1bmRlZmluZWQgOiBDYW1sX29wdGlvbi5zb21lKGVycikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgb25FcnJvcjogKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShvbkVycm9yLCAoZXJyID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY1Jlc3BvbnNlICE9PSB1bmRlZmluZWQgPyBDYW1sX29wdGlvbi5zb21lKEN1cnJ5Ll8xKEMud3JhcFJlc3BvbnNlLCBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKG9wdGltaXN0aWNSZXNwb25zZSkpKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljVXBkYXRlcjogb3B0aW1pc3RpY1VwZGF0ZXIsXG4gICAgICAgICAgICAgICAgdXBkYXRlcjogdXBkYXRlciAhPT0gdW5kZWZpbmVkID8gKGZ1bmN0aW9uIChzdG9yZSwgcikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMih1cGRhdGVyLCBzdG9yZSwgQ3VycnkuXzEoQy5jb252ZXJ0UmVzcG9uc2UsIHIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfSk7XG4gIH07XG4gIHZhciBjb21taXRNdXRhdGlvblByb21pc2VkID0gZnVuY3Rpb24gKGVudmlyb25tZW50LCB2YXJpYWJsZXMsIG9wdGltaXN0aWNVcGRhdGVyLCBvcHRpbWlzdGljUmVzcG9uc2UsIHVwZGF0ZXIsIHBhcmFtKSB7XG4gICAgdmFyIG1hdGNoID0gJCRQcm9taXNlLnBlbmRpbmcodW5kZWZpbmVkKTtcbiAgICB2YXIgcmVzb2x2ZSA9IG1hdGNoWzFdO1xuICAgIFJlbGF5UnVudGltZS5jb21taXRNdXRhdGlvbihlbnZpcm9ubWVudCwge1xuICAgICAgICAgIG11dGF0aW9uOiBDLm5vZGUsXG4gICAgICAgICAgdmFyaWFibGVzOiBDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKEMuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSksXG4gICAgICAgICAgb25Db21wbGV0ZWQ6IChmdW5jdGlvbiAocmVzLCBlcnIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKHJlc29sdmUsIC8qIE9rICovQmxvY2suX18oMCwgWy8qIHR1cGxlICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShyZXMgPT0gbnVsbCkgPyBDYW1sX29wdGlvbi5zb21lKEN1cnJ5Ll8xKEMuY29udmVydFJlc3BvbnNlLCByZXMpKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIgPT0gbnVsbCkgPyB1bmRlZmluZWQgOiBDYW1sX29wdGlvbi5zb21lKGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXSkpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgb25FcnJvcjogKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKHJlc29sdmUsIC8qIEVycm9yICovQmxvY2suX18oMSwgWyhlcnIgPT0gbnVsbCkgPyB1bmRlZmluZWQgOiBDYW1sX29wdGlvbi5zb21lKGVycildKSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSAhPT0gdW5kZWZpbmVkID8gQ2FtbF9vcHRpb24uc29tZShDdXJyeS5fMShDLndyYXBSZXNwb25zZSwgQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihvcHRpbWlzdGljUmVzcG9uc2UpKSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgb3B0aW1pc3RpY1VwZGF0ZXI6IG9wdGltaXN0aWNVcGRhdGVyLFxuICAgICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIgIT09IHVuZGVmaW5lZCA/IChmdW5jdGlvbiAoc3RvcmUsIHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIodXBkYXRlciwgc3RvcmUsIEN1cnJ5Ll8xKEMuY29udmVydFJlc3BvbnNlLCByKSk7XG4gICAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgIHJldHVybiBtYXRjaFswXTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjb21taXRNdXRhdGlvbjogY29tbWl0TXV0YXRpb24sXG4gICAgICAgICAgY29tbWl0TXV0YXRpb25Qcm9taXNlZDogY29tbWl0TXV0YXRpb25Qcm9taXNlZFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21taXRMb2NhbFVwZGF0ZShlbnZpcm9ubWVudCwgdXBkYXRlcikge1xuICBSZWxheVJ1bnRpbWUuY29tbWl0TG9jYWxVcGRhdGUoZW52aXJvbm1lbnQsIHVwZGF0ZXIpO1xuICBcbn1cblxuZnVuY3Rpb24gTWFrZVVzZVN1YnNjcmlwdGlvbihDKSB7XG4gIHZhciBzdWJzY3JpYmUgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQsIHZhcmlhYmxlcywgb25Db21wbGV0ZWQsIG9uRXJyb3IsIG9uTmV4dCwgdXBkYXRlciwgcGFyYW0pIHtcbiAgICByZXR1cm4gUmVsYXlSdW50aW1lLnJlcXVlc3RTdWJzY3JpcHRpb24oZW52aXJvbm1lbnQsIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb246IEMubm9kZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoQy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZDogb25Db21wbGV0ZWQsXG4gICAgICAgICAgICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgICAgICAgICAgICBvbk5leHQ6IG9uTmV4dCAhPT0gdW5kZWZpbmVkID8gKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKG9uTmV4dCwgQ3VycnkuXzEoQy5jb252ZXJ0UmVzcG9uc2UsIHIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdXBkYXRlcjogdXBkYXRlciAhPT0gdW5kZWZpbmVkID8gKGZ1bmN0aW9uIChzdG9yZSwgcikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMih1cGRhdGVyLCBzdG9yZSwgQ3VycnkuXzEoQy5jb252ZXJ0UmVzcG9uc2UsIHIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmVcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZGF0YUlkVG9TdHJpbmcocHJpbSkge1xuICByZXR1cm4gcHJpbTtcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFJZChwcmltKSB7XG4gIHJldHVybiBwcmltO1xufVxuXG5mdW5jdGlvbiBtYWtlQXJndW1lbnRzKHByaW0pIHtcbiAgcmV0dXJuIHByaW07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlQ2xpZW50SUQocHJpbSkge1xuICByZXR1cm4gUmVsYXlSdW50aW1lLmdlbmVyYXRlVW5pcXVlQ2xpZW50SUQoKTtcbn1cblxuZnVuY3Rpb24gaXNDbGllbnRJRChwcmltKSB7XG4gIHJldHVybiBSZWxheVJ1bnRpbWUuaXNDbGllbnRJRChwcmltKTtcbn1cblxudmFyIHN0b3JlUm9vdElkID0gUmVsYXlSdW50aW1lLlJPT1RfSUQ7XG5cbnZhciBzdG9yZVJvb3RUeXBlID0gUmVsYXlSdW50aW1lLlJPT1RfVFlQRTtcblxuZnVuY3Rpb24gUmVjb3JkUHJveHlfaW52YWxpZGF0ZVJlY29yZChwcmltKSB7XG4gIHByaW0uaW52YWxpZGF0ZVJlY29yZCgpO1xuICBcbn1cblxudmFyIFJlY29yZFByb3h5ID0ge1xuICBjb3B5RmllbGRzRnJvbTogY29weUZpZWxkc0Zyb20sXG4gIGdldERhdGFJZDogZ2V0RGF0YUlkLFxuICBnZXRMaW5rZWRSZWNvcmQ6IGdldExpbmtlZFJlY29yZCxcbiAgZ2V0TGlua2VkUmVjb3JkczogZ2V0TGlua2VkUmVjb3JkcyxcbiAgZ2V0T3JDcmVhdGVMaW5rZWRSZWNvcmQ6IGdldE9yQ3JlYXRlTGlua2VkUmVjb3JkLFxuICBnZXRUeXBlOiBnZXRUeXBlLFxuICBnZXRWYWx1ZVN0cmluZzogZ2V0VmFsdWVTdHJpbmcsXG4gIGdldFZhbHVlU3RyaW5nQXJyYXk6IGdldFZhbHVlU3RyaW5nQXJyYXksXG4gIGdldFZhbHVlSW50OiBnZXRWYWx1ZUludCxcbiAgZ2V0VmFsdWVJbnRBcnJheTogZ2V0VmFsdWVJbnRBcnJheSxcbiAgZ2V0VmFsdWVGbG9hdDogZ2V0VmFsdWVGbG9hdCxcbiAgZ2V0VmFsdWVGbG9hdEFycmF5OiBnZXRWYWx1ZUZsb2F0QXJyYXksXG4gIGdldFZhbHVlQm9vbDogZ2V0VmFsdWVCb29sLFxuICBnZXRWYWx1ZUJvb2xBcnJheTogZ2V0VmFsdWVCb29sQXJyYXksXG4gIHNldExpbmtlZFJlY29yZDogc2V0TGlua2VkUmVjb3JkLFxuICBzZXRMaW5rZWRSZWNvcmRzOiBzZXRMaW5rZWRSZWNvcmRzLFxuICBzZXRWYWx1ZVN0cmluZzogc2V0VmFsdWVTdHJpbmcsXG4gIHNldFZhbHVlU3RyaW5nQXJyYXk6IHNldFZhbHVlU3RyaW5nQXJyYXksXG4gIHNldFZhbHVlSW50OiBzZXRWYWx1ZUludCxcbiAgc2V0VmFsdWVJbnRBcnJheTogc2V0VmFsdWVJbnRBcnJheSxcbiAgc2V0VmFsdWVGbG9hdDogc2V0VmFsdWVGbG9hdCxcbiAgc2V0VmFsdWVGbG9hdEFycmF5OiBzZXRWYWx1ZUZsb2F0QXJyYXksXG4gIHNldFZhbHVlQm9vbDogc2V0VmFsdWVCb29sLFxuICBzZXRWYWx1ZUJvb2xBcnJheTogc2V0VmFsdWVCb29sQXJyYXksXG4gIHVuc2V0VmFsdWU6IHVuc2V0VmFsdWUsXG4gIHVuc2V0TGlua2VkUmVjb3JkOiB1bnNldExpbmtlZFJlY29yZCxcbiAgdW5zZXRMaW5rZWRSZWNvcmRzOiB1bnNldExpbmtlZFJlY29yZHMsXG4gIGludmFsaWRhdGVSZWNvcmQ6IFJlY29yZFByb3h5X2ludmFsaWRhdGVSZWNvcmRcbn07XG5cbmZ1bmN0aW9uIFJlY29yZFNvdXJjZVNlbGVjdG9yUHJveHlfZ2V0Um9vdChwcmltKSB7XG4gIHJldHVybiBwcmltLmdldFJvb3QoKTtcbn1cblxuZnVuY3Rpb24gUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eV9pbnZhbGlkYXRlU3RvcmUocHJpbSkge1xuICBwcmltLmludmFsaWRhdGVTdG9yZSgpO1xuICBcbn1cblxudmFyIFJlY29yZFNvdXJjZVNlbGVjdG9yUHJveHkgPSB7XG4gIGNyZWF0ZTogY3JlYXRlLFxuICAkJGRlbGV0ZTogJCRkZWxldGUsXG4gIGdldDogZ2V0LFxuICBnZXRSb290OiBSZWNvcmRTb3VyY2VTZWxlY3RvclByb3h5X2dldFJvb3QsXG4gIGdldFJvb3RGaWVsZDogZ2V0Um9vdEZpZWxkLFxuICBnZXRQbHVyYWxSb290RmllbGQ6IGdldFBsdXJhbFJvb3RGaWVsZCxcbiAgaW52YWxpZGF0ZVN0b3JlOiBSZWNvcmRTb3VyY2VTZWxlY3RvclByb3h5X2ludmFsaWRhdGVTdG9yZVxufTtcblxuZnVuY3Rpb24gUmVjb3JkU291cmNlUHJveHlfZ2V0Um9vdChwcmltKSB7XG4gIHJldHVybiBwcmltLmdldFJvb3QoKTtcbn1cblxuZnVuY3Rpb24gUmVjb3JkU291cmNlUHJveHlfaW52YWxpZGF0ZVN0b3JlKHByaW0pIHtcbiAgcHJpbS5pbnZhbGlkYXRlU3RvcmUoKTtcbiAgXG59XG5cbnZhciBSZWNvcmRTb3VyY2VQcm94eSA9IHtcbiAgY3JlYXRlOiBjcmVhdGUkMSxcbiAgJCRkZWxldGU6ICQkZGVsZXRlJDEsXG4gIGdldDogZ2V0JDEsXG4gIGdldFJvb3Q6IFJlY29yZFNvdXJjZVByb3h5X2dldFJvb3QsXG4gIGludmFsaWRhdGVTdG9yZTogUmVjb3JkU291cmNlUHJveHlfaW52YWxpZGF0ZVN0b3JlXG59O1xuXG5mdW5jdGlvbiBSZWNvcmRTb3VyY2VfdG9KU09OKHByaW0pIHtcbiAgcmV0dXJuIHByaW0udG9KU09OKCk7XG59XG5cbnZhciBSZWNvcmRTb3VyY2UgPSB7XG4gIG1ha2U6IG1ha2UkMSxcbiAgdG9KU09OOiBSZWNvcmRTb3VyY2VfdG9KU09OXG59O1xuXG5mdW5jdGlvbiBTdG9yZV9nZXRTb3VyY2UocHJpbSkge1xuICByZXR1cm4gcHJpbS5nZXRTb3VyY2UoKTtcbn1cblxudmFyIFN0b3JlID0ge1xuICBtYWtlOiBtYWtlJDIsXG4gIGdldFNvdXJjZTogU3RvcmVfZ2V0U291cmNlXG59O1xuXG5mdW5jdGlvbiBFbnZpcm9ubWVudF9nZXRTdG9yZShwcmltKSB7XG4gIHJldHVybiBwcmltLmdldFN0b3JlKCk7XG59XG5cbnZhciBFbnZpcm9ubWVudCA9IHtcbiAgbWFrZTogbWFrZSQzLFxuICBnZXRTdG9yZTogRW52aXJvbm1lbnRfZ2V0U3RvcmVcbn07XG5cbnZhciBEaXNwb3NhYmxlID0ge1xuICBkaXNwb3NlOiAoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgIHByaW0uZGlzcG9zZSgpO1xuICAgICAgXG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIE1ha2VVc2VRdWVyeShmdW5hcmcpIHtcbiAgdmFyIHVzZSA9IGZ1bmN0aW9uICh2YXJpYWJsZXMsIGZldGNoUG9saWN5LCByZW5kZXJQb2xpY3ksIGZldGNoS2V5LCBuZXR3b3JrQ2FjaGVDb25maWcsIHBhcmFtKSB7XG4gICAgdmFyIGRhdGEgPSBIb29rcy51c2VMYXp5TG9hZFF1ZXJ5KGZ1bmFyZy5xdWVyeSwgQ3VycnkuXzEoX2NsZWFuT2JqZWN0RnJvbVVuZGVmaW5lZCwgQ3VycnkuXzEoZnVuYXJnLmNvbnZlcnRWYXJpYWJsZXMsIEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgdmFyaWFibGVzKSkpLCB7XG4gICAgICAgICAgZmV0Y2hLZXk6IGZldGNoS2V5LFxuICAgICAgICAgIGZldGNoUG9saWN5OiBtYXBGZXRjaFBvbGljeShmZXRjaFBvbGljeSksXG4gICAgICAgICAgVU5TVEFCTEVfcmVuZGVyUG9saWN5OiBtYXBSZW5kZXJQb2xpY3kocmVuZGVyUG9saWN5KSxcbiAgICAgICAgICBuZXR3b3JrQ2FjaGVDb25maWc6IG5ldHdvcmtDYWNoZUNvbmZpZ1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gdXNlQ29udmVydGVkVmFsdWUoZnVuYXJnLmNvbnZlcnRSZXNwb25zZSwgZGF0YSk7XG4gIH07XG4gIHZhciBwcmVsb2FkID0gZnVuY3Rpb24gKGVudmlyb25tZW50LCB2YXJpYWJsZXMsIGZldGNoUG9saWN5LCBmZXRjaEtleSwgbmV0d29ya0NhY2hlQ29uZmlnLCBwYXJhbSkge1xuICAgIHJldHVybiBIb29rcy5wcmVsb2FkUXVlcnkoZW52aXJvbm1lbnQsIGZ1bmFyZy5xdWVyeSwgQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShmdW5hcmcuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSksIHtcbiAgICAgICAgICAgICAgICBmZXRjaEtleTogZmV0Y2hLZXksXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6IG1hcEZldGNoUG9saWN5KGZldGNoUG9saWN5KSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrQ2FjaGVDb25maWc6IG5ldHdvcmtDYWNoZUNvbmZpZ1xuICAgICAgICAgICAgICB9KTtcbiAgfTtcbiAgdmFyIHVzZVByZWxvYWRlZCA9IGZ1bmN0aW9uICh0b2tlbiwgcmVuZGVyUG9saWN5LCBwYXJhbSkge1xuICAgIHZhciBkYXRhID0gSG9va3MudXNlUHJlbG9hZGVkUXVlcnkoZnVuYXJnLnF1ZXJ5LCB0b2tlbiwgcmVuZGVyUG9saWN5ICE9PSB1bmRlZmluZWQgPyAoe1xuICAgICAgICAgICAgICBVTlNUQUJMRV9yZW5kZXJQb2xpY3k6IG1hcFJlbmRlclBvbGljeShyZW5kZXJQb2xpY3kpXG4gICAgICAgICAgICB9KSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIHVzZUNvbnZlcnRlZFZhbHVlKGZ1bmFyZy5jb252ZXJ0UmVzcG9uc2UsIGRhdGEpO1xuICB9O1xuICB2YXIgJCRmZXRjaCA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCwgdmFyaWFibGVzLCBvblJlc3VsdCkge1xuICAgIFJlbGF5UnVudGltZS5mZXRjaFF1ZXJ5KGVudmlyb25tZW50LCBmdW5hcmcucXVlcnksIEN1cnJ5Ll8xKGZ1bmFyZy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKS50aGVuKChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgIEN1cnJ5Ll8xKG9uUmVzdWx0LCAvKiBPayAqL0Jsb2NrLl9fKDAsIFtDdXJyeS5fMShmdW5hcmcuY29udmVydFJlc3BvbnNlLCByZXMpXSkpO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9KSkuY2F0Y2goKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIEN1cnJ5Ll8xKG9uUmVzdWx0LCAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFtlcnJdKSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgfSkpO1xuICAgIFxuICB9O1xuICB2YXIgZmV0Y2hQcm9taXNlZCA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCwgdmFyaWFibGVzKSB7XG4gICAgdmFyIG1hdGNoID0gJCRQcm9taXNlLnBlbmRpbmcodW5kZWZpbmVkKTtcbiAgICB2YXIgcmVzb2x2ZSA9IG1hdGNoWzFdO1xuICAgIFJlbGF5UnVudGltZS5mZXRjaFF1ZXJ5KGVudmlyb25tZW50LCBmdW5hcmcucXVlcnksIEN1cnJ5Ll8xKGZ1bmFyZy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKS50aGVuKChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgIEN1cnJ5Ll8xKHJlc29sdmUsIC8qIE9rICovQmxvY2suX18oMCwgW0N1cnJ5Ll8xKGZ1bmFyZy5jb252ZXJ0UmVzcG9uc2UsIHJlcyldKSk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgQ3VycnkuXzEocmVzb2x2ZSwgLyogRXJyb3IgKi9CbG9jay5fXygxLCBbZXJyXSkpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgIH0pKTtcbiAgICByZXR1cm4gbWF0Y2hbMF07XG4gIH07XG4gIHJldHVybiB7XG4gICAgICAgICAgdXNlOiB1c2UsXG4gICAgICAgICAgJCRmZXRjaDogJCRmZXRjaCxcbiAgICAgICAgICBmZXRjaFByb21pc2VkOiBmZXRjaFByb21pc2VkLFxuICAgICAgICAgIHByZWxvYWQ6IHByZWxvYWQsXG4gICAgICAgICAgdXNlUHJlbG9hZGVkOiB1c2VQcmVsb2FkZWRcbiAgICAgICAgfTtcbn1cblxudmFyIENvbnRleHRfUHJvdmlkZXIgPSB7XG4gIG1ha2VQcm9wczogKGZ1bmN0aW9uIChwcmltLCBwcmltJDEsIHByaW0kMiwgcHJpbSQzKSB7XG4gICAgICB2YXIgdG1wID0ge1xuICAgICAgICBlbnZpcm9ubWVudDogcHJpbSxcbiAgICAgICAgY2hpbGRyZW46IHByaW0kMVxuICAgICAgfTtcbiAgICAgIGlmIChwcmltJDIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0bXAua2V5ID0gQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihwcmltJDIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRtcDtcbiAgICB9KSxcbiAgbWFrZTogUmVhc29uUmVsYXkkQ29udGV4dCRQcm92aWRlclxufTtcblxudmFyIENvbnRleHQgPSB7XG4gIGNvbnRleHQ6IFJlYWN0UmVsYXkuUmVhY3RSZWxheUNvbnRleHQsXG4gIFByb3ZpZGVyOiBDb250ZXh0X1Byb3ZpZGVyXG59O1xuXG5mdW5jdGlvbiBmZXRjaFF1ZXJ5KHByaW0sIHByaW0kMSwgcHJpbSQyKSB7XG4gIHJldHVybiBSZWxheVJ1bnRpbWUuZmV0Y2hRdWVyeShwcmltLCBwcmltJDEsIHByaW0kMik7XG59XG5cbmV4cG9ydCB7XG4gIGRhdGFJZFRvU3RyaW5nICxcbiAgbWFrZURhdGFJZCAsXG4gIG1ha2VBcmd1bWVudHMgLFxuICBnZW5lcmF0ZUNsaWVudElEICxcbiAgZ2VuZXJhdGVVbmlxdWVDbGllbnRJRCAsXG4gIGlzQ2xpZW50SUQgLFxuICBzdG9yZVJvb3RJZCAsXG4gIHN0b3JlUm9vdFR5cGUgLFxuICBfY2xlYW5PYmplY3RGcm9tVW5kZWZpbmVkICxcbiAgX2NsZWFuVmFyaWFibGVzICxcbiAgX2NvbnZlcnRPYmogLFxuICBSZWNvcmRQcm94eSAsXG4gIFJlY29yZFNvdXJjZVNlbGVjdG9yUHJveHkgLFxuICBSZWNvcmRTb3VyY2VQcm94eSAsXG4gIENvbm5lY3Rpb25IYW5kbGVyICxcbiAgT2JzZXJ2YWJsZSAsXG4gIE5ldHdvcmsgLFxuICBSZWNvcmRTb3VyY2UgLFxuICBTdG9yZSAsXG4gIEVudmlyb25tZW50ICxcbiAgRGlzcG9zYWJsZSAsXG4gIG1hcEZldGNoUG9saWN5ICxcbiAgTWFrZVVzZVF1ZXJ5ICxcbiAgTWFrZVByZWxvYWRRdWVyeSAsXG4gIE1ha2VVc2VGcmFnbWVudCAsXG4gIE1ha2VVc2VSZWZldGNoYWJsZUZyYWdtZW50ICxcbiAgTWFrZVVzZVBhZ2luYXRpb25GcmFnbWVudCAsXG4gIE1ha2VVc2VNdXRhdGlvbiAsXG4gIENvbnRleHQgLFxuICBFbnZpcm9ubWVudE5vdEZvdW5kSW5Db250ZXh0ICxcbiAgdXNlRW52aXJvbm1lbnRGcm9tQ29udGV4dCAsXG4gIE11dGF0aW9uX2ZhaWxlZCAsXG4gIE1ha2VDb21taXRNdXRhdGlvbiAsXG4gIGNvbW1pdExvY2FsVXBkYXRlICxcbiAgZmV0Y2hRdWVyeSAsXG4gIE1ha2VVc2VTdWJzY3JpcHRpb24gLFxuICBcbn1cbi8qIF9jbGVhbk9iamVjdEZyb21VbmRlZmluZWQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8qKlxuICogVGhpcyBpcyBib3VuZCB0byBlYWNoIG5lc3RlZCBvYmplY3Qgd2l0aCBmcmFnbWVudHMsXG4gKiBhbmQgdXNlZCBhcyBhIGR1bW15IGZ1bmN0aW9uIGZvciBjYXN0aW5nIGEgcmVjb3JkXG4gKiB0byBhIEpzLnQgb2JqZWN0IHdpdGggdGhlIGZyYWdtZW50IHJlZmVyZW5jZXMuXG4gKi9cbmZ1bmN0aW9uIGdldEZyYWdtZW50UmVmcygpIHtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGdldE5ld09iaihtYXliZU5ld09iaiwgY3VycmVudE9iaikge1xuICByZXR1cm4gbWF5YmVOZXdPYmogfHwgT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudE9iaik7XG59XG5cbmZ1bmN0aW9uIGdldFBhdGhOYW1lKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguam9pbihcIl9cIik7XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdQYXRoKGN1cnJlbnRQYXRoLCBuZXdLZXlzKSB7XG4gIHJldHVybiBbXS5jb25jYXQoY3VycmVudFBhdGgsIG5ld0tleXMpO1xufVxuXG4vKipcbiAqIFJ1bnMgb24gZWFjaCBvYmplY3QgaW4gdGhlIHRyZWUgYW5kIGZvbGxvd3MgdGhlIHByb3ZpZGVkIGluc3RydWN0aW9uc1xuICogdG8gYXBwbHkgdHJhbnNmb3JtcyBldGMuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlKFxuICBmdWxsSW5zdHJ1Y3Rpb25NYXAsXG4gIGN1cnJlbnRQYXRoLFxuICBjdXJyZW50T2JqLFxuICBpbnN0cnVjdGlvbk1hcCxcbiAgY29udmVydGVycyxcbiAgbnVsbGFibGVWYWx1ZSxcbiAgaW5zdHJ1Y3Rpb25QYXRocyxcbiAgYWRkRnJhZ21lbnRPblJvb3Rcbikge1xuICB2YXIgbmV3T2JqO1xuXG4gIGlmIChhZGRGcmFnbWVudE9uUm9vdCkge1xuICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuICAgIG5ld09iai5nZXRGcmFnbWVudFJlZnMgPSBnZXRGcmFnbWVudFJlZnMuYmluZChuZXdPYmopO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRPYmopIHtcbiAgICB2YXIgaXNVbmlvbiA9IGZhbHNlO1xuICAgIHZhciBvcmlnaW5hbFZhbHVlID0gY3VycmVudE9ialtrZXldO1xuXG4gICAgLy8gSW5zdHJ1Y3Rpb25zIGFyZSBzdG9yZWQgYnkgdGhlIHBhdGggaW4gdGhlIG9iamVjdCB3aGVyZSB0aGV5IGFwcGx5XG4gICAgdmFyIHRoaXNQYXRoID0gbWFrZU5ld1BhdGgoY3VycmVudFBhdGgsIFtrZXldKTtcbiAgICB2YXIgcGF0aCA9IGdldFBhdGhOYW1lKHRoaXNQYXRoKTtcblxuICAgIHZhciBpbnN0cnVjdGlvbnMgPSBpbnN0cnVjdGlvbk1hcFtwYXRoXTtcblxuICAgIHZhciBoYXNEZWVwZXJJbnN0cnVjdGlvbnMgPVxuICAgICAgaW5zdHJ1Y3Rpb25QYXRocy5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gcC5pbmRleE9mKHBhdGgpID09PSAwICYmIHAubGVuZ3RoID4gcGF0aC5sZW5ndGg7XG4gICAgICB9KS5sZW5ndGggPiAwO1xuXG4gICAgaWYgKGluc3RydWN0aW9ucykge1xuICAgICAgaWYgKGN1cnJlbnRPYmpba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpbnN0cnVjdGlvbnNbXCJuXCJdID09PSBcIlwiKSB7XG4gICAgICAgICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG4gICAgICAgICAgbmV3T2JqW2tleV0gPSBudWxsYWJsZVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2hvdWxkQ29udmVydFJvb3RPYmogPVxuICAgICAgICAgIHR5cGVvZiBpbnN0cnVjdGlvbnNbXCJyXCJdID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgZnVsbEluc3RydWN0aW9uTWFwW2luc3RydWN0aW9uc1tcInJcIl1dO1xuXG4gICAgICAgIHZhciBzaG91bGRBZGRGcmFnbWVudEZuID0gaW5zdHJ1Y3Rpb25zW1wiZlwiXSA9PT0gXCJcIjtcblxuICAgICAgICB2YXIgc2hvdWxkQ29udmVydEVudW0gPVxuICAgICAgICAgIHR5cGVvZiBpbnN0cnVjdGlvbnNbXCJlXCJdID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgISFjb252ZXJ0ZXJzW2luc3RydWN0aW9uc1tcImVcIl1dO1xuXG4gICAgICAgIHZhciBzaG91bGRDb252ZXJ0VW5pb24gPVxuICAgICAgICAgIHR5cGVvZiBpbnN0cnVjdGlvbnNbXCJ1XCJdID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgISFjb252ZXJ0ZXJzW2luc3RydWN0aW9uc1tcInVcIl1dO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGUgYXJyYXlzXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50T2JqW2tleV0pKSB7XG4gICAgICAgICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG4gICAgICAgICAgbmV3T2JqW2tleV0gPSBjdXJyZW50T2JqW2tleV0ubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxhYmxlVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb252ZXJ0Um9vdE9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJhdmVyc2VyKFxuICAgICAgICAgICAgICAgIHYsXG4gICAgICAgICAgICAgICAgZnVsbEluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgICAgIGNvbnZlcnRlcnMsXG4gICAgICAgICAgICAgICAgbnVsbGFibGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnNbXCJyXCJdXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb252ZXJ0RW51bSkge1xuICAgICAgICAgICAgICByZXR1cm4gY29udmVydGVyc1tpbnN0cnVjdGlvbnNbXCJlXCJdXSh2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBzaG91bGRDb252ZXJ0VW5pb24gJiZcbiAgICAgICAgICAgICAgdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIHYuX190eXBlbmFtZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlzVW5pb24gPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHZhciBuZXdQYXRoID0gbWFrZU5ld1BhdGgoY3VycmVudFBhdGgsIFtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdi5fX3R5cGVuYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgICAgdmFyIHVuaW9uUm9vdEhhc0ZyYWdtZW50ID1cbiAgICAgICAgICAgICAgICAoaW5zdHJ1Y3Rpb25NYXBbZ2V0UGF0aE5hbWUobmV3UGF0aCldIHx8IHt9KS5mID09PSBcIlwiO1xuXG4gICAgICAgICAgICAgIHZhciB0cmF2ZXJzZWRWYWx1ZSA9IHRyYXZlcnNlKFxuICAgICAgICAgICAgICAgIGZ1bGxJbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgICAgIHYsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICAgICAgY29udmVydGVycyxcbiAgICAgICAgICAgICAgICBudWxsYWJsZVZhbHVlLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uUGF0aHMsXG4gICAgICAgICAgICAgICAgdW5pb25Sb290SGFzRnJhZ21lbnRcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICByZXR1cm4gY29udmVydGVyc1tpbnN0cnVjdGlvbnNbXCJ1XCJdXSh0cmF2ZXJzZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRBZGRGcmFnbWVudEZuICYmIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIHZhciBvYmpXaXRoRnJhZ21lbnRGbiA9IE9iamVjdC5hc3NpZ24oe30sIHYpO1xuICAgICAgICAgICAgICBvYmpXaXRoRnJhZ21lbnRGbi5nZXRGcmFnbWVudFJlZnMgPSBnZXRGcmFnbWVudFJlZnMuYmluZChcbiAgICAgICAgICAgICAgICBvYmpXaXRoRnJhZ21lbnRGblxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gb2JqV2l0aEZyYWdtZW50Rm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEhhbmRsZSBub3JtYWwgdmFsdWVzLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciB2ID0gY3VycmVudE9ialtrZXldO1xuXG4gICAgICAgICAgaWYgKHNob3VsZENvbnZlcnRSb290T2JqKSB7XG4gICAgICAgICAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gdHJhdmVyc2VyKFxuICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICBmdWxsSW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICAgIGNvbnZlcnRlcnMsXG4gICAgICAgICAgICAgIG51bGxhYmxlVmFsdWUsXG4gICAgICAgICAgICAgIGluc3RydWN0aW9uc1tcInJcIl1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNob3VsZENvbnZlcnRFbnVtKSB7XG4gICAgICAgICAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gY29udmVydGVyc1tpbnN0cnVjdGlvbnNbXCJlXCJdXSh2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaG91bGRDb252ZXJ0VW5pb24gJiZcbiAgICAgICAgICAgIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICB0eXBlb2Ygdi5fX3R5cGVuYW1lID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpc1VuaW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmFyIG5ld1BhdGggPSBtYWtlTmV3UGF0aChjdXJyZW50UGF0aCwgW1xuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIHYuX190eXBlbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgdmFyIHVuaW9uUm9vdEhhc0ZyYWdtZW50ID1cbiAgICAgICAgICAgICAgKGluc3RydWN0aW9uTWFwW2dldFBhdGhOYW1lKG5ld1BhdGgpXSB8fCB7fSkuZiA9PT0gXCJcIjtcblxuICAgICAgICAgICAgdmFyIHRyYXZlcnNlZFZhbHVlID0gdHJhdmVyc2UoXG4gICAgICAgICAgICAgIGZ1bGxJbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICAgIGNvbnZlcnRlcnMsXG4gICAgICAgICAgICAgIG51bGxhYmxlVmFsdWUsXG4gICAgICAgICAgICAgIGluc3RydWN0aW9uUGF0aHMsXG4gICAgICAgICAgICAgIHVuaW9uUm9vdEhhc0ZyYWdtZW50XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gY29udmVydGVyc1tpbnN0cnVjdGlvbnNbXCJ1XCJdXSh0cmF2ZXJzZWRWYWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNob3VsZEFkZEZyYWdtZW50Rm4gJiYgdHlwZW9mIHYgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuXG4gICAgICAgICAgICB2YXIgb2JqV2l0aEZyYWdtZW50Rm4gPSBPYmplY3QuYXNzaWduKHt9LCB2KTtcblxuICAgICAgICAgICAgb2JqV2l0aEZyYWdtZW50Rm4uZ2V0RnJhZ21lbnRSZWZzID0gZ2V0RnJhZ21lbnRSZWZzLmJpbmQoXG4gICAgICAgICAgICAgIG9ialdpdGhGcmFnbWVudEZuXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IG9ialdpdGhGcmFnbWVudEZuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEZWVwZXJJbnN0cnVjdGlvbnMgJiYgb3JpZ2luYWxWYWx1ZSAhPSBudWxsICYmICFpc1VuaW9uKSB7XG4gICAgICB2YXIgbmV4dE9iaiA9IChuZXdPYmogJiYgbmV3T2JqW2tleV0pIHx8IGN1cnJlbnRPYmpba2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0T2JqID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KG9yaWdpbmFsVmFsdWUpKSB7XG4gICAgICAgIHZhciB0cmF2ZXJzZWRPYmogPSB0cmF2ZXJzZShcbiAgICAgICAgICBmdWxsSW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgdGhpc1BhdGgsXG4gICAgICAgICAgbmV4dE9iaixcbiAgICAgICAgICBpbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICBjb252ZXJ0ZXJzLFxuICAgICAgICAgIG51bGxhYmxlVmFsdWUsXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25QYXRoc1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0cmF2ZXJzZWRPYmogIT09IG5leHRPYmopIHtcbiAgICAgICAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcbiAgICAgICAgICBuZXdPYmpba2V5XSA9IHRyYXZlcnNlZE9iajtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9yaWdpbmFsVmFsdWUpKSB7XG4gICAgICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuICAgICAgICBuZXdPYmpba2V5XSA9IG5leHRPYmoubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPSBudWxsXG4gICAgICAgICAgICA/IHRyYXZlcnNlKFxuICAgICAgICAgICAgICAgIGZ1bGxJbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgICAgICB0aGlzUGF0aCxcbiAgICAgICAgICAgICAgICBvLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgICAgIGNvbnZlcnRlcnMsXG4gICAgICAgICAgICAgICAgbnVsbGFibGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvblBhdGhzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iaiB8fCBjdXJyZW50T2JqO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgYW4gb2JqZWN0IChzbmFwc2hvdCBmcm9tIHRoZSBSZWxheSBzdG9yZSkgYW5kIGFwcGxpZXMgYVxuICogc2V0IG9mIGNvbnZlcnNpb25zIGRlZXBseSBvbiB0aGUgb2JqZWN0IChpbnN0cnVjdGlvbnMgY29taW5nIGZyb20gXCJjb252ZXJ0ZXJzXCItcHJvcCkuXG4gKiBJdCBjb252ZXJ0cyBudWxsYWJsZSB2YWx1ZXMgZWl0aGVyIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBhbmQgaXQgd3JhcHMvdW53cmFwcyBlbnVtc1xuICogYW5kIHVuaW9ucy5cbiAqXG4gKiBJdCBwcmVzZXJ2ZXMgc3RydWN0dXJhbCBpbnRlZ3JpdHkgd2hlcmUgcG9zc2libGUsIGFuZCByZXR1cm4gbmV3IG9iamVjdHMgd2hlcmUgcHJvcGVydGllc1xuICogaGF2ZSBiZWVuIG1vZGlmaWVkLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZXIoXG4gIHJvb3QsXG4gIF9pbnN0cnVjdGlvbk1hcHMsXG4gIGNvbnZlcnRlcnMsXG4gIG51bGxhYmxlVmFsdWUsXG4gIHJvb3RPYmplY3RLZXlcbikge1xuICBpZiAoIXJvb3QpIHtcbiAgICByZXR1cm4gbnVsbGFibGVWYWx1ZTtcbiAgfVxuXG4gIHZhciBpbnN0cnVjdGlvbk1hcHMgPSBfaW5zdHJ1Y3Rpb25NYXBzIHx8IHt9O1xuICB2YXIgaW5zdHJ1Y3Rpb25NYXAgPSBpbnN0cnVjdGlvbk1hcHNbcm9vdE9iamVjdEtleSB8fCBcIl9fcm9vdFwiXTtcblxuICAvLyBObyBpbnN0cnVjdGlvbnNcbiAgaWYgKCFpbnN0cnVjdGlvbk1hcCkge1xuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgdmFyIGluc3RydWN0aW9uUGF0aHMgPSBPYmplY3Qua2V5cyhpbnN0cnVjdGlvbk1hcCk7XG5cbiAgLy8gTm90aGluZyB0byBjb252ZXJ0LCBiYWlsIGVhcmx5XG4gIGlmIChpbnN0cnVjdGlvblBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgLy8gV2UnbGwgYWRkIGEgZ2V0RnJhZ21lbnRSZWZzIGZ1bmN0aW9uIHRvIHRoZSByb290IGlmIG5lZWRlZCBoZXJlLlxuICAvLyBnZXRGcmFnbWVudFJlZnMgaXMgY3VycmVudGx5IHRoZSBvbmx5IHRoaW5nIHRoYXQncyBwb3NzaWJsZSB0byBhZGRcbiAgLy8gdG8gdGhlIHJvb3QuXG4gIHZhciBmcmFnbWVudHNPblJvb3QgPSAoaW5zdHJ1Y3Rpb25NYXBbXCJcIl0gfHwge30pLmYgPT09IFwiXCI7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocm9vdCkpIHtcbiAgICByZXR1cm4gcm9vdC5tYXAoZnVuY3Rpb24odikge1xuICAgICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbGFibGVWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHYgPT0gbnVsbFxuICAgICAgICA/IG51bGxhYmxlVmFsdWVcbiAgICAgICAgOiB0cmF2ZXJzZShcbiAgICAgICAgICAgIGluc3RydWN0aW9uTWFwcyxcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgdixcbiAgICAgICAgICAgIGluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgY29udmVydGVycyxcbiAgICAgICAgICAgIG51bGxhYmxlVmFsdWUsXG4gICAgICAgICAgICBpbnN0cnVjdGlvblBhdGhzLFxuICAgICAgICAgICAgZnJhZ21lbnRzT25Sb290XG4gICAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCByb290KTtcblxuICB2YXIgdiA9IHRyYXZlcnNlKFxuICAgIGluc3RydWN0aW9uTWFwcyxcbiAgICBbXSxcbiAgICBuZXdPYmosXG4gICAgaW5zdHJ1Y3Rpb25NYXAsXG4gICAgY29udmVydGVycyxcbiAgICBudWxsYWJsZVZhbHVlLFxuICAgIGluc3RydWN0aW9uUGF0aHMsXG4gICAgZnJhZ21lbnRzT25Sb290XG4gICk7XG5cbiAgcmV0dXJuIHY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyB0cmF2ZXJzZXIgfTtcbiIsIlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIENhdGVnb3J5TGlzdCROZXh0anNEZWZhdWx0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhdGVnb3J5TGlzdC5icy5qc1wiO1xuXG5mdW5jdGlvbiBJbmRleChQcm9wcykge1xuICB2YXIgZmFsbGJhY2sgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJMb2FkaW5nIC4uLlwiKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwicC04XCJcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuU3VzcGVuc2UsIHtcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KENhdGVnb3J5TGlzdCROZXh0anNEZWZhdWx0Lm1ha2UsIHsgfSksXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjazogZmFsbGJhY2tcbiAgICAgICAgICAgICAgICB9KSk7XG59XG5cbnZhciBtYWtlID0gSW5kZXg7XG5cbnZhciAkJGRlZmF1bHQgPSBJbmRleDtcblxuZXhwb3J0IHtcbiAgbWFrZSAsXG4gICQkZGVmYXVsdCAsXG4gICQkZGVmYXVsdCBhcyBkZWZhdWx0LFxuICBcbn1cbi8qIHJlYWN0IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheS9ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheS9saWIvcmVsYXktZXhwZXJpbWVudGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbGF5LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=