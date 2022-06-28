import React from "react";

type LoginButtonProps = {
  spotifyLoginUrl: string
}


const LoginButton = ({spotifyLoginUrl}: LoginButtonProps) => (
  <a className="flex bg-green w-[20vw] h-[5vh] mt-[5vh] text-white font-semibold rounded-xl text-2xl font-sans tracking-widest items-center justify-center" href={spotifyLoginUrl}>
    Login to Spotify
  </a>
)

export default LoginButton