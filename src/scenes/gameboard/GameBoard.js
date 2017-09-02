import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const createMatrix = arr => {
    const colsInRow = Math.sqrt (arr.length);
    return arr
      .reduce (
        (rows, key, index) =>
          (index % colsInRow === 0
            ? rows.push ([key])
            : rows[rows.length - 1].push (key)) && rows,
        []
      )
      .map ((row, index) => ({id: index, cols: row}));
  };

const CardContainer = styled.div`
float: left;
padding: 1rem;
`;

const Board = styled.div`
background: #F8F8F8;
`;

const GameBoard = ({cards}) => {
  const matrix = createMatrix (cards);
  return (
    <Board>
      {matrix.map (row => (
        <div key={row.id}>
          {row.cols.map (card => (
            <CardContainer key={card.id}>
              <Card key={card.id} card={card} /><div style={{clear: 'both'}} />
            </CardContainer>
          ))}
          <div style={{clear: 'both'}} />
        </div>
      ))}
    </Board>
  );
};

GameBoard.propTypes = {
  cards: PropTypes.arrayOf (PropTypes.shape).isRequired
};

export default GameBoard;
