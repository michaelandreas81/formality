"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.Select = exports.Input = exports.PlainInput = exports.Field = exports.Form = undefined;

var _rules = require("./rules");

Object.keys(_rules).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rules[key];
    }
  });
});

var _Form2 = require("./Form");

var _Form3 = _interopRequireDefault(_Form2);

var _Field2 = require("./Field");

var _Field3 = _interopRequireDefault(_Field2);

var _PlainInput2 = require("./fields/PlainInput");

var _PlainInput3 = _interopRequireDefault(_PlainInput2);

var _Input2 = require("./fields/Input");

var _Input3 = _interopRequireDefault(_Input2);

var _Select2 = require("./fields/Select");

var _Select3 = _interopRequireDefault(_Select2);

var _Checkbox2 = require("./fields/Checkbox");

var _Checkbox3 = _interopRequireDefault(_Checkbox2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.process = process || {};
process.env = process.env || {};
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

exports.Form = _Form3.default;
exports.Field = _Field3.default;
exports.PlainInput = _PlainInput3.default;
exports.Input = _Input3.default;
exports.Select = _Select3.default;
exports.Checkbox = _Checkbox3.default;