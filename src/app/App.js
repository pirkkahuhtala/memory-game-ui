import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Layout from './Layout';
import StartUpScreen from '../features/startupscreen';
import GameContainer from '../features/game';

const App = () => (
  <div>
    <HashRouter>
      <Layout>
        <Route exact path="/" component={StartUpScreen} />
        <Route path="/game" component={GameContainer} />
      </Layout>
    </HashRouter>
  </div>
);

export default App;
