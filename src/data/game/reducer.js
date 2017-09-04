import {START_GAME, END_GAME} from './actions';

const initialState = [];

export default function game(state, action) {
  switch (action.type) {
    case START_GAME:
      return [...state, ...action.cards];
    case END_GAME:
      return [];
    default:
      return initialState;
  }
}
