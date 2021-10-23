/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: 'Balsamiq Sans', cursive;\n  line-height: 24px;\n  font-weight: normal;\n  font-style: normal;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  list-style-type: none;\n  display: flex;\n}\n\nheader ul li {\n  margin-inline: 1.5em;\n}\n\nheader ul li a {\n  text-decoration: none;\n  color: black;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.logo img {\n  width: 4em;\n  height: 4em;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n}\n\n.loader {\n  padding-left: 50%;\n  padding-top: 7%;\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.border {\n  border: 1px solid red;\n}\n\n.card-image img {\n  width: 99%;\n}\n\n.grid {\n  display: grid;\n}\n\n.align-center {\n  justify-content: center;\n}\n\n.btn {\n  box-shadow: 4px 5px 2px black;\n  background-color: white;\n  border: 1px solid black;\n  font-family: 'Balsamiq Sans', cursive;\n}\n\n.p {\n  padding: 5px;\n}\n\n.p p {\n  margin: 0;\n}\n\n.grid-col-5 {\n  grid-template-columns: auto;\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n}\n\n.fixed {\n  position: fixed;\n  left: 0;\n  top: 0;\n  transition: left 1s, top 1s, position 2s;\n}\n\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  transition: left 1s, top 1s, position 2s;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.shadow {\n  box-shadow: 0 13px 12px rgba(0, 0, 0, 0.5);\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.card {\n  padding-bottom: 5px;\n}\n\n.card:hover {\n  cursor: pointer;\n  box-shadow: -1px 2px 17px rgba(0, 0, 0, 0.5);\n}\n\n.btn:hover {\n  background-color: green;\n  cursor: pointer;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.comment-section {\n  display: grid;\n  grid-template-rows: auto auto auto;\n  border: 0.1em solid black;\n  box-shadow: 1px 1px 27px rgba(0, 0, 0, 0.7);\n  position: fixed;\n  background-color: white;\n  z-index: 2;\n  height: 450px;\n  width: 80%;\n  overflow-y: scroll;\n  left: -100%;\n  top: -100%;\n  transition: left 1s, top 1s;\n}\n\n.serie {\n  display: grid !important;\n  width: 99%;\n  margin: 0 !important;\n  grid-template-rows: 50% 50% !important;\n  row-gap: 50px;\n}\n\n.serie-image img {\n  height: 25em;\n  width: 90%;\n}\n\n.button-submit {\n  box-shadow: 4px 5px 2px black;\n  background-color: white;\n  border: 1px solid black;\n  font-family: 'Balsamiq Sans', cursive;\n  margin-bottom: 5em;\n}\n\n.button-submit:hover {\n  background-color: green;\n  cursor: pointer;\n}\n\n.x-icon {\n  height: 5em;\n  width: 5em;\n}\n\n.x-icon:hover {\n  cursor: pointer;\n}\n\n.visible {\n  top: 5%;\n  left: 15%;\n}\n\n.error {\n  color: red;\n}\n\n@media screen and (min-width: 780px) {\n  .card {\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 200px;\n  }\n\n  .grid-col-6 {\n    grid-template-columns: auto auto auto auto auto auto;\n    grid-row-gap: 20px;\n    grid-column-gap: 20px;\n  }\n\n  #number {\n    border-radius: 6px;\n    width: 70px;\n    color: white;\n    background-color: green;\n  }\n\n  .item:hover {\n    color: green;\n  }\n\n  .serie {\n    display: grid !important;\n    width: 99%;\n    margin: 0 !important;\n    grid-template-columns: 35% 50% !important;\n  }\n\n  .comment-section {\n    display: grid;\n    grid-template-rows: auto auto auto;\n    border: 0.1em solid black;\n    box-shadow: 1px 1px 27px rgba(0, 0, 0, 0.7);\n    position: fixed;\n    background-color: white;\n    z-index: 2;\n    height: 500px;\n    width: 70%;\n    overflow-y: scroll;\n    left: -100%;\n    top: -100%;\n    transition: left 1s, top 1s;\n  }\n\n  .visible {\n    top: 5%;\n    left: 15%;\n  }\n}\n\n.active {\n  color: green;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qCAAqC;EACrC,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;EACvB,uBAAuB;EACvB,qCAAqC;AACvC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,OAAO;EACP,MAAM;EACN,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,OAAO;EACP,SAAS;EACT,wCAAwC;AAC1C;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,4CAA4C;AAC9C;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,yBAAyB;EACzB,2CAA2C;EAC3C,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,UAAU;EACV,oBAAoB;EACpB,sCAAsC;EACtC,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;EACvB,uBAAuB;EACvB,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,aAAa;IACb,0BAA0B;IAC1B,YAAY;EACd;;EAEA;IACE,oDAAoD;IACpD,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;EACzB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,wBAAwB;IACxB,UAAU;IACV,oBAAoB;IACpB,yCAAyC;EAC3C;;EAEA;IACE,aAAa;IACb,kCAAkC;IAClC,yBAAyB;IACzB,2CAA2C;IAC3C,eAAe;IACf,uBAAuB;IACvB,UAAU;IACV,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,2BAA2B;EAC7B;;EAEA;IACE,OAAO;IACP,SAAS;EACX;AACF;;AAEA;EACE,YAAY;AACd","sourcesContent":["body {\n  font-family: 'Balsamiq Sans', cursive;\n  line-height: 24px;\n  font-weight: normal;\n  font-style: normal;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  list-style-type: none;\n  display: flex;\n}\n\nheader ul li {\n  margin-inline: 1.5em;\n}\n\nheader ul li a {\n  text-decoration: none;\n  color: black;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.logo img {\n  width: 4em;\n  height: 4em;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n}\n\n.loader {\n  padding-left: 50%;\n  padding-top: 7%;\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.border {\n  border: 1px solid red;\n}\n\n.card-image img {\n  width: 99%;\n}\n\n.grid {\n  display: grid;\n}\n\n.align-center {\n  justify-content: center;\n}\n\n.btn {\n  box-shadow: 4px 5px 2px black;\n  background-color: white;\n  border: 1px solid black;\n  font-family: 'Balsamiq Sans', cursive;\n}\n\n.p {\n  padding: 5px;\n}\n\n.p p {\n  margin: 0;\n}\n\n.grid-col-5 {\n  grid-template-columns: auto;\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n}\n\n.fixed {\n  position: fixed;\n  left: 0;\n  top: 0;\n  transition: left 1s, top 1s, position 2s;\n}\n\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  transition: left 1s, top 1s, position 2s;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.shadow {\n  box-shadow: 0 13px 12px rgba(0, 0, 0, 0.5);\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.m-0 {\n  margin: 0;\n}\n\n.card {\n  padding-bottom: 5px;\n}\n\n.card:hover {\n  cursor: pointer;\n  box-shadow: -1px 2px 17px rgba(0, 0, 0, 0.5);\n}\n\n.btn:hover {\n  background-color: green;\n  cursor: pointer;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.comment-section {\n  display: grid;\n  grid-template-rows: auto auto auto;\n  border: 0.1em solid black;\n  box-shadow: 1px 1px 27px rgba(0, 0, 0, 0.7);\n  position: fixed;\n  background-color: white;\n  z-index: 2;\n  height: 450px;\n  width: 80%;\n  overflow-y: scroll;\n  left: -100%;\n  top: -100%;\n  transition: left 1s, top 1s;\n}\n\n.serie {\n  display: grid !important;\n  width: 99%;\n  margin: 0 !important;\n  grid-template-rows: 50% 50% !important;\n  row-gap: 50px;\n}\n\n.serie-image img {\n  height: 25em;\n  width: 90%;\n}\n\n.button-submit {\n  box-shadow: 4px 5px 2px black;\n  background-color: white;\n  border: 1px solid black;\n  font-family: 'Balsamiq Sans', cursive;\n  margin-bottom: 5em;\n}\n\n.button-submit:hover {\n  background-color: green;\n  cursor: pointer;\n}\n\n.x-icon {\n  height: 5em;\n  width: 5em;\n}\n\n.x-icon:hover {\n  cursor: pointer;\n}\n\n.visible {\n  top: 5%;\n  left: 15%;\n}\n\n.error {\n  color: red;\n}\n\n@media screen and (min-width: 780px) {\n  .card {\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 200px;\n  }\n\n  .grid-col-6 {\n    grid-template-columns: auto auto auto auto auto auto;\n    grid-row-gap: 20px;\n    grid-column-gap: 20px;\n  }\n\n  #number {\n    border-radius: 6px;\n    width: 70px;\n    color: white;\n    background-color: green;\n  }\n\n  .item:hover {\n    color: green;\n  }\n\n  .serie {\n    display: grid !important;\n    width: 99%;\n    margin: 0 !important;\n    grid-template-columns: 35% 50% !important;\n  }\n\n  .comment-section {\n    display: grid;\n    grid-template-rows: auto auto auto;\n    border: 0.1em solid black;\n    box-shadow: 1px 1px 27px rgba(0, 0, 0, 0.7);\n    position: fixed;\n    background-color: white;\n    z-index: 2;\n    height: 500px;\n    width: 70%;\n    overflow-y: scroll;\n    left: -100%;\n    top: -100%;\n    transition: left 1s, top 1s;\n  }\n\n  .visible {\n    top: 5%;\n    left: 15%;\n  }\n}\n\n.active {\n  color: green;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/AppId.js":
/*!**********************!*\
  !*** ./src/AppId.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppId)
/* harmony export */ });
class AppId {
    static loadId = async () => {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
        {
          method: 'POST',
          header: 'Content-type: application/json; charset=utf-8',
        })
        .then((res) => res.text())
        .then((data) => {
          localStorage.setItem('appId', data);
          // console.log('appId:', data);
        });
    }

    static saveLikes = (data) => {
      localStorage.setItem('likes', JSON.stringify(data));
    }

    static getLikes = () => {
      if (localStorage.getItem('likes')) { return JSON.parse(localStorage.getItem('likes')); }
      return [];
    }
}

/***/ }),

