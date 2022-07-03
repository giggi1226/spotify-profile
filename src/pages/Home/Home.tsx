import React, { useCallback } from "react";
import TopArtists from "./components/TopArtists/TopArtists";
import Profile from "./components/Profile/Profile";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen overflow-scroll">
      <Profile />
      <TopArtists/>
    </div>
  )
};

export default Home;