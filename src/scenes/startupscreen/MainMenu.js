import React from 'react';
import {RaisedButton, Card, CardText, CardTitle} from 'material-ui';
import styled from 'styled-components';

const MenuButton = styled(RaisedButton)`
    margin-bottom: 5px;
    width: 100%;
`;

const StyledCardTitle = styled(CardTitle)`
    text-align: center;
`;

const MainMenu = () => (
  <Card>
    <StyledCardTitle title="Memory Game" />
    <CardText>
      <MenuButton>
        Start new game
      </MenuButton>
      <MenuButton>
        Credits
      </MenuButton>
    </CardText>
  </Card>
);

export default MainMenu;