/***/ "./src/ImgElement.js":
/*!***************************!*\
  !*** ./src/ImgElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImgElement)
/* harmony export */ });
class ImgElement {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.img = document.createElement('img');
    this.img.style.width = this.width;
    this.img.style.height = this.height;
  }

  getImage = () => this.img;
}

/***/ }),

/***/ "./src/Utilities.js":
/*!**************************!*\
  !*** ./src/Utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utilities)
/* harmony export */ });
class Utilities {
    static hover = ({ element, img1, img2 }) => {
      const elements = document.querySelectorAll(element);
      elements.forEach((el) => {
        el.addEventListener('mouseover', () => {
          el.src = img2;
        });
        el.addEventListener('mouseout', () => {
          el.src = img1;
        });
      });
    }

    static counter = (data) => {
      if (Array.isArray(data)) { return data.length; }
      return 0;
    }
}

/***/ }),

/***/ "./src/count-comment.js":
/*!******************************!*\
  !*** ./src/count-comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (json) => {
  const { length } = json;
  document.querySelector('.comment-heading').innerHTML = `Comments(${length})`;
  return length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayComments": () => (/* binding */ displayComments),
/* harmony export */   "displayInfo": () => (/* binding */ displayInfo)
/* harmony export */ });
const info = document.querySelector('.information');
const comments = document.querySelector('.comments');

