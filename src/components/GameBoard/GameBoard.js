import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameBoard.css';

import Card from '../Card/Card';

class GameBoard extends Component {

    componentWillMount() {
        this.props.handleInitialiseGame(this.props.cardDeck);
    }

    /**
        * rener the cards component
        *
        * @param {string} player - the player we want to render
        * 
        * @returns {component} - returns the cardsList
    */
    renderCards(player) {
        let cardsList = this.props.playerCards[player].map((card, i) => {
            return (
                <Card cardId={card.id} cardSuit={card.suit} modifierClass='game-board__card' key={`card-${card.suit}-${card.id}`}/>
            )
        });

        return cardsList;
    }


    /**
        * rener the component
        *
        * @returns {component} returns the component
    */
    render() {
        return (
            <div className="game-board">
                <div className="player1-selection">
                    Player 1 Cards:
                    <span className="player1-selection__value">
                        {this.renderCards('player1')}
                    </span>
                </div>
                <div className="dealer-selection">
                    Dealer Cards:
                    <span className="dealer-selection__value">
                        {this.renderCards('dealer')}
                    </span>
                </div>
            </div>
        );
    }
};

GameBoard.propTypes = {
    cardDeck: PropTypes.shape({}).isRequired,
    handleInitialiseGame: PropTypes.func.isRequired,
    playerCards: PropTypes.shape({
        player1: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        dealer: PropTypes.arrayOf(PropTypes.shape()).isRequired
    }).isRequired
}

export default GameBoard;