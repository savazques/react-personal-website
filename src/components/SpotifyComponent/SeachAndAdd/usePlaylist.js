import axios from 'axios';

export default function usePlaylist(accessToken) {
    const addToPlaylist = async (trackUri) => {
        const playlistId = "5PNVjDHvNl7Q5mUcCBnJ4n";
        try {
            await axios.post('http://localhost:3001/add-track', { trackUri, playlistId }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log('Track added to playlist successfully!');
        } catch (error) {
            console.error('Error adding track to playlist:', error);
        }
    };

    return { addToPlaylist };
}

