import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './Overlay';

let props = {
    winnerText: 'You win',
    clickHandler: () => {},
    userCards: [
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
    isUserBust: false,
    isDealerBust: true,
    dealerTotal: 19,
    userTotal: 15
}
it('renders correctly', () => {
    const component = shallow(<Overlay {...props} />);

    expect(component.find('.overlay').length).toBe(1);
    expect(component.find('.heading').text()).toBe(props.winnerText);
});