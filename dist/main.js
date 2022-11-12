/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Index from \"./scripts/index\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new Index(main);\n});\nfetch(\"https://hltv-api.vercel.app/api/players.json\").then(res => {\n  res.json().then(data => {\n    console.log(data);\n  });\n}).catch(err => {\n  console.log(err);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJJbmRleCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVyYXRpb24taGVsaXgvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSW5kZXggZnJvbSBcIi4vc2NyaXB0cy9pbmRleFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG5ldyBJbmRleChtYWluKTtcbn0pO1xuXG5mZXRjaChcImh0dHBzOi8vaGx0di1hcGkudmVyY2VsLmFwcC9hcGkvcGxheWVycy5qc29uXCIpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLElBQUlDLEtBQUssQ0FBQ0YsSUFBSSxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGRyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FDbERDLElBQUksQ0FBRUMsR0FBRyxJQUFLO0VBQ2JBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUNGLElBQUksQ0FBRUcsSUFBSSxJQUFLO0lBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0VBQ25CLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUNERyxLQUFLLENBQUVDLEdBQUcsSUFBSztFQUNkSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVyYXRpb24taGVsaXgvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;