import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const testSuit = 'diamonds',
    testCard = '2',
    props = {
        cardId: testCard,
        cardSuit: testSuit
    };

it('renders correctly', () => {
    const component = shallow(<Card {...props} />);

    expect(component.find('.card').length).toBe(1);
});

it('computeCardClass returns the correct class', () => {
    const component = shallow(<Card {...props} />);

    expect(component.instance().computeCardClass()).toBe(`card card--${testSuit} card--${testCard}`);
});