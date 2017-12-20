import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import {initialDrawCards} from '../../actions/actions';

const mapStateToProps = (state, ownProps) => {

    const playerCards = {
            player1: state.playersList.player1.cards,
            dealer: state.dealer.cards
        },
        cardDeck = state.cardDeck;

    return {
        cardDeck,
        playerCards
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInitialiseGame: (cards) => {
            dispatch(initialDrawCards(cards));
        }
    }
}

const GameBoardWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);

export default GameBoardWrapper;