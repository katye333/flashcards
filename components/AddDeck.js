import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks, addDeck } from '../actions';
import { fetchDecks } from '../utils/api';
import { white, black, yellow } from '../utils/colors';

class AddDeck extends Component {
  	render() {
    	return (
    		<View></View>
    	)
  	}
}

function mapStateToProps(decks) {
	return {
		decks: decks
	}
}

export default connect(mapStateToProps)(AddDeck);