import { AsyncStorage } from 'react-native';
import {
	formatDecks,
	formatCards,
	DECKS_STORAGE_KEY,
	CARDS_STORAGE_KEY
} from './helpers';

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

export function submitCard(id, question, answer) {
  	return AsyncStorage.mergeItem(
  		DECKS_STORAGE_KEY,
  		JSON.stringify({
    		[id]: {
    			title: id,
    			questions: [{
    				question: question,
    				answer: answer
    			}]
    		}
  		})
  	)
}