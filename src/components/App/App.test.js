import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    const props = {
        gameState: 'initial'
    }

    shallow(<App {...props}/>);
});


it('renders correctly in pre game mode', () => {
    const props = {
        gameState: 'initial'
    }

    const component = shallow(<App {...props}/>);

    expect(component.find('.game--pre')).toHaveLength(1);
});

it('renders correctly in play mode', () => {
    const props = {
        gameState: 'play'
    }
    const component = shallow(<App {...props}/>);

    expect(component.find('.game--play')).toHaveLength(1);
});

it('renders correctly in win mode', () => {
    const props = {
        gameState: 'win'
    }
    const component = shallow(<App {...props}/>);

    expect(component.find('.game--win')).toHaveLength(1);
});
