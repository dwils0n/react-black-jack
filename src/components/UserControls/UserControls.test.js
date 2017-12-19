import React from 'react';
import { shallow } from 'enzyme';
import UserControls from './UserControls';

const props = {
    cardDeck: {},
    userTotal: 18,
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
    const component = shallow(<UserControls {...props} />);

    expect(component.find('.controls').length).toBe(1);
});

