import React from 'react';
import WithConnect from '../../hocs/withconnect';
import WithBlur from '../../hocs/withblur';

const Input = props => {
  const {
    blurHandler,
    clickHandler
  } = props;
  return React.createElement("input", {
    onClick: clickHandler,
    onBlur: blurHandler,
    type: "text"
  });
};

export default WithConnect(WithBlur(Input));