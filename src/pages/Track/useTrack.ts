import { useEffect } from "react"
import useSwr from "swr"
import { fetcher } from "../../utils/consts"

const useTrack = (id:string) => {
  // const [trackData, setTrackData]

  const { data:trackData, error: trackDataError } = useSwr([`https://api.spotify.com/v1/tracks/${id}`, localStorage.getItem('access_token')], fetcher, {revalidateOnFocus: false})
  const { data:trackFeatures, error: trackFeaturesError } = useSwr([`https://api.spotify.com/v1/audio-features/${id}`, localStorage.getItem('access_token')], fetcher, {revalidateOnFocus: false})
  /*
  trackData: name, artists, album, popularity
  audio features:  duration, loudness
  */
//  useEffect(() => {

//  }, [data])

  // const track = {
  //   name: data.name
  // }
  
  return {
    trackData, 
    trackFeatures,
    isLoading: !trackData || !trackFeatures
  }
}

export { useTrack }