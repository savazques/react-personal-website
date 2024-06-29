import React from "react";
import "./Projects.css"; 

function Projects () {
    return (
       <div id="projects" className="main-container">
          <h1> Featured Projects </h1>
          <div className="project-container">
              <div className="project-links">
                  <a href="dsfds" className="project-link">
                      <div className="project">
                          <div className="project-name">Travel App</div>
                          <div className="project-description">
                              A an app to make planning trips stress free and memorable!
                              <br />
                              Some Key Features I plan to implement:
                              * An global map for locations of trips
                              * Cost Breakdown of Trip
                              * Photo Gallery
                              * Itinerary Creation
                              <br/>
                              Start Date: June 2024 - Present
                              <br/>
                              GitHub: ...
                              <br/>
                              Skills: ReactNative, Express, NodeJs
                          </div>
                      </div>
                  </a>
                  <a href="sdf" className="project-link">
                      <div className="project">
                          <div className="project-name">Music Discovery Saver</div>
                          <div className="project-description">
                              Uses Spotify API to save the new Discover Weekly Playlist 
                              that Spotify generates for you
                              <br />
                              Start Date: March 2024 - April 2024
                              <br/>
                              Skills: Python
                          </div>
                      </div>
                  </a>
                  <a href="sdf" className="project-link">
                      <div className="project">
                          <div className="project-name">Personal Website</div>
                          <div className="project-description">
                              CheckOut this source coode to this website!
                              <br />
                              Key Feauture: Spotify Search and Add Component to my playlist
                              where people who access my page can add and contribute to my spotify playlist!
                              <br/>
                              Start Date: April 2024 - June 2024
                              <br/>
                              Skills: ReactJs, NodeJs, Express 
                          </div>
                      </div>
                  </a>
              </div>
          </div>
       </div>
    ); 
}

export default Projects;
