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

/***/ "./node_modules/css-loader/dist/cjs.js!./style/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/style.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --success-color: #2ecc71;\\n  --error-color: #e74c3c;\\n\\n  --clr-light: #fff;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: #f9fafb;\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  min-height: 100vh;\\n  margin: 0;\\n}\\n\\n.container {\\n  background-color: var(--clr-light);\\n  border-radius: 5px;\\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\\n  width: min-content;\\n  min-width: 350px;\\n}\\n\\nh2 {\\n  text-align: center;\\n  margin: 0 0 20px;\\n}\\n\\n.form {\\n  padding: 30px 40px;\\n}\\n\\n.form-control {\\n  /* margin-bottom: 10px; */\\n  padding-bottom: 10px;\\n  /* position: relative; */\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.form-control label {\\n  color: #777;\\n  display: block;\\n  margin-bottom: 5px;\\n}\\n.form-control input {\\n  border: 2px solid #f0f0f0;\\n  border-radius: 4px;\\n  display: block;\\n  width: 100%;\\n  padding: 10px;\\n  font-size: 14px;\\n}\\n\\n.form-control input:focus {\\n  outline: 0;\\n  border-color: #777;\\n}\\n\\n.form-control.success input {\\n  border-color: var(--success-color);\\n}\\n\\n.form-control.error input {\\n  border-color: var(--error-color);\\n}\\n\\n.form-control small {\\n  color: var(--error-color);\\n  /* position: absolute; */\\n  bottom: 0;\\n  left: 0;\\n  display: block;\\n  display: none;\\n}\\n\\n.form-control.error small {\\n  display: block;\\n}\\n\\n.form-control.success small {\\n  display: none;\\n}\\n\\n.form button {\\n  cursor: pointer;\\n  background-color: #3498db;\\n  border: 2px solid;\\n  border-radius: 4px;\\n  color: var(--clr-light);\\n  display: block;\\n  font-size: 16px;\\n  padding: 10px;\\n  margin-top: 20px;\\n  width: 100%;\\n}\\n\\n.password-container {\\n  position: relative;\\n}\\n\\n#show-hide-password-btn {\\n  position: absolute;\\n  inset-block-start: 11px;\\n  inset-inline-end: 6px;\\n  background-color: var(--clr-light);\\n  color: #777;\\n  border: none;\\n  margin: 0;\\n  padding: 0;\\n  width: min-content;\\n}\\n\\n@media (min-width: 600px) {\\n  .container {\\n    width: 400px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://form_validator/./style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://form_validator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://form_validator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://form_validator/./style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://form_validator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://form_validator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://form_validator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://form_validator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://form_validator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://form_validator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/utils/email-validation.js":
/*!*******************************************!*\
  !*** ./src/app/utils/email-validation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkEmail\": () => (/* binding */ checkEmail)\n/* harmony export */ });\n/* harmony import */ var _screen_alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-alerts */ \"./src/app/utils/screen-alerts.js\");\n\n\n// Email validation\nfunction checkEmail(input) {\n  const emailRegExp =\n    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;\n  if (!emailRegExp.test(String(input.value).trim().toLocaleLowerCase())) {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showError)(input, \"Email is not valid\");\n  } else {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(input);\n  }\n}\n\n\n//# sourceURL=webpack://form_validator/./src/app/utils/email-validation.js?");

/***/ }),

/***/ "./src/app/utils/get-field-name.js":
/*!*****************************************!*\
  !*** ./src/app/utils/get-field-name.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFieldName\": () => (/* binding */ getFieldName)\n/* harmony export */ });\n// Get fieldname by Id\nfunction getFieldName(input) {\n  return input.id.charAt(0).toUpperCase().concat(input.id.slice(1));\n}\n\n\n//# sourceURL=webpack://form_validator/./src/app/utils/get-field-name.js?");

/***/ }),

/***/ "./src/app/utils/password-validation.js":
/*!**********************************************!*\
  !*** ./src/app/utils/password-validation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkConfirmationPass\": () => (/* binding */ checkConfirmationPass),\n/* harmony export */   \"checkPassword\": () => (/* binding */ checkPassword),\n/* harmony export */   \"checkPasswordsMatch\": () => (/* binding */ checkPasswordsMatch)\n/* harmony export */ });\n/* harmony import */ var _screen_alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-alerts */ \"./src/app/utils/screen-alerts.js\");\n/* harmony import */ var _get_field_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-field-name */ \"./src/app/utils/get-field-name.js\");\n\n\n\nconst passwordValidatorRegExp =\n  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;\n\n// Check valid password\nfunction checkPassword(input, min) {\n  if (!passwordValidatorRegExp.test(input.value)) {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showError)(\n      input,\n      `${(0,_get_field_name__WEBPACK_IMPORTED_MODULE_1__.getFieldName)(\n        input\n      )} must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)`\n    );\n  } else {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(input);\n  }\n}\n\n// Check Password Confirmation\nfunction checkConfirmationPass(input) {\n  if (input.value.trim() === \"\") {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showError)(input, \"Password confirmation is required\");\n  } else {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(input);\n  }\n}\n\n// Check passwords match\nfunction checkPasswordsMatch(input1, input2) {\n  if (input1.value !== input2.value) {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showError)(input2, \"Passwords do not match\");\n  }\n}\n\n\n//# sourceURL=webpack://form_validator/./src/app/utils/password-validation.js?");

/***/ }),

