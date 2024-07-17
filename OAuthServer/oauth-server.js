const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
 


const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
  redirectUri,
});

let accessToken = process.env.SPOTIFY_ACCESS_TOKEN;
let refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

if (accessToken) spotifyApi.setAccessToken(accessToken);
if (refreshToken) spotifyApi.setRefreshToken(refreshToken);

const refreshAccessToken = async () => {
  try {
    const data = await spotifyApi.refreshAccessToken();
    accessToken = data.body.access_token;
    spotifyApi.setAccessToken(accessToken);
    console.log('Access token refreshed');
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw new Error('Failed to refresh access token');
  }
};

setInterval(refreshAccessToken, 30 * 60 * 1000);

app.post('/refresh', async (req, res) => {
  try {
    await refreshAccessToken();
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: 'Failed to refresh access token' });
  }
});

app.post('/login', async (req, res) => {
  const code = req.body.code;

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    accessToken = data.body.access_token;
    refreshToken = data.body.refresh_token;
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.setRefreshToken(refreshToken);

    res.json({
      accessToken,
      refreshToken,
      expiresIn: data.body.expires_in,
    });
  } catch (err) {
    console.error('Authorization code grant error:', err);
    res.status(400).json({
      error: err.message,
      details: err.body,
    });
  }
});

app.get('/access-token', (req, res) => {
  res.json({ accessToken });
});

app.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await spotifyApi.searchTracks(query);
    res.json(response.body);
  } catch (error) {
    console.error('Error searching tracks:', error);
    res.status(500).json({ error: 'Failed to search tracks' });
  }
});

module.exports.handler = serverless(app);
