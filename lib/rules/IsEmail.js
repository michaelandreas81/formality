"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmail = require("validator/lib/isEmail");

var _isEmail2 = _interopRequireDefault(_isEmail);

var _compose = require("./compose");

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _compose2.default)(_isEmail2.default, "Please provide a valid email address", "email");
module.exports = exports["default"];