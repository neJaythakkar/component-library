import React from 'react';
import PropTypes from 'prop-types';
import WithConnect from '../../hocs/withconnect';
import WithBlur from '../../hocs/withblur';

const Input = props => {
  const { blurHandler } = props;
  return <input onBlur={blurHandler} type='text' />;
};

Input.propTypes = {
  blurHandler: PropTypes.func.isRequired
};
export default WithConnect(WithBlur(Input));
