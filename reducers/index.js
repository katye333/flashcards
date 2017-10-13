import { RECEIVE_DECKS, ADD_DECK } from '../actions';

function decks(state = {}, action) {
	switch(action.type) {

		// keep the original state object
		// merge each new deck object into the state object
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks
			}

		// keep the original state object
		// merge the new deck object into the state object
		case ADD_DECK:
			return {
				...state,
				[action.title]: {
					title: action.title
				}
			}

		default:
			return state
	}
}

export default decks;