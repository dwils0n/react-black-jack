import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import svgIcons from '../../constants/svgIcons';

class Card extends Component {

    /**
        * compute the card Class
        *
        * @returns {string} returns the class
    */
    computeCardClass() {
        let cardClass = `card card--${this.props.cardSuit} card--${this.props.cardId}`
        if (this.props.modifierClass) {
            cardClass += ` ${this.props.modifierClass}`;
        }

        return cardClass;
    }

    /**
        * rener the component
        *
        * @returns {component} returns the component
    */
    render() {
        return (
            <span className={this.computeCardClass()}>
                {svgIcons[this.props.cardSuit]}
                {this.props.cardId}
            </span>
        );
    }
};

Card.propTypes = {
    modifierClass: PropTypes.string,
    cardId: PropTypes.string.isRequired,
    cardSuit: PropTypes.string.isRequired
};

export default Card;