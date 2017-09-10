// @flow
import React from 'react';
import styled from 'styled-components';
import CardType from './types';

const resolveBorderColor = card => {
  if (card.isResolved) {
    return '#98FB98';
  } else if (card.isTurnedAround) {
    return '#000000';
  }
  return '#ffffff';
};

const CardGraphic = styled.div`
  background: #36c;
  background: linear-gradient(
        115deg,
        transparent 75%,
        rgba(255, 255, 255, 0.8) 75%
      )
      0 0,
    linear-gradient(245deg, transparent 75%, rgba(255, 255, 255, 0.8) 75%) 0 0,
    linear-gradient(115deg, transparent 75%, rgba(255, 255, 255, 0.8) 75%) 7px -15px,
    linear-gradient(245deg, transparent 75%, rgba(255, 255, 255, 0.8) 75%) 7px -15px,
    #36c;
  background-size: 1rem 2rem;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
`;

const Side = styled.div`
  background: #ffffff;
  backface-visibility: hidden;
  border-style: solid;
  border-width: 0.05rem;
  border-radius: 1rem;
  border-color: ${({ card }) => resolveBorderColor(card)};
  height: 6rem;
  left: 0;
  line-height: 6rem;
  padding: 0.5rem;
  position: absolute;
  text-align: center;
  top: 0;
  width: 4rem;
`;

const Front = Side.extend`
  font-size: 2rem;
  transform: rotateY(180deg);
`;
const Back = Side.extend`
  transform: rotateY(0deg);
  z-index: 1;
`;

const Flipper = styled.div`
  ${({ flipped }) => (flipped ? 'transform: rotateY(180deg)' : '')};
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
`;

const CardContainer = styled.div`
  height: 7rem;
  perspective: 1000px;
  width: 5rem;
`;

type Props = {
  card: CardType,
  onClick: Function
};

const Card = ({ card, onClick }: Props) => (
  <CardContainer>
    <Flipper flipped={card.isTurnedAround || card.isResolved}>
      <Front card={card} onClick={onClick}>
        {card.value}
      </Front>
      <Back card={card} onClick={onClick}>
        <CardGraphic />
      </Back>
    </Flipper>
  </CardContainer>
);

export default Card;
