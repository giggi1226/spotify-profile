import React, {useEffect, useState} from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import './App.css';

function App() {
  const [params] = useSearchParams()

  const [accessToken, setAccessToken] = useState<string>('')
  const [refreshToken, setRefreshToken] = useState<string>('')

  useEffect(() => {
    if(!accessToken) {
      console.log('here')
      setAccessToken(params.get('access_token') || '')
      setAccessToken(params.get('refresh_token') || '')
    }
  }, [params, accessToken])

  return accessToken ? <Profile/> : <Login/>
}

export default App;
