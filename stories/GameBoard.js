import React from 'react';
import {storiesOf} from '@storybook/react';

import GameBoard from '../src/scenes/gameboard/GameBoard';

const shuffle = b => {
  const a = b;
  for (let i = a.length; i; i -= 1) {
    const j = Math.floor (Math.random () * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
};

const prepareGame = (size) =>
  (alternatives =>
    shuffle (alternatives.concat (alternatives)).map ((number, index) => ({
      id: index,
      value: number,
      resolved: false,
      turnedAround: false
    }))) (Array.from(Array(size).keys()));

storiesOf ('Gameboard', module).add ('Beginning', () => (
  <GameBoard cards={prepareGame(18)} />
));
