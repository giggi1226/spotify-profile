require('dotenv').config();

const {
  CLIENT_ID, 
  CLIENT_SECRET
} = process.env

var request = require('request');


const REDIRECT_URI = 'http://localhost:3000/api/callback'
const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
var stateKey = 'spotify_auth_state';
var front_end = "http://localhost:3000";

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
    // res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + basic
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        // we can also pass the token to the browser to make requests from there
        const params = new URLSearchParams({
          access_token: access_token,
          refresh_token: refresh_token
        });
        res.redirect(`${front_end}/?${params.toString()}`);
      } else {
        const params = new URLSearchParams({
          error: 'invalid_token'
        });
        res.redirect('/?' + params.toString())
      }
    });
  }
}