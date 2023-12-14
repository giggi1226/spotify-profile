type LoginButtonProps = {
  spotifyLoginUrl: string
}


const LoginButton = ({spotifyLoginUrl}: LoginButtonProps) => (
  <a className="flex min-w-[300px] min-h-[50px] bg-green text-white font-semibold rounded-xl text-2xl font-sans tracking-widest items-center justify-center" href={spotifyLoginUrl}>
    Login to Spotify
  </a>
)

export default LoginButton