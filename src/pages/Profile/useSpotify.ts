import useSwr from 'swr'

const fetcher = (url:string, token:string) => fetch(url, { headers: { Authorization: "Bearer " + token, 'Content-type': "application/json;charset=UTF-8" } }).then(res => res.json())

const useSpotify = (token:string):{displayName: string, images: any} => {

  const { data, error } = useSwr(['https://api.spotify.com/v1/me', token], fetcher)


  return { 
    displayName: data ? data.display_name : '',
    images: data ? data.images : []
  }
}

export { useSpotify }
