import React from "react";
import "./Projects.css"; 
import travelAppIcon from './plane-alt.png';
import musicDiscoverySaverIcon from './music-alt.png';
import personalWebsiteIcon from './user.png';

function Projects () {
    return (
       <div id="projects" className="main-container">
          <h1> Featured Projects </h1>
          <div className="project-container">
              <div className="project-links">
                      <div className="project" style={{ backgroundImage: `url(${travelAppIcon})` }}>
                          <div className="project-name">Travel App</div>
                          <div className="project-description">
                              <h4>An app to make planning trips stress-free and memorable!</h4>
                              <h4>This app will be customizable for users to choose how they want to remember their trips, from adding photos and developing an itinerary plan, to a cost breakdown of the trip.</h4>
                              <h4>Duration: June 2024 - Present</h4>
                              <h4>GitHub: ...</h4>
                              <h4>Skills: ReactNative, Express, NodeJs</h4>
                          </div>
                      </div>
                  
                      <div className="project" style={{ backgroundImage: `url(${musicDiscoverySaverIcon})` }}>
                          <div className="project-name">Music Discovery Saver</div>
                          <div className="project-description">
                              <h4>Uses Spotify API to save the new Discover Weekly Playlist that Spotify generates for you.</h4>
                              <h4>Duration: March 2024 - April 2024</h4>
                              <h4>GitHub: </h4>
                              <h4>Skills: Python, Flask</h4>
                          </div>
                      </div>
                      <div className="project" style={{ backgroundImage: `url(${personalWebsiteIcon})` }}>
                          <div className="project-name">Personal Website</div>
                          <div className="project-description">
                              <h4>Check out the source code for this website!</h4>
                              <h4>Key Feature: Spotify Search and Add Component to my playlist where people who access my page can add and contribute to my Spotify playlist!</h4>
                              <h4>Start Date: April 2024 - June 2024</h4>
                              <h4>GitHub: ...</h4>
                              <h4>Skills: ReactJs, NodeJs, Express</h4>
                          </div>
                      </div>
              </div>
          </div>
       </div>
    ); 
}

export default Projects;
