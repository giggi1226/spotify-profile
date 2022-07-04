import React, { useCallback } from "react";
import TopArtists from "./components/TopArtists/TopArtists";
import Profile from "./components/Profile/Profile";
import TopTracks from "./components/TopTracks/TopTracks";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen overflow-scroll">
      <Profile />
      <div className="flex w-full pl-[10vw] pr-[10vw] justify-between">
        <TopTracks />
        <TopArtists/>
      </div>
      
    </div>
  )
};

export default Home;