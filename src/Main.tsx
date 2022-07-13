import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import App from './App';
import './App.css';
import Artist from './pages/Artist/Artist'
import Nav from './components/Nav'
import Track from './pages/Track/Track';
import Podcasts from './pages/Podcasts/Podcasts';

function Main() {

  const [isAuthed, setAuthed] = useState(false)
  useEffect(() => {
    if(localStorage.getItem('access_token')){
      setAuthed(true)
    }
  }, [localStorage.getItem('access_token')])

  return (
    <div className='flex'>
      {isAuthed && <Nav/>}
      <Routes>
        <Route path="/topTrack/:id" element={<Track />}/>
        <Route path="/topArtists/:id" element={<Artist />}/>
        <Route path="/podcasts" element={<Podcasts />}/>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </div>
    
  )
}

export default Main;