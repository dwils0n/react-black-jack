import React from 'react';
import { shallow, mount } from 'enzyme';
import WinnerInfo from './WinnerInfo';

const bustText = '(BUST)';
const computeProps = (options) => ({
    cardDeck: {},
    winnerText: 'You Win',
    handleGameReset: () => {},
    player1Cards: [
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
    isplayer1Bust: false,
    isDealerBust: true,
    dealerTotal: 22,
    player1Total: 18
});

it('renders correctly', () => {
    const props = computeProps();

    shallow(<WinnerInfo {...props} />);
});

it('title renders correctly when player1 wins', () => {
    const props = {...computeProps()};
    const component = shallow(<WinnerInfo {...props} />);

    expect(component.find('.heading').text()).toBe(props.winnerText);
});

it('title renders correctly', () => {
    const props = computeProps();
    const component = shallow(<WinnerInfo {...props} />);

    expect(component.find('.heading').text()).toBe(props.winnerText);
});

it('player1 isBust flag renders correctly', () => {
    const props = computeProps();
    props.isplayer1Bust = true;
    props.isDealerBust = false;
    props.dealerTotal = 18;
    props.player1Total = 22;
    const component = shallow(<WinnerInfo {...props} />);

    expect(component.find('.winner-info__player-info--player1 .winner-info__score-item').text()).toBe(`player1s total: ${props.player1Total} ${bustText}`);
});

it('renders player1 cards correctly', () => {
    const props = computeProps();
    const component = mount(<WinnerInfo {...props} />);

    expect(component.find('.winner-info__player-info--player1 .card').length).toBe(props.player1Cards.length);
});

it('renders dealer cards correctly', () => {
    const props = computeProps();
    const component = mount(<WinnerInfo {...props} />);

    expect(component.find('.winner-info__player-info--dealer .card').length).toBe(props.dealerCards.length);
});


