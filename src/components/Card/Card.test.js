import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const props = {
    cardId: '2',
    cardSuit: 'diamonds'
}

it('renders correctly', () => {
    const component = shallow(<Card {...props} />);

    expect(component.find('.card').length).toBe(1);
});