import React, {useState, useEffect} from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from 'spotify-web-api-node'
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi ({
    clientId: '75b965ea1982472c8166015c2a4c48b9',

})

export default function Dashboard ({code}) {
    const accessToken = useAuth(code)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSeachResults] = useState("");


    useEffect(() => {
        if (!accessToken) return 
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSeachResults([])
        if (!accessToken) return 

        spotifyApi.searchTracks(search).then(res => {
            console.log(res)
        })
    }, [search, accessToken])

    const handleSearch = (event) => {
        event.preventDefault();
        if (!searchTerm.trim()) return;
        console.log("Searching for:", searchTerm);
        // Here you can perform the search action using the search term and access token
        // For example, call the Spotify API to search for tracks, artists, etc.
    };
    return (
        <div>
            <form onSubmit={handleSearch}> 
                <input 
                 type='text'
                 placeholder="Search..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 <button type="submit">Search</button>
            </form>
        </div>
    )
}