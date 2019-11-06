webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ChannelGrid.js":
/*!***********************************!*\
  !*** ./components/ChannelGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelGrid; });
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





var _jsxFileName = "/Users/imac/Rich/nextjs-podcast/components/ChannelGrid.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChannelGrid, _React$Component);

  function ChannelGrid() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChannelGrid);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChannelGrid).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChannelGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return __jsx("div", {
        className: "jsx-1896203371" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, channels.map(function (channel) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/channel?id=".concat(channel.id),
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-1896203371" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, __jsx("img", {
          src: channel.urls.logo_image.original,
          alt: "",
          className: "jsx-1896203371",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }), __jsx("h2", {
          className: "jsx-1896203371",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, channel.title)));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1896203371",
        __self: this
      }, ".channels.jsx-1896203371{display:grid;grid-gap:30px;padding:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.channel.jsx-1896203371{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5;}.channel.jsx-1896203371 img.jsx-1896203371{width:100%;}h2.jsx-1896203371{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvY29tcG9uZW50cy9DaGFubmVsR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQm9CLEFBRzBCLEFBTUMsQUFNSCxBQUdDLFdBRmQsQ0FHa0IsQ0FmRixDQU1JLGFBTEwsQ0FlRyxJQVQyQixRQUxpQixJQWVuRCxTQUNTLGtCQUNwQixDQVhvQixrQkFDcEIsUUFOQSIsImZpbGUiOiIvVXNlcnMvaW1hYy9SaWNoL25leHRqcy1wb2RjYXN0L2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiID5cbiAgICAgICAgeyBcbiAgICAgICAgICBjaGFubmVscy5tYXAoY2hhbm5lbCA9PiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtjaGFubmVsLmlkfWB9IHByZWZldGNoPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxoMj57IGNoYW5uZWwudGl0bGUgfTwvaDI+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKSBcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWdhcDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGFubmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/components/ChannelGrid.js */"));
    }
  }]);

  return ChannelGrid;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ChannelGrid */ "./components/ChannelGrid.js");







var _jsxFileName = "/Users/imac/Rich/nextjs-podcast/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Podcasts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_components_ChannelGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        channels: channels,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var req, _ref, channels;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.audioboom.com/channels/recommended');

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                _ref = _context.sent;
                channels = _ref.body;
                return _context.abrupt("return", {
                  channels: channels
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.692c9ac8fe0b31094688.hot-update.js.map