/**
 * Function for displaying comments
 */
const displayComments = (data) => {
  const template = `
      <section class="comment-div text-center">
      <span>${data.creation_date}</span>
      <span>${data.username}:</span>
      <span>${data.comment}</span>
      </section>
      
      `;
  comments.innerHTML += template;
};

/**
 * Display data about a particular series
 */
const displayInfo = (data) => {
  const template = `
      <div class="serie" id="${data.id}">
        <div class="serie-image text-center">
          <img src="${data.image.medium}">
        </div>
  
        <div>
         <p class="serie-title p">
          Name: ${data.name}
         </p>
         <p>
          Rating: ${data.rating.average}
         </p>
         <p class="serie-description p">
          ${data.summary}
         </p>
        </div>
  </div>
      
      `;
  info.innerHTML = template;
};


/***/ }),

/***/ "./src/images/heart-green.png":
/*!************************************!*\
  !*** ./src/images/heart-green.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e555d0695bcd17f985ae.png";

/***/ }),

/***/ "./src/images/heart.png":
/*!******************************!*\
  !*** ./src/images/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46ba704d7ece95800b4b.png";

/***/ }),

/***/ "./src/images/loading.gif":
/*!********************************!*\
  !*** ./src/images/loading.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7d9f0819b0870f9ad8e.gif";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "817ffce9c4dfc6b4147a.png";

/***/ }),

/***/ "./src/images/xicon.jpg":
/*!******************************!*\
  !*** ./src/images/xicon.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18d972c1eef0edca98d4.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImgElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImgElement.js */ "./src/ImgElement.js");
/* harmony import */ var _count_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count-comment.js */ "./src/count-comment.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _AppId_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppId.js */ "./src/AppId.js");
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilities.js */ "./src/Utilities.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_xicon_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/xicon.jpg */ "./src/images/xicon.jpg");
/* harmony import */ var _images_loading_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/loading.gif */ "./src/images/loading.gif");
/* harmony import */ var _images_heart_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/heart.png */ "./src/images/heart.png");
/* harmony import */ var _images_heart_green_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/heart-green.png */ "./src/images/heart-green.png");











// import Comment from './Comments.js';

const img = document.querySelector('.logo-image');
const img2 = document.querySelector('.x-icon');
const content = document.querySelector('.content');
const header = document.querySelector('#header');
const counter = document.querySelector('#number');
const ImgLoader = new _ImgElement_js__WEBPACK_IMPORTED_MODULE_0__["default"](20, 20);
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
let systemId = '';
const init = {
  data: [],
};
img.setAttribute('src', _images_logo_png__WEBPACK_IMPORTED_MODULE_6__);
const limit = { inf: 0, sup: 50 };
img2.setAttribute('src', _images_xicon_jpg__WEBPACK_IMPORTED_MODULE_7__);

/**
 * this function fetch data from the API comment endpoint
 */
