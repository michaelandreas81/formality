"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Length = function Length(_ref) {
  var value = _ref.value;
  var is = _ref.is;
  var lessThan = _ref.lessThan;
  var greaterThan = _ref.greaterThan;

  value = value ? value + "" : ""; // coerce to string
  if (is) {
    return value.length === is;
  }

  var key = "length";
  var valid = true,
      message = "";
  if (lessThan) {
    valid = value.length < lessThan;
    message = "Must be less than " + lessThan + " characters";
  }

  if (valid && greaterThan) {
    valid = value.length > greaterThan;
    message = "Must be greater than " + lessThan + " characters";
  }

  return {
    valid: valid,
    message: message,
    key: key
  };
};

exports.default = Length;
module.exports = exports["default"];