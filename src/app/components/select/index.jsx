import React from 'react';
import Select from 'react-dropdown-select';
import PropTypes from 'prop-types';
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
    const { addEvents, match, userId, handler } = this.props;
    const time = new Date();
    const target = this.selectRef;
    target.type = 'select';
    target.value = selectedOption;
    const customEvent = new CustomEvents({
      userId,
      time,
      target,
      match,
      event: { type: 'valueChange' }
    });
    addEvents(customEvent);
    if (handler) handler();
  }

  render() {
    const { options, displayField, valueField, parentClasses, ...rest } = this.props;
    return (
      <div className={`custom-select-dropdown ${parentClasses}`}>
        <Select
          ref={ref => {
            this.selectRef = ref;
          }}
          options={options}
          onChange={selectedOption => this.onChangeHandler(selectedOption)}
          labelField={displayField}
          valueField={valueField}
          {...rest}
        />
      </div>
    );
  }
}

select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  displayField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  parentClasses: PropTypes.string,
  addEvents: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  handler: PropTypes.func
};

select.defaultProps = {
  parentClasses: '',
  handler: () => {}
};

export default withRouter(WithConnect(select));
