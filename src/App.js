import React, { Component } from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import GameRules from './components/GameRules/GameRules';
import GameBoard from './components/GameBoard/GameBoard';
import UserControls from './components/UserControls/UserControls';
import Overlay from './components/Overlay/Overlay';

class App extends Component {

    /**
        * React constructer
        *
        * @param {obj} props - props passed in from react
    */
    constructor(props) {
        super(props);

        this.state = {
            cardDeck: this.getFullCardDeck(),
            gameStarted: false,
            winner: '',
            user: {
                cards: [],
                score: 0
            },
            dealer: {
                cards: [],
                score: 0
            }
        };
    }


    /**
        * get all the card in the deck
        *
        * @returns {Object} deck - returns an object of all 52 cards
    */
    getFullCardDeck() {
        let deck = {};
        const suits = ["spades", "hearts", "clubs", "diamonds"];

        for (let i = 0; i < suits.length; i++){
            const suit = suits[i];
            deck[suit] = this.createCards(suit);
        }

        return deck;
    }


    /**
        * get all the card in the deck
        *
        * @param {string} suit - the suit of the cards group.
        * 
        * @returns {Array} cards - returns the suit of cards based on what you pass in
    */
    createCards(suit) {

        const cards = [
            {
                id: "ace",
                pointVal: [11, 1],
                suit
            },
            {
                id:"2",
                pointVal: 2,
                suit
            },
            {
                id:"3",
                pointVal: 3,
                suit
            },
            {
                id:"4",
                pointVal: 4,
                suit
            },
            {
                id:"5",
                pointVal: 5,
                suit
            },
            {
                id:"6",
                pointVal: 6,
                suit
            },
            {
                id:"7",
                pointVal: 7,
                suit
            },
            {
                id:"8",
                pointVal: 8,
                suit
            },
            {
                id:"9",
                pointVal: 9,
                suit
            },
            {
                id:"10",
                pointVal: 10,
                suit
            },
            {
                id:"jack",
                pointVal: 10,
                suit
            },
            {
                id:"queen",
                pointVal: 10,
                suit
            },
            {
                id:"king",
                pointVal: 10,
                suit
            }
        ];

        return cards;
    }


    /**
        * click handler for triggering the app reset (scores will persist)
        *
        * @param {event} e - the event passed in from the handler
    */
    triggerGameReset(e) {
        let scores = {
            user: this.state.user.score,
            dealer: this.state.dealer.score
        };

        this.setState({
            cardDeck: this.getFullCardDeck(),
            winner: '',
            user: {
                total: 0,
                cards: [],
                score: scores.user
            },
            dealer: {
                total: 0,
                cards: [],
                score: scores.dealer
            }
        }, () => {
            //reset the state first and then trigger the start game
            this.startGame();
        });
    }


    /**
        * Update the scores
        *
        * @param {string} winner - the winner passed in based on the game rules
        *
        * @returns {Object} scores - returns an object of scores based on who wins
    */
    updateScores(winner) {
        let userScore = this.state.user.score,
            dealerScore = this.state.dealer.score,
            scores = {
                user: userScore,
                dealer: dealerScore
            };

        if (winner) {
            scores[winner] += 1;
        }

        return scores;
    }
 

    /**
        * trigger the hit action
        *
        * @param {event} e - event passed in from react events
    */
    triggerHitHandler(e) {

        let userDraw = this.drawRandomCard(this.state.cardDeck),
            newUserCardsList = this.state.user.cards.slice(),
            userTotal = 0,
            winner,
            scores;

        newUserCardsList.push(userDraw);

        userTotal = this.getCurrentTotal(newUserCardsList);

        winner = this.calculateWinner(userTotal, this.state.dealer.total, 0);
        scores = this.updateScores(winner);

        this.setState({
            winner,
            user: {
                ...this.state.user,
                total: userTotal,
                cards: newUserCardsList,
                score: scores['user']
            },
            dealer: {
                ...this.state.dealer,
                score: scores['dealer']
            }
        });
    }


