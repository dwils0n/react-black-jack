import utils from '../utils/utils';

const getRandomCardData = (cards, player, noCardsToDraw = 1) => {
    const randomCards = [];
    let remainingDeck = {...cards};

    for(let i = 0;  i < noCardsToDraw; i++) {
        let cardData = utils.drawRandomCard(remainingDeck);
        remainingDeck = cardData.remainingDeck;
        randomCards.push(cardData.card);
    }

    return {
        remainingDeck,
        randomCards
    };
}

export const resetDeck = () => {
    return {
        type: 'RESET_DECK',
        gameState: 'play'
    }
}

export const startGame = () => {
    return {
        type: 'START_GAME',
        gameState: 'play'
    }
}

export const updateWinner = (winner) => {
    return {
        type: 'UPDATE_WINNER',
        winner,
        gameState: 'win'
    }
}

export const setBust = (player) => {
    return {
        type: 'SET_BUST',
        player
    }
}

export const updateScore = (player, scoreIncrement = 1) => {
    return {
        type: 'UPDATE_SCORE',
        player,
        scoreIncrement
    }
}

export const updatePlayerTotal = (player, total) => {

    return {
        type: 'UPDATE_PLAYER_TOTAL',
        player,
        total
    }
}

export const initialDrawCards = (cards) => {
    const newCards = {...cards},
        userCardData = getRandomCardData(newCards, 'user', 2),
        dealerCardData = getRandomCardData(userCardData.remainingDeck, 'dealer', 1),
        remainingDeck = dealerCardData.remainingDeck;

    return {
        type: 'INITIAL_DRAW_CARDS',
        randomUserCards: userCardData.randomCards,
        randomDealerCards: dealerCardData.randomCards,
        remainingDeck
    }
}

export const drawCard = (cards, player, noCardsToDraw) => {
    const newCards = {...cards},
        cardData = getRandomCardData(newCards, player, noCardsToDraw);

    return {
        type: 'DRAW_CARD',
        player,
        ...cardData
    }
}

export const dealerDrawMultipleCards = (cards, currentDealerCards, dealerTotal, userTotal) => {

    let dealerDraw = [...currentDealerCards],
        newDealerTotal = utils.getCurrentTotal(currentDealerCards),
        remainingDeck = {...cards},
        dealerTotalCheck;


    while (checkForDrawDealerCard(newDealerTotal, userTotal)) {
        const newCard = getRandomCardData(remainingDeck);

        dealerDraw.push(...newCard.randomCards);
        newDealerTotal = utils.getCurrentTotal(dealerDraw);
        remainingDeck = newCard.remainingDeck;
    }

    console.log(dealerDraw);

    return {
        type: 'DEALER_DRAW_MULTIPLE_CARDS',
        newDealerTotal,
        dealerDraw,
        remainingDeck
    }
}

const checkForDrawDealerCard = (newDealerTotal, userTotal) => {
    let shouldLoop = false;

    if ((newDealerTotal < userTotal) || (newDealerTotal < utils.minPlayerVal) || (newDealerTotal === userTotal && newDealerTotal < utils.minPlayerVal)) {
        shouldLoop = true;
    }

    return shouldLoop;
}