import { useParams } from "react-router";
import { useArtist } from "./useArtist";

type Params = {
  id: string
}

const Artist = () => {

  const { id } = useParams<Params>()
  const { data } = useArtist(id || '')

  return data && data.images && (
    <div className="flex bg-black flex-grow flex-col items-center justify-center">
      <img className="rounded-full" src={data.images[data.images.length - 1].url}/>
      <h1 className="text-white text-3xl font-bold  mb-[20px] mt-[10px]">{data.name}</h1>
      <div className="flex items-center">
        <span className="text-white font-bold pr-2 text-xl">Popularity: </span>
        <div className="h-[20px] w-[300px] bg-white rounded-full">
          <div className="bg-green rounded-full h-[20px] flex items-center" style={{width: `${data.popularity}%`}}>
            <span className="font-bold text-white pl-2">{data.popularity}%</span>
          </div>
        </div>
      </div>
      <div className="flex text-white font-bold text-xl">
        <span className="pr-2">Genres: </span>
        {data.genres.map((genre:string, i:number) => {
          if(i === data.genres.length - 1) return <span className="pr-2">{genre}</span>
          else return  <span className="pr-2">{genre},</span>
          
        })}
      </div>
      
      
    </div>
  )
}

export default Artist;