    /**
        * calculateWinner the winner
        *
        * @param {number} userTotal - the current total of the user
        * @param {number} dealerTotal - the current total of the dealer
        *
        * @returns {Object} scores - returns an object of scores based on who wins
    */
    calculateWinner(userTotal, dealerTotal) {
        let winner = '',
            isDealerBust = this.checkForBust(dealerTotal),
            isUserBust = this.checkForBust(userTotal);

        if (userTotal === dealerTotal) {
            winner = 'tie';
        } else if (isDealerBust) {
            winner = 'user';
        } else if (isUserBust || (dealerTotal > userTotal && !isDealerBust)) {
            winner = 'dealer';
        }

        return winner;
    }


    /**
        * get the current total of the cards
        *
        * @param {array} cards - the current cards
        *
        * @returns {nbumber} total - returns the total of the cards based on point val
    */
    getCurrentTotal(cards) {

        let total = this.combineCardVals(cards),
            hasPointsArry = this.checkCardsForPointsArr(cards);

        if (hasPointsArry && this.checkForBust(total)) {
            total = this.combineCardVals(cards, 1);
        }

        return total;
    }


    /**
        * check the current cards for a points array which exists for an Ace as it can be either 1, 11
        *
        * @param {array} cards - the current cards
        *
        * @returns {bool} hasPointsArry - returns if any of the current cards have two point vals
    */
    checkCardsForPointsArr(cards) {

        const hasPointsArray = cards.map(card => {
            let isArry = false;

            if (Array.isArray(card.pointVal)) {
                isArry = true;
            }

            return isArry;
        });

        return hasPointsArray.indexOf(true) >= 0;
    }


    /**
        * combine all the card vals and if points is an array i.e. an "ace" then try inxed.
        *
        * @param {array} cards - the current cards
        * @param {number} index - the index we want to use to get points from
        *
        * @returns {number} total - returns the total
    */
    combineCardVals(cards, index = 0) {
        let total = 0;

        cards.map(card => {
            let points = card.pointVal;
            
            if (Array.isArray(card.pointVal)) {
                total += points[index];
            } else {
                total += points;
            }

            return total;
        })

        return total;
    }


    /**
        * check a total value if it is bust or not
        *
        * @param {number} total - the total to check against
        *
        * @returns {bool} - returns true or false based on if total has gone over 21 
    */
    checkForBust(total) {
        return total > 21 ? true : false;
    }


    /**
        * draw multiple cards from the dealer until either the dealer goes bust, its a tie after dealer has two cards, or the dealer beats the users score
        *
        * @param {number} userTotal - the userTotal to check against
        *
        * @returns {object} - returns the an object of the dealer total and dealers new cards
    */
    dealerMultiDrawTotal(userTotal) {
        let dealerDraw = this.state.dealer.cards.slice(),
            dealerTotal = this.getCurrentTotal(this.state.dealer.cards),
            index;

        while (dealerTotal < userTotal) {

            dealerDraw.push(this.drawRandomCard(this.state.cardDeck));
            dealerTotal = this.getCurrentTotal(dealerDraw);
            index++;

            if (this.checkForBust(dealerTotal) || (dealerTotal > 17 && dealerTotal > userTotal) || (index === 1 && dealerTotal === userTotal)) {
                break;
            }
        }

        return {
            total: dealerTotal,
            cards: dealerDraw
        };
    }


    /*
        * trigger the stick action and update th
        *
        * @param {event} e - the click event passed in
    */
    triggerStickHandler(e) {
        
        const userTotal = this.state.user.total,
            dealer = this.dealerMultiDrawTotal(userTotal),
            winner = this.calculateWinner(userTotal, dealer.total),
            scores = this.updateScores(winner);

        this.setState({
            winner,
            dealer: {
                ...this.state.dealer,
                total: dealer.total,
                cards: dealer.cards,
                score: scores['dealer']
            },
            user: {
                ...this.state.user,
                score: scores['user']
            }
        })
    }


