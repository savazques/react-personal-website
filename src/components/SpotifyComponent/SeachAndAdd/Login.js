import { useEffect } from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=75b965ea1982472c8166015c2a4c48b9&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-modify-playback-state%20playlist-modify-public%20playlist-modify-private";


function Login() {
  useEffect(() => {
      window.location.href = AUTH_URL;
  },[])

  return null;
}

export default Login;
