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

let accessToken = '';

spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('Access Token:', data.body['access_token']);
      console.log('Expires in:', data.body['expires_in']);
  
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong', err);
    }
  );
  

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
