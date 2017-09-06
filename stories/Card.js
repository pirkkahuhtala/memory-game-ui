import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../src/scenes/game/Card';

storiesOf('Card', module)
  .addDecorator(story => <div style={{ background: '#cfcfcf' }}>{story()}</div>)
  .add('Back', () => (
    <Card card={{ isResolved: false, isTurnedAround: false, value: '1' }} />
  ))
  .add('Turned around', () => (
    <Card card={{ isResolved: false, isTurnedAround: true, value: '1' }} />
  ))
  .add('Resolved', () => (
    <Card card={{ isResolved: true, isTurnedAround: true, value: '1' }} />
  ));
