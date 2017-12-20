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
        * render the BUST text based on if player1 is bust
        *
        * @param {string} propCheck - either isplayer1Bust or isDealerBust
        * 
        * @returns {string} - returns the BUST text
    */
    renderIsPlayer1Bust() {
        let text = false;

        if (this.props.isPlayer1Bust) {
            text = '(BUST)';
        }

        return text;
    }

    /**
        * render the BUST text based on if dealer is bust
        *
        * @param {string} propCheck - either isDealerBust or isDealerBust
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
                        <div className="winner-info__player-info winner-info__player-info--player1">
                            <span className="winner-info__score-item">player1s total: {this.props.player1Total} {this.renderIsPlayer1Bust()}</span>
                            {this.renderCards(this.props.player1Cards)}
                        </div>
                        <div className="winner-info__player-info winner-info__player-info--dealer">
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
    handleGameReset: PropTypes.func.isRequired,
    player1Cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    dealerCards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isplayer1Bust: PropTypes.bool.isRequired,
    isDealerBust: PropTypes.bool.isRequired,
    dealerTotal: PropTypes.number.isRequired,
    player1Total: PropTypes.number.isRequired,
    winnerText: PropTypes.string.isRequired
}

export default WinnerInfo;