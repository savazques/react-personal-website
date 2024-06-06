import React, { useState, useEffect } from "react";
import './Navbar.css';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false); 

  useEffect (() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); 
      } else {
        setIsSticky(false);
      }
    }; 
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav className="nav container">
        <h3 className="NameTitle">Sarah Alexa Vasquez</h3>
        <div className="menu">
          <ul className="navOptions">
            <li className="navItem">
              <a href="#/">About Me</a>
            </li>
            <li className="navItem">
              <a href="#/">Projects</a>
            </li>
            <li className="navItem">
              <a href="#/">My Journey</a>
            </li>
            <li className="navItem">
              <a href="#/">LOGO</a>
            </li>
          </ul> 
        </div>
      </nav>
      <div className="bar"></div>
    </header>
  );
}

export default Navbar;
