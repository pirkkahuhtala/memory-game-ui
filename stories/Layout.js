import React from 'react';
import {storiesOf} from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';

import Header from '../src/components/layout/Header';
import Layout from '../src/components/layout/Layout';

storiesOf ('Layout', module)
  .addDecorator (muiTheme ())
  .add('Header', () => <Header />)
  .add('Full', () => <Layout />);
