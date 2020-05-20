module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/_app.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./common/App.bs.js":
/*!**************************!*\
  !*** ./common/App.bs.js ***!
  \**************************/
/*! exports provided: PageComponent, reducer, make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reason-relay/src/ReasonRelay.bs.js */ "./node_modules/reason-relay/src/ReasonRelay.bs.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RelayEnv_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RelayEnv.bs.js */ "./common/RelayEnv.bs.js");
/* harmony import */ var _layouts_MainLayout_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/MainLayout.bs.js */ "./layouts/MainLayout.bs.js");
/* harmony import */ var _EntityProvider_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EntityProvider.bs.js */ "./common/EntityProvider.bs.js");








__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../styles/main.css */ "./styles/main.css", 7));
__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css", 7));
var PageComponent = {};

function reducer(param, action) {
  return action[0];
}

function make(props) {
  var match = react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](reducer, {
    categoryId: "",
    moduleId: "",
    subjecId: ""
  });
  var router = next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]();
  var content = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](props.Component, props.pageProps);
  var match$1 = router.route;
  var shownContent = match$1 === "/" ? content : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_layouts_MainLayout_bs_js__WEBPACK_IMPORTED_MODULE_6__["make"], {
    children: content
  });
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_3__["Context"].Provider.make, bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__["_4"](reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_3__["Context"].Provider.makeProps, _RelayEnv_bs_js__WEBPACK_IMPORTED_MODULE_5__["environment"], null, undefined, undefined), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: null
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("meta", {
    content: "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover",
    name: "viewport"
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", undefined, "Review Dashboard")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_EntityProvider_bs_js__WEBPACK_IMPORTED_MODULE_7__["make"], _EntityProvider_bs_js__WEBPACK_IMPORTED_MODULE_7__["makeProps"](
  /* tuple */
  [match[0], match[1]], shownContent, undefined)));
}


/*  Not a pure module */

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

/***/ "./common/RelayEnv.bs.js":
/*!*******************************!*\
  !*** ./common/RelayEnv.bs.js ***!
  \*******************************/
/*! exports provided: Graphql_error, fetchQuery, network, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graphql_error", function() { return Graphql_error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchQuery", function() { return fetchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "network", function() { return network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var bs_fetch_src_Fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-fetch/src/Fetch.js */ "./node_modules/bs-fetch/src/Fetch.js");
/* harmony import */ var bs_platform_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bs-platform/lib/es6/js_dict.js */ "./node_modules/bs-platform/lib/es6/js_dict.js");
/* harmony import */ var bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-platform/lib/es6/caml_option.js */ "./node_modules/bs-platform/lib/es6/caml_option.js");
/* harmony import */ var reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reason-relay/src/ReasonRelay.bs.js */ "./node_modules/reason-relay/src/ReasonRelay.bs.js");
/* harmony import */ var bs_platform_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bs-platform/lib/es6/caml_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_exceptions.js");
/* harmony import */ var bs_platform_lib_es6_caml_chrome_debugger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bs-platform/lib/es6/caml_chrome_debugger.js */ "./node_modules/bs-platform/lib/es6/caml_chrome_debugger.js");






var Graphql_error = bs_platform_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_4__["create"]("RelayEnv-NextjsDefault.Graphql_error");

function fetchQuery(operation, variables, _cacheConfig) {
  return fetch("http://localhost:4000/api", bs_fetch_src_Fetch_js__WEBPACK_IMPORTED_MODULE_0__["RequestInit"].make(
  /* Post */
  2, {
    "content-type": "application/json",
    accept: "application/json"
  }, bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__["some"](JSON.stringify(bs_platform_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_1__["fromList"](
  /* :: */
  bs_platform_lib_es6_caml_chrome_debugger_js__WEBPACK_IMPORTED_MODULE_5__["simpleVariant"]("::", [
  /* tuple */
  ["query", operation.text],
  /* :: */
  bs_platform_lib_es6_caml_chrome_debugger_js__WEBPACK_IMPORTED_MODULE_5__["simpleVariant"]("::", [
  /* tuple */
  ["variables", variables],
  /* [] */
  0])])))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined)).then(function (resp) {
    if (resp.ok) {
      return resp.json();
    } else {
      return Promise.reject([Graphql_error, "Request failed: " + resp.statusText]);
    }
  });
}

var network = reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_3__["Network"].makePromiseBased(fetchQuery, undefined, undefined);
var environment = reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_3__["Environment"].make(network, reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_3__["Store"].make(reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_3__["RecordSource"].make(undefined, undefined), undefined, undefined), undefined, undefined, undefined);

/* network Not a pure module */

/***/ }),

/***/ "./common/__generated__/CategorySelectQuery_graphql.bs.js":
/*!****************************************************************!*\
  !*** ./common/__generated__/CategorySelectQuery_graphql.bs.js ***!
  \****************************************************************/
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
      "name": "CategorySelectQuery",
      "selections": v0
      /*: any*/
      ,
      "type": "RootQueryType"
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [],
      "kind": "Operation",
      "name": "CategorySelectQuery",
      "selections": v0
      /*: any*/

    },
    "params": {
      "id": null,
      "metadata": {},
      "name": "CategorySelectQuery",
      "operationKind": "query",
      "text": "query CategorySelectQuery {\n  listCategories {\n    name\n    id\n  }\n}\n"
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

/***/ "./components/CategorySelect.bs.js":
/*!*****************************************!*\
  !*** ./components/CategorySelect.bs.js ***!
  \*****************************************/
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
/* harmony import */ var reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reason-relay/src/ReasonRelay.bs.js */ "./node_modules/reason-relay/src/ReasonRelay.bs.js");
/* harmony import */ var _common_generated_CategorySelectQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/__generated__/CategorySelectQuery_graphql.bs.js */ "./common/__generated__/CategorySelectQuery_graphql.bs.js");






var convertResponse = _common_generated_CategorySelectQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__["Internal"].convertResponse;
var convertVariables = _common_generated_CategorySelectQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__["Internal"].convertVariables;
var UseQuery = reason_relay_src_ReasonRelay_bs_js__WEBPACK_IMPORTED_MODULE_4__["MakeUseQuery"]({
  query: _common_generated_CategorySelectQuery_graphql_bs_js__WEBPACK_IMPORTED_MODULE_5__["node"],
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

function CategorySelect(Props) {
  var queryData = bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_2__["_6"](use, undefined, undefined, undefined, undefined, undefined, undefined);

  var categories = queryData.listCategories;
  var content = categories !== undefined ? bs_platform_lib_es6_array_js__WEBPACK_IMPORTED_MODULE_1__["mapi"](function (i, cat) {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option, {
      key: String(i),
      value: cat.id,
      children: cat.name
    });
  }, categories) : react__WEBPACK_IMPORTED_MODULE_3__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option, {
    key: "0",
    value: "0",
    children: "Nada"
  });
  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    className: "w-40",
    children: content
  });
}

var make = CategorySelect;

/* UseQuery Not a pure module */

/***/ }),

/***/ "./components/Header.bs.js":
/*!*********************************!*\
  !*** ./components/Header.bs.js ***!
  \*********************************/
/*! exports provided: make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategorySelect_bs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategorySelect.bs.js */ "./components/CategorySelect.bs.js");




function Header(Props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", {
    className: "bg-indigo-700 shadow flex justify-between items-center py-4 px-10"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    children: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      className: "text-white font-bold uppercase tracking-wider hover:text-indigo-300 cursor-pointer select-none"
    }, "Review Dashboard")
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", {
    className: "flex justify-between items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    children: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CategorySelect_bs_js__WEBPACK_IMPORTED_MODULE_2__["make"], {}),
    fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", undefined, "Loading...")
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "text-white ml-5"
  }, "Hello User")));
}

var make = Header;

/* react Not a pure module */

/***/ }),

/***/ "./components/Sidebar.bs.js":
/*!**********************************!*\
  !*** ./components/Sidebar.bs.js ***!
  \**********************************/
/*! exports provided: style, make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_EntityProvider_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/EntityProvider.bs.js */ "./common/EntityProvider.bs.js");




var style = {
  width: 250
};

function Sidebar(Props) {
  var match = _common_EntityProvider_bs_js__WEBPACK_IMPORTED_MODULE_3__["useEntity"](undefined);
  var state = match[0];
  var categoryId = state.categoryId;
  console.log(state);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
    defaultOpenKeys: ["sub1", "sub2"],
    mode: "inline",
    style: style,
    children: null
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].SubMenu, {
    children: null,
    key: "sub1",
    title: "Lectures"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
    key: "1",
    children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[categoryId]",
      as: "/" + (String(categoryId) + ""),
      children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", undefined, "Modules")
    })
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
    key: "2",
    children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[categoryId]/subjects",
      as: "/" + (String(categoryId) + "/subjects"),
      children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", undefined, "Subjects")
    })
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
    key: "3",
    children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[categoryId]/topics",
      as: "/" + (String(categoryId) + "/topics"),
      children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", undefined, "Topics")
    })
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
    key: "4",
    children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[categoryId]/pages",
      as: "/" + (String(categoryId) + "/pages"),
      children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", undefined, "Pages")
    })
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].SubMenu, {
    children: null,
    key: "sub2",
    title: "Tests"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
    key: "6",
    children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[categoryId]/exams",
      as: "/" + (String(categoryId) + "/exams"),
      children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", undefined, "Exams")
    })
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
    key: "7",
    children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[categoryId]/cards",
      as: "/" + (String(categoryId) + "/cards"),
      children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", undefined, "Cards")
    })
  })));
}

var make = Sidebar;

/* antd Not a pure module */

/***/ }),

/***/ "./layouts/MainLayout.bs.js":
/*!**********************************!*\
  !*** ./layouts/MainLayout.bs.js ***!
  \**********************************/
/*! exports provided: Link, make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_bs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header.bs.js */ "./components/Header.bs.js");
/* harmony import */ var _components_Sidebar_bs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar.bs.js */ "./components/Sidebar.bs.js");




function MainLayout(Props) {
  var children = Props.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], undefined, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Header_bs_js__WEBPACK_IMPORTED_MODULE_1__["make"], {}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "flex h-screen"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Sidebar_bs_js__WEBPACK_IMPORTED_MODULE_2__["make"], {}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "px-10 py-5 w-full"
  }, children)));
}

var Link;
var make = MainLayout;

/* react Not a pure module */

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

/***/ "./node_modules/bs-fetch/src/Fetch.js":
/*!********************************************!*\
  !*** ./node_modules/bs-fetch/src/Fetch.js ***!
  \********************************************/
/*! exports provided: HeadersInit, $$Headers, BodyInit, Body, RequestInit, $$Request, $$Response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersInit", function() { return HeadersInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$Headers", function() { return $$Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyInit", function() { return BodyInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInit", function() { return RequestInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$Request", function() { return $$Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$Response", function() { return $$Response; });
/* harmony import */ var bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bs-platform/lib/es6/curry.js */ "./node_modules/bs-platform/lib/es6/curry.js");
/* harmony import */ var bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bs-platform/lib/es6/caml_option.js */ "./node_modules/bs-platform/lib/es6/caml_option.js");
/* harmony import */ var bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-platform/lib/es6/caml_builtin_exceptions.js */ "./node_modules/bs-platform/lib/es6/caml_builtin_exceptions.js");




function encodeRequestMethod(method_) {
  if (typeof method_ !== "number") {
    return method_[0];
  }

  switch (method_) {
    case
    /* Get */
    0:
      return "GET";

    case
    /* Head */
    1:
      return "HEAD";

    case
    /* Post */
    2:
      return "POST";

    case
    /* Put */
    3:
      return "PUT";

    case
    /* Delete */
    4:
      return "DELETE";

    case
    /* Connect */
    5:
      return "CONNECT";

    case
    /* Options */
    6:
      return "OPTIONS";

    case
    /* Trace */
    7:
      return "TRACE";

    case
    /* Patch */
    8:
      return "PATCH";
  }
}

function encodeReferrerPolicy(param) {
  switch (param) {
    case
    /* None */
    0:
      return "";

    case
    /* NoReferrer */
    1:
      return "no-referrer";

    case
    /* NoReferrerWhenDowngrade */
    2:
      return "no-referrer-when-downgrade";

    case
    /* SameOrigin */
    3:
      return "same-origin";

    case
    /* Origin */
    4:
      return "origin";

    case
    /* StrictOrigin */
    5:
      return "strict-origin";

    case
    /* OriginWhenCrossOrigin */
    6:
      return "origin-when-cross-origin";

    case
    /* StrictOriginWhenCrossOrigin */
    7:
      return "strict-origin-when-cross-origin";

    case
    /* UnsafeUrl */
    8:
      return "unsafe-url";
  }
}

function encodeRequestMode(param) {
  switch (param) {
    case
    /* Navigate */
    0:
      return "navigate";

    case
    /* SameOrigin */
    1:
      return "same-origin";

    case
    /* NoCORS */
    2:
      return "no-cors";

    case
    /* CORS */
    3:
      return "cors";
  }
}

function encodeRequestCredentials(param) {
  switch (param) {
    case
    /* Omit */
    0:
      return "omit";

    case
    /* SameOrigin */
    1:
      return "same-origin";

    case
    /* Include */
    2:
      return "include";
  }
}

function encodeRequestCache(param) {
  switch (param) {
    case
    /* Default */
    0:
      return "default";

    case
    /* NoStore */
    1:
      return "no-store";

    case
    /* Reload */
    2:
      return "reload";

    case
    /* NoCache */
    3:
      return "no-cache";

    case
    /* ForceCache */
    4:
      return "force-cache";

    case
    /* OnlyIfCached */
    5:
      return "only-if-cached";
  }
}

function encodeRequestRedirect(param) {
  switch (param) {
    case
    /* Follow */
    0:
      return "follow";

    case
    /* Error */
    1:
      return "error";

    case
    /* Manual */
    2:
      return "manual";
  }
}

var HeadersInit = {};
var $$Headers = {};
var BodyInit = {};

function map(f, v) {
  if (v !== undefined) {
    return bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["some"](bs_platform_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__["_1"](f, bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](v)));
  }
}

function make(method_, headers, body, referrer, referrerPolicyOpt, mode, credentials, cache, redirect, integrityOpt, keepalive) {
  var referrerPolicy = referrerPolicyOpt !== undefined ? referrerPolicyOpt :
  /* None */
  0;
  var integrity = integrityOpt !== undefined ? integrityOpt : "";
  var partial_arg = integrity;
  var partial_arg$1 = map(encodeRequestRedirect, redirect);
  var partial_arg$2 = map(encodeRequestCache, cache);
  var partial_arg$3 = map(encodeRequestCredentials, credentials);
  var partial_arg$4 = map(encodeRequestMode, mode);
  var partial_arg$5 = encodeReferrerPolicy(referrerPolicy);
  var partial_arg$6 = map(encodeRequestMethod, method_);
  return function (param) {
    var tmp = {};

    if (partial_arg$6 !== undefined) {
      tmp.method = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](partial_arg$6);
    }

    if (headers !== undefined) {
      tmp.headers = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](headers);
    }

    if (body !== undefined) {
      tmp.body = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](body);
    }

    if (referrer !== undefined) {
      tmp.referrer = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](referrer);
    }

    if (partial_arg$5 !== undefined) {
      tmp.referrerPolicy = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](partial_arg$5);
    }

    if (partial_arg$4 !== undefined) {
      tmp.mode = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](partial_arg$4);
    }

    if (partial_arg$3 !== undefined) {
      tmp.credentials = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](partial_arg$3);
    }

    if (partial_arg$2 !== undefined) {
      tmp.cache = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](partial_arg$2);
    }

    if (partial_arg$1 !== undefined) {
      tmp.redirect = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](partial_arg$1);
    }

    if (partial_arg !== undefined) {
      tmp.integrity = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](partial_arg);
    }

    if (keepalive !== undefined) {
      tmp.keepalive = bs_platform_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_1__["valFromOption"](keepalive);
    }

    return tmp;
  };
}

function method_(self) {
  var method_$1 = self.method;

  switch (method_$1) {
    case "CONNECT":
      return (
        /* Connect */
        5
      );

    case "DELETE":
      return (
        /* Delete */
        4
      );

    case "GET":
      return (
        /* Get */
        0
      );

    case "HEAD":
      return (
        /* Head */
        1
      );

    case "OPTIONS":
      return (
        /* Options */
        6
      );

    case "PATCH":
      return (
        /* Patch */
        8
      );

    case "POST":
      return (
        /* Post */
        2
      );

    case "PUT":
      return (
        /* Put */
        3
      );

    case "TRACE":
      return (
        /* Trace */
        7
      );

    default:
      return (
        /* Other */
        [method_$1]
      );
  }
}

function type_(self) {
  var e = self.type;

  switch (e) {
    case "":
      return (
        /* None */
        0
      );

    case "audio":
      return (
        /* Audio */
        1
      );

    case "font":
      return (
        /* Font */
        2
      );

    case "image":
      return (
        /* Image */
        3
      );

    case "script":
      return (
        /* Script */
        4
      );

    case "style":
      return (
        /* Style */
        5
      );

    case "track":
      return (
        /* Track */
        6
      );

    case "video":
      return (
        /* Video */
        7
      );

    default:
      throw [bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["failure"], "Unknown requestType: " + e];
  }
}

function destination(self) {
  var e = self.destination;

  switch (e) {
    case "":
      return (
        /* None */
        0
      );

    case "document":
      return (
        /* Document */
        1
      );

    case "embed":
      return (
        /* Embed */
        2
      );

    case "font":
      return (
        /* Font */
        3
      );

    case "image":
      return (
        /* Image */
        4
      );

    case "manifest":
      return (
        /* Manifest */
        5
      );

    case "media":
      return (
        /* Media */
        6
      );

    case "object":
      return (
        /* Object */
        7
      );

    case "report":
      return (
        /* Report */
        8
      );

    case "script":
      return (
        /* Script */
        9
      );

    case "serviceworker":
      return (
        /* ServiceWorker */
        10
      );

    case "sharedworder":
      return (
        /* SharedWorker */
        11
      );

    case "style":
      return (
        /* Style */
        12
      );

    case "worker":
      return (
        /* Worker */
        13
      );

    case "xslt":
      return (
        /* Xslt */
        14
      );

    default:
      throw [bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["failure"], "Unknown requestDestination: " + e];
  }
}

function referrerPolicy(self) {
  var e = self.referrerPolicy;

  switch (e) {
    case "":
      return (
        /* None */
        0
      );

    case "no-referrer":
      return (
        /* NoReferrer */
        1
      );

    case "no-referrer-when-downgrade":
      return (
        /* NoReferrerWhenDowngrade */
        2
      );

    case "origin":
      return (
        /* Origin */
        4
      );

    case "origin-when-cross-origin":
      return (
        /* OriginWhenCrossOrigin */
        6
      );

    case "same-origin":
      return (
        /* SameOrigin */
        3
      );

    case "strict-origin":
      return (
        /* StrictOrigin */
        5
      );

    case "strict-origin-when-cross-origin":
      return (
        /* StrictOriginWhenCrossOrigin */
        7
      );

    case "unsafe-url":
      return (
        /* UnsafeUrl */
        8
      );

    default:
      throw [bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["failure"], "Unknown referrerPolicy: " + e];
  }
}

function mode(self) {
  var e = self.mode;

  switch (e) {
    case "cors":
      return (
        /* CORS */
        3
      );

    case "navigate":
      return (
        /* Navigate */
        0
      );

    case "no-cors":
      return (
        /* NoCORS */
        2
      );

    case "same-origin":
      return (
        /* SameOrigin */
        1
      );

    default:
      throw [bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["failure"], "Unknown requestMode: " + e];
  }
}

function credentials(self) {
  var e = self.credentials;

  switch (e) {
    case "include":
      return (
        /* Include */
        2
      );

    case "omit":
      return (
        /* Omit */
        0
      );

    case "same-origin":
      return (
        /* SameOrigin */
        1
      );

    default:
      throw [bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["failure"], "Unknown requestCredentials: " + e];
  }
}

function cache(self) {
  var e = self.cache;

  switch (e) {
    case "default":
      return (
        /* Default */
        0
      );

    case "force-cache":
      return (
        /* ForceCache */
        4
      );

    case "no-cache":
      return (
        /* NoCache */
        3
      );

    case "no-store":
      return (
        /* NoStore */
        1
      );

    case "only-if-cached":
      return (
        /* OnlyIfCached */
        5
      );

    case "reload":
      return (
        /* Reload */
        2
      );

    default:
      throw [bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["failure"], "Unknown requestCache: " + e];
  }
}

function redirect(self) {
  var e = self.redirect;

  switch (e) {
    case "error":
      return (
        /* Error */
        1
      );

    case "follow":
      return (
        /* Follow */
        0
      );

    case "manual":
      return (
        /* Manual */
        2
      );

    default:
      throw [bs_platform_lib_es6_caml_builtin_exceptions_js__WEBPACK_IMPORTED_MODULE_2__["failure"], "Unknown requestRedirect: " + e];
  }
}

var $$Request = {
  method_: method_,
  type_: type_,
  destination: destination,
  referrerPolicy: referrerPolicy,
  mode: mode,
  credentials: credentials,
  cache: cache,
  redirect: redirect
};
var $$Response = {};
var Body = {};
var RequestInit = {
  make: make
};

/* No side effect */

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

/***/ "./node_modules/bs-platform/lib/es6/js_dict.js":
/*!*****************************************************!*\
  !*** ./node_modules/bs-platform/lib/es6/js_dict.js ***!
  \*****************************************************/
/*! exports provided: get, unsafeDeleteKey, entries, values, fromList, fromArray, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeDeleteKey", function() { return unsafeDeleteKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromList", function() { return fromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/bs-platform/lib/es6/caml_option.js");


function get(dict, k) {
  if (k in dict) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_0__["some"](dict[k]);
  }
}

var unsafeDeleteKey = function (dict, key) {
  delete dict[key];
};

function entries(dict) {
  var keys = Object.keys(dict);
  var l = keys.length;
  var values = new Array(l);

  for (var i = 0; i < l; ++i) {
    var key = keys[i];
    values[i] =
    /* tuple */
    [key, dict[key]];
  }

  return values;
}

function values(dict) {
  var keys = Object.keys(dict);
  var l = keys.length;
  var values$1 = new Array(l);

  for (var i = 0; i < l; ++i) {
    values$1[i] = dict[keys[i]];
  }

  return values$1;
}

function fromList(entries) {
  var dict = {};
  var _param = entries;

  while (true) {
    var param = _param;

    if (!param) {
      return dict;
    }

    var match = param[0];
    dict[match[0]] = match[1];
    _param = param[1];
    continue;
  }

  ;
}

function fromArray(entries) {
  var dict = {};
  var l = entries.length;

  for (var i = 0; i < l; ++i) {
    var match = entries[i];
    dict[match[0]] = match[1];
  }

  return dict;
}

function map(f, source) {
  var target = {};
  var keys = Object.keys(source);
  var l = keys.length;

  for (var i = 0; i < l; ++i) {
    var key = keys[i];
    target[key] = f(source[key]);
  }

  return target;
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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_App_bs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/App.bs */ "./common/App.bs.js");
// This file is used as a filename shim for the actual
// App.re Reason component

