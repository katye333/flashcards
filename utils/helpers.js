import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'UdaciFitness:decks'
export const CARDS_STORAGE_KEY = 'UdaciFitness:cards'

export function formatDecks(results) {
    return JSON.parse(results)
}