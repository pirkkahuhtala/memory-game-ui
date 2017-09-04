export const START_GAME = 'startGame';
export const END_GAME = 'endGame';

export function startGame(cards) {
  return {type: START_GAME, cards};
}

export function endGame(cards) {
  return {type: END_GAME, cards};
}
