import React, { useCallback, useEffect, useState } from "react";
import { useTopTracks } from "./useTopTracks";
import {compose, map, flatMap, isEmpty} from 'lodash/fp';
import { useNavigate } from "react-router";
import TopSection from "../../../../components/TopSection";

const TopTracks = () => {
  const [requestParams, setQueryParams] = useState({time_range: 'long_term'});
  const { data } = useTopTracks(requestParams)

  const onClickRange = useCallback((e:any) => {
    setQueryParams({time_range: e.target.value})
  }, [])

  return data && (
    <TopSection header="Top Tracks" data={data.items} type="track" onClickRange={onClickRange} value={requestParams.time_range}/>
  )
};

export default TopTracks;