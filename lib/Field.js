"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PropTypes = require('prop-types');

var _debounce = require("debounce");

var _debounce2 = _interopRequireDefault(_debounce);

var _coreDecorators = require("core-decorators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Field = (_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field(props) {
    _classCallCheck(this, Field);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this, props));

    _this.state = {
      _value: null,
      _valid: null,
      _show: false,
      _message: null,
      _validating: false
    };
    _this.clearOnChange = true;

    if (props.debounce) {
      _this._debouncedShow = (0, _debounce2.default)(_this._show, props.debounce);
      _this.asyncValidation = (0, _debounce2.default)(_this._asyncValidation, props.debounce);
    } else {
      _this._debouncedShow = _this._show;
      _this.asyncValidation = _this._asyncValidation;
    }
    return _this;
  }

  _createClass(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.context.register) {
        this.context.register(this.props.name);
      }

      if (this.props.validateOnMount) {
        this.validate(void 0, true);
      }

      // Set valid to true when no children, i.e. rules are present
      if (!this.rules().length) {
        this.setValid(true);
        this.setHasValidation(false);
      }

      var defaultValue = this.props.defaultValue;

      if (defaultValue !== null && defaultValue !== void 0) {
        this.setValue(defaultValue);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.validateOnMount && !this.props.validateOnMount) {
        this.validate(void 0, true);
      }

      var defaultValue = nextProps.defaultValue;

      if (defaultValue !== null && defaultValue !== void 0 && defaultValue !== this.props.defaultValue) {
        this.setValue(defaultValue);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var name = this.props.name;

      if ("value" in this.props) {
        return this.props.value;
      }
      return this.context.getValue ? this.context.getValue(name) : this.state._value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var event = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var name = this.props.name;

      if (this.context.setValue) {
        this.context.setValue(name, value);
      } else {
        this.setState({
          _value: value
        });
      }

      if (this.clearOnChange) {
        this.show(false);
      }

      this.validate(value);

      if (this.props.onChange) {
        var e = _extends({ currentTarget: {}, target: {} }, event);
        e.currentTarget = _extends({}, e.currentTarget, { value: value });
        e.target = _extends({}, e.target, { value: value });
        this.props.onChange(e);
      }
    }
  }, {
    key: "setHasValidation",
    value: function setHasValidation(rules) {
      if (this.context.setHasValidation) {
        this.context.setHasValidation(this.props.name, rules);
      }
    }
  }, {
    key: "setValid",
    value: function setValid(valid) {
      var msg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
      var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
      var ignoreDebounce = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
      var name = this.props.name;

      if (ignoreDebounce) {
        this._show(valid === false);
      } else {
        this.show(valid === false);
      }
      return this.context.setValid ? this.context.setValid(name, valid, msg, key) : this.setState({
        _invalid_on: key,
        _valid: valid,
        _message: valid ? null : msg
      });
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var name = this.props.name;

      var valid = this.context.isValid ? this.context.isValid(name) : this.state._valid;
      return valid || (this.state._show ? false : null);
    }
  }, {
    key: "isProcessing",
    value: function isProcessing() {
      return this.state._validating;
    }
  }, {
    key: "error",
    value: function error() {
      var name = this.props.name;

      if (this.isValid() !== false) {
        return null;
      }
      return this.context.getError ? this.context.getError(name) : this.state._message;
    }
  }, {
    key: "_show",
    value: function _show(show) {
      this.setState({
        _show: show
      });
    }
  }, {
    key: "show",
    value: function show(_show2) {
      if (!_show2) {
        this._show(_show2);
      } else {
        this._debouncedShow(_show2);
      }
    }
  }, {
    key: "errorKey",
    value: function errorKey() {
      if (!this.state._show) {
        return null;
      }

      var name = this.props.name;

      return this.context.getErrorKey ? this.context.getErrorKey(name) : this.state._invalid_on;
    }
  }, {
    key: "rules",
    value: function rules() {
      var children = this.props.children;

      return _react2.default.Children.toArray(children).map(function (rule) {
        var validator = rule.type;
        if (typeof validator === "function") {
          return {
            fn: validator,
            __opts: _extends({}, rule.props)
          };
        } else {
          if (process.env.NODE_ENV === "development") {
            console.warn("Rule supplied is not a function");
          }
          return null;
        }
      }).filter(function (rule) {
        return !!rule;
      });
    }
  }, {
    key: "process",
    value: function process(result, _ref) {
      var message = _ref.message;
      var key = _ref.key;
      var errorKey = _ref.errorKey;

      if ((typeof result === "undefined" ? "undefined" : _typeof(result)) === "object") {
        // Determine message & key values
        message = message || result.message || this.props.errorMessage;
        key = result.key || key || errorKey;
        return {
          message: message,
          key: key,
          valid: !!result.valid
        };
      } else {
        return {
          valid: !!result,
          message: message || this.props.errorMessage,
          key: key
        };
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this2 = this;

      var value = arguments.length <= 0 || arguments[0] === undefined ? this.getValue() : arguments[0];
      var ignoreDebounce = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var async = false;

      var promises = [];
      var rules = this.rules();
      var all = this.context.getAllValues ? this.context.getAllValues() : {};

      // No rules = always valid
      if (!rules.length) {
        this.setValid(true);
        this.setHasValidation(false);
        return;
      } else {
        this.setHasValidation(true);
      }

      var _valid = { valid: true };
      var valid = _valid.valid;
      var message = _valid.message;
      var key = _valid.key;
      // Iterate over provided rules

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var rule = _step.value;

          // Separate promises
          if (rule.fn.async || rule.__opts.async) {
            async = true;
            promises.push(function () {
              return Object.assign(rule.fn(_extends({}, rule.__opts, { value: value, all: all })), {
                "__opts": rule.__opts
              });
            });
          } else {
            var _ret2 = function () {
              var result = rule.fn(_extends({}, rule.__opts, { value: value, all: all }));
              if (typeof result.then === "function") {
                async = true;
                promises.push(function () {
                  return Object.assign(result, {
                    "__opts": rule.__opts
                  });
                });
              } else {
                // Exit as soon as we're invalid

                var _process = _this2.process(result, rule.__opts, all);

                valid = _process.valid;
                message = _process.message;
                key = _process.key;
                if (!valid) {
                  if (rule.fn.noDebounce || rule.__opts.noDebounce) {
                    ignoreDebounce = true;
                  }
                  return {
                    v: "break"
                  };
                }
              }
            }();

            if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
          }
        };

        for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
        // Process promises
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

      if (valid && async) {
        // Set flag for async processing
        this.setValid(null, null, null, ignoreDebounce);
        this.show(false);
        this.asyncValidation(promises);
        return;
      }

      if (!async || !valid) {
        // Finished processing
        this.setState({ _validating: false });
        this.setValid(valid, message, key, ignoreDebounce);
        return Promise.resolve(valid);
      }

      if (valid) {
        this.setValid(true);
      }
    }
  }, {
    key: "_asyncValidation",
    value: function _asyncValidation(promises) {
      var _this3 = this;

      this.setState({ _validating: true });
      promises = promises.map(function (f) {
        return f();
      });
      Promise.all(promises).then(function (results) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = results.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = _slicedToArray(_step2.value, 2);

            var index = _step2$value[0];
            var result = _step2$value[1];

            var state = _this3.process(result, promises[index]);
            if (!state.valid) {
              return state;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return {
          valid: true
        };
      }, function (error) {
        return {
          valid: false,
          message: error.message || _this3.props.errorMessage
        };
      }).then(function (_ref2) {
        var valid = _ref2.valid;
        var message = _ref2.message;
        var key = _ref2.key;

        // Finished processing
        _this3.setState({ _validating: false });
        _this3.setValid(valid, message, key, true);
        return valid;
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var value = e.currentTarget.value;

      this.setValue(value, e);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Field;
}(_react2.default.Component), _class2.propTypes = {
  children: PropTypes.node,
  debounce: PropTypes.number.isRequired,
  defaultValue: PropTypes.any,
  errorMessage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validateOnMount: PropTypes.bool,
  value: PropTypes.any
}, _class2.defaultProps = {
  debounce: 0,
  errorMessage: "Invalid data",
  onChange: function onChange() {}
}, _class2.contextTypes = {
  setHasValidation: PropTypes.func,
  getValue: PropTypes.func,
  setValue: PropTypes.func,
  setValid: PropTypes.func,
  getError: PropTypes.func,
  getErrorKey: PropTypes.func,
  isValid: PropTypes.func,
  register: PropTypes.func,
  getAllValues: PropTypes.func
}, _temp), (_applyDecoratedDescriptor(_class.prototype, "handleChange", [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype)), _class);
exports.default = Field;
module.exports = exports["default"];
