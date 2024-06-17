import  NavBar  from "./components/NavBarComponent/Navbar.js";
import './App.css'
import React from "react";
import AboutMe from "./components/AboutMeComponent/AboutMe.js";
import Projects from './components/ProjectComponent/Projects.js';
import Journey from './components/JourneyComponent/Journey.js'; 
import Skills from "./components/SkillsComponent/Skills.js";
import Spotify from "./components/SpotifyComponent/Spotify.js";
import Dashboard from "./components/SpotifyComponent/Dashboard.js"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className = "App">
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <Journey/>
      <Skills/>
      <Spotify/>
      <Routes>
        <Route path = 'searchDashboard' element={< Dashboard/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
