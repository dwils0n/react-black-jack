import React from 'react';
import { shallow } from 'enzyme';
import PreGameInfo from './PreGameInfo';

const props = {
    cardDeck: {},
    handleStartGame: () => {}
}

it('renders correctly', () => {
    const component = shallow(<PreGameInfo {...props} />);

    expect(component.find('.pre-game-info').length).toBe(1);
    expect(component.find('.btn').length).toBe(1);
});