const getComments = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lGB5hHvtBzDxEydBmgFk/comments?item_id=${id}`)
    .then((resp) => resp.json())
    .then((json) => {
      if (json.error) {
        const json = [];
        const p = document.createElement('p');
        p.innerHTML = 'Add a new comment';
        document.querySelector('.comments').appendChild(p);
        (0,_count_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(json);
      } else {
        json.forEach((element) => {
          (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayComments)(element);
          (0,_count_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(json);
        });
      }
    });
};

/**
 * Event for implementing comment popup
 */
const addButtonListen = async () => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      document.querySelector('.comment-section').classList.add('visible');
      const { id } = btn.parentElement.parentElement;

      /**
 * Get information about series to display
 */
      fetch('https://api.tvmaze.com/shows')
        .then((resp) => resp.json())
        .then((datum) => {
          if (id <= 16) {
            (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayInfo)(datum[id - 1]);
          } else if (id <= 35) {
            (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayInfo)(datum[id - 2]);
          } else {
            (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayInfo)(datum[id - 3]);
          }
        });

      getComments(id);

      /**
 * Function to post comments to API
 */
      document.querySelector('.button-submit').addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('#message').value === '' || document.querySelector('.name').value === '') {
          document.querySelector('.error').innerHTML = 'Fill in all emtpy fields';
        } else {
          document.querySelector('.error').innerHTML = '';
          const name = document.querySelector('.name').value;
          const message = document.querySelector('#message').value;
          const postComments = async () => {
            const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lGB5hHvtBzDxEydBmgFk/comments', {
              method: 'post',
              body: JSON.stringify({
                item_id: id,
                username: name,
                comment: message,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
            /*eslint-disable*/
            const json = await response.text();
            console.log(json);
            document.querySelector('.comments').innerHTML = ''
            getComments(id);
          };
  
          document.querySelector('.name').value = '';
          document.querySelector('#message').value = '';
          postComments(); 
        }
      });
    });
  });
};

if (localStorage.getItem('appId')) systemId = localStorage.getItem('appId');
else {
  _AppId_js__WEBPACK_IMPORTED_MODULE_3__["default"].loadId();
  systemId = localStorage.getItem('appId');
}
const getLikes = async () => {
  await fetch(`${baseUrl}${systemId}/likes/`)
    .then((r) => r.json())
    .then((data) => {
      _AppId_js__WEBPACK_IMPORTED_MODULE_3__["default"].saveLikes(data);
    });
};

const addLike = (id, data) => {
  fetch(`${baseUrl}${id}/likes/`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(data),
    })
    .then((res) => res.text())
    .then((data) => data);
};
/**
 * display a like after to click on the like button
 * @param {elementNode} node 
 * @param {integer} id 
 */
const displayLike = async (node, id) => {
    const brother = node.nextSibling;
    brother.innerHTML = parseInt(brother.innerHTML,10)+1;
};
const giveLike = (e) => {
  const myTarget = e.target;
  const myParent = myTarget.parentNode.parentNode;
  const id = parseInt(myParent.id, 10);
  const value = {
    item_id: id,
  };
  addLike(systemId, value);
  displayLike(e.target, id);
};

const putLike = () => {
  const buttonLikes = document.querySelectorAll('.like-btn');
  buttonLikes.forEach((btn) => {
    btn.addEventListener('click', giveLike);
  });
};
/**
 *
 * @param {integer} id
 * @returns number of likes or 0 from a given show id
 */
const myLike = (id) => {
  const data = _AppId_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLikes();
  if (data.length > 0) {
    const index = data.findIndex((element) => element.item_id === id);
    if (data[index] !== undefined) { return data[index].likes; }
  }
  return 0;
};
/**
 * this function display data in the DOM
 * @param {array} data
 */
const displayData = (data) => {
  let tmp = '';
  for (let i = limit.inf; i < limit.sup; i += 1) {
    if (i >= data.length) break;
    tmp += `
    <div class="card" id="${data[i].id}">
    <div class="p card-image text-center">
        <img src="${data[i].image.medium}">
    </div>
    <div class="card-title p">
      ${data[i].name}
    </div>
    <div class="card-like p"><img class="like-btn" alt="click to like" title="click to like" src="${_images_heart_png__WEBPACK_IMPORTED_MODULE_9__}"><span>${myLike(data[i].id)}</span></div>
    <div class="btn-comment p">
        <button type="button" class="btn" >Comment</button>
    </div>
