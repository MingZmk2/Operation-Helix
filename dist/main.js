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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fetchPlayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fetchPlayers */ \"./src/scripts/fetchPlayers.js\");\n\n_scripts_fetchPlayers__WEBPACK_IMPORTED_MODULE_0__.fetchPlayers();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUQ7QUFFekRBLCtEQUEyQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlcmF0aW9uLWhlbGl4Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWxsUGxheWVyc0luZm8gZnJvbSBcIi4vc2NyaXB0cy9mZXRjaFBsYXllcnNcIjtcblxuYWxsUGxheWVyc0luZm8uZmV0Y2hQbGF5ZXJzKCk7XG4iXSwibmFtZXMiOlsiYWxsUGxheWVyc0luZm8iLCJmZXRjaFBsYXllcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fetchPlayers.js":
/*!*************************************!*\
  !*** ./src/scripts/fetchPlayers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPlayersData\": function() { return /* binding */ getPlayersData; }\n/* harmony export */ });\nconst getPlayersData = async function () {\n  const api_url = \"https://hltv-api.vercel.app/api/players.json\";\n  fetch(api_url).then(res => {\n    if (!res.ok) {\n      throw new Error(\"Network response was not ok\");\n    }\n    return res.json();\n  }).then(data => {\n    console.log(data);\n  }).catch(error => {\n    console.error(error);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaFBsYXllcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGNBQWMsR0FBRyxrQkFBa0I7RUFDOUMsTUFBTUMsT0FBTyxHQUFHLDhDQUE4QztFQUM5REMsS0FBSyxDQUFDRCxPQUFPLENBQUMsQ0FDWEUsSUFBSSxDQUFFQyxHQUFHLElBQUs7SUFDYixJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO01BQ1gsTUFBTSxJQUFJQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7SUFDaEQ7SUFDQSxPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtFQUNuQixDQUFDLENBQUMsQ0FDREosSUFBSSxDQUFFSyxJQUFJLElBQUs7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUNuQixDQUFDLENBQUMsQ0FDREcsS0FBSyxDQUFFQyxLQUFLLElBQUs7SUFDaEJILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZXJhdGlvbi1oZWxpeC8uL3NyYy9zY3JpcHRzL2ZldGNoUGxheWVycy5qcz8zNWNhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRQbGF5ZXJzRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYXBpX3VybCA9IFwiaHR0cHM6Ly9obHR2LWFwaS52ZXJjZWwuYXBwL2FwaS9wbGF5ZXJzLmpzb25cIjtcbiAgZmV0Y2goYXBpX3VybClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJnZXRQbGF5ZXJzRGF0YSIsImFwaV91cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/fetchPlayers.js\n");

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