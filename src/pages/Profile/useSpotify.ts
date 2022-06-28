import useSwr from 'swr'

const fetcher = (url:string, token:string) => fetch(url, { headers: { Authorization: "Bearer " + token, 'Content-type': "application/json;charset=UTF-8" } }).then(res => res.json())

const useSpotify = (token:string):{displayName: string, images: any} => {

  const { data, error } = useSwr(['https://api.spotify.com/v1/me', token], fetcher)

  console.log(data)


  return { 
    displayName: data ? data.display_name : '',
    images: data ? data.images : []
  }
}

export { useSpotify }

// BQAis4RWWRa4WJnhmFCWSwIXOWwUL2T9DXHOfpluu2-W4DVxI5VUTyzDguSmAaGWYxBTau6Yfx-heDqzl4SxhxltZQTCUUSzHdRzPJBI4xz1-4jPQDfo7huQT4JwYbhTsfp5HMvwUhG517SJQYg3x-4U4w3_oIrp8btsBfA4p_MycukJpVyYHxKTSuqCJ6VvrQ