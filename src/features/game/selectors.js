export function getGame(state) {
  return state.game;
}

export function getCards(state) {
  return getGame(state).cards;
}
