import useSwr from "swr"
import { uniq, filter, isEmpty, map } from 'lodash/fp'
import { fetcher } from "../../utils/consts"
import { useEffect, useState } from "react"

const useArtist = (id:string) => {
  const { data, error } = useSwr([`https://api.spotify.com/v1/artists/${id}`, localStorage.getItem('access_token')], fetcher, {revalidateOnFocus: false})

  return {data}
}

const useTracks = (artist:any) => {
  const [allTracks, setAllTracks] = useState([])
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)

  // fetch saved Tracks
  const { data, error } = useSwr([`https://api.spotify.com/v1/me/tracks?limit=50&offset=${offset}`, localStorage.getItem('access_token')], fetcher, {revalidateOnFocus: false})

  useEffect(() => {
    if(data && data.items && offset <= total){
      setTotal(data.total)
      setAllTracks((tracks:any):any => [...tracks, ...data.items])
      setOffset(offset => offset + 50)
    }
  }, [data])

  const trackList = map((trackData:any) => trackData.track, allTracks)

  const usersSavedTrack:any = filter(track => {
    const trackArtist = filter(trackArtist => artist.id === trackArtist.id, track.artists)
    return !isEmpty(trackArtist)
  }, trackList)

  return {savedTracks: uniq(usersSavedTrack)}
}

export { useArtist, useTracks }