import { createLogic } from 'redux-logic';
import { updateCard, setFirstOption, setSecondOption } from './actions';
import { getCards } from './selectors';

const flipCard = createLogic({
  type: 'flipCard',

  validate({ getState, action }, allow, reject) {
    if (action.card.isResolved) {
      reject(action);
    } else {
      allow(action);
    }
  },

  process({ getState, action }, dispatch, done) {
    const cards = getCards(getState());
    const [firstOption, secondOption] = cards.filter(
      card => card.isTurnedAround && !card.isResolved
    );
    if (firstOption && secondOption) {
      dispatch(updateCard({ ...firstOption, isTurnedAround: false }));
      dispatch(updateCard({ ...secondOption, isTurnedAround: false }));
    } else if (
      firstOption &&
      firstOption.value === action.card.value &&
      firstOption.id !== action.card.id
    ) {
      dispatch(updateCard({ ...firstOption, isResolved: true }));
      dispatch(updateCard({ ...action.card, isResolved: true }));
    } else {
      dispatch(
        updateCard({
          ...action.card,
          isTurnedAround: true
        })
      );
    }
    done();
  }
});

export default [flipCard];
