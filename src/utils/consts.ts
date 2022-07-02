
const fetcher = (url:string, token:string) => fetch(url, { 
  headers: { 
    Authorization: "Bearer " + token, 
    'Content-type': "application/json;charset=UTF-8" 
  } 
}).then(res => res.json())

export { fetcher };
