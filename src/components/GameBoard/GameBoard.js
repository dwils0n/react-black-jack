import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameBoard.css';

import Card from '../Card/Card';

class GameBoard extends Component {

    /**
        * rener the cards component
        *
        * @param {string} player - the player we want to render
        * 
        * @returns {component} - returns the cardsList
    */
    renderCards(player) {
        let cardsList = this.props[player].cards.map((card, i) => {
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
                <div className="user-selection">
                    User Cards:
                    <span className="user-selection__value">
                        {this.renderCards('user')}
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
    user: PropTypes.shape({}).isRequired,
    dealer: PropTypes.shape({}).isRequired
}

export default GameBoard;