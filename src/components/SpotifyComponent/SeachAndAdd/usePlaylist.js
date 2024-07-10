import SpotifyWebApi from 'spotify-web-api-node';


export default function usePlaylist(accessToken) {
    const spotifyApi = new SpotifyWebApi()
    spotifyApi.setAccessToken(accessToken)

    const addToPlaylist = async (trackUri) => {
        const playlistId = "5PNVjDHvNl7Q5mUcCBnJ4n";
        try {
            await spotifyApi.addTracksToPlaylist(playlistId, [trackUri])
            console.log('Track added to playlist successfully!');
        } catch (error) {
            console.error('Error adding track to playlist:', error);
        }
    };

    return { addToPlaylist };
}

