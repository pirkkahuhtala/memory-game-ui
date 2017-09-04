import React from 'react';
import {storiesOf} from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';

import MainMenu from '../src/scenes/startupscreen/MainMenu';
import StartUpScreen from '../src/scenes/startupscreen/StartUpScreen';

storiesOf ('StartUpScreen', module)
  .addDecorator (muiTheme ())
  .add ('MainMenu', () => <MainMenu />)
  .add ('View', () => <StartUpScreen />);
