import React, { useState } from 'react';
import {
  NavWrapper,
  NavigationMenu,
  BrandName,
  UlStyle,
  BurgerWrapper,
  LiStyle,
  LinkStyle,
  AccordionWrapper,
  AccordionTitle,
  DetailsAccordion

} from './navbar.style';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = ({ isNavExpanded, setIsNavExpanded }) => {
  const [accordion, setAccordion] = useState(false);



  const handleExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
    console.log(isNavExpanded);
  };

  const closeSideBar = () => {
    setIsNavExpanded(false);
  };
  const handleAccordion = () => {
    setAccordion(!accordion);
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
      
 
        <NavigationMenu >
          <UlStyle isNavExpanded={isNavExpanded} >
          <LiStyle onClick={closeSideBar} >
            <LinkStyle to="/">Acasa</LinkStyle>
          </LiStyle>
          <LiStyle >
            <LinkStyle onClick={closeSideBar} to="/despre">Despre</LinkStyle>
          </LiStyle>
            <LiStyle>
              <AccordionWrapper expanded={accordion} onClick={() => handleAccordion()}>
                  <AccordionTitle
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                   <>Servicii</>
                  </AccordionTitle  >
                  <DetailsAccordion >
                <LiStyle >
              <LinkStyle onClick={closeSideBar} to="/valorifica">valorifica</LinkStyle>
            </LiStyle>
                <LiStyle>
              <LinkStyle onClick={closeSideBar} to="/protejare">protejare</LinkStyle>
            </LiStyle>
                <LiStyle>
              <LinkStyle onClick={closeSideBar} to="/mentinere">mentinere</LinkStyle>
            </LiStyle>
                <LiStyle>
              <LinkStyle onClick={closeSideBar} to="/personalizeaza">personalizeaza</LinkStyle>
            </LiStyle>

                  </DetailsAccordion>
          </AccordionWrapper>
          </LiStyle>
                <LiStyle>
              <LinkStyle onClick={closeSideBar} to="/galerie">galerie</LinkStyle>
            </LiStyle>
            <LiStyle>
              <LinkStyle onClick={closeSideBar} to="/contact">Contact</LinkStyle>
            </LiStyle>
              </UlStyle>
            </NavigationMenu>
        
      
    </NavWrapper>
  );
};

export default Navbar;
