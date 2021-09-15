"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkJS_buildPart"] = self["webpackChunkJS_buildPart"] || []).push([["main"],{

/***/ "./src/checkItem.js":
/*!**************************!*\
  !*** ./src/checkItem.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkBlock\": () => (/* binding */ checkBlock)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\nfunction checkBlock() {\n    _main_js__WEBPACK_IMPORTED_MODULE_0__.checkBtns.addEventListener('click', (event) => {\n        for (let i = 0; i < _main_js__WEBPACK_IMPORTED_MODULE_0__.checkBtns.children.length; i++) {\n            _main_js__WEBPACK_IMPORTED_MODULE_0__.checkBtns.children[i].classList.remove('btnActive')\n        }\n        switch (event.target.innerText) {\n            case \"CalcDate\":\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.calcDataBlock.classList.remove('blockHidden')\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.timerBlock.classList.add('blockHidden')\n                event.target.classList.add('btnActive')\n                break;\n            case \"Timer\":\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.calcDataBlock.classList.add('blockHidden')\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.timerBlock.classList.remove('blockHidden')\n                event.target.classList.add('btnActive')\n\n                break;\n\n        }\n    })\n\n}\n\n\nfunction markBtn() {\n    console.log(_main_js__WEBPACK_IMPORTED_MODULE_0__.checkBtns);\n}\n\n//# sourceURL=webpack://JS.buildPart/./src/checkItem.js?");

/***/ }),

/***/ "./src/datecalc.js":
/*!*************************!*\
  !*** ./src/datecalc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatError\": () => (/* binding */ formatError),\n/* harmony export */   \"diffDates\": () => (/* binding */ diffDates),\n/* harmony export */   \"diffToHtml\": () => (/* binding */ diffToHtml)\n/* harmony export */ });\n/* harmony import */ var _luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luxon.js */ \"./src/luxon.js\");\n\n\nconst formatError = text => `\n<span style=\"color: red;\">\n    ${text}\n</span>\n`;\nfunction diffDates(firstDate, secondDate) {\n    firstDate = _luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(firstDate);\n    secondDate = _luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(secondDate);\n\n    if (firstDate > secondDate)\n        // secondDate = [firstDate, firstDate = secondDate][0];\n        [firstDate, secondDate] = [secondDate, firstDate];\n\n    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();\n}\n\nconst diffToHtml = diff => `\n    <span> \n        ${diff.years ? 'Лет: ' + diff.years : ''} \n        ${diff.months ? 'Месяцев: ' + diff.months : ''} \n        ${diff.days ? 'Дней: ' + diff.days : ''}\n    </span>\n`;\n\n//# sourceURL=webpack://JS.buildPart/./src/datecalc.js?");

/***/ }),

/***/ "./src/dcMain.js":
/*!***********************!*\
  !*** ./src/dcMain.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateCalcForm\": () => (/* binding */ dateCalcForm),\n/* harmony export */   \"handleCalcDates\": () => (/* binding */ handleCalcDates)\n/* harmony export */ });\n/* harmony import */ var _datecalc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datecalc.js */ \"./src/datecalc.js\");\n\n\nconst dateCalcForm = document.getElementById(\"datecalc\");\nconst dateCalcResult = document.getElementById(\"datecalc__result\");\n\nfunction handleCalcDates(event) {\n    event.preventDefault();\n    dateCalcResult.innerHTML = \"\";\n\n    let {\n        firstDate,\n        secondDate\n    } = event.target.elements;\n    firstDate = firstDate.value, secondDate = secondDate.value;\n\n    if (firstDate && secondDate) {\n        const diff = (0,_datecalc_js__WEBPACK_IMPORTED_MODULE_0__.diffDates)(firstDate, secondDate);\n        dateCalcResult.innerHTML = (0,_datecalc_js__WEBPACK_IMPORTED_MODULE_0__.diffToHtml)(diff);\n    } else dateCalcResult.innerHTML = (0,_datecalc_js__WEBPACK_IMPORTED_MODULE_0__.formatError)(\"Для расчета промежутка необходимо заполнить оба поля\");\n}\n\n//# sourceURL=webpack://JS.buildPart/./src/dcMain.js?");

/***/ }),

/***/ "./src/luxon.js":
/*!**********************!*\
  !*** ./src/luxon.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DateTime\": () => (/* binding */ DateTime)\n/* harmony export */ });\nlet DateTime = luxon.DateTime;\n\n//# sourceURL=webpack://JS.buildPart/./src/luxon.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sound\": () => (/* binding */ sound),\n/* harmony export */   \"checkBtns\": () => (/* binding */ checkBtns),\n/* harmony export */   \"calcDataBlock\": () => (/* binding */ calcDataBlock),\n/* harmony export */   \"timerBlock\": () => (/* binding */ timerBlock),\n/* harmony export */   \"startBtn\": () => (/* binding */ startBtn),\n/* harmony export */   \"stopBtn\": () => (/* binding */ stopBtn)\n/* harmony export */ });\n/* harmony import */ var _dcMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcMain.js */ \"./src/dcMain.js\");\n/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkItem.js */ \"./src/checkItem.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n\n\n\n\nconst sound = new Howl({\n    src: ['media/sound.mp3']\n});\nconst checkBtns = document.querySelector('.buttons')\nconst calcDataBlock = document.querySelector('.calcDateBlock')\nconst timerBlock = document.querySelector('.timerBlock')\nconst startBtn = document.getElementById('start')\nconst stopBtn = document.getElementById('stop')\n;(0,_checkItem_js__WEBPACK_IMPORTED_MODULE_1__.checkBlock)()\n\n_dcMain_js__WEBPACK_IMPORTED_MODULE_0__.dateCalcForm.addEventListener(\"submit\", _dcMain_js__WEBPACK_IMPORTED_MODULE_0__.handleCalcDates);\n_timer_js__WEBPACK_IMPORTED_MODULE_2__.start.addEventListener(\"click\", _timer_js__WEBPACK_IMPORTED_MODULE_2__.timerInit)\n_timer_js__WEBPACK_IMPORTED_MODULE_2__.stop.addEventListener(\"click\", _timer_js__WEBPACK_IMPORTED_MODULE_2__.stopTimer)\n\n//# sourceURL=webpack://JS.buildPart/./src/main.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"stop\": () => (/* binding */ stop),\n/* harmony export */   \"timerInit\": () => (/* binding */ timerInit),\n/* harmony export */   \"stopTimer\": () => (/* binding */ stopTimer)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\nconst inp = document.getElementById('timer');\nconst start = document.getElementById('start');\nconst stop = document.getElementById('stop');\n\n\nlet interval\nlet isPlay = false\n\nfunction timerInit() {\n    if (!isPlay) {\n        isPlay = true\n        interval = setInterval(function timer() {\n            if (inp.value > 0) {\n                inp.value--\n            } else if (inp.value == 0) {\n                _main_js__WEBPACK_IMPORTED_MODULE_0__.sound.play();\n                isPlay = false;\n                clearInterval(interval);\n            }\n        }, 1000)\n\n    }\n}\n\nfunction stopTimer() {\n    isPlay = false\n    clearInterval(interval);\n}\n\n//# sourceURL=webpack://JS.buildPart/./src/timer.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);