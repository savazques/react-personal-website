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
                              <h4>Skills: ReactNative, Express, NodeJs, PostgreSQL, RESTFUL API's  </h4>
                          </div>
                      </div>
                  
                      <div className="project" style={{ backgroundImage: `url(${personalWebsiteIcon})` }}>
                          <div className="project-name">Music Match and Classification</div>
                          <div className="project-description">
                              <h4>Key Features: Using a Python framework and spotipy to properly handle API requests. A back end that will use Kmeans clusterting to classify my liked songs on Spotify. 
                                    A front-end will allow viewers to Search and Add to a playlist where upon adding will match how similar it is to my music taste. 
                              </h4>
                              <h4>Start Date: June 2024 - Present</h4>
                              <h4>GitHub: ...</h4>
                              <h4>Skills: ReactJs, NodeJs, Express, Python, Machine Learning, Spotify API</h4>
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
              </div>
          </div>
       </div>
    ); 
}

export default Projects;
