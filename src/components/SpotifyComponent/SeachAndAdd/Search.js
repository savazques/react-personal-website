import React, { useState, useEffect } from 'react';
import './Search.css';
import TrackSearchResults from './TrackSearchResults';
import useAuth from './useAuth.js';
import usePlaylist from './usePlaylist.js';
import Login from './Login.js'


const code = new URLSearchParams(window.location.search).get('code');

export default function Dashboard({onTrackAdded}) {

    const accessToken = useAuth(code);
    const { addToPlaylist } = usePlaylist(accessToken);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const fetchSearchResults = async (query) => {
        try {
            const response = await fetch(`http://localhost:3002/search?query=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setSearchResults(data.tracks.items.map(track => ({
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: track.album.images.length > 0 ? track.album.images[0].url : ''
            })));
        } catch (error) {
            console.error('Error fetching search results:', error);
            setError('Failed to fetch search results');
        }
    };

    useEffect(() => {
        if (!searchTerm) {
            setSearchResults([]);
            return;
        }
        fetchSearchResults(searchTerm);
    }, [searchTerm]);

    if (!code) {
        return <Login />;
    }

    if (!accessToken) {
        return <div>Loading...</div>;
    }

    const handleAddToPlaylist = async (trackUri) => {
        await addToPlaylist(trackUri);
        if (onTrackAdded) {
            onTrackAdded(); // Notify parent component to refresh the playlist
        }
    };
    

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
                <div key={track.uri} className="track-container">
                <TrackSearchResults track={track} />
                <button type="button" onClick={() => handleAddToPlaylist(track.uri)}>
                    Add 
                </button>
                </div>
            ))}

        </div> 
    )
}