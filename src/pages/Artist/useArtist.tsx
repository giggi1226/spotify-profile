import useSwr from "swr"
import { fetcher } from "../../utils/consts"

const useArtist = (id:string) => {
  const { data, error } = useSwr([`https://api.spotify.com/v1/artists/${id}`, localStorage.getItem('access_token')], fetcher, {revalidateOnFocus: false})

  return {data}
}

export { useArtist }