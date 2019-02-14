"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _coreDecorators = require("core-decorators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Form = (_class = (_temp2 = _class2 = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: "setHasValidation",
    value: function setHasValidation(name, val) {
      this.setFieldState(name, "should_validate", val);
    }
  }, {
    key: "setFieldState",
    value: function setFieldState(name, keys, value) {
      var _this2 = this;

      if (typeof keys === "string") {
        keys = _defineProperty({}, keys, value);
      }

      var newState = {};
      for (var key in keys) {
        newState["_field_" + name + "_" + key] = keys[key];
      }
      this.setState(newState, function () {
        return _this2.props.onChange(_this2);
      });
    }
  }, {
    key: "getFieldState",
    value: function getFieldState(name, keys) {
      if (typeof keys === "string") {
        return this.state["_field_" + name + "_" + keys];
      } else {
        var state = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            state[key] = this.state["_field_" + name + "_" + key];
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return state;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var except = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      var valueMatcher = /^_field_(.*?)_value$/;
      var nextState = {};
      for (var key in this.state) {
        // Skip non-matching
        var matches = key.match(valueMatcher);
        if (!matches) {
          continue;
        }
        // Skip ignored
        var name = matches[1];
        if (except.indexOf(name) > -1) {
          continue;
        }

        var validate = this.getFieldState(name, "should_validate");

        nextState["_field_" + name + "_value"] = null;
        nextState["_field_" + name + "_valid"] = validate === false ? true : null;
        nextState["_field_" + name + "_message"] = null;
        nextState["_field_" + name + "_error_key"] = null;
      }
      this.setState(nextState);
    }
  }, {
    key: "register",
    value: function register(name) {
      this.setFieldState(name, {
        "value": null,
        "message": null,
        "valid": null
      });
    }
  }, {
    key: "setValue",
    value: function setValue(name, value) {
      this.setFieldState(name, "value", value);
    }
  }, {
    key: "getValue",
    value: function getValue(name) {
      return this.getFieldState(name, "value");
    }
  }, {
    key: "isFieldValid",
    value: function isFieldValid(name) {
      return this.getFieldState(name, "valid");
    }
  }, {
    key: "getError",
    value: function getError(name) {
      return this.getFieldState(name, "message");
    }
  }, {
    key: "getErrorKey",
    value: function getErrorKey(name) {
      return this.getFieldState(name, "error_key");
    }
  }, {
    key: "setFieldValid",
    value: function setFieldValid(name, valid, message, error_key) {
      this.setFieldState(name, {
        valid: valid,
        message: message,
        error_key: error_key
      });
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        register: this.register,
        setValue: this.setValue,
        setHasValidation: this.setHasValidation,
        getValue: this.getValue,
        setValid: this.setFieldValid,
        getError: this.getError,
        getErrorKey: this.getErrorKey,
        isValid: this.isFieldValid,
        getAllValues: this.values
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var _props = this.props;
      var onSubmit = _props.onSubmit;
      var submitOnInvalid = _props.submitOnInvalid;

      if ((submitOnInvalid || this.isValid()) && onSubmit) {
        onSubmit(_extends({}, e, { data: this.values() }));
      }
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var _this3 = this;

      var fields = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (fields && fields instanceof Array) {
        return fields.every(function (f) {
          return _this3.isFieldValid(f);
        });
      }
      var validMatcher = /^_field_.*?_valid$/;
      for (var key in this.state) {
        if (validMatcher.test(key) && !this.state[key]) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "values",
    value: function values() {
      var data = {};
      var valueMatcher = /^_field_(.*?)_value$/;
      for (var key in this.state) {
        var matches = key.match(valueMatcher);
        if (!matches) {
          continue;
        }
        data[matches[1]] = this.state[key];
      }
      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var valid = this.isValid();
      return _react2.default.createElement(
        "form",
        {
          className: (0, _classnames2.default)("Formality", {
            "Formality--valid": valid,
            "Formality--invalid": !valid
          }),
          onSubmit: this.handleSubmit
        },
        this.props.children
      );
    }
  }]);

  return Form;
}(_react2.default.Component), _class2.propTypes = {
  children: _react.PropTypes.node,
  onChange: _react.PropTypes.func.isRequired,
  onSubmit: _react.PropTypes.func.isRequired,
  submitOnInvalid: _react.PropTypes.bool
}, _class2.defaultProps = {
  onSubmit: function onSubmit() {},
  onChange: function onChange() {},
  submitOnInvalid: false
}, _class2.childContextTypes = {
  getValue: _react.PropTypes.func,
  setHasValidation: _react.PropTypes.func,
  setValue: _react.PropTypes.func,
  setValid: _react.PropTypes.func,
  getError: _react.PropTypes.func,
  getErrorKey: _react.PropTypes.func,
  isValid: _react.PropTypes.func,
  register: _react.PropTypes.func,
  getAllValues: _react.PropTypes.func
}, _temp2), (_applyDecoratedDescriptor(_class.prototype, "setHasValidation", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "setHasValidation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "register", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "register"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setValue", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "setValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getValue", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "getValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isFieldValid", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "isFieldValid"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getError", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "getError"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getErrorKey", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "getErrorKey"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFieldValid", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "setFieldValid"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSubmit", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleSubmit"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "values", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "values"), _class.prototype)), _class);
exports.default = Form;
module.exports = exports["default"];