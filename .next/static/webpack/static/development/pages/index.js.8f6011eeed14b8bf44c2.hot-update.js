webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var web3;

if ( true && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
} // const Web3 = require("web3");
// const ethEnabled = () => {
//   if (window.ethereum) {
//     window.web3 = new Web3(window.ethereum);
//     window.ethereum.enable();
//     return true;
//   }
//   return false;
// }
// if (!ethEnabled()) {
//   alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
// }


/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})