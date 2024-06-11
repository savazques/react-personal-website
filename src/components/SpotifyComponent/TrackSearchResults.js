import React from "react";
import "./TrackSearchResults.css"

export default function TrackSearchResults({track}) {
    return (
        <div className="track-main-container">
            <img src={track.albumUrl} style= {{ height: '65px', width: '65px'}}></img>
            <div className="search-description">
                <p> {track.artist} </p>
                <p> {track.title}</p> 
            </div>
            <div className="add-button">
                +
            </div>
        </div>
    )
}