</div>
    
    `;
  }
  content.innerHTML += tmp;
  addButtonListen();
  putLike();
  _Utilities_js__WEBPACK_IMPORTED_MODULE_4__["default"].hover({ element: '.like-btn', img1: _images_heart_png__WEBPACK_IMPORTED_MODULE_9__, img2: _images_heart_green_png__WEBPACK_IMPORTED_MODULE_10__ });
};

/**
 * this function fetch data from the API
 * and then call displayData to display data within the DOM
 */
const loadData = async () => {
  const l = ImgLoader.getImage();
  l.src = _images_loading_gif__WEBPACK_IMPORTED_MODULE_8__;
  l.classList.add('loader');
  content.append(l);
  await fetch('https://api.tvmaze.com/shows')
    .then((resp) => resp.json())
    .then((datum) => {
      init.data = datum;
      content.removeChild(l);
      displayData(init.data);
      counter.innerHTML = _Utilities_js__WEBPACK_IMPORTED_MODULE_4__["default"].counter(init.data);
    });
};
getLikes();
loadData();
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 10) {
    header.classList.add('fixed');
    header.classList.add('width-100');
    header.classList.add('shadow');
  }
  if (window.pageYOffset === 0) {
    header.classList.remove('fixed');
    header.classList.remove('width-100');
    header.classList.remove('shadow');
  }

  const top = content.lastChild.previousSibling.offsetTop;
  const h = content.lastChild.previousSibling.offsetHeight;
  const position = (top) - h;
  if (window.pageYOffset > position && !Number.isNaN(position)) {
    limit.inf += 50;
    limit.sup += 50;
    loadData();
  }
});

img2.addEventListener('click', () => {
  window.location.reload()
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvQXBwSWQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9JbWdFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvVXRpbGl0aWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvY291bnQtY29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdCYWxzYW1pcSBTYW5zJywgY3Vyc2l2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXIgdWwgbGkge1xcbiAgbWFyZ2luLWlubGluZTogMS41ZW07XFxufVxcblxcbmhlYWRlciB1bCBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwJTtcXG4gIHBhZGRpbmctdG9wOiA3JTtcXG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5jYXJkLWltYWdlIGltZyB7XFxuICB3aWR0aDogOTklO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJveC1zaGFkb3c6IDRweCA1cHggMnB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiAnQmFsc2FtaXEgU2FucycsIGN1cnNpdmU7XFxufVxcblxcbi5wIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnAgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5ncmlkLWNvbC01IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogMjBweDtcXG4gIGdyaWQtY29sdW1uLWdhcDogMjBweDtcXG59XFxuXFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDFzLCB0b3AgMXMsIHBvc2l0aW9uIDJzO1xcbn1cXG5cXG4uZml4ZWQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDFzLCB0b3AgMXMsIHBvc2l0aW9uIDJzO1xcbn1cXG5cXG4ud2lkdGgtMTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hhZG93IHtcXG4gIGJveC1zaGFkb3c6IDAgMTNweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNhcmQge1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogLTFweCAycHggMTdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tLWF1dG8ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMjdweCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgdG9wOiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMXMsIHRvcCAxcztcXG59XFxuXFxuLnNlcmllIHtcXG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXG4gIHdpZHRoOiA5OSU7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJSAhaW1wb3J0YW50O1xcbiAgcm93LWdhcDogNTBweDtcXG59XFxuXFxuLnNlcmllLWltYWdlIGltZyB7XFxuICBoZWlnaHQ6IDI1ZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uYnV0dG9uLXN1Ym1pdCB7XFxuICBib3gtc2hhZG93OiA0cHggNXB4IDJweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LWZhbWlseTogJ0JhbHNhbWlxIFNhbnMnLCBjdXJzaXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xcbn1cXG5cXG4uYnV0dG9uLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLngtaWNvbiB7XFxuICBoZWlnaHQ6IDVlbTtcXG4gIHdpZHRoOiA1ZW07XFxufVxcblxcbi54LWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogMTUlO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcXG4gIC5jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIC5ncmlkLWNvbC02IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XFxuICB9XFxuXFxuICAjbnVtYmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIH1cXG5cXG4gIC5pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgfVxcblxcbiAgLnNlcmllIHtcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogOTklO1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNTAlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuY29tbWVudC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgYm9yZGVyOiAwLjFlbSBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAyN3B4IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAxcywgdG9wIDFzO1xcbiAgfVxcblxcbiAgLnZpc2libGUge1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAxNSU7XFxuICB9XFxufVxcblxcbi5hY3RpdmUge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9EQUFvRDtJQUNwRCxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsT0FBTztJQUNQLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdCYWxzYW1pcSBTYW5zJywgY3Vyc2l2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXIgdWwgbGkge1xcbiAgbWFyZ2luLWlubGluZTogMS41ZW07XFxufVxcblxcbmhlYWRlciB1bCBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmxvYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwJTtcXG4gIHBhZGRpbmctdG9wOiA3JTtcXG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5jYXJkLWltYWdlIGltZyB7XFxuICB3aWR0aDogOTklO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJveC1zaGFkb3c6IDRweCA1cHggMnB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiAnQmFsc2FtaXEgU2FucycsIGN1cnNpdmU7XFxufVxcblxcbi5wIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnAgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5ncmlkLWNvbC01IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogMjBweDtcXG4gIGdyaWQtY29sdW1uLWdhcDogMjBweDtcXG59XFxuXFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDFzLCB0b3AgMXMsIHBvc2l0aW9uIDJzO1xcbn1cXG5cXG4uZml4ZWQtYm90dG9tIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDFzLCB0b3AgMXMsIHBvc2l0aW9uIDJzO1xcbn1cXG5cXG4ud2lkdGgtMTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hhZG93IHtcXG4gIGJveC1zaGFkb3c6IDAgMTNweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNhcmQge1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogLTFweCAycHggMTdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tLWF1dG8ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY29tbWVudC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMjdweCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgdG9wOiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IGxlZnQgMXMsIHRvcCAxcztcXG59XFxuXFxuLnNlcmllIHtcXG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXG4gIHdpZHRoOiA5OSU7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJSAhaW1wb3J0YW50O1xcbiAgcm93LWdhcDogNTBweDtcXG59XFxuXFxuLnNlcmllLWltYWdlIGltZyB7XFxuICBoZWlnaHQ6IDI1ZW07XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uYnV0dG9uLXN1Ym1pdCB7XFxuICBib3gtc2hhZG93OiA0cHggNXB4IDJweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LWZhbWlseTogJ0JhbHNhbWlxIFNhbnMnLCBjdXJzaXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xcbn1cXG5cXG4uYnV0dG9uLXN1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLngtaWNvbiB7XFxuICBoZWlnaHQ6IDVlbTtcXG4gIHdpZHRoOiA1ZW07XFxufVxcblxcbi54LWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogMTUlO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcXG4gIC5jYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIC5ncmlkLWNvbC02IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XFxuICB9XFxuXFxuICAjbnVtYmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIH1cXG5cXG4gIC5pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgfVxcblxcbiAgLnNlcmllIHtcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogOTklO1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNTAlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuY29tbWVudC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgYm9yZGVyOiAwLjFlbSBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAyN3B4IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAxcywgdG9wIDFzO1xcbiAgfVxcblxcbiAgLnZpc2libGUge1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAxNSU7XFxuICB9XFxufVxcblxcbi5hY3RpdmUge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwSWQge1xuICAgIHN0YXRpYyBsb2FkSWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJyxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcjogJ0NvbnRlbnQtdHlwZTogYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy50ZXh0KCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcElkJywgZGF0YSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FwcElkOicsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZUxpa2VzID0gKGRhdGEpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaWtlcycsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0TGlrZXMgPSAoKSA9PiB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpa2VzJykpIHsgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpa2VzJykpOyB9XG4gICAgICByZXR1cm4gW107XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEltZ0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGhpcy5pbWcuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIHRoaXMuaW1nLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0SW1hZ2UgPSAoKSA9PiB0aGlzLmltZztcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsaXRpZXMge1xuICAgIHN0YXRpYyBob3ZlciA9ICh7IGVsZW1lbnQsIGltZzEsIGltZzIgfSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgIGVsLnNyYyA9IGltZzI7XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICBlbC5zcmMgPSBpbWcxO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb3VudGVyID0gKGRhdGEpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7IHJldHVybiBkYXRhLmxlbmd0aDsgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfVxufSIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gKGpzb24pID0+IHtcbiAgY29uc3QgeyBsZW5ndGggfSA9IGpzb247XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWhlYWRpbmcnKS5pbm5lckhUTUwgPSBgQ29tbWVudHMoJHtsZW5ndGh9KWA7XG4gIHJldHVybiBsZW5ndGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50Q291bnRlcjsiLCJjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9ybWF0aW9uJyk7XG5jb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xuXG4vKipcbiAqIEZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIGNvbW1lbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBkaXNwbGF5Q29tbWVudHMgPSAoZGF0YSkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29tbWVudC1kaXYgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxzcGFuPiR7ZGF0YS5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cbiAgICAgIDxzcGFuPiR7ZGF0YS51c2VybmFtZX06PC9zcGFuPlxuICAgICAgPHNwYW4+JHtkYXRhLmNvbW1lbnR9PC9zcGFuPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICAgICBgO1xuICBjb21tZW50cy5pbm5lckhUTUwgKz0gdGVtcGxhdGU7XG59O1xuXG4vKipcbiAqIERpc3BsYXkgZGF0YSBhYm91dCBhIHBhcnRpY3VsYXIgc2VyaWVzXG4gKi9cbmV4cG9ydCBjb25zdCBkaXNwbGF5SW5mbyA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInNlcmllXCIgaWQ9XCIke2RhdGEuaWR9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXJpZS1pbWFnZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIj5cbiAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgPHAgY2xhc3M9XCJzZXJpZS10aXRsZSBwXCI+XG4gICAgICAgICAgTmFtZTogJHtkYXRhLm5hbWV9XG4gICAgICAgICA8L3A+XG4gICAgICAgICA8cD5cbiAgICAgICAgICBSYXRpbmc6ICR7ZGF0YS5yYXRpbmcuYXZlcmFnZX1cbiAgICAgICAgIDwvcD5cbiAgICAgICAgIDxwIGNsYXNzPVwic2VyaWUtZGVzY3JpcHRpb24gcFwiPlxuICAgICAgICAgICR7ZGF0YS5zdW1tYXJ5fVxuICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgICBcbiAgICAgIGA7XG4gIGluZm8uaW5uZXJIVE1MID0gdGVtcGxhdGU7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWdFbGVtZW50LmpzJztcbmltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvdW50LWNvbW1lbnQuanMnO1xuaW1wb3J0IHsgZGlzcGxheUNvbW1lbnRzLCBkaXNwbGF5SW5mbyB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgQXBwSWQgZnJvbSAnLi9BcHBJZC5qcyc7XG5pbXBvcnQgVXRpbGl0aWVzIGZyb20gJy4vVXRpbGl0aWVzLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0IGNhbmNlbCBmcm9tICcuL2ltYWdlcy94aWNvbi5qcGcnO1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9pbWFnZXMvbG9hZGluZy5naWYnO1xuaW1wb3J0IGxpa2UgZnJvbSAnLi9pbWFnZXMvaGVhcnQucG5nJztcbmltcG9ydCBsaWtlR3JlZW4gZnJvbSAnLi9pbWFnZXMvaGVhcnQtZ3JlZW4ucG5nJztcbi8vIGltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudHMuanMnO1xuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1pbWFnZScpO1xuY29uc3QgaW1nMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWljb24nKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXInKTtcbmNvbnN0IEltZ0xvYWRlciA9IG5ldyBJbWFnZSgyMCwgMjApO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xubGV0IHN5c3RlbUlkID0gJyc7XG5jb25zdCBpbml0ID0ge1xuICBkYXRhOiBbXSxcbn07XG5pbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBsb2dvKTtcbmNvbnN0IGxpbWl0ID0geyBpbmY6IDAsIHN1cDogNTAgfTtcbmltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYW5jZWwpO1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZmV0Y2ggZGF0YSBmcm9tIHRoZSBBUEkgY29tbWVudCBlbmRwb2ludFxuICovXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvbEdCNWhIdnRCekR4RXlkQm1nRmsvY29tbWVudHM/aXRlbV9pZD0ke2lkfWApXG4gICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBpZiAoanNvbi5lcnJvcikge1xuICAgICAgICBjb25zdCBqc29uID0gW107XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAuaW5uZXJIVE1MID0gJ0FkZCBhIG5ldyBjb21tZW50JztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJykuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGNvbW1lbnRDb3VudGVyKGpzb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAganNvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZGlzcGxheUNvbW1lbnRzKGVsZW1lbnQpO1xuICAgICAgICAgIGNvbW1lbnRDb3VudGVyKGpzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKlxuICogRXZlbnQgZm9yIGltcGxlbWVudGluZyBjb21tZW50IHBvcHVwXG4gKi9cbmNvbnN0IGFkZEJ1dHRvbkxpc3RlbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1zZWN0aW9uJykuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgY29uc3QgeyBpZCB9ID0gYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgLyoqXG4gKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgc2VyaWVzIHRvIGRpc3BsYXlcbiAqL1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnKVxuICAgICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXR1bSkgPT4ge1xuICAgICAgICAgIGlmIChpZCA8PSAxNikge1xuICAgICAgICAgICAgZGlzcGxheUluZm8oZGF0dW1baWQgLSAxXSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpZCA8PSAzNSkge1xuICAgICAgICAgICAgZGlzcGxheUluZm8oZGF0dW1baWQgLSAyXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlJbmZvKGRhdHVtW2lkIC0gM10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIGdldENvbW1lbnRzKGlkKTtcblxuICAgICAgLyoqXG4gKiBGdW5jdGlvbiB0byBwb3N0IGNvbW1lbnRzIHRvIEFQSVxuICovXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKS52YWx1ZSA9PT0gJycgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5pbm5lckhUTUwgPSAnRmlsbCBpbiBhbGwgZW10cHkgZmllbGRzJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCBwb3N0Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9sR0I1aEh2dEJ6RHhFeWRCbWdGay9jb21tZW50cycsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBjb21tZW50OiBtZXNzYWdlLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8qZXNsaW50LWRpc2FibGUqL1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJykuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIGdldENvbW1lbnRzKGlkKTtcbiAgICAgICAgICB9O1xuICBcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnZhbHVlID0gJyc7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKS52YWx1ZSA9ICcnO1xuICAgICAgICAgIHBvc3RDb21tZW50cygpOyBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBJZCcpKSBzeXN0ZW1JZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBJZCcpO1xuZWxzZSB7XG4gIEFwcElkLmxvYWRJZCgpO1xuICBzeXN0ZW1JZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBJZCcpO1xufVxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9JHtzeXN0ZW1JZH0vbGlrZXMvYClcbiAgICAudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIEFwcElkLnNhdmVMaWtlcyhkYXRhKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGFkZExpa2UgPSAoaWQsIGRhdGEpID0+IHtcbiAgZmV0Y2goYCR7YmFzZVVybH0ke2lkfS9saWtlcy9gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YSk7XG59O1xuLyoqXG4gKiBkaXNwbGF5IGEgbGlrZSBhZnRlciB0byBjbGljayBvbiB0aGUgbGlrZSBidXR0b25cbiAqIEBwYXJhbSB7ZWxlbWVudE5vZGV9IG5vZGUgXG4gKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFxuICovXG5jb25zdCBkaXNwbGF5TGlrZSA9IGFzeW5jIChub2RlLCBpZCkgPT4ge1xuICAgIGNvbnN0IGJyb3RoZXIgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIGJyb3RoZXIuaW5uZXJIVE1MID0gcGFyc2VJbnQoYnJvdGhlci5pbm5lckhUTUwsMTApKzE7XG59O1xuY29uc3QgZ2l2ZUxpa2UgPSAoZSkgPT4ge1xuICBjb25zdCBteVRhcmdldCA9IGUudGFyZ2V0O1xuICBjb25zdCBteVBhcmVudCA9IG15VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgaWQgPSBwYXJzZUludChteVBhcmVudC5pZCwgMTApO1xuICBjb25zdCB2YWx1ZSA9IHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgfTtcbiAgYWRkTGlrZShzeXN0ZW1JZCwgdmFsdWUpO1xuICBkaXNwbGF5TGlrZShlLnRhcmdldCwgaWQpO1xufTtcblxuY29uc3QgcHV0TGlrZSA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uTGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1idG4nKTtcbiAgYnV0dG9uTGlrZXMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2l2ZUxpa2UpO1xuICB9KTtcbn07XG4vKipcbiAqXG4gKiBAcGFyYW0ge2ludGVnZXJ9IGlkXG4gKiBAcmV0dXJucyBudW1iZXIgb2YgbGlrZXMgb3IgMCBmcm9tIGEgZ2l2ZW4gc2hvdyBpZFxuICovXG5jb25zdCBteUxpa2UgPSAoaWQpID0+IHtcbiAgY29uc3QgZGF0YSA9IEFwcElkLmdldExpa2VzKCk7XG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBpbmRleCA9IGRhdGEuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50Lml0ZW1faWQgPT09IGlkKTtcbiAgICBpZiAoZGF0YVtpbmRleF0gIT09IHVuZGVmaW5lZCkgeyByZXR1cm4gZGF0YVtpbmRleF0ubGlrZXM7IH1cbiAgfVxuICByZXR1cm4gMDtcbn07XG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZGlzcGxheSBkYXRhIGluIHRoZSBET01cbiAqIEBwYXJhbSB7YXJyYXl9IGRhdGFcbiAqL1xuY29uc3QgZGlzcGxheURhdGEgPSAoZGF0YSkgPT4ge1xuICBsZXQgdG1wID0gJyc7XG4gIGZvciAobGV0IGkgPSBsaW1pdC5pbmY7IGkgPCBsaW1pdC5zdXA7IGkgKz0gMSkge1xuICAgIGlmIChpID49IGRhdGEubGVuZ3RoKSBicmVhaztcbiAgICB0bXAgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCIke2RhdGFbaV0uaWR9XCI+XG4gICAgPGRpdiBjbGFzcz1cInAgY2FyZC1pbWFnZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YVtpXS5pbWFnZS5tZWRpdW19XCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgcFwiPlxuICAgICAgJHtkYXRhW2ldLm5hbWV9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtbGlrZSBwXCI+PGltZyBjbGFzcz1cImxpa2UtYnRuXCIgYWx0PVwiY2xpY2sgdG8gbGlrZVwiIHRpdGxlPVwiY2xpY2sgdG8gbGlrZVwiIHNyYz1cIiR7bGlrZX1cIj48c3Bhbj4ke215TGlrZShkYXRhW2ldLmlkKX08L3NwYW4+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi1jb21tZW50IHBcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIiA+Q29tbWVudDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4gICAgXG4gICAgYDtcbiAgfVxuICBjb250ZW50LmlubmVySFRNTCArPSB0bXA7XG4gIGFkZEJ1dHRvbkxpc3RlbigpO1xuICBwdXRMaWtlKCk7XG4gIFV0aWxpdGllcy5ob3Zlcih7IGVsZW1lbnQ6ICcubGlrZS1idG4nLCBpbWcxOiBsaWtlLCBpbWcyOiBsaWtlR3JlZW4gfSk7XG59O1xuXG4vKipcbiAqIHRoaXMgZnVuY3Rpb24gZmV0Y2ggZGF0YSBmcm9tIHRoZSBBUElcbiAqIGFuZCB0aGVuIGNhbGwgZGlzcGxheURhdGEgdG8gZGlzcGxheSBkYXRhIHdpdGhpbiB0aGUgRE9NXG4gKi9cbmNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsID0gSW1nTG9hZGVyLmdldEltYWdlKCk7XG4gIGwuc3JjID0gbG9hZDtcbiAgbC5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKTtcbiAgY29udGVudC5hcHBlbmQobCk7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJylcbiAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKGRhdHVtKSA9PiB7XG4gICAgICBpbml0LmRhdGEgPSBkYXR1bTtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobCk7XG4gICAgICBkaXNwbGF5RGF0YShpbml0LmRhdGEpO1xuICAgICAgY291bnRlci5pbm5lckhUTUwgPSBVdGlsaXRpZXMuY291bnRlcihpbml0LmRhdGEpO1xuICAgIH0pO1xufTtcbmdldExpa2VzKCk7XG5sb2FkRGF0YSgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3dpZHRoLTEwMCcpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzaGFkb3cnKTtcbiAgfVxuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZHRoLTEwMCcpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzaGFkb3cnKTtcbiAgfVxuXG4gIGNvbnN0IHRvcCA9IGNvbnRlbnQubGFzdENoaWxkLnByZXZpb3VzU2libGluZy5vZmZzZXRUb3A7XG4gIGNvbnN0IGggPSBjb250ZW50Lmxhc3RDaGlsZC5wcmV2aW91c1NpYmxpbmcub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCBwb3NpdGlvbiA9ICh0b3ApIC0gaDtcbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHBvc2l0aW9uICYmICFOdW1iZXIuaXNOYU4ocG9zaXRpb24pKSB7XG4gICAgbGltaXQuaW5mICs9IDUwO1xuICAgIGxpbWl0LnN1cCArPSA1MDtcbiAgICBsb2FkRGF0YSgpO1xuICB9XG59KTtcblxuaW1nMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9