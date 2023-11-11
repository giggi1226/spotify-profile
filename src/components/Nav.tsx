import { Link, useLocation } from "react-router-dom"
import spotify from '@assets/Spotify_Icon_RGB_Green.png'

const Nav = () => {
  const {pathname} = useLocation()
  // console.log(location.pathname)

  // <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  return (
    <div className="flex flex-col bg-white bg-opacity-5 justify-center w-[200px] items-center h-screen">
      <div className="flex grow w-full justify-center my-4">
        <img className="h-24" src={spotify}/>
      </div>

      <div className="flex flex-col w-full grow">
        <Link to='/' className={`flex items-center h-[40px] border-l-green text-white hover:border-l-[3px] w-full justify-center ${pathname === '/' ? 'bg-black border-l-[3px]': ''}`}>Home</Link>
        <Link to='/podcasts' className={`flex items-center h-[40px] border-l-green text-white hover:border-l-[3px] w-full justify-center ${pathname === '/podcasts' ? 'bg-black border-l-[3px]': ''}`}>Podcasts</Link>
      </div>
    </div>
  )
}

export default Nav

// display: flex;
// flex-direction: column;
// width: 100%;
// flex-grow: 1;
// }