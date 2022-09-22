'use strict';

var React = require('react');
var Button_styles = require('./Button.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Button(_a) {
  var children = _a.children;
  return React__default["default"].createElement(Button_styles.StyledButton, null, children);
}

module.exports = Button;
