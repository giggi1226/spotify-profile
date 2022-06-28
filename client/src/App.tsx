import React, {useCallback, useEffect, useState} from 'react';
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
      setAccessToken(params.get('access_token') || '')
      setRefreshToken(params.get('refresh_token') || '')
    }
  }, [params, accessToken])

  

  return (
    <div className="flex flex-col bg-black h-screen">
      {accessToken ? <Profile token={accessToken}/> : <Login/>}
    </div>
    
    )
}

export default App;
