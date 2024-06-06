import  NavBar  from "./components/NavBarComponent/Navbar.js";
import './App.css'
import React from "react";
import AboutMe from "./components/AboutMeComponent/AboutMe.js";
import Projects from './components/ProjectComponent/Projects.js';
import Journey from './components/JourneyComponent/Journey.js'; 
import Skills from "./components/SkillsComponent/Skills.js";
import Spotify from "./components/SpotifyComponent/Spotify.js";

function App() {
  return (
    <div className = "App">
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <Journey/>
      <Skills/>
      <Spotify/>
    </div>
    
  );
}

export default App;
