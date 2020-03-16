function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { withRouter } from 'react-router';
import CustomEvent from '../event';

const WithClick = WrappedComponent => withRouter(props => {
  const {
    addEvents,
    postEvents,
    resetEvents,
    match,
    handler,
    userId,
    text,
    url,
    pushEvents,
    ...rest
  } = props;

  const clickHandler = async event => {
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
    if (text) customEvent.text = text;
    addEvents(customEvent);

    if (pushEvents) {
      await postEvents({
        url,
        userId
      });
      resetEvents();
    }

    handler && handler();
  };

  return React.createElement(WrappedComponent, _extends({
    text: text
  }, rest, {
    clickHandler: clickHandler
  }));
});

export default WithClick;