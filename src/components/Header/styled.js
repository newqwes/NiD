import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 10px 15%;
  justify-content: space-between;
  font-size: 1.2em;

  Button {
    margin-left: 20px;
  }
`;

export const HeaderLogo = styled.div``;

export const HeaderLogin = styled(NavLink)`
  &:hover {
    cursor: pointer;
  }
`;
