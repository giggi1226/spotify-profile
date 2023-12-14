import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Track from './pages/Track/Track';
import Podcasts from './pages/Podcasts/Podcasts';
import Artist from './pages/Artist/Artist'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/topTrack/:id",
    element: <Track />,
  },
  {
    path: "/topArtists/:id",
    element: <Artist />,
  },
  {
    path: "/podcasts",
    element: <Podcasts />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
