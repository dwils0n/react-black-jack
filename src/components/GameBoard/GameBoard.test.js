import React from 'react';
import { shallow } from 'enzyme';
import GameBoard from './GameBoard';

const props = {
    user: {
        "cards":[
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
        "score":0,
        "total":21
    },
    dealer: {
        "cards":[
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
        "score":0,
        "total":21
    }
};

it('renders correctly', () => {

    const component = shallow(<GameBoard {...props} />);

    expect(component.find('.game-board').length).toBe(1);
});