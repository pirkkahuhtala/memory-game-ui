import Card from './types';

const shuffle = b => {
  const a = b;
  for (let i = a.length; i; i -= 1) {
    const j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
};

export default function prepareGame(size: number): Array<Card> {
  return (alternatives =>
    shuffle(alternatives.concat(alternatives)).map((number, index) => ({
      id: index,
      value: number + 1,
      isResolved: false,
      isTurnedAround: false
    })))(Array.from(Array(size).keys()));
}
