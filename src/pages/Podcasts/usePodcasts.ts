import useSWR from "swr"
import { map } from 'lodash/fp'
import { fetcher } from "../../utils/consts"

const usePodcasts = () => {
  const {data} = useSWR([`https://api.spotify.com/v1/me/shows/`, localStorage.getItem('access_token')], fetcher, {revalidateOnFocus: false})

  const podcasts = map((podcast:any) => podcast.show, data?.items);

  return {
    podcasts
  }
}

export { usePodcasts }