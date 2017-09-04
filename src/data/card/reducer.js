import {FLIP_CARD, RESET_CARD, RESOLVE_CARD} from './actions';

const initialState = {
  id: null,
  isResolved: false,
  isTurnedAround: false,
  value: null
};

export default function card(state, action) {
  switch (action.type) {
    case FLIP_CARD:
        return Object.assign(state, card, {isTurnedAround : true});
    case RESET_CARD:
        return Object.assign(state, card, {isTurnedAround : false});
    case RESOLVE_CARD:
        return Object.assign(state, card, {isResolved : true});
    default:
      return initialState;
  }
}
