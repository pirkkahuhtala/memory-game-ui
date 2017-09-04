export const FLIP_CARD = 'flipCard';
export const RESOLVE_CARD = 'resolveCard';
export const RETURN_CARD = 'returnCard';

export function returnCard(card) {
  return {type: RETURN_CARD, card};
}

export function flipCard(card) {
  return {type: FLIP_CARD, card};
}

export function resolveCard(card) {
  return {type: RESOLVE_CARD, card};
}
