"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Required = function Required(_ref) {
  var value = _ref.value;

  return {
    valid: !!value,
    key: "required",
    message: "This field is required"
  };
};

exports.default = Required;
module.exports = exports["default"];