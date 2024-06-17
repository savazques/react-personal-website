import React, {useState, useEffect} from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResults from "./TrackSearchResults";

const spotifyApi = new SpotifyWebApi ({
    clientId: '75b965ea1982472c8166015c2a4c48b9',

})

export default function Dashboard ({code}) {
    const accessToken = useAuth(code)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSeachResults] = useState([]);


    useEffect(() => {
        if (!accessToken) return 
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!searchTerm) return setSeachResults([]);
        if (!accessToken) return;
    
        let cancel = false
        spotifyApi.searchTracks(searchTerm).then(res => {
            console.log(res)
            if (cancel) return
            setSeachResults(res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image;
                    return smallest;
                }, track.album.images[0]);

                return {
                    artist: track.artists[0].name,
                    title: track.name, 
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                };
            }));
        });

        return () => cancel = true
    }, [searchTerm, accessToken]);
    
    const addtoPlaylist = (trackUri) => {
        const playlistId = "5PNVjDHvNl7Q5mUcCBnJ4n"; 
        spotifyApi.addTracksToPlaylist(playlistId, [trackUri]).then(response => {
            console.log("track added to playlist,", response)
            window.location.reload()
        })
        .catch( err => {
            console.log("error adding track to playlist", err)
        })
    }
   
    return (
        <div>
            <form> 
                <input 
                 type='text'
                 placeholder="Search..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 />
            </form>
            {searchResults.map((track) => (
                <div key={track.uri}>
                <TrackSearchResults track={track} />
                <button type="button" onClick={() => addtoPlaylist(track.uri)}>
                    +
                </button>
                </div>
            ))}

        </div> 
    )
}