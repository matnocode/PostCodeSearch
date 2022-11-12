/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ "./src/modules/form.js");
/* harmony import */ var _modules_getPostCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getPostCode */ "./src/modules/getPostCode.js");


(0,_modules_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_getPostCode__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/ajaxService.js":
/*!************************************!*\
  !*** ./src/modules/ajaxService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxService = function ajaxService(term) {
  var url = "https://api.postit.lt/?term=";
  var key = "TNLejJwAEtQH6SpvEZKy";
  return fetch("".concat(url).concat(term, "&key=").concat(key)).then(function (response) {
    return response.json();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxService);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getForm */ "./src/modules/getForm.js");

var renderForm = function renderForm() {
  var element = document.createElement("test");
  element.className = "container test";
  element.innerHTML = (0,_getForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
  console.log("??");
  document.querySelector(".data-body").appendChild(element);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/modules/getForm.js":
/*!********************************!*\
  !*** ./src/modules/getForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getForm = function getForm() {
  return "\n    <form>\n  <div class=\"form-group\">\n    <label>Paieskos Adresas</label>\n    <input type=\"text\" class=\"form-control\" id=\"addressInput\" placeholder=\"Iveskite Adresa...\">\n    <small class=\"form-text text-muted\">Vietos adresas is visos lietuvos</small>     \n  </div>\n  \n  <button type=\"submit\" class=\"btn btn-secondary\">Gauti</button>\n  \n  <div class=\"form-group\">\n    <h3 style=\"text-align: center;\">Rezultatas</h3>\n    <hr>\n     <label>Pasto Kodas</label>\n     <input type=\"text\" class=\"form-control\" id=\"postCodeResult\" placeholder=\"Gaunamas Pasto Kodas...\">\n     \n     <label>Miestas</label>\n     <input type=\"text\" class=\"form-control\" id=\"postCodeCity\" placeholder=\"Gaunamas Miesto Pavadinimas...\">\n     \n     <label>Savivaldybe</label>\n      <input type=\"text\" class=\"form-control\" id=\"postCodeMunicipality\" placeholder=\"Gaunamas Savivaldybes Pavadinimas...\">\n     \n      <label>Pastas</label>\n      <input type=\"text\" class=\"form-control\" id=\"postCodePost\" placeholder=\"Gaunamas Pasto Pavadinimas...\">\n     \n     <label>Gatve</label>\n     <input type=\"text\" class=\"form-control\" id=\"postCodeStreet\" placeholder=\"Gaunamas Gatves Pavadinimas...\">\n     \n     <label>Pilnas Adresas</label>\n     <input type=\"text\" class=\"form-control\" id=\"postCodeFull\" placeholder=\"Laukiama...\">\n  </div>\n\n</form>\n    ";
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getForm);

/***/ }),

/***/ "./src/modules/getPostCode.js":
/*!************************************!*\
  !*** ./src/modules/getPostCode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxService */ "./src/modules/ajaxService.js");

var GetCode = function GetCode() {
  document.querySelector('form').addEventListener("submit", function (event) {
    event.preventDefault();
    var searchTerm = document.querySelector('#addressInput').value;
    console.log(searchTerm);
    var response;
    (0,_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm).then(function (result) {
      return response = result;
    }).then(function () {
      return console.log(response);
    }).then(function () {
      document.querySelector("#postCodeResult").value = response.data[0].post_code;
      document.querySelector("#postCodeCity").value = response.data[0].city;
      document.querySelector("#postCodeMunicipality").value = response.data[0].municipality;
      document.querySelector("#postCodePost").value = response.data[0].post;
      document.querySelector("#postCodeStreet").value = response.data[0].street;
      document.querySelector("#postCodeFull").value = "".concat(response.data[0].address, ", ").concat(response.data[0].city, ", ").concat(response.data[0].post_code);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetCode);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjs_work"] = self["webpackChunkjs_work"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;