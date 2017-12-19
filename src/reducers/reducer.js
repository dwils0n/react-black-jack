import cardDeck from '../constants/cardDeck';
import utils from '../utils/utils';

const initialState = {
    cardDeck: cardDeck.cards,
    gameState: 'initial',
    winner: '',
    user: {
        cards: [],
        score: 0,
        total: 0,
        isBust: false
    },
    dealer: {
        cards: [],
        score: 0,
        total: 0,
        isBust: false
    }
};

const calculateDrawCardsPlayerState = (playerObj, randomCards) => {
    const newPlayerObj = {...playerObj};

    newPlayerObj.cards = newPlayerObj.cards.concat(randomCards);
    newPlayerObj.total = utils.getCurrentTotal(newPlayerObj.cards);

    return newPlayerObj;
}

const reducer = (state = {...initialState}, action) => {

    switch (action.type) {
        case 'RESET_DECK':

            const newResetState = {...initialState};

            newResetState.user.score = state.user.score;
            newResetState.dealer.score = state.dealer.score;

            return newResetState;

        case 'DRAW_CARD':
            const { randomCards, remainingDeck, player } = action,
                newDeckState = {...state};

            newDeckState.cardDeck = remainingDeck;
            newDeckState[player] = calculateDrawCardsPlayerState(newDeckState[player], randomCards);

            return newDeckState;

        case 'INITIAL_DRAW_CARDS':
            const { randomDealerCards, randomUserCards} = action,
                newInitalDrawDeckState = {...state};

            newInitalDrawDeckState.cardDeck = action.remainingDeck;
            newInitalDrawDeckState.dealer = calculateDrawCardsPlayerState(newInitalDrawDeckState.dealer, randomDealerCards);
            newInitalDrawDeckState.user = calculateDrawCardsPlayerState(newInitalDrawDeckState.user, randomUserCards);

            return newInitalDrawDeckState;


        case 'DEALER_DRAW_MULTIPLE_CARDS':
            const { dealerDraw, newDealerTotal } = action,
                dealerDrawRemainingDeck = action.remainingDeck,
                newDealerDrawDeckState = {...state};

            newDealerDrawDeckState.cardDeck = dealerDrawRemainingDeck;
            newDealerDrawDeckState.dealer.cards = dealerDraw;
            newDealerDrawDeckState.dealer.total = newDealerTotal;

            return newDealerDrawDeckState;


        case 'START_GAME':
            return {
                ...state,
                gameState: action.gameState
            }

        case 'SET_BUST':
            const newBustState = {...state};
            newBustState[action.player].isBust = true;

            return newBustState;

        case 'UPDATE_SCORE':
            const newScoreState = {...state};
            newScoreState[action.player].score += action.scoreIncrement;

            return newScoreState;

        case 'UPDATE_WINNER':
            return {
                ...state,
                winner: action.winner,
                gameState: action.gameState
            }

        default:
            return state
    }
}

export default reducer;