const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const clientId = '75b965ea1982472c8166015c2a4c48b9'; // Replace with your actual client ID
const clientSecret = '755ea9059ae44d4bb2cdfe43d8b89df7'; // Replace with your actual client secret

const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

const refreshAccessToken = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    console.log('Access Token refreshed:', data.body['access_token']);
    console.log('Expires in:', data.body['expires_in']);
    spotifyApi.setAccessToken(data.body['access_token']);
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw new Error('Failed to refresh access token');
  }
};

spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('Access Token:', data.body['access_token']);
      console.log('Expires in:', data.body['expires_in']);
  
      spotifyApi.setAccessToken(data.body['access_token']);
      setInterval(refreshAccessToken, (data.body['expires_in'] - 300) * 1000);
    },
    function(err) {
      console.log('Something went wrong', err);
    }
  );


  
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


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
