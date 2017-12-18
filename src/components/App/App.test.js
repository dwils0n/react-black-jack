import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('calculateWinnerText to return a string', () => {
  const component = shallow(<App />);

  expect(component.instance().calculateWinnerText()).toBe('');
});

it('getRandomInt to return number', () => {
  const component = shallow(<App />);

  expect(typeof component.instance().getRandomInt(0, 1)).toBe('number');
});


it('getRandomItemFromArr to return an item from the array', () => {
  const component = shallow(<App />);
  const array = [1];

  expect(component.instance().getRandomItemFromArr(array)).toBe(1);
});