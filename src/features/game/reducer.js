// @flow
import { END_GAME, START_GAME, UPDATE_CARD } from './actions';
import Card from './types';
import prepareGame from './prepareGame';

type State = {
  cards: []
};

type Action = {
  type: string,
  card: Card
};

const initialState = {
  cards: []
};

export default function game(state: State = initialState, action: Action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, cards: prepareGame(18) };
    case END_GAME:
      return { ...state, cards: [] };
    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map(
          card =>
            card.id === action.card.id ? { ...card, ...action.card } : card
        )
      };
    default:
      return state;
  }
}
