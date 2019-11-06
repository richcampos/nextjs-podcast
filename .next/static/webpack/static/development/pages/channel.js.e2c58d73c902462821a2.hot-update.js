webpackHotUpdate("static/development/pages/channel.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");









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
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1576097445",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, channel.title), __jsx("h3", {
        className: "jsx-1576097445",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Ultimos Podcast"), __jsx("div", {
        className: "jsx-1576097445" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, audioClips.map(function (clip) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/podcast/".concat(clip.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-1576097445" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, __jsx("img", {
          src: clip.urls.image,
          className: "jsx-1576097445",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), __jsx("h2", {
          className: "jsx-1576097445",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, clip.title)));
      })), __jsx("h3", {
        className: "jsx-1576097445",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Series"), __jsx("div", {
        className: "jsx-1576097445" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, series.map(function (serie) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/serie/".concat(serie.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-1576097445" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx("img", {
          src: serie.urls.logo_image.original,
          className: "jsx-1576097445",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), __jsx("h2", {
          className: "jsx-1576097445",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, serie.title)));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1576097445",
        __self: this
      }, ".channels.jsx-1576097445{display:grid;grid-gap:30px;padding:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}.channel.jsx-1576097445{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5;}.channel.jsx-1576097445 img.jsx-1576097445{width:100%;}h1.jsx-1576097445{padding-left:2%;}h2.jsx-1576097445{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}h3.jsx-1576097445{font-size:1.5em;padding-left:2%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RG9CLEFBRzRCLEFBTUMsQUFNSCxBQUdLLEFBR0osQUFPSSxXQVpsQixDQU1rQixDQWxCRixDQU1JLEVBU3BCLEFBVWtCLFdBeEJILENBa0JHLElBWjJCLEFBbUI3QyxRQXhCOEQsSUFrQm5ELFNBQ1Msa0JBQ3BCLENBZG9CLGtCQUNwQixRQU5BIiwiZmlsZSI6Ii9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvcGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5IH0pIHtcbiAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuICAgIGxldCBbcmVxQ2hhbm5lbCwgcmVxU2VyaWVzLCByZXFBdWRpb10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2ApLFxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYClcbiAgICBdKVxuXG4gICAgbGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcbiAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXG4gICAgbGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpby5qc29uKClcbiAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwc1xuXG4gICAgbGV0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXG4gICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuXG4gICAgcmV0dXJuIHtjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXN9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XG4gICAgICAgIDxoMz5VbHRpbW9zIFBvZGNhc3Q8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYXVkaW9DbGlwcy5tYXAoY2xpcCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb2RjYXN0LyR7Y2xpcC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NsaXAudXJscy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntjbGlwLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz5TZXJpZXM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VyaWVzLm1hcChzZXJpZSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zZXJpZS8ke3NlcmllLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VyaWUudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3NlcmllLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhbm5lbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/pages/channel.js */"));
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
//# sourceMappingURL=channel.js.e2c58d73c902462821a2.hot-update.js.map