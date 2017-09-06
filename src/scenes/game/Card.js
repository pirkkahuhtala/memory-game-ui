// @flow
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardType from '../../data/card/Card';

const Value = styled.text`
  display: ${props => (props.card.isTurnedAround ? 'block' : 'none')};
  font-size: 2rem;
`;

const ValueWrapper = styled.div`
  ${({ card }) =>
    !card.isTurnedAround && !card.isResolved
      ? `
  background: #36c;
  background: 
  linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,
  linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,
  linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px,
  linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px,
  #36c;
  background-size: 1rem 2rem;`
      : ''} height: 100%;
  width: 100%;
  border-radius: 1rem;
`;

const resolveBorderColor = card => {
  if (card.isResolved) {
    return '#98FB98';
  } else if (card.isTurnedAround) {
    return '#000000';
  }
  return '#ffffff';
};

const CardContainer = styled.div`
  background: #ffffff;
  border-style: solid;
  border-width: 0.1rem;
  border-radius: 1rem;
  border-color: ${({ card }) => resolveBorderColor(card)};
  display: block;
  height: 6rem;
  line-height: 6rem;
  padding: 0.4rem;
  text-align: center;
  width: 4rem;
`;

type Props = {
  card: CardType,
  onClick: Function
};

const Card = ({ card, onClick }: Props) => (
  <CardContainer card={card} onClick={onClick}>
    <ValueWrapper card={card}>
      <Value card={card}>{card.value}</Value>
    </ValueWrapper>
  </CardContainer>
);

Card.propTypes = {
  card: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func
};

export default Card;
