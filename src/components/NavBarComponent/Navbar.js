import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
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
              <Link to="aboutMe">
                <a href=" ">About Me</a>
              </Link>
            </li>
            <li className="navItem">
              <Link to="projects" >
                <a href=" ">Projects</a>
              </Link>
            </li>
            <li className="navItem">
              <Link to="myJourney">
                <a href=" ">My Journey</a>
              </Link>
            </li>
            <li className="navItem">
              <Link to="skills">
                <a href=" ">Skills</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

