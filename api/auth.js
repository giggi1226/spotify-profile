import 'dotenv/config'

const {
  CLIENT_ID,
  REDIRECT_URI
} = process.env


// const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
var stateKey = 'spotify_auth_state';

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
 var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export default async function handler(req, res) {
  var state = generateRandomString(16);
  
  const cookieString = ""
  const stateCookie = `${stateKey}=${state}${cookieString}`;

  res.setHeader('Set-Cookie', [stateCookie]);

  const query = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: 'user-read-private user-read-email user-top-read user-library-read',
    redirect_uri: REDIRECT_URI,
    state: state
  })


		return res.redirect(`https://accounts.spotify.com/authorize?${query.toString()}`)
}