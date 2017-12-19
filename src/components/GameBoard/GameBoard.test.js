import React from 'react';
import { shallow, mount } from 'enzyme';
import GameBoard from './GameBoard';

const props = {
    cardDeck: {},
    handleInitialiseGame: () => {},
    playerCards: {
        user: [
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


it('renders user cards list correctly', () => {
    const component = mount(<GameBoard {...props} />);
    expect(component.find('.user-selection__value').length).toBe(1);
    expect(component.find('.user-selection__value .game-board__card').length).toBe(props.playerCards.user.length);
});


it('renders dealer cards liist correctly', () => {
    const component = mount(<GameBoard {...props} />);
    expect(component.find('.dealer-selection__value').length).toBe(1);
    expect(component.find('.dealer-selection__value .game-board__card').length).toBe(props.playerCards.dealer.length);
});