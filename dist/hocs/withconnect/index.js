import React from 'react';
import { connect } from 'react-redux';
import * as TrackerActions from '../../store/tracker/actions';
const mapDispatchToProps = {
  addEvents: TrackerActions.addEvents,
  postEvents: TrackerActions.postEvents,
  resetEvents: TrackerActions.resetEvents
};
export default (WrappedComponent => connect(null, mapDispatchToProps)(props => React.createElement(WrappedComponent, props)));