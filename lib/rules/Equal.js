"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Equal = function Equal(_ref) {
  var value = _ref.value;
  var strict = _ref.strict;
  var to = _ref.to;

  var valid = true;
  var key = "equal";
  var message = "Value must match";
  if (strict) {
    valid = value === to;
  } else {
    valid = value == to; // eslint-disable-line
  }
  return {
    valid: valid,
    key: key,
    message: message
  };
};

exports.default = Equal;
module.exports = exports["default"];