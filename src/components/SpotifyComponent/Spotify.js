import React from "react";
import "./Spotify.css"
import Dashboard from "./SeachAndAdd/Search.js";
import { useState } from "react";


function Spotify() {
    const [playlistRefreshKey, setPlaylistRefreshKey] = useState(0);

    const handleTrackAdded = () => {
        setPlaylistRefreshKey(prevKey => prevKey + 1);
    };
    return (
        <div id="spotify" className="main-container-spotify">

            <div className="Title">
                    <h2> Contribute to my Spotify Playlist!</h2>
                    <p> Type in the Search Bar for a song, I am open to any genre of music! I want to expand my music taste! Once you find a song just press the add
                        button which will automatically add to my playlist! Thanks for contributing!!
                    </p>
            </div> 

                <div className="spotify-container">
                    <div className="search-result-container">
                        <div className="login-wrapper">
                            <Dashboard onTrackAdded={handleTrackAdded}/>
                        </div>
                        
                    </div>
                    <iframe 
                        key={playlistRefreshKey}
                        title="My Spotify Playlist"
                        src="https://open.spotify.com/embed/playlist/5PNVjDHvNl7Q5mUcCBnJ4n?utm_source=generator&theme=0" 
                        width="100%" 
                        height="600" 
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