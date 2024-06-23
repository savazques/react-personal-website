const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());



var  clientId = '75b965ea1982472c8166015c2a4c48b9',
     clientSecret = '755ea9059ae44d4bb2cdfe43d8b89df7';

var spotifyApi = new SpotifyWebApi({
    cliendId: clientId,
    clientSecret: clientSecret
});

spotifyApi.clientCredentialsGrant().then (
    function (data) {
        console.log (data.body['expires_in'])
        console.log('Access Token',data.body['access_token'])

        spotifyApi.setAccessToken(data.body['access_token'])
    },
    function (err) {
        console.log("something went wrong", err);
    }
)