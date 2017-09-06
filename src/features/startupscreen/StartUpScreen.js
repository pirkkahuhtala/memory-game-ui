import React from 'react';
import styled from 'styled-components';

import MainMenu from './MainMenu';

const MainMenuContainer = styled.div`width: 400px;`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 400px);
  justify-content: center;
  align-items: center;
`;

const StartUpScreen = () => (
  <Container>
    <MainMenuContainer>
      <MainMenu />
    </MainMenuContainer>
  </Container>
);

export default StartUpScreen;
