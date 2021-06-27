/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[planet]",{

/***/ "./components/PlanetImage.js":
/*!***********************************!*\
  !*** ./components/PlanetImage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/Joy/Desktop/planets-fact-site/components/PlanetImage.js\";\n\n\nvar ImageDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({\n  displayName: \"PlanetImage__ImageDiv\",\n  componentId: \"sc-127qsj7-0\"\n})([\"max-width:25rem;margin:0 auto;\"]);\n_c = ImageDiv;\n\nfunction PlanetImage(_ref) {\n  var images = _ref.images,\n      active = _ref.active;\n  var image;\n\n  if (active === \"Overview\") {\n    image = images.planet;\n  } else if (active === \"Structure\") {\n    image = images.internal;\n  } else {\n    image = images.geology;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {\n    children: [active === \"Geology\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: images.planet\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 32\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: image,\n      alt: \"Picture of something nice\",\n      width: 650,\n      height: 750,\n      quality: 65\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = PlanetImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlanetImage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ImageDiv\");\n$RefreshReg$(_c2, \"PlanetImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGFuZXRJbWFnZS5qcz9lYjIzIl0sIm5hbWVzIjpbIkltYWdlRGl2Iiwic3R5bGVkIiwiUGxhbmV0SW1hZ2UiLCJpbWFnZXMiLCJhY3RpdmUiLCJpbWFnZSIsInBsYW5ldCIsImludGVybmFsIiwiZ2VvbG9neSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsZ0JBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNDQUFkO0tBQU1ELFE7O0FBTU4sU0FBU0UsV0FBVCxPQUF5QztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDdkMsTUFBSUMsS0FBSjs7QUFDQSxNQUFJRCxNQUFNLEtBQUssVUFBZixFQUEyQjtBQUN6QkMsU0FBSyxHQUFHRixNQUFNLENBQUNHLE1BQWY7QUFDRCxHQUZELE1BRU8sSUFBSUYsTUFBTSxLQUFLLFdBQWYsRUFBNEI7QUFDakNDLFNBQUssR0FBR0YsTUFBTSxDQUFDSSxRQUFmO0FBQ0QsR0FGTSxNQUVBO0FBQ0xGLFNBQUssR0FBR0YsTUFBTSxDQUFDSyxPQUFmO0FBQ0Q7O0FBQ0Qsc0JBQ0UsOERBQUMsUUFBRDtBQUFBLGVBQ0dKLE1BQU0sS0FBSyxTQUFYLGlCQUF3Qiw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRUQsTUFBTSxDQUFDRztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRDNCLGVBRUUsOERBQUMsbURBQUQ7QUFDRSxTQUFHLEVBQUVELEtBRFA7QUFFRSxTQUFHLEVBQUMsMkJBRk47QUFHRSxXQUFLLEVBQUUsR0FIVDtBQUlFLFlBQU0sRUFBRSxHQUpWO0FBS0UsYUFBTyxFQUFFO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O01BckJRSCxXO0FBdUJULCtEQUFlQSxXQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QbGFuZXRJbWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDI1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLyogb3JkZXI6IDM7ICovXG5gO1xuXG5mdW5jdGlvbiBQbGFuZXRJbWFnZSh7IGltYWdlcywgYWN0aXZlIH0pIHtcbiAgbGV0IGltYWdlO1xuICBpZiAoYWN0aXZlID09PSBcIk92ZXJ2aWV3XCIpIHtcbiAgICBpbWFnZSA9IGltYWdlcy5wbGFuZXQ7XG4gIH0gZWxzZSBpZiAoYWN0aXZlID09PSBcIlN0cnVjdHVyZVwiKSB7XG4gICAgaW1hZ2UgPSBpbWFnZXMuaW50ZXJuYWw7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2UgPSBpbWFnZXMuZ2VvbG9neTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxJbWFnZURpdj5cbiAgICAgIHthY3RpdmUgPT09IFwiR2VvbG9neVwiICYmIDxJbWFnZSBzcmM9e2ltYWdlcy5wbGFuZXR9IC8+fVxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgIGFsdD1cIlBpY3R1cmUgb2Ygc29tZXRoaW5nIG5pY2VcIlxuICAgICAgICB3aWR0aD17NjUwfVxuICAgICAgICBoZWlnaHQ9ezc1MH1cbiAgICAgICAgcXVhbGl0eT17NjV9XG4gICAgICAvPlxuICAgIDwvSW1hZ2VEaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW5ldEltYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PlanetImage.js\n");

/***/ })

});