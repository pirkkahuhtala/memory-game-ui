import React, { Component } from 'react';
import GameBoardContainer from './GameBoardContainer';

class Game extends Component {
  componentWillMount() {
    this.props.startGame();
  }
  render() {
    return <GameBoardContainer />;
  }
}

export default Game;
