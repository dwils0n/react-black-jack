import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ControlButton.css';

class ControlButton extends Component {

    /**
        * compute the btn class based on any modifier passed in
        * 
        * @return {string} returns the a concatentated classname
    */
    computeClassName() {
        let btnClass = 'control-btn';

        if (this.props.btnModifierClass) {
            btnClass += ` ${this.props.btnModifierClass}`;
        }

        return btnClass;
    }


    /**
        * rener the component
        *
        * @returns {component} returns the component
    */
    render() {

        const { btnVal, clickHandler, btnType } = this.props;

        return (
            <button className={this.computeClassName()} onClick={clickHandler} data-btn-type={btnType}>
                {btnVal}
            </button>
        );
    }
};

ControlButton.propTypes = {
  btnVal: PropTypes.string.isRequired,
  btnModifierClass: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired
};

export default ControlButton;