import React from 'react';
import {AppBar} from 'material-ui';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
    background-color: #303030 !important;
`;

const Header = () => <StyledAppBar showMenuIconButton={false} title="Memory Game" />;

export default Header;
