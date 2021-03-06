export default class Event {
	constructor({ time, target, match, userId, event }) {
		this.userId = userId;
		this.time = time.getTime();
		this.date = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
		this.hours = `${time.getHours()}:${time.getMinutes()}`;
		this.event = event.type;
		this.controlType = target.type;
		this.position =
			target.type === 'select'
				? { ...target.state.selectBounds.toJSON() }
				: { ...target.getBoundingClientRect().toJSON() };
		this.page = match.path;
		this.value = this.getValue({ target });
	}

	getValue({ target }) {
		switch (target.type) {
			case 'checkbox':
				return target.checked ? 'checked' : 'unchecked';
			case 'text':
				return target.value;
			case 'select':
				return target.value.reduce((accumlator, nextValue) => {
					return `${accumlator}${nextValue.label} ,`;
				}, '');
		}
	}
}
