module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/html.js":
/*!************************!*\
  !*** ./server/html.js ***!
  \************************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
const html = `
<html>
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
</head>
<body>
  <div id="root"></div>
  <script type="text/javascript" src="/main.js"></script>
</body>
</html>
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9odG1sLmpzIl0sIm5hbWVzIjpbImh0bWwiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTUEsT0FBUTs7Ozs7Ozs7OztDQUFkIiwic291cmNlUm9vdCI6Ii9ob21lL2FldGhlcmFsbC9Xb3Jrc3BhY2Uvb21uaS1wYXJzZS9vbW5pIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGh0bWwgPSBgXG48aHRtbD5cbjxoZWFkPlxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwXCI+XG48L2hlYWQ+XG48Ym9keT5cbiAgPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5cbiAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiL21haW4uanNcIj48L3NjcmlwdD5cbjwvYm9keT5cbjwvaHRtbD5cbmBcbiJdfQ==

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html */ "./server/html.js");




const app = express__WEBPACK_IMPORTED_MODULE_0___default()();

app.get('/', (req, res) => {
  res.send(_html__WEBPACK_IMPORTED_MODULE_1__["html"]);
});

/* harmony default export */ __webpack_exports__["default"] = (clientStats => app);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwiaHRtbCIsImFwcCIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJjbGllbnRTdGF0cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsT0FBUCxNQUFvQixTQUFwQjs7QUFFQSxTQUFTQyxJQUFULFFBQXFCLFFBQXJCOztBQUVBLE1BQU1DLE1BQU1GLFNBQVo7O0FBRUFFLElBQUlDLEdBQUosQ0FBUSxHQUFSLEVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekJBLE1BQUlDLElBQUosQ0FBU0wsSUFBVDtBQUNELENBRkQ7O0FBSUEsZ0JBQWdCTSxXQUFELElBQWlCTCxHQUFoQyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hZXRoZXJhbGwvV29ya3NwYWNlL29tbmktcGFyc2Uvb21uaSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB7IGh0bWwgfSBmcm9tICcuL2h0bWwnXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKGh0bWwpXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoY2xpZW50U3RhdHMpID0+IGFwcCJdfQ==

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./server/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aetherall/Workspace/omni-parse/omni/server/index.js */"./server/index.js");


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map