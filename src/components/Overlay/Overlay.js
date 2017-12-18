import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Overlay.css';
import Card from '../Card/Card';

class Overlay extends Component {

    /**
        * render the BUST text based on if player is bust
        *
        * @param {string} propCheck - either isUserBust or isDealerBust
        * 
        * @returns {string} - returns the BUST text
    */
    renderIsBust(propCheck) {
        let text = false;

        if (this.props[propCheck]) {
            text = '(BUST)';
        }

        return text;
    }

    /**
        * rener the cards component
        *
        * @param {string} player - the player we want to render
        * 
        * @returns {component} - returns the cardsList
    */
    renderCards(cards) {
        let cardsList = cards.map((card, i) => {
            return (
                <Card cardId={card.id} cardSuit={card.suit} modifierClass='card--small card--v-align' key={`card-${card.suit}-${card.id}`}/>
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
            <div className="overlay">
                <div className="overlay__content">
                    <h1 className="heading">{this.props.winnerText}</h1>
                    <div className="overlay__scores">
                        <div className="overlay__player-info">
                            <span className="overlay__score-item">Users total: {this.props.userTotal} {this.renderIsBust('isUserBust')}</span>
                            {this.renderCards(this.props.userCards)}
                        </div>
                        <div className="overlay__player-info">
                            <span className="overlay__score-item">Dealers total: {this.props.dealerTotal} {this.renderIsBust('isDealerBust')}</span>
                            {this.renderCards(this.props.dealerCards)}
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={this.props.clickHandler}>
                    Reset Deck
                </button>
            </div>
        );
    }
};

Overlay.propTypes = {
    userCards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    dealerCards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isUserBust: PropTypes.bool.isRequired,
    isDealerBust: PropTypes.bool.isRequired,
    dealerTotal: PropTypes.number.isRequired,
    userTotal: PropTypes.number.isRequired,
    winnerText: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Overlay;