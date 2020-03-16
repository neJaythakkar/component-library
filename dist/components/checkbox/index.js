function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import WithClick from '../../hocs/withclick';
import WithConnect from '../../hocs/withconnect';
import './CheckBox.css';

const CheckBox = props => {
  const {
    clickHandler,
    text,
    ...rest
  } = props;
  return React.createElement("label", {
    class: "container"
  }, text, React.createElement("input", _extends({}, rest, {
    onClick: clickHandler,
    type: "checkbox"
  })), React.createElement("span", {
    class: "checkmark"
  }));
};

export default WithConnect(WithClick(CheckBox));