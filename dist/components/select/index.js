function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Select from 'react-dropdown-select';
import { withRouter } from 'react-router';
import WithConnect from '../../hocs/withconnect';
import CustomEvents from '../../hocs/event';
import './select.css';

class select extends React.Component {
  constructor(props) {
    super(props);
    this.selectRef = null;
  }

  onChangeHandler(selectedOption) {
    const {
      addEvents,
      match,
      userId,
      handler
    } = this.props;
    const time = new Date();
    const target = this.selectRef;
    target.type = 'select';
    target.value = selectedOption;
    const customEvent = new CustomEvents({
      userId,
      time,
      target,
      match,
      event: {
        type: 'valueChange'
      }
    });
    addEvents(customEvent);
    handler && handler();
  }

  render() {
    const {
      options,
      displayField,
      valueField,
      parentClasses,
      ...rest
    } = this.props;
    return React.createElement("div", {
      className: `custom-select-dropdown ${parentClasses}`
    }, React.createElement(Select, _extends({
      ref: ref => this.selectRef = ref,
      options: options,
      onChange: selectedOption => this.onChangeHandler(selectedOption),
      labelField: displayField,
      valueField: valueField
    }, rest)));
  }

}

export default withRouter(WithConnect(select));