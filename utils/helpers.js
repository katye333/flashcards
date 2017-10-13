import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'UdaciFitness:decks'
export const CARDS_STORAGE_KEY = 'UdaciFitness:cards'

export function formatDecks(decks) {
    return JSON.parse(decks)
}

export function formatCards(cards) {
    return JSON.parse(cards)
}