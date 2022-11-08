import React from 'react';
import { LinkStyle, NavWrapper } from './navbar.style';

const Navbar = () => {
  return (
    <NavWrapper>
      <LinkStyle to='/'>Home</LinkStyle>
      <LinkStyle to='/despre-noi'>Despre Noi</LinkStyle>
      <LinkStyle to='/galerie'>Galerie</LinkStyle>
      <LinkStyle to='/pachete'>Pachete</LinkStyle>
      <LinkStyle to='/contact'>Contact</LinkStyle>
    </NavWrapper>
  );
};

export default Navbar;
