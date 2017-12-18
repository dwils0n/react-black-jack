
/**
    * set up some global game rule values
*/
const maxPlayerVal = 21,
    minPlayerVal = 17

/**
    * get a random item from an arr
    *
    * @param {Array} arr - an arr to get an item from
    * 
    * @return {object/string} item - we expect this to be either a string or an obj but can return anything from an array
*/
const getRandomItemFromArr = (arr) => {
    const randomNum = getRandomInt(0, arr.length);
    let item;

    if (arr.length) {
        item = arr[randomNum];
    }

    return item;
}


/**
    * Draw a random card from the passed deck
    *
    * @returns {object} card - returns the random card based on the cardDeck
*/
const drawRandomCard = (cardDeck) => {

    const randomSuit = getRandomItemFromArr(Object.keys(cardDeck)),
        randomCard = getRandomItemFromArr(cardDeck[randomSuit]),
        randomCardIndex = cardDeck[randomSuit].indexOf(randomCard),
        newSuitArray = cardDeck[randomSuit].slice(),
        card = cardDeck[randomSuit][randomCardIndex];

    newSuitArray.splice(randomCardIndex, 1);
    cardDeck[randomSuit] = newSuitArray;

    return {
        remainingDeck: cardDeck,
        card
    };
}


/**
    * generate a random number between two integers
    *
    * @param {int} min - the minimum value
    * @param {int} max - the maximum value
    * 
    * @return {int} - a random integer
*/
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * max) + min  ;
}


/**
    * get the current total of the cards
    *
    * @param {array} cards - the current cards
    *
    * @returns {nbumber} total - returns the total of the cards based on point val
*/
const getCurrentTotal = (cards) => {

    let total = combineCardVals(cards),
        hasPointsArry = checkCardsForPointsArr(cards);

    if (hasPointsArry && checkForBust(total)) {
        total = combineCardVals(cards, 1);
    }

    return total;
}

/**
    * combine all the card vals and if points is an array i.e. an "ace" then try inxed.
    *
    * @param {array} cards - the current cards
    * @param {number} index - the index we want to use to get points from
    *
    * @returns {number} total - returns the total
*/
const combineCardVals = (cards, index = 0) => {
    let total = 0;

    cards.map(card => {
        let points = card.pointVal;
        
        if (Array.isArray(card.pointVal)) {
            total += points[index];
        } else {
            total += points;
        }

        return total;
    })

    return total;
}

/**
    * check the current cards for a points array which exists for an Ace as it can be either 1, 11
    *
    * @param {array} cards - the current cards
    *
    * @returns {bool} hasPointsArry - returns if any of the current cards have two point vals
*/
const checkCardsForPointsArr = (cards) => {

    const hasPointsArray = cards.map(card => {
        let isArry = false;

        if (Array.isArray(card.pointVal)) {
            isArry = true;
        }

        return isArry;
    });

    return hasPointsArray.indexOf(true) >= 0;
}


/**
    * check a total value if it is bust or not
    *
    * @param {number} total - the total to check against
    *
    * @returns {bool} - returns true or false based on if total has gone over 21 
*/
const checkForBust = (total) => {
    return total > maxPlayerVal ? true : false;
}


export default {
    maxPlayerVal,
    minPlayerVal,
    getCurrentTotal,
    getRandomItemFromArr,
    getRandomInt,
    checkForBust,
    drawRandomCard
}