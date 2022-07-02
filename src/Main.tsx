import React from 'react';
import { Route, Routes } from 'react-router-dom'
import App from './App';
import './App.css';
import TopArtists from './pages/Home/components/TopArtists/TopArtists';
import Artist from './pages/Artist/Artist'

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/topArtists" element={<TopArtists />}/>
      <Route path="/topArtists/:id" element={<Artist />}/>
    </Routes>
    
    )
}

export default Main;