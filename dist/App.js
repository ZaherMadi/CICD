"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Formulaire = _interopRequireDefault(require("./Formulaire.jsx"));
require("./App.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Formulaire"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Formulaire["default"], {})]
  });
}
var _default = exports["default"] = App;