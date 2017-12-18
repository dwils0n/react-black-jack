import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PreGameInfo.css';
import GameRules from '../GameRules/GameRules';

class PreGameInfo extends Component {
    /**
        * trigger sthe tart game on click
        *
        * @param {event} e - the event passed in
    */
    triggerStartGame(e) {
        this.props.handleStartGame();
    }
    /**
        * rener the component
        *
        * @returns {component} returns the component
    */
    render() {
        return (
            <div>
                <GameRules />
                <button className="btn" onClick={this.triggerStartGame.bind(this)}>Start Game</button>
            </div>
        );
    }
};

PreGameInfo.propTypes = {
    handleStartGame: PropTypes.func.isRequired,
    cardDeck: PropTypes.shape({}).isRequired
};

export default PreGameInfo;