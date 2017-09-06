// @flow
import Card from './Card';

export const FLIP_CARD = 'flipCard';
export const UPDATE_CARD = 'updateCard';
export const START_GAME = 'startGame';
export const END_GAME = 'endGame';

type Action = {
  type: string,
  card?: Card
};

export function updateCard(card: Card): Action {
  return { type: UPDATE_CARD, card };
}

export function flipCard(card: Card): Action {
  return { type: FLIP_CARD, card };
}

export function startGame() {
  return { type: START_GAME };
}

export function endGame() {
  return { type: END_GAME };
}
