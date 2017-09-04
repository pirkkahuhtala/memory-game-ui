import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';

import './styles.css';
import Layout from './components/layout';
import StartUpScreen from './scenes/startupscreen';
import GameBoard from './scenes/gameboard';

ReactDOM.render (
  <MuiThemeProvider>
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={StartUpScreen} />
        <Route path="/game" component={GameBoard} />
      </Layout>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById ('root')
);
