"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _App = _interopRequireDefault(require("./App.js"));
var _Formulaire = _interopRequireDefault(require("./Formulaire.jsx"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var validFormData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '2000-01-01',
  postalCode: '75000',
  city: 'Paris',
  email: 'john.doe@example.com'
};
var fillForm = function fillForm() {
  _react2.fireEvent.change(_react2.screen.getByLabelText(/^Prénom\s*:/i), {
    target: {
      value: validFormData.firstName
    }
  });
  _react2.fireEvent.change(_react2.screen.getByLabelText(/^Nom\s*:/i), {
    target: {
      value: validFormData.lastName
    }
  });
  _react2.fireEvent.change(_react2.screen.getByLabelText(/Date de naissance/i), {
    target: {
      value: validFormData.birthDate
    }
  });
  _react2.fireEvent.change(_react2.screen.getByLabelText(/Code Postal/i), {
    target: {
      value: validFormData.postalCode
    }
  });
  _react2.fireEvent.change(_react2.screen.getByLabelText(/Ville/i), {
    target: {
      value: validFormData.city
    }
  });
  _react2.fireEvent.change(_react2.screen.getByLabelText(/Email/i), {
    target: {
      value: validFormData.email
    }
  });
};
describe('App Component', function () {
  test('renders the App component with the title', function () {
    (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
    expect(_react2.screen.getByText(/Formulaire/i)).toBeInTheDocument();
  });
  test('renders the Formulaire component', function () {
    (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
    expect(_react2.screen.getByTestId('formulaire')).toBeInTheDocument();
  });
});
describe('Formulaire Component', function () {
  beforeEach(function () {
    (0, _react2.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Formulaire["default"], {}));
  });
  test('renders all fields and submit button', function () {
    expect(_react2.screen.getByLabelText(/^Nom\s*:/i)).toBeInTheDocument();
    expect(_react2.screen.getByLabelText(/^Prénom\s*:/i)).toBeInTheDocument();
    expect(_react2.screen.getByLabelText(/Date de naissance/i)).toBeInTheDocument();
    expect(_react2.screen.getByLabelText(/Code Postal/i)).toBeInTheDocument();
    expect(_react2.screen.getByLabelText(/Ville/i)).toBeInTheDocument();
    expect(_react2.screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(_react2.screen.getByRole('button', {
      name: /Soumettre/i
    })).toBeInTheDocument();
  });
  test('shows validation errors for invalid inputs', function () {
    _react2.fireEvent.change(_react2.screen.getByLabelText(/^Prénom\s*:/i), {
      target: {
        value: '123'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByLabelText(/Email/i), {
      target: {
        value: 'not-an-email'
      }
    });
    _react2.fireEvent.click(_react2.screen.getByRole('button', {
      name: /Soumettre/i
    }));
    expect(_react2.screen.getByText(/Champ invalide/i)).toBeInTheDocument();
    expect(_react2.screen.getByText(/Email invalide/i)).toBeInTheDocument();
  });
  test('submit button is disabled when form is invalid', function () {
    expect(_react2.screen.getByRole('button', {
      name: /Soumettre/i
    })).toBeDisabled();
  });
  test('submit button is enabled when form is valid', function () {
    fillForm();
    expect(_react2.screen.getByRole('button', {
      name: /Soumettre/i
    })).not.toBeDisabled();
  });
  test('clears form and errors on successful submission', function () {
    fillForm();
    _react2.fireEvent.click(_react2.screen.getByRole('button', {
      name: /Soumettre/i
    }));
    expect(_react2.screen.getByLabelText(/^Prénom\s*:/i).value).toBe('');
    expect(_react2.screen.queryByText(/Champ invalide/i)).not.toBeInTheDocument();
  });
  test('saves data to localStorage on successful submission', function () {
    fillForm();
    _react2.fireEvent.click(_react2.screen.getByRole('button', {
      name: /Soumettre/i
    }));
    var saved = JSON.parse(localStorage.getItem('Formulaire'));
    expect(saved).toEqual(validFormData);
  });
});