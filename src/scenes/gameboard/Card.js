import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Value = styled.text`
    display: ${props => (props.card.isTurnedAround ? 'block' : 'none')};
    font-size: 2rem;
`;

const Div = styled.div`
    ${props => (!props.card.isTurnedAround && !props.card.isResolved ? `
    background: #36c;
    background: 
    linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,
    linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,
    linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px,
    linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px,
    #36c;
    background-size: 1rem 2rem;` : '')}
    border-radius: 1rem;
    ${props => (props.card.isResolved ? `
    border: 1px solid #32CD32;
    padding: 5px;
    ` : '')}
    ${props => (props.card.isTurnedAround && !props.card.isResolved ? `
    border: 1px solid #000000;
    padding: 5px;
    ` : '')}
    ${props => (!props.card.isTurnedAround && !props.card.isResolved ? `
    border: 6px solid #ffffff;    
    ` : '')}
    display: block;
    height: 4rem;
    padding-top: 1.5rem;
    text-align: center;
    width: 4rem;
`;

const Card = ({card}) => (
  <Div card={card}>
    <Value card={card}>
      {card.value}
    </Value>
  </Div>
);

Card.propTypes = {
  card: PropTypes.shape({}).isRequired
};

export default Card;
