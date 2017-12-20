import React from 'react';
import { shallow } from 'enzyme';
import ScoreBoard from './ScoreBoard';

const props = {
    player1Score: 2,
    dealerScore: 2
}

it('renders correctly', () => {
    const component = shallow(<ScoreBoard {...props} />);

    expect(component.find('.score-board').length).toBe(1);
    expect(component.find('.score-board__player1 .score-value').text()).toBe('2');
    expect(component.find('.score-board__dealer .score-value').text()).toBe('2');
});