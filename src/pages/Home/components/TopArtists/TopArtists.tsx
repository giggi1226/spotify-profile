import React, { useCallback, useState } from "react";
import { useTopArtist } from "./useTopArtist";
import {compose, map, flatMap, countBy} from 'lodash/fp';
import { useNavigate } from "react-router";
import TopSection from "../../../../components/TopSection";

const TopArtists = () => {
  const navigate = useNavigate()
  const [requestParams, setQueryParams] = useState({time_range: 'long_term'});
  const {
    data
  } = useTopArtist(requestParams)

  const onClickRange = useCallback((e:any) => {
    setQueryParams({time_range: e.target.value})
    // navigate('/')
  }, [navigate])

  return data && (
    <TopSection header="Top Artist" data={data.items} type="artist" onClickRange={onClickRange}/>
  )
};

export default TopArtists;