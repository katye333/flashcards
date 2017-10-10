---
---
# **Flashcards**
---
---
Flashcards is a native application that allows the user to create multiple decks of cards with a question and answer. The user can quiz themselves on the deck and receive a grade on the outcome.
This project is part of the ReactJS nanodegree offered by Udacity.

This application was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
You can find more information on how to perform common tasks [here](https://github.com/react-community/create-react-native-app/blob/master/README.md).

## What You're Getting
```
+--flashcards/
	+--actions/
		|-- index.js
	+--components/
		|-- AddCard.js
		|-- AddDeck.js
		|-- Deck.js
		|-- Quiz.js
		|-- Home.js
	+--reducers/
		|-- index.js
	+--utils/
		|-- api.js
		|-- colors.js
		|-- helpers.js
	|-- .babelrc
	|-- .flowconfig
	|-- .gitignore
	|-- .watchmanconfig
	|-- App.js
	|-- app.json
	|-- App.test.js
	|-- package.json
	|-- README.MD
	|-- yarn.lock
```

### Features
---
	- Allow users to create a deck which can hold an unlimited number of cards.
	- Allow users to add a card to a specific deck.
	- The front of the card displays the question, while the back of the card will have the answer displayed.
	- Users should be able to quiz themselves on a specific deck and receive a score once they're done.
	- Users should receive a notification to remind themselves to study if they haven't already for that day.

### Installation
---
Flashcards requires
- Node between v4.8.0 and v5.7.0 (https://www.npmjs.com/)
- Yarn v1.0.2+ (https://yarnpkg.com/en/)

NOTE: Use Yarn to install and run this program. NPM has been found to have significant problems with react-native. For more information about these issues, please visit [this page](https://github.com/react-community/create-react-native-app/issues/233#issuecomment-305638103)

Install and start Flashcards

```sh
$ git clone https://github.com/katye333/flashcards.git
$ cd flashcards
$ yarn install
$ yarn start
```

### Authors
---
[Kaitlin Stevens](https://github.com/katye333)

### License
---
MIT © [Kaitlin Stevens](https://github.com/katye333)