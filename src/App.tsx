import React, {useEffect, useState} from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import './App.css';

function App() {
  const [params] = useSearchParams()
  const [accessToken, setAccessToken] = useState<string>('')

  useEffect(() => {
    if(!accessToken && params.get('access_token')){
      localStorage.setItem('access_token',params.get('access_token') || '')
      setAccessToken(params.get('access_token') || '')
    } else if (localStorage.getItem('access_control')){
      setAccessToken(localStorage.getItem('access_control') || '')
    }
  }, [accessToken])

  return (
    <div className="flex flex-col bg-black h-screen">
      {accessToken ? <Profile /> : <Login/>}
    </div>
    
    )
}

export default App;
