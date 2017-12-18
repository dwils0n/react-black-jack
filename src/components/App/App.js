import React, { Component } from 'react';
import './App.css';
import ScoreBoardWrapper from '../ScoreBoard/ScoreBoardWrapper';
import WinnerInfoWrapper from '../WinnerInfo/WinnerInfoWrapper'
import GameBoardWrapper from '../GameBoard/GameBoardWrapper';
import UserControlsWrapper from '../UserControls/UserControlsWrapper';
import PreGameInfoWrapper from '../PreGameInfo/PreGameInfoWrapper';


class App extends Component {

    /**
        * render the game based on game state
        * 
        * @return {element} game - renders either the game rules or the game depending on state.
    */
    renderGame() {

        let game = (
            <div className="game">
                <PreGameInfoWrapper cardDeck={this.props.cardDeck}/>
            </div>
        )

        if (this.props.gameState === 'win') {
            game = (
                <div className="game">
                    <WinnerInfoWrapper />
                </div>
            )
        } else if (this.props.gameState === 'play') {
            game = (
                <div className="game">
                    <ScoreBoardWrapper />
                    <GameBoardWrapper />
                    <UserControlsWrapper />
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
