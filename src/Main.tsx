import React from 'react';
import { Route, Routes } from 'react-router-dom'
import App from './App';
import './App.css';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
    
    )
}

export default Main;