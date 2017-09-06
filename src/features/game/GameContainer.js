import { connect } from 'react-redux';
import Game from './Game';
import { startGame } from './actions';

const mapDispachToProps = dispatch => ({
  startGame: () => {
    dispatch(startGame());
  }
});

export default connect(null, mapDispachToProps)(Game);
