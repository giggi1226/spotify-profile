import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import { useSpotify } from './useSpotify'
import TopArtists from "../TopArtists/TopArtists";

const Profile = () => {
  const {displayName, images} = useSpotify(localStorage.getItem('access_token') || '')
  const navigate = useNavigate();

  const logout = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/')
    window.location.reload()
  }, [])

  return images && displayName && (
    <div>
      <h1 className="text-white text-5xl bold p-[5vh]">Hello, {displayName ? displayName : 'world'}</h1>
      {<img style={{borderRadius: "50%", width: 250,
          height: 250,}}src={images && images[0] ? images[0].url : 'world'}/>}
      <button className="flex min-w-[300px] min-h-[50px] bg-green text-white font-semibold rounded-xl text-2xl font-sans tracking-widest items-center justify-center mt-[5vh]" onClick={logout}>
        Logout
      </button>
    </div>
  )
};

export default Profile;