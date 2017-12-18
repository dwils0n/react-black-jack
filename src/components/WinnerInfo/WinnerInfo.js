import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WinnerInfo.css';
import Card from '../Card/Card';

class WinnerInfo extends Component {

    /**
        * fire the reset event
        *
        * @param {event} e - the event passed in
    */
    resetClick(e) {
        this.props.handleGameReset();
    }

    /**
        * render the BUST text based on if User is bust
        *
        * @param {string} propCheck - either isUserBust or isDealerBust
        * 
        * @returns {string} - returns the BUST text
    */
    renderIsUserBust() {
        let text = false;

        if (this.props.isUserBust) {
            text = '(BUST)';
        }

        return text;
    }

    /**
        * render the BUST text based on if dealer is bust
        *
        * @param {string} propCheck - either isUserBust or isDealerBust
        * 
        * @returns {string} - returns the BUST text
    */
    renderIsDealerBust() {
        let text = false;

        if (this.props.isDealerBust) {
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
            <div className="winner-info">
                <div className="winner-info__content">
                    <h1 className="heading">{this.props.winnerText}</h1>
                    <div className="winner-info__scores">
                        <div className="winner-info__player-info">
                            <span className="winner-info__score-item">Users total: {this.props.userTotal} {this.renderIsUserBust()}</span>
                            {this.renderCards(this.props.userCards)}
                        </div>
                        <div className="winner-info__player-info">
                            <span className="winner-info__score-item">Dealers total: {this.props.dealerTotal} {this.renderIsDealerBust()}</span>
                            {this.renderCards(this.props.dealerCards)}
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={this.resetClick.bind(this)}>
                    Reset Deck
                </button>
            </div>
        );
    }
};

WinnerInfo.propTypes = {
    cardDeck: PropTypes.shape({}).isRequired,
    userCards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    dealerCards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isUserBust: PropTypes.bool.isRequired,
    isDealerBust: PropTypes.bool.isRequired,
    dealerTotal: PropTypes.number.isRequired,
    userTotal: PropTypes.number.isRequired,
    winnerText: PropTypes.string.isRequired
}

export default WinnerInfo;