const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node')

const app = express();

app.post('/login', (req,res) => {
    const code = request.body.code
    const spotifyApi = new SpotifyWebApi ( {
        redirectUri: 'http://localhost:3000',
        clientId: '75b965ea1982472c8166015c2a4c48b9', 
        clientSecret: '755ea9059ae44d4bb2cdfe43d8b89df7',
    })
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in, 
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})
