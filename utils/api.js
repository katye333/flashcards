import { AsyncStorage } from 'react-native';
import { formatDecks, DECKS_STORAGE_KEY } from './helpers';

export function fetchDecks() {
  	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    	.then(formatDecks)
}

export function submitDeck(deck, key) {
  	return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    	[key]: deck
  	}))
}