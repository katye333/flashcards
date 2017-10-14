import { submitDeck, submitCard } from '../utils/api';

export const RECEIVE_DECKS 	= 'RECEIVE_DECKS';
export const ADD_DECK 		= 'ADD_DECK';
export const RECEIVE_CARDS 	= 'RECEIVE_CARDS';
export const ADD_CARD		= 'ADD_CARD';

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks
	}
}

export function addDeck(title) {
	submitDeck(title)
	return {
		type: ADD_DECK,
		title
	}
}

export function receiveCards(id, cards) {
	return {
		type: RECEIVE_CARDS,
		id,
		cards
	}
}

export function addCard(id, question, answer) {
	console.log(id, question, answer)
	submitCard(id, question, answer)
	return {
		type: ADD_CARD,
		id,
		question,
		answer
	}
}