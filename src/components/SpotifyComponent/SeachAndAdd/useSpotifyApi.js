import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useSpotifyApi() {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        // Fetch the access token from the backend
        const fetchAccessToken = async () => {
            try {
                const response = await axios.get('http://localhost:3001/access-token');
                setAccessToken(response.data.accessToken);
            } catch (err) {
                console.error('Error fetching access token:', err);
            }
        };

        fetchAccessToken();
    }, []);

    return accessToken;
}
