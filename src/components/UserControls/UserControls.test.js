import React from 'react';
import { shallow } from 'enzyme';
import UserControls from './UserControls';

const props = {
    hitClickHandler: () => {},
    stickClickHandler: () => {}
}

it('renders correctly', () => {
    const component = shallow(<UserControls {...props} />);

    expect(component.find('.controls').length).toBe(1);
});