import React from 'react';
import { __makeTemplateObject } from '../node_modules/tslib/tslib.es6.js';
import styled from '@emotion/styled';

var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: blue;\n"], ["\n  background-color: blue;\n"])));
var templateObject_1;

function Button(_a) {
  var children = _a.children;
  return React.createElement(StyledButton, null, children);
}

export { Button };
