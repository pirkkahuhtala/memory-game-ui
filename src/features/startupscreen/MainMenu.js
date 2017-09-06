import React from 'react';
import { RaisedButton, Card, CardText, CardTitle } from 'material-ui';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuButton = styled(RaisedButton)`
  margin-bottom: 15px;
  width: 100%;
`;

const StyledCardTitle = styled(CardTitle)`text-align: center;`;

const MainMenu = () => (
  <Card>
    <StyledCardTitle title="Memory Game" />
    <CardText>
      <Link to="/game">
        <MenuButton>Start new game</MenuButton>
      </Link>
      <MenuButton>Credits</MenuButton>
    </CardText>
  </Card>
);

export default MainMenu;
