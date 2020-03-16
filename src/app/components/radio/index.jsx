import React from 'react';
import PropTypes from 'prop-types';
import WithClick from '../../hocs/withclick';
import WithConnect from '../../hocs/withconnect';
import * as classes from './Radio.module.css';

const Radio = props => {
  const { clickHandler, text, ...rest } = props;

  return (
    <label className={classes.container}>
      {text}
      <input {...rest} onClick={clickHandler} type='radio' />
      <span className={classes.checkmark} />
    </label>
  );
};

Radio.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default WithConnect(WithClick(Radio));
