import React, { useCallback, useState } from "react";
import { useTopArtist } from "./useTopArtist";
import {compose, map, flatMap, countBy} from 'lodash/fp';
import { useNavigate } from "react-router";

const TopArtists = () => {
  const navigate = useNavigate()
  const [requestParams, setQueryParams] = useState({time_range: 'long_term'});
  const {
    data
  } = useTopArtist(requestParams)

  const onClickArtist = useCallback((artist:any) => (e: any) => {
    console.log(artist)
    navigate(`/topArtists/${artist.id}`)
  }, [navigate])

  const onClickSixMonths = useCallback((e:any) => {
    setQueryParams({time_range: e.target.value})
    navigate('/')
    // e.stopPropagation();
    // console.log(e)
  }, [navigate])

  const bla = compose(
    countBy(genre => genre),
    flatMap((genre:any) => genre),
    map((artist:any) => artist.genres)
  )

  // if(data) console.log(bla(data.items))

  return data && (
    <div className="pt-[50px]">
      <h2 className="text-white font-bold text-2xl pb-[25px]">Top Artist</h2>
      <div className="flex h-[40px] space-x-4 items-center">
        <button onClick={onClickSixMonths} value="long_term" className="flex min-w-[50px] h-[10px] text-white font-bold rounded-xl text-sm font-sans tracking-widest items-center justify-center hover:text-green hover:underline hover:underline-offset-4">
          All Time
        </button>
        <button onClick={onClickSixMonths} value="medium_term" className="flex min-w-[50px] h-[10px] text-white font-bold rounded-xl text-sm font-sans tracking-widest items-center justify-center hover:text-green hover:underline hover:underline-offset-4">
          Last 6 Months
        </button>
        <button onClick={onClickSixMonths} value="short_term" className="flex min-w-[50px] h-[10px] text-white font-bold rounded-xl text-sm font-sans tracking-widest items-center justify-center hover:text-green hover:underline hover:underline-offset-4">
          Last Month
        </button>
      </div>
      
      <ol className="flex flex-col items-start min-h-[50%] justify-between ">
        {data.items.map((artist:any) => (
          <button onClick={onClickArtist(artist)} className="mt-2 mb-2">
            <li key={artist.name} className="flex items-center space-x-2">
              <img src={artist.images[artist.images.length - 1].url} className="rounded-full h-[65px] w-[65px]"/>
              <span className="text-white">{artist.name}</span>
            </li>
          </button>
          ))
        }
      </ol>
    </div>
    
  )
};

export default TopArtists;