import { connect } from 'react-redux';
import {resetDeck, drawCard, startGame} from '../../actions/actions';
import App from './App'

const mapStateToProps = (state, ownProps) => {
    const {winner, gameState, cardDeck} = state;

    return {
        gameState,
        cardDeck,
        winner
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleDrawRandomCard: (cards, player, noCardsToDraw) => {
        dispatch(drawCard(cards, player, noCardsToDraw));
    },
    handleReset: (scores) => {
        dispatch(resetDeck(scores));
    },
    handleStartGame: () => {
        dispatch(startGame());
    }
});


const AppWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppWrapper;