webpackHotUpdate("static/development/pages/podcast/[id].js",{

/***/ "./pages/podcast/[id].js":
/*!*******************************!*\
  !*** ./pages/podcast/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/imac/Rich/nextjs-podcast/pages/podcast/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Clip = function Clip(props) {
  var clip = props.clip;
  return __jsx("div", {
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Podcast"), __jsx("div", {
    clasName: "modal",
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4201597102" + " " + "clip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/channel?id=".concat(clip.channel.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4201597102" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Volver"))), __jsx("picture", {
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    style: {
      backgroundImage: "url(".concat(clip.urls.image, ")")
    },
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4201597102" + " " + "player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, clip.title), __jsx("h6", {
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, clip.channel.title), __jsx("audio", {
    autoPlay: "autoplay",
    controls: "controls",
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("src", {
    src: clip.urls.high_mp3,
    type: "audio/mpeg",
    className: "jsx-4201597102",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1225136079",
    __self: this
  }, "header.jsx-4201597102{color:#fff;background:#8756ca;padding:15px;text-align:center;}nav.jsx-4201597102{background:none;}nav.jsx-4201597102 a.jsx-4201597102{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-4201597102{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-4201597102{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-4201597102 div.jsx-4201597102{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;padding-top:15%;}.player.jsx-4201597102{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-4201597102{margin:0;}h6.jsx-4201597102{margin:0;margin-top:1em;}audio.jsx-4201597102{margin-top:2em;width:100%;}.modal.jsx-4201597102{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvcGFnZXMvcG9kY2FzdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFHc0IsQUFNSyxBQUdLLEFBT1IsQUFPQSxBQVNGLEFBUUUsQUFLSixBQUdBLEFBSU0sQUFLQSxTQVhqQixBQUdpQixFQWhESSxBQWdDUCxFQVFlLEVBWWhCLEFBS0wsQ0FuRFIsS0FHZSxBQWlETixFQXpCcUIsQ0FnQjlCLEVBSUEsRUFNVSxFQTFESyxJQVNELEVBa0RILElBbkJTLEdBdkNBLEVBMkRKLENBbERDLEtBdUJTLE9BUTFCLENBb0JBLEVBM0RBLEFBU3VCLGFBSVQsQUFPTyxDQVlTLFdBbEJOLGlCQW1CTixRQXZCbEIsUUF3QkEsNkNBbkJxQixHQU1JLGdCQUxYLFlBQ2QsdUVBS1csdUNBQ2EsOEVBQ1gsV0FDQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvcGFnZXMvcG9kY2FzdC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBDbGlwID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsaXAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlcj5Qb2RjYXN0PC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwXCIgPlxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtjbGlwLmNoYW5uZWwuaWR9YH0gPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZVwiID5Wb2x2ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHtjbGlwLnVybHMuaW1hZ2V9KWB9fSAvPlxuICAgICAgICAgIDwvcGljdHVyZT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XG4gICAgICAgICAgICA8aDM+e2NsaXAudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxoNj57Y2xpcC5jaGFubmVsLnRpdGxlfTwvaDY+XG4gICAgICAgICAgICA8YXVkaW8gYXV0b1BsYXk9XCJhdXRvcGxheVwiIGNvbnRyb2xzPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgPHNyYyBzcmM9e2NsaXAudXJscy5oaWdoX21wM30gdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxuICAgICAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNsaXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICBwaWN0dXJlIGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1JTtcbiAgICAgICAgfVxuICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBhdWRpbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuQ2xpcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XG4gIGNvbnN0IHJlcUNsaXAgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9hdWRpb19jbGlwcy8ke2lkfS5tcDNgKVxuICBjb25zdCBjbGlwRGF0YSA9IGF3YWl0IHJlcUNsaXAuanNvbigpXG4gIGNvbnN0IGNsaXAgPSBjbGlwRGF0YS5ib2R5LmF1ZGlvX2NsaXBcbiAgcmV0dXJuIHsgY2xpcCB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2xpcFxuIl19 */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/pages/podcast/[id].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1768601800",
    __self: this
  }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvcGFnZXMvcG9kY2FzdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHeUIsQUFHb0IsU0FDYSxzQkFDTCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2ltYWMvUmljaC9uZXh0anMtcG9kY2FzdC9wYWdlcy9wb2RjYXN0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IENsaXAgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xpcCB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aGVhZGVyPlBvZGNhc3Q8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBcIiA+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NsaXAuY2hhbm5lbC5pZH1gfSA+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgPlZvbHZlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2NsaXAudXJscy5pbWFnZX0pYH19IC8+XG4gICAgICAgICAgPC9waWN0dXJlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cbiAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgPGg2PntjbGlwLmNoYW5uZWwudGl0bGV9PC9oNj5cbiAgICAgICAgICAgIDxhdWRpbyBhdXRvUGxheT1cImF1dG9wbGF5XCIgY29udHJvbHM9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICA8c3JjIHNyYz17Y2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XG4gICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIG5hdiBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY2xpcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMTAlO1xuICAgICAgICB9XG4gICAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTUlO1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubW9kYWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5DbGlwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcbiAgY29uc3QgcmVxQ2xpcCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2F1ZGlvX2NsaXBzLyR7aWR9Lm1wM2ApXG4gIGNvbnN0IGNsaXBEYXRhID0gYXdhaXQgcmVxQ2xpcC5qc29uKClcbiAgY29uc3QgY2xpcCA9IGNsaXBEYXRhLmJvZHkuYXVkaW9fY2xpcFxuICByZXR1cm4geyBjbGlwIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDbGlwXG4iXX0= */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/pages/podcast/[id].js */"));
};

Clip.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, reqClip, clipData, clip;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return fetch("https://api.audioboom.com/audio_clips/".concat(id, ".mp3"));

          case 3:
            reqClip = _context.sent;
            _context.next = 6;
            return reqClip.json();

          case 6:
            clipData = _context.sent;
            clip = clipData.body.audio_clip;
            return _context.abrupt("return", {
              clip: clip
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Clip);

/***/ })

})
//# sourceMappingURL=[id].js.6e74f219af3738e6b814.hot-update.js.map