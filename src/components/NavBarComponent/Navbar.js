import React, { useState, useEffect } from "react";
import './Navbar.css';

function Navbar({ backgroundColor }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
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
  
    <header className={`header ${isSticky ? 'sticky' : ''}`} style={{ backgroundColor }}>
      <nav className="nav-container">
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
              <a href="#/">
                Spotify
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </header>

  );
}

export default Navbar;
