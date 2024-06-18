import Dashboard from './Dashboard.js';
import './Login.css'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=75b965ea1982472c8166015c2a4c48b9&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-modify-playback-state%20playlist-modify-public%20playlist-modify-private";

const code = new URLSearchParams(window.location.search).get('code');

function Login() {
  const handleAuthClick = () => {
    window.location.href = AUTH_URL;
  };

  const validCode = !!code;

  return (
    <div>
      {validCode ? <Dashboard code={code} /> : <button onClick={handleAuthClick} className='AuthButton'>ADD TO MY SPOTIFY PLAYLIST</button>}
    </div>
  );
}

export default Login;
