import React from 'react';
import {storiesOf} from '@storybook/react';

import GameBoard from '../src/scenes/game/GameBoard';
import prepareGame from '../src/scenes/game/Services';

storiesOf ('Gameboard', module).add('Beginning', () => (
  <GameBoard cards={prepareGame(18)} />
));
