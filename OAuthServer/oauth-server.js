const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(bodyParser.json());

const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000/',
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

let accessToken = process.env.SPOTIFY_ACCESS_TOKEN;
let refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;


if (accessToken) spotifyApi.setAccessToken(accessToken);
if (refreshToken) spotifyApi.setRefreshToken(refreshToken);

const refreshAccessToken = () => {
    spotifyApi.refreshAccessToken()
        .then(data => {
            accessToken = data.body.access_token;
            spotifyApi.setAccessToken(accessToken);
            console.log('Access token refreshed');
        })
        .catch(err => {
            console.error('Error refreshing access token:', err);
        });
};

setInterval(refreshAccessToken, 30 * 60 * 1000);


app.post('/refresh', (req, res) => {
    refreshAccessToken();
    res.json({ accessToken });
});

app.post('/login', (req, res) => {
    const code = req.body.code;

    spotifyApi.authorizationCodeGrant(code)
        .then(data => {
            accessToken = data.body.access_token;
            refreshToken = data.body.refresh_token;
            spotifyApi.setAccessToken(accessToken);
            spotifyApi.setRefreshToken(refreshToken);

            res.json({
                accessToken: accessToken,
                refreshToken: refreshToken,
                expiresIn: data.body.expires_in,
            });
        })
        .catch(err => {
            console.log('Authorization code grant error:', err);
            res.status(400).json({
                error: err.message,
                details: err.body,
            });
        });
});

app.post('/add-track', (req, res) => {
    const { trackUri, playlistId } = req.body;

    spotifyApi.setAccessToken(accessToken);

    spotifyApi.addTracksToPlaylist(playlistId, [trackUri])
        .then(data => {
            console.log('Track added:', data.body);
            res.sendStatus(200);
        })
        .catch(err => {
            console.error('Error adding track:', err);
            res.status(400).json({
                error: err.message,
                details: err.body,
            });
        });
});

app.get('/access-token', (req, res) => {
    res.json({ accessToken });
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
