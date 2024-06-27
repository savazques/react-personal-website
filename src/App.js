import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBarComponent/Navbar.js";
import './App.css';
import AboutMe from "./components/AboutMeComponent/AboutMe.js";
import Projects from './components/ProjectComponent/Projects.js';
import Journey from './components/JourneyComponent/Journey.js'; 
import Skills from "./components/SkillsComponent/Skills.js";
import Spotify from "./components/SpotifyComponent/Spotify.js";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(getBackgroundColor());

  useEffect(() => {
    const handleScroll = () => {
      setBackgroundColor(getBackgroundColor());
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to calculate current background color based on scroll position
  function getBackgroundColor() {
    const body = document.body;
    const top = window.scrollY;
    const height = body.scrollHeight - window.innerHeight;

    // Calculate the scroll percentage
    const scrollPercentage = top / height;

    // Define your gradient colors
    const gradientColors = [
      "#100819",
      "#29153D",
      "#471737",
      "#100819"
    ];

    // Calculate the index of the gradient color array
    const index = Math.min(Math.floor(scrollPercentage * (gradientColors.length - 1)), gradientColors.length - 1);

    // Return the current background color based on the scroll position
    return gradientColors[index];
  }

  return (
    <div className="App">
      <NavBar backgroundColor={backgroundColor} />
      <AboutMe />
      <Projects />
      <Journey />
      <Skills />
      <Spotify />
    </div>
  );
}

export default App;

