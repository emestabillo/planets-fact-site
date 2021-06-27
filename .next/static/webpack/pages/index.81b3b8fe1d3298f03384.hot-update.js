/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helpers */ \"./shared/helpers.js\");\n/* harmony import */ var _PlanetImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlanetImage */ \"./components/PlanetImage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Joy/Desktop/planets-fact-site/components/Tabs.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar FlexContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({\n  displayName: \"Tabs__FlexContainer\",\n  componentId: \"sc-1g93xq8-0\"\n})([\"grid-area:tabs;display:flex;justify-content:space-between;border-bottom:1px solid hsla(var(--color-white),20%);margin:0 -6%;\", \"\"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.Gutters);\n_c = FlexContainer;\nvar Heading = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h1.withConfig({\n  displayName: \"Tabs__Heading\",\n  componentId: \"sc-1g93xq8-1\"\n})([\"font-family:var(--font-family-antonio);font-size:2.5rem;text-transform:uppercase;padding-bottom:1rem;order:2;\"]);\n_c2 = Heading;\nvar Tab = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.button.withConfig({\n  displayName: \"Tabs__Tab\",\n  componentId: \"sc-1g93xq8-2\"\n})([\"\", \" color:var(--color-white);cursor:pointer;padding:1.25rem 0;text-transform:uppercase;font-size:0.5625rem;letter-spacing:0.12rem;font-weight:700;opacity:0.5;line-height:0.625rem;&::before{background-color:\", \";}\"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.baseUnderline, function (_ref) {\n  var name = _ref.name;\n\n  if (name === \"Mercury\") {\n    return \"var(--color-mercury-menu)\";\n  } else if (name === \"Venus\") {\n    return \"var(--color-venus-menu)\";\n  } else if (name === \"Earth\") {\n    return \"var(--color-earth-menu)\";\n  } else if (name === \"Mars\") {\n    return \"var(--color-mars-menu)\";\n  } else if (name === \"Jupiter\") {\n    return \"var(--color-jupiter-menu)\";\n  } else if (name === \"Saturn\") {\n    return \"var(--color-saturn-menu)\";\n  } else if (name === \"Uranus\") {\n    return \"var(--color-uranus-menu)\";\n  } else {\n    return \"var(--color-neptune-menu)\";\n  }\n});\n_c3 = Tab;\nvar Overview = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.p.withConfig({\n  displayName: \"Tabs__Overview\",\n  componentId: \"sc-1g93xq8-3\"\n})([\"font-size:0.6875rem;line-height:2;padding-bottom:2rem;order:4;\"]);\n_c4 = Overview;\nvar Source = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({\n  displayName: \"Tabs__Source\",\n  componentId: \"sc-1g93xq8-4\"\n})([\"font-size:0.75rem;order:5;opacity:0.5;\"]);\n_c5 = Source;\nvar buttons = [\"Overview\", \"Structure\", \"Geology\"];\n\nfunction Tabs(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var name = _ref2.name,\n      images = _ref2.images,\n      overview = _ref2.overview,\n      structure = _ref2.structure,\n      geology = _ref2.geology;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(buttons[0]),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var planetInfo;\n  var wikiSource;\n\n  if (active === \"Overview\") {\n    planetInfo = overview.content;\n    wikiSource = overview.source;\n  } else if (active === \"Structure\") {\n    planetInfo = structure.content;\n    wikiSource = structure.source;\n  } else {\n    planetInfo = geology.content;\n    wikiSource = geology.source;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexContainer, {\n      children: buttons.map(function (type) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n          active: active === type,\n          onClick: function onClick() {\n            return setActive(type);\n          },\n          name: name,\n          children: type\n        }, type, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlanetImage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      images: images,\n      active: active\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overview, {\n      children: planetInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Source, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Source: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: wikiSource,\n        children: [\"Wikipedia\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          width: \"12\",\n          height: \"12\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            fill: \"#FFF\",\n            d: \"M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Tabs, \"im5mdQNDwPsPI+CmaRYfwMo/6g4=\");\n\n_c6 = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"FlexContainer\");\n$RefreshReg$(_c2, \"Heading\");\n$RefreshReg$(_c3, \"Tab\");\n$RefreshReg$(_c4, \"Overview\");\n$RefreshReg$(_c5, \"Source\");\n$RefreshReg$(_c6, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJzLmpzPzE2MzAiXSwibmFtZXMiOlsiRmxleENvbnRhaW5lciIsInN0eWxlZCIsIkd1dHRlcnMiLCJIZWFkaW5nIiwiVGFiIiwiYmFzZVVuZGVybGluZSIsIm5hbWUiLCJPdmVydmlldyIsIlNvdXJjZSIsImJ1dHRvbnMiLCJUYWJzIiwiaW1hZ2VzIiwib3ZlcnZpZXciLCJzdHJ1Y3R1cmUiLCJnZW9sb2d5IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJwbGFuZXRJbmZvIiwid2lraVNvdXJjZSIsImNvbnRlbnQiLCJzb3VyY2UiLCJtYXAiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxnQkFBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEseUlBTWZDLG9EQU5lLENBQW5CO0tBQU1GLGE7QUFTTixJQUFNRyxPQUFPLGdCQUFHRixvRUFBSDtBQUFBO0FBQUE7QUFBQSxxSEFBYjtNQUFNRSxPO0FBUU4sSUFBTUMsR0FBRyxnQkFBR0gsd0VBQUg7QUFBQTtBQUFBO0FBQUEsOE5BQ0xJLDBEQURLLEVBYWUsZ0JBQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ2hDLE1BQUlBLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCLFdBQU8sMkJBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDM0IsV0FBTyx5QkFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQixXQUFPLHlCQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQzFCLFdBQU8sd0JBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDN0IsV0FBTywyQkFBUDtBQUNELEdBRk0sTUFFQSxJ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QUFBQSxrQkFERjtBQStCRDs7R0EvQ1FULEk7O01BQUFBLEk7QUFpRFQsK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGJhc2VVbmRlcmxpbmUgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcbmltcG9ydCB7IEd1dHRlcnMgfSBmcm9tIFwiLi4vc2hhcmVkL2hlbHBlcnNcIjtcbmltcG9ydCBQbGFuZXRJbWFnZSBmcm9tIFwiLi9QbGFuZXRJbWFnZVwiO1xuXG5jb25zdCBGbGV4Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1hcmVhOiB0YWJzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2xhKHZhcigtLWNvbG9yLXdoaXRlKSwgMjAlKTtcbiAgbWFyZ2luOiAwIC02JTtcbiAgJHtHdXR0ZXJzfVxuYDtcblxuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oMWBcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWFudG9uaW8pO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG9yZGVyOiAyO1xuYDtcblxuY29uc3QgVGFiID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtiYXNlVW5kZXJsaW5lfVxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjU2MjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIGxpbmUtaGVpZ2h0OiAwLjYyNXJlbTtcblxuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgbmFtZSB9KSA9PiB7XG4gICAgICBpZiAobmFtZSA9PT0gXCJNZXJjdXJ5XCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tY29sb3ItbWVyY3VyeS1tZW51KVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcIlZlbnVzXCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tY29sb3ItdmVudXMtbWVudSlcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJFYXJ0aFwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLWNvbG9yLWVhcnRoLW1lbnUpXCI7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiTWFyc1wiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLWNvbG9yLW1hcnMtbWVudSlcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJKdXBpdGVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tY29sb3ItanVwaXRlci1tZW51KVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcIlNhdHVyblwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLWNvbG9yLXNhdHVybi1tZW51KVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcIlVyYW51c1wiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLWNvbG9yLXVyYW51cy1tZW51KVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tY29sb3ItbmVwdHVuZS1tZW51KVwiO1xuICAgICAgfVxuICAgIH19O1xuICB9XG5gO1xuXG5jb25zdCBPdmVydmlldyA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBvcmRlcjogNDtcbmA7XG5cbmNvbnN0IFNvdXJjZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgb3JkZXI6IDU7XG4gIG9wYWNpdHk6IDAuNTtcbmA7XG5cbmNvbnN0IGJ1dHRvbnMgPSBbXCJPdmVydmlld1wiLCBcIlN0cnVjdHVyZVwiLCBcIkdlb2xvZ3lcIl07XG5cbmZ1bmN0aW9uIFRhYnMoeyBuYW1lLCBpbWFnZXMsIG92ZXJ2aWV3LCBzdHJ1Y3R1cmUsIGdlb2xvZ3kgfSkge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoYnV0dG9uc1swXSk7XG5cbiAgbGV0IHBsYW5ldEluZm87XG4gIGxldCB3aWtpU291cmNlO1xuICBpZiAoYWN0aXZlID09PSBcIk92ZXJ2aWV3XCIpIHtcbiAgICBwbGFuZXRJbmZvID0gb3ZlcnZpZXcuY29udGVudDtcbiAgICB3aWtpU291cmNlID0gb3ZlcnZpZXcuc291cmNlO1xuICB9IGVsc2UgaWYgKGFjdGl2ZSA9PT0gXCJTdHJ1Y3R1cmVcIikge1xuICAgIHBsYW5ldEluZm8gPSBzdHJ1Y3R1cmUuY29udGVudDtcbiAgICB3aWtpU291cmNlID0gc3RydWN0dXJlLnNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICBwbGFuZXRJbmZvID0gZ2VvbG9neS5jb250ZW50O1xuICAgIHdpa2lTb3VyY2UgPSBnZW9sb2d5LnNvdXJjZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkaW5nPntuYW1lfTwvSGVhZGluZz5cbiAgICAgIDxGbGV4Q29udGFpbmVyPlxuICAgICAgICB7YnV0dG9ucy5tYXAoKHR5cGUpID0+IChcbiAgICAgICAgICA8VGFiXG4gICAgICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZSA9PT0gdHlwZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh0eXBlKX1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3R5cGV9XG4gICAgICAgICAgPC9UYWI+XG4gICAgICAgICkpfVxuICAgICAgPC9GbGV4Q29udGFpbmVyPlxuICAgICAgPFBsYW5ldEltYWdlIGltYWdlcz17aW1hZ2VzfSBhY3RpdmU9e2FjdGl2ZX0gLz5cbiAgICAgIDxPdmVydmlldz57cGxhbmV0SW5mb308L092ZXJ2aWV3PlxuICAgICAgPFNvdXJjZT5cbiAgICAgICAgPHNwYW4+U291cmNlOiA8L3NwYW4+XG4gICAgICAgIDxhIGhyZWY9e3dpa2lTb3VyY2V9PlxuICAgICAgICAgIFdpa2lwZWRpYXtcIiBcIn1cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGw9XCIjRkZGXCJcbiAgICAgICAgICAgICAgZD1cIk0xMS4zNC42NkMxMC45LjIyIDEwLjM3IDAgOS43NSAwaC03LjVDMS42MyAwIDEuMS4yMi42Ni42Ni4yMiAxLjEgMCAxLjYzIDAgMi4yNXY3LjVjMCAuNjIuMjIgMS4xNS42NiAxLjU5LjQ0LjQ0Ljk3LjY2IDEuNTkuNjZoNy41Yy42MiAwIDEuMTUtLjIyIDEuNTktLjY2LjQ0LS40NC42Ni0uOTcuNjYtMS41OXYtNy41YzAtLjYyLS4yMi0xLjE1LS42Ni0xLjU5ek0xMCA2LjI1YS40NjcuNDY3IDAgMDEtLjMwNS40Ni41NDQuNTQ0IDAgMDEtLjE5NS4wNC40NjUuNDY1IDAgMDEtLjM1Mi0uMTQ5TDguMDIzIDUuNDc2IDMuODUyIDkuNjQ4YS40ODEuNDgxIDAgMDEtLjM1Mi4xNDkuNDguNDggMCAwMS0uMzUyLS4xNDlsLS43OTYtLjc5N2EuNDguNDggMCAwMS0uMTQ5LS4zNTEuNDguNDggMCAwMS4xNDktLjM1Mmw0LjE3Mi00LjE3Mi0xLjEyNS0xLjEyNWMtLjE2Mi0uMTUtLjE5OC0uMzMzLS4xMS0uNTQ2QS40NjcuNDY3IDAgMDE1Ljc1IDJIOS41Yy4xMzUgMCAuMjUzLjA1LjM1Mi4xNDhBLjQ4LjQ4IDAgMDExMCAyLjV2My43NXpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9Tb3VyY2U+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tabs.js\n");

/***/ })

});