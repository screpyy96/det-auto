import { Link } from '@reach/router';
import React from 'react';
import './navbar.css'
const Navbar = ({isNavExpanded, setIsNavExpanded}) => {
  

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Detailing Auto Suceava
      </a>
      <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <button className='nav-btn' >
                <span></span>
  <span></span>
  <span></span>
  <span></span> 
              <Link className='link' to="/">Home</Link>
            </button>
          </li>
          <li>
            <button className='nav-btn' >
                <span></span>
  <span></span>
  <span></span>
  <span></span> 
              <Link className='link' to="/despre-noi">Despre</Link>
            </button>
          </li>
          <li>
            <button className='nav-btn' >
                <span></span>
  <span></span>
  <span></span>
  <span></span> 
              <Link className='link' to="/pachete">Pachete</Link>
            </button>
          </li>
          <li>
            <button className='nav-btn' >
                <span></span>
  <span></span>
  <span></span>
  <span></span> 
              <Link className='link' to="/galerie">Galerie</Link>
            </button>
          </li>
          <li>
            <button className='nav-btn' >
                <span></span>
  <span></span>
  <span></span>
  <span></span> 
              <Link className='link' to="/contact">Contact</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
