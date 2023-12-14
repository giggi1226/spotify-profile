import useSwr from 'swr'
import { fetcher } from '../../../../utils/consts'

const useSpotify = (token:string):{displayName: string, images: any} => {
  const { data } = useSwr(['https://api.spotify.com/v1/me/', token], fetcher, {revalidateOnFocus: false})

  return { 
    displayName: data ? data.display_name : '',
    images: data ? data.images : []
  }
}

export { useSpotify }
