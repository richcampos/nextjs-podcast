webpackHotUpdate("static/development/pages/podcast/[id].js",{

/***/ "./pages/podcast/[id].js":
/*!*******************************!*\
  !*** ./pages/podcast/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imac/Rich/nextjs-podcast/pages/podcast/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Clip() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var clipId = router.query.id;
  var audioClip;
  fetch("https://api.audioboom.com/audio_clips/".concat(clipId, ".mp3")).then(function (data) {
    // let dataClip = data.json()
    // audioCLip = dataClip.body.audio_clip
    console.log(data);
  })["catch"](function (e) {
    console.log(e);
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=[id].js.fcee5552931c26596195.hot-update.js.map