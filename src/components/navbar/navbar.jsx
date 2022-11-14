import React from 'react';
import {
  LinkStyle,
  NavWrapper,
  NavigationMenu,
  BrandName,
  UlStyle,
  BurgerWrapper,
  LiStyle,
  DropDown,
  DropLink,
  MuieLi
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
      <BrandName href='/' className='brand-name'>
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
          <UlStyle setIsNavExpanded={setIsNavExpanded}>
            <LiStyle>
              <LinkStyle to='/'>Home</LinkStyle>
            </LiStyle>
            <LiStyle>
              <LinkStyle to='/despre-noi'>Despre</LinkStyle>
            </LiStyle>
            <LiStyle>
            <MuieLi>
                  <LinkStyle to="servicii">Servicii</LinkStyle>
                    <DropDown>
                      <MuieLi> <DropLink to="/valorifica">Valorifica</DropLink></MuieLi>
                      <MuieLi><DropLink to="/protejeaza">Protejeaza</DropLink></MuieLi>
                      <MuieLi><DropLink to="/mentinere">Mentinere</DropLink></MuieLi>
                      <MuieLi><DropLink to="/personalizare">Personalizare</DropLink></MuieLi>
                    </DropDown>
                </MuieLi>
            </LiStyle>
            <LiStyle>
              <LinkStyle to='/galerie'>Galerie</LinkStyle>
            </LiStyle>
            <LiStyle>
              <LinkStyle to='/contact'>Contact</LinkStyle>
            </LiStyle>
          </UlStyle>
        </NavigationMenu>
      ) : (
        <>
          <NavigationMenu onClick={closeSideBar}>
            <UlStyle>
              <LiStyle>
                <LinkStyle to='/'>Home</LinkStyle>
              </LiStyle>
              <LiStyle>
                <LinkStyle to='/despre-noi'>Despre</LinkStyle>
              </LiStyle>
              <LiStyle>
                <MuieLi>
                  <LinkStyle to="servicii">Servicii</LinkStyle>
                    <DropDown>
                        <MuieLi> 
                          <DropLink to="/valorifica">Valorifica</DropLink>
                          </MuieLi>
                        <MuieLi>
                          <DropLink to="/protejeaza">Protejeaza</DropLink>
                          </MuieLi>
                        <MuieLi>
                          <DropLink to="/mentinere">Mentinere</DropLink>
                          </MuieLi>
                        <MuieLi>
                          <DropLink to="/personalizare">Personalizare</DropLink>
                         </MuieLi>
                    </DropDown>
                </MuieLi>
              </LiStyle>
              <LiStyle>
                <LinkStyle to='/galerie'>Galerie</LinkStyle>
              </LiStyle>
              <LiStyle>
                <LinkStyle to='/contact'>Contact</LinkStyle>
              </LiStyle>
            </UlStyle>
          </NavigationMenu>
        </>
      )}
    </NavWrapper>
  );
};

export default Navbar;
