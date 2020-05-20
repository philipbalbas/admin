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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./common/__generated__/GetCategoryQuery_graphql.bs.js":
/*!*************************************************************!*\
  !*** ./common/__generated__/GetCategoryQuery_graphql.bs.js ***!
  \*************************************************************/
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


function makeRefetchVariables(id, param) {
  return {
    id: id
  };
}

var Types = {
  makeRefetchVariables: makeRefetchVariables
};
var responseConverter = {
  "__root": {
    "getCategory": {
      "n": ""
    },
    "getCategory_modules": {
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

function makeVariables(id) {
  return {
    id: id
  };
}

var Utils = {
  makeVariables: makeVariables
};

var node = function () {
  var v0 = [{
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }],
      v1 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
      v2 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
      v3 = [{
    "alias": null,
    "args": [{
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
    }],
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "getCategory",
    "plural": false,
    "selections": [v1
    /*: any*/
    , v2
    /*: any*/
    , {
      "alias": null,
      "args": null,
      "concreteType": "Module",
      "kind": "LinkedField",
      "name": "modules",
      "plural": true,
      "selections": [v1
      /*: any*/
      , v2
      /*: any*/
      , {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "storageKey": null
  }];
  return {
    "fragment": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Fragment",
      "metadata": null,
      "name": "GetCategoryQuery",
      "selections": v3
      /*: any*/
      ,
      "type": "RootQueryType"
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Operation",
      "name": "GetCategoryQuery",
      "selections": v3
      /*: any*/

    },
    "params": {
      "id": null,
      "metadata": {},
      "name": "GetCategoryQuery",
      "operationKind": "query",
      "text": "query GetCategoryQuery(\n  $id: ID!\n) {\n  getCategory(id: $id) {\n    id\n    name\n    modules {\n      id\n      name\n      description\n    }\n  }\n}\n"
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

/***/ "./components/GetCategory.bs.js":
/*!**************************************!*\
  !*** ./components/GetCategory.bs.js ***!
  \**************************************/
/*! exports provided: Query, make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reason-relay/src/ReasonRelay.bs.js */ "./node_modules/reason-relay/src/ReasonRelay.bs.js");
/* harmony import */ var _common_generated_GetCategoryQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/__generated__/GetCategoryQuery_graphql.bs.js */ "./common/__generated__/GetCategoryQuery_graphql.bs.js");






var convertResponse = _common_generated_GetCategoryQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__["Internal"].convertResponse;
var convertVariables = _common_generated_GetCategoryQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__["Internal"].convertVariables;
var UseQuery = reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_4__["MakeUseQuery"]({
  query: _common_generated_GetCategoryQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__["node"],
  convertResponse: convertResponse,
  convertVariables: convertVariables
});
var use = UseQuery.use;
var Query_makeVariables = _common_generated_GetCategoryQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__["Utils"].makeVariables;
var Query_fetch = UseQuery.$$fetch;
var Query_fetchPromised = UseQuery.fetchPromised;
var Query_preload = UseQuery.preload;
var Query_usePreloaded = UseQuery.usePreloaded;
var Query = {
  Operation: undefined,
  makeVariables: Query_makeVariables,
  Types: undefined,
  UseQuery: UseQuery,
  use: use,
  $$fetch: Query_fetch,
  fetchPromised: Query_fetchPromised,
  preload: Query_preload,
  usePreloaded: Query_usePreloaded
};

function GetCategory(Props) {
  var idOpt = Props.id;
  var id = idOpt !== undefined ? idOpt : "";

  var queryData = bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_1__["_6"](use, {
    id: id
  }, undefined, undefined, undefined, undefined, undefined);

  var category = queryData.getCategory;
  var content;

  if (category !== undefined) {
    var mods = category.modules;
    var dataSource = mods !== undefined ? mods : [];
    var columns = [{
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: function (text, row, param) {
        var moduleId = row.id;
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/[categoryId]/modules/[moduleId]",
          as: "/" + (String(id) + ("/modules/" + (String(moduleId) + ""))),
          children: react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", undefined, text)
        });
      }
    }, {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: undefined
    }];
    content = react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", undefined, category.name, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", undefined, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Table"], {
      columns: columns,
      dataSource: dataSource,
      pagination: false
    })));
  } else {
    content = null;
  }

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], undefined, content);
}

var make = GetCategory;

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

/***/ "./pages/[categoryId].js":
/*!*******************************!*\
  !*** ./pages/[categoryId].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_bs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.bs */ "./pages/category.bs.js");
// This file is used as a filename shim for the actual
// App.re Reason component

/* harmony default export */ __webpack_exports__["default"] = (_category_bs__WEBPACK_IMPORTED_MODULE_0__["make"]);

/***/ }),

/***/ "./pages/category.bs.js":
/*!******************************!*\
  !*** ./pages/category.bs.js ***!
  \******************************/
/*! exports provided: make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GetCategory_bs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GetCategory.bs.js */ "./components/GetCategory.bs.js");




function Category(Props) {
  var router = next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]();
  var id = router.query.categoryId;
  var fallback = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", undefined, "Loading...");
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", undefined, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    children: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_GetCategory_bs_js__WEBPACK_IMPORTED_MODULE_2__["make"], {
      id: id
    }),
    fallback: fallback
  }));
}

var make = Category;

