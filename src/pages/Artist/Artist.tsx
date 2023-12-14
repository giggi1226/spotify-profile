import { useParams } from "react-router";
import { useArtist, useTracks } from "./useArtist";

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

type Params = {
  id: string
}

const Artist = () => {

  const navigate = useNavigate()
  const { id } = useParams<Params>()
  const { data } = useArtist(id || '')
  const { savedTracks } = useTracks(data ? data : {})

  const onClickTrack = useCallback((track:any) => () => {
    navigate(`/topTrack/${track.id}`)
  }, [navigate])

  const Track = ({track}:{track:any}) => (
    <button onClick={onClickTrack(track)} className="mt-2 mb-2">
      <li key={track.name} className="flex items-center space-x-2">
        <img src={track.album.images[track.album.images.length - 1].url} className="h-[65px] w-[65px]"/>
        <div className="flex flex-col items-start p-2">
          <span className="text-white">{track.name}</span>
          {track.artists.map((artist:any) => <span className="text-white opacity-60 font-light">{artist.name}</span>)}
          <span className="text-white font-bold opacity-80">{track.album.name}</span>
        </div>
      </li>
    </button>
  )

  return data && data.images && (
    <div className="flex bg-black flex-grow flex-col items-center justify-center h-screen overflow-scroll">
      <img className="rounded-full" src={data.images[data.images.length - 1].url}/>
      <h1 className="text-white text-3xl font-bold  mb-[20px] mt-[10px]">{data.name}</h1>
      <div className="flex flex-col items-center pb-4">
        <span className="text-white font-bold pr-2 text-xl pb-4">Popularity </span>
        <div className="h-[20px] w-[300px] bg-white rounded-full">
          <div className="bg-green rounded-full h-[20px] flex items-center" style={{width: `${data.popularity}%`}}>
            <span className="font-bold text-white pl-2">{data.popularity}%</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-white font-bold text-xl">
        <span className="pr-2 pb-4">Genres </span>
        {data.genres.map((genre:string, i:number) => (
           <span className="pr-2 text-green font-medium" key={`genre-${i}`}>{genre}</span>
        ))}
      </div>
      <div className="flex flex-col items-center pt-8 w-full pr-4 pl-4">
        <h2 className="text-white font-bold text-2xl pb-4">Your Saved Tracks</h2>
        <div className="flex items-center grid gap-4 grid-cols-4">
          {savedTracks.map((track:any) => <Track track={track}/>)}
        </div>
      </div>
    </div>
  )
}

export default Artist;