import React from "react";
import "./Projects.css"; 

function Projects () {
    return (
       <div className="main-container">
          <h1> Featured Projects </h1>
          <div className="project-container">
              <div className="project-links">
                  <a href="dsfds" className="project-link">
                      <div className="project">
                          <div className="project-name">Travel App</div>
                          <div className="project-description">
                              Learn about different places!
                              <br />
                              Plan your next adventure with ease.
                          </div>
                      </div>
                  </a>
                  <a href="sdf" className="project-link">
                      <div className="project">
                          <div className="project-name">Music Discovery Saver</div>
                          <div className="project-description">
                              Discover new music!
                              <br />
                              Save your favorite tracks and playlists.
                          </div>
                      </div>
                  </a>
                  <a href="sdf" className="project-link">
                      <div className="project">
                          <div className="project-name">Personal Website</div>
                          <div className="project-description">
                              Showcase your portfolio!
                              <br />
                              Highlight your skills and achievements.
                          </div>
                      </div>
                  </a>
              </div>
          </div>
       </div>
    ); 
}

export default Projects;
