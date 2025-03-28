"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _validation = require("./validation.js");
require("./Formulaire.css");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Formulaire = function Formulaire() {
  var _useState = (0, _react.useState)({
      firstName: "",
      lastName: "",
      birthDate: "",
      postalCode: "",
      city: "",
      email: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    console.log("\uD83D\uDFE1 [handleChange] Champ modifi\xE9: ".concat(name, " => \"").concat(value, "\""));
    var cleanedValue = value.trim();
    setFormData(function (prev) {
      var updated = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, cleanedValue));
      console.log("📦 [formData mis à jour]:", updated);
      return updated;
    });

    // Validation dynamique
    var newErrors = _objectSpread({}, errors);
    switch (name) {
      case "firstName":
      case "lastName":
      case "city":
        newErrors[name] = (0, _validation.validateName)(cleanedValue) ? "" : "Champ invalide";
        console.log("\uD83E\uDDEA [validateName] ".concat(name, ": \"").concat(cleanedValue, "\" => ").concat((0, _validation.validateName)(cleanedValue)));
        break;
      case "email":
        newErrors[name] = (0, _validation.validateEmail)(cleanedValue) ? "" : "Email invalide";
        console.log("\uD83D\uDCE7 [validateEmail] \"".concat(cleanedValue, "\" => ").concat((0, _validation.validateEmail)(cleanedValue)));
        break;
      case "postalCode":
        newErrors[name] = (0, _validation.validatePostalCode)(cleanedValue) ? "" : "Code postal invalide";
        console.log("\uD83D\uDCEE [validatePostalCode] \"".concat(cleanedValue, "\" => ").concat((0, _validation.validatePostalCode)(cleanedValue)));
        break;
      case "birthDate":
        newErrors[name] = (0, _validation.validateDateOfBirth)(cleanedValue) ? "" : "Vous devez avoir plus de 18 ans";
        console.log("\uD83C\uDF82 [validateDateOfBirth] \"".concat(cleanedValue, "\" => ").concat((0, _validation.validateDateOfBirth)(cleanedValue)));
        break;
      default:
    }
    setErrors(newErrors);
    console.log("❗ [errors actuels]:", newErrors);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("🚀 [Soumission] Données:", formData);
    var newErrors = {};
    if (!(0, _validation.validateName)(formData.firstName)) newErrors.firstName = "Nom invalide";
    if (!(0, _validation.validateName)(formData.lastName)) newErrors.lastName = "Prénom invalide";
    if (!(0, _validation.validateDateOfBirth)(formData.birthDate)) newErrors.birthDate = "Vous devez avoir plus de 18 ans";
    if (!(0, _validation.validatePostalCode)(formData.postalCode)) newErrors.postalCode = "Code postal invalide";
    if (!(0, _validation.validateName)(formData.city)) newErrors.city = "Ville invalide";
    if (!(0, _validation.validateEmail)(formData.email)) newErrors.email = "Email invalide";
    console.log("📛 [Résultat validation finale]:", newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("✅ Inscription réussie !");
      setErrors({});
      localStorage.setItem("Formulaire", JSON.stringify(formData));
      setFormData({
        firstName: "",
        lastName: "",
        birthDate: "",
        postalCode: "",
        city: "",
        email: ""
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    "data-testid": "formulaire",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "10px"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1,
          display: "flex",
          gap: "10px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "lastName",
          children: "Nom :"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          id: "lastName",
          type: "text",
          name: "lastName",
          value: formData.lastName,
          onChange: handleChange
        }), errors.lastName && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            color: "red"
          },
          children: errors.lastName
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1,
          display: "flex",
          gap: "10px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "firstName",
          children: "Pr\xE9nom :"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          id: "firstName",
          type: "text",
          name: "firstName",
          value: formData.firstName,
          onChange: handleChange
        }), errors.firstName && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            color: "red"
          },
          children: errors.firstName
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "10px"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1,
          display: "flex",
          gap: "10px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "birthDate",
          children: "Date de naissance :"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          id: "birthDate",
          type: "date",
          name: "birthDate",
          value: formData.birthDate,
          onChange: handleChange
        }), errors.birthDate && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            color: "red"
          },
          children: errors.birthDate
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1,
          display: "flex",
          gap: "10px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "postalCode",
          children: "Code Postal :"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          id: "postalCode",
          type: "text",
          name: "postalCode",
          value: formData.postalCode,
          onChange: handleChange
        }), errors.postalCode && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            color: "red"
          },
          children: errors.postalCode
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "10px"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1,
          display: "flex",
          gap: "10px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "city",
          children: "Ville :"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          id: "city",
          type: "text",
          name: "city",
          value: formData.city,
          onChange: handleChange
        }), errors.city && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            color: "red"
          },
          children: errors.city
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          flex: 1,
          display: "flex",
          gap: "10px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: "email",
          children: "Email :"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          id: "email",
          type: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange
        }), errors.email && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            color: "red"
          },
          children: errors.email
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        textAlign: "center",
        marginTop: "20px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "submit",
        disabled: Object.values(errors).some(function (err) {
          return err !== "";
        }) || Object.values(formData).some(function (val) {
          return val.trim() === "";
        }),
        children: "Soumettre"
      })
    })]
  });
};
var _default = exports["default"] = Formulaire;