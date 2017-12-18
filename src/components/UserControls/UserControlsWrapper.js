import { connect } from 'react-redux';
import {drawCard, updateScore, setBust, updateWinner, updatePlayerTotal, dealerDrawMultipleCards} from '../../actions/actions';
import UserControls from './UserControls';
    

const mapStateToProps = (state, ownProps) => {
    const {cardDeck, user, dealer} = state;

    return {
        cardDeck,
        userTotal: user.total,
        dealerTotal: dealer.total,
        dealerCards: dealer.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateScore: (winner) => {
             dispatch(updateScore(winner));
        },
        handleUpdateWinner: (winner) => {
            const scoreIncrement = 1;

            if (winner !== 'tie') {
                dispatch(updateScore(winner, scoreIncrement));
            }

            dispatch(updateWinner(winner));

        },
        handleDrawRandomCard: (cards, player, noCardsToDraw) => {
            dispatch(drawCard(cards, player, noCardsToDraw));
        },
        handleUpadateBust: (player) => {
            dispatch(setBust(player));
        },
        handleUpdatePlayerTotal: (player, total) => {
            dispatch(updatePlayerTotal(player, total));
        },
        handleDealerMultiDrawTotal: (cards, currentDealerCards, dealerTotal, userTotal) => {
            dispatch(dealerDrawMultipleCards(cards, currentDealerCards, dealerTotal, userTotal));
        }
    }
}


const UserControlsWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserControls);

export default UserControlsWrapper;