import React from 'react';
import { Link } from '@reach/router';
import { NavWrapper } from './navbar.style';

const Navbar = () => {
  return (
    <NavWrapper>
      <Link to='/'>Home</Link>
      <Link to='/despre-noi'>Despre Noi</Link>
    </NavWrapper>
  );
};

export default Navbar;
