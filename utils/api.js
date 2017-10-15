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
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    	.then((results) => {

      		const data = JSON.parse(results);
      		let oldQuestions = _.find(data, ['title', id]).questions;

      		let questions = [];
      		questions.push(oldQuestions);
      		questions.push(card);
      		data[id].questions = questions;

      		AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data), () => {
      			AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(data), () => {
      				AsyncStorage.getItem(DECKS_STORAGE_KEY)
      					.then(formatDecks)
      			})
      		})
    })
}