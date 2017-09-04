import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles.css';
import Layout from './components/layout/';

ReactDOM.render (
  <MuiThemeProvider><Layout /></MuiThemeProvider>,
  document.getElementById ('root')
);
