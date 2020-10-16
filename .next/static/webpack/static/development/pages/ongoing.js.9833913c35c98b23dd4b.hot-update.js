webpackHotUpdate("static/development/pages/ongoing.js",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_poll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/poll */ "./ethereum/poll.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Question = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Question, _Component);

  var _super = _createSuper(Question);

  function Question() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Question);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      loading: false,
      errorMessage: '',
      show: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "voteYes", function _callee() {
      var accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_poll__WEBPACK_IMPORTED_MODULE_10__["default"].methods.voteYay(_this.props.id).send({
                from: accounts[0]
              }));

            case 7:
              next_router__WEBPACK_IMPORTED_MODULE_12__["Router"].pushRoute('/ongoing');
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 13:
              _this.setState({
                loading: false
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 10]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "voteNo", function _callee2() {
      var accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              _context2.prev = 1;
              _context2.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 4:
              accounts = _context2.sent;
              _context2.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_poll__WEBPACK_IMPORTED_MODULE_10__["default"].methods.voteNay(_this.props.id).send({
                from: accounts[0]
              }));

            case 7:
              next_router__WEBPACK_IMPORTED_MODULE_12__["Router"].pushRoute('/ongoing');
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);

              _this.setState({
                errorMessage: _context2.t0.message
              });

            case 13:
              _this.setState({
                loading: false
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 10]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "declare", function _callee3() {
      var accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 2:
              accounts = _context3.sent;
              _context3.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_poll__WEBPACK_IMPORTED_MODULE_10__["default"].methods.updateAnswer(_this.props.id).send({
                from: accounts[0]
              }));

            case 5:
              document.location.reload();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Question, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var manager, accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_poll__WEBPACK_IMPORTED_MODULE_10__["default"].methods.manager().call());

            case 2:
              manager = _context4.sent;
              _context4.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 5:
              accounts = _context4.sent;

              if (accounts[0] == manager) {
                this.setState({
                  show: true
                });
              }

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var er = this.state.errorMessage;
      var _this$props = this.props,
          question = _this$props.question,
          complete = _this$props.complete; //console.log(this.state.errorMessage)

      if (er == 'No "from" address specified in neither the given options, nor the default options.') {
        alert('Your MetaMask wallet is not configured properly!');
        console.log('Metamask account should be set to Rinkeby testnet and allow access to this website');
      } else if (er) {
        alert(er);
      }

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        centered: true
      }, complete ? null : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Header, {
        style: {
          marginTop: '20px'
        }
      }, question), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Content, {
        extra: true
      }, __jsx("div", {
        style: {
          marginTop: '15px'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        basic: true,
        color: "green",
        onClick: this.voteYes
      }, "Yay"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        basic: true,
        color: "red",
        onClick: this.voteNo
      }, "Nay"), this.state.show ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        fluid: true,
        onClick: this.declare,
        style: {
          marginTop: '15px'
        },
        size: "large"
      }, "Declare Result") : null)))));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})