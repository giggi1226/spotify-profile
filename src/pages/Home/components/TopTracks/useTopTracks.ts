// import { useNavigate } from 'react-router'
import useSwr from 'swr'
import { fetcher } from "../../../../utils/consts"

const useTopTracks = (requestParams:any) => {
  const { time_range } = requestParams
  const token = localStorage.getItem('access_token')
  
  const { data, error } = useSwr([`https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=${time_range}`, token], fetcher)

  return {
    data
  }
}

export { useTopTracks };