import { connect } from 'react-redux';
import {startGame} from '../../actions/actions';
import PreGameInfo from './PreGameInfo';
    

const mapStateToProps = (state, ownProps) => {
    const {cardDeck} = state;

    return {
        cardDeck
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleStartGame: () => {
            dispatch(startGame());
        }
    }
}


const PreGameInfoWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(PreGameInfo);

export default PreGameInfoWrapper;