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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helpers */ \"./shared/helpers.js\");\n/* harmony import */ var _PlanetImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlanetImage */ \"./components/PlanetImage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Joy/Desktop/planets-fact-site/components/Tabs.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar FlexContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({\n  displayName: \"Tabs__FlexContainer\",\n  componentId: \"sc-1g93xq8-0\"\n})([\"grid-area:tabs;display:flex;justify-content:space-between;border-bottom:1px solid hsla(var(--color-white),20%);margin:0 -6%;\", \"\"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.Gutters);\n_c = FlexContainer;\nvar Heading = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h1.withConfig({\n  displayName: \"Tabs__Heading\",\n  componentId: \"sc-1g93xq8-1\"\n})([\"font-family:var(--font-family-antonio);font-size:2.5rem;text-transform:uppercase;padding-bottom:1rem;order:2;\"]);\n_c2 = Heading;\nvar Tab = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.button.withConfig({\n  displayName: \"Tabs__Tab\",\n  componentId: \"sc-1g93xq8-2\"\n})([\"\", \" color:var(--color-white);cursor:pointer;padding:1.25rem 0;text-transform:uppercase;font-size:0.5625rem;letter-spacing:0.12rem;font-weight:700;opacity:0.5;line-height:0.625rem;&::before{background-color:\", \";}\"], _shared_helpers__WEBPACK_IMPORTED_MODULE_2__.baseUnderline, function (_ref) {\n  var name = _ref.name;\n\n  if (name === \"Mercury\") {\n    return \"var(--color-mercury-menu)\";\n  } else if (name === \"Venus\") {\n    return \"var(--color-venus-menu)\";\n  } else if (name === \"Earth\") {\n    return \"var(--color-earth-menu)\";\n  } else if (name === \"Mars\") {\n    return \"var(--color-mars-menu)\";\n  } else if (name === \"Jupiter\") {\n    return \"var(--color-jupiter-menu)\";\n  } else if (name === \"Saturn\") {\n    return \"var(--color-saturn-menu)\";\n  } else if (name === \"Uranus\") {\n    return \"var(--color-uranus-menu)\";\n  } else {\n    return \"var(--color-neptune-menu)\";\n  }\n});\n_c3 = Tab;\nvar Overview = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.p.withConfig({\n  displayName: \"Tabs__Overview\",\n  componentId: \"sc-1g93xq8-3\"\n})([\"font-size:0.6875rem;line-height:2;padding:0 0.5rem 2rem;order:4;\"]);\n_c4 = Overview;\nvar Source = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({\n  displayName: \"Tabs__Source\",\n  componentId: \"sc-1g93xq8-4\"\n})([\"font-size:0.75rem;order:5;opacity:0.5;transition:opacity 0.25s ease;pointer-events:none;&:hover{opacity:1;}\"]);\n_c5 = Source;\nvar WikiLink = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4__.default.a.withConfig({\n  displayName: \"Tabs__WikiLink\",\n  componentId: \"sc-1g93xq8-5\"\n})([\"text-decoration:underline;pointer-events:auto;\"]);\n_c6 = WikiLink;\nvar buttons = [\"Overview\", \"Structure\", \"Geology\"];\n\nfunction Tabs(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var name = _ref2.name,\n      images = _ref2.images,\n      overview = _ref2.overview,\n      structure = _ref2.structure,\n      geology = _ref2.geology;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(buttons[0]),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var planetInfo;\n  var wikiSource;\n\n  if (active === \"Overview\") {\n    planetInfo = overview.content;\n    wikiSource = overview.source;\n  } else if (active === \"Structure\") {\n    planetInfo = structure.content;\n    wikiSource = structure.source;\n  } else {\n    planetInfo = geology.content;\n    wikiSource = geology.source;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Heading, {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexContainer, {\n      children: buttons.map(function (type) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n          active: active === type,\n          onClick: function onClick() {\n            return setActive(type);\n          },\n          name: name,\n          children: type\n        }, type, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlanetImage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      images: images,\n      active: active\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overview, {\n      children: planetInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Source, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Source: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WikiLink, {\n        href: wikiSource,\n        children: [\"Wikipedia\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          width: \"12\",\n          height: \"12\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            fill: \"#FFF\",\n            d: \"M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Tabs, \"im5mdQNDwPsPI+CmaRYfwMo/6g4=\");\n\n_c7 = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"FlexContainer\");\n$RefreshReg$(_c2, \"Heading\");\n$RefreshReg$(_c3, \"Tab\");\n$RefreshReg$(_c4, \"Overview\");\n$RefreshReg$(_c5, \"Source\");\n$RefreshReg$(_c6, \"WikiLink\");\n$RefreshReg$(_c7, \"Tabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJzLmpzPzE2MzAiXSwibmFtZXMiOlsiRmxleENvbnRhaW5lciIsInN0eWxlZCIsIkd1dHRlcnMiLCJIZWFkaW5nIiwiVGFiIiwiYmFzZVVuZGVybGluZSIsIm5hbWUiLCJPdmVydmlldyIsIlNvdXJjZSIsIldpa2lMaW5rIiwiYnV0dG9ucyIsIlRhYnMiLCJpbWFnZXMiLCJvdmVydmlldyIsInN0cnVjdHVyZSIsImdlb2xvZ3kiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInBsYW5ldEluZm8iLCJ3aWtpU291cmNlIiwiY29udGVudCIsInNvdXJjZSIsIm1hcCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLGdCQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx5SUFNZkMsb0RBTmUsQ0FBbkI7S0FBTUYsYTtBQVNOLElBQU1HLE9BQU8sZ0JBQUdGLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHFIQUFiO01BQU1FLE87QUFRTixJQUFNQyxHQUFHLGdCQUFHSCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw4TkFDTEksMERBREssRUFhZSxnQkFBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDaEMsTUFBSUEsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEIsV0FBTywyQkFBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUMzQixXQUFPLHlCQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCLFdBQU8seUJBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDMUIsV0FBTyx3QkFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QixXQUFPLDJCQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQzVCLFdBQU8sMEJBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDNUIsV0FBTywwQkFBUDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU8sMkJBQVA7QUFDRDtBQUNGLENBL0JJLENBQVQ7TUFBTUYsRztBQW1DTixJQUFNRyxRQUFRLGdCQUFHTixtRUFBSDtBQUFBO0FBQUE7QUFBQSx3RUFBZDtNQUFNTSxRO0FBT04sSUFBTUMsTUFBTSxnQkFBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsbUhBQVo7TUFBTU8sTTtBQVlOLElBQU1DLFFBQVEsZ0JBQUdSLG1FQUFIO0FBQUE7QUFBQTtBQUFBLHNEQUFkO01BQU1RLFE7QUFLTixJQUFNQyxPQUFPLEdBQUcsQ0FBQyxVQUFELEVBQWEsV0FBYixFQUEwQixTQUExQixDQUFoQjs7QUFFQSxTQUFTQyxJQUFULFFBQThEO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUNMLElBQThDLFNBQTlDQSxJQUE4QztBQUFBLE1BQXhDTSxNQUF3QyxTQUF4Q0EsTUFBd0M7QUFBQSxNQUFoQ0MsUUFBZ0MsU0FBaENBLFFBQWdDO0FBQUEsTUFBdEJDLFNBQXNCLFNBQXRCQSxTQUFzQjtBQUFBLE1BQVhDLE9BQVcsU0FBWEEsT0FBVzs7QUFBQSxrQkFDaENDLCtDQUFRLENBQUNOLE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FEd0I7QUFBQSxNQUNyRE8sTUFEcUQ7QUFBQSxNQUM3Q0MsU0FENkM7O0FBRzVELE1BQUlDLFVBQUo7QUFDQSxNQUFJQyxVQUFKOztBQUNBLE1BQUlILE1BQU0sS0FBSyxVQUFmLEVBQTJCO0FBQ3pCRSxjQUFVLEdBQUdOLFFBQVEsQ0FBQ1EsT0FBdEI7QUFDQUQsY0FBVSxHQUFHUCxRQUFRLENBQUNTLE1BQXRCO0FBQ0QsR0FIRCxNQUdPLElBQUlMLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQ2pDRSxjQUFVLEdBQUdMLFNBQVMsQ0FBQ08sT0FBdkI7QUFDQUQsY0FBVSxHQUFHTixTQUFTLENBQUNRLE1BQXZCO0FBQ0QsR0FITSxNQUdBO0FBQ0xILGNBQVUsR0FBR0osT0FBTyxDQUFDTSxPQUFyQjtBQUNBRCxjQUFVLEdBQUdMLE9BQU8sQ0FBQ08sTUFBckI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLE9BQUQ7QUFBQSxnQkFBVWhCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsYUFBRDtBQUFBLGdCQUNHSSxPQUFPLENBQUNhLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1gsOERBQUMsR0FBRDtBQUVFLGdCQUFNLEVBQUVQLE1BQU0sS0FBS08sSUFGckI7QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1OLFNBQVMsQ0FBQ00sSUFBRCxDQUFmO0FBQUEsV0FIWDtBQUlFLGNBQUksRUFBRWxCLElBSlI7QUFBQSxvQkFNR2tCO0FBTkgsV0FDT0EsSUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQWNFLDhEQUFDLGlEQUFEO0FBQWEsWUFBTSxFQUFFWixNQUFyQjtBQUE2QixZQUFNLEVBQUVLO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQWVFLDhEQUFDLFFBQUQ7QUFBQSxnQkFBV0U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFnQkUsOERBQUMsTUFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxRQUFEO0FBQVUsWUFBSSxFQUFFQyxVQUFoQjtBQUFBLGdDQUNZLEdBRFosZUFFRTtBQUFLLGVBQUssRUFBQyw0QkFBWDtBQUF3QyxlQUFLLEVBQUMsSUFBOUM7QUFBbUQsZ0JBQU0sRUFBQyxJQUExRDtBQUFBLGlDQUNFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsYUFBQyxFQUFDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUEsa0JBREY7QUErQkQ7O0dBL0NRVCxJOztNQUFBQSxJO0FBaURULCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYWJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVW5kZXJsaW5lIH0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzXCI7XG5pbXBvcnQgeyBHdXR0ZXJzIH0gZnJvbSBcIi4uL3NoYXJlZC9oZWxwZXJzXCI7XG5pbXBvcnQgUGxhbmV0SW1hZ2UgZnJvbSBcIi4vUGxhbmV0SW1hZ2VcIjtcblxuY29uc3QgRmxleENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogdGFicztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsYSh2YXIoLS1jb2xvci13aGl0ZSksIDIwJSk7XG4gIG1hcmdpbjogMCAtNiU7XG4gICR7R3V0dGVyc31cbmA7XG5cbmNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDFgXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1hbnRvbmlvKTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBvcmRlcjogMjtcbmA7XG5cbmNvbnN0IFRhYiA9IHN0eWxlZC5idXR0b25gXG4gICR7YmFzZVVuZGVybGluZX1cbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxLjI1cmVtIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC41NjI1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3BhY2l0eTogMC41O1xuICBsaW5lLWhlaWdodDogMC42MjVyZW07XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IG5hbWUgfSkgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IFwiTWVyY3VyeVwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLWNvbG9yLW1lcmN1cnktbWVudSlcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJWZW51c1wiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLWNvbG9yLXZlbnVzLW1lbnUpXCI7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiRWFydGhcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1jb2xvci1lYXJ0aC1tZW51KVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcIk1hcnNcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1jb2xvci1tYXJzLW1lbnUpXCI7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiSnVwaXRlclwiKSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLWNvbG9yLWp1cGl0ZXItbWVudSlcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJTYXR1cm5cIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1jb2xvci1zYXR1cm4tbWVudSlcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJVcmFudXNcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXIoLS1jb2xvci11cmFudXMtbWVudSlcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInZhcigtLWNvbG9yLW5lcHR1bmUtbWVudSlcIjtcbiAgICAgIH1cbiAgICB9fTtcbiAgfVxuYDtcblxuY29uc3QgT3ZlcnZpZXcgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBwYWRkaW5nOiAwIDAuNXJlbSAycmVtO1xuICBvcmRlcjogNDtcbmA7XG5cbmNvbnN0IFNvdXJjZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgb3JkZXI6IDU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBXaWtpTGluayA9IHN0eWxlZC5hYFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG5gO1xuXG5jb25zdCBidXR0b25zID0gW1wiT3ZlcnZpZXdcIiwgXCJTdHJ1Y3R1cmVcIiwgXCJHZW9sb2d5XCJdO1xuXG5mdW5jdGlvbiBUYWJzKHsgbmFtZSwgaW1hZ2VzLCBvdmVydmlldywgc3RydWN0dXJlLCBnZW9sb2d5IH0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGJ1dHRvbnNbMF0pO1xuXG4gIGxldCBwbGFuZXRJbmZvO1xuICBsZXQgd2lraVNvdXJjZTtcbiAgaWYgKGFjdGl2ZSA9PT0gXCJPdmVydmlld1wiKSB7XG4gICAgcGxhbmV0SW5mbyA9IG92ZXJ2aWV3LmNvbnRlbnQ7XG4gICAgd2lraVNvdXJjZSA9IG92ZXJ2aWV3LnNvdXJjZTtcbiAgfSBlbHNlIGlmIChhY3RpdmUgPT09IFwiU3RydWN0dXJlXCIpIHtcbiAgICBwbGFuZXRJbmZvID0gc3RydWN0dXJlLmNvbnRlbnQ7XG4gICAgd2lraVNvdXJjZSA9IHN0cnVjdHVyZS5zb3VyY2U7XG4gIH0gZWxzZSB7XG4gICAgcGxhbmV0SW5mbyA9IGdlb2xvZ3kuY29udGVudDtcbiAgICB3aWtpU291cmNlID0gZ2VvbG9neS5zb3VyY2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZz57bmFtZX08L0hlYWRpbmc+XG4gICAgICA8RmxleENvbnRhaW5lcj5cbiAgICAgICAge2J1dHRvbnMubWFwKCh0eXBlKSA9PiAoXG4gICAgICAgICAgPFRhYlxuICAgICAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmUgPT09IHR5cGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUodHlwZSl9XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0eXBlfVxuICAgICAgICAgIDwvVGFiPlxuICAgICAgICApKX1cbiAgICAgIDwvRmxleENvbnRhaW5lcj5cbiAgICAgIDxQbGFuZXRJbWFnZSBpbWFnZXM9e2ltYWdlc30gYWN0aXZlPXthY3RpdmV9IC8+XG4gICAgICA8T3ZlcnZpZXc+e3BsYW5ldEluZm99PC9PdmVydmlldz5cbiAgICAgIDxTb3VyY2U+XG4gICAgICAgIDxzcGFuPlNvdXJjZTogPC9zcGFuPlxuICAgICAgICA8V2lraUxpbmsgaHJlZj17d2lraVNvdXJjZX0+XG4gICAgICAgICAgV2lraXBlZGlhe1wiIFwifVxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICAgICAgICBkPVwiTTExLjM0LjY2QzEwLjkuMjIgMTAuMzcgMCA5Ljc1IDBoLTcuNUMxLjYzIDAgMS4xLjIyLjY2LjY2LjIyIDEuMSAwIDEuNjMgMCAyLjI1djcuNWMwIC42Mi4yMiAxLjE1LjY2IDEuNTkuNDQuNDQuOTcuNjYgMS41OS42Nmg3LjVjLjYyIDAgMS4xNS0uMjIgMS41OS0uNjYuNDQtLjQ0LjY2LS45Ny42Ni0xLjU5di03LjVjMC0uNjItLjIyLTEuMTUtLjY2LTEuNTl6TTEwIDYuMjVhLjQ2Ny40NjcgMCAwMS0uMzA1LjQ2LjU0NC41NDQgMCAwMS0uMTk1LjA0LjQ2NS40NjUgMCAwMS0uMzUyLS4xNDlMOC4wMjMgNS40NzYgMy44NTIgOS42NDhhLjQ4MS40ODEgMCAwMS0uMzUyLjE0OS40OC40OCAwIDAxLS4zNTItLjE0OWwtLjc5Ni0uNzk3YS40OC40OCAwIDAxLS4xNDktLjM1MS40OC40OCAwIDAxLjE0OS0uMzUybDQuMTcyLTQuMTcyLTEuMTI1LTEuMTI1Yy0uMTYyLS4xNS0uMTk4LS4zMzMtLjExLS41NDZBLjQ2Ny40NjcgMCAwMTUuNzUgMkg5LjVjLjEzNSAwIC4yNTMuMDUuMzUyLjE0OEEuNDguNDggMCAwMTEwIDIuNXYzLjc1elwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L1dpa2lMaW5rPlxuICAgICAgPC9Tb3VyY2U+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tabs.js\n");

/***/ })

});