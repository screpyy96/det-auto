import React from 'react';
import { LinkStyle, NavWrapper, NavigationMenu, BrandName, UlStyle, BurgerWrapper, LiStyle } from './navbar.style';

const Navbar = ({isNavExpanded, setIsNavExpanded}) => {
  
  const handleExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
    console.log(isNavExpanded)
  }

  const closeSideBar = () => {
    setIsNavExpanded(false)
  }
  return (
    <NavWrapper>
      <BrandName href="/" className="brand-name">
        Detailing Auto D&S
      </BrandName>
      <BurgerWrapper onClick={() => handleExpanded()}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
       <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>s
      </BurgerWrapper>
      {isNavExpanded ? (
      <NavigationMenu onClick={closeSideBar}>
          <UlStyle setIsNavExpanded={setIsNavExpanded} >
            <LiStyle>
              <LinkStyle to='/'>Home</LinkStyle>
            </LiStyle>
            <LiStyle>
              <LinkStyle to='/despre-noi'>Despre</LinkStyle>
            </LiStyle>
            <LiStyle>
              <LinkStyle to='/galerie'>Galerie</LinkStyle>
            </LiStyle>
            <LiStyle>
              <LinkStyle to='/pachete'>Pachete</LinkStyle>
            </LiStyle>
            <LiStyle>
              <LinkStyle to='/contact'>Contact</LinkStyle>
            </LiStyle>
          </UlStyle>
        
      </NavigationMenu>
      ):(<></>)}
    </NavWrapper>
  );
};

export default Navbar;
