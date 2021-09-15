/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./media/sound.mp3":
/*!*************************!*\
  !*** ./media/sound.mp3 ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/sound.mp3\");\n\n//# sourceURL=webpack://webpack-example/./media/sound.mp3?");

/***/ }),

/***/ "./css/style.sass":
/*!************************!*\
  !*** ./css/style.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-example/./css/style.sass?");

/***/ }),

/***/ "./src/checkItem.js":
/*!**************************!*\
  !*** ./src/checkItem.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkBlock\": () => (/* binding */ checkBlock)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\nfunction checkBlock() {\n    _main_js__WEBPACK_IMPORTED_MODULE_0__.checkBtns.addEventListener('click', (event) => {\n        for (let i = 0; i < _main_js__WEBPACK_IMPORTED_MODULE_0__.checkBtns.children.length; i++) {\n            _main_js__WEBPACK_IMPORTED_MODULE_0__.checkBtns.children[i].classList.remove('btnActive')\n        }\n        switch (event.target.innerText) {\n            case \"CalcDate\":\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.calcDataBlock.classList.remove('blockHidden')\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.timerBlock.classList.add('blockHidden')\n                event.target.classList.add('btnActive')\n                break;\n            case \"Timer\":\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.calcDataBlock.classList.add('blockHidden')\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.timerBlock.classList.remove('blockHidden')\n                event.target.classList.add('btnActive')\n\n                break;\n\n        }\n    })\n\n}\n\n\nfunction markBtn() {\n    console.log(_main_js__WEBPACK_IMPORTED_MODULE_0__.checkBtns);\n}\n\n//# sourceURL=webpack://webpack-example/./src/checkItem.js?");

/***/ }),

/***/ "./src/datecalc.js":
/*!*************************!*\
  !*** ./src/datecalc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatError\": () => (/* binding */ formatError),\n/* harmony export */   \"diffDates\": () => (/* binding */ diffDates),\n/* harmony export */   \"diffToHtml\": () => (/* binding */ diffToHtml)\n/* harmony export */ });\n/* harmony import */ var _luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luxon.js */ \"./src/luxon.js\");\n\n\nconst formatError = text => `\n<span style=\"color: red;\">\n    ${text}\n</span>\n`;\nfunction diffDates(firstDate, secondDate) {\n    firstDate = _luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(firstDate);\n    secondDate = _luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(secondDate);\n\n    if (firstDate > secondDate)\n        // secondDate = [firstDate, firstDate = secondDate][0];\n        [firstDate, secondDate] = [secondDate, firstDate];\n\n    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();\n}\n\nconst diffToHtml = diff => `\n    <span> \n        ${diff.years ? 'Лет: ' + diff.years : ''} \n        ${diff.months ? 'Месяцев: ' + diff.months : ''} \n        ${diff.days ? 'Дней: ' + diff.days : ''}\n    </span>\n`;\n\n//# sourceURL=webpack://webpack-example/./src/datecalc.js?");

/***/ }),

/***/ "./src/dcMain.js":
/*!***********************!*\
  !*** ./src/dcMain.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateCalcForm\": () => (/* binding */ dateCalcForm),\n/* harmony export */   \"handleCalcDates\": () => (/* binding */ handleCalcDates)\n/* harmony export */ });\n/* harmony import */ var _datecalc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datecalc.js */ \"./src/datecalc.js\");\n\n\nconst dateCalcForm = document.getElementById(\"datecalc\");\nconst dateCalcResult = document.getElementById(\"datecalc__result\");\n\nfunction handleCalcDates(event) {\n    event.preventDefault();\n    dateCalcResult.innerHTML = \"\";\n\n    let {\n        firstDate,\n        secondDate\n    } = event.target.elements;\n    firstDate = firstDate.value, secondDate = secondDate.value;\n\n    if (firstDate && secondDate) {\n        const diff = (0,_datecalc_js__WEBPACK_IMPORTED_MODULE_0__.diffDates)(firstDate, secondDate);\n        dateCalcResult.innerHTML = (0,_datecalc_js__WEBPACK_IMPORTED_MODULE_0__.diffToHtml)(diff);\n    } else dateCalcResult.innerHTML = (0,_datecalc_js__WEBPACK_IMPORTED_MODULE_0__.formatError)(\"Для расчета промежутка необходимо заполнить оба поля\");\n}\n\n//# sourceURL=webpack://webpack-example/./src/dcMain.js?");

/***/ }),

/***/ "./src/luxon.js":
/*!**********************!*\
  !*** ./src/luxon.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DateTime\": () => (/* binding */ DateTime)\n/* harmony export */ });\n\nlet DateTime = luxon.DateTime;\n\n//# sourceURL=webpack://webpack-example/./src/luxon.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sound\": () => (/* binding */ sound),\n/* harmony export */   \"checkBtns\": () => (/* binding */ checkBtns),\n/* harmony export */   \"calcDataBlock\": () => (/* binding */ calcDataBlock),\n/* harmony export */   \"timerBlock\": () => (/* binding */ timerBlock),\n/* harmony export */   \"startBtn\": () => (/* binding */ startBtn),\n/* harmony export */   \"stopBtn\": () => (/* binding */ stopBtn)\n/* harmony export */ });\n/* harmony import */ var _dcMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcMain.js */ \"./src/dcMain.js\");\n/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkItem.js */ \"./src/checkItem.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _media_sound_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/sound.mp3 */ \"./media/sound.mp3\");\n/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.sass */ \"./css/style.sass\");\n\n\n\n\n\nconsole.log('test webpack watching');\n\n\nconst sound = new Howl({\n    src: ['media/sound.mp3']\n});\nconst checkBtns = document.querySelector('.buttons')\nconst calcDataBlock = document.querySelector('.calcDateBlock')\nconst timerBlock = document.querySelector('.timerBlock')\nconst startBtn = document.getElementById('start')\nconst stopBtn = document.getElementById('stop')\n;(0,_checkItem_js__WEBPACK_IMPORTED_MODULE_1__.checkBlock)()\n\n_dcMain_js__WEBPACK_IMPORTED_MODULE_0__.dateCalcForm.addEventListener(\"submit\", _dcMain_js__WEBPACK_IMPORTED_MODULE_0__.handleCalcDates);\n_timer_js__WEBPACK_IMPORTED_MODULE_2__.start.addEventListener(\"click\", _timer_js__WEBPACK_IMPORTED_MODULE_2__.timerInit)\n_timer_js__WEBPACK_IMPORTED_MODULE_2__.stop.addEventListener(\"click\", _timer_js__WEBPACK_IMPORTED_MODULE_2__.stopTimer)\n\n\n//# sourceURL=webpack://webpack-example/./src/main.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"stop\": () => (/* binding */ stop),\n/* harmony export */   \"timerInit\": () => (/* binding */ timerInit),\n/* harmony export */   \"stopTimer\": () => (/* binding */ stopTimer)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\nconst inp = document.getElementById('timer');\nconst start = document.getElementById('start');\nconst stop = document.getElementById('stop');\n\n\nlet interval\nlet isPlay = false\n\nfunction timerInit() {\n    if (!isPlay) {\n        isPlay = true\n        interval = setInterval(function timer() {\n            if (inp.value > 0) {\n                inp.value--\n            } else if (inp.value == 0) {\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.sound.play();\n                isPlay = false;\n                clearInterval(interval);\n            }\n        }, 1000)\n\n    }\n}\n\nfunction stopTimer() {\n    isPlay = false\n    clearInterval(interval);\n}\n\n//# sourceURL=webpack://webpack-example/./src/timer.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;