import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles.css';
import Layout from './components/layout';
import StartUpScreen from './scenes/startupscreen';
import GameBoard from './scenes/gameboard';

ReactDOM.render (
  <MuiThemeProvider>
    <Layout />
  </MuiThemeProvider>,
  document.getElementById ('root')
);
