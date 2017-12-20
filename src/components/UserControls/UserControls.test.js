import React from 'react';
import { shallow } from 'enzyme';
import userControls from './userControls';

const props = {
    cardDeck: {},
    player1Total: 18,
    dealerTotal: 10,
    dealerCards: [
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
    handleUpdateScore: () => {},
    handleUpdateWinner:() => {},
    handleDrawRandomCard: () => {}

}

it('renders correctly', () => {
    const component = shallow(<userControls {...props} />);

    expect(component.find('.controls').length).toBe(1);
});

