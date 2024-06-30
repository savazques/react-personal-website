import React from "react";
import "./Projects.css"; 

function Projects () {
    return (
       <div id="projects" className="main-container">
          <h1> Featured Projects </h1>
          <div className="project-container">
              <div className="project-links">
                      <div className="project">
                          <div className="project-name">Travel App</div>
                          <div className="project-description">
                              <h4>A an app to make planning trips stress free and memorable!</h4>
                              <h4> This app will be customizable for user to choose how they want to remember their 
                                    trips from adding photos and developing an itinerary plan, and a cost breakdown
                                    of the trip </h4>
                              <h4>Duration: June 2024 - Present</h4>
                              <h4>GitHub: ...</h4>
                              <h4>Skills: ReactNative, Express, NodeJs</h4>
                          </div>
                      </div>
                  
                  <a href="sdf" className="project-link">
                      <div className="project">
                          <div className="project-name">Music Discovery Saver</div>
                          <div className="project-description">
                              <h4>Uses Spotify API to save the new Discover Weekly Playlist that Spotify generates for you </h4>
                              <h4>Duration: March 2024 - April 2024</h4>
                              <h4>GitHub: </h4>
                              <h4>Skills: Python, Flask </h4>
                          </div>
                      </div>
                  </a>
                  <a href="sdf" className="project-link">
                      <div className="project">
                          <div className="project-name">Personal Website</div>
                          <div className="project-description">
                              <h4>Check out this source coode to this website!</h4>
                              <h4>Key Feauture: Spotify Search and Add Component to my playlist
                              where people who access my page can add and contribute to my spotify playlist!</h4>
                              <h4>Start Date: April 2024 - June 2024</h4>
                              <h4>GitHub: ...  </h4>
                              <h4>Skills: ReactJs, NodeJs, Express </h4>
                          </div>
                      </div>
                  </a>
              </div>
          </div>
       </div>
    ); 
}

export default Projects;
