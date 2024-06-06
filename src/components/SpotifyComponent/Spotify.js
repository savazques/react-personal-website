import React from "react";
import "./Spotify.css"


function Spotify() {
    return (
        <div className="main-container-spotify">


        <div className="Title">
                <h2> Add to My Spotify Playlist!</h2>
        </div>


            <div className="spotify-container">
                <iframe 
                    title="My Spotify Playlist"
                    src="https://open.spotify.com/embed/playlist/5PNVjDHvNl7Q5mUcCBnJ4n?utm_source=generator&theme=0" 
                    width="100%" 
                    height="400" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
           </div>


        </div> 


        
    )
}

export default Spotify; 