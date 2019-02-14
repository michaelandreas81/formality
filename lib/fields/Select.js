"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PropTypes = require('prop-types');

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _Field2 = require("../Field");

var _Field3 = _interopRequireDefault(_Field2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (_temp2 = _class = function (_Field) {
  _inherits(Select, _Field);

  function Select() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Select)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.clearOnChange = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(Object.getPrototypeOf(Select.prototype), "componentDidMount", this).call(this);
      if (!this.props.defaultValue && this.props.validateOnMount) {
        var first = this.props.options[0] || "";
        if (first) {
          this.setValue(typeof first === "string" ? first : first.value);
        }
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      _get(Object.getPrototypeOf(Select.prototype), "componentDidMount", this).call(this);
      if (!newProps.defaultValue && this.props.validateOnMount) {
        var first = newProps.options[0] || "";
        this.setValue(typeof first === "string" ? first : first.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _props = this.props;
      var cls = _props.className;
      var options = _props.options;

      var value = this.getValue();
      var error = this.error();
      var errorKey = this.errorKey();
      var valid = this.isValid() === false;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames3.default)(cls, (_classnames = {}, _defineProperty(_classnames, cls + "--error", valid), _defineProperty(_classnames, cls + "--working", this.isProcessing()), _defineProperty(_classnames, errorKey ? cls + "--error--" + errorKey : false, valid), _classnames))
        },
        _react2.default.createElement(
          "span",
          { className: cls + "__error" },
          error
        ),
        _react2.default.createElement(
          "select",
          _extends({}, this.props, {
            className: cls + "__control",
            defaultValue: void 0,
            onChange: this.handleChange,
            value: value || ""
          }),
          options.map(function (opt, index) {
            return _react2.default.createElement(
              "option",
              {
                key: index,
                value: typeof opt === "string" ? opt : opt.value
              },
              typeof opt === "string" ? opt : opt.label
            );
          })
        )
      );
    }
  }]);

  return Select;
}(_Field3.default), _class.propTypes = _extends({}, _Field3.default.propTypes, {
  className: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })])).isRequired,
  type: PropTypes.string.isRequired
}), _class.defaultProps = _extends({}, _Field3.default.defaultProps, {
  className: "Select"
}), _temp2);
exports.default = Select;
module.exports = exports["default"];
