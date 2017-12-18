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

    if (winner === 'user') {
        winnerText = 'You Win';
    } else if (winner === 'dealer') {
        winnerText = 'You Loose';
    } else if (winner === 'tie'){
        winnerText = 'Its a Draw';
    }

    return winnerText;
}

const mapStateToProps = (state, ownProps) => {
    const {winner, user, dealer, cardDeck} = state,
        winnerText = getwinnerText(winner);

    return {
        cardDeck,
        userCards: user.cards,
        dealerCards: dealer.cards,
        isUserBust: user.isBust,
        userTotal: user.total,
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