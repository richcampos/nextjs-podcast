webpackHotUpdate("static/development/pages/podcast/[id].js",{

/***/ "./components/PodcastView.js":
/*!***********************************!*\
  !*** ./components/PodcastView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastView; });
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





var _jsxFileName = "/Users/imac/Rich/nextjs-podcast/components/PodcastView.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var PodcastView =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PodcastView, _React$Component);

  function PodcastView() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PodcastView);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PodcastView).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PodcastView, [{
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return __jsx("div", {
        clasName: "modal",
        className: "jsx-1097210172",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1097210172" + " " + "clip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("nav", {
        className: "jsx-1097210172",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/channel?id=".concat(clip.channel.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1097210172" + " " + "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Volver"))), __jsx("picture", {
        className: "jsx-1097210172",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image, ")")
        },
        className: "jsx-1097210172",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1097210172" + " " + "player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1097210172",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, clip.title), __jsx("h6", {
        className: "jsx-1097210172",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, clip.channel.title), __jsx("audio", {
        autoPlay: "autoplay",
        controls: "controls",
        className: "jsx-1097210172",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("src", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-1097210172",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1097210172",
        __self: this
      }, "nav.jsx-1097210172{background:none;}nav.jsx-1097210172 a.jsx-1097210172{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-1097210172{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-1097210172{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-1097210172 div.jsx-1097210172{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;padding-top:15%;}.player.jsx-1097210172{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-1097210172{margin:0;}h6.jsx-1097210172{margin:0;margin-top:1em;}audio.jsx-1097210172{margin-top:2em;width:100%;}.modal.jsx-1097210172{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvY29tcG9uZW50cy9Qb2RjYXN0Vmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9CLEFBRzJCLEFBR0ssQUFPUixBQU9BLEFBU0YsQUFRRSxBQUtKLEFBR0EsQUFJTSxBQUtBLFNBWGpCLEFBR2lCLEVBaEJILEVBUWUsRUFZaEIsQUFLTCxDQW5EUixLQUdlLEFBaUROLEVBekJxQixDQWdCOUIsRUFJQSxFQU1VLE1BakRJLEVBa0RILElBbkJTLEtBb0JKLENBbERDLEtBdUJTLE9BUTFCLENBb0JBLEVBbER1QixhQUlULEFBT08sQ0FZUyxXQWxCTixpQkFtQk4sUUF2QmxCLFFBd0JBLDZDQW5CcUIsR0FNSSxnQkFMWCxZQUNkLHVFQUtXLHVDQUNhLDhFQUNYLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvaW1hYy9SaWNoL25leHRqcy1wb2RjYXN0L2NvbXBvbmVudHMvUG9kY2FzdFZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvZGNhc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xpcCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBcIiA+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NsaXAuY2hhbm5lbC5pZH1gfSA+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgPlZvbHZlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2NsaXAudXJscy5pbWFnZX0pYH19IC8+XG4gICAgICAgICAgPC9waWN0dXJlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cbiAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgPGg2PntjbGlwLmNoYW5uZWwudGl0bGV9PC9oNj5cbiAgICAgICAgICAgIDxhdWRpbyBhdXRvUGxheT1cImF1dG9wbGF5XCIgY29udHJvbHM9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICA8c3JjIHNyYz17Y2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XG4gICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IGEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jbGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNSU7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXllciB7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgYXVkaW8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/components/PodcastView.js */"));
    }
  }]);

  return PodcastView;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=[id].js.ced8f61ff4212c64977c.hot-update.js.map