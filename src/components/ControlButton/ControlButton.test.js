import React from 'react';
import { shallow } from 'enzyme';
import ControlButton from './ControlButton';

const props = {
    btnVal: 'hit',
    btnModifierClass: 'btnModifierClass',
    btnType: 'hit'
};

it('renders correctly', () => {

    shallow(<ControlButton {...props} />);

});

it('renders correctly', () => {

    const component = shallow(<ControlButton {...props} />);

    expect(component.find('.control-btn').text()).toBe(props.btnVal);
});


it('renders the correct btn type', () => {

    const component = shallow(<ControlButton {...props} />);

    expect(component.find('.control-btn').prop('data-btn-type')).toBe(props.btnType);
});

it('computeClassName returns the correct sting', () => {

    const component = shallow(<ControlButton {...props} />);

    expect(component.instance().computeClassName()).toBe('control-btn btnModifierClass');
});

