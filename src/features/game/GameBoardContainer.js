import { connect } from 'react-redux';
import { getCards } from './selectors';
import GameBoard from './GameBoard';

const mapStateToProps = state => ({
  cards: getCards(state)
});

export default connect(mapStateToProps)(GameBoard);
