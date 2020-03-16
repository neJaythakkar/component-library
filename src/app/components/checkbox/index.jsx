import React from 'react';
import PropTypes from 'prop-types';
import WithClick from '../../hocs/withclick';
import WithConnect from '../../hocs/withconnect';
import './CheckBox.css';

const CheckBox = props => {
  const { clickHandler, text, ...rest } = props;

  return (
    <label className='container'>
      {text}
      <input {...rest} onClick={clickHandler} type='checkbox' />
      <span className='checkmark' />
    </label>
  );
};

CheckBox.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default WithConnect(WithClick(CheckBox));
