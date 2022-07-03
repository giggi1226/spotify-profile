import { Link } from "react-router-dom"

const Nav = () => (
  <div className="flex flex-col justify-center w-[200px] items-center h-screen">
    <Link to='/' className="text-white">Home</Link>
    <Link to='/' className="text-white">Podcasts</Link>
  </div>
    
)

export default Nav