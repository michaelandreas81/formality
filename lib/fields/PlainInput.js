"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PropTypes = require('prop-types');

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlainInput = function PlainInput(_ref) {
  var _classnames;

  var cls = _ref.className;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? "text" : _ref$type;
  var _ref$value = _ref.value;
  var value = _ref$value === undefined ? "" : _ref$value;
  var _ref$error = _ref.error;
  var error = _ref$error === undefined ? "" : _ref$error;
  var _ref$errorKey = _ref.errorKey;
  var errorKey = _ref$errorKey === undefined ? null : _ref$errorKey;
  var _ref$onChange = _ref.onChange;
  var onChange = _ref$onChange === undefined ? function () {} : _ref$onChange;
  var _ref$processing = _ref.processing;
  var processing = _ref$processing === undefined ? false : _ref$processing;
  var _ref$valid = _ref.valid;
  var valid = _ref$valid === undefined ? false : _ref$valid;
  var _ref$invalid = _ref.invalid;
  var invalid = _ref$invalid === undefined ? !valid : _ref$invalid;

  var props = _objectWithoutProperties(_ref, ["className", "type", "value", "error", "errorKey", "onChange", "processing", "valid", "invalid"]);

  return _react2.default.createElement(
    "div",
    {
      className: (0, _classnames3.default)(cls, (_classnames = {}, _defineProperty(_classnames, cls + "--error", invalid), _defineProperty(_classnames, cls + "--valid", valid), _defineProperty(_classnames, cls + "--working", processing), _defineProperty(_classnames, errorKey ? cls + "--error--" + errorKey : false, invalid), _classnames))
    },
    _react2.default.createElement(
      "span",
      { className: cls + "__error" },
      error
    ),
    _react2.default.createElement("input", _extends({}, props, {
      children: void 0,
      className: cls + "__control",
      defaultValue: void 0,
      onChange: onChange,
      type: type,
      value: value === null ? "" : value
    }))
  );
};

PlainInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  errorKey: PropTypes.string,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  processing: PropTypes.bool,
  type: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  value: PropTypes.any
};

exports.default = PlainInput;
module.exports = exports["default"];
