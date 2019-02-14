"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generate a validator from a basic boolean function
 * Will return valid on empty values
 * @param  {Function} fn      Function to pass value to
 * @param  {string}   message Optional error message
 * @param  {string}   key     Optional key value for rule
 * @return {Function}         Resulting validator
 */
var compose = function compose(fn) {
  var message = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  return function (_ref) {
    var value = _ref.value;

    if (!value) {
      return true;
    }

    return {
      valid: !!fn(value),
      message: message,
      key: key
    };
  };
};

exports.default = compose;
module.exports = exports["default"];