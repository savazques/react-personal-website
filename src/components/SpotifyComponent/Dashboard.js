import React, {useState, useEffect} from "react";
import useAuth from "./useAuth";
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi ({
    clientId: '75b965ea1982472c8166015c2a4c48b9',

})

export default function Dashboard ({code}) {
    const accessToken = useAuth(code)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSeachResults] = useState("");

    console.log(searchResults)


    useEffect(() => {
        if (!accessToken) return 
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!searchTerm) return setSeachResults([]);
        if (!accessToken) return;
    
        let cancel = false
        spotifyApi.searchTracks(searchTerm).then(res => {
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
        </div>
    )
}