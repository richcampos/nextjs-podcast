webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/PodcastGrid.js":
/*!***********************************!*\
  !*** ./components/PodcastGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/imac/Rich/nextjs-podcast/components/PodcastGrid.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var PodcastGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PodcastGrid, _React$Component);

  function PodcastGrid() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PodcastGrid);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PodcastGrid).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PodcastGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return __jsx("div", {
        className: "jsx-1896203371" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, channels.map(function (channel) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/podcast/".concat(channel.id),
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-1896203371" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, __jsx("img", {
          src: channel.urls.image,
          alt: "",
          className: "jsx-1896203371",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }), __jsx("h2", {
          className: "jsx-1896203371",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, channel.title)));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1896203371",
        __self: this
      }, ".channels.jsx-1896203371{display:grid;grid-gap:30px;padding:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.channel.jsx-1896203371{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5;}.channel.jsx-1896203371 img.jsx-1896203371{width:100%;}h2.jsx-1896203371{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvY29tcG9uZW50cy9Qb2RjYXN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBRzBCLEFBTUMsQUFNSCxBQUdDLFdBRmQsQ0FHa0IsQ0FmRixDQU1JLGFBTEwsQ0FlRyxJQVQyQixRQUxpQixJQWVuRCxTQUNTLGtCQUNwQixDQVhvQixrQkFDcEIsUUFOQSIsImZpbGUiOiIvVXNlcnMvaW1hYy9SaWNoL25leHRqcy1wb2RjYXN0L2NvbXBvbmVudHMvUG9kY2FzdEdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvZGNhc3RHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiID5cbiAgICAgICAgeyBcbiAgICAgICAgICBjaGFubmVscy5tYXAoY2hhbm5lbCA9PiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3BvZGNhc3QvJHtjaGFubmVsLmlkfWB9IHByZWZldGNoPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwudXJscy5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8aDI+eyBjaGFubmVsLnRpdGxlIH08L2gyPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSkgXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhbm5lbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGFubmVsIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/components/PodcastGrid.js */"));
    }
  }]);

  return PodcastGrid;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.5b7c43ed759a15b8ac9d.hot-update.js.map