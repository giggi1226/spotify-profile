import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import App from './App';
import './App.css';
import TopArtists from './pages/Home/components/TopArtists/TopArtists';
import Artist from './pages/Artist/Artist'
import Nav from './components/Nav'

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
      <Route path="/" element={<App />}></Route>
      <Route path="/topArtists" element={<TopArtists />}/>
      <Route path="/topArtists/:id" element={<Artist />}/>
    </Routes>
    </div>
    
  )
}

export default Main;