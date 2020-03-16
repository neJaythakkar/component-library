function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router';
import WithConnect from '../../hocs/withconnect';
import CustomEvents from '../../hocs/event';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = null;
  }

  modalOpenHandler(event) {
    const {
      addEvents,
      match,
      userId,
      onOpenHandler
    } = this.props;
    onOpenHandler && onOpenHandler();
    const time = new Date();
    const {
      contentEl: target
    } = event;
    this.modalRef = target;
    target.type = 'Modal';
    event.type = 'ModalOpen';
    const customEvent = new CustomEvents({
      time,
      target,
      match,
      userId,
      event
    });
    addEvents(customEvent);
  }

  modalCloseHandler(event) {
    const {
      addEvents,
      match,
      userId,
      onCloseHandler
    } = this.props;
    onCloseHandler && onCloseHandler();
    const time = new Date();
    const target = this.modalRef;
    target.type = 'Modal';
    const customEvent = new CustomEvents({
      userId,
      time,
      target,
      match,
      event: {
        type: 'ModalClose'
      }
    });
    addEvents(customEvent);
  }

  render() {
    return React.createElement(ReactModal, _extends({}, this.props, {
      onAfterOpen: event => this.modalOpenHandler(event),
      onAfterClose: event => this.modalCloseHandler(event)
    }));
  }

}

export default withRouter(WithConnect(Modal));