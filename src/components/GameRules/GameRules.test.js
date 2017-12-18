import React from 'react';
import { shallow } from 'enzyme';
import GameRules from './GameRules';

it('renders correctly', () => {
    const component = shallow(<GameRules />);

    expect(component.find('.game-rules').length).toBe(1);
});