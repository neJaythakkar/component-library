import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CustomEvent from '../event';

const WithClick = WrappedComponent =>
	withRouter(props => {
		const {
			addEvents,
			postEvents,
			resetEvents,
			match,
			handler,
			userId,
			text,
			url,
			pushEvents,
			...rest
		} = props;

		const clickHandler = async event => {
			const time = new Date();
			const { target } = event;
			const customEvent = new CustomEvent({
				time,
				target,
				match,
				userId,
				event
			});
			if (text) customEvent.text = text;
			addEvents(customEvent);
			if (pushEvents) {
				await postEvents({ url, userId });
				resetEvents();
			}
			handler && handler();
		};
		return (
			<WrappedComponent text={text} {...rest} clickHandler={clickHandler} />
		);
	});

WithClick.propTypes = {
	addEvents: PropTypes.func.isRequired,
	postEvents: PropTypes.func.isRequired,
	resetEvents: PropTypes.func.isRequired,
	match: PropTypes.object,
	handler: PropTypes.func,
	userId: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	url: PropTypes.string,
	pushEvents: PropTypes.bool
};

export default WithClick;
