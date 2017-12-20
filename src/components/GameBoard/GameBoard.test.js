import React from 'react';
import { shallow, mount } from 'enzyme';
import GameBoard from './GameBoard';

const props = {
    cardDeck: {},
    handleInitialiseGame: () => {},
    playerCards: {
        player1: [
            {
                "id":"ace",
                "pointVal":[11,1],
                "suit":"diamonds"
            },
            {
                "id":"king",
                "pointVal":10,
                "suit":"hearts"
            }
        ],
        dealer: [
            {
                "id":"ace",
                "pointVal":[11,1],
                "suit":"diamonds"
            },
            {
                "id":"king",
                "pointVal":10,
                "suit":"hearts"
            }
        ]
    }
};


it('renders correctly', () => {
    shallow(<GameBoard {...props} />);
});


it('renders game-board correctly', () => {
    const component = shallow(<GameBoard {...props} />);
    expect(component.find('.game-board').length).toBe(1);
});


it('renders player1 cards list correctly', () => {
    const component = mount(<GameBoard {...props} />);
    expect(component.find('.player1-selection__value').length).toBe(1);
    expect(component.find('.player1-selection__value .game-board__card').length).toBe(props.playerCards.player1.length);
});


it('renders dealer cards liist correctly', () => {
    const component = mount(<GameBoard {...props} />);
    expect(component.find('.dealer-selection__value').length).toBe(1);
    expect(component.find('.dealer-selection__value .game-board__card').length).toBe(props.playerCards.dealer.length);
});