import { connect } from 'react-redux';
import ScoreBoard from './ScoreBoard'

const mapStateToProps = (state, ownProps) => {
  return {
    player1Score: state.playersList.player1.score,
    dealerScore: state.dealer.score
  }
}

const ScoreBoardWrapper = connect(mapStateToProps)(ScoreBoard);

export default ScoreBoardWrapper;