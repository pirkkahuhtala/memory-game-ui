import { connect } from 'react-redux';
import Card from './Card';
import { flipCard } from './actions';

const mapDispachToProps = (dispatch, { card }) => ({
  onClick: event => {
    event.preventDefault();
    dispatch(flipCard(card));
  }
});

export default connect(null, mapDispachToProps)(Card);
