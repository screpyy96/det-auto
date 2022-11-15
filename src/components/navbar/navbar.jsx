import { Link } from '@reach/router';
import React from 'react';
import {
  NavWrapper,
  NavigationMenu,
  BrandName,
  UlStyle,
  BurgerWrapper,
  LiStyle,
  DropDownStyle,
  DropDownContent,
  LinkStyle

} from './navbar.style';


const Navbar = ({ isNavExpanded, setIsNavExpanded }) => {
 
  const handleExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
    console.log(isNavExpanded);
  };

  const closeSideBar = () => {
    setIsNavExpanded(false);
  };

  return (
    <NavWrapper>
      <BrandName>
        Detailing Auto D&S
      </BrandName>
      <BurgerWrapper onClick={() => handleExpanded()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </BurgerWrapper>
      
        {isNavExpanded ? (
        <NavigationMenu onClick={closeSideBar}>
          <UlStyle isNavExpanded={isNavExpanded}>
          <LiStyle >
            <LinkStyle to="/">Acasa</LinkStyle>
          </LiStyle>
          <LiStyle >
          <LinkStyle to="/despre">Despre</LinkStyle>
          </LiStyle>
              <DropDownStyle>
                <LiStyle>Servicii</LiStyle>
                <DropDownContent>
                <LiStyle>
                  <LinkStyle to="/">Acasa</LinkStyle>
                </LiStyle>
              <LiStyle>
                <LinkStyle to="/despre">Despre</LinkStyle>
              </LiStyle>
                </DropDownContent>
              </DropDownStyle>
          <LiStyle>
            <LinkStyle to="/galerie">galerie</LinkStyle>
          </LiStyle>
          <LiStyle>
            <LinkStyle to="/contact">Contact</LinkStyle>
          </LiStyle>
            </UlStyle>
          </NavigationMenu>):(<>
            <NavigationMenu onClick={closeSideBar} >
          <UlStyle  >
          <LiStyle >
            <LinkStyle to="/">Acasa</LinkStyle>
          </LiStyle>
          <LiStyle >
          <LinkStyle to="/despre">Despre</LinkStyle>
          </LiStyle>
              <DropDownStyle>
                <LiStyle>Servicii</LiStyle>
                <DropDownContent>
                <LiStyle>
                  <LinkStyle to="/">Acasa</LinkStyle>
                </LiStyle>
              <LiStyle>
                <LinkStyle to="/despre">Despre</LinkStyle>
              </LiStyle>
                </DropDownContent>
              </DropDownStyle>
          <LiStyle>
            <LinkStyle to="/galerie">galerie</LinkStyle>
          </LiStyle>
          <LiStyle>
            <LinkStyle to="/contact">Contact</LinkStyle>
          </LiStyle>
            </UlStyle>
          </NavigationMenu></>)}
        
      
    </NavWrapper>
  );
};

export default Navbar;
