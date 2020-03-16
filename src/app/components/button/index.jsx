import React from 'react';
import PropTypes from 'prop-types';
import WithClick from '../../hocs/withclick';
import WithConnect from '../../hocs/withconnect';

const Button = props => {
  const { clickHandler, text, ...rest } = props;

  return (
    <button onClick={clickHandler} type='button' {...rest}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default WithConnect(WithClick(Button));
