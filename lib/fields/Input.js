"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PropTypes = require('prop-types');

var _Field2 = require("../Field");

var _Field3 = _interopRequireDefault(_Field2);

var _PlainInput = require("./PlainInput");

var _PlainInput2 = _interopRequireDefault(_PlainInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (_temp = _class = function (_Field) {
  _inherits(Input, _Field);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      /* eslint-disable */
      var _props = this.props;
      var children = _props.children;
      var defaultValue = _props.defaultValue;
      var onChange = _props.onChange;
      var debounce = _props.debounce;
      var validateOnMount = _props.validateOnMount;
      var value = _props.value;
      var errorMessage = _props.errorMessage;

      var props = _objectWithoutProperties(_props, ["children", "defaultValue", "onChange", "debounce", "validateOnMount", "value", "errorMessage"]);
      /* eslint-enable  */


      return _react2.default.createElement(_PlainInput2.default, _extends({}, props, {
        error: this.error(),
        errorKey: this.errorKey(),
        invalid: this.isValid() === false,
        onChange: this.handleChange,
        processing: this.isProcessing(),
        valid: this.isValid(),
        value: this.getValue()
      }));
    }
  }]);

  return Input;
}(_Field3.default), _class.propTypes = _extends({}, _Field3.default.propTypes, {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}), _class.defaultProps = _extends({}, _Field3.default.defaultProps, {
  className: "Input",
  type: "text"
}), _temp);
exports.default = Input;
module.exports = exports["default"];
