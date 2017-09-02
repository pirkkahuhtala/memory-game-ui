import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Value = styled.text`
    display: ${props => (props.card.isTurnedAround ? 'block' : 'none')};
    font-weight: bold;
`;

const Div = styled.div`
    background: ${props => (props.card.isTurnedAround ? '#ffffff' : '#000000')};
    border: 1px solid ${props => props.card.isResolved ? '#32CD32' : '#000000'};
    display: block;
    height: 6rem;
    padding-top: 4rem;
    text-align: center;
    width: 7rem;
`;

const Card = ({card}) => (
  <Div card={card}>
    <Value card={card}>
      {card.value}
    </Value>
  </Div>
);

Card.propTypes = {
  card: PropTypes.shape.isRequired
};

export default Card;
