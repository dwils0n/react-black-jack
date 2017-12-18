import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserControls.css';
import ControlButton from '../ControlButton/ControlButton';
import utils from '../../utils/utils';

class UserControls extends Component {

    /**
        * react lifecycle event that fires when props change
        *
        * @param {obj} nextProps - the expexted next props
    */
    componentWillReceiveProps(nextProps) {
        const {handleUpdateWinner, handleUpadateBust} = this.props;

        if (utils.checkForBust(nextProps.userTotal)) {
            handleUpadateBust('user');
            handleUpdateWinner('dealer');
        } else if (utils.checkForBust(nextProps.dealerTotal)) {
            handleUpadateBust('dealer');
            handleUpdateWinner('user');
        } else if (nextProps.dealerTotal > nextProps.userTotal) {
            handleUpdateWinner('dealer');
        } else if (nextProps.dealerTotal >= utils.minPlayerVal && nextProps.dealerTotal === nextProps.userTotal) {
            handleUpdateWinner('tie');
        }
    }


    /**
        * trigger the hit action
        *
        * @param {event} e - event passed in from react events
    */
    hitTrigger(e) {
        this.props.handleDrawRandomCard(this.props.cardDeck, 'user');
    }


    /**
        * trigger the stick action
        *
        * @param {event} e - event passed in from react events
    */
    stickTrigger(e) {
        this.props.handleDealerMultiDrawTotal(this.props.cardDeck, this.props.dealerCards, this.props.dealerTotal, this.props.userTotal);
    }


    /**
        * rener the component
        *
        * @returns {component} returns the component
    */
    render() {
        return (
            <div className="controls">
                <ControlButton btnVal='hit' btnModifierClass="controls__item" btnType="hit" clickHandler={this.hitTrigger.bind(this)} />
                <ControlButton btnVal='stick' btnModifierClass="controls__item" btnType='stick' clickHandler={this.stickTrigger.bind(this)} />
            </div>
        );
    }
};

UserControls.propTypes = {
    cardDeck: PropTypes.shape({}).isRequired,
    userTotal: PropTypes.number.isRequired,
    dealerTotal: PropTypes.number.isRequired,
    dealerCards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleUpdateScore: PropTypes.func.isRequired,
    handleUpdateWinner: PropTypes.func.isRequired,
    handleDrawRandomCard: PropTypes.func.isRequired
};

export default UserControls;