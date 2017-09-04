import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const CardContainer = styled.div`
padding: 1rem;
`;

const Board = styled.div`
background: #CFCFCF;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const GameBoard = ({cards}) => (
  <Board>
    {cards.map (card => (
      <CardContainer key={card.id}>
        <Card key={card.id} card={card} />
      </CardContainer>
    ))}
  </Board>
);

GameBoard.propTypes = {
  cards: PropTypes.arrayOf (PropTypes.shape)
};

GameBoard.defaultProps = {
  cards: []
};

export default GameBoard;
