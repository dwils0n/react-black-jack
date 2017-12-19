import React from 'react';
import { shallow, mount } from 'enzyme';
import WinnerInfo from './WinnerInfo';

const bustText = '(BUST)';
const computeProps = (options) => ({
    cardDeck: {},
    winnerText: 'You Win',
    handleGameReset: () => {},
    userCards: [
        {
            "id":"ace",
            "pointVal":[11,1],
            "suit":"diamonds"
        },
        {
            "id":"king",
            "pointVal":10,
            "suit":"hearts"
        }
    ],
    dealerCards: [
        {
            "id":"2",
            "pointVal":2,
            "suit":"diamonds"
        },
        {
            "id":"king",
            "pointVal":10,
            "suit":"hearts"
        },
        {
            "id":"queen",
            "pointVal":10,
            "suit":"spades"
        }
    ],
    isUserBust: false,
    isDealerBust: true,
    dealerTotal: 22,
    userTotal: 18
});

it('renders correctly', () => {
    const props = computeProps();

    shallow(<WinnerInfo {...props} />);
});

it('title renders correctly when user wins', () => {
    const props = {...computeProps()};
    const component = shallow(<WinnerInfo {...props} />);

    expect(component.find('.heading').text()).toBe(props.winnerText);
});

it('title renders correctly', () => {
    const props = computeProps();
    const component = shallow(<WinnerInfo {...props} />);

    expect(component.find('.heading').text()).toBe(props.winnerText);
});

it('user isBust flag renders correctly', () => {
    const props = computeProps();
    props.isUserBust = true;
    props.isDealerBust = false;
    props.dealerTotal = 18;
    props.userTotal = 22;
    const component = shallow(<WinnerInfo {...props} />);

    expect(component.find('.winner-info__player-info--user .winner-info__score-item').text()).toBe(`Users total: ${props.userTotal} ${bustText}`);
});

it('renders user cards correctly', () => {
    const props = computeProps();
    const component = mount(<WinnerInfo {...props} />);

    expect(component.find('.winner-info__player-info--user .card').length).toBe(props.userCards.length);
});

it('renders dealer cards correctly', () => {
    const props = computeProps();
    const component = mount(<WinnerInfo {...props} />);

    expect(component.find('.winner-info__player-info--dealer .card').length).toBe(props.dealerCards.length);
});


