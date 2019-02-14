"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _desc, _value, _class, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PropTypes = require('prop-types');

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _coreDecorators = require("core-decorators");

var _Field2 = require("../Field");

var _Field3 = _interopRequireDefault(_Field2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Checkbox = (_class = (_temp2 = _class2 = function (_Field) {
  _inherits(Checkbox, _Field);

  function Checkbox() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Checkbox)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.clearOnChange = false, _this.state = {
      focused: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: "handleChange",
    value: function handleChange(e) {
      var currentTarget = e.currentTarget;

      var value = currentTarget.checked ? this.props.checkedValue : false;
      _get(Object.getPrototypeOf(Checkbox.prototype), "handleChange", this).call(this, _extends({}, e, {
        currentTarget: _extends({}, currentTarget, {
          value: value
        })
      }));
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var focused = this.state.focused;
      var _props = this.props;
      var cls = _props.className;
      var debounce = _props.debounce;
      var // eslint-disable-line no-unused-vars
      errorMessage = _props.errorMessage;
      var // eslint-disable-line no-unused-vars
      checkedValue = _props.checkedValue;
      var // eslint-disable-line no-unused-vars
      label = _props.label;

      var props = _objectWithoutProperties(_props, ["className", "debounce", "errorMessage", "checkedValue", "label"]);

      var checked = null;

      if (this.props.explicitValue) {
        checked = this.getValue() === this.props.checkedValue;
      } else {
        checked = !!this.getValue();
      }
      var error = this.error();
      var errorKey = this.errorKey();
      var valid = this.isValid() === false;

      return _react2.default.createElement(
        "div",
        {
          className: (0, _classnames3.default)(cls, (_classnames = {}, _defineProperty(_classnames, cls + "--error", valid), _defineProperty(_classnames, cls + "--working", this.isProcessing()), _defineProperty(_classnames, cls + "--checked", checked), _defineProperty(_classnames, cls + "--focus", focused), _defineProperty(_classnames, errorKey ? cls + "--error--" + errorKey : false, valid), _classnames))
        },
        _react2.default.createElement(
          "span",
          { className: cls + "__error" },
          error
        ),
        _react2.default.createElement(
          "label",
          { className: cls + "__label" },
          _react2.default.createElement("input", _extends({}, props, {
            checked: checked,
            children: void 0,
            className: cls + "__control",
            defaultValue: void 0,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            type: "checkbox"
          })),
          label
        )
      );
    }
  }]);

  return Checkbox;
}(_Field3.default), _class2.propTypes = _extends({}, _Field3.default.propTypes, {
  checkedValue: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
  explicitValue: PropTypes.bool,
  label: PropTypes.string
}), _class2.defaultProps = _extends({}, _Field3.default.defaultProps, {
  className: "Checkbox",
  checkedValue: true
}), _temp2), (_applyDecoratedDescriptor(_class.prototype, "handleChange", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFocus", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBlur", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleBlur"), _class.prototype)), _class);
exports.default = Checkbox;
module.exports = exports["default"];
