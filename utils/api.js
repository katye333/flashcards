import { AsyncStorage } from 'react-native';
import {
	formatDecks,
	formatCards,
	DECKS_STORAGE_KEY,
	CARDS_STORAGE_KEY
} from './helpers';
import _ from 'lodash'

export function fetchDecks() {
  	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  		.then(formatDecks)
}

export function submitDeck(title) {
  	return AsyncStorage.mergeItem(
  		DECKS_STORAGE_KEY,
  		JSON.stringify({
    		[title]: {
    			title: title,
    			questions: []
    		}
  		})
  	)
}

export function fetchCards() {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  		.then(formatDecks)
}

export function submitCard(id, card) {
	AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
		let object = _.find(JSON.parse(result), ['title', id])

		if (object.title === id) {
			const newObject = object.questions.concat(card);
			object.questions.push(newObject)

			AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(object));
		}
	})
  	// return AsyncStorage.mergeItem(
  	// 	DECKS_STORAGE_KEY,
  	// 	JSON.stringify({
   //  		[id]: {
   //  			title: id,
   //  			questions: deck.questions.concat(action.card)
   //  		}
  	// 	})
  	// )
}