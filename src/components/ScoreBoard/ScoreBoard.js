import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.css';

class ScoreBoard extends Component {


    /**
        * rener the component
        *
        * @returns {component} returns the component
    */
    render() {

        const { userScore, dealerScore } = this.props;

        return (
            <div className="score-board">
                <div className="score-board__user">
                    user: <span className="score-value">{userScore}</span>
                </div>
                <div className="score-board__title">
                    Score Board
                </div>
                <div className="score-board__dealer">
                    dealer: <span className="score-value">{dealerScore}</span>
                </div>
            </div>
        );
    }
};

ScoreBoard.propTypes = {
  userScore: PropTypes.number.isRequired,
  dealerScore: PropTypes.number.isRequired
};

export default ScoreBoard;