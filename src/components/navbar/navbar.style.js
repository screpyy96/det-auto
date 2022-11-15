import styled from 'styled-components';
import { Link } from '@reach/router';

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
  width: 100%;
  list-style-type: none;
  color: black;
  width: 100%;

  &:hover {
    border-bottom: 2px solid black; 
    color: red;
  }
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
  z-index: 99;
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



// DropDown

const DropDown = styled.ul `
visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
  z-index: 999;

  &:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`


const MuieLi = styled.li`
display: block;
transition-duration: 0.5s;
clear: both;
width: 100%;

&:hover {
  cursor: pointer;
}
`;
const DropLink = styled(Link)` 
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`
// .dropdownn-content {
//   display: none;
//   position: absolute;
//   z-index: 1;
// }


// .dropdownn:hover .dropdownn-content {
//   display: block;
// }


export {
  DropLink,
  DropDown,
  NavWrapper,
  LinkStyle,
  NavigationMenu,
  BrandName,
  UlStyle,
  BurgerWrapper,
  LiStyle,
  MuieLi,
  // DropDownStyle,
  // DropDownContent
};
