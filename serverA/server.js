const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: '75b965ea1982472c8166015c2a4c48b9', 
        clientSecret: '755ea9059ae44d4bb2cdfe43d8b89df7',
    });

    spotifyApi.setRefreshToken(refreshToken);

    spotifyApi.refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            });
        })
        .catch(err => {
            console.error('Error refreshing access token:', err);
            res.sendStatus(400);
        });
});

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/',
        clientId: '75b965ea1982472c8166015c2a4c48b9', 
        clientSecret: '755ea9059ae44d4bb2cdfe43d8b89df7',
    });

    spotifyApi.authorizationCodeGrant(code)
        .then(data => {
            console.log("Authorization code grant success:", data.body);
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
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
    const accessToken = req.headers.authorization.split(' ')[1];

    const spotifyApi = new SpotifyWebApi();
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

app.listen(3001);
