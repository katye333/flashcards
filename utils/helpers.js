import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'UdaciFitness:calendar'

export function formatDecks(results) {
    return JSON.parse(results)
}