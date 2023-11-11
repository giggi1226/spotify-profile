import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom'

import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

import Nav from './components/Nav'


function Main() {
  const [isAuthed, setAuthed] = useState(false)
  const [params] = useSearchParams()
  const [accessToken, setAccessToken] = useState<string>(localStorage.getItem('access_token') || '')

  useEffect(() => {
    if(localStorage.getItem('access_token')){
      setAuthed(true)
    }
  }, [localStorage.getItem('access_token')])


  useEffect(() => {
    if(!accessToken && params.get('access_token')){

      localStorage.setItem('access_token', params.get('access_token') || '')
      setAccessToken(params.get('access_token') || '')

    } else if (localStorage.getItem('access_control')){
      setAccessToken(localStorage.getItem('access_control') || '')
    }
  }, [accessToken])

  

  return (
    <div className='flex'>
      {isAuthed && <Nav/>}
      {isAuthed ? <Home /> : <Login/>}
    </div>
    
  )
}

export default Main;