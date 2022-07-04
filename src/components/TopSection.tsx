import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

type Section = {
  header: string,
  type: string,
  data:any,
  onClickRange: any
}

const TopSection = ({header, type, data, onClickRange}:Section) => {
  const navigate = useNavigate()
  
  // const [requestParams, setQueryParams] = useState({time_range: 'long_term'});

  const onClickArtist = useCallback((artist:any) => (e: any) => {
    navigate(`/topArtists/${artist.id}`)
  }, [navigate])

  const onClickTrack = useCallback((track:any) => (e: any) => {
    navigate(`/topTrack/${track.id}`)
  }, [navigate])

  const Track = ({track}:{track:any}) => (
    <button onClick={onClickTrack(track)} className="mt-2 mb-2">
      <li key={track.name} className="flex items-center space-x-2">
        <img src={track.album.images[track.album.images.length - 1].url} className="rounded-full h-[65px] w-[65px]"/>
        <span className="text-white">{track.name}</span>
      </li>
    </button>
  )

  const Artist = ({artist}:{artist:any}) => (
    <button onClick={onClickArtist(artist)} className="mt-2 mb-2">
      <li key={artist.name} className="flex items-center space-x-2">
        <img src={artist.images[artist.images.length - 1].url} className="rounded-full h-[65px] w-[65px]"/>
        <span className="text-white">{artist.name}</span>
      </li>
    </button>
  )


  return (
    <div className="pt-[50px]">
      <h2 className="text-white font-bold text-2xl pb-[25px]">{header}</h2>
      <div className="flex h-[40px] space-x-4 items-center">
        <button onClick={onClickRange} value="long_term" className="flex min-w-[50px] h-[10px] text-white font-bold rounded-xl text-sm font-sans tracking-widest items-center justify-center hover:text-green hover:underline hover:underline-offset-4">
          All Time
        </button>
        <button onClick={onClickRange} value="medium_term" className="flex min-w-[50px] h-[10px] text-white font-bold rounded-xl text-sm font-sans tracking-widest items-center justify-center hover:text-green hover:underline hover:underline-offset-4">
          Last 6 Months
        </button>
        <button onClick={onClickRange} value="short_term" className="flex min-w-[50px] h-[10px] text-white font-bold rounded-xl text-sm font-sans tracking-widest items-center justify-center hover:text-green hover:underline hover:underline-offset-4">
          Last Month
        </button>
      </div>
      
      <ol className="flex flex-col items-start justify-between ">
        {data.map((item:any) => {
          return type === 'artist' ? <Artist artist={item}/> : <Track track={item}/>
        })
        }
      </ol>
    </div>
  )
} 

export default TopSection