/***/ "./src/app/utils/screen-alerts.js":
/*!****************************************!*\
  !*** ./src/app/utils/screen-alerts.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showError\": () => (/* binding */ showError),\n/* harmony export */   \"showSuccess\": () => (/* binding */ showSuccess)\n/* harmony export */ });\n// Show success - green input outline\nfunction showSuccess(input) {\n  const formControl = input.closest(\".form-control\");\n  formControl.className = \"form-control success\";\n}\n\n// Show error-red input outline + error message\nfunction showError(input, message) {\n  const formControl = input.closest(\".form-control\");\n  formControl.className = \"form-control error\";\n  const small = formControl.querySelector(\"small\");\n  small.innerText = message;\n}\n\n\n//# sourceURL=webpack://form_validator/./src/app/utils/screen-alerts.js?");

/***/ }),

/***/ "./src/app/utils/toggle-btn-icon.js":
/*!******************************************!*\
  !*** ./src/app/utils/toggle-btn-icon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleBtnIcon\": () => (/* binding */ toggleBtnIcon)\n/* harmony export */ });\n// Toggle Visibility password button\nfunction toggleBtnIcon(btn, iconOne, iconTwo) {\n  let iconClassName = btn.className;\n  iconClassName === iconOne\n    ? (btn.className = iconTwo)\n    : (btn.className = iconOne);\n}\n\n\n//# sourceURL=webpack://form_validator/./src/app/utils/toggle-btn-icon.js?");

/***/ }),

/***/ "./src/app/utils/toggle-input-visibility.js":
/*!**************************************************!*\
  !*** ./src/app/utils/toggle-input-visibility.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleInputVisibility\": () => (/* binding */ toggleInputVisibility)\n/* harmony export */ });\n// Visibility password button\nfunction toggleInputVisibility(element) {\n  element.type === \"password\"\n    ? (element.type = \"text\")\n    : (element.type = \"password\");\n}\n\n\n//# sourceURL=webpack://form_validator/./src/app/utils/toggle-input-visibility.js?");

/***/ }),

/***/ "./src/app/utils/username-validation.js":
/*!**********************************************!*\
  !*** ./src/app/utils/username-validation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkUsernameLength\": () => (/* binding */ checkUsernameLength)\n/* harmony export */ });\n/* harmony import */ var _screen_alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen-alerts */ \"./src/app/utils/screen-alerts.js\");\n/* harmony import */ var _get_field_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-field-name */ \"./src/app/utils/get-field-name.js\");\n\n\n\n// Check Username length\nfunction checkUsernameLength(input, min, max) {\n  if (input.value.length <= min) {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showError)(\n      input,\n      `${(0,_get_field_name__WEBPACK_IMPORTED_MODULE_1__.getFieldName)(input)} must be at least ${min} characters`\n    );\n  } else if (input.value.length >= max) {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showError)(\n      input,\n      `${(0,_get_field_name__WEBPACK_IMPORTED_MODULE_1__.getFieldName)(input)} must be less than ${max} characters`\n    );\n  } else {\n    (0,_screen_alerts__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(input);\n  }\n}\n\n\n//# sourceURL=webpack://form_validator/./src/app/utils/username-validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_utils_password_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/utils/password-validation */ \"./src/app/utils/password-validation.js\");\n/* harmony import */ var _app_utils_username_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/utils/username-validation */ \"./src/app/utils/username-validation.js\");\n/* harmony import */ var _app_utils_email_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/utils/email-validation */ \"./src/app/utils/email-validation.js\");\n/* harmony import */ var _app_utils_toggle_input_visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/utils/toggle-input-visibility */ \"./src/app/utils/toggle-input-visibility.js\");\n/* harmony import */ var _app_utils_toggle_btn_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/utils/toggle-btn-icon */ \"./src/app/utils/toggle-btn-icon.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style.css */ \"./style/style.css\");\n\n\n\n\n\n\n\nconst form = document.getElementById(\"form\");\n\n// Text inputs\nconst username = document.getElementById(\"username\"),\n  email = document.getElementById(\"email\"),\n  password = document.getElementById(\"password\"),\n  password2 = document.getElementById(\"password2\"),\n  togglePasswordVisibilityBtn = document.getElementById(\n    \"show-hide-password-btn\"\n  );\nconst visibilityIcon = document.getElementById(\"visibility-icon\");\nconst showTextIcon = \"fa-regular fa-eye\",\n  hideTextIcon = \"fa-regular fa-eye-slash\";\n\n// Event listeners & Validation\nform.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n\n  (0,_app_utils_password_validation__WEBPACK_IMPORTED_MODULE_0__.checkConfirmationPass)(password2);\n  (0,_app_utils_username_validation__WEBPACK_IMPORTED_MODULE_1__.checkUsernameLength)(username, 3, 15);\n  (0,_app_utils_password_validation__WEBPACK_IMPORTED_MODULE_0__.checkPassword)(password);\n  (0,_app_utils_email_validation__WEBPACK_IMPORTED_MODULE_2__.checkEmail)(email);\n  (0,_app_utils_password_validation__WEBPACK_IMPORTED_MODULE_0__.checkPasswordsMatch)(password, password2);\n});\n\ntogglePasswordVisibilityBtn.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  (0,_app_utils_toggle_input_visibility__WEBPACK_IMPORTED_MODULE_3__.toggleInputVisibility)(password);\n  (0,_app_utils_toggle_input_visibility__WEBPACK_IMPORTED_MODULE_3__.toggleInputVisibility)(password2);\n  (0,_app_utils_toggle_btn_icon__WEBPACK_IMPORTED_MODULE_4__.toggleBtnIcon)(visibilityIcon, showTextIcon, hideTextIcon);\n});\n\n\n//# sourceURL=webpack://form_validator/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;