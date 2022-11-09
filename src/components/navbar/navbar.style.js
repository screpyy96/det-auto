import styled from 'styled-components';
import { Link } from '@reach/router';

const NavWrapper = styled.nav`
height: 60px;
width: 100%;
display: flex;
align-items: center;
position: relative;
padding: 0.5rem 0rem;
background-color: #fff;
color: black;
box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);


`;

const LinkStyle = styled(Link)`
text-decoration: none;
display: block;
width: 100%;
list-style-type: none;
color: black;
width: 100%;
padding: 1.5rem 0;

&:hover {
  background-color: #eee;
}
`;

const BrandName = styled.a`

text-decoration: none;
color: black;
font-size: 1.3rem;
margin-left: 1rem;
` 

const NavigationMenu = styled.div`
margin-left: auto;
// display: block;
`

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
  
  &&:hover {
    background-color: #b0b1b6;
  }

  @media screen and (max-width: 768px) {
      display: block;
}
  `

const UlStyle = styled.ul`
padding: 0;



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
    
  `
  
const LiStyle = styled.li`
  
text-align: center;
margin: 0;
list-style-type: none;
margin: 0 1rem;
display: block;
`
export { NavWrapper, LinkStyle, NavigationMenu, BrandName, UlStyle, BurgerWrapper, LiStyle};

