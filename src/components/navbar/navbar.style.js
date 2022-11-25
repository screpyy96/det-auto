import styled from 'styled-components';
import { Link } from '@reach/router';
import { Accordion } from '@mui/material/';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AppBar, ListItem } from '@material-ui/core';

const AccordionWrapper = styled(Accordion)`
  && {
    /* background: transparent; */
    border: none;
    box-shadow: none;
    padding: 0;
    min-height: initial;
    margin-top: -12px;
  }
`;
const AccordionTitle = styled(AccordionSummary)`
  && {
    /* background: transparent; */
    border: none;
    min-height: initial;
    box-shadow: none;
    background: transparent;
    padding: 0;
    /* margin-top: -12px; */
  }
`;
const DetailsAccordion = styled(AccordionDetails)`
  && {
    /* background: transparent; */
    border: none;
    min-height: initial;
    padding: 0;
  }
`;

const NavWrapper = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 2rem;
  background-color: #fff;
  color: black;
  font-size: 20px;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  font-weight: 600;
  // z-index: 99;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  display: block;
  width: 90%;
  list-style-type: none;
  color: black;
`;
const AccordionStyle = styled.p`
  font-size: 20px;
`;

const BrandName = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  margin-left: 1rem;
  text-transform: uppercase;
`;

const NavigationMenu = styled.div`
  margin-left: auto;
  z-index: 1;
`;

const BurgerWrapper = styled.div`
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  color: black;
  display: none;

  &:hover {
    background-color: #b0b1b6;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const UlStyle = styled.ul`
padding: 0;
display: flex;
@media screen and (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 77px);
    background-color: white;
    border-top: 1px solid black; 
    z-index: 2; 
    display: ${({ isNavExpanded }) => (isNavExpanded ? 'block' : 'none')};
  `;

const LiStyle = styled.li`
  text-align: center;
  list-style-type: none;
  height: 50px;
  padding: 1rem;
  display: block;
  text-transform: uppercase;
`;

const ListItemStyle = styled(ListItem)`
  text-align: center;
`;

const AppBarStyled = styled(AppBar)`
  @media screen and (max-width: 768px) {
    position: fixed;
  }
`;

export {
  AppBarStyled,
  AccordionStyle,
  ListItemStyle,
  NavWrapper,
  LinkStyle,
  NavigationMenu,
  BrandName,
  UlStyle,
  BurgerWrapper,
  LiStyle,
  AccordionWrapper,
  AccordionTitle,
  DetailsAccordion
};
