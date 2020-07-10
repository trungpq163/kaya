"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  display:inline;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position:absolute;\n  display:flex;\n  align-items:center;\n  top:0;\n  bottom:0;\n  z-index:-1;\n  ", ";\n  svg{\n    width:74px;\n    height:1.5rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border:1px solid #b2b2b2;\n  padding: 0.5rem 1rem;\n  border-radius:0.25rem;\n  box-sizing: border-box;\n  background-color:transparent;\n  &:focus{\n    outline:none;\n    border-color: #7395e5;\n    box-shadow: 0 0 0 1px #7395e5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//prop-types
var propTypes = {
  disabled: _propTypes["default"].bool,
  placeHolder: _propTypes["default"].string,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  renderLeading: _propTypes["default"].element,
  renderTrailing: _propTypes["default"].element
};
exports.propTypes = propTypes;
var defaultProps = {
  disabled: false,
  placeHolder: "Search",
  renderLeading: null,
  renderTrailing: null
}; //main element

var Input = _styledComponents["default"].input(_templateObject()); //icons


var getIconPosition = function getIconPosition(_ref) {
  var iconPosition = _ref.iconPosition;
  return iconPosition === "left" ? "left:0;" : "right:0;";
};

var IconContainer = _styledComponents["default"].span(_templateObject2(), getIconPosition);

var LeadingIcon = function LeadingIcon(_ref2) {
  var icon = _ref2.icon;
  return _react["default"].createElement(IconContainer, {
    iconPosition: "left"
  }, icon);
};

var TrailingIcon = function TrailingIcon(_ref3) {
  var icon = _ref3.icon;
  return _react["default"].createElement(IconContainer, {
    iconPosition: "right"
  }, icon);
}; //wrapper element


var InputContainer = _styledComponents["default"].div(_templateObject3()); //function component


var baseSearchInput = function baseSearchInput(_ref4) {
  var placeHolder = _ref4.placeHolder,
      className = _ref4.className,
      onChange = _ref4.onChange,
      renderTrailing = _ref4.renderTrailing,
      renderLeading = _ref4.renderLeading,
      rest = _objectWithoutProperties(_ref4, ["placeHolder", "className", "onChange", "renderTrailing", "renderLeading"]);

  var handleChange = function handleChange(e) {
    return onChange(e.target.value);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, renderLeading || renderTrailing ? _react["default"].createElement(InputContainer, null, _react["default"].createElement(Input, _extends(_defineProperty({
    className: className,
    placeholder: placeHolder,
    onChange: handleChange,
    type: "search",
    renderTrailing: renderLeading
  }, "renderTrailing", renderTrailing), rest)), renderLeading && _react["default"].createElement(LeadingIcon, {
    icon: renderLeading
  }), renderTrailing && _react["default"].createElement(TrailingIcon, {
    icon: renderTrailing
  })) : _react["default"].createElement(Input, _extends({
    className: className,
    placeholder: placeHolder,
    onChange: handleChange,
    type: "search"
  }, rest)));
}; //final assignment


baseSearchInput.propTypes = propTypes;
baseSearchInput.defaultProps = defaultProps;
var _default = baseSearchInput;
exports["default"] = _default;

//# sourceMappingURL=baseSearchInput.js.map