"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _App = _interopRequireDefault(require("./App.js"));
var _Formulaire = _interopRequireDefault(require("./Formulaire.jsx"));
var _validation = require("./validation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
test('returns false for future birth date', function () {
  var futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);
  expect((0, _validation.validateDateOfBirth)(futureDate.toISOString().split('T')[0])).toBe(false);
});
test('returns false for under 18', function () {
  var recentDate = new Date();
  recentDate.setFullYear(recentDate.getFullYear() - 17);
  expect((0, _validation.validateDateOfBirth)(recentDate.toISOString().split('T')[0])).toBe(false);
});