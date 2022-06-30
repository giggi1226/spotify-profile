import React from "react";
import LoginButton from "../../components/LoginButton";


const Login = () => (
  <div className="flex flex-grow items-center justify-center">
    <LoginButton spotifyLoginUrl="/api/auth"/>
  </div>
    
)

export default Login;