    /**
        * Draw a random card from the passed deck
        *
        * @returns {object} card - returns the random card based on the cardDeck
    */
    drawRandomCard(cardDeck) {
        const randomSuit = this.getRandomItemFromArr(Object.keys(cardDeck)),
            randomCard = this.getRandomItemFromArr(cardDeck[randomSuit]),
            randomCardIndex = cardDeck[randomSuit].indexOf(randomCard),
            newSuitArray = cardDeck[randomSuit].slice(),
            card = cardDeck[randomSuit][randomCardIndex];

        newSuitArray.splice(randomCardIndex, 1);
        cardDeck[randomSuit] = newSuitArray;

        this.setState({
            cardDeck: cardDeck
        });

        return card;
    }


    /**
        * get a random item from an arr
        *
        * @param {Array} arr - an arr to get an item from
        * 
        * @return {object/string} item - we expect this to be either a string or an obj but can return anything from an array
    */
    getRandomItemFromArr(arr) {
        const randomNum = this.getRandomInt(0, arr.length);
        let item;

        if (arr.length) {
            item = arr[randomNum];
        }

        return item;
    }


    /**
        * generate a random number between two integers
        *
        * @param {int} min - the minimum value
        * @param {int} max - the maximum value
        * 
        * @return {int} - a random integer
    */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * max) + min  ;
    }


    /**
        * Start the game
        *
        * @param {event} e - the event passed in form the click
    */
    startGame(e) {

        const intialUserDraw = [],
            initialDealerDraw = [];

        intialUserDraw.push(this.drawRandomCard(this.state.cardDeck));
        intialUserDraw.push(this.drawRandomCard(this.state.cardDeck));
        initialDealerDraw.push(this.drawRandomCard(this.state.cardDeck));


        this.setState({
            gameStarted: true,
            user: {
                ...this.state.user,
                total: this.getCurrentTotal(intialUserDraw),
                cards: intialUserDraw,
            },
            dealer: {
                ...this.state.dealer,
                total: this.getCurrentTotal(initialDealerDraw),
                cards: initialDealerDraw
            }
        });
    }


    /**
        * calculate the winner text based on who won
        *
        * @param {string} winner - the current winner
        * 
        * @return {string} winnerText - the winner text based on who won
    */
    calculateWinnerText(winner) {
        let winnerText = '';

        if (winner === 'user') {
            winnerText = 'You Win';
        } else if (winner === 'dealer') {
            winnerText = 'You Loose';
        } else if (winner === 'tie'){
            winnerText = 'Its a Draw';
        }

        return winnerText;
    }

    /**
        * render the overlay based on the winner (if one is set)
        * 
        * @return {element} overlay - the winners overlay or false dependent on if we have a winne.
    */
    renderWinnerOverlay() {
        const winner = this.state.winner;
        let overlay = false,
            winnerText = this.calculateWinnerText(winner);

        if (winner) {
            overlay = (
                <Overlay userCards={this.state.user.cards} dealerCards={this.state.dealer.cards} clickHandler={this.triggerGameReset.bind(this)} isUserBust={this.checkForBust(this.state.user.total)} isDealerBust={this.checkForBust(this.state.dealer.total)} winnerText={winnerText} userTotal={this.state.user.total} dealerTotal={this.state.dealer.total}/>
            )
        }

        return overlay;
    }

    /**
        * render the game based on game state
        * 
        * @return {element} game - renders either the game rules or the game depending on state.
    */
    renderGame() {

        let game = (
            <div className="game">
                <GameRules />
                <button className="btn" onClick={this.startGame.bind(this)}>Start Game</button>
            </div>
        )

        if (this.state.gameStarted) {
            game = (
                <div className="game">
                    {this.renderWinnerOverlay()}
                    <ScoreBoard userScore={this.state.user.score} dealerScore={this.state.dealer.score} />
                    <GameBoard user={this.state.user} dealer={this.state.dealer}/>
                    <UserControls hitClickHandler={this.triggerHitHandler.bind(this)} stickClickHandler={this.triggerStickHandler.bind(this)} />
                </div>
            )
        }

        return game;
    }


    /**
        * render the app
        * 
        * @return {component} the app - renders the app
    */
    render() {
        const renderGame = this.renderGame();
        return (
            <div className="app">
                {renderGame}
            </div>
        );
    }
}

export default App;
