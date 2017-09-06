import React from 'react';
import styled from 'styled-components';
import CardContainer from './CardContainer';
import type Card from './types';

const CardWrapper = styled.div`padding: 1rem;`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type Props = {
  cards: Array<Card>
};

const GameBoard = ({ cards }: Props) => (
  <Board>
    {cards.map(card => (
      <CardWrapper key={card.id}>
        <CardContainer key={card.id} card={card} />
      </CardWrapper>
    ))}
  </Board>
);

GameBoard.defaultProps = {
  cards: []
};

export default GameBoard;
