import React, { Component } from 'react';
import './GameRules.css';

class GameRules extends Component {

    /**
        * rener the component
        *
        * @returns {component} returns the component
    */
    render() {
        return (
            <div className="game-rules">
                <h2> Game Rules </h2>
                <ol className="game-rules__list">
                    <li>You will be given two cards and the dealer will be given one</li>
                    <li>Your aim is get as close to 21 as possible without going over</li>
                    <li>Ace can either be either 11 or 1</li>
                    <li>Once you feel you are close enough to 21 to win click stick</li>
                    <li>The dealer will then be draw cards until they beat your number or go bust</li>
                    <li>If you are closer to 21 than the dealer then you will win</li>
                    <li>King's, Queen's and Jack's count as 10</li>
                </ol>
            </div>
        );
    }
};


export default GameRules;