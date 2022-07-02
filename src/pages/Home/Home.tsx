import React, { useCallback } from "react";
import TopArtists from "./components/TopArtists/TopArtists";
import Profile from "./components/Profile/Profile";


const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-[50%] justify-between ">
      <Profile />
      <TopArtists/>
    </div>
  )
};

export default Home;