/* harmony default export */ __webpack_exports__["default"] = (_common_App_bs__WEBPACK_IMPORTED_MODULE_0__["make"]);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21tb24vQXBwLmJzLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9FbnRpdHlQcm92aWRlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vUmVsYXlFbnYuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL19fZ2VuZXJhdGVkX18vQ2F0ZWdvcnlTZWxlY3RRdWVyeV9ncmFwaHFsLmJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnlTZWxlY3QuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyLmJzLmpzIiwid2VicGFjazovLy8uL2xheW91dHMvTWFpbkxheW91dC5icy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLWZldGNoL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfY2hyb21lX2RlYnVnZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2pzX2V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9vYmouanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9vcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvY3VycnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JzLXBsYXRmb3JtL2xpYi9lczYvanNfZGljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYXNvbi1wcm9taXNlL3NyYy9qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFzb24tcmVsYXkvc3JjL1JlYXNvblJlbGF5LmJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFzb24tcmVsYXkvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVsYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWxheS9ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlbGF5L2xpYi9yZWxheS1leHBlcmltZW50YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWxheS1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiUGFnZUNvbXBvbmVudCIsInJlZHVjZXIiLCJwYXJhbSIsImFjdGlvbiIsIm1ha2UiLCJwcm9wcyIsIm1hdGNoIiwiUmVhY3QiLCJjYXRlZ29yeUlkIiwibW9kdWxlSWQiLCJzdWJqZWNJZCIsInJvdXRlciIsIlJvdXRlciIsImNvbnRlbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYXRjaCQxIiwicm91dGUiLCJzaG93bkNvbnRlbnQiLCJNYWluTGF5b3V0JE5leHRqc0RlZmF1bHQiLCJjaGlsZHJlbiIsIlJlYXNvblJlbGF5IiwiUHJvdmlkZXIiLCJDdXJyeSIsIm1ha2VQcm9wcyIsIlJlbGF5RW52JE5leHRqc0RlZmF1bHQiLCJ1bmRlZmluZWQiLCJIZWFkIiwibmFtZSIsIkVudGl0eVByb3ZpZGVyJE5leHRqc0RlZmF1bHQiLCJpbml0VmFsdWVfMDAwIiwiaW5pdFZhbHVlXzAwMSIsImluaXRWYWx1ZSIsImNvbnRleHQiLCJ1c2VFbnRpdHkiLCJ2YWx1ZSIsIkdyYXBocWxfZXJyb3IiLCJDYW1sX2V4Y2VwdGlvbnMiLCJmZXRjaFF1ZXJ5Iiwib3BlcmF0aW9uIiwidmFyaWFibGVzIiwiX2NhY2hlQ29uZmlnIiwiZmV0Y2giLCJGZXRjaCIsImFjY2VwdCIsIkNhbWxfb3B0aW9uIiwiSlNPTiIsInN0cmluZ2lmeSIsIkpzX2RpY3QiLCJDYW1sX2Nocm9tZV9kZWJ1Z2dlciIsInRleHQiLCJ0aGVuIiwicmVzcCIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXNUZXh0IiwibmV0d29yayIsIm1ha2VQcm9taXNlQmFzZWQiLCJlbnZpcm9ubWVudCIsIlR5cGVzIiwicmVzcG9uc2VDb252ZXJ0ZXIiLCJjb252ZXJ0UmVzcG9uc2UiLCJ2IiwidmFyaWFibGVzQ29udmVydGVyIiwiY29udmVydFZhcmlhYmxlcyIsIkludGVybmFsIiwicmVzcG9uc2VDb252ZXJ0ZXJNYXAiLCJ2YXJpYWJsZXNDb252ZXJ0ZXJNYXAiLCJVdGlscyIsIm5vZGUiLCJ2MCIsIlByZWxvYWQiLCJxdWVyeSIsInByZWxvYWQiLCJDYXRlZ29yeVNlbGVjdFF1ZXJ5X2dyYXBocWwkTmV4dGpzRGVmYXVsdCIsIlVzZVF1ZXJ5IiwidXNlIiwiUXVlcnlfZmV0Y2giLCIkJGZldGNoIiwiUXVlcnlfZmV0Y2hQcm9taXNlZCIsImZldGNoUHJvbWlzZWQiLCJRdWVyeV9wcmVsb2FkIiwiUXVlcnlfdXNlUHJlbG9hZGVkIiwidXNlUHJlbG9hZGVkIiwiUXVlcnkiLCJPcGVyYXRpb24iLCJDYXRlZ29yeVNlbGVjdCIsIlByb3BzIiwicXVlcnlEYXRhIiwiY2F0ZWdvcmllcyIsImxpc3RDYXRlZ29yaWVzIiwiJCRBcnJheSIsImkiLCJjYXQiLCJBbnRkIiwiT3B0aW9uIiwia2V5IiwiU3RyaW5nIiwiaWQiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJMaW5rIiwiaHJlZiIsIkNhdGVnb3J5U2VsZWN0JE5leHRqc0RlZmF1bHQiLCJmYWxsYmFjayIsInN0eWxlIiwid2lkdGgiLCJTaWRlYmFyIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdE9wZW5LZXlzIiwibW9kZSIsIlN1Yk1lbnUiLCJ0aXRsZSIsIkl0ZW0iLCJhcyIsIk1haW5MYXlvdXQiLCJIZWFkZXIkTmV4dGpzRGVmYXVsdCIsIlNpZGViYXIkTmV4dGpzRGVmYXVsdCIsImVuY29kZVJlcXVlc3RNZXRob2QiLCJtZXRob2RfIiwiZW5jb2RlUmVmZXJyZXJQb2xpY3kiLCJlbmNvZGVSZXF1ZXN0TW9kZSIsImVuY29kZVJlcXVlc3RDcmVkZW50aWFscyIsImVuY29kZVJlcXVlc3RDYWNoZSIsImVuY29kZVJlcXVlc3RSZWRpcmVjdCIsIkhlYWRlcnNJbml0IiwiJCRIZWFkZXJzIiwiQm9keUluaXQiLCJtYXAiLCJmIiwiaGVhZGVycyIsImJvZHkiLCJyZWZlcnJlciIsInJlZmVycmVyUG9saWN5T3B0IiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsInJlZGlyZWN0IiwiaW50ZWdyaXR5T3B0Iiwia2VlcGFsaXZlIiwicmVmZXJyZXJQb2xpY3kiLCJpbnRlZ3JpdHkiLCJwYXJ0aWFsX2FyZyIsInBhcnRpYWxfYXJnJDEiLCJwYXJ0aWFsX2FyZyQyIiwicGFydGlhbF9hcmckMyIsInBhcnRpYWxfYXJnJDQiLCJwYXJ0aWFsX2FyZyQ1IiwicGFydGlhbF9hcmckNiIsInRtcCIsIm1ldGhvZCIsInNlbGYiLCJtZXRob2RfJDEiLCJ0eXBlXyIsImUiLCJ0eXBlIiwiQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMiLCJkZXN0aW5hdGlvbiIsIiQkUmVxdWVzdCIsIiQkUmVzcG9uc2UiLCJCb2R5IiwiUmVxdWVzdEluaXQiLCJtYWtlX2Zsb2F0IiwiQ2FtbF9hcnJheSIsIkZsb2F0YXJyYXkiLCJpbml0IiwibCIsInJlcyIsIm1ha2VfbWF0cml4Iiwic3giLCJzeSIsIngiLCJjb3B5IiwiYSIsImxlbmd0aCIsImFwcGVuZCIsImExIiwiYTIiLCJsMSIsImNvbmNhdCIsInN1YiIsIm9mcyIsImxlbiIsImZpbGwiLCJpX2ZpbmlzaCIsImJsaXQiLCJvZnMxIiwib2ZzMiIsIml0ZXIiLCJpdGVyMiIsImIiLCJyIiwibWFwMiIsImxhIiwibGIiLCJpdGVyaSIsIm1hcGkiLCJ0b19saXN0IiwiX2kiLCJfcmVzIiwibGlzdF9sZW5ndGgiLCJfYWNjdSIsIl9wYXJhbSIsImFjY3UiLCJvZl9saXN0IiwiZm9sZF9sZWZ0IiwiZm9sZF9yaWdodCIsImV4aXN0cyIsInAiLCJuIiwiZm9yX2FsbCIsIm1lbSIsIkNhbWxfb2JqIiwibWVtcSIsIkJvdHRvbSIsInNvcnQiLCJjbXAiLCJtYXhzb24iLCJpMzEiLCJ0cmlja2xlIiwiaSQxIiwiaiIsInJhd19pIiwiaSQyIiwiQ2FtbF9qc19leGNlcHRpb25zIiwiYnViYmxlIiwidHJpY2tsZXVwIiwiZmF0aGVyIiwiZSQxIiwic3RhYmxlX3NvcnQiLCJtZXJnZSIsInNyYzFvZnMiLCJzcmMxbGVuIiwic3JjMiIsInNyYzJvZnMiLCJzcmMybGVuIiwiZHN0IiwiZHN0b2ZzIiwic3JjMXIiLCJzcmMyciIsIl9pMSIsIl9zMSIsIl9pMiIsIl9zMiIsIl9kIiwiZCIsInMyIiwiaTIiLCJzMSIsImkxIiwiaTEkMSIsImkyJDEiLCJpc29ydHRvIiwic3Jjb2ZzIiwic29ydHRvIiwibDIiLCJ0IiwiY3JlYXRlX21hdHJpeCIsImZhc3Rfc29ydCIsIl9fIiwidGFnIiwiYmxvY2siLCJjYW1sX2FycmF5X3N1YiIsIm9mZnNldCIsInJlc3VsdCIsIkFycmF5IiwiX2FjYyIsIl9sIiwiYWNjIiwiYXJyIiwibCQxIiwiayIsImNhbWxfYXJyYXlfY29uY2F0IiwiY2FtbF9hcnJheV9zZXQiLCJ4cyIsImluZGV4IiwibmV3dmFsIiwiY2FtbF9hcnJheV9nZXQiLCJjYW1sX21ha2VfdmVjdCIsImNhbWxfbWFrZV9mbG9hdF92ZWN0IiwiY2FtbF9hcnJheV9ibGl0IiwiaiQxIiwiY2FtbF9hcnJheV9kdXAiLCJwcmltIiwic2xpY2UiLCJvdXRfb2ZfbWVtb3J5Iiwic3lzX2Vycm9yIiwiZmFpbHVyZSIsImludmFsaWRfYXJndW1lbnQiLCJlbmRfb2ZfZmlsZSIsImRpdmlzaW9uX2J5X3plcm8iLCJub3RfZm91bmQiLCJtYXRjaF9mYWlsdXJlIiwic3RhY2tfb3ZlcmZsb3ciLCJzeXNfYmxvY2tlZF9pbyIsImFzc2VydF9mYWlsdXJlIiwidW5kZWZpbmVkX3JlY3Vyc2l2ZV9tb2R1bGUiLCJzZXR1cENocm9tZURlYnVnZ2VyIiwiXyIsIm9sU3R5bGUiLCJjb2xvblN0eWxlIiwic2hvd09iamVjdCIsImxpc3RUb0FycmF5IiwiZGF0YSIsImN1ciIsInB1c2giLCJ2YXJpYW50Q3VzdG9tRm9ybWF0dGVyIiwicmVjb3JkVmFyaWFudCIsInNwYWNlZERhdGEiLCJmb3JFYWNoIiwidmFyaWFudFByZXZpZXciLCJpc09DYW1sRXhjZXB0aW9uT3JFeHRlbnNpb25IZWFkIiwiaXNBcnJheSIsImlzT0NhbWxFeGNlcHRpb25PckV4dGVuc2lvbiIsImZvcm1hdHRlciIsImhlYWRlciIsInJlY29yZFBvbHlWYXIiLCJTeW1ib2wiLCJmb3IiLCJoYXNCb2R5IiwiZ2xvYmFsIiwiZGV2dG9vbHNGb3JtYXR0ZXJzIiwic2V0dXAiLCJjb250ZW50cyIsInNldHVwT25jZSIsInZhcmlhbnQiLCJtZXRhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzaW1wbGVWYXJpYW50IiwicG9seVZhciIsIkJsb2NrIiwiY2FtbF9zZXRfb29faWQiLCJjYW1sX2ZyZXNoX29vX2lkIiwiY3JlYXRlIiwic3RyIiwidl8wMDEiLCJjYW1sX2lzX2V4dGVuc2lvbiIsInNsb3QiLCIkJEVycm9yIiwiaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uIiwiY2FtbF9hc19qc19leG4iLCJleG4iLCJmb3JfaW4iLCJvIiwiZm9vIiwiY2FtbF9vYmpfYmxvY2siLCJzaXplIiwiY2FtbF9vYmpfZHVwIiwiYXNzaWduIiwiY2FtbF9vYmpfdHJ1bmNhdGUiLCJuZXdfc2l6ZSIsImNhbWxfbGF6eV9tYWtlX2ZvcndhcmQiLCJjYW1sX2xhenlfbWFrZSIsImZuIiwiY2FtbF91cGRhdGVfZHVtbXkiLCJ5IiwiY2FtbF9jb21wYXJlIiwiX2EiLCJfYiIsImFfdHlwZSIsImJfdHlwZSIsIkNhbWxfcHJpbWl0aXZlIiwidGFnX2EiLCJ0YWdfYiIsImxlbl9hIiwibGVuX2IiLCJEYXRlIiwibWluX2tleV9saHMiLCJtaW5fa2V5X3JocyIsImRvX2tleSIsIm1pbl9rZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIm1rIiwiZG9fa2V5X2EiLCJkb19rZXlfYiIsIl9pJDEiLCJyZXMkMSIsIl9pJDIiLCJyZXMkMiIsImNhbWxfZXF1YWwiLCJjYW1sX2VxdWFsX251bGwiLCJjYW1sX2VxdWFsX3VuZGVmaW5lZCIsImNhbWxfZXF1YWxfbnVsbGFibGUiLCJjYW1sX25vdGVxdWFsIiwiY2FtbF9ncmVhdGVyZXF1YWwiLCJjYW1sX2dyZWF0ZXJ0aGFuIiwiY2FtbF9sZXNzZXF1YWwiLCJjYW1sX2xlc3N0aGFuIiwiY2FtbF9taW4iLCJjYW1sX21heCIsImNhbWxfb2JqX3NldF90YWciLCJwcmltJDEiLCJ1bmRlZmluZWRIZWFkZXIiLCJzb21lIiwibmlkIiwiYmxvY2skMSIsIm51bGxhYmxlX3RvX29wdCIsInVuZGVmaW5lZF90b19vcHQiLCJudWxsX3RvX29wdCIsInZhbEZyb21PcHRpb24iLCJkZXB0aCIsIm9wdGlvbl9nZXQiLCJvcHRpb25fZ2V0X3Vud3JhcCIsImNhbWxfaW50X2NvbXBhcmUiLCJjYW1sX2Jvb2xfY29tcGFyZSIsImNhbWxfZmxvYXRfY29tcGFyZSIsImNhbWxfc3RyaW5nX2NvbXBhcmUiLCJjYW1sX2J5dGVzX2NvbXBhcmVfYXV4IiwiX29mZiIsImRlZiIsIm9mZiIsImNhbWxfYnl0ZXNfY29tcGFyZSIsImxlbjEiLCJsZW4yIiwiY2FtbF9ieXRlc19lcXVhbCIsImNhbWxfYm9vbF9taW4iLCJjYW1sX2ludF9taW4iLCJjYW1sX2Zsb2F0X21pbiIsImNhbWxfc3RyaW5nX21pbiIsImNhbWxfbmF0aXZlaW50X21pbiIsImNhbWxfaW50MzJfbWluIiwiY2FtbF9ib29sX21heCIsImNhbWxfaW50X21heCIsImNhbWxfZmxvYXRfbWF4IiwiY2FtbF9zdHJpbmdfbWF4IiwiY2FtbF9uYXRpdmVpbnRfbWF4IiwiY2FtbF9pbnQzMl9tYXgiLCJjYW1sX25hdGl2ZWludF9jb21wYXJlIiwiY2FtbF9pbnQzMl9jb21wYXJlIiwiYXBwIiwiX2YiLCJfYXJncyIsImFyZ3MiLCJpbml0X2FyaXR5IiwiYXJpdHkiLCJhcHBseSIsIl8xIiwiYTAiLCJwYXJhbSQxIiwicGFyYW0kMiIsInBhcmFtJDMiLCJwYXJhbSQ0IiwicGFyYW0kNSIsIl9fMSIsIl8yIiwiX18yIiwiXzMiLCJfXzMiLCJfNCIsImEzIiwiX180IiwiXzUiLCJhNCIsIl9fNSIsIl82IiwiYTUiLCJfXzYiLCJfNyIsImE2IiwiX183IiwiXzgiLCJhNyIsIl9fOCIsImdldCIsImRpY3QiLCJ1bnNhZmVEZWxldGVLZXkiLCJlbnRyaWVzIiwia2V5cyIsInZhbHVlcyIsInZhbHVlcyQxIiwiZnJvbUxpc3QiLCJmcm9tQXJyYXkiLCJzb3VyY2UiLCJ0YXJnZXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cnkiLCJoYXMiLCJjYiIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImhhbmRsZXIiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJzdGF0dXMiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwiX2FzIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJncm91cHMiLCJmaWx0ZXIiLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwib25VbmhhbmRsZWRFeGNlcHRpb24iLCJOZXN0ZWRQcm9taXNlIiwibmVzdGVkIiwidW5ib3giLCJib3giLCJleGVjdXRvciIsImJveGluZ1Jlc29sdmUiLCJyZXNvbHZlZCIsInByb21pc2UiLCJjYWxsYmFjayIsImV4Y2VwdGlvbiIsImNhdGNoXyIsInNhZmVDYWxsYmFjayIsImFycmF5VG9MaXN0IiwiYXJyYXkiLCJsaXN0IiwibWFwQXJyYXkiLCJwZW5kaW5nIiwicmVzb2x2ZSRwcmltZSIsInJlamVjdCRwcmltZSIsInRhcCIsImFsbEFycmF5IiwicHJvbWlzZXMiLCJyZXN1bHRzIiwiYWxsMiIsInAxIiwicDIiLCJhbGwzIiwicDMiLCJhbGw0IiwicDQiLCJhbGw1IiwicDUiLCJhbGw2IiwicDYiLCJyYWNlIiwidG9SZXN1bHQiLCJmcm9tUmVzdWx0IiwicGVuZGluZyQxIiwicmVzb2x2ZWQkMSIsImZsYXRNYXAiLCJmbGF0TWFwT2siLCJmbGF0TWFwRXJyb3IiLCJtYXBPayIsIm1hcEVycm9yIiwiZ2V0T2siLCJnZXRFcnJvciIsInRhcE9rIiwidGFwRXJyb3IiLCJPcGVyYXRvcnMiLCIkZ3JlYXQkcGlwZSRlcSIsIiRncmVhdCRncmVhdCRlcSIsImZsYXRNYXBTb21lIiwib3B0aW9uIiwibWFwU29tZSIsImdldFNvbWUiLCJ0YXBTb21lIiwiUGlwZUZpcnN0IiwiSnNfcmVzb2x2ZWQiLCJKc19yZWplY3RlZCIsIkpzX2ZsYXRNYXAiLCJKc19jYXRjaCIsIkpzX3JlbGF4IiwiSnNfZnJvbUJzUHJvbWlzZSIsIkpzX3RvQnNQcm9taXNlIiwiSnMiLCJyZWplY3RlZCIsIiQkY2F0Y2giLCJyZWxheCIsImZyb21Cc1Byb21pc2UiLCJ0b0JzUHJvbWlzZSIsImdlbmVyYXRlQ2xpZW50SUQiLCJkYXRhSWQiLCJzdG9yYWdlS2V5IiwiUmVsYXlSdW50aW1lIiwiX2NsZWFuT2JqZWN0RnJvbVVuZGVmaW5lZCIsImNsZWFuT2JqIiwib2JqIiwibmV3T2JqIiwiX2NsZWFuVmFyaWFibGVzIiwiY2xlYW5WYXJpYWJsZXMiLCJfY29udmVydE9iaiIsInByaW0kMiIsInByaW0kMyIsImNvcHlGaWVsZHNGcm9tIiwic291cmNlUmVjb3JkIiwiZ2V0RGF0YUlkIiwiZ2V0RGF0YUlEIiwiZ2V0TGlua2VkUmVjb3JkIiwiJCRhcmd1bWVudHMiLCJnZXRMaW5rZWRSZWNvcmRzIiwicmVjb3JkcyIsImdldE9yQ3JlYXRlTGlua2VkUmVjb3JkIiwidHlwZU5hbWUiLCJnZXRUeXBlIiwiX2dldFZhbHVlQXJyIiwiZ2V0VmFsdWUiLCJnZXRWYWx1ZVN0cmluZyIsImdldFZhbHVlU3RyaW5nQXJyYXkiLCJnZXRWYWx1ZUludCIsImdldFZhbHVlSW50QXJyYXkiLCJnZXRWYWx1ZUZsb2F0IiwiZ2V0VmFsdWVGbG9hdEFycmF5IiwiZ2V0VmFsdWVCb29sIiwiZ2V0VmFsdWVCb29sQXJyYXkiLCJzZXRMaW5rZWRSZWNvcmQiLCJyZWNvcmQiLCJ1bnNldExpbmtlZFJlY29yZCIsInVuc2V0VmFsdWUiLCJzZXRMaW5rZWRSZWNvcmRzIiwidW5zZXRMaW5rZWRSZWNvcmRzIiwidW5zZXRWYWx1ZSQxIiwic2V0VmFsdWUiLCJzZXRWYWx1ZVN0cmluZyIsInNldFZhbHVlU3RyaW5nQXJyYXkiLCJzZXRWYWx1ZUludCIsInNldFZhbHVlSW50QXJyYXkiLCJzZXRWYWx1ZUZsb2F0Iiwic2V0VmFsdWVGbG9hdEFycmF5Iiwic2V0VmFsdWVCb29sIiwic2V0VmFsdWVCb29sQXJyYXkiLCIkJGRlbGV0ZSIsImdldFJvb3RGaWVsZCIsImZpZWxkTmFtZSIsImdldFBsdXJhbFJvb3RGaWVsZCIsImNyZWF0ZSQxIiwiJCRkZWxldGUkMSIsImdldCQxIiwiZ2V0Q29ubmVjdGlvbiIsImZpbHRlcnMiLCJjcmVhdGVFZGdlIiwic3RvcmUiLCJjb25uZWN0aW9uIiwiZWRnZVR5cGUiLCJpbnNlcnRFZGdlQmVmb3JlIiwibmV3RWRnZSIsImN1cnNvciIsImluc2VydEVkZ2VBZnRlciIsImRlbGV0ZU5vZGUiLCJub2RlSWQiLCJDb25uZWN0aW9uSGFuZGxlciIsInNpbmtGbiIsInMiLCJjb21wbGV0ZWQiLCJjbG9zZWQiLCJPYnNlcnZhYmxlIiwiZmV0Y2hGdW5jdGlvbiIsInN1YnNjcmlwdGlvbkZ1bmN0aW9uIiwibWFrZU9ic2VydmFibGVCYXNlZCIsIm9ic2VydmFibGVGdW5jdGlvbiIsIk5ldHdvcmsiLCJtYWtlJDEiLCJtYWtlJDIiLCJnY1JlbGVhc2VCdWZmZXJTaXplIiwibWFwUmVuZGVyUG9saWN5IiwibWFrZSQzIiwiZGVmYXVsdFJlbmRlclBvbGljeSIsIlVOU1RBQkxFX0RPX05PVF9VU0VfZ2V0RGF0YUlEIiwiVU5TVEFCTEVfZGVmYXVsdFJlbmRlclBvbGljeSIsInByb3ZpZGVyIiwiUmVhY3RSZWxheSIsIlJlYXNvblJlbGF5JENvbnRleHQkUHJvdmlkZXIiLCJ1c2VDb252ZXJ0ZWRWYWx1ZSIsImNvbnZlcnQiLCJFbnZpcm9ubWVudE5vdEZvdW5kSW5Db250ZXh0IiwidXNlRW52aXJvbm1lbnRGcm9tQ29udGV4dCIsIm1hcEZldGNoUG9saWN5IiwiTWFrZVByZWxvYWRRdWVyeSIsIkMiLCJmZXRjaFBvbGljeSIsImZldGNoS2V5IiwibmV0d29ya0NhY2hlQ29uZmlnIiwiSG9va3MiLCJNYWtlVXNlRnJhZ21lbnQiLCJmciIsImZyYWdtZW50U3BlYyIsImNvbnZlcnRGcmFnbWVudCIsIm1ha2VSZWZldGNoYWJsZUZuT3B0cyIsInJlbmRlclBvbGljeSIsIm9uQ29tcGxldGUiLCJVTlNUQUJMRV9yZW5kZXJQb2xpY3kiLCJtYXliZUV4biIsIk1ha2VVc2VSZWZldGNoYWJsZUZyYWdtZW50IiwidXNlUmVmZXRjaGFibGUiLCJyZWZldGNoRm4iLCJNYWtlVXNlUGFnaW5hdGlvbkZyYWdtZW50IiwidXNlQmxvY2tpbmdQYWdpbmF0aW9uIiwibG9hZE5leHQiLCJjb3VudCIsImxvYWRQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsInJlZmV0Y2giLCJ1c2VQYWdpbmF0aW9uIiwiaXNMb2FkaW5nTmV4dCIsImlzTG9hZGluZ1ByZXZpb3VzIiwiTXV0YXRpb25fZmFpbGVkIiwiTWFrZVVzZU11dGF0aW9uIiwiUmVsYXlFeHBlcmltZW50YWwiLCJtdXRhdGUiLCJvbkVycm9yIiwib25Db21wbGV0ZWQiLCJvblVuc3Vic2NyaWJlIiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwib3B0aW1pc3RpY1VwZGF0ZXIiLCJ1cGRhdGVyIiwiZXJyb3JzIiwid3JhcFJlc3BvbnNlIiwiTWFrZUNvbW1pdE11dGF0aW9uIiwiY29tbWl0TXV0YXRpb24iLCJtdXRhdGlvbiIsImNvbW1pdE11dGF0aW9uUHJvbWlzZWQiLCIkJFByb21pc2UiLCJjb21taXRMb2NhbFVwZGF0ZSIsIk1ha2VVc2VTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJvbk5leHQiLCJkYXRhSWRUb1N0cmluZyIsIm1ha2VEYXRhSWQiLCJtYWtlQXJndW1lbnRzIiwiZ2VuZXJhdGVVbmlxdWVDbGllbnRJRCIsImlzQ2xpZW50SUQiLCJzdG9yZVJvb3RJZCIsInN0b3JlUm9vdFR5cGUiLCJSZWNvcmRQcm94eV9pbnZhbGlkYXRlUmVjb3JkIiwiaW52YWxpZGF0ZVJlY29yZCIsIlJlY29yZFByb3h5IiwiUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eV9nZXRSb290IiwiZ2V0Um9vdCIsIlJlY29yZFNvdXJjZVNlbGVjdG9yUHJveHlfaW52YWxpZGF0ZVN0b3JlIiwiaW52YWxpZGF0ZVN0b3JlIiwiUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eSIsIlJlY29yZFNvdXJjZVByb3h5X2dldFJvb3QiLCJSZWNvcmRTb3VyY2VQcm94eV9pbnZhbGlkYXRlU3RvcmUiLCJSZWNvcmRTb3VyY2VQcm94eSIsIlJlY29yZFNvdXJjZV90b0pTT04iLCJ0b0pTT04iLCJSZWNvcmRTb3VyY2UiLCJTdG9yZV9nZXRTb3VyY2UiLCJnZXRTb3VyY2UiLCJTdG9yZSIsIkVudmlyb25tZW50X2dldFN0b3JlIiwiZ2V0U3RvcmUiLCJFbnZpcm9ubWVudCIsIkRpc3Bvc2FibGUiLCJkaXNwb3NlIiwiTWFrZVVzZVF1ZXJ5IiwiZnVuYXJnIiwidG9rZW4iLCJvblJlc3VsdCIsIkNvbnRleHRfUHJvdmlkZXIiLCJDb250ZXh0IiwiZ2V0RnJhZ21lbnRSZWZzIiwiZ2V0TmV3T2JqIiwibWF5YmVOZXdPYmoiLCJjdXJyZW50T2JqIiwiZ2V0UGF0aE5hbWUiLCJtYWtlTmV3UGF0aCIsImN1cnJlbnRQYXRoIiwibmV3S2V5cyIsInRyYXZlcnNlIiwiZnVsbEluc3RydWN0aW9uTWFwIiwiaW5zdHJ1Y3Rpb25NYXAiLCJjb252ZXJ0ZXJzIiwibnVsbGFibGVWYWx1ZSIsImluc3RydWN0aW9uUGF0aHMiLCJhZGRGcmFnbWVudE9uUm9vdCIsImJpbmQiLCJpc1VuaW9uIiwib3JpZ2luYWxWYWx1ZSIsInRoaXNQYXRoIiwiaW5zdHJ1Y3Rpb25zIiwiaGFzRGVlcGVySW5zdHJ1Y3Rpb25zIiwic2hvdWxkQ29udmVydFJvb3RPYmoiLCJzaG91bGRBZGRGcmFnbWVudEZuIiwic2hvdWxkQ29udmVydEVudW0iLCJzaG91bGRDb252ZXJ0VW5pb24iLCJ0cmF2ZXJzZXIiLCJfX3R5cGVuYW1lIiwibmV3UGF0aCIsInRvTG93ZXJDYXNlIiwidW5pb25Sb290SGFzRnJhZ21lbnQiLCJ0cmF2ZXJzZWRWYWx1ZSIsIm9ialdpdGhGcmFnbWVudEZuIiwibmV4dE9iaiIsInRyYXZlcnNlZE9iaiIsInJvb3QiLCJfaW5zdHJ1Y3Rpb25NYXBzIiwicm9vdE9iamVjdEtleSIsImluc3RydWN0aW9uTWFwcyIsImZyYWdtZW50c09uUm9vdCIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FB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QUwsR0FDSHk4QixhQURHLEdBRUhKLFFBQVEsQ0FDTjZCLGVBRE0sRUFFTixFQUZNLEVBR05sK0IsQ0FITSxFQUlOdThCLGNBSk0sRUFLTkMsVUFMTSxFQU1OQyxhQU5NLEVBT05DLGdCQVBNLEVBUU55QixlQVJNLENBRlo7QUFZRCxLQWpCTSxDQUFQO0FBa0JEOztBQUVELE1BQUlwTixNQUFNLEdBQUdyZ0IsTUFBTSxDQUFDc0IsTUFBUCxDQUFjLEVBQWQsRUFBa0IrckIsSUFBbEIsQ0FBYjtBQUVBLE1BQUkvOUIsQ0FBQyxHQUFHcThCLFFBQVEsQ0FDZDZCLGVBRGMsRUFFZCxFQUZjLEVBR2RuTixNQUhjLEVBSWR3TCxjQUpjLEVBS2RDLFVBTGMsRUFNZEMsYUFOYyxFQU9kQyxnQkFQYyxFQVFkeUIsZUFSYyxDQUFoQjtBQVdBLFNBQU9uK0IsQ0FBUDtBQUNEOztBQUVEbytCLE1BQU0sQ0FBQ25rQixPQUFQLEdBQWlCO0FBQUVxakI7QUFBRixDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNyVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlbGhDLGtIQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2FwcC5qc1wiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vLi4vLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCAqIGFzIFJlYXNvblJlbGF5IGZyb20gXCJyZWFzb24tcmVsYXkvc3JjL1JlYXNvblJlbGF5LmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBSZWxheUVudiROZXh0anNEZWZhdWx0IGZyb20gXCIuL1JlbGF5RW52LmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBNYWluTGF5b3V0JE5leHRqc0RlZmF1bHQgZnJvbSBcIi4uL2xheW91dHMvTWFpbkxheW91dC5icy5qc1wiO1xuaW1wb3J0ICogYXMgRW50aXR5UHJvdmlkZXIkTmV4dGpzRGVmYXVsdCBmcm9tIFwiLi9FbnRpdHlQcm92aWRlci5icy5qc1wiO1xuXG5pbXBvcnQoJy4uL3N0eWxlcy9tYWluLmNzcycpXG47XG5cbmltcG9ydCgnYW50ZC9kaXN0L2FudGQuY3NzJylcbjtcblxudmFyIFBhZ2VDb21wb25lbnQgPSB7IH07XG5cbmZ1bmN0aW9uIHJlZHVjZXIocGFyYW0sIGFjdGlvbikge1xuICByZXR1cm4gYWN0aW9uWzBdO1xufVxuXG5mdW5jdGlvbiBtYWtlKHByb3BzKSB7XG4gIHZhciBtYXRjaCA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgICAgICBjYXRlZ29yeUlkOiBcIlwiLFxuICAgICAgICBtb2R1bGVJZDogXCJcIixcbiAgICAgICAgc3ViamVjSWQ6IFwiXCJcbiAgICAgIH0pO1xuICB2YXIgcm91dGVyID0gUm91dGVyLnVzZVJvdXRlcigpO1xuICB2YXIgY29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHMuQ29tcG9uZW50LCBwcm9wcy5wYWdlUHJvcHMpO1xuICB2YXIgbWF0Y2gkMSA9IHJvdXRlci5yb3V0ZTtcbiAgdmFyIHNob3duQ29udGVudCA9IG1hdGNoJDEgPT09IFwiL1wiID8gY29udGVudCA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFpbkxheW91dCROZXh0anNEZWZhdWx0Lm1ha2UsIHtcbiAgICAgICAgICBjaGlsZHJlbjogY29udGVudFxuICAgICAgICB9KTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhc29uUmVsYXkuQ29udGV4dC5Qcm92aWRlci5tYWtlLCBDdXJyeS5fNChSZWFzb25SZWxheS5Db250ZXh0LlByb3ZpZGVyLm1ha2VQcm9wcywgUmVsYXlFbnYkTmV4dGpzRGVmYXVsdC5lbnZpcm9ubWVudCwgbnVsbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGxcbiAgICAgICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ubywgdmlld3BvcnQtZml0PWNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgdW5kZWZpbmVkLCBcIlJldmlldyBEYXNoYm9hcmRcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEVudGl0eVByb3ZpZGVyJE5leHRqc0RlZmF1bHQubWFrZSwgRW50aXR5UHJvdmlkZXIkTmV4dGpzRGVmYXVsdC5tYWtlUHJvcHMoLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMV1cbiAgICAgICAgICAgICAgICAgICAgXSwgc2hvd25Db250ZW50LCB1bmRlZmluZWQpKSk7XG59XG5cbmV4cG9ydCB7XG4gIFBhZ2VDb21wb25lbnQgLFxuICByZWR1Y2VyICxcbiAgbWFrZSAsXG4gIFxufVxuLyogIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBpbml0VmFsdWVfMDAwID0ge1xuICBjYXRlZ29yeUlkOiBcIlwiLFxuICBtb2R1bGVJZDogXCJcIixcbiAgc3ViamVjSWQ6IFwiXCJcbn07XG5cbmZ1bmN0aW9uIGluaXRWYWx1ZV8wMDEocGFyYW0pIHtcbiAgXG59XG5cbnZhciBpbml0VmFsdWUgPSAvKiB0dXBsZSAqL1tcbiAgaW5pdFZhbHVlXzAwMCxcbiAgaW5pdFZhbHVlXzAwMVxuXTtcblxudmFyIGNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGluaXRWYWx1ZSk7XG5cbmZ1bmN0aW9uIHVzZUVudGl0eShwYXJhbSkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChjb250ZXh0KTtcbn1cblxudmFyIG1ha2UgPSBjb250ZXh0LlByb3ZpZGVyO1xuXG5mdW5jdGlvbiBtYWtlUHJvcHModmFsdWUsIGNoaWxkcmVuLCBwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgfTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdFZhbHVlICxcbiAgY29udGV4dCAsXG4gIHVzZUVudGl0eSAsXG4gIG1ha2UgLFxuICBtYWtlUHJvcHMgLFxuICBcbn1cbi8qIGNvbnRleHQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBGZXRjaCBmcm9tIFwiYnMtZmV0Y2gvc3JjL0ZldGNoLmpzXCI7XG5pbXBvcnQgKiBhcyBKc19kaWN0IGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2pzX2RpY3QuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBSZWFzb25SZWxheSBmcm9tIFwicmVhc29uLXJlbGF5L3NyYy9SZWFzb25SZWxheS5icy5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9leGNlcHRpb25zIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9jaHJvbWVfZGVidWdnZXIgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9jaHJvbWVfZGVidWdnZXIuanNcIjtcblxudmFyIEdyYXBocWxfZXJyb3IgPSBDYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiUmVsYXlFbnYtTmV4dGpzRGVmYXVsdC5HcmFwaHFsX2Vycm9yXCIpO1xuXG5mdW5jdGlvbiBmZXRjaFF1ZXJ5KG9wZXJhdGlvbiwgdmFyaWFibGVzLCBfY2FjaGVDb25maWcpIHtcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaVwiLCBGZXRjaC5SZXF1ZXN0SW5pdC5tYWtlKC8qIFBvc3QgKi8yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICB9LCBDYW1sX29wdGlvbi5zb21lKEpTT04uc3RyaW5naWZ5KEpzX2RpY3QuZnJvbUxpc3QoLyogOjogKi9DYW1sX2Nocm9tZV9kZWJ1Z2dlci5zaW1wbGVWYXJpYW50KFwiOjpcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL0NhbWxfY2hyb21lX2RlYnVnZ2VyLnNpbXBsZVZhcmlhbnQoXCI6OlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhcmlhYmxlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSkpKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpKHVuZGVmaW5lZCkpLnRoZW4oKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3Aub2spIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyYXBocWxfZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlcXVlc3QgZmFpbGVkOiBcIiArIHJlc3Auc3RhdHVzVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG52YXIgbmV0d29yayA9IFJlYXNvblJlbGF5Lk5ldHdvcmsubWFrZVByb21pc2VCYXNlZChmZXRjaFF1ZXJ5LCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5cbnZhciBlbnZpcm9ubWVudCA9IFJlYXNvblJlbGF5LkVudmlyb25tZW50Lm1ha2UobmV0d29yaywgUmVhc29uUmVsYXkuU3RvcmUubWFrZShSZWFzb25SZWxheS5SZWNvcmRTb3VyY2UubWFrZSh1bmRlZmluZWQsIHVuZGVmaW5lZCksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5cbmV4cG9ydCB7XG4gIEdyYXBocWxfZXJyb3IgLFxuICBmZXRjaFF1ZXJ5ICxcbiAgbmV0d29yayAsXG4gIGVudmlyb25tZW50ICxcbiAgXG59XG4vKiBuZXR3b3JrIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJcblxuaW1wb3J0ICogYXMgUmVhc29uUmVsYXkgZnJvbSBcInJlYXNvbi1yZWxheS9zcmMvUmVhc29uUmVsYXkuYnMuanNcIjtcblxudmFyIFR5cGVzID0geyB9O1xuXG52YXIgcmVzcG9uc2VDb252ZXJ0ZXIgPSAoe1wiX19yb290XCI6e1wibGlzdENhdGVnb3JpZXNcIjp7XCJuXCI6XCJcIn19fSk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRSZXNwb25zZSh2KSB7XG4gIHJldHVybiBSZWFzb25SZWxheS5fY29udmVydE9iaih2LCByZXNwb25zZUNvbnZlcnRlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xufVxuXG52YXIgdmFyaWFibGVzQ29udmVydGVyID0gKHt9KTtcblxuZnVuY3Rpb24gY29udmVydFZhcmlhYmxlcyh2KSB7XG4gIHJldHVybiBSZWFzb25SZWxheS5fY29udmVydE9iaih2LCB2YXJpYWJsZXNDb252ZXJ0ZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbn1cblxudmFyIEludGVybmFsID0ge1xuICByZXNwb25zZUNvbnZlcnRlcjogcmVzcG9uc2VDb252ZXJ0ZXIsXG4gIHJlc3BvbnNlQ29udmVydGVyTWFwOiB1bmRlZmluZWQsXG4gIGNvbnZlcnRSZXNwb25zZTogY29udmVydFJlc3BvbnNlLFxuICB2YXJpYWJsZXNDb252ZXJ0ZXI6IHZhcmlhYmxlc0NvbnZlcnRlcixcbiAgdmFyaWFibGVzQ29udmVydGVyTWFwOiB1bmRlZmluZWQsXG4gIGNvbnZlcnRWYXJpYWJsZXM6IGNvbnZlcnRWYXJpYWJsZXNcbn07XG5cbnZhciBVdGlscyA9IHsgfTtcblxudmFyIG5vZGUgPSAoKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgXCJhcmdzXCI6IG51bGwsXG4gICAgXCJjb25jcmV0ZVR5cGVcIjogXCJDYXRlZ29yeVwiLFxuICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgXCJuYW1lXCI6IFwibGlzdENhdGVnb3JpZXNcIixcbiAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXSxcbiAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICB9XG5dO1xucmV0dXJuIHtcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcIkNhdGVnb3J5U2VsZWN0UXVlcnlcIixcbiAgICBcInNlbGVjdGlvbnNcIjogKHYwLyo6IGFueSovKSxcbiAgICBcInR5cGVcIjogXCJSb290UXVlcnlUeXBlXCJcbiAgfSxcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIkNhdGVnb3J5U2VsZWN0UXVlcnlcIixcbiAgICBcInNlbGVjdGlvbnNcIjogKHYwLyo6IGFueSovKVxuICB9LFxuICBcInBhcmFtc1wiOiB7XG4gICAgXCJpZFwiOiBudWxsLFxuICAgIFwibWV0YWRhdGFcIjoge30sXG4gICAgXCJuYW1lXCI6IFwiQ2F0ZWdvcnlTZWxlY3RRdWVyeVwiLFxuICAgIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gICAgXCJ0ZXh0XCI6IFwicXVlcnkgQ2F0ZWdvcnlTZWxlY3RRdWVyeSB7XFxuICBsaXN0Q2F0ZWdvcmllcyB7XFxuICAgIG5hbWVcXG4gICAgaWRcXG4gIH1cXG59XFxuXCJcbiAgfVxufTtcbn0pKCkpO1xuXG52YXIgUHJlbG9hZCA9IFJlYXNvblJlbGF5Lk1ha2VQcmVsb2FkUXVlcnkoe1xuICAgICAgcXVlcnk6IG5vZGUsXG4gICAgICBjb252ZXJ0VmFyaWFibGVzOiBjb252ZXJ0VmFyaWFibGVzXG4gICAgfSk7XG5cbnZhciBwcmVsb2FkID0gUHJlbG9hZC5wcmVsb2FkO1xuXG5leHBvcnQge1xuICBUeXBlcyAsXG4gIEludGVybmFsICxcbiAgVXRpbHMgLFxuICBub2RlICxcbiAgUHJlbG9hZCAsXG4gIHByZWxvYWQgLFxuICBcbn1cbi8qIHJlc3BvbnNlQ29udmVydGVyIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJcblxuaW1wb3J0ICogYXMgQW50ZCBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0ICogYXMgJCRBcnJheSBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9hcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhc29uUmVsYXkgZnJvbSBcInJlYXNvbi1yZWxheS9zcmMvUmVhc29uUmVsYXkuYnMuanNcIjtcbmltcG9ydCAqIGFzIENhdGVnb3J5U2VsZWN0UXVlcnlfZ3JhcGhxbCROZXh0anNEZWZhdWx0IGZyb20gXCIuLi9jb21tb24vX19nZW5lcmF0ZWRfXy9DYXRlZ29yeVNlbGVjdFF1ZXJ5X2dyYXBocWwuYnMuanNcIjtcblxudmFyIGNvbnZlcnRSZXNwb25zZSA9IENhdGVnb3J5U2VsZWN0UXVlcnlfZ3JhcGhxbCROZXh0anNEZWZhdWx0LkludGVybmFsLmNvbnZlcnRSZXNwb25zZTtcblxudmFyIGNvbnZlcnRWYXJpYWJsZXMgPSBDYXRlZ29yeVNlbGVjdFF1ZXJ5X2dyYXBocWwkTmV4dGpzRGVmYXVsdC5JbnRlcm5hbC5jb252ZXJ0VmFyaWFibGVzO1xuXG52YXIgVXNlUXVlcnkgPSBSZWFzb25SZWxheS5NYWtlVXNlUXVlcnkoe1xuICAgICAgcXVlcnk6IENhdGVnb3J5U2VsZWN0UXVlcnlfZ3JhcGhxbCROZXh0anNEZWZhdWx0Lm5vZGUsXG4gICAgICBjb252ZXJ0UmVzcG9uc2U6IGNvbnZlcnRSZXNwb25zZSxcbiAgICAgIGNvbnZlcnRWYXJpYWJsZXM6IGNvbnZlcnRWYXJpYWJsZXNcbiAgICB9KTtcblxudmFyIHVzZSA9IFVzZVF1ZXJ5LnVzZTtcblxudmFyIFF1ZXJ5X2ZldGNoID0gVXNlUXVlcnkuJCRmZXRjaDtcblxudmFyIFF1ZXJ5X2ZldGNoUHJvbWlzZWQgPSBVc2VRdWVyeS5mZXRjaFByb21pc2VkO1xuXG52YXIgUXVlcnlfcHJlbG9hZCA9IFVzZVF1ZXJ5LnByZWxvYWQ7XG5cbnZhciBRdWVyeV91c2VQcmVsb2FkZWQgPSBVc2VRdWVyeS51c2VQcmVsb2FkZWQ7XG5cbnZhciBRdWVyeSA9IHtcbiAgT3BlcmF0aW9uOiB1bmRlZmluZWQsXG4gIFR5cGVzOiB1bmRlZmluZWQsXG4gIFVzZVF1ZXJ5OiBVc2VRdWVyeSxcbiAgdXNlOiB1c2UsXG4gICQkZmV0Y2g6IFF1ZXJ5X2ZldGNoLFxuICBmZXRjaFByb21pc2VkOiBRdWVyeV9mZXRjaFByb21pc2VkLFxuICBwcmVsb2FkOiBRdWVyeV9wcmVsb2FkLFxuICB1c2VQcmVsb2FkZWQ6IFF1ZXJ5X3VzZVByZWxvYWRlZFxufTtcblxuZnVuY3Rpb24gQ2F0ZWdvcnlTZWxlY3QoUHJvcHMpIHtcbiAgdmFyIHF1ZXJ5RGF0YSA9IEN1cnJ5Ll82KHVzZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gIHZhciBjYXRlZ29yaWVzID0gcXVlcnlEYXRhLmxpc3RDYXRlZ29yaWVzO1xuICB2YXIgY29udGVudCA9IGNhdGVnb3JpZXMgIT09IHVuZGVmaW5lZCA/ICQkQXJyYXkubWFwaSgoZnVuY3Rpb24gKGksIGNhdCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW50ZC5TZWxlY3QuT3B0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFN0cmluZyhpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogY2F0Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSwgY2F0ZWdvcmllcykgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEFudGQuU2VsZWN0Lk9wdGlvbiwge1xuICAgICAgICAgIGtleTogXCIwXCIsXG4gICAgICAgICAgdmFsdWU6IFwiMFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBcIk5hZGFcIlxuICAgICAgICB9KTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW50ZC5TZWxlY3QsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInctNDBcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGNvbnRlbnRcbiAgICAgICAgICAgIH0pO1xufVxuXG52YXIgbWFrZSA9IENhdGVnb3J5U2VsZWN0O1xuXG5leHBvcnQge1xuICBRdWVyeSAsXG4gIG1ha2UgLFxuICBcbn1cbi8qIFVzZVF1ZXJ5IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCAqIGFzIENhdGVnb3J5U2VsZWN0JE5leHRqc0RlZmF1bHQgZnJvbSBcIi4vQ2F0ZWdvcnlTZWxlY3QuYnMuanNcIjtcblxuZnVuY3Rpb24gSGVhZGVyKFByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJnLWluZGlnby03MDAgc2hhZG93IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS00IHB4LTEwXCJcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluay5kZWZhdWx0LCB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwidGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGhvdmVyOnRleHQtaW5kaWdvLTMwMCBjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSwgXCJSZXZpZXcgRGFzaGJvYXJkXCIpXG4gICAgICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5TdXNwZW5zZSwge1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KENhdGVnb3J5U2VsZWN0JE5leHRqc0RlZmF1bHQubWFrZSwgeyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjazogUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFwiTG9hZGluZy4uLlwiKVxuICAgICAgICAgICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInRleHQtd2hpdGUgbWwtNVwiXG4gICAgICAgICAgICAgICAgICAgIH0sIFwiSGVsbG8gVXNlclwiKSkpO1xufVxuXG52YXIgbWFrZSA9IEhlYWRlcjtcblxuZXhwb3J0IHtcbiAgbWFrZSAsXG4gIFxufVxuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBBbnRkIGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0ICogYXMgRW50aXR5UHJvdmlkZXIkTmV4dGpzRGVmYXVsdCBmcm9tIFwiLi4vY29tbW9uL0VudGl0eVByb3ZpZGVyLmJzLmpzXCI7XG5cbnZhciBzdHlsZSA9IHtcbiAgd2lkdGg6IDI1MFxufTtcblxuZnVuY3Rpb24gU2lkZWJhcihQcm9wcykge1xuICB2YXIgbWF0Y2ggPSBFbnRpdHlQcm92aWRlciROZXh0anNEZWZhdWx0LnVzZUVudGl0eSh1bmRlZmluZWQpO1xuICB2YXIgc3RhdGUgPSBtYXRjaFswXTtcbiAgdmFyIGNhdGVnb3J5SWQgPSBzdGF0ZS5jYXRlZ29yeUlkO1xuICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEFudGQuTWVudSwge1xuICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM6IFtcbiAgICAgICAgICAgICAgICBcInN1YjFcIixcbiAgICAgICAgICAgICAgICBcInN1YjJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBtb2RlOiBcImlubGluZVwiLFxuICAgICAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEFudGQuTWVudS5TdWJNZW51LCB7XG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgIGtleTogXCJzdWIxXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJMZWN0dXJlc1wiXG4gICAgICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChBbnRkLk1lbnUuSXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluay5kZWZhdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvW2NhdGVnb3J5SWRdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM6IFwiL1wiICsgKFN0cmluZyhjYXRlZ29yeUlkKSArIFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB1bmRlZmluZWQsIFwiTW9kdWxlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChBbnRkLk1lbnUuSXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluay5kZWZhdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvW2NhdGVnb3J5SWRdL3N1YmplY3RzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM6IFwiL1wiICsgKFN0cmluZyhjYXRlZ29yeUlkKSArIFwiL3N1YmplY3RzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB1bmRlZmluZWQsIFwiU3ViamVjdHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW50ZC5NZW51Lkl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmsuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL1tjYXRlZ29yeUlkXS90b3BpY3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhczogXCIvXCIgKyAoU3RyaW5nKGNhdGVnb3J5SWQpICsgXCIvdG9waWNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB1bmRlZmluZWQsIFwiVG9waWNzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFudGQuTWVudS5JdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9bY2F0ZWdvcnlJZF0vcGFnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhczogXCIvXCIgKyAoU3RyaW5nKGNhdGVnb3J5SWQpICsgXCIvcGFnZXNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHVuZGVmaW5lZCwgXCJQYWdlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW50ZC5NZW51LlN1Yk1lbnUsIHtcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICAgICAgICAgICAga2V5OiBcInN1YjJcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRlc3RzXCJcbiAgICAgICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEFudGQuTWVudS5JdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9bY2F0ZWdvcnlJZF0vZXhhbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhczogXCIvXCIgKyAoU3RyaW5nKGNhdGVnb3J5SWQpICsgXCIvZXhhbXNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHVuZGVmaW5lZCwgXCJFeGFtc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChBbnRkLk1lbnUuSXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluay5kZWZhdWx0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvW2NhdGVnb3J5SWRdL2NhcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM6IFwiL1wiICsgKFN0cmluZyhjYXRlZ29yeUlkKSArIFwiL2NhcmRzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB1bmRlZmluZWQsIFwiQ2FyZHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbn1cblxudmFyIG1ha2UgPSBTaWRlYmFyO1xuXG5leHBvcnQge1xuICBzdHlsZSAsXG4gIG1ha2UgLFxuICBcbn1cbi8qIGFudGQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIEhlYWRlciROZXh0anNEZWZhdWx0IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci5icy5qc1wiO1xuaW1wb3J0ICogYXMgU2lkZWJhciROZXh0anNEZWZhdWx0IGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXIuYnMuanNcIjtcblxuZnVuY3Rpb24gTWFpbkxheW91dChQcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBQcm9wcy5jaGlsZHJlbjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHVuZGVmaW5lZCwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIkTmV4dGpzRGVmYXVsdC5tYWtlLCB7IH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmbGV4IGgtc2NyZWVuXCJcbiAgICAgICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFNpZGViYXIkTmV4dGpzRGVmYXVsdC5tYWtlLCB7IH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwicHgtMTAgcHktNSB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICB9LCBjaGlsZHJlbikpKTtcbn1cblxudmFyIExpbms7XG5cbnZhciBtYWtlID0gTWFpbkxheW91dDtcblxuZXhwb3J0IHtcbiAgTGluayAsXG4gIG1ha2UgLFxuICBcbn1cbi8qIHJlYWN0IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucyBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qc1wiO1xuXG5mdW5jdGlvbiBlbmNvZGVSZXF1ZXN0TWV0aG9kKG1ldGhvZF8pIHtcbiAgaWYgKHR5cGVvZiBtZXRob2RfICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIG1ldGhvZF9bMF07XG4gIH1cbiAgc3dpdGNoIChtZXRob2RfKSB7XG4gICAgY2FzZSAvKiBHZXQgKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiR0VUXCI7XG4gICAgY2FzZSAvKiBIZWFkICovMSA6XG4gICAgICAgIHJldHVybiBcIkhFQURcIjtcbiAgICBjYXNlIC8qIFBvc3QgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiUE9TVFwiO1xuICAgIGNhc2UgLyogUHV0ICovMyA6XG4gICAgICAgIHJldHVybiBcIlBVVFwiO1xuICAgIGNhc2UgLyogRGVsZXRlICovNCA6XG4gICAgICAgIHJldHVybiBcIkRFTEVURVwiO1xuICAgIGNhc2UgLyogQ29ubmVjdCAqLzUgOlxuICAgICAgICByZXR1cm4gXCJDT05ORUNUXCI7XG4gICAgY2FzZSAvKiBPcHRpb25zICovNiA6XG4gICAgICAgIHJldHVybiBcIk9QVElPTlNcIjtcbiAgICBjYXNlIC8qIFRyYWNlICovNyA6XG4gICAgICAgIHJldHVybiBcIlRSQUNFXCI7XG4gICAgY2FzZSAvKiBQYXRjaCAqLzggOlxuICAgICAgICByZXR1cm4gXCJQQVRDSFwiO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVJlZmVycmVyUG9saWN5KHBhcmFtKSB7XG4gIHN3aXRjaCAocGFyYW0pIHtcbiAgICBjYXNlIC8qIE5vbmUgKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgY2FzZSAvKiBOb1JlZmVycmVyICovMSA6XG4gICAgICAgIHJldHVybiBcIm5vLXJlZmVycmVyXCI7XG4gICAgY2FzZSAvKiBOb1JlZmVycmVyV2hlbkRvd25ncmFkZSAqLzIgOlxuICAgICAgICByZXR1cm4gXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiO1xuICAgIGNhc2UgLyogU2FtZU9yaWdpbiAqLzMgOlxuICAgICAgICByZXR1cm4gXCJzYW1lLW9yaWdpblwiO1xuICAgIGNhc2UgLyogT3JpZ2luICovNCA6XG4gICAgICAgIHJldHVybiBcIm9yaWdpblwiO1xuICAgIGNhc2UgLyogU3RyaWN0T3JpZ2luICovNSA6XG4gICAgICAgIHJldHVybiBcInN0cmljdC1vcmlnaW5cIjtcbiAgICBjYXNlIC8qIE9yaWdpbldoZW5Dcm9zc09yaWdpbiAqLzYgOlxuICAgICAgICByZXR1cm4gXCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIjtcbiAgICBjYXNlIC8qIFN0cmljdE9yaWdpbldoZW5Dcm9zc09yaWdpbiAqLzcgOlxuICAgICAgICByZXR1cm4gXCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCI7XG4gICAgY2FzZSAvKiBVbnNhZmVVcmwgKi84IDpcbiAgICAgICAgcmV0dXJuIFwidW5zYWZlLXVybFwiO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVJlcXVlc3RNb2RlKHBhcmFtKSB7XG4gIHN3aXRjaCAocGFyYW0pIHtcbiAgICBjYXNlIC8qIE5hdmlnYXRlICovMCA6XG4gICAgICAgIHJldHVybiBcIm5hdmlnYXRlXCI7XG4gICAgY2FzZSAvKiBTYW1lT3JpZ2luICovMSA6XG4gICAgICAgIHJldHVybiBcInNhbWUtb3JpZ2luXCI7XG4gICAgY2FzZSAvKiBOb0NPUlMgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwibm8tY29yc1wiO1xuICAgIGNhc2UgLyogQ09SUyAqLzMgOlxuICAgICAgICByZXR1cm4gXCJjb3JzXCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlUmVxdWVzdENyZWRlbnRpYWxzKHBhcmFtKSB7XG4gIHN3aXRjaCAocGFyYW0pIHtcbiAgICBjYXNlIC8qIE9taXQgKi8wIDpcbiAgICAgICAgcmV0dXJuIFwib21pdFwiO1xuICAgIGNhc2UgLyogU2FtZU9yaWdpbiAqLzEgOlxuICAgICAgICByZXR1cm4gXCJzYW1lLW9yaWdpblwiO1xuICAgIGNhc2UgLyogSW5jbHVkZSAqLzIgOlxuICAgICAgICByZXR1cm4gXCJpbmNsdWRlXCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlUmVxdWVzdENhY2hlKHBhcmFtKSB7XG4gIHN3aXRjaCAocGFyYW0pIHtcbiAgICBjYXNlIC8qIERlZmF1bHQgKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiZGVmYXVsdFwiO1xuICAgIGNhc2UgLyogTm9TdG9yZSAqLzEgOlxuICAgICAgICByZXR1cm4gXCJuby1zdG9yZVwiO1xuICAgIGNhc2UgLyogUmVsb2FkICovMiA6XG4gICAgICAgIHJldHVybiBcInJlbG9hZFwiO1xuICAgIGNhc2UgLyogTm9DYWNoZSAqLzMgOlxuICAgICAgICByZXR1cm4gXCJuby1jYWNoZVwiO1xuICAgIGNhc2UgLyogRm9yY2VDYWNoZSAqLzQgOlxuICAgICAgICByZXR1cm4gXCJmb3JjZS1jYWNoZVwiO1xuICAgIGNhc2UgLyogT25seUlmQ2FjaGVkICovNSA6XG4gICAgICAgIHJldHVybiBcIm9ubHktaWYtY2FjaGVkXCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlUmVxdWVzdFJlZGlyZWN0KHBhcmFtKSB7XG4gIHN3aXRjaCAocGFyYW0pIHtcbiAgICBjYXNlIC8qIEZvbGxvdyAqLzAgOlxuICAgICAgICByZXR1cm4gXCJmb2xsb3dcIjtcbiAgICBjYXNlIC8qIEVycm9yICovMSA6XG4gICAgICAgIHJldHVybiBcImVycm9yXCI7XG4gICAgY2FzZSAvKiBNYW51YWwgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwibWFudWFsXCI7XG4gICAgXG4gIH1cbn1cblxudmFyIEhlYWRlcnNJbml0ID0geyB9O1xuXG52YXIgJCRIZWFkZXJzID0geyB9O1xuXG52YXIgQm9keUluaXQgPSB7IH07XG5cbmZ1bmN0aW9uIG1hcChmLCB2KSB7XG4gIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShDdXJyeS5fMShmLCBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKHYpKSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG1ha2UobWV0aG9kXywgaGVhZGVycywgYm9keSwgcmVmZXJyZXIsIHJlZmVycmVyUG9saWN5T3B0LCBtb2RlLCBjcmVkZW50aWFscywgY2FjaGUsIHJlZGlyZWN0LCBpbnRlZ3JpdHlPcHQsIGtlZXBhbGl2ZSkge1xuICB2YXIgcmVmZXJyZXJQb2xpY3kgPSByZWZlcnJlclBvbGljeU9wdCAhPT0gdW5kZWZpbmVkID8gcmVmZXJyZXJQb2xpY3lPcHQgOiAvKiBOb25lICovMDtcbiAgdmFyIGludGVncml0eSA9IGludGVncml0eU9wdCAhPT0gdW5kZWZpbmVkID8gaW50ZWdyaXR5T3B0IDogXCJcIjtcbiAgdmFyIHBhcnRpYWxfYXJnID0gaW50ZWdyaXR5O1xuICB2YXIgcGFydGlhbF9hcmckMSA9IG1hcChlbmNvZGVSZXF1ZXN0UmVkaXJlY3QsIHJlZGlyZWN0KTtcbiAgdmFyIHBhcnRpYWxfYXJnJDIgPSBtYXAoZW5jb2RlUmVxdWVzdENhY2hlLCBjYWNoZSk7XG4gIHZhciBwYXJ0aWFsX2FyZyQzID0gbWFwKGVuY29kZVJlcXVlc3RDcmVkZW50aWFscywgY3JlZGVudGlhbHMpO1xuICB2YXIgcGFydGlhbF9hcmckNCA9IG1hcChlbmNvZGVSZXF1ZXN0TW9kZSwgbW9kZSk7XG4gIHZhciBwYXJ0aWFsX2FyZyQ1ID0gZW5jb2RlUmVmZXJyZXJQb2xpY3kocmVmZXJyZXJQb2xpY3kpO1xuICB2YXIgcGFydGlhbF9hcmckNiA9IG1hcChlbmNvZGVSZXF1ZXN0TWV0aG9kLCBtZXRob2RfKTtcbiAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHZhciB0bXAgPSB7IH07XG4gICAgICBpZiAocGFydGlhbF9hcmckNiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRtcC5tZXRob2QgPSBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKHBhcnRpYWxfYXJnJDYpO1xuICAgICAgfVxuICAgICAgaWYgKGhlYWRlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0bXAuaGVhZGVycyA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oaGVhZGVycyk7XG4gICAgICB9XG4gICAgICBpZiAoYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRtcC5ib2R5ID0gQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihib2R5KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWZlcnJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRtcC5yZWZlcnJlciA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ocmVmZXJyZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnRpYWxfYXJnJDUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0bXAucmVmZXJyZXJQb2xpY3kgPSBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKHBhcnRpYWxfYXJnJDUpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnRpYWxfYXJnJDQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0bXAubW9kZSA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ocGFydGlhbF9hcmckNCk7XG4gICAgICB9XG4gICAgICBpZiAocGFydGlhbF9hcmckMyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRtcC5jcmVkZW50aWFscyA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ocGFydGlhbF9hcmckMyk7XG4gICAgICB9XG4gICAgICBpZiAocGFydGlhbF9hcmckMiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRtcC5jYWNoZSA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ocGFydGlhbF9hcmckMik7XG4gICAgICB9XG4gICAgICBpZiAocGFydGlhbF9hcmckMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRtcC5yZWRpcmVjdCA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ocGFydGlhbF9hcmckMSk7XG4gICAgICB9XG4gICAgICBpZiAocGFydGlhbF9hcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0bXAuaW50ZWdyaXR5ID0gQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihwYXJ0aWFsX2FyZyk7XG4gICAgICB9XG4gICAgICBpZiAoa2VlcGFsaXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdG1wLmtlZXBhbGl2ZSA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oa2VlcGFsaXZlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0bXA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ldGhvZF8oc2VsZikge1xuICB2YXIgbWV0aG9kXyQxID0gc2VsZi5tZXRob2Q7XG4gIHN3aXRjaCAobWV0aG9kXyQxKSB7XG4gICAgY2FzZSBcIkNPTk5FQ1RcIiA6XG4gICAgICAgIHJldHVybiAvKiBDb25uZWN0ICovNTtcbiAgICBjYXNlIFwiREVMRVRFXCIgOlxuICAgICAgICByZXR1cm4gLyogRGVsZXRlICovNDtcbiAgICBjYXNlIFwiR0VUXCIgOlxuICAgICAgICByZXR1cm4gLyogR2V0ICovMDtcbiAgICBjYXNlIFwiSEVBRFwiIDpcbiAgICAgICAgcmV0dXJuIC8qIEhlYWQgKi8xO1xuICAgIGNhc2UgXCJPUFRJT05TXCIgOlxuICAgICAgICByZXR1cm4gLyogT3B0aW9ucyAqLzY7XG4gICAgY2FzZSBcIlBBVENIXCIgOlxuICAgICAgICByZXR1cm4gLyogUGF0Y2ggKi84O1xuICAgIGNhc2UgXCJQT1NUXCIgOlxuICAgICAgICByZXR1cm4gLyogUG9zdCAqLzI7XG4gICAgY2FzZSBcIlBVVFwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFB1dCAqLzM7XG4gICAgY2FzZSBcIlRSQUNFXCIgOlxuICAgICAgICByZXR1cm4gLyogVHJhY2UgKi83O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gLyogT3RoZXIgKi9bbWV0aG9kXyQxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0eXBlXyhzZWxmKSB7XG4gIHZhciBlID0gc2VsZi50eXBlO1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIFwiXCIgOlxuICAgICAgICByZXR1cm4gLyogTm9uZSAqLzA7XG4gICAgY2FzZSBcImF1ZGlvXCIgOlxuICAgICAgICByZXR1cm4gLyogQXVkaW8gKi8xO1xuICAgIGNhc2UgXCJmb250XCIgOlxuICAgICAgICByZXR1cm4gLyogRm9udCAqLzI7XG4gICAgY2FzZSBcImltYWdlXCIgOlxuICAgICAgICByZXR1cm4gLyogSW1hZ2UgKi8zO1xuICAgIGNhc2UgXCJzY3JpcHRcIiA6XG4gICAgICAgIHJldHVybiAvKiBTY3JpcHQgKi80O1xuICAgIGNhc2UgXCJzdHlsZVwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFN0eWxlICovNTtcbiAgICBjYXNlIFwidHJhY2tcIiA6XG4gICAgICAgIHJldHVybiAvKiBUcmFjayAqLzY7XG4gICAgY2FzZSBcInZpZGVvXCIgOlxuICAgICAgICByZXR1cm4gLyogVmlkZW8gKi83O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5mYWlsdXJlLFxuICAgICAgICAgICAgXCJVbmtub3duIHJlcXVlc3RUeXBlOiBcIiArIGVcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlc3RpbmF0aW9uKHNlbGYpIHtcbiAgdmFyIGUgPSBzZWxmLmRlc3RpbmF0aW9uO1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIFwiXCIgOlxuICAgICAgICByZXR1cm4gLyogTm9uZSAqLzA7XG4gICAgY2FzZSBcImRvY3VtZW50XCIgOlxuICAgICAgICByZXR1cm4gLyogRG9jdW1lbnQgKi8xO1xuICAgIGNhc2UgXCJlbWJlZFwiIDpcbiAgICAgICAgcmV0dXJuIC8qIEVtYmVkICovMjtcbiAgICBjYXNlIFwiZm9udFwiIDpcbiAgICAgICAgcmV0dXJuIC8qIEZvbnQgKi8zO1xuICAgIGNhc2UgXCJpbWFnZVwiIDpcbiAgICAgICAgcmV0dXJuIC8qIEltYWdlICovNDtcbiAgICBjYXNlIFwibWFuaWZlc3RcIiA6XG4gICAgICAgIHJldHVybiAvKiBNYW5pZmVzdCAqLzU7XG4gICAgY2FzZSBcIm1lZGlhXCIgOlxuICAgICAgICByZXR1cm4gLyogTWVkaWEgKi82O1xuICAgIGNhc2UgXCJvYmplY3RcIiA6XG4gICAgICAgIHJldHVybiAvKiBPYmplY3QgKi83O1xuICAgIGNhc2UgXCJyZXBvcnRcIiA6XG4gICAgICAgIHJldHVybiAvKiBSZXBvcnQgKi84O1xuICAgIGNhc2UgXCJzY3JpcHRcIiA6XG4gICAgICAgIHJldHVybiAvKiBTY3JpcHQgKi85O1xuICAgIGNhc2UgXCJzZXJ2aWNld29ya2VyXCIgOlxuICAgICAgICByZXR1cm4gLyogU2VydmljZVdvcmtlciAqLzEwO1xuICAgIGNhc2UgXCJzaGFyZWR3b3JkZXJcIiA6XG4gICAgICAgIHJldHVybiAvKiBTaGFyZWRXb3JrZXIgKi8xMTtcbiAgICBjYXNlIFwic3R5bGVcIiA6XG4gICAgICAgIHJldHVybiAvKiBTdHlsZSAqLzEyO1xuICAgIGNhc2UgXCJ3b3JrZXJcIiA6XG4gICAgICAgIHJldHVybiAvKiBXb3JrZXIgKi8xMztcbiAgICBjYXNlIFwieHNsdFwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFhzbHQgKi8xNDtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgICAgIFwiVW5rbm93biByZXF1ZXN0RGVzdGluYXRpb246IFwiICsgZVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVmZXJyZXJQb2xpY3koc2VsZikge1xuICB2YXIgZSA9IHNlbGYucmVmZXJyZXJQb2xpY3k7XG4gIHN3aXRjaCAoZSkge1xuICAgIGNhc2UgXCJcIiA6XG4gICAgICAgIHJldHVybiAvKiBOb25lICovMDtcbiAgICBjYXNlIFwibm8tcmVmZXJyZXJcIiA6XG4gICAgICAgIHJldHVybiAvKiBOb1JlZmVycmVyICovMTtcbiAgICBjYXNlIFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIiA6XG4gICAgICAgIHJldHVybiAvKiBOb1JlZmVycmVyV2hlbkRvd25ncmFkZSAqLzI7XG4gICAgY2FzZSBcIm9yaWdpblwiIDpcbiAgICAgICAgcmV0dXJuIC8qIE9yaWdpbiAqLzQ7XG4gICAgY2FzZSBcIm9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIDpcbiAgICAgICAgcmV0dXJuIC8qIE9yaWdpbldoZW5Dcm9zc09yaWdpbiAqLzY7XG4gICAgY2FzZSBcInNhbWUtb3JpZ2luXCIgOlxuICAgICAgICByZXR1cm4gLyogU2FtZU9yaWdpbiAqLzM7XG4gICAgY2FzZSBcInN0cmljdC1vcmlnaW5cIiA6XG4gICAgICAgIHJldHVybiAvKiBTdHJpY3RPcmlnaW4gKi81O1xuICAgIGNhc2UgXCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgOlxuICAgICAgICByZXR1cm4gLyogU3RyaWN0T3JpZ2luV2hlbkNyb3NzT3JpZ2luICovNztcbiAgICBjYXNlIFwidW5zYWZlLXVybFwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFVuc2FmZVVybCAqLzg7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmZhaWx1cmUsXG4gICAgICAgICAgICBcIlVua25vd24gcmVmZXJyZXJQb2xpY3k6IFwiICsgZVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gbW9kZShzZWxmKSB7XG4gIHZhciBlID0gc2VsZi5tb2RlO1xuICBzd2l0Y2ggKGUpIHtcbiAgICBjYXNlIFwiY29yc1wiIDpcbiAgICAgICAgcmV0dXJuIC8qIENPUlMgKi8zO1xuICAgIGNhc2UgXCJuYXZpZ2F0ZVwiIDpcbiAgICAgICAgcmV0dXJuIC8qIE5hdmlnYXRlICovMDtcbiAgICBjYXNlIFwibm8tY29yc1wiIDpcbiAgICAgICAgcmV0dXJuIC8qIE5vQ09SUyAqLzI7XG4gICAgY2FzZSBcInNhbWUtb3JpZ2luXCIgOlxuICAgICAgICByZXR1cm4gLyogU2FtZU9yaWdpbiAqLzE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmZhaWx1cmUsXG4gICAgICAgICAgICBcIlVua25vd24gcmVxdWVzdE1vZGU6IFwiICsgZVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlZGVudGlhbHMoc2VsZikge1xuICB2YXIgZSA9IHNlbGYuY3JlZGVudGlhbHM7XG4gIHN3aXRjaCAoZSkge1xuICAgIGNhc2UgXCJpbmNsdWRlXCIgOlxuICAgICAgICByZXR1cm4gLyogSW5jbHVkZSAqLzI7XG4gICAgY2FzZSBcIm9taXRcIiA6XG4gICAgICAgIHJldHVybiAvKiBPbWl0ICovMDtcbiAgICBjYXNlIFwic2FtZS1vcmlnaW5cIiA6XG4gICAgICAgIHJldHVybiAvKiBTYW1lT3JpZ2luICovMTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgICAgIFwiVW5rbm93biByZXF1ZXN0Q3JlZGVudGlhbHM6IFwiICsgZVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FjaGUoc2VsZikge1xuICB2YXIgZSA9IHNlbGYuY2FjaGU7XG4gIHN3aXRjaCAoZSkge1xuICAgIGNhc2UgXCJkZWZhdWx0XCIgOlxuICAgICAgICByZXR1cm4gLyogRGVmYXVsdCAqLzA7XG4gICAgY2FzZSBcImZvcmNlLWNhY2hlXCIgOlxuICAgICAgICByZXR1cm4gLyogRm9yY2VDYWNoZSAqLzQ7XG4gICAgY2FzZSBcIm5vLWNhY2hlXCIgOlxuICAgICAgICByZXR1cm4gLyogTm9DYWNoZSAqLzM7XG4gICAgY2FzZSBcIm5vLXN0b3JlXCIgOlxuICAgICAgICByZXR1cm4gLyogTm9TdG9yZSAqLzE7XG4gICAgY2FzZSBcIm9ubHktaWYtY2FjaGVkXCIgOlxuICAgICAgICByZXR1cm4gLyogT25seUlmQ2FjaGVkICovNTtcbiAgICBjYXNlIFwicmVsb2FkXCIgOlxuICAgICAgICByZXR1cm4gLyogUmVsb2FkICovMjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgICAgIFwiVW5rbm93biByZXF1ZXN0Q2FjaGU6IFwiICsgZVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkaXJlY3Qoc2VsZikge1xuICB2YXIgZSA9IHNlbGYucmVkaXJlY3Q7XG4gIHN3aXRjaCAoZSkge1xuICAgIGNhc2UgXCJlcnJvclwiIDpcbiAgICAgICAgcmV0dXJuIC8qIEVycm9yICovMTtcbiAgICBjYXNlIFwiZm9sbG93XCIgOlxuICAgICAgICByZXR1cm4gLyogRm9sbG93ICovMDtcbiAgICBjYXNlIFwibWFudWFsXCIgOlxuICAgICAgICByZXR1cm4gLyogTWFudWFsICovMjtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuZmFpbHVyZSxcbiAgICAgICAgICAgIFwiVW5rbm93biByZXF1ZXN0UmVkaXJlY3Q6IFwiICsgZVxuICAgICAgICAgIF07XG4gIH1cbn1cblxudmFyICQkUmVxdWVzdCA9IHtcbiAgbWV0aG9kXzogbWV0aG9kXyxcbiAgdHlwZV86IHR5cGVfLFxuICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24sXG4gIHJlZmVycmVyUG9saWN5OiByZWZlcnJlclBvbGljeSxcbiAgbW9kZTogbW9kZSxcbiAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLFxuICBjYWNoZTogY2FjaGUsXG4gIHJlZGlyZWN0OiByZWRpcmVjdFxufTtcblxudmFyICQkUmVzcG9uc2UgPSB7IH07XG5cbnZhciBCb2R5ID0geyB9O1xuXG52YXIgUmVxdWVzdEluaXQgPSB7XG4gIG1ha2U6IG1ha2Vcbn07XG5cbmV4cG9ydCB7XG4gIEhlYWRlcnNJbml0ICxcbiAgJCRIZWFkZXJzICxcbiAgQm9keUluaXQgLFxuICBCb2R5ICxcbiAgUmVxdWVzdEluaXQgLFxuICAkJFJlcXVlc3QgLFxuICAkJFJlc3BvbnNlICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29iaiBmcm9tIFwiLi9jYW1sX29iai5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9hcnJheSBmcm9tIFwiLi9jYW1sX2FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9leGNlcHRpb25zLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2pzX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9qc19leGNlcHRpb25zLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgbWFrZV9mbG9hdCA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX2Zsb2F0X3ZlY3Q7XG5cbnZhciBGbG9hdGFycmF5ID0geyB9O1xuXG5mdW5jdGlvbiBpbml0KGwsIGYpIHtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKGwgPCAwKSB7XG4gICAgdGhyb3cgW1xuICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgXCJBcnJheS5pbml0XCJcbiAgICAgICAgXTtcbiAgfVxuICB2YXIgcmVzID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChsLCBDdXJyeS5fMShmLCAwKSk7XG4gIGZvcih2YXIgaSA9IDE7IGkgPCBsOyArK2kpe1xuICAgIHJlc1tpXSA9IEN1cnJ5Ll8xKGYsIGkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1ha2VfbWF0cml4KHN4LCBzeSwgaW5pdCkge1xuICB2YXIgcmVzID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChzeCwgW10pO1xuICBmb3IodmFyIHggPSAwOyB4IDwgc3g7ICsreCl7XG4gICAgcmVzW3hdID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChzeSwgaW5pdCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gY29weShhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc3ViKGEsIDAsIGwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZChhMSwgYTIpIHtcbiAgdmFyIGwxID0gYTEubGVuZ3RoO1xuICBpZiAobDEgPT09IDApIHtcbiAgICByZXR1cm4gY29weShhMik7XG4gIH0gZWxzZSBpZiAoYTIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zdWIoYTEsIDAsIGwxKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYTEuY29uY2F0KGEyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWIoYSwgb2ZzLCBsZW4pIHtcbiAgaWYgKG9mcyA8IDAgfHwgbGVuIDwgMCB8fCBvZnMgPiAoYS5sZW5ndGggLSBsZW4gfCAwKSkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiQXJyYXkuc3ViXCJcbiAgICAgICAgXTtcbiAgfVxuICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3N1YihhLCBvZnMsIGxlbik7XG59XG5cbmZ1bmN0aW9uIGZpbGwoYSwgb2ZzLCBsZW4sIHYpIHtcbiAgaWYgKG9mcyA8IDAgfHwgbGVuIDwgMCB8fCBvZnMgPiAoYS5sZW5ndGggLSBsZW4gfCAwKSkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiQXJyYXkuZmlsbFwiXG4gICAgICAgIF07XG4gIH1cbiAgZm9yKHZhciBpID0gb2ZzICxpX2ZpbmlzaCA9IG9mcyArIGxlbiB8IDA7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBhW2ldID0gdjtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gYmxpdChhMSwgb2ZzMSwgYTIsIG9mczIsIGxlbikge1xuICBpZiAobGVuIDwgMCB8fCBvZnMxIDwgMCB8fCBvZnMxID4gKGExLmxlbmd0aCAtIGxlbiB8IDApIHx8IG9mczIgPCAwIHx8IG9mczIgPiAoYTIubGVuZ3RoIC0gbGVuIHwgMCkpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIkFycmF5LmJsaXRcIlxuICAgICAgICBdO1xuICB9XG4gIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfYmxpdChhMSwgb2ZzMSwgYTIsIG9mczIsIGxlbik7XG59XG5cbmZ1bmN0aW9uIGl0ZXIoZiwgYSkge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgQ3VycnkuXzEoZiwgYVtpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGl0ZXIyKGYsIGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiQXJyYXkuaXRlcjI6IGFycmF5cyBtdXN0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoXCJcbiAgICAgICAgXTtcbiAgfVxuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgQ3VycnkuXzIoZiwgYVtpXSwgYltpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG1hcChmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChsLCBDdXJyeS5fMShmLCBhWzBdKSk7XG4gIGZvcih2YXIgaSA9IDE7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBDdXJyeS5fMShmLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gbWFwMihmLCBhLCBiKSB7XG4gIHZhciBsYSA9IGEubGVuZ3RoO1xuICB2YXIgbGIgPSBiLmxlbmd0aDtcbiAgaWYgKGxhICE9PSBsYikge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiQXJyYXkubWFwMjogYXJyYXlzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGhcIlxuICAgICAgICBdO1xuICB9XG4gIGlmIChsYSA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgciA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX3ZlY3QobGEsIEN1cnJ5Ll8yKGYsIGFbMF0sIGJbMF0pKTtcbiAgZm9yKHZhciBpID0gMTsgaSA8IGxhOyArK2kpe1xuICAgIHJbaV0gPSBDdXJyeS5fMihmLCBhW2ldLCBiW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gaXRlcmkoZiwgYSkge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgQ3VycnkuXzIoZiwgaSwgYVtpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG1hcGkoZiwgYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgciA9IENhbWxfYXJyYXkuY2FtbF9tYWtlX3ZlY3QobCwgQ3VycnkuXzIoZiwgMCwgYVswXSkpO1xuICBmb3IodmFyIGkgPSAxOyBpIDwgbDsgKytpKXtcbiAgICByW2ldID0gQ3VycnkuXzIoZiwgaSwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIHRvX2xpc3QoYSkge1xuICB2YXIgX2kgPSBhLmxlbmd0aCAtIDEgfCAwO1xuICB2YXIgX3JlcyA9IC8qIFtdICovMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBfcmVzID0gLyogOjogKi9bXG4gICAgICBhW2ldLFxuICAgICAgcmVzXG4gICAgXTtcbiAgICBfaSA9IGkgLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpc3RfbGVuZ3RoKF9hY2N1LCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfcGFyYW0gPSBwYXJhbVsxXTtcbiAgICBfYWNjdSA9IGFjY3UgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mX2xpc3QobCkge1xuICBpZiAoIWwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGEgPSBDYW1sX2FycmF5LmNhbWxfbWFrZV92ZWN0KGxpc3RfbGVuZ3RoKDAsIGwpLCBsWzBdKTtcbiAgdmFyIF9pID0gMTtcbiAgdmFyIF9wYXJhbSA9IGxbMV07XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgYVtpXSA9IHBhcmFtWzBdO1xuICAgIF9wYXJhbSA9IHBhcmFtWzFdO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9sZF9sZWZ0KGYsIHgsIGEpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgciA9IEN1cnJ5Ll8yKGYsIHIsIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBmb2xkX3JpZ2h0KGYsIGEsIHgpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSBhLmxlbmd0aCAtIDEgfCAwOyBpID49IDA7IC0taSl7XG4gICAgciA9IEN1cnJ5Ll8yKGYsIGFbaV0sIHIpO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBleGlzdHMocCwgYSkge1xuICB2YXIgbiA9IGEubGVuZ3RoO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQ3VycnkuXzEocCwgYVtpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcl9hbGwocCwgYSkge1xuICB2YXIgbiA9IGEubGVuZ3RoO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghQ3VycnkuXzEocCwgYVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZW0oeCwgYSkge1xuICB2YXIgbiA9IGEubGVuZ3RoO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQ2FtbF9vYmouY2FtbF9lcXVhbChhW2ldLCB4KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVtcSh4LCBhKSB7XG4gIHZhciBuID0gYS5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh4ID09PSBhW2ldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG52YXIgQm90dG9tID0gQ2FtbF9leGNlcHRpb25zLmNyZWF0ZShcIkFycmF5LkJvdHRvbVwiKTtcblxuZnVuY3Rpb24gc29ydChjbXAsIGEpIHtcbiAgdmFyIG1heHNvbiA9IGZ1bmN0aW9uIChsLCBpKSB7XG4gICAgdmFyIGkzMSA9ICgoaSArIGkgfCAwKSArIGkgfCAwKSArIDEgfCAwO1xuICAgIHZhciB4ID0gaTMxO1xuICAgIGlmICgoaTMxICsgMiB8IDApIDwgbCkge1xuICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMzEpLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGkzMSArIDEgfCAwKSkgPCAwKSB7XG4gICAgICAgIHggPSBpMzEgKyAxIHwgMDtcbiAgICAgIH1cbiAgICAgIGlmIChDdXJyeS5fMihjbXAsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgeCksIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaTMxICsgMiB8IDApKSA8IDApIHtcbiAgICAgICAgeCA9IGkzMSArIDIgfCAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICgoaTMxICsgMSB8IDApIDwgbCAmJiBDdXJyeS5fMihjbXAsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaTMxKSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpMzEgKyAxIHwgMCkpIDwgMCkge1xuICAgICAgcmV0dXJuIGkzMSArIDEgfCAwO1xuICAgIH1cbiAgICBpZiAoaTMxIDwgbCkge1xuICAgICAgcmV0dXJuIGkzMTtcbiAgICB9XG4gICAgdGhyb3cgW1xuICAgICAgICAgIEJvdHRvbSxcbiAgICAgICAgICBpXG4gICAgICAgIF07XG4gIH07XG4gIHZhciB0cmlja2xlID0gZnVuY3Rpb24gKGwsIGksIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF9pID0gaTtcbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgdmFyIGkkMSA9IF9pO1xuICAgICAgICB2YXIgaiA9IG1heHNvbihsLCBpJDEpO1xuICAgICAgICBpZiAoQ3VycnkuXzIoY21wLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGopLCBlKSA8PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgaSQxLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGkkMSwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBqKSk7XG4gICAgICAgIF9pID0gajtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfTtcbiAgICB9XG4gICAgY2F0Y2ggKHJhd19pKXtcbiAgICAgIHZhciBpJDIgPSBDYW1sX2pzX2V4Y2VwdGlvbnMuaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uKHJhd19pKTtcbiAgICAgIGlmIChpJDJbMF0gPT09IEJvdHRvbSkge1xuICAgICAgICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpJDJbMV0sIGUpO1xuICAgICAgfVxuICAgICAgdGhyb3cgaSQyO1xuICAgIH1cbiAgfTtcbiAgdmFyIGJ1YmJsZSA9IGZ1bmN0aW9uIChsLCBpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfaSA9IGk7XG4gICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgIHZhciBpJDEgPSBfaTtcbiAgICAgICAgdmFyIGogPSBtYXhzb24obCwgaSQxKTtcbiAgICAgICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpJDEsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaikpO1xuICAgICAgICBfaSA9IGo7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH07XG4gICAgfVxuICAgIGNhdGNoIChyYXdfaSl7XG4gICAgICB2YXIgaSQyID0gQ2FtbF9qc19leGNlcHRpb25zLmludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbihyYXdfaSk7XG4gICAgICBpZiAoaSQyWzBdID09PSBCb3R0b20pIHtcbiAgICAgICAgcmV0dXJuIGkkMlsxXTtcbiAgICAgIH1cbiAgICAgIHRocm93IGkkMjtcbiAgICB9XG4gIH07XG4gIHZhciB0cmlja2xldXAgPSBmdW5jdGlvbiAoX2ksIGUpIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaSA9IF9pO1xuICAgICAgdmFyIGZhdGhlciA9IChpIC0gMSB8IDApIC8gMyB8IDA7XG4gICAgICBpZiAoaSA9PT0gZmF0aGVyKSB7XG4gICAgICAgIHRocm93IFtcbiAgICAgICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuYXNzZXJ0X2ZhaWx1cmUsXG4gICAgICAgICAgICAgIC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICAgIFwiYXJyYXkubWxcIixcbiAgICAgICAgICAgICAgICAyMzgsXG4gICAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuICAgICAgfVxuICAgICAgaWYgKEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBmYXRoZXIpLCBlKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIGksIGUpO1xuICAgICAgfVxuICAgICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCBpLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIGZhdGhlcikpO1xuICAgICAgaWYgKGZhdGhlciA8PSAwKSB7XG4gICAgICAgIHJldHVybiBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIDAsIGUpO1xuICAgICAgfVxuICAgICAgX2kgPSBmYXRoZXI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfTtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgZm9yKHZhciBpID0gKChsICsgMSB8IDApIC8gMyB8IDApIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICB0cmlja2xlKGwsIGksIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaSkpO1xuICB9XG4gIGZvcih2YXIgaSQxID0gbCAtIDEgfCAwOyBpJDEgPj0gMjsgLS1pJDEpe1xuICAgIHZhciBlID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBpJDEpO1xuICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoYSwgaSQxLCBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIDApKTtcbiAgICB0cmlja2xldXAoYnViYmxlKGkkMSwgMCksIGUpO1xuICB9XG4gIGlmIChsIDw9IDEpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBlJDEgPSBDYW1sX2FycmF5LmNhbWxfYXJyYXlfZ2V0KGEsIDEpO1xuICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGEsIDEsIENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgMCkpO1xuICByZXR1cm4gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChhLCAwLCBlJDEpO1xufVxuXG5mdW5jdGlvbiBzdGFibGVfc29ydChjbXAsIGEpIHtcbiAgdmFyIG1lcmdlID0gZnVuY3Rpb24gKHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzKSB7XG4gICAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICAgIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgICB2YXIgX2kxID0gc3JjMW9mcztcbiAgICB2YXIgX3MxID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBzcmMxb2ZzKTtcbiAgICB2YXIgX2kyID0gc3JjMm9mcztcbiAgICB2YXIgX3MyID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChzcmMyLCBzcmMyb2ZzKTtcbiAgICB2YXIgX2QgPSBkc3RvZnM7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGQgPSBfZDtcbiAgICAgIHZhciBzMiA9IF9zMjtcbiAgICAgIHZhciBpMiA9IF9pMjtcbiAgICAgIHZhciBzMSA9IF9zMTtcbiAgICAgIHZhciBpMSA9IF9pMTtcbiAgICAgIGlmIChDdXJyeS5fMihjbXAsIHMxLCBzMikgPD0gMCkge1xuICAgICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGRzdCwgZCwgczEpO1xuICAgICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgICAgcmV0dXJuIGJsaXQoc3JjMiwgaTIsIGRzdCwgZCArIDEgfCAwLCBzcmMyciAtIGkyIHwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgX2QgPSBkICsgMSB8IDA7XG4gICAgICAgIF9zMSA9IENhbWxfYXJyYXkuY2FtbF9hcnJheV9nZXQoYSwgaTEkMSk7XG4gICAgICAgIF9pMSA9IGkxJDE7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH1cbiAgICAgIENhbWxfYXJyYXkuY2FtbF9hcnJheV9zZXQoZHN0LCBkLCBzMik7XG4gICAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgICBpZiAoaTIkMSA+PSBzcmMycikge1xuICAgICAgICByZXR1cm4gYmxpdChhLCBpMSwgZHN0LCBkICsgMSB8IDAsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICAgIH1cbiAgICAgIF9kID0gZCArIDEgfCAwO1xuICAgICAgX3MyID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChzcmMyLCBpMiQxKTtcbiAgICAgIF9pMiA9IGkyJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfTtcbiAgdmFyIGlzb3J0dG8gPSBmdW5jdGlvbiAoc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICAgIHZhciBlID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCBzcmNvZnMgKyBpIHwgMCk7XG4gICAgICB2YXIgaiA9IChkc3RvZnMgKyBpIHwgMCkgLSAxIHwgMDtcbiAgICAgIHdoaWxlKGogPj0gZHN0b2ZzICYmIEN1cnJ5Ll8yKGNtcCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChkc3QsIGopLCBlKSA+IDApIHtcbiAgICAgICAgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3NldChkc3QsIGogKyAxIHwgMCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChkc3QsIGopKTtcbiAgICAgICAgaiA9IGogLSAxIHwgMDtcbiAgICAgIH07XG4gICAgICBDYW1sX2FycmF5LmNhbWxfYXJyYXlfc2V0KGRzdCwgaiArIDEgfCAwLCBlKTtcbiAgICB9XG4gICAgXG4gIH07XG4gIHZhciBzb3J0dG8gPSBmdW5jdGlvbiAoc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuKSB7XG4gICAgaWYgKGxlbiA8PSA1KSB7XG4gICAgICByZXR1cm4gaXNvcnR0byhzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pO1xuICAgIH1cbiAgICB2YXIgbDEgPSBsZW4gLyAyIHwgMDtcbiAgICB2YXIgbDIgPSBsZW4gLSBsMSB8IDA7XG4gICAgc29ydHRvKHNyY29mcyArIGwxIHwgMCwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyKTtcbiAgICBzb3J0dG8oc3Jjb2ZzLCBhLCBzcmNvZnMgKyBsMiB8IDAsIGwxKTtcbiAgICByZXR1cm4gbWVyZ2Uoc3Jjb2ZzICsgbDIgfCAwLCBsMSwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyLCBkc3QsIGRzdG9mcyk7XG4gIH07XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsIDw9IDUpIHtcbiAgICByZXR1cm4gaXNvcnR0bygwLCBhLCAwLCBsKTtcbiAgfVxuICB2YXIgbDEgPSBsIC8gMiB8IDA7XG4gIHZhciBsMiA9IGwgLSBsMSB8IDA7XG4gIHZhciB0ID0gQ2FtbF9hcnJheS5jYW1sX21ha2VfdmVjdChsMiwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X2dldChhLCAwKSk7XG4gIHNvcnR0byhsMSwgdCwgMCwgbDIpO1xuICBzb3J0dG8oMCwgYSwgbDIsIGwxKTtcbiAgcmV0dXJuIG1lcmdlKGwyLCBsMSwgdCwgMCwgbDIsIGEsIDApO1xufVxuXG52YXIgY3JlYXRlX21hdHJpeCA9IG1ha2VfbWF0cml4O1xuXG52YXIgY29uY2F0ID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X2NvbmNhdDtcblxudmFyIGZhc3Rfc29ydCA9IHN0YWJsZV9zb3J0O1xuXG5leHBvcnQge1xuICBtYWtlX2Zsb2F0ICxcbiAgaW5pdCAsXG4gIG1ha2VfbWF0cml4ICxcbiAgY3JlYXRlX21hdHJpeCAsXG4gIGFwcGVuZCAsXG4gIGNvbmNhdCAsXG4gIHN1YiAsXG4gIGNvcHkgLFxuICBmaWxsICxcbiAgYmxpdCAsXG4gIHRvX2xpc3QgLFxuICBvZl9saXN0ICxcbiAgaXRlciAsXG4gIGl0ZXJpICxcbiAgbWFwICxcbiAgbWFwaSAsXG4gIGZvbGRfbGVmdCAsXG4gIGZvbGRfcmlnaHQgLFxuICBpdGVyMiAsXG4gIG1hcDIgLFxuICBmb3JfYWxsICxcbiAgZXhpc3RzICxcbiAgbWVtICxcbiAgbWVtcSAsXG4gIHNvcnQgLFxuICBzdGFibGVfc29ydCAsXG4gIGZhc3Rfc29ydCAsXG4gIEZsb2F0YXJyYXkgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBfXyh0YWcsIGJsb2NrKSB7XG4gIGJsb2NrLnRhZyA9IHRhZztcbiAgcmV0dXJuIGJsb2NrO1xufVxuXG5leHBvcnQge1xuICBfXyAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qc1wiO1xuXG5mdW5jdGlvbiBjYW1sX2FycmF5X3N1Yih4LCBvZmZzZXQsIGxlbikge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbik7XG4gIHZhciBqID0gMDtcbiAgdmFyIGkgPSBvZmZzZXQ7XG4gIHdoaWxlKGogPCBsZW4pIHtcbiAgICByZXN1bHRbal0gPSB4W2ldO1xuICAgIGogPSBqICsgMSB8IDA7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbGVuKF9hY2MsIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2wgPSBsWzFdO1xuICAgIF9hY2MgPSBsWzBdLmxlbmd0aCArIGFjYyB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsKGFyciwgX2ksIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgeCA9IGxbMF07XG4gICAgdmFyIGwkMSA9IHgubGVuZ3RoO1xuICAgIHZhciBrID0gaTtcbiAgICB2YXIgaiA9IDA7XG4gICAgd2hpbGUoaiA8IGwkMSkge1xuICAgICAgYXJyW2tdID0geFtqXTtcbiAgICAgIGsgPSBrICsgMSB8IDA7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH07XG4gICAgX2wgPSBsWzFdO1xuICAgIF9pID0gaztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfY29uY2F0KGwpIHtcbiAgdmFyIHYgPSBsZW4oMCwgbCk7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodik7XG4gIGZpbGwocmVzdWx0LCAwLCBsKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FtbF9hcnJheV9zZXQoeHMsIGluZGV4LCBuZXd2YWwpIHtcbiAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB4cy5sZW5ndGgpIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcImluZGV4IG91dCBvZiBib3VuZHNcIlxuICAgICAgICBdO1xuICB9XG4gIHhzW2luZGV4XSA9IG5ld3ZhbDtcbiAgXG59XG5cbmZ1bmN0aW9uIGNhbWxfYXJyYXlfZ2V0KHhzLCBpbmRleCkge1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHhzLmxlbmd0aCkge1xuICAgIHRocm93IFtcbiAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgIFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiXG4gICAgICAgIF07XG4gIH1cbiAgcmV0dXJuIHhzW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gY2FtbF9tYWtlX3ZlY3QobGVuLCBpbml0KSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IGluaXQ7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbWFrZV9mbG9hdF92ZWN0KGxlbikge1xuICB2YXIgYiA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIGJbaV0gPSAwO1xuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBjYW1sX2FycmF5X2JsaXQoYTEsIGkxLCBhMiwgaTIsIGxlbikge1xuICBpZiAoaTIgPD0gaTEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgbGVuOyArK2ope1xuICAgICAgYTJbaiArIGkyIHwgMF0gPSBhMVtqICsgaTEgfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGokMSA9IGxlbiAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIGkyIHwgMF0gPSBhMVtqJDEgKyBpMSB8IDBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBjYW1sX2FycmF5X2R1cChwcmltKSB7XG4gIHJldHVybiBwcmltLnNsaWNlKDApO1xufVxuXG5leHBvcnQge1xuICBjYW1sX2FycmF5X2R1cCAsXG4gIGNhbWxfYXJyYXlfc3ViICxcbiAgY2FtbF9hcnJheV9jb25jYXQgLFxuICBjYW1sX21ha2VfdmVjdCAsXG4gIGNhbWxfbWFrZV9mbG9hdF92ZWN0ICxcbiAgY2FtbF9hcnJheV9ibGl0ICxcbiAgY2FtbF9hcnJheV9nZXQgLFxuICBjYW1sX2FycmF5X3NldCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbnZhciBvdXRfb2ZfbWVtb3J5ID0gLyogdHVwbGUgKi9bXG4gIFwiT3V0X29mX21lbW9yeVwiLFxuICAwXG5dO1xuXG52YXIgc3lzX2Vycm9yID0gLyogdHVwbGUgKi9bXG4gIFwiU3lzX2Vycm9yXCIsXG4gIC0xXG5dO1xuXG52YXIgZmFpbHVyZSA9IC8qIHR1cGxlICovW1xuICBcIkZhaWx1cmVcIixcbiAgLTJcbl07XG5cbnZhciBpbnZhbGlkX2FyZ3VtZW50ID0gLyogdHVwbGUgKi9bXG4gIFwiSW52YWxpZF9hcmd1bWVudFwiLFxuICAtM1xuXTtcblxudmFyIGVuZF9vZl9maWxlID0gLyogdHVwbGUgKi9bXG4gIFwiRW5kX29mX2ZpbGVcIixcbiAgLTRcbl07XG5cbnZhciBkaXZpc2lvbl9ieV96ZXJvID0gLyogdHVwbGUgKi9bXG4gIFwiRGl2aXNpb25fYnlfemVyb1wiLFxuICAtNVxuXTtcblxudmFyIG5vdF9mb3VuZCA9IC8qIHR1cGxlICovW1xuICBcIk5vdF9mb3VuZFwiLFxuICAtNlxuXTtcblxudmFyIG1hdGNoX2ZhaWx1cmUgPSAvKiB0dXBsZSAqL1tcbiAgXCJNYXRjaF9mYWlsdXJlXCIsXG4gIC03XG5dO1xuXG52YXIgc3RhY2tfb3ZlcmZsb3cgPSAvKiB0dXBsZSAqL1tcbiAgXCJTdGFja19vdmVyZmxvd1wiLFxuICAtOFxuXTtcblxudmFyIHN5c19ibG9ja2VkX2lvID0gLyogdHVwbGUgKi9bXG4gIFwiU3lzX2Jsb2NrZWRfaW9cIixcbiAgLTlcbl07XG5cbnZhciBhc3NlcnRfZmFpbHVyZSA9IC8qIHR1cGxlICovW1xuICBcIkFzc2VydF9mYWlsdXJlXCIsXG4gIC0xMFxuXTtcblxudmFyIHVuZGVmaW5lZF9yZWN1cnNpdmVfbW9kdWxlID0gLyogdHVwbGUgKi9bXG4gIFwiVW5kZWZpbmVkX3JlY3Vyc2l2ZV9tb2R1bGVcIixcbiAgLTExXG5dO1xuXG5vdXRfb2ZfbWVtb3J5LnRhZyA9IDI0ODtcblxuc3lzX2Vycm9yLnRhZyA9IDI0ODtcblxuZmFpbHVyZS50YWcgPSAyNDg7XG5cbmludmFsaWRfYXJndW1lbnQudGFnID0gMjQ4O1xuXG5lbmRfb2ZfZmlsZS50YWcgPSAyNDg7XG5cbmRpdmlzaW9uX2J5X3plcm8udGFnID0gMjQ4O1xuXG5ub3RfZm91bmQudGFnID0gMjQ4O1xuXG5tYXRjaF9mYWlsdXJlLnRhZyA9IDI0ODtcblxuc3RhY2tfb3ZlcmZsb3cudGFnID0gMjQ4O1xuXG5zeXNfYmxvY2tlZF9pby50YWcgPSAyNDg7XG5cbmFzc2VydF9mYWlsdXJlLnRhZyA9IDI0ODtcblxudW5kZWZpbmVkX3JlY3Vyc2l2ZV9tb2R1bGUudGFnID0gMjQ4O1xuXG5leHBvcnQge1xuICBvdXRfb2ZfbWVtb3J5ICxcbiAgc3lzX2Vycm9yICxcbiAgZmFpbHVyZSAsXG4gIGludmFsaWRfYXJndW1lbnQgLFxuICBlbmRfb2ZfZmlsZSAsXG4gIGRpdmlzaW9uX2J5X3plcm8gLFxuICBub3RfZm91bmQgLFxuICBtYXRjaF9mYWlsdXJlICxcbiAgc3RhY2tfb3ZlcmZsb3cgLFxuICBzeXNfYmxvY2tlZF9pbyAsXG4gIGFzc2VydF9mYWlsdXJlICxcbiAgdW5kZWZpbmVkX3JlY3Vyc2l2ZV9tb2R1bGUgLFxuICBcbn1cbi8qICBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEJsb2NrIGZyb20gXCIuL2Jsb2NrLmpzXCI7XG5cbnZhciBzZXR1cENocm9tZURlYnVnZ2VyID0gKGZ1bmN0aW9uKF8pe1xuIFxuIC8vIEkgZG9uJ3Qga25vdyBob3cgdG8gZGlyZWN0bHkgcmVmZXIgdG8gdGhlIGNsYXNzZXMgdGhhdCBjaHJvbWUncyBidWlsdC1pblxuIC8vIGZvcm1hdHRlcnMgdXNlLiBhZGRpbmcgXCJjbGFzc1wiOiBcImZvb1wiIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXG4gLy8gdHJlZS1vdXRsaW5lXG4gdmFyIG9sU3R5bGUgPSB7XCJzdHlsZVwiOiBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgcGFkZGluZy1sZWZ0OiAxMnB4OyBtYXJnaW46IDBcIn1cbiAvLyBvYmplY3QtcHJvcGVydGllcy1zZWN0aW9uLXNlcGFyYXRvclxuIHZhciBjb2xvblN0eWxlID0ge1wic3R5bGVcIjogXCJmbGV4LXNocmluazogMDsgcGFkZGluZy1yaWdodDogNXB4XCJ9XG4gXG5cbiB2YXIgc2hvd09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICByZXR1cm4gdmFsdWUgKyAnJ1xuICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuIFtcIm9iamVjdFwiLCB7XCJvYmplY3RcIjogdmFsdWV9XVxuICAgfVxuIH1cbiBcblxudmFyIGxpc3RUb0FycmF5ID0gZnVuY3Rpb24gKGRhdGEpe1xuIHZhciByZXN1bHQgPSBbXVxuIHZhciBjdXIgPSBkYXRhXG4gdmFyIGluZGV4ID0gMFxuIHdoaWxlKHR5cGVvZiBjdXIgIT09IFwibnVtYmVyXCIpe1xuICAgcmVzdWx0LnB1c2goW1xuICAgICBcImxpXCIsXG4gICAgIHt9LFxuICAgICBbXCJzcGFuXCIsIHtcInN0eWxlXCI6IFwiY29sb3I6IHJnYigyMjcsIDExMCwgMjM2KVwifSwgaW5kZXhdLFxuICAgICBbXCJzcGFuXCIsIGNvbG9uU3R5bGUsIFwiOlwiXSxcbiAgICAgc2hvd09iamVjdChjdXJbMF0pXG4gICBdKTtcbiAgIGN1ciA9IGN1clsxXVxuICAgaW5kZXgrK1xuIH1cbiByZXR1cm4gcmVzdWx0XG59O1xuXG52YXIgdmFyaWFudEN1c3RvbUZvcm1hdHRlciA9IGZ1bmN0aW9uIChkYXRhLHJlY29yZFZhcmlhbnQpe1xuIGlmKHJlY29yZFZhcmlhbnQgPT09IFwiOjpcIil7XG4gICByZXR1cm4gW1xuICAgICBcIm9sXCIsXG4gICAgIG9sU3R5bGUsXG4gICAgIC4uLiBsaXN0VG9BcnJheShkYXRhKVxuICAgXVxuIH0gZWxzZSB7XG4gICAgbGV0IHNwYWNlZERhdGEgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goY3VyID0+IHtcbiAgICAgIHNwYWNlZERhdGEucHVzaChbXCJzcGFuXCIsIHtcInN0eWxlXCI6IFwibWFyZ2luLXJpZ2h0OiAxMnB4XCJ9LCBzaG93T2JqZWN0KGN1cildKTtcbiAgICB9KVxuICAgICByZXR1cm4gW1wib2xcIiwgb2xTdHlsZSwgLi4uc3BhY2VkRGF0YV1cbiB9XG5cbn07XG5cbnZhciB2YXJpYW50UHJldmlldyA9IGZ1bmN0aW9uICh4LCByZWNvcmRWYXJpYW50KXtcbiBpZihyZWNvcmRWYXJpYW50ID09PSBcIjo6XCIpIHtcbiAgIC8vIHNob3cgdGhlIGxlbmd0aCwganVzdCBsaWtlIGZvciBhcnJheVxuICAgdmFyIGxlbmd0aCA9IGxpc3RUb0FycmF5KHgpLmxlbmd0aDtcbiAgIHJldHVybiBbJ3NwYW4nLCB7fSwgYGxpc3QoJHtsZW5ndGh9KWBdXG4gfVxuIHJldHVybiBbJ3NwYW4nLCB7fSwgYCR7cmVjb3JkVmFyaWFudH0o4oCmKWBdXG59O1xudmFyIGlzT0NhbWxFeGNlcHRpb25PckV4dGVuc2lvbkhlYWQgPSBmdW5jdGlvbih4KXtcbiByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSAmJiB4LnRhZyA9PT0gMjQ4ICYmIHR5cGVvZiB4WzBdID09PSBcInN0cmluZ1wiXG59XG52YXIgaXNPQ2FtbEV4Y2VwdGlvbk9yRXh0ZW5zaW9uID0gZnVuY3Rpb24oeCl7XG4gcmV0dXJuIEFycmF5LmlzQXJyYXkoeCkgJiZcbiAgICAgICB4WzBdICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICBpc09DYW1sRXhjZXB0aW9uT3JFeHRlbnNpb25IZWFkKHhbMF0pXG59XG52YXIgZm9ybWF0dGVyID0ge1xuIGhlYWRlcjogZnVuY3Rpb24gKHgpIHtcbiAgICAgdmFyIHJlY29yZFZhcmlhbnRcbiAgICAgdmFyIHJlY29yZFBvbHlWYXJcbiAgICAgaWYgKChyZWNvcmRWYXJpYW50ID0gIHhbU3ltYm9sLmZvcignQnNWYXJpYW50JyldKSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgIHJldHVybiB2YXJpYW50UHJldmlldyh4LCByZWNvcmRWYXJpYW50KVxuICAgICB9IGVsc2UgaWYgKGlzT0NhbWxFeGNlcHRpb25PckV4dGVuc2lvbih4KSl7XG4gICAgICAgcmV0dXJuIFsnZGl2Jyx7fSwgYCR7eFswXVswXX0o4oCmKWBdICAgICBcbiAgICAgfSBlbHNlIGlmICgocmVjb3JkUG9seVZhciA9IHhbU3ltYm9sLmZvcignQnNQb2x5VmFyJyldICkgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgcmV0dXJuIFsnZGl2Jywge30sIGBcXGAke3JlY29yZFBvbHlWYXJ9IyR7eFswXX1gXVxuICAgICB9XG4gICAgIHJldHVybiBudWxsXG4gfSxcbiBoYXNCb2R5OiBmdW5jdGlvbiAoeCkge1xuICAgICB2YXIgcmVjb3JkVmFyaWFudFxuICAgICB2YXIgcmVjb3JkUG9seVZhclxuICAgICBpZiAoKHJlY29yZFZhcmlhbnQgPSB4W1N5bWJvbC5mb3IoJ0JzVmFyaWFudCcpXSApICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgcmV0dXJuIHJlY29yZFZhcmlhbnRcbiAgICAgfSBlbHNlIGlmKGlzT0NhbWxFeGNlcHRpb25PckV4dGVuc2lvbih4KSl7XG4gICAgICAgcmV0dXJuIHRydWVcbiAgICAgfSBlbHNlIGlmKCAocmVjb3JkUG9seVZhciA9IHhbU3ltYm9sLmZvcignQnNQb2x5VmFyJyldKSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9XG4gICAgIHJldHVybiBmYWxzZVxuIH0sXG4gYm9keTogZnVuY3Rpb24gKHgpIHtcbiAgICAgdmFyIHJlY29yZFZhcmlhbnRcbiAgICAgdmFyIHJlY29yZFBvbHlWYXJcbiAgICAgaWYgKChyZWNvcmRWYXJpYW50ID0geFtTeW1ib2wuZm9yKCdCc1ZhcmlhbnQnKV0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICByZXR1cm4gdmFyaWFudEN1c3RvbUZvcm1hdHRlcih4LHJlY29yZFZhcmlhbnQpXG4gICAgIH1cbiAgICAgZWxzZSBpZiAoKHJlY29yZFBvbHlWYXIgPSB4IFtTeW1ib2wuZm9yKCdCc1BvbHlWYXInKV0pICE9PSB1bmRlZmluZWQpe1xuICAgICAgIHJldHVybiBzaG93T2JqZWN0KHhbMV0pXG4gICAgIH1cbiAgICAgZWxzZSBpZihpc09DYW1sRXhjZXB0aW9uT3JFeHRlbnNpb24oeCkpe1xuICAgICAgIHJldHVybiBbXCJvbFwiLCBvbFN0eWxlLCAuLi4geC5zbGljZSgxKS5tYXAoY3VyID0+IHNob3dPYmplY3QoY3VyKSldXG4gICAgIH1cblxuIH1cblxufVxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpe1xuIGdsb2JhbC5kZXZ0b29sc0Zvcm1hdHRlcnMgPSBbZm9ybWF0dGVyXVxufSBlbHNlIHtcbiB3aW5kb3cuZGV2dG9vbHNGb3JtYXR0ZXJzID0gW2Zvcm1hdHRlcl1cbn1cbn0pO1xuXG52YXIgc2V0dXAgPSB7XG4gIGNvbnRlbnRzOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gc2V0dXBPbmNlKHBhcmFtKSB7XG4gIGlmICghc2V0dXAuY29udGVudHMpIHtcbiAgICBzZXR1cC5jb250ZW50cyA9IHRydWU7XG4gICAgcmV0dXJuIHNldHVwQ2hyb21lRGVidWdnZXIodW5kZWZpbmVkKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gdmFyaWFudChtZXRhLCB0YWcsIHhzKSB7XG4gIHNldHVwT25jZSh1bmRlZmluZWQpO1xuICB4cy50YWcgPSB0YWc7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoeHMsIFN5bWJvbC5mb3IoXCJCc1ZhcmlhbnRcIiksIHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1ldGFcbiAgICAgICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVWYXJpYW50KG1ldGEsIHhzKSB7XG4gIHNldHVwT25jZSh1bmRlZmluZWQpO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHhzLCBTeW1ib2wuZm9yKFwiQnNWYXJpYW50XCIpLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBtZXRhXG4gICAgICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gcG9seVZhcihtZXRhLCB4cykge1xuICBzZXR1cE9uY2UodW5kZWZpbmVkKTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh4cywgU3ltYm9sLmZvcihcIkJzUG9seVZhclwiKSwge1xuICAgICAgICAgICAgICB2YWx1ZTogbWV0YVxuICAgICAgICAgICAgfSk7XG59XG5cbnZhciBfXyA9IEJsb2NrLl9fO1xuXG5leHBvcnQge1xuICBfXyAsXG4gIHZhcmlhbnQgLFxuICBzaW1wbGVWYXJpYW50ICxcbiAgcG9seVZhciAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbnZhciBpZCA9IHtcbiAgY29udGVudHM6IDBcbn07XG5cbmZ1bmN0aW9uIGNhbWxfc2V0X29vX2lkKGIpIHtcbiAgYlsxXSA9IGlkLmNvbnRlbnRzO1xuICBpZC5jb250ZW50cyA9IGlkLmNvbnRlbnRzICsgMTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZnJlc2hfb29faWQocGFyYW0pIHtcbiAgaWQuY29udGVudHMgPSBpZC5jb250ZW50cyArIDE7XG4gIHJldHVybiBpZC5jb250ZW50cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlKHN0cikge1xuICB2YXIgdl8wMDEgPSBjYW1sX2ZyZXNoX29vX2lkKHVuZGVmaW5lZCk7XG4gIHZhciB2ID0gLyogdHVwbGUgKi9bXG4gICAgc3RyLFxuICAgIHZfMDAxXG4gIF07XG4gIHYudGFnID0gMjQ4O1xuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gY2FtbF9pc19leHRlbnNpb24oZSkge1xuICBpZiAoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChlLnRhZyA9PT0gMjQ4KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIHNsb3QgPSBlWzBdO1xuICBpZiAoc2xvdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHNsb3QudGFnID09PSAyNDg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNhbWxfc2V0X29vX2lkICxcbiAgY2FtbF9mcmVzaF9vb19pZCAsXG4gIGNyZWF0ZSAsXG4gIGNhbWxfaXNfZXh0ZW5zaW9uICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9leGNlcHRpb25zLmpzXCI7XG5cbnZhciAkJEVycm9yID0gQ2FtbF9leGNlcHRpb25zLmNyZWF0ZShcIkNhbWxfanNfZXhjZXB0aW9ucy5FcnJvclwiKTtcblxuZnVuY3Rpb24gaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uKGUpIHtcbiAgaWYgKENhbWxfZXhjZXB0aW9ucy5jYW1sX2lzX2V4dGVuc2lvbihlKSkge1xuICAgIHJldHVybiBlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAkJEVycm9yLFxuICAgICAgICAgICAgZVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9hc19qc19leG4oZXhuKSB7XG4gIGlmIChleG5bMF0gPT09ICQkRXJyb3IpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShleG5bMV0pO1xuICB9XG4gIFxufVxuXG5leHBvcnQge1xuICAkJEVycm9yICxcbiAgaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uICxcbiAgY2FtbF9hc19qc19leG4gLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQmxvY2sgZnJvbSBcIi4vYmxvY2suanNcIjtcbmltcG9ydCAqIGFzIENhbWxfcHJpbWl0aXZlIGZyb20gXCIuL2NhbWxfcHJpbWl0aXZlLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgZm9yX2luID0gKGZ1bmN0aW9uKG8sZm9vKXtcbiAgICAgICAgZm9yICh2YXIgeCBpbiBvKSB7IGZvbyh4KSB9fSk7XG5cbmZ1bmN0aW9uIGNhbWxfb2JqX2Jsb2NrKHRhZywgc2l6ZSkge1xuICB2YXIgdiA9IG5ldyBBcnJheShzaXplKTtcbiAgdi50YWcgPSB0YWc7XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBjYW1sX29ial9kdXAoeCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbigoe30pLCB4KTtcbiAgfVxuICB2YXIgbGVuID0geC5sZW5ndGggfCAwO1xuICB2YXIgdiA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHZbaV0gPSB4W2ldO1xuICB9XG4gIHYudGFnID0geC50YWcgfCAwO1xuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gY2FtbF9vYmpfdHJ1bmNhdGUoeCwgbmV3X3NpemUpIHtcbiAgdmFyIGxlbiA9IHgubGVuZ3RoIHwgMDtcbiAgaWYgKG5ld19zaXplIDw9IDAgfHwgbmV3X3NpemUgPiBsZW4pIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIk9iai50cnVuY2F0ZVwiXG4gICAgICAgIF07XG4gIH1cbiAgaWYgKGxlbiA9PT0gbmV3X3NpemUpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaSA9IG5ld19zaXplOyBpIDwgbGVuOyArK2kpe1xuICAgIHhbaV0gPSAwO1xuICB9XG4gIHgubGVuZ3RoID0gbmV3X3NpemU7XG4gIFxufVxuXG5mdW5jdGlvbiBjYW1sX2xhenlfbWFrZV9mb3J3YXJkKHgpIHtcbiAgcmV0dXJuIEJsb2NrLl9fKDI1MCwgW3hdKTtcbn1cblxuZnVuY3Rpb24gY2FtbF9sYXp5X21ha2UoZm4pIHtcbiAgdmFyIGJsb2NrID0gW2ZuXTtcbiAgYmxvY2sudGFnID0gMjQ2O1xuICByZXR1cm4gYmxvY2s7XG59XG5cbnZhciBjYW1sX3VwZGF0ZV9kdW1teSA9IChmdW5jdGlvbih4LHkpe1xuICB2YXIgayAgXG4gIGlmKEFycmF5LmlzQXJyYXkoeSkpe1xuICAgIGZvcihrID0gMDsgayA8IHkubGVuZ3RoIDsgKytrKXtcbiAgICAgIHhba10gPSB5W2tdXG4gICAgfVxuICAgIGlmKHkudGFnICE9PSB1bmRlZmluZWQpe1xuICAgICAgeC50YWcgPSB5LnRhZ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrIGluIHkpe1xuICAgICAgeFtrXSA9IHlba11cbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjYW1sX2NvbXBhcmUoX2EsIF9iKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYiA9IF9iO1xuICAgIHZhciBhID0gX2E7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgYV90eXBlID0gdHlwZW9mIGE7XG4gICAgdmFyIGJfdHlwZSA9IHR5cGVvZiBiO1xuICAgIHN3aXRjaCAoYV90eXBlKSB7XG4gICAgICBjYXNlIFwiYm9vbGVhblwiIDpcbiAgICAgICAgICBpZiAoYl90eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIENhbWxfcHJpbWl0aXZlLmNhbWxfYm9vbF9jb21wYXJlKGEsIGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJmdW5jdGlvblwiIDpcbiAgICAgICAgICBpZiAoYl90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IFtcbiAgICAgICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgICAgICBcImNvbXBhcmU6IGZ1bmN0aW9uYWwgdmFsdWVcIlxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm51bWJlclwiIDpcbiAgICAgICAgICBpZiAoYl90eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2FtbF9wcmltaXRpdmUuY2FtbF9pbnRfY29tcGFyZShhLCBiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RyaW5nXCIgOlxuICAgICAgICAgIGlmIChiX3R5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBDYW1sX3ByaW1pdGl2ZS5jYW1sX3N0cmluZ19jb21wYXJlKGEsIGIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICBjYXNlIFwidW5kZWZpbmVkXCIgOlxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIFxuICAgIH1cbiAgICBzd2l0Y2ggKGJfdHlwZSkge1xuICAgICAgY2FzZSBcInN0cmluZ1wiIDpcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICBjYXNlIFwidW5kZWZpbmVkXCIgOlxuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGFfdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYl90eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYV90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYl90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFfdHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGlmIChiID09PSBudWxsIHx8IGIudGFnID09PSAyNTYpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiX3R5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAoYSA9PT0gbnVsbCB8fCBhLnRhZyA9PT0gMjU2KSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYSA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmIChiLnRhZyA9PT0gMjU2KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYiA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmIChhLnRhZyA9PT0gMjU2KSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFnX2EgPSBhLnRhZyB8IDA7XG4gICAgICAgIHZhciB0YWdfYiA9IGIudGFnIHwgMDtcbiAgICAgICAgaWYgKHRhZ19hID09PSAyNTApIHtcbiAgICAgICAgICBfYSA9IGFbMF07XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YWdfYiA9PT0gMjUwKSB7XG4gICAgICAgICAgX2IgPSBiWzBdO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFnX2EgPT09IDI1Nikge1xuICAgICAgICAgIGlmICh0YWdfYiA9PT0gMjU2KSB7XG4gICAgICAgICAgICByZXR1cm4gQ2FtbF9wcmltaXRpdmUuY2FtbF9pbnRfY29tcGFyZShhWzFdLCBiWzFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFnX2EgPT09IDI0OCkge1xuICAgICAgICAgIHJldHVybiBDYW1sX3ByaW1pdGl2ZS5jYW1sX2ludF9jb21wYXJlKGFbMV0sIGJbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YWdfYSA9PT0gMjUxKSB7XG4gICAgICAgICAgdGhyb3cgW1xuICAgICAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICAgICAgXCJlcXVhbDogYWJzdHJhY3QgdmFsdWVcIlxuICAgICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YWdfYSAhPT0gdGFnX2IpIHtcbiAgICAgICAgICBpZiAodGFnX2EgPCB0YWdfYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbl9hID0gYS5sZW5ndGggfCAwO1xuICAgICAgICB2YXIgbGVuX2IgPSBiLmxlbmd0aCB8IDA7XG4gICAgICAgIGlmIChsZW5fYSA9PT0gbGVuX2IpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgdmFyIF9pID0gMDtcbiAgICAgICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSBfaTtcbiAgICAgICAgICAgICAgaWYgKGkgPT09IGxlbl9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHJlcyA9IGNhbWxfY29tcGFyZShhW2ldLCBiW2ldKTtcbiAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmICgoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEgLSBiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1pbl9rZXlfbGhzID0ge1xuICAgICAgICAgICAgICBjb250ZW50czogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1pbl9rZXlfcmhzID0ge1xuICAgICAgICAgICAgICBjb250ZW50czogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGRvX2tleSA9IGZ1bmN0aW9uIChwYXJhbSwga2V5KSB7XG4gICAgICAgICAgICAgIHZhciBtaW5fa2V5ID0gcGFyYW1bMl07XG4gICAgICAgICAgICAgIHZhciBiID0gcGFyYW1bMV07XG4gICAgICAgICAgICAgIGlmICghKCFiLmhhc093blByb3BlcnR5KGtleSkgfHwgY2FtbF9jb21wYXJlKHBhcmFtWzBdW2tleV0sIGJba2V5XSkgPiAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIG1rID0gbWluX2tleS5jb250ZW50cztcbiAgICAgICAgICAgICAgaWYgKG1rICE9PSB1bmRlZmluZWQgJiYga2V5ID49IG1rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaW5fa2V5LmNvbnRlbnRzID0ga2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcGFydGlhbF9hcmcgPSAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgYixcbiAgICAgICAgICAgICAgbWluX2tleV9yaHNcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB2YXIgZG9fa2V5X2EgPSAoZnVuY3Rpb24ocGFydGlhbF9hcmcpe1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRvX2tleV9hKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkb19rZXkocGFydGlhbF9hcmcsIHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0ocGFydGlhbF9hcmcpKTtcbiAgICAgICAgICAgIHZhciBwYXJ0aWFsX2FyZyQxID0gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgIGIsXG4gICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgIG1pbl9rZXlfbGhzXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgdmFyIGRvX2tleV9iID0gKGZ1bmN0aW9uKHBhcnRpYWxfYXJnJDEpe1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRvX2tleV9iKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkb19rZXkocGFydGlhbF9hcmckMSwgcGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfShwYXJ0aWFsX2FyZyQxKSk7XG4gICAgICAgICAgICBmb3JfaW4oYSwgZG9fa2V5X2EpO1xuICAgICAgICAgICAgZm9yX2luKGIsIGRvX2tleV9iKTtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IG1pbl9rZXlfbGhzLmNvbnRlbnRzO1xuICAgICAgICAgICAgdmFyIG1hdGNoJDEgPSBtaW5fa2V5X3Jocy5jb250ZW50cztcbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChtYXRjaCQxICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtbF9wcmltaXRpdmUuY2FtbF9zdHJpbmdfY29tcGFyZShtYXRjaCwgbWF0Y2gkMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoJDEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsZW5fYSA8IGxlbl9iKSB7XG4gICAgICAgICAgdmFyIF9pJDEgPSAwO1xuICAgICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBpJDEgPSBfaSQxO1xuICAgICAgICAgICAgaWYgKGkkMSA9PT0gbGVuX2EpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlcyQxID0gY2FtbF9jb21wYXJlKGFbaSQxXSwgYltpJDFdKTtcbiAgICAgICAgICAgIGlmIChyZXMkMSAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfaSQxID0gaSQxICsgMSB8IDA7XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2kkMiA9IDA7XG4gICAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGkkMiA9IF9pJDI7XG4gICAgICAgICAgICBpZiAoaSQyID09PSBsZW5fYikge1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXMkMiA9IGNhbWxfY29tcGFyZShhW2kkMl0sIGJbaSQyXSk7XG4gICAgICAgICAgICBpZiAocmVzJDIgIT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcyQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2kkMiA9IGkkMiArIDEgfCAwO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXF1YWwoX2EsIF9iKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYiA9IF9iO1xuICAgIHZhciBhID0gX2E7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgYV90eXBlID0gdHlwZW9mIGE7XG4gICAgaWYgKGFfdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCBhX3R5cGUgPT09IFwibnVtYmVyXCIgfHwgYV90eXBlID09PSBcImJvb2xlYW5cIiB8fCBhX3R5cGUgPT09IFwidW5kZWZpbmVkXCIgfHwgYSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgYl90eXBlID0gdHlwZW9mIGI7XG4gICAgaWYgKGFfdHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8IGJfdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBbXG4gICAgICAgICAgICBDYW1sX2J1aWx0aW5fZXhjZXB0aW9ucy5pbnZhbGlkX2FyZ3VtZW50LFxuICAgICAgICAgICAgXCJlcXVhbDogZnVuY3Rpb25hbCB2YWx1ZVwiXG4gICAgICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGJfdHlwZSA9PT0gXCJudW1iZXJcIiB8fCBiX3R5cGUgPT09IFwidW5kZWZpbmVkXCIgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdGFnX2EgPSBhLnRhZyB8IDA7XG4gICAgdmFyIHRhZ19iID0gYi50YWcgfCAwO1xuICAgIGlmICh0YWdfYSA9PT0gMjUwKSB7XG4gICAgICBfYSA9IGFbMF07XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmICh0YWdfYiA9PT0gMjUwKSB7XG4gICAgICBfYiA9IGJbMF07XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmICh0YWdfYSA9PT0gMjQ4KSB7XG4gICAgICByZXR1cm4gYVsxXSA9PT0gYlsxXTtcbiAgICB9XG4gICAgaWYgKHRhZ19hID09PSAyNTEpIHtcbiAgICAgIHRocm93IFtcbiAgICAgICAgICAgIENhbWxfYnVpbHRpbl9leGNlcHRpb25zLmludmFsaWRfYXJndW1lbnQsXG4gICAgICAgICAgICBcImVxdWFsOiBhYnN0cmFjdCB2YWx1ZVwiXG4gICAgICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHRhZ19hICE9PSB0YWdfYikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGFnX2EgPT09IDI1Nikge1xuICAgICAgcmV0dXJuIGFbMV0gPT09IGJbMV07XG4gICAgfVxuICAgIHZhciBsZW5fYSA9IGEubGVuZ3RoIHwgMDtcbiAgICB2YXIgbGVuX2IgPSBiLmxlbmd0aCB8IDA7XG4gICAgaWYgKGxlbl9hID09PSBsZW5fYikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgdmFyIF9pID0gMDtcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgIHZhciBpID0gX2k7XG4gICAgICAgICAgaWYgKGkgPT09IGxlbl9hKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjYW1sX2VxdWFsKGFbaV0sIGJbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICByZXR1cm4gIShhID4gYiB8fCBhIDwgYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgIGNvbnRlbnRzOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHZhciBkb19rZXlfYSA9IChmdW5jdGlvbihiLHJlc3VsdCl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkb19rZXlfYShrZXkpIHtcbiAgICAgICAgICBpZiAoIWIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVzdWx0LmNvbnRlbnRzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB9KGIscmVzdWx0KSk7XG4gICAgICAgIHZhciBkb19rZXlfYiA9IChmdW5jdGlvbihhLGIscmVzdWx0KXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRvX2tleV9iKGtleSkge1xuICAgICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8ICFjYW1sX2VxdWFsKGJba2V5XSwgYVtrZXldKSkge1xuICAgICAgICAgICAgcmVzdWx0LmNvbnRlbnRzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB9KGEsYixyZXN1bHQpKTtcbiAgICAgICAgZm9yX2luKGEsIGRvX2tleV9hKTtcbiAgICAgICAgaWYgKHJlc3VsdC5jb250ZW50cykge1xuICAgICAgICAgIGZvcl9pbihiLCBkb19rZXlfYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jb250ZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbF9udWxsKHgsIHkpIHtcbiAgaWYgKHkgIT09IG51bGwpIHtcbiAgICByZXR1cm4gY2FtbF9lcXVhbCh4LCB5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCA9PT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsX3VuZGVmaW5lZCh4LCB5KSB7XG4gIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY2FtbF9lcXVhbCh4LCB5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCA9PT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsX251bGxhYmxlKHgsIHkpIHtcbiAgaWYgKHkgPT0gbnVsbCkge1xuICAgIHJldHVybiB4ID09PSB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYW1sX2VxdWFsKHgsIHkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfbm90ZXF1YWwoYSwgYikge1xuICByZXR1cm4gIWNhbWxfZXF1YWwoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZ3JlYXRlcmVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBjYW1sX2dyZWF0ZXJ0aGFuKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA+IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbGVzc2VxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA8PSAwO1xufVxuXG5mdW5jdGlvbiBjYW1sX2xlc3N0aGFuKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA8IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbWluKHgsIHkpIHtcbiAgaWYgKGNhbWxfY29tcGFyZSh4LCB5KSA8PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9tYXgoeCwgeSkge1xuICBpZiAoY2FtbF9jb21wYXJlKHgsIHkpID49IDApIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX29ial9zZXRfdGFnKHByaW0sIHByaW0kMSkge1xuICBwcmltLnRhZyA9IHByaW0kMTtcbiAgXG59XG5cbmV4cG9ydCB7XG4gIGNhbWxfb2JqX2Jsb2NrICxcbiAgY2FtbF9vYmpfZHVwICxcbiAgY2FtbF9vYmpfdHJ1bmNhdGUgLFxuICBjYW1sX2xhenlfbWFrZV9mb3J3YXJkICxcbiAgY2FtbF9sYXp5X21ha2UgLFxuICBjYW1sX3VwZGF0ZV9kdW1teSAsXG4gIGNhbWxfY29tcGFyZSAsXG4gIGNhbWxfZXF1YWwgLFxuICBjYW1sX2VxdWFsX251bGwgLFxuICBjYW1sX2VxdWFsX3VuZGVmaW5lZCAsXG4gIGNhbWxfZXF1YWxfbnVsbGFibGUgLFxuICBjYW1sX25vdGVxdWFsICxcbiAgY2FtbF9ncmVhdGVyZXF1YWwgLFxuICBjYW1sX2dyZWF0ZXJ0aGFuICxcbiAgY2FtbF9sZXNzdGhhbiAsXG4gIGNhbWxfbGVzc2VxdWFsICxcbiAgY2FtbF9taW4gLFxuICBjYW1sX21heCAsXG4gIGNhbWxfb2JqX3NldF90YWcgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG52YXIgdW5kZWZpbmVkSGVhZGVyID0gW107XG5cbmZ1bmN0aW9uIHNvbWUoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGJsb2NrID0gLyogdHVwbGUgKi9bXG4gICAgICB1bmRlZmluZWRIZWFkZXIsXG4gICAgICAwXG4gICAgXTtcbiAgICBibG9jay50YWcgPSAyNTY7XG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG4gIGlmICghKHggIT09IG51bGwgJiYgeFswXSA9PT0gdW5kZWZpbmVkSGVhZGVyKSkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIHZhciBuaWQgPSB4WzFdICsgMSB8IDA7XG4gIHZhciBibG9jayQxID0gLyogdHVwbGUgKi9bXG4gICAgdW5kZWZpbmVkSGVhZGVyLFxuICAgIG5pZFxuICBdO1xuICBibG9jayQxLnRhZyA9IDI1NjtcbiAgcmV0dXJuIGJsb2NrJDE7XG59XG5cbmZ1bmN0aW9uIG51bGxhYmxlX3RvX29wdCh4KSB7XG4gIGlmICh4ID09PSBudWxsIHx8IHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvbWUoeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5kZWZpbmVkX3RvX29wdCh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG51bGxfdG9fb3B0KHgpIHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbEZyb21PcHRpb24oeCkge1xuICBpZiAoISh4ICE9PSBudWxsICYmIHhbMF0gPT09IHVuZGVmaW5lZEhlYWRlcikpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICB2YXIgZGVwdGggPSB4WzFdO1xuICBpZiAoZGVwdGggPT09IDApIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgIHVuZGVmaW5lZEhlYWRlcixcbiAgICAgICAgICAgIGRlcHRoIC0gMSB8IDBcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbl9nZXQoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsRnJvbU9wdGlvbih4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcHRpb25fZ2V0X3Vud3JhcCh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWxGcm9tT3B0aW9uKHgpWzFdO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIG51bGxhYmxlX3RvX29wdCAsXG4gIHVuZGVmaW5lZF90b19vcHQgLFxuICBudWxsX3RvX29wdCAsXG4gIHZhbEZyb21PcHRpb24gLFxuICBzb21lICxcbiAgb3B0aW9uX2dldCAsXG4gIG9wdGlvbl9nZXRfdW53cmFwICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gY2FtbF9pbnRfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCkge1xuICAgIGlmICh5KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9IGVsc2UgaWYgKHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmICh4ID4geSB8fCB4ID09PSB4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoeSA9PT0geSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19jb21wYXJlKHMxLCBzMikge1xuICBpZiAoczEgPT09IHMyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoczEgPCBzMikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2J5dGVzX2NvbXBhcmVfYXV4KHMxLCBzMiwgX29mZiwgbGVuLCBkZWYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBvZmYgPSBfb2ZmO1xuICAgIGlmIChvZmYgPj0gbGVuKSB7XG4gICAgICByZXR1cm4gZGVmO1xuICAgIH1cbiAgICB2YXIgYSA9IHMxW29mZl07XG4gICAgdmFyIGIgPSBzMltvZmZdO1xuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBfb2ZmID0gb2ZmICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjYW1sX2J5dGVzX2NvbXBhcmUoczEsIHMyKSB7XG4gIHZhciBsZW4xID0gczEubGVuZ3RoO1xuICB2YXIgbGVuMiA9IHMyLmxlbmd0aDtcbiAgaWYgKGxlbjEgPT09IGxlbjIpIHtcbiAgICByZXR1cm4gY2FtbF9ieXRlc19jb21wYXJlX2F1eChzMSwgczIsIDAsIGxlbjEsIDApO1xuICB9IGVsc2UgaWYgKGxlbjEgPCBsZW4yKSB7XG4gICAgcmV0dXJuIGNhbWxfYnl0ZXNfY29tcGFyZV9hdXgoczEsIHMyLCAwLCBsZW4xLCAtMSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNhbWxfYnl0ZXNfY29tcGFyZV9hdXgoczEsIHMyLCAwLCBsZW4yLCAxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2J5dGVzX2VxdWFsKHMxLCBzMikge1xuICB2YXIgbGVuMSA9IHMxLmxlbmd0aDtcbiAgdmFyIGxlbjIgPSBzMi5sZW5ndGg7XG4gIGlmIChsZW4xID09PSBsZW4yKSB7XG4gICAgdmFyIF9vZmYgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBvZmYgPSBfb2ZmO1xuICAgICAgaWYgKG9mZiA9PT0gbGVuMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gczFbb2ZmXTtcbiAgICAgIHZhciBiID0gczJbb2ZmXTtcbiAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIF9vZmYgPSBvZmYgKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Jvb2xfbWluKHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludF9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Zsb2F0X21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3RyaW5nX21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfbmF0aXZlaW50X21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50MzJfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX21heCh4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnRfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX25hdGl2ZWludF9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludDMyX21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbnZhciBjYW1sX25hdGl2ZWludF9jb21wYXJlID0gY2FtbF9pbnRfY29tcGFyZTtcblxudmFyIGNhbWxfaW50MzJfY29tcGFyZSA9IGNhbWxfaW50X2NvbXBhcmU7XG5cbmV4cG9ydCB7XG4gIGNhbWxfYnl0ZXNfY29tcGFyZSAsXG4gIGNhbWxfYnl0ZXNfZXF1YWwgLFxuICBjYW1sX2ludF9jb21wYXJlICxcbiAgY2FtbF9ib29sX2NvbXBhcmUgLFxuICBjYW1sX2Zsb2F0X2NvbXBhcmUgLFxuICBjYW1sX25hdGl2ZWludF9jb21wYXJlICxcbiAgY2FtbF9zdHJpbmdfY29tcGFyZSAsXG4gIGNhbWxfaW50MzJfY29tcGFyZSAsXG4gIGNhbWxfYm9vbF9taW4gLFxuICBjYW1sX2ludF9taW4gLFxuICBjYW1sX2Zsb2F0X21pbiAsXG4gIGNhbWxfc3RyaW5nX21pbiAsXG4gIGNhbWxfbmF0aXZlaW50X21pbiAsXG4gIGNhbWxfaW50MzJfbWluICxcbiAgY2FtbF9ib29sX21heCAsXG4gIGNhbWxfaW50X21heCAsXG4gIGNhbWxfZmxvYXRfbWF4ICxcbiAgY2FtbF9zdHJpbmdfbWF4ICxcbiAgY2FtbF9uYXRpdmVpbnRfbWF4ICxcbiAgY2FtbF9pbnQzMl9tYXggLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9hcnJheSBmcm9tIFwiLi9jYW1sX2FycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIGFwcChfZiwgX2FyZ3MpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhcmdzID0gX2FyZ3M7XG4gICAgdmFyIGYgPSBfZjtcbiAgICB2YXIgaW5pdF9hcml0eSA9IGYubGVuZ3RoO1xuICAgIHZhciBhcml0eSA9IGluaXRfYXJpdHkgPT09IDAgPyAxIDogaW5pdF9hcml0eTtcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGQgPSBhcml0eSAtIGxlbiB8IDA7XG4gICAgaWYgKGQgPT09IDApIHtcbiAgICAgIHJldHVybiBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBpZiAoZCA+PSAwKSB7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uKGYsYXJncyl7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGFwcChmLCBhcmdzLmNvbmNhdChbeF0pKTtcbiAgICAgIH1cbiAgICAgIH0oZixhcmdzKSk7XG4gICAgfVxuICAgIF9hcmdzID0gQ2FtbF9hcnJheS5jYW1sX2FycmF5X3N1YihhcmdzLCBhcml0eSwgLWQgfCAwKTtcbiAgICBfZiA9IGYuYXBwbHkobnVsbCwgQ2FtbF9hcnJheS5jYW1sX2FycmF5X3N1YihhcmdzLCAwLCBhcml0eSkpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gXzEobywgYTApIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMSkge1xuICAgIHJldHVybiBvKGEwKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBvKGEwKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0LCBwYXJhbSQ1KSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCwgcGFyYW0kNSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW2EwXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fMShvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDEpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCkge1xuICAgICAgICByZXR1cm4gXzEobywgYTApO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gXzIobywgYTAsIGExKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDIpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW2ExXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX18yKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMikge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSkge1xuICAgICAgICByZXR1cm4gXzIobywgYTAsIGExKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF8zKG8sIGEwLCBhMSwgYTIpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMykge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW2EyXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIpO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX18zKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMykge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIF8zKG8sIGEwLCBhMSwgYTIpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gXzQobywgYTAsIGExLCBhMiwgYTMpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNCkge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhM1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhM1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbYTNdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMpO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX180KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNCkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzKSB7XG4gICAgICAgIHJldHVybiBfNChvLCBhMCwgYTEsIGEyLCBhMyk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNShvLCBhMCwgYTEsIGEyLCBhMywgYTQpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNSkge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbYTRdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzUobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA1KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0KSB7XG4gICAgICAgIHJldHVybiBfNShvLCBhMCwgYTEsIGEyLCBhMywgYTQpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gXzYobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA2KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbYTVdKTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzYobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA2KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICAgICAgICByZXR1cm4gXzYobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNyhvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNikge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA3KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSksIFthNl0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzcobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA3KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcbiAgICAgICAgcmV0dXJuIF83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF84KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA4KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiksIFthN10pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fOChvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDgpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHtcbiAgICAgICAgcmV0dXJuIF84KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBhcHAgLFxuICBfMSAsXG4gIF9fMSAsXG4gIF8yICxcbiAgX18yICxcbiAgXzMgLFxuICBfXzMgLFxuICBfNCAsXG4gIF9fNCAsXG4gIF81ICxcbiAgX181ICxcbiAgXzYgLFxuICBfXzYgLFxuICBfNyAsXG4gIF9fNyAsXG4gIF84ICxcbiAgX184ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIGdldChkaWN0LCBrKSB7XG4gIGlmICgoayBpbiBkaWN0KSkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGRpY3Rba10pO1xuICB9XG4gIFxufVxuXG52YXIgdW5zYWZlRGVsZXRlS2V5ID0gKGZ1bmN0aW9uIChkaWN0LGtleSl7XG4gICAgICBkZWxldGUgZGljdFtrZXldO1xuICAgICB9KTtcblxuZnVuY3Rpb24gZW50cmllcyhkaWN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGljdCk7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhbHVlc1tpXSA9IC8qIHR1cGxlICovW1xuICAgICAga2V5LFxuICAgICAgZGljdFtrZXldXG4gICAgXTtcbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZXMoZGljdCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRpY3QpO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIgdmFsdWVzJDEgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhbHVlcyQxW2ldID0gZGljdFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gdmFsdWVzJDE7XG59XG5cbmZ1bmN0aW9uIGZyb21MaXN0KGVudHJpZXMpIHtcbiAgdmFyIGRpY3QgPSB7IH07XG4gIHZhciBfcGFyYW0gPSBlbnRyaWVzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBkaWN0O1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSBwYXJhbVswXTtcbiAgICBkaWN0W21hdGNoWzBdXSA9IG1hdGNoWzFdO1xuICAgIF9wYXJhbSA9IHBhcmFtWzFdO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5KGVudHJpZXMpIHtcbiAgdmFyIGRpY3QgPSB7IH07XG4gIHZhciBsID0gZW50cmllcy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciBtYXRjaCA9IGVudHJpZXNbaV07XG4gICAgZGljdFttYXRjaFswXV0gPSBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gZGljdDtcbn1cblxuZnVuY3Rpb24gbWFwKGYsIHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0ID0geyB9O1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHRhcmdldFtrZXldID0gZihzb3VyY2Vba2V5XSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0ICxcbiAgdW5zYWZlRGVsZXRlS2V5ICxcbiAgZW50cmllcyAsXG4gIHZhbHVlcyAsXG4gIGZyb21MaXN0ICxcbiAgZnJvbUFycmF5ICxcbiAgbWFwICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEJsb2NrIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2Jsb2NrLmpzXCI7XG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYnVpbHRpbl9leGNlcHRpb25zIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfYnVpbHRpbl9leGNlcHRpb25zLmpzXCI7XG5cbnZhciBvblVuaGFuZGxlZEV4Y2VwdGlvbiA9IHtcbiAgY29udGVudHM6IChmdW5jdGlvbiAoZXhuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5oYW5kbGVkIGV4Y2VwdGlvbiBpbiBwcm9taXNlIGNhbGxiYWNrOlwiKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXhuKTtcbiAgICAgIFxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBOZXN0ZWRQcm9taXNlKHApIHtcbiAgICB0aGlzLm5lc3RlZCA9IHA7XG59O1xuXG5mdW5jdGlvbiB1bmJveCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5lc3RlZFByb21pc2UpXG4gICAgICAgIHJldHVybiB2YWx1ZS5uZXN0ZWQ7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGJveCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gbmV3IE5lc3RlZFByb21pc2UodmFsdWUpO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBtYWtlKGV4ZWN1dG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGJveGluZ1Jlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShib3godmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgZXhlY3V0b3IoYm94aW5nUmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIHJlc29sdmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShib3godmFsdWUpKTtcbn07XG5cbmZ1bmN0aW9uIHRoZW4ocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHVuYm94KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgb25VbmhhbmRsZWRFeGNlcHRpb24uY29udGVudHMoZXhjZXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gY2F0Y2hfKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNhZmVDYWxsYmFjayA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBvblVuaGFuZGxlZEV4Y2VwdGlvbi5jb250ZW50cyhleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBwcm9taXNlLmNhdGNoKHNhZmVDYWxsYmFjayk7XG59O1xuXG5mdW5jdGlvbiBhcnJheVRvTGlzdChhcnJheSkge1xuICB2YXIgbGlzdCA9IDA7XG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgLS1pbmRleCkge1xuICAgIGxpc3QgPSBbYXJyYXlbaW5kZXhdLCBsaXN0XTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGxpc3RUb0FycmF5KGxpc3QpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIHdoaWxlIChsaXN0ICE9PSAwKSB7XG4gICAgYXJyYXkucHVzaChsaXN0WzBdKTtcbiAgICBsaXN0ID0gbGlzdFsxXTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5mdW5jdGlvbiBtYXBBcnJheShmLCBhKSB7XG4gIHJldHVybiBhLm1hcChmKTtcbn07XG47XG5cbmZ1bmN0aW9uIHBlbmRpbmcocGFyYW0pIHtcbiAgdmFyIHJlc29sdmUgPSB7XG4gICAgY29udGVudHM6IChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICBcbiAgICAgIH0pXG4gIH07XG4gIHZhciByZWplY3QgPSB7XG4gICAgY29udGVudHM6IChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICBcbiAgICAgIH0pXG4gIH07XG4gIHZhciBwID0gbWFrZSgoZnVuY3Rpb24gKHJlc29sdmUkcHJpbWUsIHJlamVjdCRwcmltZSkge1xuICAgICAgICAgIHJlc29sdmUuY29udGVudHMgPSByZXNvbHZlJHByaW1lO1xuICAgICAgICAgIHJlamVjdC5jb250ZW50cyA9IHJlamVjdCRwcmltZTtcbiAgICAgICAgICBcbiAgICAgICAgfSkpO1xuICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgcCxcbiAgICAgICAgICByZXNvbHZlLmNvbnRlbnRzLFxuICAgICAgICAgIHJlamVjdC5jb250ZW50c1xuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBtYXAocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkKEN1cnJ5Ll8xKGNhbGxiYWNrLCB2KSk7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gZ2V0KHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIG1hcChwcm9taXNlLCBjYWxsYmFjayk7XG4gIFxufVxuXG5mdW5jdGlvbiB0YXAocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgbWFwKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGFsbEFycmF5KHByb21pc2VzKSB7XG4gIHJldHVybiBtYXAoUHJvbWlzZS5hbGwocHJvbWlzZXMpLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcEFycmF5KChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuYm94KHByaW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBwYXJhbSk7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBtYXAoYWxsQXJyYXkobGlzdFRvQXJyYXkocHJvbWlzZXMpKSwgKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5VG9MaXN0KHJlc3VsdHMpO1xuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGFsbDIocDEsIHAyKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbCgvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgcDEsXG4gICAgICAgICAgICAgIHAyXG4gICAgICAgICAgICBdKTtcbn1cblxuZnVuY3Rpb24gYWxsMyhwMSwgcDIsIHAzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbCgvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgcDEsXG4gICAgICAgICAgICAgIHAyLFxuICAgICAgICAgICAgICBwM1xuICAgICAgICAgICAgXSk7XG59XG5cbmZ1bmN0aW9uIGFsbDQocDEsIHAyLCBwMywgcDQpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICBwMSxcbiAgICAgICAgICAgICAgcDIsXG4gICAgICAgICAgICAgIHAzLFxuICAgICAgICAgICAgICBwNFxuICAgICAgICAgICAgXSk7XG59XG5cbmZ1bmN0aW9uIGFsbDUocDEsIHAyLCBwMywgcDQsIHA1KSB7XG4gIHJldHVybiBQcm9taXNlLmFsbCgvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgcDEsXG4gICAgICAgICAgICAgIHAyLFxuICAgICAgICAgICAgICBwMyxcbiAgICAgICAgICAgICAgcDQsXG4gICAgICAgICAgICAgIHA1XG4gICAgICAgICAgICBdKTtcbn1cblxuZnVuY3Rpb24gYWxsNihwMSwgcDIsIHAzLCBwNCwgcDUsIHA2KSB7XG4gIHJldHVybiBQcm9taXNlLmFsbCgvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgcDEsXG4gICAgICAgICAgICAgIHAyLFxuICAgICAgICAgICAgICBwMyxcbiAgICAgICAgICAgICAgcDQsXG4gICAgICAgICAgICAgIHA1LFxuICAgICAgICAgICAgICBwNlxuICAgICAgICAgICAgXSk7XG59XG5cbmZ1bmN0aW9uIHJhY2UocHJvbWlzZXMpIHtcbiAgaWYgKHByb21pc2VzID09PSAvKiBbXSAqLzApIHtcbiAgICB0aHJvdyBbXG4gICAgICAgICAgQ2FtbF9idWlsdGluX2V4Y2VwdGlvbnMuaW52YWxpZF9hcmd1bWVudCxcbiAgICAgICAgICBcIlByb21pc2UucmFjZShbXSkgd291bGQgYmUgcGVuZGluZyBmb3JldmVyXCJcbiAgICAgICAgXTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKGxpc3RUb0FycmF5KHByb21pc2VzKSk7XG59XG5cbmZ1bmN0aW9uIHRvUmVzdWx0KHByb21pc2UpIHtcbiAgcmV0dXJuIGNhdGNoXyhtYXAocHJvbWlzZSwgKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBPayAqL0Jsb2NrLl9fKDAsIFt2XSk7XG4gICAgICAgICAgICAgICAgICB9KSksIChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlZCgvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFtlXSkpO1xuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGZyb21SZXN1bHQocHJvbWlzZSkge1xuICByZXR1cm4gdGhlbihwcm9taXNlLCAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodi50YWcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh2WzBdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkKHZbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBwZW5kaW5nJDEocGFyYW0pIHtcbiAgdmFyIG1hdGNoID0gcGVuZGluZyh1bmRlZmluZWQpO1xuICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgbWF0Y2hbMF0sXG4gICAgICAgICAgbWF0Y2hbMV1cbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gZXhlYyhleGVjdXRvcikge1xuICB2YXIgbWF0Y2ggPSBwZW5kaW5nJDEodW5kZWZpbmVkKTtcbiAgQ3VycnkuXzEoZXhlY3V0b3IsIG1hdGNoWzFdKTtcbiAgcmV0dXJuIG1hdGNoWzBdO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlZCQxKHByaW0pIHtcbiAgcmV0dXJuIHJlc29sdmVkKHByaW0pO1xufVxuXG5mdW5jdGlvbiBmbGF0TWFwKHByaW0sIHByaW0kMSkge1xuICByZXR1cm4gdGhlbihwcmltLCBwcmltJDEpO1xufVxuXG5mdW5jdGlvbiBmbGF0TWFwT2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRhZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShjYWxsYmFjaywgcmVzdWx0WzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcEVycm9yKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGVuKHByb21pc2UsIChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50YWcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShjYWxsYmFjaywgcmVzdWx0WzBdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1hcE9rKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBtYXAocHJvbWlzZSwgKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRhZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIE9rICovQmxvY2suX18oMCwgW0N1cnJ5Ll8xKGNhbGxiYWNrLCByZXN1bHRbMF0pXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1hcEVycm9yKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBtYXAocHJvbWlzZSwgKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRhZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgW0N1cnJ5Ll8xKGNhbGxiYWNrLCByZXN1bHRbMF0pXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGdldE9rKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBnZXQocHJvbWlzZSwgKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnRhZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKGNhbGxiYWNrLCByZXN1bHRbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXRFcnJvcihwcm9taXNlLCBjYWxsYmFjaykge1xuICByZXR1cm4gZ2V0KHByb21pc2UsIChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50YWcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShjYWxsYmFjaywgcmVzdWx0WzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gdGFwT2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgZ2V0T2socHJvbWlzZSwgY2FsbGJhY2spO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gdGFwRXJyb3IocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgZ2V0RXJyb3IocHJvbWlzZSwgY2FsbGJhY2spO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIE9wZXJhdG9ycyA9IHtcbiAgJGdyZWF0JHBpcGUkZXE6IG1hcE9rLFxuICAkZ3JlYXQkZ3JlYXQkZXE6IGZsYXRNYXBPa1xufTtcblxuZnVuY3Rpb24gZmxhdE1hcFNvbWUocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShjYWxsYmFjaywgQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihvcHRpb24pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1hcFNvbWUocHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIG1hcChwcm9taXNlLCAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoQ3VycnkuXzEoY2FsbGJhY2ssIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0aW9uKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXRTb21lKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBnZXQocHJvbWlzZSwgKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShjYWxsYmFjaywgQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihvcHRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gdGFwU29tZShwcm9taXNlLCBjYWxsYmFjaykge1xuICBnZXRTb21lKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBQaXBlRmlyc3QgPSB7IH07XG5cbmZ1bmN0aW9uIEpzX3Jlc29sdmVkKHByaW0pIHtcbiAgcmV0dXJuIHJlc29sdmVkKHByaW0pO1xufVxuXG5mdW5jdGlvbiBKc19yZWplY3RlZChwcmltKSB7XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChwcmltKTtcbn1cblxuZnVuY3Rpb24gSnNfZmxhdE1hcChwcmltLCBwcmltJDEpIHtcbiAgcmV0dXJuIHRoZW4ocHJpbSwgcHJpbSQxKTtcbn1cblxuZnVuY3Rpb24gSnNfY2F0Y2gocHJpbSwgcHJpbSQxKSB7XG4gIHJldHVybiBjYXRjaF8ocHJpbSwgcHJpbSQxKTtcbn1cblxuZnVuY3Rpb24gSnNfcmVsYXgocHJpbSkge1xuICByZXR1cm4gcHJpbTtcbn1cblxuZnVuY3Rpb24gSnNfZnJvbUJzUHJvbWlzZShwcmltKSB7XG4gIHJldHVybiBwcmltO1xufVxuXG5mdW5jdGlvbiBKc190b0JzUHJvbWlzZShwcmltKSB7XG4gIHJldHVybiBwcmltO1xufVxuXG52YXIgSnMgPSB7XG4gIHBlbmRpbmc6IHBlbmRpbmcsXG4gIHJlc29sdmVkOiBKc19yZXNvbHZlZCxcbiAgcmVqZWN0ZWQ6IEpzX3JlamVjdGVkLFxuICBnZXQ6IGdldCxcbiAgdGFwOiB0YXAsXG4gIG1hcDogbWFwLFxuICBmbGF0TWFwOiBKc19mbGF0TWFwLFxuICAkJGNhdGNoOiBKc19jYXRjaCxcbiAgYWxsOiBhbGwsXG4gIHJhY2U6IHJhY2UsXG4gIHJlbGF4OiBKc19yZWxheCxcbiAgdG9SZXN1bHQ6IHRvUmVzdWx0LFxuICBmcm9tUmVzdWx0OiBmcm9tUmVzdWx0LFxuICBmcm9tQnNQcm9taXNlOiBKc19mcm9tQnNQcm9taXNlLFxuICB0b0JzUHJvbWlzZTogSnNfdG9Cc1Byb21pc2Vcbn07XG5cbmV4cG9ydCB7XG4gIHBlbmRpbmckMSBhcyBwZW5kaW5nLFxuICByZXNvbHZlZCQxIGFzIHJlc29sdmVkLFxuICBleGVjICxcbiAgZ2V0ICxcbiAgdGFwICxcbiAgbWFwICxcbiAgZmxhdE1hcCAsXG4gIGdldE9rICxcbiAgdGFwT2sgLFxuICBtYXBPayAsXG4gIGZsYXRNYXBPayAsXG4gIGdldEVycm9yICxcbiAgdGFwRXJyb3IgLFxuICBtYXBFcnJvciAsXG4gIGZsYXRNYXBFcnJvciAsXG4gIE9wZXJhdG9ycyAsXG4gIGdldFNvbWUgLFxuICB0YXBTb21lICxcbiAgbWFwU29tZSAsXG4gIGZsYXRNYXBTb21lICxcbiAgcmFjZSAsXG4gIGFsbCAsXG4gIGFsbEFycmF5ICxcbiAgYWxsMiAsXG4gIGFsbDMgLFxuICBhbGw0ICxcbiAgYWxsNSAsXG4gIGFsbDYgLFxuICBKcyAsXG4gIFBpcGVGaXJzdCAsXG4gIG9uVW5oYW5kbGVkRXhjZXB0aW9uICxcbiAgXG59XG4vKiAgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyAkJEFycmF5IGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBCbG9jayBmcm9tIFwiYnMtcGxhdGZvcm0vbGliL2VzNi9ibG9jay5qc1wiO1xuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCAqIGFzICQkUHJvbWlzZSBmcm9tIFwicmVhc29uLXByb21pc2Uvc3JjL2pzL3Byb21pc2UuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCJicy1wbGF0Zm9ybS9saWIvZXM2L2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdFJlbGF5IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0ICogYXMgUmVsYXlSdW50aW1lIGZyb20gXCJyZWxheS1ydW50aW1lXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcImJzLXBsYXRmb3JtL2xpYi9lczYvY2FtbF9leGNlcHRpb25zLmpzXCI7XG5pbXBvcnQgKiBhcyBIb29rcyBmcm9tIFwicmVhY3QtcmVsYXkvaG9va3NcIjtcbmltcG9ydCAqIGFzIFJlbGF5RXhwZXJpbWVudGFsIGZyb20gXCJyZWFjdC1yZWxheS9saWIvcmVsYXktZXhwZXJpbWVudGFsXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2xpZW50SUQoZGF0YUlkLCBzdG9yYWdlS2V5LCBpbmRleCwgcGFyYW0pIHtcbiAgcmV0dXJuIFJlbGF5UnVudGltZS5nZW5lcmF0ZUNsaWVudElEKGRhdGFJZCwgc3RvcmFnZUtleSwgaW5kZXgpO1xufVxuXG52YXIgX2NsZWFuT2JqZWN0RnJvbVVuZGVmaW5lZCA9IChmdW5jdGlvbiBjbGVhbk9iaihvYmopIHtcbiAgICB2YXIgbmV3T2JqID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAodHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld09iajtcbiAgfSk7XG5cbnZhciBfY2xlYW5WYXJpYWJsZXMgPSAoZnVuY3Rpb24gY2xlYW5WYXJpYWJsZXModmFyaWFibGVzKSB7XG4gICAgaWYgKHR5cGVvZiB2YXJpYWJsZXMgIT09IFwib2JqZWN0XCIgfHwgdmFyaWFibGVzID09IG51bGwpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9KTtcblxuZnVuY3Rpb24gX2NvbnZlcnRPYmoocHJpbSwgcHJpbSQxLCBwcmltJDIsIHByaW0kMykge1xuICByZXR1cm4gVXRpbHMudHJhdmVyc2VyKHByaW0sIHByaW0kMSwgcHJpbSQyLCBwcmltJDMpO1xufVxuXG5mdW5jdGlvbiBjb3B5RmllbGRzRnJvbSh0LCBzb3VyY2VSZWNvcmQpIHtcbiAgdC5jb3B5RmllbGRzRnJvbShzb3VyY2VSZWNvcmQpO1xuICBcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YUlkKHQpIHtcbiAgcmV0dXJuIHQuZ2V0RGF0YUlEKCk7XG59XG5cbmZ1bmN0aW9uIGdldExpbmtlZFJlY29yZCh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdCh0LmdldExpbmtlZFJlY29yZChuYW1lLCAkJGFyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5rZWRSZWNvcmRzKHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICB2YXIgcmVjb3JkcyA9IHQuZ2V0TGlua2VkUmVjb3JkcyhuYW1lLCAkJGFyZ3VtZW50cyk7XG4gIGlmICghKHJlY29yZHMgPT0gbnVsbCkpIHtcbiAgICByZXR1cm4gJCRBcnJheS5tYXAoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh2KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgKHJlY29yZHMgPT0gbnVsbCkgPyB1bmRlZmluZWQgOiBDYW1sX29wdGlvbi5zb21lKHJlY29yZHMpKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVMaW5rZWRSZWNvcmQodCwgbmFtZSwgdHlwZU5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5nZXRPckNyZWF0ZUxpbmtlZFJlY29yZChuYW1lLCB0eXBlTmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRUeXBlKHQpIHtcbiAgcmV0dXJuIHQuZ2V0VHlwZSgpO1xufVxuXG5mdW5jdGlvbiBfZ2V0VmFsdWVBcnIodCwgbmFtZSwgJCRhcmd1bWVudHMpIHtcbiAgdmFyIGFyciA9IHQuZ2V0VmFsdWUobmFtZSwgJCRhcmd1bWVudHMpO1xuICBpZiAoIShhcnIgPT0gbnVsbCkpIHtcbiAgICByZXR1cm4gJCRBcnJheS5tYXAoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgYXJyKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVTdHJpbmcodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQodC5nZXRWYWx1ZShuYW1lLCAkJGFyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZVN0cmluZ0FycmF5KHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gX2dldFZhbHVlQXJyKHQsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVJbnQodCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQodC5nZXRWYWx1ZShuYW1lLCAkJGFyZ3VtZW50cykpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUludEFycmF5KHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gX2dldFZhbHVlQXJyKHQsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGbG9hdCh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdCh0LmdldFZhbHVlKG5hbWUsICQkYXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlRmxvYXRBcnJheSh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIF9nZXRWYWx1ZUFycih0LCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlQm9vbCh0LCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdCh0LmdldFZhbHVlKG5hbWUsICQkYXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlQm9vbEFycmF5KHQsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gX2dldFZhbHVlQXJyKHQsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0TGlua2VkUmVjb3JkKHQsIHJlY29yZCwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldExpbmtlZFJlY29yZChyZWNvcmQsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gdW5zZXRMaW5rZWRSZWNvcmQodCwgbmFtZSwgdW5zZXRWYWx1ZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIGlmICh1bnNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHQuc2V0TGlua2VkUmVjb3JkKHVuZGVmaW5lZCwgbmFtZSwgJCRhcmd1bWVudHMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0LnNldExpbmtlZFJlY29yZChudWxsLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0TGlua2VkUmVjb3Jkcyh0LCByZWNvcmRzLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0TGlua2VkUmVjb3JkcyhyZWNvcmRzLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHVuc2V0TGlua2VkUmVjb3Jkcyh0LCBuYW1lLCB1bnNldFZhbHVlLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgaWYgKHVuc2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdC5zZXRMaW5rZWRSZWNvcmRzKHVuZGVmaW5lZCwgbmFtZSwgJCRhcmd1bWVudHMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0LnNldExpbmtlZFJlY29yZHMobnVsbCwgbmFtZSwgJCRhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc2V0VmFsdWUodCwgbmFtZSwgdW5zZXRWYWx1ZSQxLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgaWYgKHVuc2V0VmFsdWUkMSkge1xuICAgIHJldHVybiB0LnNldFZhbHVlKHVuZGVmaW5lZCwgbmFtZSwgJCRhcmd1bWVudHMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0LnNldFZhbHVlKG51bGwsIG5hbWUsICQkYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZVN0cmluZyh0LCB2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldFZhbHVlKHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlU3RyaW5nQXJyYXkodCwgdmFsdWUsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRWYWx1ZSh2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZUludCh0LCB2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMsIHBhcmFtKSB7XG4gIHJldHVybiB0LnNldFZhbHVlKHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlSW50QXJyYXkodCwgdmFsdWUsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRWYWx1ZSh2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZUZsb2F0KHQsIHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0VmFsdWUodmFsdWUsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVGbG9hdEFycmF5KHQsIHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0VmFsdWUodmFsdWUsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVCb29sKHQsIHZhbHVlLCBuYW1lLCAkJGFyZ3VtZW50cywgcGFyYW0pIHtcbiAgcmV0dXJuIHQuc2V0VmFsdWUodmFsdWUsIG5hbWUsICQkYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVCb29sQXJyYXkodCwgdmFsdWUsIG5hbWUsICQkYXJndW1lbnRzLCBwYXJhbSkge1xuICByZXR1cm4gdC5zZXRWYWx1ZSh2YWx1ZSwgbmFtZSwgJCRhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUodCwgZGF0YUlkLCB0eXBlTmFtZSkge1xuICByZXR1cm4gdC5jcmVhdGUoZGF0YUlkLCB0eXBlTmFtZSk7XG59XG5cbmZ1bmN0aW9uICQkZGVsZXRlKHQsIGRhdGFJZCkge1xuICB0LmRlbGV0ZShkYXRhSWQpO1xuICBcbn1cblxuZnVuY3Rpb24gZ2V0KHQsIGRhdGFJZCkge1xuICByZXR1cm4gQ2FtbF9vcHRpb24ubnVsbGFibGVfdG9fb3B0KHQuZ2V0KGRhdGFJZCkpO1xufVxuXG5mdW5jdGlvbiBnZXRSb290RmllbGQodCwgZmllbGROYW1lKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsYWJsZV90b19vcHQodC5nZXRSb290RmllbGQoZmllbGROYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGdldFBsdXJhbFJvb3RGaWVsZCh0LCBmaWVsZE5hbWUpIHtcbiAgdmFyIGFyciA9IHQuZ2V0UGx1cmFsUm9vdEZpZWxkKGZpZWxkTmFtZSk7XG4gIGlmICghKGFyciA9PSBudWxsKSkge1xuICAgIHJldHVybiAkJEFycmF5Lm1hcCgoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHYpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLCAoYXJyID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShhcnIpKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlJDEodCwgZGF0YUlkLCB0eXBlTmFtZSkge1xuICByZXR1cm4gdC5jcmVhdGUoZGF0YUlkLCB0eXBlTmFtZSk7XG59XG5cbmZ1bmN0aW9uICQkZGVsZXRlJDEodCwgZGF0YUlkKSB7XG4gIHQuZGVsZXRlKGRhdGFJZCk7XG4gIFxufVxuXG5mdW5jdGlvbiBnZXQkMSh0LCBkYXRhSWQpIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdCh0LmdldChkYXRhSWQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29ubmVjdGlvbihyZWNvcmQsIGtleSwgZmlsdGVycywgcGFyYW0pIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxhYmxlX3RvX29wdChSZWxheVJ1bnRpbWUuQ29ubmVjdGlvbkhhbmRsZXIuZ2V0Q29ubmVjdGlvbihyZWNvcmQsIGtleSwgZmlsdGVycykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFZGdlKHN0b3JlLCBjb25uZWN0aW9uLCBub2RlLCBlZGdlVHlwZSkge1xuICByZXR1cm4gUmVsYXlSdW50aW1lLkNvbm5lY3Rpb25IYW5kbGVyLmNyZWF0ZUVkZ2Uoc3RvcmUsIGNvbm5lY3Rpb24sIG5vZGUsIGVkZ2VUeXBlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0RWRnZUJlZm9yZShjb25uZWN0aW9uLCBuZXdFZGdlLCBjdXJzb3IsIHBhcmFtKSB7XG4gIFJlbGF5UnVudGltZS5Db25uZWN0aW9uSGFuZGxlci5pbnNlcnRFZGdlQmVmb3JlKGNvbm5lY3Rpb24sIG5ld0VkZ2UsIGN1cnNvcik7XG4gIFxufVxuXG5mdW5jdGlvbiBpbnNlcnRFZGdlQWZ0ZXIoY29ubmVjdGlvbiwgbmV3RWRnZSwgY3Vyc29yLCBwYXJhbSkge1xuICBSZWxheVJ1bnRpbWUuQ29ubmVjdGlvbkhhbmRsZXIuaW5zZXJ0RWRnZUFmdGVyKGNvbm5lY3Rpb24sIG5ld0VkZ2UsIGN1cnNvcik7XG4gIFxufVxuXG5mdW5jdGlvbiBkZWxldGVOb2RlKGNvbm5lY3Rpb24sIG5vZGVJZCkge1xuICBSZWxheVJ1bnRpbWUuQ29ubmVjdGlvbkhhbmRsZXIuZGVsZXRlTm9kZShjb25uZWN0aW9uLCBub2RlSWQpO1xuICBcbn1cblxudmFyIENvbm5lY3Rpb25IYW5kbGVyID0ge1xuICBnZXRDb25uZWN0aW9uOiBnZXRDb25uZWN0aW9uLFxuICBjcmVhdGVFZGdlOiBjcmVhdGVFZGdlLFxuICBpbnNlcnRFZGdlQmVmb3JlOiBpbnNlcnRFZGdlQmVmb3JlLFxuICBpbnNlcnRFZGdlQWZ0ZXI6IGluc2VydEVkZ2VBZnRlcixcbiAgZGVsZXRlTm9kZTogZGVsZXRlTm9kZVxufTtcblxuZnVuY3Rpb24gbWFrZShzaW5rRm4pIHtcbiAgcmV0dXJuIFJlbGF5UnVudGltZS5PYnNlcnZhYmxlLmNyZWF0ZSgoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICBDdXJyeS5fMShzaW5rRm4sIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBzLm5leHQsXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHMuZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOiBzLmNvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZWQ6IHMuY2xvc2VkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KSk7XG59XG5cbnZhciBPYnNlcnZhYmxlID0ge1xuICBtYWtlOiBtYWtlXG59O1xuXG5mdW5jdGlvbiBtYWtlUHJvbWlzZUJhc2VkKGZldGNoRnVuY3Rpb24sIHN1YnNjcmlwdGlvbkZ1bmN0aW9uLCBwYXJhbSkge1xuICByZXR1cm4gUmVsYXlSdW50aW1lLk5ldHdvcmsuY3JlYXRlKGZldGNoRnVuY3Rpb24sIHN1YnNjcmlwdGlvbkZ1bmN0aW9uKTtcbn1cblxuZnVuY3Rpb24gbWFrZU9ic2VydmFibGVCYXNlZChvYnNlcnZhYmxlRnVuY3Rpb24sIHN1YnNjcmlwdGlvbkZ1bmN0aW9uLCBwYXJhbSkge1xuICByZXR1cm4gUmVsYXlSdW50aW1lLk5ldHdvcmsuY3JlYXRlKG9ic2VydmFibGVGdW5jdGlvbiwgc3Vic2NyaXB0aW9uRnVuY3Rpb24pO1xufVxuXG52YXIgTmV0d29yayA9IHtcbiAgbWFrZVByb21pc2VCYXNlZDogbWFrZVByb21pc2VCYXNlZCxcbiAgbWFrZU9ic2VydmFibGVCYXNlZDogbWFrZU9ic2VydmFibGVCYXNlZFxufTtcblxuZnVuY3Rpb24gbWFrZSQxKHJlY29yZHMsIHBhcmFtKSB7XG4gIHJldHVybiBuZXcgUmVsYXlSdW50aW1lLlJlY29yZFNvdXJjZShyZWNvcmRzKTtcbn1cblxuZnVuY3Rpb24gbWFrZSQyKHNvdXJjZSwgZ2NSZWxlYXNlQnVmZmVyU2l6ZSwgcGFyYW0pIHtcbiAgcmV0dXJuIG5ldyBSZWxheVJ1bnRpbWUuU3RvcmUoc291cmNlLCB7XG4gICAgICAgICAgICAgIGdjUmVsZWFzZUJ1ZmZlclNpemU6IGdjUmVsZWFzZUJ1ZmZlclNpemVcbiAgICAgICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYXBSZW5kZXJQb2xpY3kocGFyYW0pIHtcbiAgaWYgKHBhcmFtICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocGFyYW0pIHtcbiAgICAgIHJldHVybiBcInBhcnRpYWxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiZnVsbFwiO1xuICAgIH1cbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbWFrZSQzKG5ldHdvcmssIHN0b3JlLCBnZXREYXRhSUQsIGRlZmF1bHRSZW5kZXJQb2xpY3ksIHBhcmFtKSB7XG4gIHJldHVybiBuZXcgUmVsYXlSdW50aW1lLkVudmlyb25tZW50KHtcbiAgICAgICAgICAgICAgbmV0d29yazogbmV0d29yayxcbiAgICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICAgICAgICBVTlNUQUJMRV9ET19OT1RfVVNFX2dldERhdGFJRDogZ2V0RGF0YUlEICE9PSB1bmRlZmluZWQgPyBDdXJyeS5fXzIoZ2V0RGF0YUlEKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgVU5TVEFCTEVfZGVmYXVsdFJlbmRlclBvbGljeTogbWFwUmVuZGVyUG9saWN5KGRlZmF1bHRSZW5kZXJQb2xpY3kpXG4gICAgICAgICAgICB9KTtcbn1cblxudmFyIHByb3ZpZGVyID0gUmVhY3RSZWxheS5SZWFjdFJlbGF5Q29udGV4dC5Qcm92aWRlcjtcblxuZnVuY3Rpb24gUmVhc29uUmVsYXkkQ29udGV4dCRQcm92aWRlcihQcm9wcykge1xuICB2YXIgZW52aXJvbm1lbnQgPSBQcm9wcy5lbnZpcm9ubWVudDtcbiAgdmFyIGNoaWxkcmVuID0gUHJvcHMuY2hpbGRyZW47XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHByb3ZpZGVyLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnZlcnRlZFZhbHVlKGNvbnZlcnQsIHYpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoY29udmVydCwgdik7XG4gICAgICAgICAgICAgIH0pLCBbdl0pO1xufVxuXG52YXIgRW52aXJvbm1lbnROb3RGb3VuZEluQ29udGV4dCA9IENhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJSZWFzb25SZWxheS5FbnZpcm9ubWVudE5vdEZvdW5kSW5Db250ZXh0XCIpO1xuXG5mdW5jdGlvbiB1c2VFbnZpcm9ubWVudEZyb21Db250ZXh0KHBhcmFtKSB7XG4gIHZhciBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChSZWFjdFJlbGF5LlJlYWN0UmVsYXlDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKGNvbnRleHQpLmVudmlyb25tZW50O1xuICB9XG4gIHRocm93IEVudmlyb25tZW50Tm90Rm91bmRJbkNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIG1hcEZldGNoUG9saWN5KHBhcmFtKSB7XG4gIGlmIChwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBzd2l0Y2ggKHBhcmFtKSB7XG4gICAgY2FzZSAvKiBTdG9yZU9ubHkgKi8wIDpcbiAgICAgICAgcmV0dXJuIFwic3RvcmUtb25seVwiO1xuICAgIGNhc2UgLyogU3RvcmVPck5ldHdvcmsgKi8xIDpcbiAgICAgICAgcmV0dXJuIFwic3RvcmUtb3ItbmV0d29ya1wiO1xuICAgIGNhc2UgLyogU3RvcmVBbmROZXR3b3JrICovMiA6XG4gICAgICAgIHJldHVybiBcInN0b3JlLWFuZC1uZXR3b3JrXCI7XG4gICAgY2FzZSAvKiBOZXR3b3JrT25seSAqLzMgOlxuICAgICAgICByZXR1cm4gXCJuZXR3b3JrLW9ubHlcIjtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBNYWtlUHJlbG9hZFF1ZXJ5KEMpIHtcbiAgdmFyIHByZWxvYWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQsIHZhcmlhYmxlcywgZmV0Y2hQb2xpY3ksIGZldGNoS2V5LCBuZXR3b3JrQ2FjaGVDb25maWcsIHBhcmFtKSB7XG4gICAgcmV0dXJuIEhvb2tzLnByZWxvYWRRdWVyeShlbnZpcm9ubWVudCwgQy5xdWVyeSwgQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShDLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLCB7XG4gICAgICAgICAgICAgICAgZmV0Y2hLZXk6IGZldGNoS2V5LFxuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBtYXBGZXRjaFBvbGljeShmZXRjaFBvbGljeSksXG4gICAgICAgICAgICAgICAgbmV0d29ya0NhY2hlQ29uZmlnOiBuZXR3b3JrQ2FjaGVDb25maWdcbiAgICAgICAgICAgICAgfSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgICAgICAgcHJlbG9hZDogcHJlbG9hZFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBNYWtlVXNlRnJhZ21lbnQoQykge1xuICB2YXIgdXNlID0gZnVuY3Rpb24gKGZyKSB7XG4gICAgdmFyIGRhdGEgPSBIb29rcy51c2VGcmFnbWVudChDLmZyYWdtZW50U3BlYywgZnIpO1xuICAgIHJldHVybiB1c2VDb252ZXJ0ZWRWYWx1ZShDLmNvbnZlcnRGcmFnbWVudCwgZGF0YSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgICAgICAgdXNlOiB1c2VcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVJlZmV0Y2hhYmxlRm5PcHRzKGZldGNoUG9saWN5LCByZW5kZXJQb2xpY3ksIG9uQ29tcGxldGUpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBmZXRjaFBvbGljeTogbWFwRmV0Y2hQb2xpY3koZmV0Y2hQb2xpY3kpLFxuICAgICAgICAgIFVOU1RBQkxFX3JlbmRlclBvbGljeTogbWFwUmVuZGVyUG9saWN5KHJlbmRlclBvbGljeSksXG4gICAgICAgICAgb25Db21wbGV0ZTogKGZ1bmN0aW9uIChtYXliZUV4bikge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSAobWF5YmVFeG4gPT0gbnVsbCkgPyB1bmRlZmluZWQgOiBDYW1sX29wdGlvbi5zb21lKG1heWJlRXhuKTtcbiAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShvbkNvbXBsZXRlLCBtYXRjaCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBNYWtlVXNlUmVmZXRjaGFibGVGcmFnbWVudChDKSB7XG4gIHZhciB1c2VSZWZldGNoYWJsZSA9IGZ1bmN0aW9uIChmcikge1xuICAgIHZhciBtYXRjaCA9IEhvb2tzLnVzZVJlZmV0Y2hhYmxlRnJhZ21lbnQoQy5mcmFnbWVudFNwZWMsIGZyKTtcbiAgICB2YXIgcmVmZXRjaEZuID0gbWF0Y2hbMV07XG4gICAgdmFyIGRhdGEgPSB1c2VDb252ZXJ0ZWRWYWx1ZShDLmNvbnZlcnRGcmFnbWVudCwgbWF0Y2hbMF0pO1xuICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAoZnVuY3Rpb24gKHZhcmlhYmxlcywgZmV0Y2hQb2xpY3ksIHJlbmRlclBvbGljeSwgb25Db21wbGV0ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIocmVmZXRjaEZuLCBDdXJyeS5fMShfY2xlYW5PYmplY3RGcm9tVW5kZWZpbmVkLCBDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKEMuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSkpLCBtYWtlUmVmZXRjaGFibGVGbk9wdHMoZmV0Y2hQb2xpY3ksIHJlbmRlclBvbGljeSwgb25Db21wbGV0ZSkpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIF07XG4gIH07XG4gIHJldHVybiB7XG4gICAgICAgICAgdXNlUmVmZXRjaGFibGU6IHVzZVJlZmV0Y2hhYmxlXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIE1ha2VVc2VQYWdpbmF0aW9uRnJhZ21lbnQoQykge1xuICB2YXIgdXNlQmxvY2tpbmdQYWdpbmF0aW9uID0gZnVuY3Rpb24gKGZyKSB7XG4gICAgdmFyIHAgPSBIb29rcy51c2VCbG9ja2luZ1BhZ2luYXRpb25GcmFnbWVudChDLmZyYWdtZW50U3BlYywgZnIpO1xuICAgIHZhciBkYXRhID0gdXNlQ29udmVydGVkVmFsdWUoQy5jb252ZXJ0RnJhZ21lbnQsIHAuZGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBsb2FkTmV4dDogKGZ1bmN0aW9uIChjb3VudCwgb25Db21wbGV0ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5sb2FkTmV4dChjb3VudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IG9uQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbG9hZFByZXZpb3VzOiAoZnVuY3Rpb24gKGNvdW50LCBvbkNvbXBsZXRlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmxvYWRQcmV2aW91cyhjb3VudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IG9uQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGFzTmV4dDogcC5oYXNOZXh0LFxuICAgICAgICAgICAgaGFzUHJldmlvdXM6IHAuaGFzUHJldmlvdXMsXG4gICAgICAgICAgICByZWZldGNoOiAoZnVuY3Rpb24gKHZhcmlhYmxlcywgZmV0Y2hQb2xpY3ksIHJlbmRlclBvbGljeSwgb25Db21wbGV0ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5yZWZldGNoKEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoQy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKSwgbWFrZVJlZmV0Y2hhYmxlRm5PcHRzKGZldGNoUG9saWN5LCByZW5kZXJQb2xpY3ksIG9uQ29tcGxldGUpKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICB9O1xuICB2YXIgdXNlUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIChmcikge1xuICAgIHZhciBwID0gSG9va3MudXNlUGFnaW5hdGlvbkZyYWdtZW50KEMuZnJhZ21lbnRTcGVjLCBmcik7XG4gICAgdmFyIGRhdGEgPSB1c2VDb252ZXJ0ZWRWYWx1ZShDLmNvbnZlcnRGcmFnbWVudCwgcC5kYXRhKTtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIGxvYWROZXh0OiAoZnVuY3Rpb24gKGNvdW50LCBvbkNvbXBsZXRlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmxvYWROZXh0KGNvdW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZTogb25Db21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBsb2FkUHJldmlvdXM6IChmdW5jdGlvbiAoY291bnQsIG9uQ29tcGxldGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAubG9hZFByZXZpb3VzKGNvdW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZTogb25Db21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoYXNOZXh0OiBwLmhhc05leHQsXG4gICAgICAgICAgICBoYXNQcmV2aW91czogcC5oYXNQcmV2aW91cyxcbiAgICAgICAgICAgIGlzTG9hZGluZ05leHQ6IHAuaXNMb2FkaW5nTmV4dCxcbiAgICAgICAgICAgIGlzTG9hZGluZ1ByZXZpb3VzOiBwLmlzTG9hZGluZ1ByZXZpb3VzLFxuICAgICAgICAgICAgcmVmZXRjaDogKGZ1bmN0aW9uICh2YXJpYWJsZXMsIGZldGNoUG9saWN5LCByZW5kZXJQb2xpY3ksIG9uQ29tcGxldGUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAucmVmZXRjaChDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKEMuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSksIG1ha2VSZWZldGNoYWJsZUZuT3B0cyhmZXRjaFBvbGljeSwgcmVuZGVyUG9saWN5LCBvbkNvbXBsZXRlKSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICB1c2VCbG9ja2luZ1BhZ2luYXRpb246IHVzZUJsb2NraW5nUGFnaW5hdGlvbixcbiAgICAgICAgICB1c2VQYWdpbmF0aW9uOiB1c2VQYWdpbmF0aW9uXG4gICAgICAgIH07XG59XG5cbnZhciBNdXRhdGlvbl9mYWlsZWQgPSBDYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiUmVhc29uUmVsYXkuTXV0YXRpb25fZmFpbGVkXCIpO1xuXG5mdW5jdGlvbiBNYWtlVXNlTXV0YXRpb24oQykge1xuICB2YXIgdXNlID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgdmFyIG1hdGNoID0gUmVsYXlFeHBlcmltZW50YWwudXNlTXV0YXRpb24oQy5ub2RlKTtcbiAgICB2YXIgbXV0YXRlID0gbWF0Y2hbMF07XG4gICAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgICAgKGZ1bmN0aW9uIChvbkVycm9yLCBvbkNvbXBsZXRlZCwgb25VbnN1YnNjcmliZSwgb3B0aW1pc3RpY1Jlc3BvbnNlLCBvcHRpbWlzdGljVXBkYXRlciwgdXBkYXRlciwgdmFyaWFibGVzLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShtdXRhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkOiBvbkNvbXBsZXRlZCAhPT0gdW5kZWZpbmVkID8gKGZ1bmN0aW9uIChyLCBlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIob25Db21wbGV0ZWQsIEN1cnJ5Ll8xKEMuY29udmVydFJlc3BvbnNlLCByKSwgKGVycm9ycyA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUoZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5zdWJzY3JpYmU6IG9uVW5zdWJzY3JpYmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljUmVzcG9uc2UgIT09IHVuZGVmaW5lZCA/IENhbWxfb3B0aW9uLnNvbWUoQ3VycnkuXzEoQy53cmFwUmVzcG9uc2UsIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0aW1pc3RpY1Jlc3BvbnNlKSkpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWNVcGRhdGVyOiBvcHRpbWlzdGljVXBkYXRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVyOiB1cGRhdGVyICE9PSB1bmRlZmluZWQgPyAoZnVuY3Rpb24gKHN0b3JlLCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKHVwZGF0ZXIsIHN0b3JlLCBDdXJyeS5fMShDLmNvbnZlcnRSZXNwb25zZSwgcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoQy5jb252ZXJ0VmFyaWFibGVzLCB2YXJpYWJsZXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXRjaFsxXVxuICAgICAgICAgIF07XG4gIH07XG4gIHJldHVybiB7XG4gICAgICAgICAgdXNlOiB1c2VcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gTWFrZUNvbW1pdE11dGF0aW9uKEMpIHtcbiAgdmFyIGNvbW1pdE11dGF0aW9uID0gZnVuY3Rpb24gKGVudmlyb25tZW50LCB2YXJpYWJsZXMsIG9wdGltaXN0aWNVcGRhdGVyLCBvcHRpbWlzdGljUmVzcG9uc2UsIHVwZGF0ZXIsIG9uQ29tcGxldGVkLCBvbkVycm9yLCBwYXJhbSkge1xuICAgIHJldHVybiBSZWxheVJ1bnRpbWUuY29tbWl0TXV0YXRpb24oZW52aXJvbm1lbnQsIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbjogQy5ub2RlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShDLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkOiAoZnVuY3Rpb24gKHJlcywgZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKG9uQ29tcGxldGVkLCAhKHJlcyA9PSBudWxsKSA/IENhbWxfb3B0aW9uLnNvbWUoQ3VycnkuXzEoQy5jb252ZXJ0UmVzcG9uc2UsIHJlcykpIDogdW5kZWZpbmVkLCAoZXJyID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEob25FcnJvciwgKGVyciA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUoZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IG9wdGltaXN0aWNSZXNwb25zZSAhPT0gdW5kZWZpbmVkID8gQ2FtbF9vcHRpb24uc29tZShDdXJyeS5fMShDLndyYXBSZXNwb25zZSwgQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihvcHRpbWlzdGljUmVzcG9uc2UpKSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgb3B0aW1pc3RpY1VwZGF0ZXI6IG9wdGltaXN0aWNVcGRhdGVyLFxuICAgICAgICAgICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIgIT09IHVuZGVmaW5lZCA/IChmdW5jdGlvbiAoc3RvcmUsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIodXBkYXRlciwgc3RvcmUsIEN1cnJ5Ll8xKEMuY29udmVydFJlc3BvbnNlLCByKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH0pO1xuICB9O1xuICB2YXIgY29tbWl0TXV0YXRpb25Qcm9taXNlZCA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCwgdmFyaWFibGVzLCBvcHRpbWlzdGljVXBkYXRlciwgb3B0aW1pc3RpY1Jlc3BvbnNlLCB1cGRhdGVyLCBwYXJhbSkge1xuICAgIHZhciBtYXRjaCA9ICQkUHJvbWlzZS5wZW5kaW5nKHVuZGVmaW5lZCk7XG4gICAgdmFyIHJlc29sdmUgPSBtYXRjaFsxXTtcbiAgICBSZWxheVJ1bnRpbWUuY29tbWl0TXV0YXRpb24oZW52aXJvbm1lbnQsIHtcbiAgICAgICAgICBtdXRhdGlvbjogQy5ub2RlLFxuICAgICAgICAgIHZhcmlhYmxlczogQ3VycnkuXzEoX2NsZWFuVmFyaWFibGVzLCBDdXJyeS5fMShDLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLFxuICAgICAgICAgIG9uQ29tcGxldGVkOiAoZnVuY3Rpb24gKHJlcywgZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShyZXNvbHZlLCAvKiBPayAqL0Jsb2NrLl9fKDAsIFsvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEocmVzID09IG51bGwpID8gQ2FtbF9vcHRpb24uc29tZShDdXJyeS5fMShDLmNvbnZlcnRSZXNwb25zZSwgcmVzKSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXV0pKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIG9uRXJyb3I6IChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShyZXNvbHZlLCAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsoZXJyID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShlcnIpXSkpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiBvcHRpbWlzdGljUmVzcG9uc2UgIT09IHVuZGVmaW5lZCA/IENhbWxfb3B0aW9uLnNvbWUoQ3VycnkuXzEoQy53cmFwUmVzcG9uc2UsIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0aW1pc3RpY1Jlc3BvbnNlKSkpIDogdW5kZWZpbmVkLFxuICAgICAgICAgIG9wdGltaXN0aWNVcGRhdGVyOiBvcHRpbWlzdGljVXBkYXRlcixcbiAgICAgICAgICB1cGRhdGVyOiB1cGRhdGVyICE9PSB1bmRlZmluZWQgPyAoZnVuY3Rpb24gKHN0b3JlLCByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKHVwZGF0ZXIsIHN0b3JlLCBDdXJyeS5fMShDLmNvbnZlcnRSZXNwb25zZSwgcikpO1xuICAgICAgICAgICAgICB9KSA6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hbMF07XG4gIH07XG4gIHJldHVybiB7XG4gICAgICAgICAgY29tbWl0TXV0YXRpb246IGNvbW1pdE11dGF0aW9uLFxuICAgICAgICAgIGNvbW1pdE11dGF0aW9uUHJvbWlzZWQ6IGNvbW1pdE11dGF0aW9uUHJvbWlzZWRcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY29tbWl0TG9jYWxVcGRhdGUoZW52aXJvbm1lbnQsIHVwZGF0ZXIpIHtcbiAgUmVsYXlSdW50aW1lLmNvbW1pdExvY2FsVXBkYXRlKGVudmlyb25tZW50LCB1cGRhdGVyKTtcbiAgXG59XG5cbmZ1bmN0aW9uIE1ha2VVc2VTdWJzY3JpcHRpb24oQykge1xuICB2YXIgc3Vic2NyaWJlID0gZnVuY3Rpb24gKGVudmlyb25tZW50LCB2YXJpYWJsZXMsIG9uQ29tcGxldGVkLCBvbkVycm9yLCBvbk5leHQsIHVwZGF0ZXIsIHBhcmFtKSB7XG4gICAgcmV0dXJuIFJlbGF5UnVudGltZS5yZXF1ZXN0U3Vic2NyaXB0aW9uKGVudmlyb25tZW50LCB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiBDLm5vZGUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiBDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIEN1cnJ5Ll8xKEMuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSksXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZWQ6IG9uQ29tcGxldGVkLFxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IG9uRXJyb3IsXG4gICAgICAgICAgICAgICAgb25OZXh0OiBvbk5leHQgIT09IHVuZGVmaW5lZCA/IChmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShvbk5leHQsIEN1cnJ5Ll8xKEMuY29udmVydFJlc3BvbnNlLCByKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIgIT09IHVuZGVmaW5lZCA/IChmdW5jdGlvbiAoc3RvcmUsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIodXBkYXRlciwgc3RvcmUsIEN1cnJ5Ll8xKEMuY29udmVydFJlc3BvbnNlLCByKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgICAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGRhdGFJZFRvU3RyaW5nKHByaW0pIHtcbiAgcmV0dXJuIHByaW07XG59XG5cbmZ1bmN0aW9uIG1ha2VEYXRhSWQocHJpbSkge1xuICByZXR1cm4gcHJpbTtcbn1cblxuZnVuY3Rpb24gbWFrZUFyZ3VtZW50cyhwcmltKSB7XG4gIHJldHVybiBwcmltO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUNsaWVudElEKHByaW0pIHtcbiAgcmV0dXJuIFJlbGF5UnVudGltZS5nZW5lcmF0ZVVuaXF1ZUNsaWVudElEKCk7XG59XG5cbmZ1bmN0aW9uIGlzQ2xpZW50SUQocHJpbSkge1xuICByZXR1cm4gUmVsYXlSdW50aW1lLmlzQ2xpZW50SUQocHJpbSk7XG59XG5cbnZhciBzdG9yZVJvb3RJZCA9IFJlbGF5UnVudGltZS5ST09UX0lEO1xuXG52YXIgc3RvcmVSb290VHlwZSA9IFJlbGF5UnVudGltZS5ST09UX1RZUEU7XG5cbmZ1bmN0aW9uIFJlY29yZFByb3h5X2ludmFsaWRhdGVSZWNvcmQocHJpbSkge1xuICBwcmltLmludmFsaWRhdGVSZWNvcmQoKTtcbiAgXG59XG5cbnZhciBSZWNvcmRQcm94eSA9IHtcbiAgY29weUZpZWxkc0Zyb206IGNvcHlGaWVsZHNGcm9tLFxuICBnZXREYXRhSWQ6IGdldERhdGFJZCxcbiAgZ2V0TGlua2VkUmVjb3JkOiBnZXRMaW5rZWRSZWNvcmQsXG4gIGdldExpbmtlZFJlY29yZHM6IGdldExpbmtlZFJlY29yZHMsXG4gIGdldE9yQ3JlYXRlTGlua2VkUmVjb3JkOiBnZXRPckNyZWF0ZUxpbmtlZFJlY29yZCxcbiAgZ2V0VHlwZTogZ2V0VHlwZSxcbiAgZ2V0VmFsdWVTdHJpbmc6IGdldFZhbHVlU3RyaW5nLFxuICBnZXRWYWx1ZVN0cmluZ0FycmF5OiBnZXRWYWx1ZVN0cmluZ0FycmF5LFxuICBnZXRWYWx1ZUludDogZ2V0VmFsdWVJbnQsXG4gIGdldFZhbHVlSW50QXJyYXk6IGdldFZhbHVlSW50QXJyYXksXG4gIGdldFZhbHVlRmxvYXQ6IGdldFZhbHVlRmxvYXQsXG4gIGdldFZhbHVlRmxvYXRBcnJheTogZ2V0VmFsdWVGbG9hdEFycmF5LFxuICBnZXRWYWx1ZUJvb2w6IGdldFZhbHVlQm9vbCxcbiAgZ2V0VmFsdWVCb29sQXJyYXk6IGdldFZhbHVlQm9vbEFycmF5LFxuICBzZXRMaW5rZWRSZWNvcmQ6IHNldExpbmtlZFJlY29yZCxcbiAgc2V0TGlua2VkUmVjb3Jkczogc2V0TGlua2VkUmVjb3JkcyxcbiAgc2V0VmFsdWVTdHJpbmc6IHNldFZhbHVlU3RyaW5nLFxuICBzZXRWYWx1ZVN0cmluZ0FycmF5OiBzZXRWYWx1ZVN0cmluZ0FycmF5LFxuICBzZXRWYWx1ZUludDogc2V0VmFsdWVJbnQsXG4gIHNldFZhbHVlSW50QXJyYXk6IHNldFZhbHVlSW50QXJyYXksXG4gIHNldFZhbHVlRmxvYXQ6IHNldFZhbHVlRmxvYXQsXG4gIHNldFZhbHVlRmxvYXRBcnJheTogc2V0VmFsdWVGbG9hdEFycmF5LFxuICBzZXRWYWx1ZUJvb2w6IHNldFZhbHVlQm9vbCxcbiAgc2V0VmFsdWVCb29sQXJyYXk6IHNldFZhbHVlQm9vbEFycmF5LFxuICB1bnNldFZhbHVlOiB1bnNldFZhbHVlLFxuICB1bnNldExpbmtlZFJlY29yZDogdW5zZXRMaW5rZWRSZWNvcmQsXG4gIHVuc2V0TGlua2VkUmVjb3JkczogdW5zZXRMaW5rZWRSZWNvcmRzLFxuICBpbnZhbGlkYXRlUmVjb3JkOiBSZWNvcmRQcm94eV9pbnZhbGlkYXRlUmVjb3JkXG59O1xuXG5mdW5jdGlvbiBSZWNvcmRTb3VyY2VTZWxlY3RvclByb3h5X2dldFJvb3QocHJpbSkge1xuICByZXR1cm4gcHJpbS5nZXRSb290KCk7XG59XG5cbmZ1bmN0aW9uIFJlY29yZFNvdXJjZVNlbGVjdG9yUHJveHlfaW52YWxpZGF0ZVN0b3JlKHByaW0pIHtcbiAgcHJpbS5pbnZhbGlkYXRlU3RvcmUoKTtcbiAgXG59XG5cbnZhciBSZWNvcmRTb3VyY2VTZWxlY3RvclByb3h5ID0ge1xuICBjcmVhdGU6IGNyZWF0ZSxcbiAgJCRkZWxldGU6ICQkZGVsZXRlLFxuICBnZXQ6IGdldCxcbiAgZ2V0Um9vdDogUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eV9nZXRSb290LFxuICBnZXRSb290RmllbGQ6IGdldFJvb3RGaWVsZCxcbiAgZ2V0UGx1cmFsUm9vdEZpZWxkOiBnZXRQbHVyYWxSb290RmllbGQsXG4gIGludmFsaWRhdGVTdG9yZTogUmVjb3JkU291cmNlU2VsZWN0b3JQcm94eV9pbnZhbGlkYXRlU3RvcmVcbn07XG5cbmZ1bmN0aW9uIFJlY29yZFNvdXJjZVByb3h5X2dldFJvb3QocHJpbSkge1xuICByZXR1cm4gcHJpbS5nZXRSb290KCk7XG59XG5cbmZ1bmN0aW9uIFJlY29yZFNvdXJjZVByb3h5X2ludmFsaWRhdGVTdG9yZShwcmltKSB7XG4gIHByaW0uaW52YWxpZGF0ZVN0b3JlKCk7XG4gIFxufVxuXG52YXIgUmVjb3JkU291cmNlUHJveHkgPSB7XG4gIGNyZWF0ZTogY3JlYXRlJDEsXG4gICQkZGVsZXRlOiAkJGRlbGV0ZSQxLFxuICBnZXQ6IGdldCQxLFxuICBnZXRSb290OiBSZWNvcmRTb3VyY2VQcm94eV9nZXRSb290LFxuICBpbnZhbGlkYXRlU3RvcmU6IFJlY29yZFNvdXJjZVByb3h5X2ludmFsaWRhdGVTdG9yZVxufTtcblxuZnVuY3Rpb24gUmVjb3JkU291cmNlX3RvSlNPTihwcmltKSB7XG4gIHJldHVybiBwcmltLnRvSlNPTigpO1xufVxuXG52YXIgUmVjb3JkU291cmNlID0ge1xuICBtYWtlOiBtYWtlJDEsXG4gIHRvSlNPTjogUmVjb3JkU291cmNlX3RvSlNPTlxufTtcblxuZnVuY3Rpb24gU3RvcmVfZ2V0U291cmNlKHByaW0pIHtcbiAgcmV0dXJuIHByaW0uZ2V0U291cmNlKCk7XG59XG5cbnZhciBTdG9yZSA9IHtcbiAgbWFrZTogbWFrZSQyLFxuICBnZXRTb3VyY2U6IFN0b3JlX2dldFNvdXJjZVxufTtcblxuZnVuY3Rpb24gRW52aXJvbm1lbnRfZ2V0U3RvcmUocHJpbSkge1xuICByZXR1cm4gcHJpbS5nZXRTdG9yZSgpO1xufVxuXG52YXIgRW52aXJvbm1lbnQgPSB7XG4gIG1ha2U6IG1ha2UkMyxcbiAgZ2V0U3RvcmU6IEVudmlyb25tZW50X2dldFN0b3JlXG59O1xuXG52YXIgRGlzcG9zYWJsZSA9IHtcbiAgZGlzcG9zZTogKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICBwcmltLmRpc3Bvc2UoKTtcbiAgICAgIFxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBNYWtlVXNlUXVlcnkoZnVuYXJnKSB7XG4gIHZhciB1c2UgPSBmdW5jdGlvbiAodmFyaWFibGVzLCBmZXRjaFBvbGljeSwgcmVuZGVyUG9saWN5LCBmZXRjaEtleSwgbmV0d29ya0NhY2hlQ29uZmlnLCBwYXJhbSkge1xuICAgIHZhciBkYXRhID0gSG9va3MudXNlTGF6eUxvYWRRdWVyeShmdW5hcmcucXVlcnksIEN1cnJ5Ll8xKF9jbGVhbk9iamVjdEZyb21VbmRlZmluZWQsIEN1cnJ5Ll8xKGZ1bmFyZy5jb252ZXJ0VmFyaWFibGVzLCBDdXJyeS5fMShfY2xlYW5WYXJpYWJsZXMsIHZhcmlhYmxlcykpKSwge1xuICAgICAgICAgIGZldGNoS2V5OiBmZXRjaEtleSxcbiAgICAgICAgICBmZXRjaFBvbGljeTogbWFwRmV0Y2hQb2xpY3koZmV0Y2hQb2xpY3kpLFxuICAgICAgICAgIFVOU1RBQkxFX3JlbmRlclBvbGljeTogbWFwUmVuZGVyUG9saWN5KHJlbmRlclBvbGljeSksXG4gICAgICAgICAgbmV0d29ya0NhY2hlQ29uZmlnOiBuZXR3b3JrQ2FjaGVDb25maWdcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIHVzZUNvbnZlcnRlZFZhbHVlKGZ1bmFyZy5jb252ZXJ0UmVzcG9uc2UsIGRhdGEpO1xuICB9O1xuICB2YXIgcHJlbG9hZCA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCwgdmFyaWFibGVzLCBmZXRjaFBvbGljeSwgZmV0Y2hLZXksIG5ldHdvcmtDYWNoZUNvbmZpZywgcGFyYW0pIHtcbiAgICByZXR1cm4gSG9va3MucHJlbG9hZFF1ZXJ5KGVudmlyb25tZW50LCBmdW5hcmcucXVlcnksIEN1cnJ5Ll8xKF9jbGVhblZhcmlhYmxlcywgQ3VycnkuXzEoZnVuYXJnLmNvbnZlcnRWYXJpYWJsZXMsIHZhcmlhYmxlcykpLCB7XG4gICAgICAgICAgICAgICAgZmV0Y2hLZXk6IGZldGNoS2V5LFxuICAgICAgICAgICAgICAgIGZldGNoUG9saWN5OiBtYXBGZXRjaFBvbGljeShmZXRjaFBvbGljeSksXG4gICAgICAgICAgICAgICAgbmV0d29ya0NhY2hlQ29uZmlnOiBuZXR3b3JrQ2FjaGVDb25maWdcbiAgICAgICAgICAgICAgfSk7XG4gIH07XG4gIHZhciB1c2VQcmVsb2FkZWQgPSBmdW5jdGlvbiAodG9rZW4sIHJlbmRlclBvbGljeSwgcGFyYW0pIHtcbiAgICB2YXIgZGF0YSA9IEhvb2tzLnVzZVByZWxvYWRlZFF1ZXJ5KGZ1bmFyZy5xdWVyeSwgdG9rZW4sIHJlbmRlclBvbGljeSAhPT0gdW5kZWZpbmVkID8gKHtcbiAgICAgICAgICAgICAgVU5TVEFCTEVfcmVuZGVyUG9saWN5OiBtYXBSZW5kZXJQb2xpY3kocmVuZGVyUG9saWN5KVxuICAgICAgICAgICAgfSkgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiB1c2VDb252ZXJ0ZWRWYWx1ZShmdW5hcmcuY29udmVydFJlc3BvbnNlLCBkYXRhKTtcbiAgfTtcbiAgdmFyICQkZmV0Y2ggPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQsIHZhcmlhYmxlcywgb25SZXN1bHQpIHtcbiAgICBSZWxheVJ1bnRpbWUuZmV0Y2hRdWVyeShlbnZpcm9ubWVudCwgZnVuYXJnLnF1ZXJ5LCBDdXJyeS5fMShmdW5hcmcuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSkudGhlbigoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICBDdXJyeS5fMShvblJlc3VsdCwgLyogT2sgKi9CbG9jay5fXygwLCBbQ3VycnkuXzEoZnVuYXJnLmNvbnZlcnRSZXNwb25zZSwgcmVzKV0pKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgfSkpLmNhdGNoKChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBDdXJyeS5fMShvblJlc3VsdCwgLyogRXJyb3IgKi9CbG9jay5fXygxLCBbZXJyXSkpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgIH0pKTtcbiAgICBcbiAgfTtcbiAgdmFyIGZldGNoUHJvbWlzZWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQsIHZhcmlhYmxlcykge1xuICAgIHZhciBtYXRjaCA9ICQkUHJvbWlzZS5wZW5kaW5nKHVuZGVmaW5lZCk7XG4gICAgdmFyIHJlc29sdmUgPSBtYXRjaFsxXTtcbiAgICBSZWxheVJ1bnRpbWUuZmV0Y2hRdWVyeShlbnZpcm9ubWVudCwgZnVuYXJnLnF1ZXJ5LCBDdXJyeS5fMShmdW5hcmcuY29udmVydFZhcmlhYmxlcywgdmFyaWFibGVzKSkudGhlbigoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICBDdXJyeS5fMShyZXNvbHZlLCAvKiBPayAqL0Jsb2NrLl9fKDAsIFtDdXJyeS5fMShmdW5hcmcuY29udmVydFJlc3BvbnNlLCByZXMpXSkpO1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9KSkuY2F0Y2goKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIEN1cnJ5Ll8xKHJlc29sdmUsIC8qIEVycm9yICovQmxvY2suX18oMSwgW2Vycl0pKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICB9KSk7XG4gICAgcmV0dXJuIG1hdGNoWzBdO1xuICB9O1xuICByZXR1cm4ge1xuICAgICAgICAgIHVzZTogdXNlLFxuICAgICAgICAgICQkZmV0Y2g6ICQkZmV0Y2gsXG4gICAgICAgICAgZmV0Y2hQcm9taXNlZDogZmV0Y2hQcm9taXNlZCxcbiAgICAgICAgICBwcmVsb2FkOiBwcmVsb2FkLFxuICAgICAgICAgIHVzZVByZWxvYWRlZDogdXNlUHJlbG9hZGVkXG4gICAgICAgIH07XG59XG5cbnZhciBDb250ZXh0X1Byb3ZpZGVyID0ge1xuICBtYWtlUHJvcHM6IChmdW5jdGlvbiAocHJpbSwgcHJpbSQxLCBwcmltJDIsIHByaW0kMykge1xuICAgICAgdmFyIHRtcCA9IHtcbiAgICAgICAgZW52aXJvbm1lbnQ6IHByaW0sXG4gICAgICAgIGNoaWxkcmVuOiBwcmltJDFcbiAgICAgIH07XG4gICAgICBpZiAocHJpbSQyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdG1wLmtleSA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ocHJpbSQyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0bXA7XG4gICAgfSksXG4gIG1ha2U6IFJlYXNvblJlbGF5JENvbnRleHQkUHJvdmlkZXJcbn07XG5cbnZhciBDb250ZXh0ID0ge1xuICBjb250ZXh0OiBSZWFjdFJlbGF5LlJlYWN0UmVsYXlDb250ZXh0LFxuICBQcm92aWRlcjogQ29udGV4dF9Qcm92aWRlclxufTtcblxuZnVuY3Rpb24gZmV0Y2hRdWVyeShwcmltLCBwcmltJDEsIHByaW0kMikge1xuICByZXR1cm4gUmVsYXlSdW50aW1lLmZldGNoUXVlcnkocHJpbSwgcHJpbSQxLCBwcmltJDIpO1xufVxuXG5leHBvcnQge1xuICBkYXRhSWRUb1N0cmluZyAsXG4gIG1ha2VEYXRhSWQgLFxuICBtYWtlQXJndW1lbnRzICxcbiAgZ2VuZXJhdGVDbGllbnRJRCAsXG4gIGdlbmVyYXRlVW5pcXVlQ2xpZW50SUQgLFxuICBpc0NsaWVudElEICxcbiAgc3RvcmVSb290SWQgLFxuICBzdG9yZVJvb3RUeXBlICxcbiAgX2NsZWFuT2JqZWN0RnJvbVVuZGVmaW5lZCAsXG4gIF9jbGVhblZhcmlhYmxlcyAsXG4gIF9jb252ZXJ0T2JqICxcbiAgUmVjb3JkUHJveHkgLFxuICBSZWNvcmRTb3VyY2VTZWxlY3RvclByb3h5ICxcbiAgUmVjb3JkU291cmNlUHJveHkgLFxuICBDb25uZWN0aW9uSGFuZGxlciAsXG4gIE9ic2VydmFibGUgLFxuICBOZXR3b3JrICxcbiAgUmVjb3JkU291cmNlICxcbiAgU3RvcmUgLFxuICBFbnZpcm9ubWVudCAsXG4gIERpc3Bvc2FibGUgLFxuICBtYXBGZXRjaFBvbGljeSAsXG4gIE1ha2VVc2VRdWVyeSAsXG4gIE1ha2VQcmVsb2FkUXVlcnkgLFxuICBNYWtlVXNlRnJhZ21lbnQgLFxuICBNYWtlVXNlUmVmZXRjaGFibGVGcmFnbWVudCAsXG4gIE1ha2VVc2VQYWdpbmF0aW9uRnJhZ21lbnQgLFxuICBNYWtlVXNlTXV0YXRpb24gLFxuICBDb250ZXh0ICxcbiAgRW52aXJvbm1lbnROb3RGb3VuZEluQ29udGV4dCAsXG4gIHVzZUVudmlyb25tZW50RnJvbUNvbnRleHQgLFxuICBNdXRhdGlvbl9mYWlsZWQgLFxuICBNYWtlQ29tbWl0TXV0YXRpb24gLFxuICBjb21taXRMb2NhbFVwZGF0ZSAsXG4gIGZldGNoUXVlcnkgLFxuICBNYWtlVXNlU3Vic2NyaXB0aW9uICxcbiAgXG59XG4vKiBfY2xlYW5PYmplY3RGcm9tVW5kZWZpbmVkIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvKipcbiAqIFRoaXMgaXMgYm91bmQgdG8gZWFjaCBuZXN0ZWQgb2JqZWN0IHdpdGggZnJhZ21lbnRzLFxuICogYW5kIHVzZWQgYXMgYSBkdW1teSBmdW5jdGlvbiBmb3IgY2FzdGluZyBhIHJlY29yZFxuICogdG8gYSBKcy50IG9iamVjdCB3aXRoIHRoZSBmcmFnbWVudCByZWZlcmVuY2VzLlxuICovXG5mdW5jdGlvbiBnZXRGcmFnbWVudFJlZnMoKSB7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBnZXROZXdPYmoobWF5YmVOZXdPYmosIGN1cnJlbnRPYmopIHtcbiAgcmV0dXJuIG1heWJlTmV3T2JqIHx8IE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRPYmopO1xufVxuXG5mdW5jdGlvbiBnZXRQYXRoTmFtZShwYXRoKSB7XG4gIHJldHVybiBwYXRoLmpvaW4oXCJfXCIpO1xufVxuXG5mdW5jdGlvbiBtYWtlTmV3UGF0aChjdXJyZW50UGF0aCwgbmV3S2V5cykge1xuICByZXR1cm4gW10uY29uY2F0KGN1cnJlbnRQYXRoLCBuZXdLZXlzKTtcbn1cblxuLyoqXG4gKiBSdW5zIG9uIGVhY2ggb2JqZWN0IGluIHRoZSB0cmVlIGFuZCBmb2xsb3dzIHRoZSBwcm92aWRlZCBpbnN0cnVjdGlvbnNcbiAqIHRvIGFwcGx5IHRyYW5zZm9ybXMgZXRjLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZShcbiAgZnVsbEluc3RydWN0aW9uTWFwLFxuICBjdXJyZW50UGF0aCxcbiAgY3VycmVudE9iaixcbiAgaW5zdHJ1Y3Rpb25NYXAsXG4gIGNvbnZlcnRlcnMsXG4gIG51bGxhYmxlVmFsdWUsXG4gIGluc3RydWN0aW9uUGF0aHMsXG4gIGFkZEZyYWdtZW50T25Sb290XG4pIHtcbiAgdmFyIG5ld09iajtcblxuICBpZiAoYWRkRnJhZ21lbnRPblJvb3QpIHtcbiAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcbiAgICBuZXdPYmouZ2V0RnJhZ21lbnRSZWZzID0gZ2V0RnJhZ21lbnRSZWZzLmJpbmQobmV3T2JqKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBjdXJyZW50T2JqKSB7XG4gICAgdmFyIGlzVW5pb24gPSBmYWxzZTtcbiAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGN1cnJlbnRPYmpba2V5XTtcblxuICAgIC8vIEluc3RydWN0aW9ucyBhcmUgc3RvcmVkIGJ5IHRoZSBwYXRoIGluIHRoZSBvYmplY3Qgd2hlcmUgdGhleSBhcHBseVxuICAgIHZhciB0aGlzUGF0aCA9IG1ha2VOZXdQYXRoKGN1cnJlbnRQYXRoLCBba2V5XSk7XG4gICAgdmFyIHBhdGggPSBnZXRQYXRoTmFtZSh0aGlzUGF0aCk7XG5cbiAgICB2YXIgaW5zdHJ1Y3Rpb25zID0gaW5zdHJ1Y3Rpb25NYXBbcGF0aF07XG5cbiAgICB2YXIgaGFzRGVlcGVySW5zdHJ1Y3Rpb25zID1cbiAgICAgIGluc3RydWN0aW9uUGF0aHMuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIHAuaW5kZXhPZihwYXRoKSA9PT0gMCAmJiBwLmxlbmd0aCA+IHBhdGgubGVuZ3RoO1xuICAgICAgfSkubGVuZ3RoID4gMDtcblxuICAgIGlmIChpbnN0cnVjdGlvbnMpIHtcbiAgICAgIGlmIChjdXJyZW50T2JqW2tleV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaW5zdHJ1Y3Rpb25zW1wiblwiXSA9PT0gXCJcIikge1xuICAgICAgICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuICAgICAgICAgIG5ld09ialtrZXldID0gbnVsbGFibGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNob3VsZENvbnZlcnRSb290T2JqID1cbiAgICAgICAgICB0eXBlb2YgaW5zdHJ1Y3Rpb25zW1wiclwiXSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgIGZ1bGxJbnN0cnVjdGlvbk1hcFtpbnN0cnVjdGlvbnNbXCJyXCJdXTtcblxuICAgICAgICB2YXIgc2hvdWxkQWRkRnJhZ21lbnRGbiA9IGluc3RydWN0aW9uc1tcImZcIl0gPT09IFwiXCI7XG5cbiAgICAgICAgdmFyIHNob3VsZENvbnZlcnRFbnVtID1cbiAgICAgICAgICB0eXBlb2YgaW5zdHJ1Y3Rpb25zW1wiZVwiXSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICEhY29udmVydGVyc1tpbnN0cnVjdGlvbnNbXCJlXCJdXTtcblxuICAgICAgICB2YXIgc2hvdWxkQ29udmVydFVuaW9uID1cbiAgICAgICAgICB0eXBlb2YgaW5zdHJ1Y3Rpb25zW1widVwiXSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICEhY29udmVydGVyc1tpbnN0cnVjdGlvbnNbXCJ1XCJdXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlIGFycmF5c1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudE9ialtrZXldKSkge1xuICAgICAgICAgIG5ld09iaiA9IGdldE5ld09iaihuZXdPYmosIGN1cnJlbnRPYmopO1xuICAgICAgICAgIG5ld09ialtrZXldID0gY3VycmVudE9ialtrZXldLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICBpZiAodiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsYWJsZVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29udmVydFJvb3RPYmopIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRyYXZlcnNlcihcbiAgICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICAgIGZ1bGxJbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZXJzLFxuICAgICAgICAgICAgICAgIG51bGxhYmxlVmFsdWUsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zW1wiclwiXVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29udmVydEVudW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRlcnNbaW5zdHJ1Y3Rpb25zW1wiZVwiXV0odik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2hvdWxkQ29udmVydFVuaW9uICYmXG4gICAgICAgICAgICAgIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgIHR5cGVvZiB2Ll9fdHlwZW5hbWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpc1VuaW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgICB2YXIgbmV3UGF0aCA9IG1ha2VOZXdQYXRoKGN1cnJlbnRQYXRoLCBbXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHYuX190eXBlbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAgIHZhciB1bmlvblJvb3RIYXNGcmFnbWVudCA9XG4gICAgICAgICAgICAgICAgKGluc3RydWN0aW9uTWFwW2dldFBhdGhOYW1lKG5ld1BhdGgpXSB8fCB7fSkuZiA9PT0gXCJcIjtcblxuICAgICAgICAgICAgICB2YXIgdHJhdmVyc2VkVmFsdWUgPSB0cmF2ZXJzZShcbiAgICAgICAgICAgICAgICBmdWxsSW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgICAgIGNvbnZlcnRlcnMsXG4gICAgICAgICAgICAgICAgbnVsbGFibGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvblBhdGhzLFxuICAgICAgICAgICAgICAgIHVuaW9uUm9vdEhhc0ZyYWdtZW50XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRlcnNbaW5zdHJ1Y3Rpb25zW1widVwiXV0odHJhdmVyc2VkVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQWRkRnJhZ21lbnRGbiAmJiB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICB2YXIgb2JqV2l0aEZyYWdtZW50Rm4gPSBPYmplY3QuYXNzaWduKHt9LCB2KTtcbiAgICAgICAgICAgICAgb2JqV2l0aEZyYWdtZW50Rm4uZ2V0RnJhZ21lbnRSZWZzID0gZ2V0RnJhZ21lbnRSZWZzLmJpbmQoXG4gICAgICAgICAgICAgICAgb2JqV2l0aEZyYWdtZW50Rm5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG9ialdpdGhGcmFnbWVudEZuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBIYW5kbGUgbm9ybWFsIHZhbHVlcy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgdiA9IGN1cnJlbnRPYmpba2V5XTtcblxuICAgICAgICAgIGlmIChzaG91bGRDb252ZXJ0Um9vdE9iaikge1xuICAgICAgICAgICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IHRyYXZlcnNlcihcbiAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgZnVsbEluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgICBjb252ZXJ0ZXJzLFxuICAgICAgICAgICAgICBudWxsYWJsZVZhbHVlLFxuICAgICAgICAgICAgICBpbnN0cnVjdGlvbnNbXCJyXCJdXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzaG91bGRDb252ZXJ0RW51bSkge1xuICAgICAgICAgICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IGNvbnZlcnRlcnNbaW5zdHJ1Y3Rpb25zW1wiZVwiXV0odik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hvdWxkQ29udmVydFVuaW9uICYmXG4gICAgICAgICAgICB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHYuX190eXBlbmFtZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaXNVbmlvbiA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciBuZXdQYXRoID0gbWFrZU5ld1BhdGgoY3VycmVudFBhdGgsIFtcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICB2Ll9fdHlwZW5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIHZhciB1bmlvblJvb3RIYXNGcmFnbWVudCA9XG4gICAgICAgICAgICAgIChpbnN0cnVjdGlvbk1hcFtnZXRQYXRoTmFtZShuZXdQYXRoKV0gfHwge30pLmYgPT09IFwiXCI7XG5cbiAgICAgICAgICAgIHZhciB0cmF2ZXJzZWRWYWx1ZSA9IHRyYXZlcnNlKFxuICAgICAgICAgICAgICBmdWxsSW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICAgIHYsXG4gICAgICAgICAgICAgIGluc3RydWN0aW9uTWFwLFxuICAgICAgICAgICAgICBjb252ZXJ0ZXJzLFxuICAgICAgICAgICAgICBudWxsYWJsZVZhbHVlLFxuICAgICAgICAgICAgICBpbnN0cnVjdGlvblBhdGhzLFxuICAgICAgICAgICAgICB1bmlvblJvb3RIYXNGcmFnbWVudFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IGNvbnZlcnRlcnNbaW5zdHJ1Y3Rpb25zW1widVwiXV0odHJhdmVyc2VkVmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzaG91bGRBZGRGcmFnbWVudEZuICYmIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcblxuICAgICAgICAgICAgdmFyIG9ialdpdGhGcmFnbWVudEZuID0gT2JqZWN0LmFzc2lnbih7fSwgdik7XG5cbiAgICAgICAgICAgIG9ialdpdGhGcmFnbWVudEZuLmdldEZyYWdtZW50UmVmcyA9IGdldEZyYWdtZW50UmVmcy5iaW5kKFxuICAgICAgICAgICAgICBvYmpXaXRoRnJhZ21lbnRGblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpXaXRoRnJhZ21lbnRGbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGVlcGVySW5zdHJ1Y3Rpb25zICYmIG9yaWdpbmFsVmFsdWUgIT0gbnVsbCAmJiAhaXNVbmlvbikge1xuICAgICAgdmFyIG5leHRPYmogPSAobmV3T2JqICYmIG5ld09ialtrZXldKSB8fCBjdXJyZW50T2JqW2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dE9iaiA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShvcmlnaW5hbFZhbHVlKSkge1xuICAgICAgICB2YXIgdHJhdmVyc2VkT2JqID0gdHJhdmVyc2UoXG4gICAgICAgICAgZnVsbEluc3RydWN0aW9uTWFwLFxuICAgICAgICAgIHRoaXNQYXRoLFxuICAgICAgICAgIG5leHRPYmosXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgY29udmVydGVycyxcbiAgICAgICAgICBudWxsYWJsZVZhbHVlLFxuICAgICAgICAgIGluc3RydWN0aW9uUGF0aHNcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodHJhdmVyc2VkT2JqICE9PSBuZXh0T2JqKSB7XG4gICAgICAgICAgbmV3T2JqID0gZ2V0TmV3T2JqKG5ld09iaiwgY3VycmVudE9iaik7XG4gICAgICAgICAgbmV3T2JqW2tleV0gPSB0cmF2ZXJzZWRPYmo7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW5hbFZhbHVlKSkge1xuICAgICAgICBuZXdPYmogPSBnZXROZXdPYmoobmV3T2JqLCBjdXJyZW50T2JqKTtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBuZXh0T2JqLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT0gbnVsbFxuICAgICAgICAgICAgPyB0cmF2ZXJzZShcbiAgICAgICAgICAgICAgICBmdWxsSW5zdHJ1Y3Rpb25NYXAsXG4gICAgICAgICAgICAgICAgdGhpc1BhdGgsXG4gICAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZXJzLFxuICAgICAgICAgICAgICAgIG51bGxhYmxlVmFsdWUsXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25QYXRoc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IG87XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmogfHwgY3VycmVudE9iajtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGFuIG9iamVjdCAoc25hcHNob3QgZnJvbSB0aGUgUmVsYXkgc3RvcmUpIGFuZCBhcHBsaWVzIGFcbiAqIHNldCBvZiBjb252ZXJzaW9ucyBkZWVwbHkgb24gdGhlIG9iamVjdCAoaW5zdHJ1Y3Rpb25zIGNvbWluZyBmcm9tIFwiY29udmVydGVyc1wiLXByb3ApLlxuICogSXQgY29udmVydHMgbnVsbGFibGUgdmFsdWVzIGVpdGhlciB0byBudWxsIG9yIHVuZGVmaW5lZCwgYW5kIGl0IHdyYXBzL3Vud3JhcHMgZW51bXNcbiAqIGFuZCB1bmlvbnMuXG4gKlxuICogSXQgcHJlc2VydmVzIHN0cnVjdHVyYWwgaW50ZWdyaXR5IHdoZXJlIHBvc3NpYmxlLCBhbmQgcmV0dXJuIG5ldyBvYmplY3RzIHdoZXJlIHByb3BlcnRpZXNcbiAqIGhhdmUgYmVlbiBtb2RpZmllZC5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VyKFxuICByb290LFxuICBfaW5zdHJ1Y3Rpb25NYXBzLFxuICBjb252ZXJ0ZXJzLFxuICBudWxsYWJsZVZhbHVlLFxuICByb290T2JqZWN0S2V5XG4pIHtcbiAgaWYgKCFyb290KSB7XG4gICAgcmV0dXJuIG51bGxhYmxlVmFsdWU7XG4gIH1cblxuICB2YXIgaW5zdHJ1Y3Rpb25NYXBzID0gX2luc3RydWN0aW9uTWFwcyB8fCB7fTtcbiAgdmFyIGluc3RydWN0aW9uTWFwID0gaW5zdHJ1Y3Rpb25NYXBzW3Jvb3RPYmplY3RLZXkgfHwgXCJfX3Jvb3RcIl07XG5cbiAgLy8gTm8gaW5zdHJ1Y3Rpb25zXG4gIGlmICghaW5zdHJ1Y3Rpb25NYXApIHtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIHZhciBpbnN0cnVjdGlvblBhdGhzID0gT2JqZWN0LmtleXMoaW5zdHJ1Y3Rpb25NYXApO1xuXG4gIC8vIE5vdGhpbmcgdG8gY29udmVydCwgYmFpbCBlYXJseVxuICBpZiAoaW5zdHJ1Y3Rpb25QYXRocy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIC8vIFdlJ2xsIGFkZCBhIGdldEZyYWdtZW50UmVmcyBmdW5jdGlvbiB0byB0aGUgcm9vdCBpZiBuZWVkZWQgaGVyZS5cbiAgLy8gZ2V0RnJhZ21lbnRSZWZzIGlzIGN1cnJlbnRseSB0aGUgb25seSB0aGluZyB0aGF0J3MgcG9zc2libGUgdG8gYWRkXG4gIC8vIHRvIHRoZSByb290LlxuICB2YXIgZnJhZ21lbnRzT25Sb290ID0gKGluc3RydWN0aW9uTWFwW1wiXCJdIHx8IHt9KS5mID09PSBcIlwiO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHJvb3QpKSB7XG4gICAgcmV0dXJuIHJvb3QubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGxhYmxlVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ID09IG51bGxcbiAgICAgICAgPyBudWxsYWJsZVZhbHVlXG4gICAgICAgIDogdHJhdmVyc2UoXG4gICAgICAgICAgICBpbnN0cnVjdGlvbk1hcHMsXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIHYsXG4gICAgICAgICAgICBpbnN0cnVjdGlvbk1hcCxcbiAgICAgICAgICAgIGNvbnZlcnRlcnMsXG4gICAgICAgICAgICBudWxsYWJsZVZhbHVlLFxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25QYXRocyxcbiAgICAgICAgICAgIGZyYWdtZW50c09uUm9vdFxuICAgICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgcm9vdCk7XG5cbiAgdmFyIHYgPSB0cmF2ZXJzZShcbiAgICBpbnN0cnVjdGlvbk1hcHMsXG4gICAgW10sXG4gICAgbmV3T2JqLFxuICAgIGluc3RydWN0aW9uTWFwLFxuICAgIGNvbnZlcnRlcnMsXG4gICAgbnVsbGFibGVWYWx1ZSxcbiAgICBpbnN0cnVjdGlvblBhdGhzLFxuICAgIGZyYWdtZW50c09uUm9vdFxuICApO1xuXG4gIHJldHVybiB2O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdHJhdmVyc2VyIH07XG4iLCIvLyBUaGlzIGZpbGUgaXMgdXNlZCBhcyBhIGZpbGVuYW1lIHNoaW0gZm9yIHRoZSBhY3R1YWxcbi8vIEFwcC5yZSBSZWFzb24gY29tcG9uZW50XG5pbXBvcnQgeyBtYWtlIH0gZnJvbSBcIi4uL2NvbW1vbi9BcHAuYnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheS9ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWxheS9saWIvcmVsYXktZXhwZXJpbWVudGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbGF5LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=