/* react Not a pure module */

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/[categoryId].js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Yves/Projects/Concenix/AdminPanel/pages/[categoryId].js */"./pages/[categoryId].js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21tb24vX19nZW5lcmF0ZWRfXy9HZXRDYXRlZ29yeVF1ZXJ5X2dyYXBocWwuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZXRDYXRlZ29yeS5icy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9qc19leGNlcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb2JqLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb3B0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2N1cnJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhc29uLXByb21pc2Uvc3JjL2pzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYXNvbi1yZWxheS9zcmMvUmVhc29uUmVsYXkuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYXNvbi1yZWxheS9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW2NhdGVnb3J5SWRdLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NhdGVnb3J5LmJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlbGF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVsYXkvaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWxheS9saWIvcmVsYXktZXhwZXJpbWVudGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsYXktcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIm1ha2VSZWZldGNoVmFyaWFibGVzIiwiaWQiLCJwYXJhbSIsIlR5cGVzIiwicmVzcG9uc2VDb252ZXJ0ZXIiLCJjb252ZXJ0UmVzcG9uc2UiLCJ2IiwiUmVhc29uUmVsYXkiLCJ1bmRlZmluZWQiLCJ2YXJpYWJsZXNDb252ZXJ0ZXIiLCJjb252ZXJ0VmFyaWFibGVzIiwiSW50ZXJuYWwiLCJyZXNwb25zZUNvbnZlcnRlck1hcCIsInZhcmlhYmxlc0NvbnZlcnRlck1hcCIsIm1ha2VWYXJpYWJsZXMiLCJVdGlscyIsIm5vZGUiLCJ2MCIsInYxIiwidjIiLCJ2MyIsIlByZWxvYWQiLCJxdWVyeSIsInByZWxvYWQiLCJHZXRDYXRlZ29yeVF1ZXJ5X2dyYXBocWwkTmV4dGpzRGVmYXVsdCIsIlVzZVF1ZXJ5IiwidXNlIiwiUXVlcnlfbWFrZVZhcmlhYmxlcyIsIlF1ZXJ5X2ZldGNoIiwiJCRmZXRjaCIsIlF1ZXJ5X2ZldGNoUHJvbWlzZWQiLCJmZXRjaFByb21pc2VkIiwiUXVlcnlfcHJlbG9hZCIsIlF1ZXJ5X3VzZVByZWxvYWRlZCIsInVzZVByZWxvYWRlZCIsIlF1ZXJ5IiwiT3BlcmF0aW9uIiwiR2V0Q2F0ZWdvcnkiLCJQcm9wcyIsImlkT3B0IiwicXVlcnlEYXRhIiwiQ3VycnkiLCJjYXRlZ29yeSIsImdldENhdGVnb3J5IiwiY29udGVudCIsIm1vZHMiLCJtb2R1bGVzIiwiZGF0YVNvdXJjZSIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsInRleHQiLCJyb3ciLCJtb2R1bGVJZCIsIlJlYWN0IiwiTGluayIsImhyZWYiLCJhcyIsIlN0cmluZyIsImNoaWxkcmVuIiwibmFtZSIsIkFudGQiLCJwYWdpbmF0aW9uIiwibWFrZSIsIm1ha2VfZmxvYXQiLCJDYW1sX2FycmF5IiwiRmxvYXRhcnJheSIsImluaXQiLCJsIiwiZiIsIkNhbWxfYnVpbHRpbl9leGNlcHRpb25zIiwicmVzIiwiaSIsIm1ha2VfbWF0cml4Iiwic3giLCJzeSIsIngiLCJjb3B5IiwiYSIsImxlbmd0aCIsImFwcGVuZCIsImExIiwiYTIiLCJsMSIsImNvbmNhdCIsInN1YiIsIm9mcyIsImxlbiIsImZpbGwiLCJpX2ZpbmlzaCIsImJsaXQiLCJvZnMxIiwib2ZzMiIsIml0ZXIiLCJpdGVyMiIsImIiLCJtYXAiLCJyIiwibWFwMiIsImxhIiwibGIiLCJpdGVyaSIsIm1hcGkiLCJ0b19saXN0IiwiX2kiLCJfcmVzIiwibGlzdF9sZW5ndGgiLCJfYWNjdSIsIl9wYXJhbSIsImFjY3UiLCJvZl9saXN0IiwiZm9sZF9sZWZ0IiwiZm9sZF9yaWdodCIsImV4aXN0cyIsInAiLCJuIiwiZm9yX2FsbCIsIm1lbSIsIkNhbWxfb2JqIiwibWVtcSIsIkJvdHRvbSIsIkNhbWxfZXhjZXB0aW9ucyIsInNvcnQiLCJjbXAiLCJtYXhzb24iLCJpMzEiLCJ0cmlja2xlIiwiZSIsImkkMSIsImoiLCJyYXdfaSIsImkkMiIsIkNhbWxfanNfZXhjZXB0aW9ucyIsImJ1YmJsZSIsInRyaWNrbGV1cCIsImZhdGhlciIsImUkMSIsInN0YWJsZV9zb3J0IiwibWVyZ2UiLCJzcmMxb2ZzIiwic3JjMWxlbiIsInNyYzIiLCJzcmMyb2ZzIiwic3JjMmxlbiIsImRzdCIsImRzdG9mcyIsInNyYzFyIiwic3JjMnIiLCJfaTEiLCJfczEiLCJfaTIiLCJfczIiLCJfZCIsImQiLCJzMiIsImkyIiwiczEiLCJpMSIsImkxJDEiLCJpMiQxIiwiaXNvcnR0byIsInNyY29mcyIsInNvcnR0byIsImwyIiwidCIsImNyZWF0ZV9tYXRyaXgiLCJmYXN0X3NvcnQiLCJfXyIsInRhZyIsImJsb2NrIiwiY2FtbF9hcnJheV9zdWIiLCJvZmZzZXQiLCJyZXN1bHQiLCJBcnJheSIsIl9hY2MiLCJfbCIsImFjYyIsImFyciIsImwkMSIsImsiLCJjYW1sX2FycmF5X2NvbmNhdCIsImNhbWxfYXJyYXlfc2V0IiwieHMiLCJpbmRleCIsIm5ld3ZhbCIsImNhbWxfYXJyYXlfZ2V0IiwiY2FtbF9tYWtlX3ZlY3QiLCJjYW1sX21ha2VfZmxvYXRfdmVjdCIsImNhbWxfYXJyYXlfYmxpdCIsImokMSIsImNhbWxfYXJyYXlfZHVwIiwicHJpbSIsInNsaWNlIiwib3V0X29mX21lbW9yeSIsInN5c19lcnJvciIsImZhaWx1cmUiLCJpbnZhbGlkX2FyZ3VtZW50IiwiZW5kX29mX2ZpbGUiLCJkaXZpc2lvbl9ieV96ZXJvIiwibm90X2ZvdW5kIiwibWF0Y2hfZmFpbHVyZSIsInN0YWNrX292ZXJmbG93Iiwic3lzX2Jsb2NrZWRfaW8iLCJhc3NlcnRfZmFpbHVyZSIsInVuZGVmaW5lZF9yZWN1cnNpdmVfbW9kdWxlIiwiY29udGVudHMiLCJjYW1sX3NldF9vb19pZCIsImNhbWxfZnJlc2hfb29faWQiLCJjcmVhdGUiLCJzdHIiLCJ2XzAwMSIsImNhbWxfaXNfZXh0ZW5zaW9uIiwic2xvdCIsIiQkRXJyb3IiLCJpbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24iLCJjYW1sX2FzX2pzX2V4biIsImV4biIsIkNhbWxfb3B0aW9uIiwiZm9yX2luIiwibyIsImZvbyIsImNhbWxfb2JqX2Jsb2NrIiwic2l6ZSIsImNhbWxfb2JqX2R1cCIsImlzQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJjYW1sX29ial90cnVuY2F0ZSIsIm5ld19zaXplIiwiY2FtbF9sYXp5X21ha2VfZm9yd2FyZCIsIkJsb2NrIiwiY2FtbF9sYXp5X21ha2UiLCJmbiIsImNhbWxfdXBkYXRlX2R1bW15IiwieSIsImNhbWxfY29tcGFyZSIsIl9hIiwiX2IiLCJhX3R5cGUiLCJiX3R5cGUiLCJDYW1sX3ByaW1pdGl2ZSIsInRhZ19hIiwidGFnX2IiLCJsZW5fYSIsImxlbl9iIiwiRGF0ZSIsIm1pbl9rZXlfbGhzIiwibWluX2tleV9yaHMiLCJkb19rZXkiLCJtaW5fa2V5IiwiaGFzT3duUHJvcGVydHkiLCJtayIsInBhcnRpYWxfYXJnIiwiZG9fa2V5X2EiLCJwYXJ0aWFsX2FyZyQxIiwiZG9fa2V5X2IiLCJtYXRjaCIsIm1hdGNoJDEiLCJfaSQxIiwicmVzJDEiLCJfaSQyIiwicmVzJDIiLCJjYW1sX2VxdWFsIiwiY2FtbF9lcXVhbF9udWxsIiwiY2FtbF9lcXVhbF91bmRlZmluZWQiLCJjYW1sX2VxdWFsX251bGxhYmxlIiwiY2FtbF9ub3RlcXVhbCIsImNhbWxfZ3JlYXRlcmVxdWFsIiwiY2FtbF9ncmVhdGVydGhhbiIsImNhbWxfbGVzc2VxdWFsIiwiY2FtbF9sZXNzdGhhbiIsImNhbWxfbWluIiwiY2FtbF9tYXgiLCJjYW1sX29ial9zZXRfdGFnIiwicHJpbSQxIiwidW5kZWZpbmVkSGVhZGVyIiwic29tZSIsIm5pZCIsImJsb2NrJDEiLCJudWxsYWJsZV90b19vcHQiLCJ1bmRlZmluZWRfdG9fb3B0IiwibnVsbF90b19vcHQiLCJ2YWxGcm9tT3B0aW9uIiwiZGVwdGgiLCJvcHRpb25fZ2V0Iiwib3B0aW9uX2dldF91bndyYXAiLCJjYW1sX2ludF9jb21wYXJlIiwiY2FtbF9ib29sX2NvbXBhcmUiLCJjYW1sX2Zsb2F0X2NvbXBhcmUiLCJjYW1sX3N0cmluZ19jb21wYXJlIiwiY2FtbF9ieXRlc19jb21wYXJlX2F1eCIsIl9vZmYiLCJkZWYiLCJvZmYiLCJjYW1sX2J5dGVzX2NvbXBhcmUiLCJsZW4xIiwibGVuMiIsImNhbWxfYnl0ZXNfZXF1YWwiLCJjYW1sX2Jvb2xfbWluIiwiY2FtbF9pbnRfbWluIiwiY2FtbF9mbG9hdF9taW4iLCJjYW1sX3N0cmluZ19taW4iLCJjYW1sX25hdGl2ZWludF9taW4iLCJjYW1sX2ludDMyX21pbiIsImNhbWxfYm9vbF9tYXgiLCJjYW1sX2ludF9tYXgiLCJjYW1sX2Zsb2F0X21heCIsImNhbWxfc3RyaW5nX21heCIsImNhbWxfbmF0aXZlaW50X21heCIsImNhbWxfaW50MzJfbWF4IiwiY2FtbF9uYXRpdmVpbnRfY29tcGFyZSIsImNhbWxfaW50MzJfY29tcGFyZSIsImFwcCIsIl9mIiwiX2FyZ3MiLCJhcmdzIiwiaW5pdF9hcml0eSIsImFyaXR5IiwiYXBwbHkiLCJfMSIsImEwIiwicGFyYW0kMSIsInBhcmFtJDIiLCJwYXJhbSQzIiwicGFyYW0kNCIsInBhcmFtJDUiLCJfXzEiLCJfMiIsIl9fMiIsIl8zIiwiX18zIiwiXzQiLCJhMyIsIl9fNCIsIl81IiwiYTQiLCJfXzUiLCJfNiIsImE1IiwiX182IiwiXzciLCJhNiIsIl9fNyIsIl84IiwiYTciLCJfXzgiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImhhbmRsZXIiLCJwdXNoIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0IiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIm9uVW5oYW5kbGVkRXhjZXB0aW9uIiwiTmVzdGVkUHJvbWlzZSIsIm5lc3RlZCIsInVuYm94IiwiYm94IiwiZXhlY3V0b3IiLCJib3hpbmdSZXNvbHZlIiwicmVzb2x2ZWQiLCJwcm9taXNlIiwiY2FsbGJhY2siLCJleGNlcHRpb24iLCJjYXRjaF8iLCJzYWZlQ2FsbGJhY2siLCJhcnJheVRvTGlzdCIsImFycmF5IiwibGlzdCIsImxpc3RUb0FycmF5IiwibWFwQXJyYXkiLCJwZW5kaW5nIiwicmVzb2x2ZSRwcmltZSIsInJlamVjdCRwcmltZSIsInRhcCIsImFsbEFycmF5IiwicHJvbWlzZXMiLCJyZXN1bHRzIiwiYWxsMiIsInAxIiwicDIiLCJhbGwzIiwicDMiLCJhbGw0IiwicDQiLCJhbGw1IiwicDUiLCJhbGw2IiwicDYiLCJyYWNlIiwidG9SZXN1bHQiLCJmcm9tUmVzdWx0IiwicGVuZGluZyQxIiwicmVzb2x2ZWQkMSIsImZsYXRNYXAiLCJmbGF0TWFwT2siLCJmbGF0TWFwRXJyb3IiLCJtYXBPayIsIm1hcEVycm9yIiwiZ2V0T2siLCJnZXRFcnJvciIsInRhcE9rIiwidGFwRXJyb3IiLCJPcGVyYXRvcnMiLCIkZ3JlYXQkcGlwZSRlcSIsIiRncmVhdCRncmVhdCRlcSIsImZsYXRNYXBTb21lIiwib3B0aW9uIiwibWFwU29tZSIsImdldFNvbWUiLCJ0YXBTb21lIiwiUGlwZUZpcnN0IiwiSnNfcmVzb2x2ZWQiLCJKc19yZWplY3RlZCIsIkpzX2ZsYXRNYXAiLCJKc19jYXRjaCIsIkpzX3JlbGF4IiwiSnNfZnJvbUJzUHJvbWlzZSIsIkpzX3RvQnNQcm9taXNlIiwiSnMiLCJyZWplY3RlZCIsIiQkY2F0Y2giLCJyZWxheCIsImZyb21Cc1Byb21pc2UiLCJ0b0JzUHJvbWlzZSIsImdlbmVyYXRlQ2xpZW50SUQiLCJkYXRhSWQiLCJzdG9yYWdlS2V5IiwiUmVsYXlSdW50aW1lIiwiX2NsZWFuT2JqZWN0RnJvbVVuZGVmaW5lZCIsImNsZWFuT2JqIiwib2JqIiwibmV3T2JqIiwiX2NsZWFuVmFyaWFibGVzIiwiY2xlYW5WYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJfY29udmVydE9iaiIsInByaW0kMiIsInByaW0kMyIsImNvcHlGaWVsZHNGcm9tIiwic291cmNlUmVjb3JkIiwiZ2V0RGF0YUlkIiwiZ2V0RGF0YUlEIiwiZ2V0TGlua2VkUmVjb3JkIiwiJCRhcmd1bWVudHMiLCJnZXRMaW5rZWRSZWNvcmRzIiwicmVjb3JkcyIsIiQkQXJyYXkiLCJnZXRPckNyZWF0ZUxpbmtlZFJlY29yZCIsInR5cGVOYW1lIiwiZ2V0VHlwZSIsIl9nZXRWYWx1ZUFyciIsImdldFZhbHVlIiwiZ2V0VmFsdWVTdHJpbmciLCJnZXRWYWx1ZVN0cmluZ0FycmF5IiwiZ2V0VmFsdWVJbnQiLCJnZXRWYWx1ZUludEFycmF5IiwiZ2V0VmFsdWVGbG9hdCIsImdldFZhbHVlRmxvYXRBcnJheSIsImdldFZhbHVlQm9vbCIsImdldFZhbHVlQm9vbEFycmF5Iiwic2V0TGlua2VkUmVjb3JkIiwicmVjb3JkIiwidW5zZXRMaW5rZWRSZWNvcmQiLCJ1bnNldFZhbHVlIiwic2V0TGlua2VkUmVjb3JkcyIsInVuc2V0TGlua2VkUmVjb3JkcyIsInVuc2V0VmFsdWUkMSIsInNldFZhbHVlIiwic2V0VmFsdWVTdHJpbmciLCJzZXRWYWx1ZVN0cmluZ0FycmF5Iiwic2V0VmFsdWVJbnQiLCJzZXRWYWx1ZUludEFycmF5Iiwic2V0VmFsdWVGbG9hdCIsInNldFZhbHVlRmxvYXRBcnJheSIsInNldFZhbHVlQm9vbCIsInNldFZhbHVlQm9vbEFycmF5IiwiJCRkZWxldGUiLCJnZXRSb290RmllbGQiLCJmaWVsZE5hbWUiLCJnZXRQbHVyYWxSb290RmllbGQiLCJjcmVhdGUkMSIsIiQkZGVsZXRlJDEiLCJnZXQkMSIsImdldENvbm5lY3Rpb24iLCJmaWx0ZXJzIiwiY3JlYXRlRWRnZSIsInN0b3JlIiwiY29ubmVjdGlvbiIsImVkZ2VUeXBlIiwiaW5zZXJ0RWRnZUJlZm9yZSIsIm5ld0VkZ2UiLCJjdXJzb3IiLCJpbnNlcnRFZGdlQWZ0ZXIiLCJkZWxldGVOb2RlIiwibm9kZUlkIiwiQ29ubmVjdGlvbkhhbmRsZXIiLCJzaW5rRm4iLCJzIiwiY29tcGxldGVkIiwiY2xvc2VkIiwiT2JzZXJ2YWJsZSIsIm1ha2VQcm9taXNlQmFzZWQiLCJmZXRjaEZ1bmN0aW9uIiwic3Vic2NyaXB0aW9uRnVuY3Rpb24iLCJtYWtlT2JzZXJ2YWJsZUJhc2VkIiwib2JzZXJ2YWJsZUZ1bmN0aW9uIiwiTmV0d29yayIsIm1ha2UkMSIsIm1ha2UkMiIsInNvdXJjZSIsImdjUmVsZWFzZUJ1ZmZlclNpemUiLCJtYXBSZW5kZXJQb2xpY3kiLCJtYWtlJDMiLCJuZXR3b3JrIiwiZGVmYXVsdFJlbmRlclBvbGljeSIsIlVOU1RBQkxFX0RPX05PVF9VU0VfZ2V0RGF0YUlEIiwiVU5TVEFCTEVfZGVmYXVsdFJlbmRlclBvbGljeSIsInByb3ZpZGVyIiwiUmVhY3RSZWxheSIsIlByb3ZpZGVyIiwiUmVhc29uUmVsYXkkQ29udGV4dCRQcm92aWRlciIsImVudmlyb25tZW50IiwidXNlQ29udmVydGVkVmFsdWUiLCJjb252ZXJ0IiwiRW52aXJvbm1lbnROb3RGb3VuZEluQ29udGV4dCIsInVzZUVudmlyb25tZW50RnJvbUNvbnRleHQiLCJjb250ZXh0IiwibWFwRmV0Y2hQb2xpY3kiLCJNYWtlUHJlbG9hZFF1ZXJ5IiwiQyIsImZldGNoUG9saWN5IiwiZmV0Y2hLZXkiLCJuZXR3b3JrQ2FjaGVDb25maWciLCJIb29rcyIsIk1ha2VVc2VGcmFnbWVudCIsImZyIiwiZnJhZ21lbnRTcGVjIiwiY29udmVydEZyYWdtZW50IiwibWFrZVJlZmV0Y2hhYmxlRm5PcHRzIiwicmVuZGVyUG9saWN5Iiwib25Db21wbGV0ZSIsIlVOU1RBQkxFX3JlbmRlclBvbGljeSIsIm1heWJlRXhuIiwiTWFrZVVzZVJlZmV0Y2hhYmxlRnJhZ21lbnQiLCJ1c2VSZWZldGNoYWJsZSIsInJlZmV0Y2hGbiIsIk1ha2VVc2VQYWdpbmF0aW9uRnJhZ21lbnQiLCJ1c2VCbG9ja2luZ1BhZ2luYXRpb24iLCJsb2FkTmV4dCIsImNvdW50IiwibG9hZFByZXZpb3VzIiwiaGFzTmV4dCIsImhhc1ByZXZpb3VzIiwicmVmZXRjaCIsInVzZVBhZ2luYXRpb24iLCJpc0xvYWRpbmdOZXh0IiwiaXNMb2FkaW5nUHJldmlvdXMiLCJNdXRhdGlvbl9mYWlsZWQiLCJNYWtlVXNlTXV0YXRpb24iLCJSZWxheUV4cGVyaW1lbnRhbCIsIm11dGF0ZSIsIm9uRXJyb3IiLCJvbkNvbXBsZXRlZCIsIm9uVW5zdWJzY3JpYmUiLCJvcHRpbWlzdGljUmVzcG9uc2UiLCJvcHRpbWlzdGljVXBkYXRlciIsInVwZGF0ZXIiLCJlcnJvcnMiLCJ3cmFwUmVzcG9uc2UiLCJNYWtlQ29tbWl0TXV0YXRpb24iLCJjb21taXRNdXRhdGlvbiIsIm11dGF0aW9uIiwiY29tbWl0TXV0YXRpb25Qcm9taXNlZCIsIiQkUHJvbWlzZSIsImNvbW1pdExvY2FsVXBkYXRlIiwiTWFrZVVzZVN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsIm9uTmV4dCIsImRhdGFJZFRvU3RyaW5nIiwibWFrZURhdGFJZCIsIm1ha2VBcmd1bWVudHMiLCJnZW5lcmF0ZVVuaXF1ZUNsaWVudElEIiwiaXNDbGllbnRJRCIsInN0b3JlUm9vdElkIiwic3RvcmVSb290VHlwZSIsIlJlY29yZFByb3h5X2ludmFsaWRhdGVSZWNvcmQiLCJpbnZhbGlkYXRlUmVjb3JkIiwiUmVjb3JkUHJveHkiLCJSZWNvcmRTb3VyY2VTZWxlY3RvclByb3h5X2dldFJvb3QiLCJnZXRSb290IiwiUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eV9pbnZhbGlkYXRlU3RvcmUiLCJpbnZhbGlkYXRlU3RvcmUiLCJSZWNvcmRTb3VyY2VTZWxlY3RvclByb3h5IiwiUmVjb3JkU291cmNlUHJveHlfZ2V0Um9vdCIsIlJlY29yZFNvdXJjZVByb3h5X2ludmFsaWRhdGVTdG9yZSIsIlJlY29yZFNvdXJjZVByb3h5IiwiUmVjb3JkU291cmNlX3RvSlNPTiIsInRvSlNPTiIsIlJlY29yZFNvdXJjZSIsIlN0b3JlX2dldFNvdXJjZSIsImdldFNvdXJjZSIsIlN0b3JlIiwiRW52aXJvbm1lbnRfZ2V0U3RvcmUiLCJnZXRTdG9yZSIsIkVudmlyb25tZW50IiwiRGlzcG9zYWJsZSIsImRpc3Bvc2UiLCJNYWtlVXNlUXVlcnkiLCJmdW5hcmciLCJ0b2tlbiIsIm9uUmVzdWx0IiwiQ29udGV4dF9Qcm92aWRlciIsIm1ha2VQcm9wcyIsInRtcCIsIkNvbnRleHQiLCJmZXRjaFF1ZXJ5IiwiZ2V0RnJhZ21lbnRSZWZzIiwiZ2V0TmV3T2JqIiwibWF5YmVOZXdPYmoiLCJjdXJyZW50T2JqIiwiZ2V0UGF0aE5hbWUiLCJtYWtlTmV3UGF0aCIsImN1cnJlbnRQYXRoIiwibmV3S2V5cyIsInRyYXZlcnNlIiwiZnVsbEluc3RydWN0aW9uTWFwIiwiaW5zdHJ1Y3Rpb25NYXAiLCJjb252ZXJ0ZXJzIiwibnVsbGFibGVWYWx1ZSIsImluc3RydWN0aW9uUGF0aHMiLCJhZGRGcmFnbWVudE9uUm9vdCIsImJpbmQiLCJpc1VuaW9uIiwib3JpZ2luYWxWYWx1ZSIsInRoaXNQYXRoIiwiaW5zdHJ1Y3Rpb25zIiwiaGFzRGVlcGVySW5zdHJ1Y3Rpb25zIiwic2hvdWxkQ29udmVydFJvb3RPYmoiLCJzaG91bGRBZGRGcmFnbWVudEZuIiwic2hvdWxkQ29udmVydEVudW0iLCJzaG91bGRDb252ZXJ0VW5pb24iLCJ0cmF2ZXJzZXIiLCJfX3R5cGVuYW1lIiwibmV3UGF0aCIsInRvTG93ZXJDYXNlIiwidW5pb25Sb290SGFzRnJhZ21lbnQiLCJ0cmF2ZXJzZWRWYWx1ZSIsIm9ialdpdGhGcmFnbWVudEZuIiwibmV4dE9iaiIsInRyYXZlcnNlZE9iaiIsInJvb3QiLCJfaW5zdHJ1Y3Rpb25NYXBzIiwicm9vdE9iamVjdEtleSIsImluc3RydWN0aW9uTWFwcyIsImZyYWdtZW50c09uUm9vdCIsIm1vZHVsZSIsIkNhdGVnb3J5IiwiY2F0ZWdvcnlJZCIsImZhbGxiYWNrIiwiR2V0Q2F0ZWdvcnkkTmV4dGpzRGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7UUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVN5NEIsUUFBVCxDQUFrQnA2QixLQUFsQixFQUF5QjtBQUN2QixNQUFJd2IsTUFBTSxHQUFHTCxxREFBQSxFQUFiO0FBQ0EsTUFBSXhkLEVBQUUsR0FBRzZkLE1BQU0sQ0FBQ3hjLEtBQVAsQ0FBYXE3QixVQUF0QjtBQUNBLE1BQUlDLFFBQVEsR0FBR3A1QixtREFBQSxDQUFvQixLQUFwQixFQUEyQmhELFNBQTNCLEVBQXNDLFlBQXRDLENBQWY7QUFDQSxTQUFPZ0QsbURBQUEsQ0FBb0IsS0FBcEIsRUFBMkJoRCxTQUEzQixFQUFzQ2dELG1EQUFBLENBQW9CQSw4Q0FBcEIsRUFBb0M7QUFDakVLLFlBQVEsRUFBRUwsbURBQUEsQ0FBb0JxNUIsa0VBQXBCLEVBQW9EO0FBQ3hENThCLFFBQUUsRUFBRUE7QUFEb0QsS0FBcEQsQ0FEdUQ7QUFJakUyOEIsWUFBUSxFQUFFQTtBQUp1RCxHQUFwQyxDQUF0QyxDQUFQO0FBTUQ7O0FBRUQsSUFBSTM0QixJQUFJLEdBQUd5NEIsUUFBWDtBQUVBO0FBSUEsNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9bY2F0ZWdvcnlJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiXG5cbmltcG9ydCAqIGFzIFJlYXNvblJlbGF5IGZyb20gXCJyZWFzb24tcmVsYXkvc3JjL1JlYXNvblJlbGF5LmJzLmpzXCI7XG5cbmZ1bmN0aW9uIG1ha2VSZWZldGNoVmFyaWFibGVzKGlkLCBwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xufVxuXG52YXIgVHlwZXMgPSB7XG4gIG1ha2VSZWZldGNoVmFyaWFibGVzOiBtYWtlUmVmZXRjaFZhcmlhYmxlc1xufTtcblxudmFyIHJlc3BvbnNlQ29udmVydGVyID0gKHtcIl9fcm9vdFwiOntcImdldENhdGVnb3J5XCI6e1wiblwiOlwiXCJ9LFwiZ2V0Q2F0ZWdvcnlfbW9kdWxlc1wiOntcIm5cIjpcIlwifX19KTtcblxuZnVuY3Rpb24gY29udmVydFJlc3BvbnNlKHYpIHtcbiAgcmV0dXJuIFJlYXNvblJlbGF5Ll9jb252ZXJ0T2JqKHYsIHJlc3BvbnNlQ29udmVydGVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG59XG5cbnZhciB2YXJpYWJsZXNDb252ZXJ0ZXIgPSAoe30pO1xuXG5mdW5jdGlvbiBjb252ZXJ0VmFyaWFibGVzKHYpIHtcbiAgcmV0dXJuIFJlYXNvblJlbGF5Ll9jb252ZXJ0T2JqKHYsIHZhcmlhYmxlc0NvbnZlcnRlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xufVxuXG52YXIgSW50ZXJuYWwgPSB7XG4gIHJlc3BvbnNlQ29udmVydGVyOiByZXNwb25zZUNvbnZlcnRlcixcbiAgcmVzcG9uc2VDb252ZXJ0ZXJNYXA6IHVuZGVmaW5lZCxcbiAgY29udmVydFJlc3BvbnNlOiBjb252ZXJ0UmVzcG9uc2UsXG4gIHZhcmlhYmxlc0NvbnZlcnRlcjogdmFyaWFibGVzQ29udmVydGVyLFxuICB2YXJpYWJsZXNDb252ZXJ0ZXJNYXA6IHVuZGVmaW5lZCxcbiAgY29udmVydFZhcmlhYmxlczogY29udmVydFZhcmlhYmxlc1xufTtcblxuZnVuY3Rpb24gbWFrZVZhcmlhYmxlcyhpZCkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xufVxuXG52YXIgVXRpbHMgPSB7XG4gIG1ha2VWYXJpYWJsZXM6IG1ha2VWYXJpYWJsZXNcbn07XG5cbnZhciBub2RlID0gKChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCxcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICBcInR5cGVcIjogXCJJRCFcIlxuICB9XG5dLFxudjEgPSB7XG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjIgPSB7XG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IFtcbiAge1xuICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICBcImFyZ3NcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlkXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQ2F0ZWdvcnlcIixcbiAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgIFwibmFtZVwiOiBcImdldENhdGVnb3J5XCIsXG4gICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICh2MS8qOiBhbnkqLyksXG4gICAgICAodjIvKjogYW55Ki8pLFxuICAgICAge1xuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk1vZHVsZVwiLFxuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJtb2R1bGVzXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgKHYxLyo6IGFueSovKSxcbiAgICAgICAgICAodjIvKjogYW55Ki8pLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH1cbiAgICBdLFxuICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogKHYwLyo6IGFueSovKSxcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcIm5hbWVcIjogXCJHZXRDYXRlZ29yeVF1ZXJ5XCIsXG4gICAgXCJzZWxlY3Rpb25zXCI6ICh2My8qOiBhbnkqLyksXG4gICAgXCJ0eXBlXCI6IFwiUm9vdFF1ZXJ5VHlwZVwiXG4gIH0sXG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiAodjAvKjogYW55Ki8pLFxuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIkdldENhdGVnb3J5UXVlcnlcIixcbiAgICBcInNlbGVjdGlvbnNcIjogKHYzLyo6IGFueSovKVxuICB9LFxuICBcInBhcmFtc1wiOiB7XG4gICAgXCJpZFwiOiBudWxsLFxuICAgIFwibWV0YWRhdGFcIjoge30sXG4gICAgXCJuYW1lXCI6IFwiR2V0Q2F0ZWdvcnlRdWVyeVwiLFxuICAgIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gICAgXCJ0ZXh0XCI6IFwicXVlcnkgR2V0Q2F0ZWdvcnlRdWVyeShcXG4gICRpZDogSUQhXFxuKSB7XFxuICBnZXRDYXRlZ29yeShpZDogJGlkKSB7XFxuICAgIGlkXFxuICAgIG5hbWVcXG4gICAgbW9kdWxlcyB7XFxuICAgICAgaWRcXG4gICAgICBuYW1lXFxuICAgICAgZGVzY3JpcHRpb25cXG4gICAgfVxcbiAgfVxcbn1cXG5cIlxuICB9XG59O1xufSkoKSk7XG5cbnZhciBQcmVsb2FkID0gUmVhc29uUmVsYXkuTWFrZVByZWxvYWRRdWVyeSh7XG4gICAgICBxdWVyeTogbm9kZSxcbiAgICAgIGNvbnZlcnRWYXJpYWJsZXM6IGNvbnZlcnRWYXJpYWJsZXNcbiAgICB9KTtcblxudmFyIHByZWxvYWQgPSBQcmVsb2FkLnByZWxvYWQ7XG5cbmV4cG9ydCB7XG4gIFR5cGVzICxcbiAgSW50ZXJuYWwgLFxuICBVdGlscyAsXG4gIG5vZGUgLFxuICBQcmVsb2FkICxcbiAgcHJlbG9hZCAsXG4gIFxufVxuLyogcmVzcG9uc2VDb252ZXJ0ZXIgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBBbnRkIGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCAqIGFzIFJlYXNvblJlbGF5IGZyb20gXCJyZWFzb24tcmVsYXkvc3JjL1JlYXNvblJlbGF5LmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBHZXRDYXRlZ29yeVF1ZXJ5X2dyYXBocWwkTmV4dGpzRGVmYXVsdCBmcm9tIFwiLi4vY29tbW9uL19fZ2VuZXJhdGVkX18vR2V0Q2F0ZWdvcnlRdWVyeV9ncmFwaHFsLmJzLmpzXCI7XG5cbnZhciBjb252ZXJ0UmVzcG9uc2UgPSBHZXRDYXRlZ29yeVF1ZXJ5X2dyYXBocWwkTmV4dGpzRGVmYXVsdC5JbnRlcm5hbC5jb252ZXJ0UmVzcG9uc2U7XG5cbnZhciBjb252ZXJ0VmFyaWFibGVzID0gR2V0Q2F0ZWdvcnlRdWVyeV9ncmFwaHFsJE5leHRqc0RlZmF1bHQuSW50ZXJuYWwuY29udmVydFZhcmlhYmxlcztcblxudmFyIFVzZVF1ZXJ5ID0gUmVhc29uUmVsYXkuTWFrZVVzZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBHZXRDYXRlZ29yeVF1ZXJ5X2dyYXBocWwkTmV4dGpzRGVmYXVsdC5ub2RlLFxuICAgICAgY29udmVydFJlc3BvbnNlOiBjb252ZXJ0UmVzcG9uc2UsXG4gICAgICBjb252ZXJ0VmFyaWFibGVzOiBjb252ZXJ0VmFyaWFibGVzXG4gICAgfSk7XG5cbnZhciB1c2UgPSBVc2VRdWVyeS51c2U7XG5cbnZhciBRdWVyeV9tYWtlVmFyaWFibGVzID0gR2V0Q2F0ZWdvcnlRdWVyeV9ncmFwaHFsJE5leHRqc0RlZmF1bHQuVXRpbHMubWFrZVZhcmlhYmxlcztcblxudmFyIFF1ZXJ5X2ZldGNoID0gVXNlUXVlcnkuJCRmZXRjaDtcblxudmFyIFF1ZXJ5X2ZldGNoUHJvbWlzZWQgPSBVc2VRdWVyeS5mZXRjaFByb21pc2VkO1xuXG52YXIgUXVlcnlfcHJlbG9hZCA9IFVzZVF1ZXJ5LnByZWxvYWQ7XG5cbnZhciBRdWVyeV91c2VQcmVsb2FkZWQgPSBVc2VRdWVyeS51c2VQcmVsb2FkZWQ7XG5cbnZhciBRdWVyeSA9IHtcbiAgT3BlcmF0aW9uOiB1bmRlZmluZWQsXG4gIG1ha2VWYXJpYWJsZXM6IFF1ZXJ5X21ha2VWYXJpYWJsZXMsXG4gIFR5cGVzOiB1bmRlZmluZWQsXG4gIFVzZVF1ZXJ5OiBVc2VRdWVyeSxcbiAgdXNlOiB1c2UsXG4gICQkZmV0Y2g6IFF1ZXJ5X2ZldGNoLFxuICBmZXRjaFByb21pc2VkOiBRdWVyeV9mZXRjaFByb21pc2VkLFxuICBwcmVsb2FkOiBRdWVyeV9wcmVsb2FkLFxuICB1c2VQcmVsb2FkZWQ6IFF1ZXJ5X3VzZVByZWxvYWRlZFxufTtcblxuZnVuY3Rpb24gR2V0Q2F0ZWdvcnkoUHJvcHMpIHtcbiAgdmFyIGlkT3B0ID0gUHJvcHMuaWQ7XG4gIHZhciBpZCA9IGlkT3B0ICE9PSB1bmRlZmluZWQgPyBpZE9wdCA6IFwiXCI7XG4gIHZhciBxdWVyeURhdGEgPSBDdXJyeS5fNih1c2UsIHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gIHZhciBjYXRlZ29yeSA9IHF1ZXJ5RGF0YS5nZXRDYXRlZ29yeTtcbiAgdmFyIGNvbnRlbnQ7XG4gIGlmIChjYXRlZ29yeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIG1vZHMgPSBjYXRlZ29yeS5tb2R1bGVzO1xuICAgIHZhciBkYXRhU291cmNlID0gbW9kcyAhPT0gdW5kZWZpbmVkID8gbW9kcyA6IFtdO1xuICAgIHZhciBjb2x1bW5zID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJOYW1lXCIsXG4gICAgICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXG4gICAgICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgIHJlbmRlcjogKGZ1bmN0aW9uICh0ZXh0LCByb3csIHBhcmFtKSB7XG4gICAgICAgICAgICB2YXIgbW9kdWxlSWQgPSByb3cuaWQ7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL1tjYXRlZ29yeUlkXS9tb2R1bGVzL1ttb2R1bGVJZF1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzOiBcIi9cIiArIChTdHJpbmcoaWQpICsgKFwiL21vZHVsZXMvXCIgKyAoU3RyaW5nKG1vZHVsZUlkKSArIFwiXCIpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgdW5kZWZpbmVkLCB0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICBkYXRhSW5kZXg6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHJlbmRlcjogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgXTtcbiAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIGNhdGVnb3J5Lm5hbWUsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFudGQuVGFibGUsIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgICAgICAgICAgICBkYXRhU291cmNlOiBkYXRhU291cmNlLFxuICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogZmFsc2VcbiAgICAgICAgICAgICAgICB9KSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnQgPSBudWxsO1xuICB9XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB1bmRlZmluZWQsIGNvbnRlbnQpO1xufVxuXG52YXIgbWFrZSA9IEdldENhdGVnb3J5O1xuXG5leHBvcnQge1xuICBRdWVyeSAsXG4gIG1ha2UgLFxuICBcbn1cbi8qIFVzZVF1ZXJ5IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb2JqIGZyb20gXCIuL2NhbWxfb2JqLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5IGZyb20gXCIuL2NhbWxfYXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2V4Y2VwdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfanNfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2pzX2V4Y2VwdGlvbnMuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbnZhciBtYWtlX2Zsb2F0ID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfZmxvYXRfdmVjdDtcblxudmFyIEZsb2F0YXJyYXkgPSB7IH07XG5cbmZ1bmN0aW9uIGluaXQobCwgZikge1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAobCA8IDApIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIkFycmF5LmluaXRcIlxuICAgICAgICBdO1xuICB9XG4gIHZhciByZXMgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwsIEN1cnJ5Ll8xKGYsIDApKTtcbiAgZm9yKHZhciBpID0gMTsgaSA8IGw7ICsraSl7XG4gICAgcmVzW2ldID0gQ3VycnkuXzEoZiwgaSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbWFrZV9tYXRyaXgoc3gsIHN5LCBpbml0KSB7XG4gIHZhciByZXMgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KHN4LCBbXSk7XG4gIGZvcih2YXIgeCA9IDA7IHggPCBzeDsgKyt4KXtcbiAgICByZXNbeF0gPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KHN5LCBpbml0KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBjb3B5KGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIoYSwgMCwgbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kKGExLCBhMikge1xuICB2YXIgbDEgPSBhMS5sZW5ndGg7XG4gIGlmIChsMSA9PT0gMCkge1xuICAgIHJldHVybiBjb3B5KGEyKTtcbiAgfSBlbHNlIGlmIChhMi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3N1YihhMSwgMCwgbDEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhMS5jb25jYXQoYTIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YihhLCBvZnMsIGxlbikge1xuICBpZiAob2ZzIDwgMCB8fCBsZW4gPCAwIHx8IG9mcyA+IChhLmxlbmd0aCAtIGxlbiB8IDApKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5zdWJcIlxuICAgICAgICBdO1xuICB9XG4gIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc3ViKGEsIG9mcywgbGVuKTtcbn1cblxuZnVuY3Rpb24gZmlsbChhLCBvZnMsIGxlbiwgdikge1xuICBpZiAob2ZzIDwgMCB8fCBsZW4gPCAwIHx8IG9mcyA+IChhLmxlbmd0aCAtIGxlbiB8IDApKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5maWxsXCJcbiAgICAgICAgXTtcbiAgfVxuICBmb3IodmFyIGkgPSBvZnMgLGlfZmluaXNoID0gb2ZzICsgbGVuIHwgMDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGFbaV0gPSB2O1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBibGl0KGExLCBvZnMxLCBhMiwgb2ZzMiwgbGVuKSB7XG4gIGlmIChsZW4gPCAwIHx8IG9mczEgPCAwIHx8IG9mczEgPiAoYTEubGVuZ3RoIC0gbGVuIHwgMCkgfHwgb2ZzMiA8IDAgfHwgb2ZzMiA+IChhMi5sZW5ndGggLSBsZW4gfCAwKSkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiQXJyYXkuYmxpdFwiXG4gICAgICAgIF07XG4gIH1cbiAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9ibGl0KGExLCBvZnMxLCBhMiwgb2ZzMiwgbGVuKTtcbn1cblxuZnVuY3Rpb24gaXRlcihmLCBhKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBDdXJyeS5fMShmLCBhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gaXRlcjIoZiwgYSwgYikge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5pdGVyMjogYXJyYXlzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGhcIlxuICAgICAgICBdO1xuICB9XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBDdXJyeS5fMihmLCBhW2ldLCBiW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbWFwKGYsIGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHIgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwsIEN1cnJ5Ll8xKGYsIGFbMF0pKTtcbiAgZm9yKHZhciBpID0gMTsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IEN1cnJ5Ll8xKGYsIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBtYXAyKGYsIGEsIGIpIHtcbiAgdmFyIGxhID0gYS5sZW5ndGg7XG4gIHZhciBsYiA9IGIubGVuZ3RoO1xuICBpZiAobGEgIT09IGxiKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5tYXAyOiBhcnJheXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aFwiXG4gICAgICAgIF07XG4gIH1cbiAgaWYgKGxhID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChsYSwgQ3VycnkuXzIoZiwgYVswXSwgYlswXSkpO1xuICBmb3IodmFyIGkgPSAxOyBpIDwgbGE7ICsraSl7XG4gICAgcltpXSA9IEN1cnJ5Ll8yKGYsIGFbaV0sIGJbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBpdGVyaShmLCBhKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBDdXJyeS5fMihmLCBpLCBhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbWFwaShmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChsLCBDdXJyeS5fMihmLCAwLCBhWzBdKSk7XG4gIGZvcih2YXIgaSA9IDE7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBDdXJyeS5fMihmLCBpLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gdG9fbGlzdChhKSB7XG4gIHZhciBfaSA9IGEubGVuZ3RoIC0gMSB8IDA7XG4gIHZhciBfcmVzID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIF9yZXMgPSAvKiA6OiAqL1tcbiAgICAgIGFbaV0sXG4gICAgICByZXNcbiAgICBdO1xuICAgIF9pID0gaSAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGlzdF9sZW5ndGgoX2FjY3UsIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9wYXJhbSA9IHBhcmFtWzFdO1xuICAgIF9hY2N1ID0gYWNjdSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2ZfbGlzdChsKSB7XG4gIGlmICghbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgYSA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX3ZlY3QobGlzdF9sZW5ndGgoMCwgbCksIGxbMF0pO1xuICB2YXIgX2kgPSAxO1xuICB2YXIgX3BhcmFtID0gbFsxXTtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBhW2ldID0gcGFyYW1bMF07XG4gICAgX3BhcmFtID0gcGFyYW1bMV07XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkX2xlZnQoZiwgeCwgYSkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gQ3VycnkuXzIoZiwgciwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGZvbGRfcmlnaHQoZiwgYSwgeCkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gQ3VycnkuXzIoZiwgYVtpXSwgcik7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGV4aXN0cyhwLCBhKSB7XG4gIHZhciBuID0gYS5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChDdXJyeS5fMShwLCBhW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yX2FsbChwLCBhKSB7XG4gIHZhciBuID0gYS5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFDdXJyeS5fMShwLCBhW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lbSh4LCBhKSB7XG4gIHZhciBuID0gYS5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChDYW1sX29iai5jYW1sX2VxdWFsKGFbaV0sIHgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZW1xKHgsIGEpIHtcbiAgdmFyIG4gPSBhLmxlbmd0aDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IG4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHggPT09IGFbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbnZhciBCb3R0b20gPSBDYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiQXJyYXkuQm90dG9tXCIpO1xuXG5mdW5jdGlvbiBzb3J0KGNtcCwgYSkge1xuICB2YXIgbWF4c29uID0gZnVuY3Rpb24gKGwsIGkpIHtcbiAgICB2YXIgaTMxID0gKChpICsgaSB8IDApICsgaSB8IDApICsgMSB8IDA7XG4gICAgdmFyIHggPSBpMzE7XG4gICAgaWYgKChpMzEgKyAyIHwgMCkgPCBsKSB7XG4gICAgICBpZiAoQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkzMSksIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaTMxICsgMSB8IDApKSA8IDApIHtcbiAgICAgICAgeCA9IGkzMSArIDEgfCAwO1xuICAgICAgfVxuICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCB4KSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMzEgKyAyIHwgMCkpIDwgMCkge1xuICAgICAgICB4ID0gaTMxICsgMiB8IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKChpMzEgKyAxIHwgMCkgPCBsICYmIEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMzEpLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkzMSArIDEgfCAwKSkgPCAwKSB7XG4gICAgICByZXR1cm4gaTMxICsgMSB8IDA7XG4gICAgfVxuICAgIGlmIChpMzEgPCBsKSB7XG4gICAgICByZXR1cm4gaTMxO1xuICAgIH1cbiAgICB0aHJvdyBbXG4gICAgICAgICAgQm90dG9tLFxuICAgICAgICAgIGlcbiAgICAgICAgXTtcbiAgfTtcbiAgdmFyIHRyaWNrbGUgPSBmdW5jdGlvbiAobCwgaSwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX2kgPSBpO1xuICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICB2YXIgaSQxID0gX2k7XG4gICAgICAgIHZhciBqID0gbWF4c29uKGwsIGkkMSk7XG4gICAgICAgIGlmIChDdXJyeS5fMihjbXAsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaiksIGUpIDw9IDApIHtcbiAgICAgICAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpJDEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgaSQxLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGopKTtcbiAgICAgICAgX2kgPSBqO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAocmF3X2kpe1xuICAgICAgdmFyIGkkMiA9IENhbWxfanNfZXhjZXB0aW9ucy5pbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24ocmF3X2kpO1xuICAgICAgaWYgKGkkMlswXSA9PT0gQm90dG9tKSB7XG4gICAgICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGkkMlsxXSwgZSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBpJDI7XG4gICAgfVxuICB9O1xuICB2YXIgYnViYmxlID0gZnVuY3Rpb24gKGwsIGkpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF9pID0gaTtcbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgdmFyIGkkMSA9IF9pO1xuICAgICAgICB2YXIgaiA9IG1heHNvbihsLCBpJDEpO1xuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGkkMSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBqKSk7XG4gICAgICAgIF9pID0gajtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKHJhd19pKXtcbiAgICAgIHZhciBpJDIgPSBDYW1sX2pzX2V4Y2VwdGlvbnMuaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uKHJhd19pKTtcbiAgICAgIGlmIChpJDJbMF0gPT09IEJvdHRvbSkge1xuICAgICAgICByZXR1cm4gaSQyWzFdO1xuICAgICAgfVxuICAgICAgdGhyb3cgaSQyO1xuICAgIH1cbiAgfTtcbiAgdmFyIHRyaWNrbGV1cCA9IGZ1bmN0aW9uIChfaSwgZSkge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBpID0gX2k7XG4gICAgICB2YXIgZmF0aGVyID0gKGkgLSAxIHwgMCkgLyAzIHwgMDtcbiAgICAgIGlmIChpID09PSBmYXRoZXIpIHtcbiAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5hc3NlcnRfZmFpbHVyZSxcbiAgICAgICAgICAgICAgLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgXCJhcnJheS5tbFwiLFxuICAgICAgICAgICAgICAgIDIzOCxcbiAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF07XG4gICAgICB9XG4gICAgICBpZiAoQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGZhdGhlciksIGUpID49IDApIHtcbiAgICAgICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgaSwgZSk7XG4gICAgICB9XG4gICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGksIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgZmF0aGVyKSk7XG4gICAgICBpZiAoZmF0aGVyIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgMCwgZSk7XG4gICAgICB9XG4gICAgICBfaSA9IGZhdGhlcjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9O1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAoKGwgKyAxIHwgMCkgLyAzIHwgMCkgLSAxIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHRyaWNrbGUobCwgaSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpKSk7XG4gIH1cbiAgZm9yKHZhciBpJDEgPSBsIC0gMSB8IDA7IGkkMSA+PSAyOyAtLWkkMSl7XG4gICAgdmFyIGUgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkkMSk7XG4gICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpJDEsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgMCkpO1xuICAgIHRyaWNrbGV1cChidWJibGUoaSQxLCAwKSwgZSk7XG4gIH1cbiAgaWYgKGwgPD0gMSkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGUkMSA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgMSk7XG4gIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgMSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCAwKSk7XG4gIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIDAsIGUkMSk7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZV9zb3J0KGNtcCwgYSkge1xuICB2YXIgbWVyZ2UgPSBmdW5jdGlvbiAoc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMpIHtcbiAgICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gICAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICAgIHZhciBfaTEgPSBzcmMxb2ZzO1xuICAgIHZhciBfczEgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIHNyYzFvZnMpO1xuICAgIHZhciBfaTIgPSBzcmMyb2ZzO1xuICAgIHZhciBfczIgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KHNyYzIsIHNyYzJvZnMpO1xuICAgIHZhciBfZCA9IGRzdG9mcztcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgZCA9IF9kO1xuICAgICAgdmFyIHMyID0gX3MyO1xuICAgICAgdmFyIGkyID0gX2kyO1xuICAgICAgdmFyIHMxID0gX3MxO1xuICAgICAgdmFyIGkxID0gX2kxO1xuICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgczEsIHMyKSA8PSAwKSB7XG4gICAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoZHN0LCBkLCBzMSk7XG4gICAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgICAgaWYgKGkxJDEgPj0gc3JjMXIpIHtcbiAgICAgICAgICByZXR1cm4gYmxpdChzcmMyLCBpMiwgZHN0LCBkICsgMSB8IDAsIHNyYzJyIC0gaTIgfCAwKTtcbiAgICAgICAgfVxuICAgICAgICBfZCA9IGQgKyAxIHwgMDtcbiAgICAgICAgX3MxID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMSQxKTtcbiAgICAgICAgX2kxID0gaTEkMTtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfVxuICAgICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChkc3QsIGQsIHMyKTtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIGlmIChpMiQxID49IHNyYzJyKSB7XG4gICAgICAgIHJldHVybiBibGl0KGEsIGkxLCBkc3QsIGQgKyAxIHwgMCwgc3JjMXIgLSBpMSB8IDApO1xuICAgICAgfVxuICAgICAgX2QgPSBkICsgMSB8IDA7XG4gICAgICBfczIgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KHNyYzIsIGkyJDEpO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9O1xuICB2YXIgaXNvcnR0byA9IGZ1bmN0aW9uIChzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgICAgdmFyIGUgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIHNyY29mcyArIGkgfCAwKTtcbiAgICAgIHZhciBqID0gKGRzdG9mcyArIGkgfCAwKSAtIDEgfCAwO1xuICAgICAgd2hpbGUoaiA+PSBkc3RvZnMgJiYgQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGRzdCwgaiksIGUpID4gMCkge1xuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGRzdCwgaiArIDEgfCAwLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGRzdCwgaikpO1xuICAgICAgICBqID0gaiAtIDEgfCAwO1xuICAgICAgfTtcbiAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoZHN0LCBqICsgMSB8IDAsIGUpO1xuICAgIH1cbiAgICBcbiAgfTtcbiAgdmFyIHNvcnR0byA9IGZ1bmN0aW9uIChzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pIHtcbiAgICBpZiAobGVuIDw9IDUpIHtcbiAgICAgIHJldHVybiBpc29ydHRvKHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbik7XG4gICAgfVxuICAgIHZhciBsMSA9IGxlbiAvIDIgfCAwO1xuICAgIHZhciBsMiA9IGxlbiAtIGwxIHwgMDtcbiAgICBzb3J0dG8oc3Jjb2ZzICsgbDEgfCAwLCBkc3QsIGRzdG9mcyArIGwxIHwgMCwgbDIpO1xuICAgIHNvcnR0byhzcmNvZnMsIGEsIHNyY29mcyArIGwyIHwgMCwgbDEpO1xuICAgIHJldHVybiBtZXJnZShzcmNvZnMgKyBsMiB8IDAsIGwxLCBkc3QsIGRzdG9mcyArIGwxIHwgMCwgbDIsIGRzdCwgZHN0b2ZzKTtcbiAgfTtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPD0gNSkge1xuICAgIHJldHVybiBpc29ydHRvKDAsIGEsIDAsIGwpO1xuICB9XG4gIHZhciBsMSA9IGwgLyAyIHwgMDtcbiAgdmFyIGwyID0gbCAtIGwxIHwgMDtcbiAgdmFyIHQgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGwyLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIDApKTtcbiAgc29ydHRvKGwxLCB0LCAwLCBsMik7XG4gIHNvcnR0bygwLCBhLCBsMiwgbDEpO1xuICByZXR1cm4gbWVyZ2UobDIsIGwxLCB0LCAwLCBsMiwgYSwgMCk7XG59XG5cbnZhciBjcmVhdGVfbWF0cml4ID0gbWFrZV9tYXRyaXg7XG5cbnZhciBjb25jYXQgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfY29uY2F0O1xuXG52YXIgZmFzdF9zb3J0ID0gc3RhYmxlX3NvcnQ7XG5cbmV4cG9ydCB7XG4gIG1ha2VfZmxvYXQgLFxuICBpbml0ICxcbiAgbWFrZV9tYXRyaXggLFxuICBjcmVhdGVfbWF0cml4ICxcbiAgYXBwZW5kICxcbiAgY29uY2F0ICxcbiAgc3ViICxcbiAgY29weSAsXG4gIGZpbGwgLFxuICBibGl0ICxcbiAgdG9fbGlzdCAsXG4gIG9mX2xpc3QgLFxuICBpdGVyICxcbiAgaXRlcmkgLFxuICBtYXAgLFxuICBtYXBpICxcbiAgZm9sZF9sZWZ0ICxcbiAgZm9sZF9yaWdodCAsXG4gIGl0ZXIyICxcbiAgbWFwMiAsXG4gIGZvcl9hbGwgLFxuICBleGlzdHMgLFxuICBtZW0gLFxuICBtZW1xICxcbiAgc29ydCAsXG4gIHN0YWJsZV9zb3J0ICxcbiAgZmFzdF9zb3J0ICxcbiAgRmxvYXRhcnJheSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIF9fKHRhZywgYmxvY2spIHtcbiAgYmxvY2sudGFnID0gdGFnO1xuICByZXR1cm4gYmxvY2s7XG59XG5cbmV4cG9ydCB7XG4gIF9fICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfc3ViKHgsIG9mZnNldCwgbGVuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIGogPSAwO1xuICB2YXIgaSA9IG9mZnNldDtcbiAgd2hpbGUoaiA8IGxlbikge1xuICAgIHJlc3VsdFtqXSA9IHhbaV07XG4gICAgaiA9IGogKyAxIHwgMDtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBsZW4oX2FjYywgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfbCA9IGxbMV07XG4gICAgX2FjYyA9IGxbMF0ubGVuZ3RoICsgYWNjIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGwoYXJyLCBfaSwgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB4ID0gbFswXTtcbiAgICB2YXIgbCQxID0geC5sZW5ndGg7XG4gICAgdmFyIGsgPSBpO1xuICAgIHZhciBqID0gMDtcbiAgICB3aGlsZShqIDwgbCQxKSB7XG4gICAgICBhcnJba10gPSB4W2pdO1xuICAgICAgayA9IGsgKyAxIHwgMDtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfTtcbiAgICBfbCA9IGxbMV07XG4gICAgX2kgPSBrO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FtbF9hcnJheV9jb25jYXQobCkge1xuICB2YXIgdiA9IGxlbigwLCBsKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh2KTtcbiAgZmlsbChyZXN1bHQsIDAsIGwpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjYW1sX2FycmF5X3NldCh4cywgaW5kZXgsIG5ld3ZhbCkge1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHhzLmxlbmd0aCkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiXG4gICAgICAgIF07XG4gIH1cbiAgeHNbaW5kZXhdID0gbmV3dmFsO1xuICBcbn1cblxuZnVuY3Rpb24gY2FtbF9hcnJheV9nZXQoeHMsIGluZGV4KSB7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0geHMubGVuZ3RoKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJpbmRleCBvdXQgb2YgYm91bmRzXCJcbiAgICAgICAgXTtcbiAgfVxuICByZXR1cm4geHNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBjYW1sX21ha2VfdmVjdChsZW4sIGluaXQpIHtcbiAgdmFyIGIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBiW2ldID0gaW5pdDtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gY2FtbF9tYWtlX2Zsb2F0X3ZlY3QobGVuKSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IDA7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfYmxpdChhMSwgaTEsIGEyLCBpMiwgbGVuKSB7XG4gIGlmIChpMiA8PSBpMSkge1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBsZW47ICsrail7XG4gICAgICBhMltqICsgaTIgfCAwXSA9IGExW2ogKyBpMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gbGVuIC0gMSB8IDA7IGokMSA+PSAwOyAtLWokMSl7XG4gICAgYTJbaiQxICsgaTIgfCAwXSA9IGExW2okMSArIGkxIHwgMF07XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfZHVwKHByaW0pIHtcbiAgcmV0dXJuIHByaW0uc2xpY2UoMCk7XG59XG5cbmV4cG9ydCB7XG4gIGNhbWxfYXJyYXlfZHVwICxcbiAgY2FtbF9hcnJheV9zdWIgLFxuICBjYW1sX2FycmF5X2NvbmNhdCAsXG4gIGNhbWxfbWFrZV92ZWN0ICxcbiAgY2FtbF9tYWtlX2Zsb2F0X3ZlY3QgLFxuICBjYW1sX2FycmF5X2JsaXQgLFxuICBjYW1sX2FycmF5X2dldCAsXG4gIGNhbWxfYXJyYXlfc2V0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxudmFyIG91dF9vZl9tZW1vcnkgPSAvKiB0dXBsZSAqL1tcbiAgXCJPdXRfb2ZfbWVtb3J5XCIsXG4gIDBcbl07XG5cbnZhciBzeXNfZXJyb3IgPSAvKiB0dXBsZSAqL1tcbiAgXCJTeXNfZXJyb3JcIixcbiAgLTFcbl07XG5cbnZhciBmYWlsdXJlID0gLyogdHVwbGUgKi9bXG4gIFwiRmFpbHVyZVwiLFxuICAtMlxuXTtcblxudmFyIGludmFsaWRfYXJndW1lbnQgPSAvKiB0dXBsZSAqL1tcbiAgXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gIC0zXG5dO1xuXG52YXIgZW5kX29mX2ZpbGUgPSAvKiB0dXBsZSAqL1tcbiAgXCJFbmRfb2ZfZmlsZVwiLFxuICAtNFxuXTtcblxudmFyIGRpdmlzaW9uX2J5X3plcm8gPSAvKiB0dXBsZSAqL1tcbiAgXCJEaXZpc2lvbl9ieV96ZXJvXCIsXG4gIC01XG5dO1xuXG52YXIgbm90X2ZvdW5kID0gLyogdHVwbGUgKi9bXG4gIFwiTm90X2ZvdW5kXCIsXG4gIC02XG5dO1xuXG52YXIgbWF0Y2hfZmFpbHVyZSA9IC8qIHR1cGxlICovW1xuICBcIk1hdGNoX2ZhaWx1cmVcIixcbiAgLTdcbl07XG5cbnZhciBzdGFja19vdmVyZmxvdyA9IC8qIHR1cGxlICovW1xuICBcIlN0YWNrX292ZXJmbG93XCIsXG4gIC04XG5dO1xuXG52YXIgc3lzX2Jsb2NrZWRfaW8gPSAvKiB0dXBsZSAqL1tcbiAgXCJTeXNfYmxvY2tlZF9pb1wiLFxuICAtOVxuXTtcblxudmFyIGFzc2VydF9mYWlsdXJlID0gLyogdHVwbGUgKi9bXG4gIFwiQXNzZXJ0X2ZhaWx1cmVcIixcbiAgLTEwXG5dO1xuXG52YXIgdW5kZWZpbmVkX3JlY3Vyc2l2ZV9tb2R1bGUgPSAvKiB0dXBsZSAqL1tcbiAgXCJVbmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZVwiLFxuICAtMTFcbl07XG5cbm91dF9vZl9tZW1vcnkudGFnID0gMjQ4O1xuXG5zeXNfZXJyb3IudGFnID0gMjQ4O1xuXG5mYWlsdXJlLnRhZyA9IDI0ODtcblxuaW52YWxpZF9hcmd1bWVudC50YWcgPSAyNDg7XG5cbmVuZF9vZl9maWxlLnRhZyA9IDI0ODtcblxuZGl2aXNpb25fYnlfemVyby50YWcgPSAyNDg7XG5cbm5vdF9mb3VuZC50YWcgPSAyNDg7XG5cbm1hdGNoX2ZhaWx1cmUudGFnID0gMjQ4O1xuXG5zdGFja19vdmVyZmxvdy50YWcgPSAyNDg7XG5cbnN5c19ibG9ja2VkX2lvLnRhZyA9IDI0ODtcblxuYXNzZXJ0X2ZhaWx1cmUudGFnID0gMjQ4O1xuXG51bmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZS50YWcgPSAyNDg7XG5cbmV4cG9ydCB7XG4gIG91dF9vZl9tZW1vcnkgLFxuICBzeXNfZXJyb3IgLFxuICBmYWlsdXJlICxcbiAgaW52YWxpZF9hcmd1bWVudCAsXG4gIGVuZF9vZl9maWxlICxcbiAgZGl2aXNpb25fYnlfemVybyAsXG4gIG5vdF9mb3VuZCAsXG4gIG1hdGNoX2ZhaWx1cmUgLFxuICBzdGFja19vdmVyZmxvdyAsXG4gIHN5c19ibG9ja2VkX2lvICxcbiAgYXNzZXJ0X2ZhaWx1cmUgLFxuICB1bmRlZmluZWRfcmVjdXJzaXZlX21vZHVsZSAsXG4gIFxufVxuLyogIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJcblxuXG52YXIgaWQgPSB7XG4gIGNvbnRlbnRzOiAwXG59O1xuXG5mdW5jdGlvbiBjYW1sX3NldF9vb19pZChiKSB7XG4gIGJbMV0gPSBpZC5jb250ZW50cztcbiAgaWQuY29udGVudHMgPSBpZC5jb250ZW50cyArIDE7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBjYW1sX2ZyZXNoX29vX2lkKHBhcmFtKSB7XG4gIGlkLmNvbnRlbnRzID0gaWQuY29udGVudHMgKyAxO1xuICByZXR1cm4gaWQuY29udGVudHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShzdHIpIHtcbiAgdmFyIHZfMDAxID0gY2FtbF9mcmVzaF9vb19pZCh1bmRlZmluZWQpO1xuICB2YXIgdiA9IC8qIHR1cGxlICovW1xuICAgIHN0cixcbiAgICB2XzAwMVxuICBdO1xuICB2LnRhZyA9IDI0ODtcbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGNhbWxfaXNfZXh0ZW5zaW9uKGUpIHtcbiAgaWYgKGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZS50YWcgPT09IDI0OCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBzbG90ID0gZVswXTtcbiAgaWYgKHNsb3QgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzbG90LnRhZyA9PT0gMjQ4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjYW1sX3NldF9vb19pZCAsXG4gIGNhbWxfZnJlc2hfb29faWQgLFxuICBjcmVhdGUgLFxuICBjYW1sX2lzX2V4dGVuc2lvbiAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgJCRFcnJvciA9IENhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJDYW1sX2pzX2V4Y2VwdGlvbnMuRXJyb3JcIik7XG5cbmZ1bmN0aW9uIGludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbihlKSB7XG4gIGlmIChDYW1sX2V4Y2VwdGlvbnMuY2FtbF9pc19leHRlbnNpb24oZSkpIHtcbiAgICByZXR1cm4gZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgJCRFcnJvcixcbiAgICAgICAgICAgIGVcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYXNfanNfZXhuKGV4bikge1xuICBpZiAoZXhuWzBdID09PSAkJEVycm9yKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoZXhuWzFdKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IHtcbiAgJCRFcnJvciAsXG4gIGludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbiAsXG4gIGNhbWxfYXNfanNfZXhuICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEJsb2NrIGZyb20gXCIuL2Jsb2NrLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX3ByaW1pdGl2ZSBmcm9tIFwiLi9jYW1sX3ByaW1pdGl2ZS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuanNcIjtcblxudmFyIGZvcl9pbiA9IChmdW5jdGlvbihvLGZvbyl7XG4gICAgICAgIGZvciAodmFyIHggaW4gbykgeyBmb28oeCkgfX0pO1xuXG5mdW5jdGlvbiBjYW1sX29ial9ibG9jayh0YWcsIHNpemUpIHtcbiAgdmFyIHYgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gIHYudGFnID0gdGFnO1xuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gY2FtbF9vYmpfZHVwKHgpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oKHt9KSwgeCk7XG4gIH1cbiAgdmFyIGxlbiA9IHgubGVuZ3RoIHwgMDtcbiAgdmFyIHYgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2W2ldID0geFtpXTtcbiAgfVxuICB2LnRhZyA9IHgudGFnIHwgMDtcbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGNhbWxfb2JqX3RydW5jYXRlKHgsIG5ld19zaXplKSB7XG4gIHZhciBsZW4gPSB4Lmxlbmd0aCB8IDA7XG4gIGlmIChuZXdfc2l6ZSA8PSAwIHx8IG5ld19zaXplID4gbGVuKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJPYmoudHJ1bmNhdGVcIlxuICAgICAgICBdO1xuICB9XG4gIGlmIChsZW4gPT09IG5ld19zaXplKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGkgPSBuZXdfc2l6ZTsgaSA8IGxlbjsgKytpKXtcbiAgICB4W2ldID0gMDtcbiAgfVxuICB4Lmxlbmd0aCA9IG5ld19zaXplO1xuICBcbn1cblxuZnVuY3Rpb24gY2FtbF9sYXp5X21ha2VfZm9yd2FyZCh4KSB7XG4gIHJldHVybiBCbG9jay5fXygyNTAsIFt4XSk7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbGF6eV9tYWtlKGZuKSB7XG4gIHZhciBibG9jayA9IFtmbl07XG4gIGJsb2NrLnRhZyA9IDI0NjtcbiAgcmV0dXJuIGJsb2NrO1xufVxuXG52YXIgY2FtbF91cGRhdGVfZHVtbXkgPSAoZnVuY3Rpb24oeCx5KXtcbiAgdmFyIGsgIFxuICBpZihBcnJheS5pc0FycmF5KHkpKXtcbiAgICBmb3IoayA9IDA7IGsgPCB5Lmxlbmd0aCA7ICsrayl7XG4gICAgICB4W2tdID0geVtrXVxuICAgIH1cbiAgICBpZih5LnRhZyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHgudGFnID0geS50YWdcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgayBpbiB5KXtcbiAgICAgIHhba10gPSB5W2tdXG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gY2FtbF9jb21wYXJlKF9hLCBfYikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGIgPSBfYjtcbiAgICB2YXIgYSA9IF9hO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgdmFyIGFfdHlwZSA9IHR5cGVvZiBhO1xuICAgIHZhciBiX3R5cGUgPSB0eXBlb2YgYjtcbiAgICBzd2l0Y2ggKGFfdHlwZSkge1xuICAgICAgY2FzZSBcImJvb2xlYW5cIiA6XG4gICAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBDYW1sX3ByaW1pdGl2ZS5jYW1sX2Jvb2xfY29tcGFyZShhLCBiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZnVuY3Rpb25cIiA6XG4gICAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBbXG4gICAgICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgICAgICAgXCJjb21wYXJlOiBmdW5jdGlvbmFsIHZhbHVlXCJcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJudW1iZXJcIiA6XG4gICAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIENhbWxfcHJpbWl0aXZlLmNhbWxfaW50X2NvbXBhcmUoYSwgYik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0cmluZ1wiIDpcbiAgICAgICAgICBpZiAoYl90eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2FtbF9wcmltaXRpdmUuY2FtbF9zdHJpbmdfY29tcGFyZShhLCBiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgY2FzZSBcInVuZGVmaW5lZFwiIDpcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBcbiAgICB9XG4gICAgc3dpdGNoIChiX3R5cGUpIHtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIiA6XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgY2FzZSBcInVuZGVmaW5lZFwiIDpcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChhX3R5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFfdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhX3R5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAoYiA9PT0gbnVsbCB8fCBiLnRhZyA9PT0gMjU2KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYl90eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYS50YWcgPT09IDI1Nikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEgPT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoYi50YWcgPT09IDI1Nikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIgPT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoYS50YWcgPT09IDI1Nikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhZ19hID0gYS50YWcgfCAwO1xuICAgICAgICB2YXIgdGFnX2IgPSBiLnRhZyB8IDA7XG4gICAgICAgIGlmICh0YWdfYSA9PT0gMjUwKSB7XG4gICAgICAgICAgX2EgPSBhWzBdO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFnX2IgPT09IDI1MCkge1xuICAgICAgICAgIF9iID0gYlswXTtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhZ19hID09PSAyNTYpIHtcbiAgICAgICAgICBpZiAodGFnX2IgPT09IDI1Nikge1xuICAgICAgICAgICAgcmV0dXJuIENhbWxfcHJpbWl0aXZlLmNhbWxfaW50X2NvbXBhcmUoYVsxXSwgYlsxXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhZ19hID09PSAyNDgpIHtcbiAgICAgICAgICByZXR1cm4gQ2FtbF9wcmltaXRpdmUuY2FtbF9pbnRfY29tcGFyZShhWzFdLCBiWzFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFnX2EgPT09IDI1MSkge1xuICAgICAgICAgIHRocm93IFtcbiAgICAgICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgICAgIFwiZXF1YWw6IGFic3RyYWN0IHZhbHVlXCJcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFnX2EgIT09IHRhZ19iKSB7XG4gICAgICAgICAgaWYgKHRhZ19hIDwgdGFnX2IpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBsZW5fYSA9IGEubGVuZ3RoIHwgMDtcbiAgICAgICAgdmFyIGxlbl9iID0gYi5sZW5ndGggfCAwO1xuICAgICAgICBpZiAobGVuX2EgPT09IGxlbl9iKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICAgIHZhciBfaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gX2k7XG4gICAgICAgICAgICAgIGlmIChpID09PSBsZW5fYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciByZXMgPSBjYW1sX2NvbXBhcmUoYVtpXSwgYltpXSk7XG4gICAgICAgICAgICAgIGlmIChyZXMgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChhIC0gYik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtaW5fa2V5X2xocyA9IHtcbiAgICAgICAgICAgICAgY29udGVudHM6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBtaW5fa2V5X3JocyA9IHtcbiAgICAgICAgICAgICAgY29udGVudHM6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBkb19rZXkgPSBmdW5jdGlvbiAocGFyYW0sIGtleSkge1xuICAgICAgICAgICAgICB2YXIgbWluX2tleSA9IHBhcmFtWzJdO1xuICAgICAgICAgICAgICB2YXIgYiA9IHBhcmFtWzFdO1xuICAgICAgICAgICAgICBpZiAoISghYi5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGNhbWxfY29tcGFyZShwYXJhbVswXVtrZXldLCBiW2tleV0pID4gMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBtayA9IG1pbl9rZXkuY29udGVudHM7XG4gICAgICAgICAgICAgIGlmIChtayAhPT0gdW5kZWZpbmVkICYmIGtleSA+PSBtaykge1xuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluX2tleS5jb250ZW50cyA9IGtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHBhcnRpYWxfYXJnID0gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgIGIsXG4gICAgICAgICAgICAgIG1pbl9rZXlfcmhzXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgdmFyIGRvX2tleV9hID0gKGZ1bmN0aW9uKHBhcnRpYWxfYXJnKXtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBkb19rZXlfYShwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gZG9fa2V5KHBhcnRpYWxfYXJnLCBwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9KHBhcnRpYWxfYXJnKSk7XG4gICAgICAgICAgICB2YXIgcGFydGlhbF9hcmckMSA9IC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICBiLFxuICAgICAgICAgICAgICBhLFxuICAgICAgICAgICAgICBtaW5fa2V5X2xoc1xuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHZhciBkb19rZXlfYiA9IChmdW5jdGlvbihwYXJ0aWFsX2FyZyQxKXtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBkb19rZXlfYihwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gZG9fa2V5KHBhcnRpYWxfYXJnJDEsIHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0ocGFydGlhbF9hcmckMSkpO1xuICAgICAgICAgICAgZm9yX2luKGEsIGRvX2tleV9hKTtcbiAgICAgICAgICAgIGZvcl9pbihiLCBkb19rZXlfYik7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBtaW5fa2V5X2xocy5jb250ZW50cztcbiAgICAgICAgICAgIHZhciBtYXRjaCQxID0gbWluX2tleV9yaHMuY29udGVudHM7XG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAobWF0Y2gkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWxfcHJpbWl0aXZlLmNhbWxfc3RyaW5nX2NvbXBhcmUobWF0Y2gsIG1hdGNoJDEpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaCQxICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGVuX2EgPCBsZW5fYikge1xuICAgICAgICAgIHZhciBfaSQxID0gMDtcbiAgICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgaSQxID0gX2kkMTtcbiAgICAgICAgICAgIGlmIChpJDEgPT09IGxlbl9hKSB7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXMkMSA9IGNhbWxfY29tcGFyZShhW2kkMV0sIGJbaSQxXSk7XG4gICAgICAgICAgICBpZiAocmVzJDEgIT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcyQxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2kkMSA9IGkkMSArIDEgfCAwO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9pJDIgPSAwO1xuICAgICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBpJDIgPSBfaSQyO1xuICAgICAgICAgICAgaWYgKGkkMiA9PT0gbGVuX2IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzJDIgPSBjYW1sX2NvbXBhcmUoYVtpJDJdLCBiW2kkMl0pO1xuICAgICAgICAgICAgaWYgKHJlcyQyICE9PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXMkMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9pJDIgPSBpJDIgKyAxIHwgMDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsKF9hLCBfYikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGIgPSBfYjtcbiAgICB2YXIgYSA9IF9hO1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGFfdHlwZSA9IHR5cGVvZiBhO1xuICAgIGlmIChhX3R5cGUgPT09IFwic3RyaW5nXCIgfHwgYV90eXBlID09PSBcIm51bWJlclwiIHx8IGFfdHlwZSA9PT0gXCJib29sZWFuXCIgfHwgYV90eXBlID09PSBcInVuZGVmaW5lZFwiIHx8IGEgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGJfdHlwZSA9IHR5cGVvZiBiO1xuICAgIGlmIChhX3R5cGUgPT09IFwiZnVuY3Rpb25cIiB8fCBiX3R5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICAgIFwiZXF1YWw6IGZ1bmN0aW9uYWwgdmFsdWVcIlxuICAgICAgICAgIF07XG4gICAgfVxuICAgIGlmIChiX3R5cGUgPT09IFwibnVtYmVyXCIgfHwgYl90eXBlID09PSBcInVuZGVmaW5lZFwiIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHRhZ19hID0gYS50YWcgfCAwO1xuICAgIHZhciB0YWdfYiA9IGIudGFnIHwgMDtcbiAgICBpZiAodGFnX2EgPT09IDI1MCkge1xuICAgICAgX2EgPSBhWzBdO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAodGFnX2IgPT09IDI1MCkge1xuICAgICAgX2IgPSBiWzBdO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAodGFnX2EgPT09IDI0OCkge1xuICAgICAgcmV0dXJuIGFbMV0gPT09IGJbMV07XG4gICAgfVxuICAgIGlmICh0YWdfYSA9PT0gMjUxKSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJlcXVhbDogYWJzdHJhY3QgdmFsdWVcIlxuICAgICAgICAgIF07XG4gICAgfVxuICAgIGlmICh0YWdfYSAhPT0gdGFnX2IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRhZ19hID09PSAyNTYpIHtcbiAgICAgIHJldHVybiBhWzFdID09PSBiWzFdO1xuICAgIH1cbiAgICB2YXIgbGVuX2EgPSBhLmxlbmd0aCB8IDA7XG4gICAgdmFyIGxlbl9iID0gYi5sZW5ndGggfCAwO1xuICAgIGlmIChsZW5fYSA9PT0gbGVuX2IpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgIHZhciBfaSA9IDA7XG4gICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICB2YXIgaSA9IF9pO1xuICAgICAgICAgIGlmIChpID09PSBsZW5fYSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghY2FtbF9lcXVhbChhW2ldLCBiW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuICEoYSA+IGIgfHwgYSA8IGIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICBjb250ZW50czogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZG9fa2V5X2EgPSAoZnVuY3Rpb24oYixyZXN1bHQpe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZG9fa2V5X2Eoa2V5KSB7XG4gICAgICAgICAgaWYgKCFiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5jb250ZW50cyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgfShiLHJlc3VsdCkpO1xuICAgICAgICB2YXIgZG9fa2V5X2IgPSAoZnVuY3Rpb24oYSxiLHJlc3VsdCl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkb19rZXlfYihrZXkpIHtcbiAgICAgICAgICBpZiAoIWEuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhY2FtbF9lcXVhbChiW2tleV0sIGFba2V5XSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5jb250ZW50cyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgfShhLGIscmVzdWx0KSk7XG4gICAgICAgIGZvcl9pbihhLCBkb19rZXlfYSk7XG4gICAgICAgIGlmIChyZXN1bHQuY29udGVudHMpIHtcbiAgICAgICAgICBmb3JfaW4oYiwgZG9fa2V5X2IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQuY29udGVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXF1YWxfbnVsbCh4LCB5KSB7XG4gIGlmICh5ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNhbWxfZXF1YWwoeCwgeSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbF91bmRlZmluZWQoeCwgeSkge1xuICBpZiAoeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGNhbWxfZXF1YWwoeCwgeSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbF9udWxsYWJsZSh4LCB5KSB7XG4gIGlmICh5ID09IG51bGwpIHtcbiAgICByZXR1cm4geCA9PT0geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2FtbF9lcXVhbCh4LCB5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX25vdGVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuICFjYW1sX2VxdWFsKGEsIGIpO1xufVxuXG5mdW5jdGlvbiBjYW1sX2dyZWF0ZXJlcXVhbChhLCBiKSB7XG4gIHJldHVybiBjYW1sX2NvbXBhcmUoYSwgYikgPj0gMDtcbn1cblxuZnVuY3Rpb24gY2FtbF9ncmVhdGVydGhhbihhLCBiKSB7XG4gIHJldHVybiBjYW1sX2NvbXBhcmUoYSwgYikgPiAwO1xufVxuXG5mdW5jdGlvbiBjYW1sX2xlc3NlcXVhbChhLCBiKSB7XG4gIHJldHVybiBjYW1sX2NvbXBhcmUoYSwgYikgPD0gMDtcbn1cblxuZnVuY3Rpb24gY2FtbF9sZXNzdGhhbihhLCBiKSB7XG4gIHJldHVybiBjYW1sX2NvbXBhcmUoYSwgYikgPCAwO1xufVxuXG5mdW5jdGlvbiBjYW1sX21pbih4LCB5KSB7XG4gIGlmIChjYW1sX2NvbXBhcmUoeCwgeSkgPD0gMCkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfbWF4KHgsIHkpIHtcbiAgaWYgKGNhbWxfY29tcGFyZSh4LCB5KSA+PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9vYmpfc2V0X3RhZyhwcmltLCBwcmltJDEpIHtcbiAgcHJpbS50YWcgPSBwcmltJDE7XG4gIFxufVxuXG5leHBvcnQge1xuICBjYW1sX29ial9ibG9jayAsXG4gIGNhbWxfb2JqX2R1cCAsXG4gIGNhbWxfb2JqX3RydW5jYXRlICxcbiAgY2FtbF9sYXp5X21ha2VfZm9yd2FyZCAsXG4gIGNhbWxfbGF6eV9tYWtlICxcbiAgY2FtbF91cGRhdGVfZHVtbXkgLFxuICBjYW1sX2NvbXBhcmUgLFxuICBjYW1sX2VxdWFsICxcbiAgY2FtbF9lcXVhbF9udWxsICxcbiAgY2FtbF9lcXVhbF91bmRlZmluZWQgLFxuICBjYW1sX2VxdWFsX251bGxhYmxlICxcbiAgY2FtbF9ub3RlcXVhbCAsXG4gIGNhbWxfZ3JlYXRlcmVxdWFsICxcbiAgY2FtbF9ncmVhdGVydGhhbiAsXG4gIGNhbWxfbGVzc3RoYW4gLFxuICBjYW1sX2xlc3NlcXVhbCAsXG4gIGNhbWxfbWluICxcbiAgY2FtbF9tYXggLFxuICBjYW1sX29ial9zZXRfdGFnICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxudmFyIHVuZGVmaW5lZEhlYWRlciA9IFtdO1xuXG5mdW5jdGlvbiBzb21lKHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBibG9jayA9IC8qIHR1cGxlICovW1xuICAgICAgdW5kZWZpbmVkSGVhZGVyLFxuICAgICAgMFxuICAgIF07XG4gICAgYmxvY2sudGFnID0gMjU2O1xuICAgIHJldHVybiBibG9jaztcbiAgfVxuICBpZiAoISh4ICE9PSBudWxsICYmIHhbMF0gPT09IHVuZGVmaW5lZEhlYWRlcikpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICB2YXIgbmlkID0geFsxXSArIDEgfCAwO1xuICB2YXIgYmxvY2skMSA9IC8qIHR1cGxlICovW1xuICAgIHVuZGVmaW5lZEhlYWRlcixcbiAgICBuaWRcbiAgXTtcbiAgYmxvY2skMS50YWcgPSAyNTY7XG4gIHJldHVybiBibG9jayQxO1xufVxuXG5mdW5jdGlvbiBudWxsYWJsZV90b19vcHQoeCkge1xuICBpZiAoeCA9PT0gbnVsbCB8fCB4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuZGVmaW5lZF90b19vcHQoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBudWxsX3RvX29wdCh4KSB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxGcm9tT3B0aW9uKHgpIHtcbiAgaWYgKCEoeCAhPT0gbnVsbCAmJiB4WzBdID09PSB1bmRlZmluZWRIZWFkZXIpKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgdmFyIGRlcHRoID0geFsxXTtcbiAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICB1bmRlZmluZWRIZWFkZXIsXG4gICAgICAgICAgICBkZXB0aCAtIDEgfCAwXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcHRpb25fZ2V0KHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbEZyb21PcHRpb24oeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uX2dldF91bndyYXAoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsRnJvbU9wdGlvbih4KVsxXTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBudWxsYWJsZV90b19vcHQgLFxuICB1bmRlZmluZWRfdG9fb3B0ICxcbiAgbnVsbF90b19vcHQgLFxuICB2YWxGcm9tT3B0aW9uICxcbiAgc29tZSAsXG4gIG9wdGlvbl9nZXQgLFxuICBvcHRpb25fZ2V0X3Vud3JhcCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGNhbWxfaW50X2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICBpZiAoeSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSBlbHNlIGlmICh5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoeCA+IHkgfHwgeCA9PT0geCkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKHkgPT09IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfY29tcGFyZShzMSwgczIpIHtcbiAgaWYgKHMxID09PSBzMikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHMxIDwgczIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ieXRlc19jb21wYXJlX2F1eChzMSwgczIsIF9vZmYsIGxlbiwgZGVmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgb2ZmID0gX29mZjtcbiAgICBpZiAob2ZmID49IGxlbikge1xuICAgICAgcmV0dXJuIGRlZjtcbiAgICB9XG4gICAgdmFyIGEgPSBzMVtvZmZdO1xuICAgIHZhciBiID0gczJbb2ZmXTtcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgX29mZiA9IG9mZiArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FtbF9ieXRlc19jb21wYXJlKHMxLCBzMikge1xuICB2YXIgbGVuMSA9IHMxLmxlbmd0aDtcbiAgdmFyIGxlbjIgPSBzMi5sZW5ndGg7XG4gIGlmIChsZW4xID09PSBsZW4yKSB7XG4gICAgcmV0dXJuIGNhbWxfYnl0ZXNfY29tcGFyZV9hdXgoczEsIHMyLCAwLCBsZW4xLCAwKTtcbiAgfSBlbHNlIGlmIChsZW4xIDwgbGVuMikge1xuICAgIHJldHVybiBjYW1sX2J5dGVzX2NvbXBhcmVfYXV4KHMxLCBzMiwgMCwgbGVuMSwgLTEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYW1sX2J5dGVzX2NvbXBhcmVfYXV4KHMxLCBzMiwgMCwgbGVuMiwgMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ieXRlc19lcXVhbChzMSwgczIpIHtcbiAgdmFyIGxlbjEgPSBzMS5sZW5ndGg7XG4gIHZhciBsZW4yID0gczIubGVuZ3RoO1xuICBpZiAobGVuMSA9PT0gbGVuMikge1xuICAgIHZhciBfb2ZmID0gMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgb2ZmID0gX29mZjtcbiAgICAgIGlmIChvZmYgPT09IGxlbjEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB2YXIgYSA9IHMxW29mZl07XG4gICAgICB2YXIgYiA9IHMyW29mZl07XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBfb2ZmID0gb2ZmICsgMSB8IDA7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX21pbih4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnRfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX25hdGl2ZWludF9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludDMyX21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9tYXgoeCwgeSkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50X21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9uYXRpdmVpbnRfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQzMl9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG52YXIgY2FtbF9uYXRpdmVpbnRfY29tcGFyZSA9IGNhbWxfaW50X2NvbXBhcmU7XG5cbnZhciBjYW1sX2ludDMyX2NvbXBhcmUgPSBjYW1sX2ludF9jb21wYXJlO1xuXG5leHBvcnQge1xuICBjYW1sX2J5dGVzX2NvbXBhcmUgLFxuICBjYW1sX2J5dGVzX2VxdWFsICxcbiAgY2FtbF9pbnRfY29tcGFyZSAsXG4gIGNhbWxfYm9vbF9jb21wYXJlICxcbiAgY2FtbF9mbG9hdF9jb21wYXJlICxcbiAgY2FtbF9uYXRpdmVpbnRfY29tcGFyZSAsXG4gIGNhbWxfc3RyaW5nX2NvbXBhcmUgLFxuICBjYW1sX2ludDMyX2NvbXBhcmUgLFxuICBjYW1sX2Jvb2xfbWluICxcbiAgY2FtbF9pbnRfbWluICxcbiAgY2FtbF9mbG9hdF9taW4gLFxuICBjYW1sX3N0cmluZ19taW4gLFxuICBjYW1sX25hdGl2ZWludF9taW4gLFxuICBjYW1sX2ludDMyX21pbiAsXG4gIGNhbWxfYm9vbF9tYXggLFxuICBjYW1sX2ludF9tYXggLFxuICBjYW1sX2Zsb2F0X21heCAsXG4gIGNhbWxfc3RyaW5nX21heCAsXG4gIGNhbWxfbmF0aXZlaW50X21heCAsXG4gIGNhbWxfaW50MzJfbWF4ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfYXJyYXkgZnJvbSBcIi4vY2FtbF9hcnJheS5qc1wiO1xuXG5mdW5jdGlvbiBhcHAoX2YsIF9hcmdzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYXJncyA9IF9hcmdzO1xuICAgIHZhciBmID0gX2Y7XG4gICAgdmFyIGluaXRfYXJpdHkgPSBmLmxlbmd0aDtcbiAgICB2YXIgYXJpdHkgPSBpbml0X2FyaXR5ID09PSAwID8gMSA6IGluaXRfYXJpdHk7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBkID0gYXJpdHkgLSBsZW4gfCAwO1xuICAgIGlmIChkID09PSAwKSB7XG4gICAgICByZXR1cm4gZi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaWYgKGQgPj0gMCkge1xuICAgICAgcmV0dXJuIChmdW5jdGlvbihmLGFyZ3Mpe1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBhcHAoZiwgYXJncy5jb25jYXQoW3hdKSk7XG4gICAgICB9XG4gICAgICB9KGYsYXJncykpO1xuICAgIH1cbiAgICBfYXJncyA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIoYXJncywgYXJpdHksIC1kIHwgMCk7XG4gICAgX2YgPSBmLmFwcGx5KG51bGwsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIoYXJncywgMCwgYXJpdHkpKTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF8xKG8sIGEwKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDEpIHtcbiAgICByZXR1cm4gbyhhMCk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCwgcGFyYW0kNSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQsIHBhcmFtJDUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFthMF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzEobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAxKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTApIHtcbiAgICAgICAgcmV0dXJuIF8xKG8sIGEwKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF8yKG8sIGEwLCBhMSkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAyKSB7XG4gICAgcmV0dXJuIG8oYTAsIGExKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFthMV0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEpO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fMihvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDIpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCwgYTEpIHtcbiAgICAgICAgcmV0dXJuIF8yKG8sIGEwLCBhMSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfMyhvLCBhMCwgYTEsIGEyKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDMpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFthMl0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMlxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fMyhvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDMpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCwgYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiBfMyhvLCBhMCwgYTEsIGEyKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF80KG8sIGEwLCBhMSwgYTIsIGEzKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDQpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMyk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW2EzXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhM1xuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNChvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDQpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMykge1xuICAgICAgICByZXR1cm4gXzQobywgYTAsIGExLCBhMiwgYTMpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gXzUobywgYTAsIGExLCBhMiwgYTMsIGE0KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDUpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW2E0XSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX181KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNSkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICAgICAgICByZXR1cm4gXzUobywgYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF82KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNikge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW2E1XSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX182KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNikge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgICAgICAgcmV0dXJuIF82KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gXzcobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNykge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpLCBbYTZdKTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX183KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNykge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gICAgICAgIHJldHVybiBfNyhvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfOChvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gOCkge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpLCBbYTddKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzgobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA4KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gICAgICAgIHJldHVybiBfOChvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgYXBwICxcbiAgXzEgLFxuICBfXzEgLFxuICBfMiAsXG4gIF9fMiAsXG4gIF8zICxcbiAgX18zICxcbiAgXzQgLFxuICBfXzQgLFxuICBfNSAsXG4gIF9fNSAsXG4gIF82ICxcbiAgX182ICxcbiAgXzcgLFxuICBfXzcgLFxuICBfOCAsXG4gIF9fOCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBCbG9jayBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9ibG9jay5qc1wiO1xuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucyBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgb25VbmhhbmRsZWRFeGNlcHRpb24gPSB7XG4gIGNvbnRlbnRzOiAoZnVuY3Rpb24gKGV4bikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVuaGFuZGxlZCBleGNlcHRpb24gaW4gcHJvbWlzZSBjYWxsYmFjazpcIik7XG4gICAgICBjb25zb2xlLmVycm9yKGV4bik7XG4gICAgICBcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gTmVzdGVkUHJvbWlzZShwKSB7XG4gICAgdGhpcy5uZXN0ZWQgPSBwO1xufTtcblxuZnVuY3Rpb24gdW5ib3godmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBOZXN0ZWRQcm9taXNlKVxuICAgICAgICByZXR1cm4gdmFsdWUubmVzdGVkO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBib3godmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIG5ldyBOZXN0ZWRQcm9taXNlKHZhbHVlKTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbWFrZShleGVjdXRvcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBib3hpbmdSZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoYm94KHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIGV4ZWN1dG9yKGJveGluZ1Jlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiByZXNvbHZlZCh2YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYm94KHZhbHVlKSk7XG59O1xuXG5mdW5jdGlvbiB0aGVuKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh1bmJveCh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIG9uVW5oYW5kbGVkRXhjZXB0aW9uLmNvbnRlbnRzKGV4Y2VwdGlvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNhdGNoXyhwcm9taXNlLCBjYWxsYmFjaykge1xuICAgIHZhciBzYWZlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgb25VbmhhbmRsZWRFeGNlcHRpb24uY29udGVudHMoZXhjZXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gcHJvbWlzZS5jYXRjaChzYWZlQ2FsbGJhY2spO1xufTtcblxuZnVuY3Rpb24gYXJyYXlUb0xpc3QoYXJyYXkpIHtcbiAgdmFyIGxpc3QgPSAwO1xuICBmb3IgKHZhciBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IC0taW5kZXgpIHtcbiAgICBsaXN0ID0gW2FycmF5W2luZGV4XSwgbGlzdF07XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBsaXN0VG9BcnJheShsaXN0KSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICB3aGlsZSAobGlzdCAhPT0gMCkge1xuICAgIGFycmF5LnB1c2gobGlzdFswXSk7XG4gICAgbGlzdCA9IGxpc3RbMV07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcblxuZnVuY3Rpb24gbWFwQXJyYXkoZiwgYSkge1xuICByZXR1cm4gYS5tYXAoZik7XG59O1xuO1xuXG5mdW5jdGlvbiBwZW5kaW5nKHBhcmFtKSB7XG4gIHZhciByZXNvbHZlID0ge1xuICAgIGNvbnRlbnRzOiAoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgXG4gICAgICB9KVxuICB9O1xuICB2YXIgcmVqZWN0ID0ge1xuICAgIGNvbnRlbnRzOiAoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgXG4gICAgICB9KVxuICB9O1xuICB2YXIgcCA9IG1ha2UoKGZ1bmN0aW9uIChyZXNvbHZlJHByaW1lLCByZWplY3QkcHJpbWUpIHtcbiAgICAgICAgICByZXNvbHZlLmNvbnRlbnRzID0gcmVzb2x2ZSRwcmltZTtcbiAgICAgICAgICByZWplY3QuY29udGVudHMgPSByZWplY3QkcHJpbWU7XG4gICAgICAgICAgXG4gICAgICAgIH0pKTtcbiAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgIHAsXG4gICAgICAgICAgcmVzb2x2ZS5jb250ZW50cyxcbiAgICAgICAgICByZWplY3QuY29udGVudHNcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gbWFwKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGVuKHByb21pc2UsIChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlZChDdXJyeS5fMShjYWxsYmFjaywgdikpO1xuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGdldChwcm9taXNlLCBjYWxsYmFjaykge1xuICBtYXAocHJvbWlzZSwgY2FsbGJhY2spO1xuICBcbn1cblxuZnVuY3Rpb24gdGFwKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIG1hcChwcm9taXNlLCBjYWxsYmFjayk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBhbGxBcnJheShwcm9taXNlcykge1xuICByZXR1cm4gbWFwKFByb21pc2UuYWxsKHByb21pc2VzKSwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXBBcnJheSgoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmJveChwcmltKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcGFyYW0pO1xuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gbWFwKGFsbEFycmF5KGxpc3RUb0FycmF5KHByb21pc2VzKSksIChmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVRvTGlzdChyZXN1bHRzKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBhbGwyKHAxLCBwMikge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIHAxLFxuICAgICAgICAgICAgICBwMlxuICAgICAgICAgICAgXSk7XG59XG5cbmZ1bmN0aW9uIGFsbDMocDEsIHAyLCBwMykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIHAxLFxuICAgICAgICAgICAgICBwMixcbiAgICAgICAgICAgICAgcDNcbiAgICAgICAgICAgIF0pO1xufVxuXG5mdW5jdGlvbiBhbGw0KHAxLCBwMiwgcDMsIHA0KSB7XG4gIHJldHVybiBQcm9taXNlLmFsbCgvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgcDEsXG4gICAgICAgICAgICAgIHAyLFxuICAgICAgICAgICAgICBwMyxcbiAgICAgICAgICAgICAgcDRcbiAgICAgICAgICAgIF0pO1xufVxuXG5mdW5jdGlvbiBhbGw1KHAxLCBwMiwgcDMsIHA0LCBwNSkge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIHAxLFxuICAgICAgICAgICAgICBwMixcbiAgICAgICAgICAgICAgcDMsXG4gICAgICAgICAgICAgIHA0LFxuICAgICAgICAgICAgICBwNVxuICAgICAgICAgICAgXSk7XG59XG5cbmZ1bmN0aW9uIGFsbDYocDEsIHAyLCBwMywgcDQsIHA1LCBwNikge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIHAxLFxuICAgICAgICAgICAgICBwMixcbiAgICAgICAgICAgICAgcDMsXG4gICAgICAgICAgICAgIHA0LFxuICAgICAgICAgICAgICBwNSxcbiAgICAgICAgICAgICAgcDZcbiAgICAgICAgICAgIF0pO1xufVxuXG5mdW5jdGlvbiByYWNlKHByb21pc2VzKSB7XG4gIGlmIChwcm9taXNlcyA9PT0gLyogW10gKi8wKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJQcm9taXNlLnJhY2UoW10pIHdvdWxkIGJlIHBlbmRpbmcgZm9yZXZlclwiXG4gICAgICAgIF07XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmFjZShsaXN0VG9BcnJheShwcm9taXNlcykpO1xufVxuXG5mdW5jdGlvbiB0b1Jlc3VsdChwcm9taXNlKSB7XG4gIHJldHVybiBjYXRjaF8obWFwKHByb21pc2UsIChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogT2sgKi9CbG9jay5fXygwLCBbdl0pO1xuICAgICAgICAgICAgICAgICAgfSkpLCAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQoLyogRXJyb3IgKi9CbG9jay5fXygxLCBbZV0pKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBmcm9tUmVzdWx0KHByb21pc2UpIHtcbiAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYudGFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodlswXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlZCh2WzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcGVuZGluZyQxKHBhcmFtKSB7XG4gIHZhciBtYXRjaCA9IHBlbmRpbmcodW5kZWZpbmVkKTtcbiAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgIG1hdGNoWzBdLFxuICAgICAgICAgIG1hdGNoWzFdXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIGV4ZWMoZXhlY3V0b3IpIHtcbiAgdmFyIG1hdGNoID0gcGVuZGluZyQxKHVuZGVmaW5lZCk7XG4gIEN1cnJ5Ll8xKGV4ZWN1dG9yLCBtYXRjaFsxXSk7XG4gIHJldHVybiBtYXRjaFswXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZWQkMShwcmltKSB7XG4gIHJldHVybiByZXNvbHZlZChwcmltKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcChwcmltLCBwcmltJDEpIHtcbiAgcmV0dXJuIHRoZW4ocHJpbSwgcHJpbSQxKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcE9rKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGVuKHByb21pc2UsIChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50YWcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoY2FsbGJhY2ssIHJlc3VsdFswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGZsYXRNYXBFcnJvcihwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gdGhlbihwcm9taXNlLCAoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudGFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoY2FsbGJhY2ssIHJlc3VsdFswXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBtYXBPayhwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gbWFwKHByb21pc2UsIChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50YWcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBPayAqL0Jsb2NrLl9fKDAsIFtDdXJyeS5fMShjYWxsYmFjaywgcmVzdWx0WzBdKV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBtYXBFcnJvcihwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gbWFwKHByb21pc2UsIChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50YWcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFtDdXJyeS5fMShjYWxsYmFjaywgcmVzdWx0WzBdKV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXRPayhwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gZ2V0KHByb21pc2UsIChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50YWcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShjYWxsYmFjaywgcmVzdWx0WzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXJyb3IocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGdldChwcm9taXNlLCAoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudGFnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoY2FsbGJhY2ssIHJlc3VsdFswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHRhcE9rKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIGdldE9rKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHRhcEVycm9yKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIGdldEVycm9yKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBPcGVyYXRvcnMgPSB7XG4gICRncmVhdCRwaXBlJGVxOiBtYXBPayxcbiAgJGdyZWF0JGdyZWF0JGVxOiBmbGF0TWFwT2tcbn07XG5cbmZ1bmN0aW9uIGZsYXRNYXBTb21lKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGVuKHByb21pc2UsIChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoY2FsbGJhY2ssIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0aW9uKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlZCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBtYXBTb21lKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBtYXAocHJvbWlzZSwgKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKEN1cnJ5Ll8xKGNhbGxiYWNrLCBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKG9wdGlvbikpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gZ2V0U29tZShwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gZ2V0KHByb21pc2UsIChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoY2FsbGJhY2ssIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0aW9uKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHRhcFNvbWUocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgZ2V0U29tZShwcm9taXNlLCBjYWxsYmFjayk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgUGlwZUZpcnN0ID0geyB9O1xuXG5mdW5jdGlvbiBKc19yZXNvbHZlZChwcmltKSB7XG4gIHJldHVybiByZXNvbHZlZChwcmltKTtcbn1cblxuZnVuY3Rpb24gSnNfcmVqZWN0ZWQocHJpbSkge1xuICByZXR1cm4gUHJvbWlzZS5yZWplY3QocHJpbSk7XG59XG5cbmZ1bmN0aW9uIEpzX2ZsYXRNYXAocHJpbSwgcHJpbSQxKSB7XG4gIHJldHVybiB0aGVuKHByaW0sIHByaW0kMSk7XG59XG5cbmZ1bmN0aW9uIEpzX2NhdGNoKHByaW0sIHByaW0kMSkge1xuICByZXR1cm4gY2F0Y2hfKHByaW0sIHByaW0kMSk7XG59XG5cbmZ1bmN0aW9uIEpzX3JlbGF4KHByaW0pIHtcbiAgcmV0dXJuIHByaW07XG59XG5cbmZ1bmN0aW9uIEpzX2Zyb21Cc1Byb21pc2UocHJpbSkge1xuICByZXR1cm4gcHJpbTtcbn1cblxuZnVuY3Rpb24gSnNfdG9Cc1Byb21pc2UocHJpbSkge1xuICByZXR1cm4gcHJpbTtcbn1cblxudmFyIEpzID0ge1xuICBwZW5kaW5nOiBwZW5kaW5nLFxuICByZXNvbHZlZDogSnNfcmVzb2x2ZWQsXG4gIHJlamVjdGVkOiBKc19yZWplY3RlZCxcbiAgZ2V0OiBnZXQsXG4gIHRhcDogdGFwLFxuICBtYXA6IG1hcCxcbiAgZmxhdE1hcDogSnNfZmxhdE1hcCxcbiAgJCRjYXRjaDogSnNfY2F0Y2gsXG4gIGFsbDogYWxsLFxuICByYWNlOiByYWNlLFxuICByZWxheDogSnNfcmVsYXgsXG4gIHRvUmVzdWx0OiB0b1Jlc3VsdCxcbiAgZnJvbVJlc3VsdDogZnJvbVJlc3VsdCxcbiAgZnJvbUJzUHJvbWlzZTogSnNfZnJvbUJzUHJvbWlzZSxcbiAgdG9Cc1Byb21pc2U6IEpzX3RvQnNQcm9taXNlXG59O1xuXG5leHBvcnQge1xuICBwZW5kaW5nJDEgYXMgcGVuZGluZyxcbiAgcmVzb2x2ZWQkMSBhcyByZXNvbHZlZCxcbiAgZXhlYyAsXG4gIGdldCAsXG4gIHRhcCAsXG4gIG1hcCAsXG4gIGZsYXRNYXAgLFxuICBnZXRPayAsXG4gIHRhcE9rICxcbiAgbWFwT2sgLFxuICBmbGF0TWFwT2sgLFxuICBnZXRFcnJvciAsXG4gIHRhcEVycm9yICxcbiAgbWFwRXJyb3IgLFxuICBmbGF0TWFwRXJyb3IgLFxuICBPcGVyYXRvcnMgLFxuICBnZXRTb21lICxcbiAgdGFwU29tZSAsXG4gIG1hcFNvbWUgLFxuICBmbGF0TWFwU29tZSAsXG4gIHJhY2UgLFxuICBhbGwgLFxuICBhbGxBcnJheSAsXG4gIGFsbDIgLFxuICBhbGwzICxcbiAgYWxsNCAsXG4gIGFsbDUgLFxuICBhbGw2ICxcbiAgSnMgLFxuICBQaXBlRmlyc3QgLFxuICBvblVuaGFuZGxlZEV4Y2VwdGlvbiAsXG4gIFxufVxuLyogIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgJCRBcnJheSBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9hcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQmxvY2sgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvYmxvY2suanNcIjtcbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyAkJFByb21pc2UgZnJvbSBcInJlYXNvbi1wcm9taXNlL3NyYy9qcy9wcm9taXNlLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgUmVhY3RSZWxheSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCAqIGFzIFJlbGF5UnVudGltZSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuaW1wb3J0ICogYXMgQ2FtbF9leGNlcHRpb25zIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qc1wiO1xuaW1wb3J0ICogYXMgSG9va3MgZnJvbSBcInJlYWN0LXJlbGF5L2hvb2tzXCI7XG5pbXBvcnQgKiBhcyBSZWxheUV4cGVyaW1lbnRhbCBmcm9tIFwicmVhY3QtcmVsYXkvbGliL3JlbGF5LWV4cGVyaW1lbnRhbFwiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNsaWVudElEKGRhdGFJZCwgc3RvcmFnZUtleSwgaW5kZXgsIHBhcmFtKSB7XG4gIHJldHVybiBSZWxheVJ1bnRpbWUuZ2VuZXJhdGVDbGllbnRJRChkYXRhSWQsIHN0b3JhZ2VLZXksIGluZGV4KTtcbn1cblxudmFyIF9jbGVhbk9iamVjdEZyb21VbmRlZmluZWQgPSAoZnVuY3Rpb24gY2xlYW5PYmoob2JqKSB7XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdPYmo7XG4gIH0pO1xuXG52YXIgX2NsZWFuVmFyaWFibGVzID0gKGZ1bmN0aW9uIGNsZWFuVmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIGlmICh0eXBlb2YgdmFyaWFibGVzICE9PSBcIm9iamVjdFwiIHx8IHZhcmlhYmxlcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfSk7XG5cbmZ1bmN0aW9uIF9jb252ZXJ0T2JqKHByaW0sIHByaW0kMSwgcHJpbSQyLCBwcmltJDMpIHtcbiAgcmV0dXJuIFV0aWxzLnRyYXZlcnNlcihwcmltLCBwcmltJDEsIHByaW0kMiwgcHJpbSQzKTtcbn1cblxuZnVuY3Rpb24gY29weUZpZWxkc0Zyb20odCwgc291cmNlUmVjb3JkKSB7XG4gIHQuY29weUZpZWxkc0Zyb20oc291cmNlUmVjb3JkKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGdldERhdGFJZCh0KSB7XG4gIHJldHVybiB0LmdldERhdGFJRCgpO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5rZWRSZWNvcmQodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQodC5nZXRMaW5rZWRSZWNvcmQobmFtZSwgJCRhcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlua2VkUmVjb3Jkcyh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgdmFyIHJlY29yZHMgPSB0LmdldExpbmtlZFJlY29yZHMobmFtZSwgJCRhcmd1bWVudHMpO1xuICBpZiAoIShyZWNvcmRzID09IG51bGwpKSB7XG4gICAgcmV0dXJuICQkQXJyYXkubWFwKChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUodik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksIChyZWNvcmRzID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShyZWNvcmRzKSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlTGlua2VkUmVjb3JkKHQsIG5hbWUsIHR5cGVOYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuZ2V0T3JDcmVhdGVMaW5rZWRSZWNvcmQobmFtZSwgdHlwZU5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZSh0KSB7XG4gIHJldHVybiB0LmdldFR5cGUoKTtcbn1cblxuZnVuY3Rpb24gX2dldFZhbHVlQXJyKHQsIG5hbWUsICQkYXJndW1lbnRzKSB7XG4gIHZhciBhcnIgPSB0LmdldFZhbHVlKG5hbWUsICQkYXJndW1lbnRzKTtcbiAgaWYgKCEoYXJyID09IG51bGwpKSB7XG4gICAgcmV0dXJuICQkQXJyYXkubWFwKChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksIGFycik7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlU3RyaW5nKHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KHQuZ2V0VmFsdWUobmFtZSwgJCRhcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVTdHJpbmdBcnJheSh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIF9nZXRWYWx1ZUFycih0LCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlSW50KHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KHQuZ2V0VmFsdWUobmFtZSwgJCRhcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVJbnRBcnJheSh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIF9nZXRWYWx1ZUFycih0LCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlRmxvYXQodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQodC5nZXRWYWx1ZShuYW1lLCAkJGFyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZsb2F0QXJyYXkodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBfZ2V0VmFsdWVBcnIodCwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUJvb2wodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQodC5nZXRWYWx1ZShuYW1lLCAkJGFyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUJvb2xBcnJheSh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIF9nZXRWYWx1ZUFycih0LCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldExpbmtlZFJlY29yZCh0LCByZWNvcmQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRMaW5rZWRSZWNvcmQocmVjb3JkLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHVuc2V0TGlua2VkUmVjb3JkKHQsIG5hbWUsIHVuc2V0VmFsdWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICBpZiAodW5zZXRWYWx1ZSkge1xuICAgIHJldHVybiB0LnNldExpbmtlZFJlY29yZCh1bmRlZmluZWQsIG5hbWUsICQkYXJndW1lbnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdC5zZXRMaW5rZWRSZWNvcmQobnVsbCwgbmFtZSwgJCRhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldExpbmtlZFJlY29yZHModCwgcmVjb3JkcywgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldExpbmtlZFJlY29yZHMocmVjb3JkcywgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiB1bnNldExpbmtlZFJlY29yZHModCwgbmFtZSwgdW5zZXRWYWx1ZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIGlmICh1bnNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHQuc2V0TGlua2VkUmVjb3Jkcyh1bmRlZmluZWQsIG5hbWUsICQkYXJndW1lbnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdC5zZXRMaW5rZWRSZWNvcmRzKG51bGwsIG5hbWUsICQkYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnNldFZhbHVlKHQsIG5hbWUsIHVuc2V0VmFsdWUkMSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIGlmICh1bnNldFZhbHVlJDEpIHtcbiAgICByZXR1cm4gdC5zZXRWYWx1ZSh1bmRlZmluZWQsIG5hbWUsICQkYXJndW1lbnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdC5zZXRWYWx1ZShudWxsLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVTdHJpbmcodCwgdmFsdWUsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRWYWx1ZSh2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZVN0cmluZ0FycmF5KHQsIHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0VmFsdWUodmFsdWUsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVJbnQodCwgdmFsdWUsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRWYWx1ZSh2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZUludEFycmF5KHQsIHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0VmFsdWUodmFsdWUsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVGbG9hdCh0LCB2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldFZhbHVlKHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlRmxvYXRBcnJheSh0LCB2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldFZhbHVlKHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlQm9vbCh0LCB2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldFZhbHVlKHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlQm9vbEFycmF5KHQsIHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0VmFsdWUodmFsdWUsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKHQsIGRhdGFJZCwgdHlwZU5hbWUpIHtcbiAgcmV0dXJuIHQuY3JlYXRlKGRhdGFJZCwgdHlwZU5hbWUpO1xufVxuXG5mdW5jdGlvbiAkJGRlbGV0ZSh0LCBkYXRhSWQpIHtcbiAgdC5kZWxldGUoZGF0YUlkKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGdldCh0LCBkYXRhSWQpIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdCh0LmdldChkYXRhSWQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Um9vdEZpZWxkKHQsIGZpZWxkTmFtZSkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KHQuZ2V0Um9vdEZpZWxkKGZpZWxkTmFtZSkpO1xufVxuXG5mdW5jdGlvbiBnZXRQbHVyYWxSb290RmllbGQodCwgZmllbGROYW1lKSB7XG4gIHZhciBhcnIgPSB0LmdldFBsdXJhbFJvb3RGaWVsZChmaWVsZE5hbWUpO1xuICBpZiAoIShhcnIgPT0gbnVsbCkpIHtcbiAgICByZXR1cm4gJCRBcnJheS5tYXAoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh2KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgKGFyciA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUoYXJyKSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSQxKHQsIGRhdGFJZCwgdHlwZU5hbWUpIHtcbiAgcmV0dXJuIHQuY3JlYXRlKGRhdGFJZCwgdHlwZU5hbWUpO1xufVxuXG5mdW5jdGlvbiAkJGRlbGV0ZSQxKHQsIGRhdGFJZCkge1xuICB0LmRlbGV0ZShkYXRhSWQpO1xuICBcbn1cblxuZnVuY3Rpb24gZ2V0JDEodCwgZGF0YUlkKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQodC5nZXQoZGF0YUlkKSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbm5lY3Rpb24ocmVjb3JkLCBrZXksIGZpbHRlcnMsIHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQoUmVsYXlSdW50aW1lLkNvbm5lY3Rpb25IYW5kbGVyLmdldENvbm5lY3Rpb24ocmVjb3JkLCBrZXksIGZpbHRlcnMpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRnZShzdG9yZSwgY29ubmVjdGlvbiwgbm9kZSwgZWRnZVR5cGUpIHtcbiAgcmV0dXJuIFJlbGF5UnVudGltZS5Db25uZWN0aW9uSGFuZGxlci5jcmVhdGVFZGdlKHN0b3JlLCBjb25uZWN0aW9uLCBub2RlLCBlZGdlVHlwZSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydEVkZ2VCZWZvcmUoY29ubmVjdGlvbiwgbmV3RWRnZSwgY3Vyc29yLCBwYXJhbSkge1xuICBSZWxheVJ1bnRpbWUuQ29ubmVjdGlvbkhhbmRsZXIuaW5zZXJ0RWRnZUJlZm9yZShjb25uZWN0aW9uLCBuZXdFZGdlLCBjdXJzb3IpO1xuICBcbn1cblxuZnVuY3Rpb24gaW5zZXJ0RWRnZUFmdGVyKGNvbm5lY3Rpb24sIG5ld0VkZ2UsIGN1cnNvciwgcGFyYW0pIHtcbiAgUmVsYXlSdW50aW1lLkNvbm5lY3Rpb25IYW5kbGVyLmluc2VydEVkZ2VBZnRlcihjb25uZWN0aW9uLCBuZXdFZGdlLCBjdXJzb3IpO1xuICBcbn1cblxuZnVuY3Rpb24gZGVsZXRlTm9kZShjb25uZWN0aW9uLCBub2RlSWQpIHtcbiAgUmVsYXlSdW50aW1lLkNvbm5lY3Rpb25IYW5kbGVyLmRlbGV0ZU5vZGUoY29ubmVjdGlvbiwgbm9kZUlkKTtcbiAgXG59XG5cbnZhciBDb25uZWN0aW9uSGFuZGxlciA9IHtcbiAgZ2V0Q29ubmVjdGlvbjogZ2V0Q29ubmVjdGlvbixcbiAgY3JlYXRlRWRnZTogY3JlYXRlRWRnZSxcbiAgaW5zZXJ0RWRnZUJlZm9yZTogaW5zZXJ0RWRnZUJlZm9yZSxcbiAgaW5zZXJ0RWRnZUFmdGVyOiBpbnNlcnRFZGdlQWZ0ZXIsXG4gIGRlbGV0ZU5vZGU6IGRlbGV0ZU5vZGVcbn07XG5cbmZ1bmN0aW9uIG1ha2Uoc2lua0ZuKSB7XG4gIHJldHVybiBSZWxheVJ1bnRpbWUuT2JzZXJ2YWJsZS5jcmVhdGUoKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgQ3VycnkuXzEoc2lua0ZuLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dDogcy5uZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBzLmVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogcy5jb21wbGV0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2xvc2VkOiBzLmNsb3NlZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG52YXIgT2JzZXJ2YWJsZSA9IHtcbiAgbWFrZTogbWFrZVxufTtcblxuZnVuY3Rpb24gbWFrZVByb21pc2VCYXNlZChmZXRjaEZ1bmN0aW9uLCBzdWJzY3JpcHRpb25GdW5jdGlvbiwgcGFyYW0pIHtcbiAgcmV0dXJuIFJlbGF5UnVudGltZS5OZXR3b3JrLmNyZWF0ZShmZXRjaEZ1bmN0aW9uLCBzdWJzY3JpcHRpb25GdW5jdGlvbik7XG59XG5cbmZ1bmN0aW9uIG1ha2VPYnNlcnZhYmxlQmFzZWQob2JzZXJ2YWJsZUZ1bmN0aW9uLCBzdWJzY3JpcHRpb25GdW5jdGlvbiwgcGFyYW0pIHtcbiAgcmV0dXJuIFJlbGF5UnVudGltZS5OZXR3b3JrLmNyZWF0ZShvYnNlcnZhYmxlRnVuY3Rpb24sIHN1YnNjcmlwdGlvbkZ1bmN0aW9uKTtcbn1cblxudmFyIE5ldHdvcmsgPSB7XG4gIG1ha2VQcm9taXNlQmFzZWQ6IG1ha2VQcm9taXNlQmFzZWQsXG4gIG1ha2VPYnNlcnZhYmxlQmFzZWQ6IG1ha2VPYnNlcnZhYmxlQmFzZWRcbn07XG5cbmZ1bmN0aW9uIG1ha2UkMShyZWNvcmRzLCBwYXJhbSkge1xuICByZXR1cm4gbmV3IFJlbGF5UnVudGltZS5SZWNvcmRTb3VyY2UocmVjb3Jkcyk7XG59XG5cbmZ1bmN0aW9uIG1ha2UkMihzb3VyY2UsIGdjUmVsZWFzZUJ1ZmZlclNpemUsIHBhcmFtKSB7XG4gIHJldHVybiBuZXcgUmVsYXlSdW50aW1lLlN0b3JlKHNvdXJjZSwge1xuICAgICAgICAgICAgICBnY1JlbGVhc2VCdWZmZXJTaXplOiBnY1JlbGVhc2VCdWZmZXJTaXplXG4gICAgICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFwUmVuZGVyUG9saWN5KHBhcmFtKSB7XG4gIGlmIChwYXJhbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICByZXR1cm4gXCJwYXJ0aWFsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcImZ1bGxcIjtcbiAgICB9XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG1ha2UkMyhuZXR3b3JrLCBzdG9yZSwgZ2V0RGF0YUlELCBkZWZhdWx0UmVuZGVyUG9saWN5LCBwYXJhbSkge1xuICByZXR1cm4gbmV3IFJlbGF5UnVudGltZS5FbnZpcm9ubWVudCh7XG4gICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmssXG4gICAgICAgICAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgICAgICAgICAgVU5TVEFCTEVfRE9fTk9UX1VTRV9nZXREYXRhSUQ6IGdldERhdGFJRCAhPT0gdW5kZWZpbmVkID8gQ3VycnkuX18yKGdldERhdGFJRCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIFVOU1RBQkxFX2RlZmF1bHRSZW5kZXJQb2xpY3k6IG1hcFJlbmRlclBvbGljeShkZWZhdWx0UmVuZGVyUG9saWN5KVxuICAgICAgICAgICAgfSk7XG59XG5cbnZhciBwcm92aWRlciA9IFJlYWN0UmVsYXkuUmVhY3RSZWxheUNvbnRleHQuUHJvdmlkZXI7XG5cbmZ1bmN0aW9uIFJlYXNvblJlbGF5JENvbnRleHQkUHJvdmlkZXIoUHJvcHMpIHtcbiAgdmFyIGVudmlyb25tZW50ID0gUHJvcHMuZW52aXJvbm1lbnQ7XG4gIHZhciBjaGlsZHJlbiA9IFByb3BzLmNoaWxkcmVuO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChwcm92aWRlciwge1xuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIGVudmlyb25tZW50OiBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VDb252ZXJ0ZWRWYWx1ZShjb252ZXJ0LCB2KSB7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNvbnZlcnQsIHYpO1xuICAgICAgICAgICAgICB9KSwgW3ZdKTtcbn1cblxudmFyIEVudmlyb25tZW50Tm90Rm91bmRJbkNvbnRleHQgPSBDYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiUmVhc29uUmVsYXkuRW52aXJvbm1lbnROb3RGb3VuZEluQ29udGV4dFwiKTtcblxuZnVuY3Rpb24gdXNlRW52aXJvbm1lbnRGcm9tQ29udGV4dChwYXJhbSkge1xuICB2YXIgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUmVhY3RSZWxheS5SZWFjdFJlbGF5Q29udGV4dCk7XG4gIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihjb250ZXh0KS5lbnZpcm9ubWVudDtcbiAgfVxuICB0aHJvdyBFbnZpcm9ubWVudE5vdEZvdW5kSW5Db250ZXh0O1xufVxuXG5mdW5jdGlvbiBtYXBGZXRjaFBvbGljeShwYXJhbSkge1xuICBpZiAocGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgc3dpdGNoIChwYXJhbSkge1xuICAgIGNhc2UgLyogU3RvcmVPbmx5ICovMCA6XG4gICAgICAgIHJldHVybiBcInN0b3JlLW9ubHlcIjtcbiAgICBjYXNlIC8qIFN0b3JlT3JOZXR3b3JrICovMSA6XG4gICAgICAgIHJldHVybiBcInN0b3JlLW9yLW5ldHdvcmtcIjtcbiAgICBjYXNlIC8qIFN0b3JlQW5kTmV0d29yayAqLzIgOlxuICAgICAgICByZXR1cm4gXCJzdG9yZS1hbmQtbmV0d29ya1wiO1xuICAgIGNhc2UgLyogTmV0d29ya09ubHkgKi8zIDpcbiAgICAgICAgcmV0dXJuIFwibmV0d29yay1vbmx5XCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gTWFrZVByZWxvYWRRdWVyeShDKSB7XG4gIHZhciBwcmVsb2FkID0gZnVuY3Rpb24gKGVudmlyb25tZW50LCB2YXJpYWJsZXMsIGZldGNoUG9saWN5LCBmZXRjaEtleSwgbmV0d29ya0NhY2hlQ29uZmlnLCBwYXJhbSkge1xuICAgIHJldHVybiBIb29rcy5wcmVsb2FkUXVlcnkoZW52aXJvbm1lbnQsIEMucXVlcnksIEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoQy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKSwge1xuICAgICAgICAgICAgICAgIGZldGNoS2V5OiBmZXRjaEtleSxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogbWFwRmV0Y2hQb2xpY3koZmV0Y2hQb2xpY3kpLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtDYWNoZUNvbmZpZzogbmV0d29ya0NhY2hlQ29uZmlnXG4gICAgICAgICAgICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgICAgICAgIHByZWxvYWQ6IHByZWxvYWRcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gTWFrZVVzZUZyYWdtZW50KEMpIHtcbiAgdmFyIHVzZSA9IGZ1bmN0aW9uIChmcikge1xuICAgIHZhciBkYXRhID0gSG9va3MudXNlRnJhZ21lbnQoQy5mcmFnbWVudFNwZWMsIGZyKTtcbiAgICByZXR1cm4gdXNlQ29udmVydGVkVmFsdWUoQy5jb252ZXJ0RnJhZ21lbnQsIGRhdGEpO1xuICB9O1xuICByZXR1cm4ge1xuICAgICAgICAgIHVzZTogdXNlXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VSZWZldGNoYWJsZUZuT3B0cyhmZXRjaFBvbGljeSwgcmVuZGVyUG9saWN5LCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgZmV0Y2hQb2xpY3k6IG1hcEZldGNoUG9saWN5KGZldGNoUG9saWN5KSxcbiAgICAgICAgICBVTlNUQUJMRV9yZW5kZXJQb2xpY3k6IG1hcFJlbmRlclBvbGljeShyZW5kZXJQb2xpY3kpLFxuICAgICAgICAgIG9uQ29tcGxldGU6IChmdW5jdGlvbiAobWF5YmVFeG4pIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gKG1heWJlRXhuID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShtYXliZUV4bik7XG4gICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEob25Db21wbGV0ZSwgbWF0Y2gpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gTWFrZVVzZVJlZmV0Y2hhYmxlRnJhZ21lbnQoQykge1xuICB2YXIgdXNlUmVmZXRjaGFibGUgPSBmdW5jdGlvbiAoZnIpIHtcbiAgICB2YXIgbWF0Y2ggPSBIb29rcy51c2VSZWZldGNoYWJsZUZyYWdtZW50KEMuZnJhZ21lbnRTcGVjLCBmcik7XG4gICAgdmFyIHJlZmV0Y2hGbiA9IG1hdGNoWzFdO1xuICAgIHZhciBkYXRhID0gdXNlQ29udmVydGVkVmFsdWUoQy5jb252ZXJ0RnJhZ21lbnQsIG1hdGNoWzBdKTtcbiAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgKGZ1bmN0aW9uICh2YXJpYWJsZXMsIGZldGNoUG9saWN5LCByZW5kZXJQb2xpY3ksIG9uQ29tcGxldGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKHJlZmV0Y2hGbiwgQ3VycnkuXzEoX2NsZWFuT2JqZWN0RnJvbVVuZGVmaW5lZCwgQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShDLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpKSwgbWFrZVJlZmV0Y2hhYmxlRm5PcHRzKGZldGNoUG9saWN5LCByZW5kZXJQb2xpY3ksIG9uQ29tcGxldGUpKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICBdO1xuICB9O1xuICByZXR1cm4ge1xuICAgICAgICAgIHVzZVJlZmV0Y2hhYmxlOiB1c2VSZWZldGNoYWJsZVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBNYWtlVXNlUGFnaW5hdGlvbkZyYWdtZW50KEMpIHtcbiAgdmFyIHVzZUJsb2NraW5nUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIChmcikge1xuICAgIHZhciBwID0gSG9va3MudXNlQmxvY2tpbmdQYWdpbmF0aW9uRnJhZ21lbnQoQy5mcmFnbWVudFNwZWMsIGZyKTtcbiAgICB2YXIgZGF0YSA9IHVzZUNvbnZlcnRlZFZhbHVlKEMuY29udmVydEZyYWdtZW50LCBwLmRhdGEpO1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgbG9hZE5leHQ6IChmdW5jdGlvbiAoY291bnQsIG9uQ29tcGxldGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAubG9hZE5leHQoY291bnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGxvYWRQcmV2aW91czogKGZ1bmN0aW9uIChjb3VudCwgb25Db21wbGV0ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5sb2FkUHJldmlvdXMoY291bnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhhc05leHQ6IHAuaGFzTmV4dCxcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzOiBwLmhhc1ByZXZpb3VzLFxuICAgICAgICAgICAgcmVmZXRjaDogKGZ1bmN0aW9uICh2YXJpYWJsZXMsIGZldGNoUG9saWN5LCByZW5kZXJQb2xpY3ksIG9uQ29tcGxldGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAucmVmZXRjaChDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKEMuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSksIG1ha2VSZWZldGNoYWJsZUZuT3B0cyhmZXRjaFBvbGljeSwgcmVuZGVyUG9saWN5LCBvbkNvbXBsZXRlKSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgfTtcbiAgdmFyIHVzZVBhZ2luYXRpb24gPSBmdW5jdGlvbiAoZnIpIHtcbiAgICB2YXIgcCA9IEhvb2tzLnVzZVBhZ2luYXRpb25GcmFnbWVudChDLmZyYWdtZW50U3BlYywgZnIpO1xuICAgIHZhciBkYXRhID0gdXNlQ29udmVydGVkVmFsdWUoQy5jb252ZXJ0RnJhZ21lbnQsIHAuZGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBsb2FkTmV4dDogKGZ1bmN0aW9uIChjb3VudCwgb25Db21wbGV0ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5sb2FkTmV4dChjb3VudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IG9uQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbG9hZFByZXZpb3VzOiAoZnVuY3Rpb24gKGNvdW50LCBvbkNvbXBsZXRlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmxvYWRQcmV2aW91cyhjb3VudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IG9uQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGFzTmV4dDogcC5oYXNOZXh0LFxuICAgICAgICAgICAgaGFzUHJldmlvdXM6IHAuaGFzUHJldmlvdXMsXG4gICAgICAgICAgICBpc0xvYWRpbmdOZXh0OiBwLmlzTG9hZGluZ05leHQsXG4gICAgICAgICAgICBpc0xvYWRpbmdQcmV2aW91czogcC5pc0xvYWRpbmdQcmV2aW91cyxcbiAgICAgICAgICAgIHJlZmV0Y2g6IChmdW5jdGlvbiAodmFyaWFibGVzLCBmZXRjaFBvbGljeSwgcmVuZGVyUG9saWN5LCBvbkNvbXBsZXRlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLnJlZmV0Y2goQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShDLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLCBtYWtlUmVmZXRjaGFibGVGbk9wdHMoZmV0Y2hQb2xpY3ksIHJlbmRlclBvbGljeSwgb25Db21wbGV0ZSkpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gIH07XG4gIHJldHVybiB7XG4gICAgICAgICAgdXNlQmxvY2tpbmdQYWdpbmF0aW9uOiB1c2VCbG9ja2luZ1BhZ2luYXRpb24sXG4gICAgICAgICAgdXNlUGFnaW5hdGlvbjogdXNlUGFnaW5hdGlvblxuICAgICAgICB9O1xufVxuXG52YXIgTXV0YXRpb25fZmFpbGVkID0gQ2FtbF9leGNlcHRpb25zLmNyZWF0ZShcIlJlYXNvblJlbGF5Lk11dGF0aW9uX2ZhaWxlZFwiKTtcblxuZnVuY3Rpb24gTWFrZVVzZU11dGF0aW9uKEMpIHtcbiAgdmFyIHVzZSA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHZhciBtYXRjaCA9IFJlbGF5RXhwZXJpbWVudGFsLnVzZU11dGF0aW9uKEMubm9kZSk7XG4gICAgdmFyIG11dGF0ZSA9IG1hdGNoWzBdO1xuICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgIChmdW5jdGlvbiAob25FcnJvciwgb25Db21wbGV0ZWQsIG9uVW5zdWJzY3JpYmUsIG9wdGltaXN0aWNSZXNwb25zZSwgb3B0aW1pc3RpY1VwZGF0ZXIsIHVwZGF0ZXIsIHZhcmlhYmxlcywgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEobXV0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZDogb25Db21wbGV0ZWQgIT09IHVuZGVmaW5lZCA/IChmdW5jdGlvbiAociwgZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKG9uQ29tcGxldGVkLCBDdXJyeS5fMShDLmNvbnZlcnRSZXNwb25zZSwgciksIChlcnJvcnMgPT0gbnVsbCkgPyB1bmRlZmluZWQgOiBDYW1sX29wdGlvbi5zb21lKGVycm9ycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVuc3Vic2NyaWJlOiBvblVuc3Vic2NyaWJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY1Jlc3BvbnNlICE9PSB1bmRlZmluZWQgPyBDYW1sX29wdGlvbi5zb21lKEN1cnJ5Ll8xKEMud3JhcFJlc3BvbnNlLCBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKG9wdGltaXN0aWNSZXNwb25zZSkpKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljVXBkYXRlcjogb3B0aW1pc3RpY1VwZGF0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlcjogdXBkYXRlciAhPT0gdW5kZWZpbmVkID8gKGZ1bmN0aW9uIChzdG9yZSwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMih1cGRhdGVyLCBzdG9yZSwgQ3VycnkuXzEoQy5jb252ZXJ0UmVzcG9uc2UsIHIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiBDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKEMuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWF0Y2hbMV1cbiAgICAgICAgICBdO1xuICB9O1xuICByZXR1cm4ge1xuICAgICAgICAgIHVzZTogdXNlXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIE1ha2VDb21taXRNdXRhdGlvbihDKSB7XG4gIHZhciBjb21taXRNdXRhdGlvbiA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCwgdmFyaWFibGVzLCBvcHRpbWlzdGljVXBkYXRlciwgb3B0aW1pc3RpY1Jlc3BvbnNlLCB1cGRhdGVyLCBvbkNvbXBsZXRlZCwgb25FcnJvciwgcGFyYW0pIHtcbiAgICByZXR1cm4gUmVsYXlSdW50aW1lLmNvbW1pdE11dGF0aW9uKGVudmlyb25tZW50LCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IEMubm9kZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoQy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlZDogKGZ1bmN0aW9uIChyZXMsIGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihvbkNvbXBsZXRlZCwgIShyZXMgPT0gbnVsbCkgPyBDYW1sX29wdGlvbi5zb21lKEN1cnJ5Ll8xKEMuY29udmVydFJlc3BvbnNlLCByZXMpKSA6IHVuZGVmaW5lZCwgKGVyciA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUoZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBvbkVycm9yOiAoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKG9uRXJyb3IsIChlcnIgPT0gbnVsbCkgPyB1bmRlZmluZWQgOiBDYW1sX29wdGlvbi5zb21lKGVycikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljUmVzcG9uc2UgIT09IHVuZGVmaW5lZCA/IENhbWxfb3B0aW9uLnNvbWUoQ3VycnkuXzEoQy53cmFwUmVzcG9uc2UsIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0aW1pc3RpY1Jlc3BvbnNlKSkpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG9wdGltaXN0aWNVcGRhdGVyOiBvcHRpbWlzdGljVXBkYXRlcixcbiAgICAgICAgICAgICAgICB1cGRhdGVyOiB1cGRhdGVyICE9PSB1bmRlZmluZWQgPyAoZnVuY3Rpb24gKHN0b3JlLCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKHVwZGF0ZXIsIHN0b3JlLCBDdXJyeS5fMShDLmNvbnZlcnRSZXNwb25zZSwgcikpO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9KTtcbiAgfTtcbiAgdmFyIGNvbW1pdE11dGF0aW9uUHJvbWlzZWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQsIHZhcmlhYmxlcywgb3B0aW1pc3RpY1VwZGF0ZXIsIG9wdGltaXN0aWNSZXNwb25zZSwgdXBkYXRlciwgcGFyYW0pIHtcbiAgICB2YXIgbWF0Y2ggPSAkJFByb21pc2UucGVuZGluZyh1bmRlZmluZWQpO1xuICAgIHZhciByZXNvbHZlID0gbWF0Y2hbMV07XG4gICAgUmVsYXlSdW50aW1lLmNvbW1pdE11dGF0aW9uKGVudmlyb25tZW50LCB7XG4gICAgICAgICAgbXV0YXRpb246IEMubm9kZSxcbiAgICAgICAgICB2YXJpYWJsZXM6IEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoQy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKSxcbiAgICAgICAgICBvbkNvbXBsZXRlZDogKGZ1bmN0aW9uIChyZXMsIGVycikge1xuICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEocmVzb2x2ZSwgLyogT2sgKi9CbG9jay5fXygwLCBbLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKHJlcyA9PSBudWxsKSA/IENhbWxfb3B0aW9uLnNvbWUoQ3VycnkuXzEoQy5jb252ZXJ0UmVzcG9uc2UsIHJlcykpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVyciA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1dKSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBvbkVycm9yOiAoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEocmVzb2x2ZSwgLyogRXJyb3IgKi9CbG9jay5fXygxLCBbKGVyciA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUoZXJyKV0pKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY1Jlc3BvbnNlICE9PSB1bmRlZmluZWQgPyBDYW1sX29wdGlvbi5zb21lKEN1cnJ5Ll8xKEMud3JhcFJlc3BvbnNlLCBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKG9wdGltaXN0aWNSZXNwb25zZSkpKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBvcHRpbWlzdGljVXBkYXRlcjogb3B0aW1pc3RpY1VwZGF0ZXIsXG4gICAgICAgICAgdXBkYXRlcjogdXBkYXRlciAhPT0gdW5kZWZpbmVkID8gKGZ1bmN0aW9uIChzdG9yZSwgcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMih1cGRhdGVyLCBzdG9yZSwgQ3VycnkuXzEoQy5jb252ZXJ0UmVzcG9uc2UsIHIpKTtcbiAgICAgICAgICAgICAgfSkgOiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoWzBdO1xuICB9O1xuICByZXR1cm4ge1xuICAgICAgICAgIGNvbW1pdE11dGF0aW9uOiBjb21taXRNdXRhdGlvbixcbiAgICAgICAgICBjb21taXRNdXRhdGlvblByb21pc2VkOiBjb21taXRNdXRhdGlvblByb21pc2VkXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbW1pdExvY2FsVXBkYXRlKGVudmlyb25tZW50LCB1cGRhdGVyKSB7XG4gIFJlbGF5UnVudGltZS5jb21taXRMb2NhbFVwZGF0ZShlbnZpcm9ubWVudCwgdXBkYXRlcik7XG4gIFxufVxuXG5mdW5jdGlvbiBNYWtlVXNlU3Vic2NyaXB0aW9uKEMpIHtcbiAgdmFyIHN1YnNjcmliZSA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCwgdmFyaWFibGVzLCBvbkNvbXBsZXRlZCwgb25FcnJvciwgb25OZXh0LCB1cGRhdGVyLCBwYXJhbSkge1xuICAgIHJldHVybiBSZWxheVJ1bnRpbWUucmVxdWVzdFN1YnNjcmlwdGlvbihlbnZpcm9ubWVudCwge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbjogQy5ub2RlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShDLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkOiBvbkNvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yLFxuICAgICAgICAgICAgICAgIG9uTmV4dDogb25OZXh0ICE9PSB1bmRlZmluZWQgPyAoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEob25OZXh0LCBDdXJyeS5fMShDLmNvbnZlcnRSZXNwb25zZSwgcikpO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB1cGRhdGVyOiB1cGRhdGVyICE9PSB1bmRlZmluZWQgPyAoZnVuY3Rpb24gKHN0b3JlLCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKHVwZGF0ZXIsIHN0b3JlLCBDdXJyeS5fMShDLmNvbnZlcnRSZXNwb25zZSwgcikpO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBkYXRhSWRUb1N0cmluZyhwcmltKSB7XG4gIHJldHVybiBwcmltO1xufVxuXG5mdW5jdGlvbiBtYWtlRGF0YUlkKHByaW0pIHtcbiAgcmV0dXJuIHByaW07XG59XG5cbmZ1bmN0aW9uIG1ha2VBcmd1bWVudHMocHJpbSkge1xuICByZXR1cm4gcHJpbTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVDbGllbnRJRChwcmltKSB7XG4gIHJldHVybiBSZWxheVJ1bnRpbWUuZ2VuZXJhdGVVbmlxdWVDbGllbnRJRCgpO1xufVxuXG5mdW5jdGlvbiBpc0NsaWVudElEKHByaW0pIHtcbiAgcmV0dXJuIFJlbGF5UnVudGltZS5pc0NsaWVudElEKHByaW0pO1xufVxuXG52YXIgc3RvcmVSb290SWQgPSBSZWxheVJ1bnRpbWUuUk9PVF9JRDtcblxudmFyIHN0b3JlUm9vdFR5cGUgPSBSZWxheVJ1bnRpbWUuUk9PVF9UWVBFO1xuXG5mdW5jdGlvbiBSZWNvcmRQcm94eV9pbnZhbGlkYXRlUmVjb3JkKHByaW0pIHtcbiAgcHJpbS5pbnZhbGlkYXRlUmVjb3JkKCk7XG4gIFxufVxuXG52YXIgUmVjb3JkUHJveHkgPSB7XG4gIGNvcHlGaWVsZHNGcm9tOiBjb3B5RmllbGRzRnJvbSxcbiAgZ2V0RGF0YUlkOiBnZXREYXRhSWQsXG4gIGdldExpbmtlZFJlY29yZDogZ2V0TGlua2VkUmVjb3JkLFxuICBnZXRMaW5rZWRSZWNvcmRzOiBnZXRMaW5rZWRSZWNvcmRzLFxuICBnZXRPckNyZWF0ZUxpbmtlZFJlY29yZDogZ2V0T3JDcmVhdGVMaW5rZWRSZWNvcmQsXG4gIGdldFR5cGU6IGdldFR5cGUsXG4gIGdldFZhbHVlU3RyaW5nOiBnZXRWYWx1ZVN0cmluZyxcbiAgZ2V0VmFsdWVTdHJpbmdBcnJheTogZ2V0VmFsdWVTdHJpbmdBcnJheSxcbiAgZ2V0VmFsdWVJbnQ6IGdldFZhbHVlSW50LFxuICBnZXRWYWx1ZUludEFycmF5OiBnZXRWYWx1ZUludEFycmF5LFxuICBnZXRWYWx1ZUZsb2F0OiBnZXRWYWx1ZUZsb2F0LFxuICBnZXRWYWx1ZUZsb2F0QXJyYXk6IGdldFZhbHVlRmxvYXRBcnJheSxcbiAgZ2V0VmFsdWVCb29sOiBnZXRWYWx1ZUJvb2wsXG4gIGdldFZhbHVlQm9vbEFycmF5OiBnZXRWYWx1ZUJvb2xBcnJheSxcbiAgc2V0TGlua2VkUmVjb3JkOiBzZXRMaW5rZWRSZWNvcmQsXG4gIHNldExpbmtlZFJlY29yZHM6IHNldExpbmtlZFJlY29yZHMsXG4gIHNldFZhbHVlU3RyaW5nOiBzZXRWYWx1ZVN0cmluZyxcbiAgc2V0VmFsdWVTdHJpbmdBcnJheTogc2V0VmFsdWVTdHJpbmdBcnJheSxcbiAgc2V0VmFsdWVJbnQ6IHNldFZhbHVlSW50LFxuICBzZXRWYWx1ZUludEFycmF5OiBzZXRWYWx1ZUludEFycmF5LFxuICBzZXRWYWx1ZUZsb2F0OiBzZXRWYWx1ZUZsb2F0LFxuICBzZXRWYWx1ZUZsb2F0QXJyYXk6IHNldFZhbHVlRmxvYXRBcnJheSxcbiAgc2V0VmFsdWVCb29sOiBzZXRWYWx1ZUJvb2wsXG4gIHNldFZhbHVlQm9vbEFycmF5OiBzZXRWYWx1ZUJvb2xBcnJheSxcbiAgdW5zZXRWYWx1ZTogdW5zZXRWYWx1ZSxcbiAgdW5zZXRMaW5rZWRSZWNvcmQ6IHVuc2V0TGlua2VkUmVjb3JkLFxuICB1bnNldExpbmtlZFJlY29yZHM6IHVuc2V0TGlua2VkUmVjb3JkcyxcbiAgaW52YWxpZGF0ZVJlY29yZDogUmVjb3JkUHJveHlfaW52YWxpZGF0ZVJlY29yZFxufTtcblxuZnVuY3Rpb24gUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eV9nZXRSb290KHByaW0pIHtcbiAgcmV0dXJuIHByaW0uZ2V0Um9vdCgpO1xufVxuXG5mdW5jdGlvbiBSZWNvcmRTb3VyY2VTZWxlY3RvclByb3h5X2ludmFsaWRhdGVTdG9yZShwcmltKSB7XG4gIHByaW0uaW52YWxpZGF0ZVN0b3JlKCk7XG4gIFxufVxuXG52YXIgUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eSA9IHtcbiAgY3JlYXRlOiBjcmVhdGUsXG4gICQkZGVsZXRlOiAkJGRlbGV0ZSxcbiAgZ2V0OiBnZXQsXG4gIGdldFJvb3Q6IFJlY29yZFNvdXJjZVNlbGVjdG9yUHJveHlfZ2V0Um9vdCxcbiAgZ2V0Um9vdEZpZWxkOiBnZXRSb290RmllbGQsXG4gIGdldFBsdXJhbFJvb3RGaWVsZDogZ2V0UGx1cmFsUm9vdEZpZWxkLFxuICBpbnZhbGlkYXRlU3RvcmU6IFJlY29yZFNvdXJjZVNlbGVjdG9yUHJveHlfaW52YWxpZGF0ZVN0b3JlXG59O1xuXG5mdW5jdGlvbiBSZWNvcmRTb3VyY2VQcm94eV9nZXRSb290KHByaW0pIHtcbiAgcmV0dXJuIHByaW0uZ2V0Um9vdCgpO1xufVxuXG5mdW5jdGlvbiBSZWNvcmRTb3VyY2VQcm94eV9pbnZhbGlkYXRlU3RvcmUocHJpbSkge1xuICBwcmltLmludmFsaWRhdGVTdG9yZSgpO1xuICBcbn1cblxudmFyIFJlY29yZFNvdXJjZVByb3h5ID0ge1xuICBjcmVhdGU6IGNyZWF0ZSQxLFxuICAkJGRlbGV0ZTogJCRkZWxldGUkMSxcbiAgZ2V0OiBnZXQkMSxcbiAgZ2V0Um9vdDogUmVjb3JkU291cmNlUHJveHlfZ2V0Um9vdCxcbiAgaW52YWxpZGF0ZVN0b3JlOiBSZWNvcmRTb3VyY2VQcm94eV9pbnZhbGlkYXRlU3RvcmVcbn07XG5cbmZ1bmN0aW9uIFJlY29yZFNvdXJjZV90b0pTT04ocHJpbSkge1xuICByZXR1cm4gcHJpbS50b0pTT04oKTtcbn1cblxudmFyIFJlY29yZFNvdXJjZSA9IHtcbiAgbWFrZTogbWFrZSQxLFxuICB0b0pTT046IFJlY29yZFNvdXJjZV90b0pTT05cbn07XG5cbmZ1bmN0aW9uIFN0b3JlX2dldFNvdXJjZShwcmltKSB7XG4gIHJldHVybiBwcmltLmdldFNvdXJjZSgpO1xufVxuXG52YXIgU3RvcmUgPSB7XG4gIG1ha2U6IG1ha2UkMixcbiAgZ2V0U291cmNlOiBTdG9yZV9nZXRTb3VyY2Vcbn07XG5cbmZ1bmN0aW9uIEVudmlyb25tZW50X2dldFN0b3JlKHByaW0pIHtcbiAgcmV0dXJuIHByaW0uZ2V0U3RvcmUoKTtcbn1cblxudmFyIEVudmlyb25tZW50ID0ge1xuICBtYWtlOiBtYWtlJDMsXG4gIGdldFN0b3JlOiBFbnZpcm9ubWVudF9nZXRTdG9yZVxufTtcblxudmFyIERpc3Bvc2FibGUgPSB7XG4gIGRpc3Bvc2U6IChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgcHJpbS5kaXNwb3NlKCk7XG4gICAgICBcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gTWFrZVVzZVF1ZXJ5KGZ1bmFyZykge1xuICB2YXIgdXNlID0gZnVuY3Rpb24gKHZhcmlhYmxlcywgZmV0Y2hQb2xpY3ksIHJlbmRlclBvbGljeSwgZmV0Y2hLZXksIG5ldHdvcmtDYWNoZUNvbmZpZywgcGFyYW0pIHtcbiAgICB2YXIgZGF0YSA9IEhvb2tzLnVzZUxhenlMb2FkUXVlcnkoZnVuYXJnLnF1ZXJ5LCBDdXJyeS5fMShfY2xlYW5PYmplY3RGcm9tVW5kZWZpbmVkLCBDdXJyeS5fMShmdW5hcmcuY29udmVydFZhcmlhYmxlcywgQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCB2YXJpYWJsZXMpKSksIHtcbiAgICAgICAgICBmZXRjaEtleTogZmV0Y2hLZXksXG4gICAgICAgICAgZmV0Y2hQb2xpY3k6IG1hcEZldGNoUG9saWN5KGZldGNoUG9saWN5KSxcbiAgICAgICAgICBVTlNUQUJMRV9yZW5kZXJQb2xpY3k6IG1hcFJlbmRlclBvbGljeShyZW5kZXJQb2xpY3kpLFxuICAgICAgICAgIG5ldHdvcmtDYWNoZUNvbmZpZzogbmV0d29ya0NhY2hlQ29uZmlnXG4gICAgICAgIH0pO1xuICAgIHJldHVybiB1c2VDb252ZXJ0ZWRWYWx1ZShmdW5hcmcuY29udmVydFJlc3BvbnNlLCBkYXRhKTtcbiAgfTtcbiAgdmFyIHByZWxvYWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQsIHZhcmlhYmxlcywgZmV0Y2hQb2xpY3ksIGZldGNoS2V5LCBuZXR3b3JrQ2FjaGVDb25maWcsIHBhcmFtKSB7XG4gICAgcmV0dXJuIEhvb2tzLnByZWxvYWRRdWVyeShlbnZpcm9ubWVudCwgZnVuYXJnLnF1ZXJ5LCBDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKGZ1bmFyZy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKSwge1xuICAgICAgICAgICAgICAgIGZldGNoS2V5OiBmZXRjaEtleSxcbiAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogbWFwRmV0Y2hQb2xpY3koZmV0Y2hQb2xpY3kpLFxuICAgICAgICAgICAgICAgIG5ldHdvcmtDYWNoZUNvbmZpZzogbmV0d29ya0NhY2hlQ29uZmlnXG4gICAgICAgICAgICAgIH0pO1xuICB9O1xuICB2YXIgdXNlUHJlbG9hZGVkID0gZnVuY3Rpb24gKHRva2VuLCByZW5kZXJQb2xpY3ksIHBhcmFtKSB7XG4gICAgdmFyIGRhdGEgPSBIb29rcy51c2VQcmVsb2FkZWRRdWVyeShmdW5hcmcucXVlcnksIHRva2VuLCByZW5kZXJQb2xpY3kgIT09IHVuZGVmaW5lZCA/ICh7XG4gICAgICAgICAgICAgIFVOU1RBQkxFX3JlbmRlclBvbGljeTogbWFwUmVuZGVyUG9saWN5KHJlbmRlclBvbGljeSlcbiAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gdXNlQ29udmVydGVkVmFsdWUoZnVuYXJnLmNvbnZlcnRSZXNwb25zZSwgZGF0YSk7XG4gIH07XG4gIHZhciAkJGZldGNoID0gZnVuY3Rpb24gKGVudmlyb25tZW50LCB2YXJpYWJsZXMsIG9uUmVzdWx0KSB7XG4gICAgUmVsYXlSdW50aW1lLmZldGNoUXVlcnkoZW52aXJvbm1lbnQsIGZ1bmFyZy5xdWVyeSwgQ3VycnkuXzEoZnVuYXJnLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLnRoZW4oKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgQ3VycnkuXzEob25SZXN1bHQsIC8qIE9rICovQmxvY2suX18oMCwgW0N1cnJ5Ll8xKGZ1bmFyZy5jb252ZXJ0UmVzcG9uc2UsIHJlcyldKSk7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH0pKS5jYXRjaCgoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgQ3VycnkuXzEob25SZXN1bHQsIC8qIEVycm9yICovQmxvY2suX18oMSwgW2Vycl0pKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICB9KSk7XG4gICAgXG4gIH07XG4gIHZhciBmZXRjaFByb21pc2VkID0gZnVuY3Rpb24gKGVudmlyb25tZW50LCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgbWF0Y2ggPSAkJFByb21pc2UucGVuZGluZyh1bmRlZmluZWQpO1xuICAgIHZhciByZXNvbHZlID0gbWF0Y2hbMV07XG4gICAgUmVsYXlSdW50aW1lLmZldGNoUXVlcnkoZW52aXJvbm1lbnQsIGZ1bmFyZy5xdWVyeSwgQ3VycnkuXzEoZnVuYXJnLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLnRoZW4oKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgQ3VycnkuXzEocmVzb2x2ZSwgLyogT2sgKi9CbG9jay5fXygwLCBbQ3VycnkuXzEoZnVuYXJnLmNvbnZlcnRSZXNwb25zZSwgcmVzKV0pKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSkpLmNhdGNoKChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBDdXJyeS5fMShyZXNvbHZlLCAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFtlcnJdKSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgfSkpO1xuICAgIHJldHVybiBtYXRjaFswXTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICB1c2U6IHVzZSxcbiAgICAgICAgICAkJGZldGNoOiAkJGZldGNoLFxuICAgICAgICAgIGZldGNoUHJvbWlzZWQ6IGZldGNoUHJvbWlzZWQsXG4gICAgICAgICAgcHJlbG9hZDogcHJlbG9hZCxcbiAgICAgICAgICB1c2VQcmVsb2FkZWQ6IHVzZVByZWxvYWRlZFxuICAgICAgICB9O1xufVxuXG52YXIgQ29udGV4dF9Qcm92aWRlciA9IHtcbiAgbWFrZVByb3BzOiAoZnVuY3Rpb24gKHByaW0sIHByaW0kMSwgcHJpbSQyLCBwcmltJDMpIHtcbiAgICAgIHZhciB0bXAgPSB7XG4gICAgICAgIGVudmlyb25tZW50OiBwcmltLFxuICAgICAgICBjaGlsZHJlbjogcHJpbSQxXG4gICAgICB9O1xuICAgICAgaWYgKHByaW0kMiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRtcC5rZXkgPSBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKHByaW0kMik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG1wO1xuICAgIH0pLFxuICBtYWtlOiBSZWFzb25SZWxheSRDb250ZXh0JFByb3ZpZGVyXG59O1xuXG52YXIgQ29udGV4dCA9IHtcbiAgY29udGV4dDogUmVhY3RSZWxheS5SZWFjdFJlbGF5Q29udGV4dCxcbiAgUHJvdmlkZXI6IENvbnRleHRfUHJvdmlkZXJcbn07XG5cbmZ1bmN0aW9uIGZldGNoUXVlcnkocHJpbSwgcHJpbSQxLCBwcmltJDIpIHtcbiAgcmV0dXJuIFJlbGF5UnVudGltZS5mZXRjaFF1ZXJ5KHByaW0sIHByaW0kMSwgcHJpbSQyKTtcbn1cblxuZXhwb3J0IHtcbiAgZGF0YUlkVG9TdHJpbmcgLFxuICBtYWtlRGF0YUlkICxcbiAgbWFrZUFyZ3VtZW50cyAsXG4gIGdlbmVyYXRlQ2xpZW50SUQgLFxuICBnZW5lcmF0ZVVuaXF1ZUNsaWVudElEICxcbiAgaXNDbGllbnRJRCAsXG4gIHN0b3JlUm9vdElkICxcbiAgc3RvcmVSb290VHlwZSAsXG4gIF9jbGVhbk9iamVjdEZyb21VbmRlZmluZWQgLFxuICBfY2xlYW5WYXJpYWJsZXMgLFxuICBfY29udmVydE9iaiAsXG4gIFJlY29yZFByb3h5ICxcbiAgUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eSAsXG4gIFJlY29yZFNvdXJjZVByb3h5ICxcbiAgQ29ubmVjdGlvbkhhbmRsZXIgLFxuICBPYnNlcnZhYmxlICxcbiAgTmV0d29yayAsXG4gIFJlY29yZFNvdXJjZSAsXG4gIFN0b3JlICxcbiAgRW52aXJvbm1lbnQgLFxuICBEaXNwb3NhYmxlICxcbiAgbWFwRmV0Y2hQb2xpY3kgLFxuICBNYWtlVXNlUXVlcnkgLFxuICBNYWtlUHJlbG9hZFF1ZXJ5ICxcbiAgTWFrZVVzZUZyYWdtZW50ICxcbiAgTWFrZVVzZVJlZmV0Y2hhYmxlRnJhZ21lbnQgLFxuICBNYWtlVXNlUGFnaW5hdGlvbkZyYWdtZW50ICxcbiAgTWFrZVVzZU11dGF0aW9uICxcbiAgQ29udGV4dCAsXG4gIEVudmlyb25tZW50Tm90Rm91bmRJbkNvbnRleHQgLFxuICB1c2VFbnZpcm9ubWVudEZyb21Db250ZXh0ICxcbiAgTXV0YXRpb25fZmFpbGVkICxcbiAgTWFrZUNvbW1pdE11dGF0aW9uICxcbiAgY29tbWl0TG9jYWxVcGRhdGUgLFxuICBmZXRjaFF1ZXJ5ICxcbiAgTWFrZVVzZVN1YnNjcmlwdGlvbiAsXG4gIFxufVxuLyogX2NsZWFuT2JqZWN0RnJvbVVuZGVmaW5lZCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLyoqXG4gKiBUaGlzIGlzIGJvdW5kIHRvIGVhY2ggbmVzdGVkIG9iamVjdCB3aXRoIGZyYWdtZW50cyxcbiAqIGFuZCB1c2VkIGFzIGEgZHVtbXkgZnVuY3Rpb24gZm9yIGNhc3RpbmcgYSByZWNvcmRcbiAqIHRvIGEgSnMudCBvYmplY3Qgd2l0aCB0aGUgZnJhZ21lbnQgcmVmZXJlbmNlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0RnJhZ21lbnRSZWZzKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZ2V0TmV3T2JqKG1heWJlTmV3T2JqLCBjdXJyZW50T2JqKSB7XG4gIHJldHVybiBtYXliZU5ld09iaiB8fCBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50T2JqKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGF0aE5hbWUocGF0aCkge1xuICByZXR1cm4gcGF0aC5qb2luKFwiX1wiKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5ld1BhdGgoY3VycmVudFBhdGgsIG5ld0tleXMpIHtcbiAgcmV0dXJuIFtdLmNvbmNhdChjdXJyZW50UGF0aCwgbmV3S2V5cyk7XG59XG5cbi8qKlxuICogUnVucyBvbiBlYWNoIG9iamVjdCBpbiB0aGUgdHJlZSBhbmQgZm9sbG93cyB0aGUgcHJvdmlkZWQgaW5zdHJ1Y3Rpb25zXG4gKiB0byBhcHBseSB0cmFuc2Zvcm1zIGV0Yy5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2UoXG4gIGZ1bGxJbnN0cnVjdGlvbk1hcCxcbiAgY3VycmVudFBhdGgsXG4gIGN1cnJlbnRPYmosXG4gIGluc3RydWN0aW9uTWFwLFxuICBjb252ZXJ0ZXJzLFxuICBudWxsYWJsZVZhbHVlLFxuICBpbnN0cnVjdGlvblBhdGhzLFxuICBhZGRGcmFnbWVudE9uUm9vdFxuKSB7XG4gIHZhciBuZXdPYmo7XG5cbiAgaWYgKGFkZEZyYWdtZW50T25Sb290KSB7XG4gICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG4gICAgbmV3T2JqLmdldEZyYWdtZW50UmVmcyA9IGdldEZyYWdtZW50UmVmcy5iaW5kKG5ld09iaik7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gY3VycmVudE9iaikge1xuICAgIHZhciBpc1VuaW9uID0gZmFsc2U7XG4gICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBjdXJyZW50T2JqW2tleV07XG5cbiAgICAvLyBJbnN0cnVjdGlvbnMgYXJlIHN0b3JlZCBieSB0aGUgcGF0aCBpbiB0aGUgb2JqZWN0IHdoZXJlIHRoZXkgYXBwbHlcbiAgICB2YXIgdGhpc1BhdGggPSBtYWtlTmV3UGF0aChjdXJyZW50UGF0aCwgW2tleV0pO1xuICAgIHZhciBwYXRoID0gZ2V0UGF0aE5hbWUodGhpc1BhdGgpO1xuXG4gICAgdmFyIGluc3RydWN0aW9ucyA9IGluc3RydWN0aW9uTWFwW3BhdGhdO1xuXG4gICAgdmFyIGhhc0RlZXBlckluc3RydWN0aW9ucyA9XG4gICAgICBpbnN0cnVjdGlvblBhdGhzLmZpbHRlcihmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBwLmluZGV4T2YocGF0aCkgPT09IDAgJiYgcC5sZW5ndGggPiBwYXRoLmxlbmd0aDtcbiAgICAgIH0pLmxlbmd0aCA+IDA7XG5cbiAgICBpZiAoaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBpZiAoY3VycmVudE9ialtrZXldID09IG51bGwpIHtcbiAgICAgICAgaWYgKGluc3RydWN0aW9uc1tcIm5cIl0gPT09IFwiXCIpIHtcbiAgICAgICAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcbiAgICAgICAgICBuZXdPYmpba2V5XSA9IG51bGxhYmxlVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzaG91bGRDb252ZXJ0Um9vdE9iaiA9XG4gICAgICAgICAgdHlwZW9mIGluc3RydWN0aW9uc1tcInJcIl0gPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICBmdWxsSW5zdHJ1Y3Rpb25NYXBbaW5zdHJ1Y3Rpb25zW1wiclwiXV07XG5cbiAgICAgICAgdmFyIHNob3VsZEFkZEZyYWdtZW50Rm4gPSBpbnN0cnVjdGlvbnNbXCJmXCJdID09PSBcIlwiO1xuXG4gICAgICAgIHZhciBzaG91bGRDb252ZXJ0RW51bSA9XG4gICAgICAgICAgdHlwZW9mIGluc3RydWN0aW9uc1tcImVcIl0gPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAhIWNvbnZlcnRlcnNbaW5zdHJ1Y3Rpb25zW1wiZVwiXV07XG5cbiAgICAgICAgdmFyIHNob3VsZENvbnZlcnRVbmlvbiA9XG4gICAgICAgICAgdHlwZW9mIGluc3RydWN0aW9uc1tcInVcIl0gPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAhIWNvbnZlcnRlcnNbaW5zdHJ1Y3Rpb25zW1widVwiXV07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZSBhcnJheXNcbiAgICAgICAgICovXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRPYmpba2V5XSkpIHtcbiAgICAgICAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcbiAgICAgICAgICBuZXdPYmpba2V5XSA9IGN1cnJlbnRPYmpba2V5XS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbGFibGVWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbnZlcnRSb290T2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cmF2ZXJzZXIoXG4gICAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgICBmdWxsSW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICAgICAgY29udmVydGVycyxcbiAgICAgICAgICAgICAgICBudWxsYWJsZVZhbHVlLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uc1tcInJcIl1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbnZlcnRFbnVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb252ZXJ0ZXJzW2luc3RydWN0aW9uc1tcImVcIl1dKHYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHNob3VsZENvbnZlcnRVbmlvbiAmJlxuICAgICAgICAgICAgICB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICB0eXBlb2Ygdi5fX3R5cGVuYW1lID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaXNVbmlvbiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgdmFyIG5ld1BhdGggPSBtYWtlTmV3UGF0aChjdXJyZW50UGF0aCwgW1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB2Ll9fdHlwZW5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICB2YXIgdW5pb25Sb290SGFzRnJhZ21lbnQgPVxuICAgICAgICAgICAgICAgIChpbnN0cnVjdGlvbk1hcFtnZXRQYXRoTmFtZShuZXdQYXRoKV0gfHwge30pLmYgPT09IFwiXCI7XG5cbiAgICAgICAgICAgICAgdmFyIHRyYXZlcnNlZFZhbHVlID0gdHJhdmVyc2UoXG4gICAgICAgICAgICAgICAgZnVsbEluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZXJzLFxuICAgICAgICAgICAgICAgIG51bGxhYmxlVmFsdWUsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25QYXRocyxcbiAgICAgICAgICAgICAgICB1bmlvblJvb3RIYXNGcmFnbWVudFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIHJldHVybiBjb252ZXJ0ZXJzW2luc3RydWN0aW9uc1tcInVcIl1dKHRyYXZlcnNlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNob3VsZEFkZEZyYWdtZW50Rm4gJiYgdHlwZW9mIHYgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgdmFyIG9ialdpdGhGcmFnbWVudEZuID0gT2JqZWN0LmFzc2lnbih7fSwgdik7XG4gICAgICAgICAgICAgIG9ialdpdGhGcmFnbWVudEZuLmdldEZyYWdtZW50UmVmcyA9IGdldEZyYWdtZW50UmVmcy5iaW5kKFxuICAgICAgICAgICAgICAgIG9ialdpdGhGcmFnbWVudEZuXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBvYmpXaXRoRnJhZ21lbnRGbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSGFuZGxlIG5vcm1hbCB2YWx1ZXMuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIHYgPSBjdXJyZW50T2JqW2tleV07XG5cbiAgICAgICAgICBpZiAoc2hvdWxkQ29udmVydFJvb3RPYmopIHtcbiAgICAgICAgICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSB0cmF2ZXJzZXIoXG4gICAgICAgICAgICAgIHYsXG4gICAgICAgICAgICAgIGZ1bGxJbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgICAgY29udmVydGVycyxcbiAgICAgICAgICAgICAgbnVsbGFibGVWYWx1ZSxcbiAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zW1wiclwiXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2hvdWxkQ29udmVydEVudW0pIHtcbiAgICAgICAgICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBjb252ZXJ0ZXJzW2luc3RydWN0aW9uc1tcImVcIl1dKHYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNob3VsZENvbnZlcnRVbmlvbiAmJlxuICAgICAgICAgICAgdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2Ll9fdHlwZW5hbWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlzVW5pb24gPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgbmV3UGF0aCA9IG1ha2VOZXdQYXRoKGN1cnJlbnRQYXRoLCBbXG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgdi5fX3R5cGVuYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB2YXIgdW5pb25Sb290SGFzRnJhZ21lbnQgPVxuICAgICAgICAgICAgICAoaW5zdHJ1Y3Rpb25NYXBbZ2V0UGF0aE5hbWUobmV3UGF0aCldIHx8IHt9KS5mID09PSBcIlwiO1xuXG4gICAgICAgICAgICB2YXIgdHJhdmVyc2VkVmFsdWUgPSB0cmF2ZXJzZShcbiAgICAgICAgICAgICAgZnVsbEluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgICBuZXdQYXRoLFxuICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICBpbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgICAgY29udmVydGVycyxcbiAgICAgICAgICAgICAgbnVsbGFibGVWYWx1ZSxcbiAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25QYXRocyxcbiAgICAgICAgICAgICAgdW5pb25Sb290SGFzRnJhZ21lbnRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBjb252ZXJ0ZXJzW2luc3RydWN0aW9uc1tcInVcIl1dKHRyYXZlcnNlZFZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2hvdWxkQWRkRnJhZ21lbnRGbiAmJiB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG5cbiAgICAgICAgICAgIHZhciBvYmpXaXRoRnJhZ21lbnRGbiA9IE9iamVjdC5hc3NpZ24oe30sIHYpO1xuXG4gICAgICAgICAgICBvYmpXaXRoRnJhZ21lbnRGbi5nZXRGcmFnbWVudFJlZnMgPSBnZXRGcmFnbWVudFJlZnMuYmluZChcbiAgICAgICAgICAgICAgb2JqV2l0aEZyYWdtZW50Rm5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIG5ld09ialtrZXldID0gb2JqV2l0aEZyYWdtZW50Rm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc0RlZXBlckluc3RydWN0aW9ucyAmJiBvcmlnaW5hbFZhbHVlICE9IG51bGwgJiYgIWlzVW5pb24pIHtcbiAgICAgIHZhciBuZXh0T2JqID0gKG5ld09iaiAmJiBuZXdPYmpba2V5XSkgfHwgY3VycmVudE9ialtrZXldO1xuXG4gICAgICBpZiAodHlwZW9mIG5leHRPYmogPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkob3JpZ2luYWxWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHRyYXZlcnNlZE9iaiA9IHRyYXZlcnNlKFxuICAgICAgICAgIGZ1bGxJbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICB0aGlzUGF0aCxcbiAgICAgICAgICBuZXh0T2JqLFxuICAgICAgICAgIGluc3RydWN0aW9uTWFwLFxuICAgICAgICAgIGNvbnZlcnRlcnMsXG4gICAgICAgICAgbnVsbGFibGVWYWx1ZSxcbiAgICAgICAgICBpbnN0cnVjdGlvblBhdGhzXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRyYXZlcnNlZE9iaiAhPT0gbmV4dE9iaikge1xuICAgICAgICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuICAgICAgICAgIG5ld09ialtrZXldID0gdHJhdmVyc2VkT2JqO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3JpZ2luYWxWYWx1ZSkpIHtcbiAgICAgICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG4gICAgICAgIG5ld09ialtrZXldID0gbmV4dE9iai5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9IG51bGxcbiAgICAgICAgICAgID8gdHJhdmVyc2UoXG4gICAgICAgICAgICAgICAgZnVsbEluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgICAgIHRoaXNQYXRoLFxuICAgICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICAgICAgY29udmVydGVycyxcbiAgICAgICAgICAgICAgICBudWxsYWJsZVZhbHVlLFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uUGF0aHNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBvO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqIHx8IGN1cnJlbnRPYmo7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhbiBvYmplY3QgKHNuYXBzaG90IGZyb20gdGhlIFJlbGF5IHN0b3JlKSBhbmQgYXBwbGllcyBhXG4gKiBzZXQgb2YgY29udmVyc2lvbnMgZGVlcGx5IG9uIHRoZSBvYmplY3QgKGluc3RydWN0aW9ucyBjb21pbmcgZnJvbSBcImNvbnZlcnRlcnNcIi1wcm9wKS5cbiAqIEl0IGNvbnZlcnRzIG51bGxhYmxlIHZhbHVlcyBlaXRoZXIgdG8gbnVsbCBvciB1bmRlZmluZWQsIGFuZCBpdCB3cmFwcy91bndyYXBzIGVudW1zXG4gKiBhbmQgdW5pb25zLlxuICpcbiAqIEl0IHByZXNlcnZlcyBzdHJ1Y3R1cmFsIGludGVncml0eSB3aGVyZSBwb3NzaWJsZSwgYW5kIHJldHVybiBuZXcgb2JqZWN0cyB3aGVyZSBwcm9wZXJ0aWVzXG4gKiBoYXZlIGJlZW4gbW9kaWZpZWQuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlcihcbiAgcm9vdCxcbiAgX2luc3RydWN0aW9uTWFwcyxcbiAgY29udmVydGVycyxcbiAgbnVsbGFibGVWYWx1ZSxcbiAgcm9vdE9iamVjdEtleVxuKSB7XG4gIGlmICghcm9vdCkge1xuICAgIHJldHVybiBudWxsYWJsZVZhbHVlO1xuICB9XG5cbiAgdmFyIGluc3RydWN0aW9uTWFwcyA9IF9pbnN0cnVjdGlvbk1hcHMgfHwge307XG4gIHZhciBpbnN0cnVjdGlvbk1hcCA9IGluc3RydWN0aW9uTWFwc1tyb290T2JqZWN0S2V5IHx8IFwiX19yb290XCJdO1xuXG4gIC8vIE5vIGluc3RydWN0aW9uc1xuICBpZiAoIWluc3RydWN0aW9uTWFwKSB7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICB2YXIgaW5zdHJ1Y3Rpb25QYXRocyA9IE9iamVjdC5rZXlzKGluc3RydWN0aW9uTWFwKTtcblxuICAvLyBOb3RoaW5nIHRvIGNvbnZlcnQsIGJhaWwgZWFybHlcbiAgaWYgKGluc3RydWN0aW9uUGF0aHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICAvLyBXZSdsbCBhZGQgYSBnZXRGcmFnbWVudFJlZnMgZnVuY3Rpb24gdG8gdGhlIHJvb3QgaWYgbmVlZGVkIGhlcmUuXG4gIC8vIGdldEZyYWdtZW50UmVmcyBpcyBjdXJyZW50bHkgdGhlIG9ubHkgdGhpbmcgdGhhdCdzIHBvc3NpYmxlIHRvIGFkZFxuICAvLyB0byB0aGUgcm9vdC5cbiAgdmFyIGZyYWdtZW50c09uUm9vdCA9IChpbnN0cnVjdGlvbk1hcFtcIlwiXSB8fCB7fSkuZiA9PT0gXCJcIjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyb290KSkge1xuICAgIHJldHVybiByb290Lm1hcChmdW5jdGlvbih2KSB7XG4gICAgICBpZiAodiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsYWJsZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdiA9PSBudWxsXG4gICAgICAgID8gbnVsbGFibGVWYWx1ZVxuICAgICAgICA6IHRyYXZlcnNlKFxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25NYXBzLFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICB2LFxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICBjb252ZXJ0ZXJzLFxuICAgICAgICAgICAgbnVsbGFibGVWYWx1ZSxcbiAgICAgICAgICAgIGluc3RydWN0aW9uUGF0aHMsXG4gICAgICAgICAgICBmcmFnbWVudHNPblJvb3RcbiAgICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IE9iamVjdC5hc3NpZ24oe30sIHJvb3QpO1xuXG4gIHZhciB2ID0gdHJhdmVyc2UoXG4gICAgaW5zdHJ1Y3Rpb25NYXBzLFxuICAgIFtdLFxuICAgIG5ld09iaixcbiAgICBpbnN0cnVjdGlvbk1hcCxcbiAgICBjb252ZXJ0ZXJzLFxuICAgIG51bGxhYmxlVmFsdWUsXG4gICAgaW5zdHJ1Y3Rpb25QYXRocyxcbiAgICBmcmFnbWVudHNPblJvb3RcbiAgKTtcblxuICByZXR1cm4gdjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHRyYXZlcnNlciB9O1xuIiwiLy8gVGhpcyBmaWxlIGlzIHVzZWQgYXMgYSBmaWxlbmFtZSBzaGltIGZvciB0aGUgYWN0dWFsXG4vLyBBcHAucmUgUmVhc29uIGNvbXBvbmVudFxuaW1wb3J0IHsgbWFrZSB9IGZyb20gXCIuL2NhdGVnb3J5LmJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2U7XG4iLCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBHZXRDYXRlZ29yeSROZXh0anNEZWZhdWx0IGZyb20gXCIuLi9jb21wb25lbnRzL0dldENhdGVnb3J5LmJzLmpzXCI7XG5cbmZ1bmN0aW9uIENhdGVnb3J5KFByb3BzKSB7XG4gIHZhciByb3V0ZXIgPSBSb3V0ZXIudXNlUm91dGVyKCk7XG4gIHZhciBpZCA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeUlkO1xuICB2YXIgZmFsbGJhY2sgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJMb2FkaW5nLi4uXCIpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuU3VzcGVuc2UsIHtcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KEdldENhdGVnb3J5JE5leHRqc0RlZmF1bHQubWFrZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBmYWxsYmFjazogZmFsbGJhY2tcbiAgICAgICAgICAgICAgICB9KSk7XG59XG5cbnZhciBtYWtlID0gQ2F0ZWdvcnk7XG5cbmV4cG9ydCB7XG4gIG1ha2UgLFxuICBcbn1cbi8qIHJlYWN0IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheS9ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheS9saWIvcmVsYXktZXhwZXJpbWVudGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbGF5LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=