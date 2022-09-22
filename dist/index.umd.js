(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('../node_modules/tslib/tslib.es6.js'), require('@emotion/styled')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', '../node_modules/tslib/tslib.es6', '@emotion/styled'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["wap-ui-test"] = {}, global.React, global.tslib_es6_js, global.styled));
})(this, (function (exports, React, tslib_es6_js, styled) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

    var StyledButton = styled__default["default"].button(templateObject_1 || (templateObject_1 = tslib_es6_js.__makeTemplateObject(["\n  background-color: blue;\n"], ["\n  background-color: blue;\n"])));
    var templateObject_1;

    function Button(_a) {
      var children = _a.children;
      return React__default["default"].createElement(StyledButton, null, children);
    }

    exports.Button = Button;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
