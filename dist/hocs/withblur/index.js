function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { withRouter } from 'react-router';
import CustomEvent from '../event';
export default (WrappedComponent => withRouter(props => {
  const {
    addEvents,
    match,
    handler,
    userId,
    text,
    ...rest
  } = props;

  const blurHandler = event => {
    const time = new Date();
    const {
      target
    } = event;
    const customEvent = new CustomEvent({
      time,
      target,
      match,
      userId,
      event
    });
    addEvents(customEvent);
    handler && handler();
  };

  return React.createElement(WrappedComponent, _extends({}, rest, {
    blurHandler: blurHandler
  }));
}));