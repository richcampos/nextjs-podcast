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
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Podcast"), __jsx("div", {
    clasName: "modal",
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-883603118" + " " + "clip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-883603118",
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
    className: "jsx-883603118" + " " + "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Volver"))), __jsx("picture", {
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    style: {
      backgroundImage: "url(".concat(clip.urls.image, ")")
    },
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-883603118" + " " + "player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, clip.title), __jsx("h6", {
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, clip.channel.title), __jsx("audio", {
    autoPlay: "autoplay",
    controls: "controls",
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("src", {
    src: clip.urls.high_mp3,
    type: "audio/mpeg",
    className: "jsx-883603118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3697657295",
    __self: this
  }, "header.jsx-883603118{color:#fff;background:#8756ca;padding:15px;text-align:center;}nav.jsx-883603118{background:none;}nav.jsx-883603118 a.jsx-883603118{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-883603118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-883603118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-883603118 div.jsx-883603118{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-883603118{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-883603118{margin:0;}h6.jsx-883603118{margin:0;margin-top:1em;}audio.jsx-883603118{margin-top:2em;width:100%;}.modal.jsx-883603118{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvcGFnZXMvcG9kY2FzdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFHc0IsQUFNSyxBQUdLLEFBT1IsQUFPQSxBQVNGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLQSxTQVhqQixBQUdpQixFQS9DSSxBQWdDUCxFQU9lLEVBWWhCLEFBS0wsQ0FsRFIsS0FHZSxBQWdETixFQXhCcUIsQ0FlOUIsRUFJQSxFQU1VLEVBekRLLElBU0QsRUFpREgsSUFuQlMsR0F0Q0EsRUEwREosQ0FqREMsS0F1QlMsT0FPMUIsQ0FvQkEsRUExREEsQUFTdUIsYUFJVCxBQU9PLENBWVMsV0FsQk4saUJBbUJ4QixRQXZCQSxxREFLcUIsR0FNSSxnQkFMWCxZQUNkLHVFQUtXLHVDQUNhLDhFQUNYLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvaW1hYy9SaWNoL25leHRqcy1wb2RjYXN0L3BhZ2VzL3BvZGNhc3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgQ2xpcCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjbGlwIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoZWFkZXI+UG9kY2FzdDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpcFwiID5cbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7Y2xpcC5jaGFubmVsLmlkfWB9ID5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2xvc2VcIiA+Vm9sdmVyPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7Y2xpcC51cmxzLmltYWdlfSlgfX0gLz5cbiAgICAgICAgICA8L3BpY3R1cmU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlxuICAgICAgICAgICAgPGgzPntjbGlwLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8aDY+e2NsaXAuY2hhbm5lbC50aXRsZX08L2g2PlxuICAgICAgICAgICAgPGF1ZGlvIGF1dG9QbGF5PVwiYXV0b3BsYXlcIiBjb250cm9scz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgIDxzcmMgc3JjPXtjbGlwLnVybHMuaGlnaF9tcDN9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cbiAgICAgICAgICAgIDwvYXVkaW8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBuYXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IGEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jbGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubW9kYWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5DbGlwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcbiAgY29uc3QgcmVxQ2xpcCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2F1ZGlvX2NsaXBzLyR7aWR9Lm1wM2ApXG4gIGNvbnN0IGNsaXBEYXRhID0gYXdhaXQgcmVxQ2xpcC5qc29uKClcbiAgY29uc3QgY2xpcCA9IGNsaXBEYXRhLmJvZHkuYXVkaW9fY2xpcFxuICByZXR1cm4geyBjbGlwIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDbGlwXG4iXX0= */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/pages/podcast/[id].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1768601800",
    __self: this
  }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL1JpY2gvbmV4dGpzLXBvZGNhc3QvcGFnZXMvcG9kY2FzdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHeUIsQUFHb0IsU0FDYSxzQkFDTCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2ltYWMvUmljaC9uZXh0anMtcG9kY2FzdC9wYWdlcy9wb2RjYXN0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IENsaXAgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xpcCB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aGVhZGVyPlBvZGNhc3Q8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBcIiA+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NsaXAuY2hhbm5lbC5pZH1gfSA+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCIgPlZvbHZlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke2NsaXAudXJscy5pbWFnZX0pYH19IC8+XG4gICAgICAgICAgPC9waWN0dXJlPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cbiAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgPGg2PntjbGlwLmNoYW5uZWwudGl0bGV9PC9oNj5cbiAgICAgICAgICAgIDxhdWRpbyBhdXRvUGxheT1cImF1dG9wbGF5XCIgY29udHJvbHM9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICA8c3JjIHNyYz17Y2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XG4gICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIG5hdiBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY2xpcCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMTAlO1xuICAgICAgICB9XG4gICAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBhdWRpbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuQ2xpcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XG4gIGNvbnN0IHJlcUNsaXAgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9hdWRpb19jbGlwcy8ke2lkfS5tcDNgKVxuICBjb25zdCBjbGlwRGF0YSA9IGF3YWl0IHJlcUNsaXAuanNvbigpXG4gIGNvbnN0IGNsaXAgPSBjbGlwRGF0YS5ib2R5LmF1ZGlvX2NsaXBcbiAgcmV0dXJuIHsgY2xpcCB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2xpcFxuIl19 */\n/*@ sourceURL=/Users/imac/Rich/nextjs-podcast/pages/podcast/[id].js */"));
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
//# sourceMappingURL=[id].js.a07c18afaa8efca03dc6.hot-update.js.map