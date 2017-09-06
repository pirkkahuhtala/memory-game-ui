import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './app';
import game from './features/game/reducer';
import gameLogic from './features/game/logic';
import './styles.css';

const logicMiddleware = createLogicMiddleware([...gameLogic]);
const store = createStore(
  combineReducers({ game }),
  composeWithDevTools(applyMiddleware(logicMiddleware))
);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
