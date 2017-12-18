import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserControls.css';
import ControlButton from '../ControlButton/ControlButton';

class UserControls extends Component {

    /**
        * rener the component
        *
        * @returns {component} returns the component
    */
    render() {
        const {hitClickHandler, stickClickHandler} = this.props;
        return (
            <div className="controls">
                <ControlButton btnVal='hit' btnModifierClass="controls__item" btnType="hit" clickHandler={hitClickHandler} />
                <ControlButton btnVal='stick' btnModifierClass="controls__item" btnType='stick' clickHandler={stickClickHandler} />
            </div>
        );
    }
};

UserControls.propTypes = {
    hitClickHandler: PropTypes.func.isRequired,
    stickClickHandler: PropTypes.func.isRequired
};

export default UserControls;