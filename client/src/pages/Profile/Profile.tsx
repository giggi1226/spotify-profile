import React from "react";
import { useSpotify } from './useSpotify'

type profileTypes = {
  token: string
}

const Profile = ({token}: profileTypes) => {
  const {displayName, images} = useSpotify(token)

  const logout = () => {
    // setAccessToken('')
    // setRefreshToken('')
    console.log('clicked')
  }

  return (
    <div className="flex flex-col items-center min-h-[50%] justify-between ">
      <h1 className="text-white text-5xl bold p-[5vh]">Hello, {displayName ? displayName : 'world'}</h1>
      <img style={{borderRadius: "50%", width: 250,
          height: 250,}}src={images && images[0] ? images[0].url : 'world'}/>
      <button className="bg-green w-[10vw] h-[5vh] mt-[5vh] text-white font-semibold rounded-xl text-2xl font-sans tracking-widest" onClick={logout}>Logout</button>
    </div>
  )
};

export default Profile;