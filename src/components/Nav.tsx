import { Link, useLocation } from "react-router-dom"

const Nav = () => {
  const {pathname} = useLocation()
  // console.log(location.pathname)

  return (
    <div className="flex flex-col bg-white bg-opacity-5 justify-center w-[200px] items-center h-screen">
      <Link to='/' className={`flex items-center h-[40px] border-l-green text-white hover:border-l-[3px] w-full justify-center ${pathname === '/' ? 'bg-black border-l-[3px]': ''}`}>Home</Link>
      <Link to='/podcasts' className={`flex items-center h-[40px] border-l-green text-white hover:border-l-[3px] w-full justify-center ${pathname === '/podcasts' ? 'bg-black border-l-[3px]': ''}`}>Podcasts</Link>
    </div>
  )
}

export default Nav