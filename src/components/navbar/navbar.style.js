import styled from 'styled-components';
import { Link } from '@reach/router';

const NavWrapper = styled.nav`
  width: 100%;
  height: 15%;
  background-color: black;
  color: white;
`;

const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
`;

export { NavWrapper, LinkStyle };
