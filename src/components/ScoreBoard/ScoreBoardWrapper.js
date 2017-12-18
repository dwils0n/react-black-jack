import { connect } from 'react-redux';
import ScoreBoard from './ScoreBoard'

const mapStateToProps = (state, ownProps) => {
  return {
    userScore: state.user.score,
    dealerScore: state.dealer.score
  }
}

const ScoreBoardWrapper = connect(mapStateToProps)(ScoreBoard);

export default ScoreBoardWrapper;