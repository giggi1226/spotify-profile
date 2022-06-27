import React from "react";

type LoginButtonProps = {
  spotifyLoginUrl: string
}

const LoginButton = ({spotifyLoginUrl}: LoginButtonProps) => (
  <a href={spotifyLoginUrl} style={{backgroundColor: 'green', color: 'black'}}>
    Login to Spotify
  </a>
)

export default LoginButton