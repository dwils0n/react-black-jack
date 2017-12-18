import React from 'react';
import { shallow } from 'enzyme';
import ControlButton from './ControlButton';

const props = {
    btnVal: 'hit',
    btnModifierClass: 'btnModifierClass',
    btnType: 'hit'
};

it('renders correctly', () => {

    const component = shallow(<ControlButton {...props} />);

    expect(component.find('.control-btn').text()).toBe(props.btnVal);
    expect(component.find('.control-btn').prop('data-btn-type')).toBe(props.btnType);

});