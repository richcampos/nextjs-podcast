webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/ChannelGrid.js":
false,

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
          href: "/channel?id=".concat(channel.id),
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
      }, ".channels.jsx-1896203371{display:grid;grid-gap:30px;padding:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.channel.jsx-1896203371{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5;}.channel.jsx-1896203371 img.jsx-1896203371{width:100%;}h2.jsx-1896203371{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvY29tcG9uZW50cy9Qb2RjYXN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBRzBCLEFBTUMsQUFNSCxBQUdDLFdBRmQsQ0FHa0IsQ0FmRixDQU1JLGFBTEwsQ0FlRyxJQVQyQixRQUxpQixJQWVuRCxTQUNTLGtCQUNwQixDQVhvQixrQkFDcEIsUUFOQSIsImZpbGUiOiIvVXNlcnMvaW1hYy9SaWNoL25leHRqcy1wb2RjYXN0L2NvbXBvbmVudHMvUG9kY2FzdEdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvZGNhc3RHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiID5cbiAgICAgICAgeyBcbiAgICAgICAgICBjaGFubmVscy5tYXAoY2hhbm5lbCA9PiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtjaGFubmVsLmlkfWB9IHByZWZldGNoPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoYW5uZWwudXJscy5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8aDI+eyBjaGFubmVsLnRpdGxlIH08L2gyPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSkgXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhbm5lbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGFubmVsIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/components/PodcastGrid.js */"));
    }
  }]);

  return PodcastGrid;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PodcastGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PodcastGrid */ "./components/PodcastGrid.js");









var _jsxFileName = "/Users/imac/Rich/nextjs-podcast/pages/channel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;




var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          audioClips = _this$props.audioClips,
          series = _this$props.series;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-993636270",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, channel.title), __jsx("h3", {
        className: "jsx-993636270",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Ultimos Podcast"), __jsx(_components_PodcastGrid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        channels: audioClips,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("h3", {
        className: "jsx-993636270",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Series"), __jsx(_components_PodcastGrid__WEBPACK_IMPORTED_MODULE_13__["default"], {
        channels: series,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "993636270",
        __self: this
      }, "h3.jsx-993636270{font-size:1.5em;padding-left:2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ29CLEFBRytCLGdCQUNBLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvaW1hYy9SaWNoL25leHRqcy1wb2RjYXN0L3BhZ2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFBvZGNhc3RHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdEdyaWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5IH0pIHtcbiAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuICAgIGxldCBbcmVxQ2hhbm5lbCwgcmVxU2VyaWVzLCByZXFBdWRpb10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApLFxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcbiAgICBdKVxuXG4gICAgbGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcbiAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXG4gICAgbGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpby5qc29uKClcbiAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xuXG4gICAgbGV0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXG4gICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuXG4gICAgcmV0dXJuIHtjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXN9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XG4gICAgICAgIDxoMz5VbHRpbW9zIFBvZGNhc3Q8L2gzPlxuICAgICAgICA8UG9kY2FzdEdyaWQgY2hhbm5lbHM9e2F1ZGlvQ2xpcHN9IC8+XG4gICAgICAgIDxoMz5TZXJpZXM8L2gzPlxuICAgICAgICA8UG9kY2FzdEdyaWQgY2hhbm5lbHM9e3Nlcmllc30gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/pages/channel.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, idChannel, _ref2, _ref3, reqChannel, reqSeries, reqAudio, dataChannel, channel, dataAudios, audioClips, dataSeries, series;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                idChannel = query.id;
                _context.next = 4;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"))]);

              case 4:
                _ref2 = _context.sent;
                _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 3);
                reqChannel = _ref3[0];
                reqSeries = _ref3[1];
                reqAudio = _ref3[2];
                _context.next = 11;
                return reqChannel.json();

              case 11:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 15;
                return reqAudio.json();

              case 15:
                dataAudios = _context.sent;
                audioClips = dataAudios.body.audio_clips;
                _context.next = 19;
                return reqSeries.json();

              case 19:
                dataSeries = _context.sent;
                series = dataSeries.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audioClips: audioClips,
                  series: series
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.933e35a983499a83028f.hot-update.js.map