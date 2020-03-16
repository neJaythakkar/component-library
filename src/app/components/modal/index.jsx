import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import WithConnect from '../../hocs/withconnect';
import CustomEvents from '../../hocs/event';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = null;
  }

  modalOpenHandler(event) {
    const { addEvents, match, userId, onOpenHandler } = this.props;
    if (onOpenHandler) onOpenHandler();
    const time = new Date();
    const { contentEl: target } = event;
    this.modalRef = target;
    target.type = 'Modal';
    const customEvent = new CustomEvents({
      time,
      target,
      match,
      userId,
      event: { type: 'ModalOpen' }
    });
    addEvents(customEvent);
  }

  modalCloseHandler() {
    const { addEvents, match, userId, onCloseHandler } = this.props;
    if (onCloseHandler) onCloseHandler();
    const time = new Date();
    const target = this.modalRef;
    target.type = 'Modal';
    const customEvent = new CustomEvents({
      userId,
      time,
      target,
      match,
      event: { type: 'ModalClose' }
    });
    addEvents(customEvent);
  }

  render() {
    return (
      <ReactModal
        {...this.props}
        onAfterOpen={event => this.modalOpenHandler(event)}
        onAfterClose={event => this.modalCloseHandler(event)}
      />
    );
  }
}

Modal.propTypes = {
  addEvents: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  onCloseHandler: PropTypes.func,
  onOpenHandler: PropTypes.func
};

Modal.defaultProps = {
  onCloseHandler: () => {},
  onOpenHandler: () => {}
};
export default withRouter(WithConnect(Modal));
