import { connect } from 'react-redux';
import {resetDeck, startGame} from '../../actions/actions';
import WinnerInfo from './WinnerInfo'

 /**
    * calculate the winner text based on who won
    *
    * @param {string} winner - the current winner
    * 
    * @return {string} winnerText - the winner text based on who won
*/
const getwinnerText = (winner) => {
     let winnerText = '';

    if (winner === 'player1') {
        winnerText = 'You Win';
    } else if (winner === 'dealer') {
        winnerText = 'You Loose';
    } else if (winner === 'tie'){
        winnerText = 'Its a Draw';
    }

    return winnerText;
}

const mapStateToProps = (state, ownProps) => {
    const {winner, player1, dealer, cardDeck} = state,
        winnerText = getwinnerText(winner);

    return {
        cardDeck,
        player1Cards: player1.cards,
        dealerCards: dealer.cards,
        isplayer1Bust: player1.isBust,
        player1Total: player1.total,
        isDealerBust: dealer.isBust,
        dealerTotal: dealer.total,
        winnerText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGameReset: () => {
            dispatch(resetDeck());
            dispatch(startGame());
        }
    }
}


const WinnerInfoWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(WinnerInfo);

export default WinnerInfoWrapper;