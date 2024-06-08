import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=75b965ea1982472c8166015c2a4c48b9&response_type=code&redirect_uri=http://localhost:3000/I&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-modify-playback-state"

function Login() {
    const handleAuthClick = () => {
        window.location.href = AUTH_URL;
      };
  return (
    <button onClick={handleAuthClick}>
    Authorize with Spotify
    </button>
);
  
}

export default Login; 