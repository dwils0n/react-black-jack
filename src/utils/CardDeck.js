/**
    * get all the card in the deck
    *
    * @returns {Object} deck - returns an object of all 52 cards
*/
const getFullCardDeck = () {
    let deck = {};
    const suits = ["spades", "hearts", "clubs", "diamonds"];

    for (let i = 0; i < suits.length; i++){
        const suit = suits[i];
        deck[suit] = this.createCards(suit);
    }

    return deck;
}


/**
    * get all the card in the deck
    *
    * @param {string} suit - the suit of the cards group.
    * 
    * @returns {Array} cards - returns the suit of cards based on what you pass in
*/
const createCards = (suit) {

    const cards = [
        {
            id: "ace",
            pointVal: [11, 1],
            suit
        },
        {
            id:"2",
            pointVal: 2,
            suit
        },
        {
            id:"3",
            pointVal: 3,
            suit
        },
        {
            id:"4",
            pointVal: 4,
            suit
        },
        {
            id:"5",
            pointVal: 5,
            suit
        },
        {
            id:"6",
            pointVal: 6,
            suit
        },
        {
            id:"7",
            pointVal: 7,
            suit
        },
        {
            id:"8",
            pointVal: 8,
            suit
        },
        {
            id:"9",
            pointVal: 9,
            suit
        },
        {
            id:"10",
            pointVal: 10,
            suit
        },
        {
            id:"jack",
            pointVal: 10,
            suit
        },
        {
            id:"queen",
            pointVal: 10,
            suit
        },
        {
            id:"king",
            pointVal: 10,
            suit
        }
    ];

    return cards;
}

const CardDeck = getFullCardDeck();


export default CardDeck;