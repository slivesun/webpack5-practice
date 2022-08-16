"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_auto"] = self["webpackChunkproject_auto"] || []).push([["another"],{

/***/ "./src/another-module.js":
/*!*******************************!*\
  !*** ./src/another-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ \"./src/print.js\");\n\r\n\r\n\r\nconst element = document.createElement('div');\r\nconst btn = document.createElement('button');\r\nelement.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webdddpack'], ' ');\r\nbtn.innerHTML = 'asdasd!';\r\nbtn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\nconsole.log(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Another', 'module', 'loaded!'], ' '));\n\n//# sourceURL=webpack://project-auto/./src/another-module.js?");

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ printMe)\n/* harmony export */ });\n\r\nfunction printMe() {\r\n    console.log('I get called from print.js!');\r\n    // cosnole.log('asdsdt.js!');\r\n}\n\n//# sourceURL=webpack://project-auto/./src/print.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/another-module.js"));
/******/ }
]);