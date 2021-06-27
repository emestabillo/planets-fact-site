/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[planet]",{

/***/ "./components/Tabs.js":
/*!****************************!*\
  !*** ./components/Tabs.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helpers */ \"./shared/helpers.js\");\n/* harmony import */ var _PlanetImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlanetImage */ \"./components/PlanetImage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Joy/Desktop/planets-fact-site/components/Tabs.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar FlexContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({\n  displayName: \"Tabs__FlexContainer\",\n  componentId: \"sc-1g93xq8-0\"\n})([\"grid-area:tabs;display:flex;justify-content:space-between;border-bottom:1px solid hsla(var(--color-white),20%);margin:0 -6%;\", \"\"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.Gutters);\n_c = FlexContainer;\nvar Heading = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h1.withConfig({\n  displayName: \"Tabs__Heading\",\n  componentId: \"sc-1g93xq8-1\"\n})([\"font-family:var(--font-family-antonio);font-size:2.5rem;text-transform:uppercase;padding-bottom:1rem;order:2;\"]);\n_c2 = Heading;\nvar Tab = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.button.withConfig({\n  displayName: \"Tabs__Tab\",\n  componentId: \"sc-1g93xq8-2\"\n})([\"\", \" color:var(--color-white);cursor:pointer;padding:1.25rem 0;text-transform:uppercase;font-size:0.5625rem;letter-spacing:0.12rem;font-weight:700;opacity:0.5;line-height:0.625rem;&::before{background-color:\", \";}\"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.baseUnderline, function (_ref) {\n  var name = _ref.name;\n\n  if (name === \"Mercury\") {\n    return \"var(--color-mercury-menu)\";\n  } else if (name === \"Venus\") {\n    return \"var(--color-venus-menu)\";\n  } else if (name === \"Earth\") {\n    return \"var(--color-earth-menu)\";\n  } else if (name === \"Mars\") {\n    return \"var(--color-mars-menu)\";\n  } else if (name === \"Jupiter\") {\n    return \"var(--color-jupiter-menu)\";\n  } else if (name === \"Saturn\") {\n    return \"var(--color-saturn-menu)\";\n  } else if (name === \"Uranus\") {\n    return \"var(--color-uranus-menu)\";\n  } else {\n    return \"var(--color-neptune-menu)\";\n  }\n});\n_c3 = Tab;\nvar Overview = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.p.withConfig({\n  displayName: \"Tabs__Overview\",\n  componentId: \"sc-1g93xq8-3\"\n})([\"font-size:0.6875rem;line-height:2;padding-bottom:2rem;order:4;\"]);\n_c4 = Overview;\nvar Source = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({\n  displayName: \"Tabs__Source\",\n  componentId: \"sc-1g93xq8-4\"\n})([\"font-size:0.75rem;order:5;opacity:0.5;\"]);\n_c5 = Source;\nvar WikiLink = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.a.withConfig({\n  displayName: \"Tabs__WikiLink\",\n  componentId: \"sc-1g93xq8-5\"\n})([\"text-decoration:underline;\"]);\nvar buttons = [\"Overview\", \"Structure\", \"Geology\"];\n\nfunction Tabs(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var name = _ref2.name,\n      images = _ref2.images,\n      overview = _ref2.overview,\n      structure = _ref2.structure,\n      geology = _ref2.geology;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(buttons[0]),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var planetInfo;\n  var wikiSource;\n\n  if (active === \"Overview\") {\n    planetInfo = overview.content;\n    wikiSource = overview.source;\n  } else if (active === \"Structure\") {\n    planetInfo = structure.content;\n    wikiSource = structure.source;\n  } else {\n    planetInfo = geology.content;\n    wikiSource = geology.source;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexContainer, {\n      children: buttons.map(function (type) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n          active: active === type,\n          onClick: function onClick() {\n            return setActive(type);\n          },\n          name: name,\n          children: type\n        }, type, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlanetImage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      images: images,\n      active: active\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overview, {\n      children: planetInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Source, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Source: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: wikiSource,\n        children: [\"Wikipedia\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          width: \"12\",\n          height: \"12\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            fill: \"#FFF\",\n            d: \"M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Tabs, \"im5mdQNDwPsPI+CmaRYfwMo/6g4=\");\n\n_c6 = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"FlexContainer\");\n$RefreshReg$(_c2, \"Heading\");\n$RefreshReg$(_c3, \"Tab\");\n$RefreshReg$(_c4, \"Overview\");\n$RefreshReg$(_c5, \"Source\");\n$RefreshReg$(_c6, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJzLmpzPzE2MzAiXSwibmFtZXMiOlsiRmxleENvbnRhaW5lciIsInN0eWxlZCIsIkd1dHRlcnMiLCJIZWFkaW5nIiwiVGFiIiwiYmFzZVVuZGVybGluZSIsIm5hbWUiLCJPdmVydmlldyIsIlNvdXJjZSIsIldpa2lMaW5rIiwiYnV0dG9ucyIsIlRhYnMiLCJpbWFnZXMiLCJvdmVydmlldyIsInN0cnVjdHVyZSIsImdlb2xvZ3kiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInBsYW5ldEluZm8iLCJ3aWtpU291cmNlIiwiY29udGVudCIsInNvdXJjZSIsIm1hcCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLGdCQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx5SUFNZkMsb0RBTmUsQ0FBbkI7S0FBTUYsYTtBQVNOLElBQU1HLE9BQU8sZ0JBQUdGLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHFIQUFiO01BQU1FLE87QUFRTixJQUFNQyxHQUFHLGdCQUFHSCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw4TkFDTEksMERBREssRUFhZSxnQkFBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDaEMsTUFBSUEsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEIsV0FBTywyQkFBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQixXQUFPLHlCQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCLFdBQU8seUJBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUIsV0FBTyx3QkFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QixXQUFPLDJCQUFQO0FBQ0Qs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBLGtCQURGO0FBK0JEOztHQS9DUVQsSTs7TUFBQUEsSTtBQWlEVCwrREFBZUEsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGFicy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgYmFzZVVuZGVybGluZSB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuaW1wb3J0IHsgR3V0dGVycyB9IGZyb20gXCIuLi9zaGFyZWQvaGVscGVyc1wiO1xuaW1wb3J0IFBsYW5ldEltYWdlIGZyb20gXCIuL1BsYW5ldEltYWdlXCI7XG5cbmNvbnN0IEZsZXhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IHRhYnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbGEodmFyKC0tY29sb3Itd2hpdGUpLCAyMCUpO1xuICBtYXJnaW46IDAgLTYlO1xuICAke0d1dHRlcnN9XG5gO1xuXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmgxYFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYW50b25pbyk7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgb3JkZXI6IDI7XG5gO1xuXG5jb25zdCBUYWIgPSBzdHlsZWQuYnV0dG9uYFxuICAke2Jhc2VVbmRlcmxpbmV9XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMS4yNXJlbSAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuNTYyNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbGluZS1oZWlnaHQ6IDAuNjI1cmVtO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBuYW1lIH0pID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBcIk1lcmN1cnlcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1jb2xvci1tZXJjdXJ5LW1lbnUpXCI7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiVmVudXNcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1jb2xvci12ZW51cy1tZW51KVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcIkVhcnRoXCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tY29sb3ItZWFydGgtbWVudSlcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJNYXJzXCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tY29sb3ItbWFycy1tZW51KVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcIkp1cGl0ZXJcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1jb2xvci1qdXBpdGVyLW1lbnUpXCI7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiU2F0dXJuXCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tY29sb3Itc2F0dXJuLW1lbnUpXCI7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiVXJhbnVzXCIpIHtcbiAgICAgICAgcmV0dXJuIFwidmFyKC0tY29sb3ItdXJhbnVzLW1lbnUpXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1jb2xvci1uZXB0dW5lLW1lbnUpXCI7XG4gICAgICB9XG4gICAgfX07XG4gIH1cbmA7XG5cbmNvbnN0IE92ZXJ2aWV3ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICBsaW5lLWhlaWdodDogMjtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIG9yZGVyOiA0O1xuYDtcblxuY29uc3QgU291cmNlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBvcmRlcjogNTtcbiAgb3BhY2l0eTogMC41O1xuYDtcblxuY29uc3QgV2lraUxpbmsgPSBzdHlsZWQuYWBcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5gO1xuXG5jb25zdCBidXR0b25zID0gW1wiT3ZlcnZpZXdcIiwgXCJTdHJ1Y3R1cmVcIiwgXCJHZW9sb2d5XCJdO1xuXG5mdW5jdGlvbiBUYWJzKHsgbmFtZSwgaW1hZ2VzLCBvdmVydmlldywgc3RydWN0dXJlLCBnZW9sb2d5IH0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGJ1dHRvbnNbMF0pO1xuXG4gIGxldCBwbGFuZXRJbmZvO1xuICBsZXQgd2lraVNvdXJjZTtcbiAgaWYgKGFjdGl2ZSA9PT0gXCJPdmVydmlld1wiKSB7XG4gICAgcGxhbmV0SW5mbyA9IG92ZXJ2aWV3LmNvbnRlbnQ7XG4gICAgd2lraVNvdXJjZSA9IG92ZXJ2aWV3LnNvdXJjZTtcbiAgfSBlbHNlIGlmIChhY3RpdmUgPT09IFwiU3RydWN0dXJlXCIpIHtcbiAgICBwbGFuZXRJbmZvID0gc3RydWN0dXJlLmNvbnRlbnQ7XG4gICAgd2lraVNvdXJjZSA9IHN0cnVjdHVyZS5zb3VyY2U7XG4gIH0gZWxzZSB7XG4gICAgcGxhbmV0SW5mbyA9IGdlb2xvZ3kuY29udGVudDtcbiAgICB3aWtpU291cmNlID0gZ2VvbG9neS5zb3VyY2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZz57bmFtZX08L0hlYWRpbmc+XG4gICAgICA8RmxleENvbnRhaW5lcj5cbiAgICAgICAge2J1dHRvbnMubWFwKCh0eXBlKSA9PiAoXG4gICAgICAgICAgPFRhYlxuICAgICAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmUgPT09IHR5cGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUodHlwZSl9XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0eXBlfVxuICAgICAgICAgIDwvVGFiPlxuICAgICAgICApKX1cbiAgICAgIDwvRmxleENvbnRhaW5lcj5cbiAgICAgIDxQbGFuZXRJbWFnZSBpbWFnZXM9e2ltYWdlc30gYWN0aXZlPXthY3RpdmV9IC8+XG4gICAgICA8T3ZlcnZpZXc+e3BsYW5ldEluZm99PC9PdmVydmlldz5cbiAgICAgIDxTb3VyY2U+XG4gICAgICAgIDxzcGFuPlNvdXJjZTogPC9zcGFuPlxuICAgICAgICA8YSBocmVmPXt3aWtpU291cmNlfT5cbiAgICAgICAgICBXaWtpcGVkaWF7XCIgXCJ9XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPVwiI0ZGRlwiXG4gICAgICAgICAgICAgIGQ9XCJNMTEuMzQuNjZDMTAuOS4yMiAxMC4zNyAwIDkuNzUgMGgtNy41QzEuNjMgMCAxLjEuMjIuNjYuNjYuMjIgMS4xIDAgMS42MyAwIDIuMjV2Ny41YzAgLjYyLjIyIDEuMTUuNjYgMS41OS40NC40NC45Ny42NiAxLjU5LjY2aDcuNWMuNjIgMCAxLjE1LS4yMiAxLjU5LS42Ni40NC0uNDQuNjYtLjk3LjY2LTEuNTl2LTcuNWMwLS42Mi0uMjItMS4xNS0uNjYtMS41OXpNMTAgNi4yNWEuNDY3LjQ2NyAwIDAxLS4zMDUuNDYuNTQ0LjU0NCAwIDAxLS4xOTUuMDQuNDY1LjQ2NSAwIDAxLS4zNTItLjE0OUw4LjAyMyA1LjQ3NiAzLjg1MiA5LjY0OGEuNDgxLjQ4MSAwIDAxLS4zNTIuMTQ5LjQ4LjQ4IDAgMDEtLjM1Mi0uMTQ5bC0uNzk2LS43OTdhLjQ4LjQ4IDAgMDEtLjE0OS0uMzUxLjQ4LjQ4IDAgMDEuMTQ5LS4zNTJsNC4xNzItNC4xNzItMS4xMjUtMS4xMjVjLS4xNjItLjE1LS4xOTgtLjMzMy0uMTEtLjU0NkEuNDY3LjQ2NyAwIDAxNS43NSAySDkuNWMuMTM1IDAgLjI1My4wNS4zNTIuMTQ4QS40OC40OCAwIDAxMTAgMi41djMuNzV6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvU291cmNlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Tabs.js\n");

/***/ })

});