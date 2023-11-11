import 'dotenv/config'
import querystring from 'query-string'
import fetch from 'node-fetch'

const {
  CLIENT_ID, 
  CLIENT_SECRET,
  REDIRECT_URI,
} = process.env

// var request = require('request');

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
var stateKey = 'spotify_auth_state';

export default async function handler(req, res) {

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.headers.cookie.split("=")[1] || null

  if (state === null || state !== storedState) {

    const params = new URLSearchParams({
      error: 'state_mismatch'
    })

    res.redirect(`/#${params.toString()}`);

  } else {
    const headers =  {
      'Authorization': 'Basic ' + basic,
      'content-type': 'application/x-www-form-urlencoded'
    }

    const params = new URLSearchParams({
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
    });

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers,
      body: params
    })

    

    console.log(response.status)

    if(response.status === 200){
      const responeJson = await response.json()

      const {
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: expiresIn
      } = responeJson

      const queryParams = querystring.stringify({
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: expiresIn
      })

      res.redirect(`/?${queryParams}`);
    }
  }
}