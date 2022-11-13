/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fetchPlayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fetchPlayers */ \"./src/scripts/fetchPlayers.js\");\n\n_scripts_fetchPlayers__WEBPACK_IMPORTED_MODULE_0__.getPlayersData();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUQ7QUFFekRBLGlFQUE2QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlcmF0aW9uLWhlbGl4Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWxsUGxheWVyc0luZm8gZnJvbSBcIi4vc2NyaXB0cy9mZXRjaFBsYXllcnNcIjtcblxuYWxsUGxheWVyc0luZm8uZ2V0UGxheWVyc0RhdGEoKTtcbiJdLCJuYW1lcyI6WyJhbGxQbGF5ZXJzSW5mbyIsImdldFBsYXllcnNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fetchPlayers.js":
/*!*************************************!*\
  !*** ./src/scripts/fetchPlayers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPlayersData\": function() { return /* binding */ getPlayersData; }\n/* harmony export */ });\nconst getPlayersData = async function () {\n  fetch(\"http://localhost:5500/dist/teams.json\").then(res => {\n    if (!res.ok) {\n      throw new Error(\"Network response was not ok\");\n    }\n    return res.json();\n  }).then(data => {\n    console.log(data);\n  }).catch(error => {\n    console.error(error);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaFBsYXllcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGNBQWMsR0FBRyxrQkFBa0I7RUFDOUNDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUMzQ0MsSUFBSSxDQUFFQyxHQUFHLElBQUs7SUFDYixJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO01BQ1gsTUFBTSxJQUFJQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7SUFDaEQ7SUFDQSxPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtFQUNuQixDQUFDLENBQUMsQ0FDREosSUFBSSxDQUFFSyxJQUFJLElBQUs7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUNuQixDQUFDLENBQUMsQ0FDREcsS0FBSyxDQUFFQyxLQUFLLElBQUs7SUFDaEJILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZXJhdGlvbi1oZWxpeC8uL3NyYy9zY3JpcHRzL2ZldGNoUGxheWVycy5qcz8zNWNhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRQbGF5ZXJzRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjU1MDAvZGlzdC90ZWFtcy5qc29uXCIpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9KTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0UGxheWVyc0RhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/fetchPlayers.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVyYXRpb24taGVsaXgvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;