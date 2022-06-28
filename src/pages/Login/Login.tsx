import React from "react";
import LoginButton from "../../components/LoginButton";


const Login = () => (
    <LoginButton spotifyLoginUrl={`${process.env.REACT_APP_BASE}/api/auth`}/>
)

export default Login;