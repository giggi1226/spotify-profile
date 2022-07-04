import { useParams } from "react-router-dom"
import { useTrack } from "./useTrack"

type Params = {
  id: string
}

const Track = () => {
  const {id} = useParams<Params>()
  const {trackData, trackFeatures} = useTrack(id || '')

  const image = trackData && trackData.album.images[Math.floor(trackData.album.images.length/2)]

  return trackData && image && (
    <div className="flex h-screen overflow-scroll w-full pl-16 pt-16">
      <img src={image.url} className={`h-[${image.height}px] w-[${image.width}px]`}/>
      <div className="flex flex-col pl-8 justify-between h-[300px]">
        <h1 className="text-white font-bold text-4xl">{trackData.name}</h1>
        {trackData.artists.map((artist:any) => <h2 className="text-white font-semibold text-3xl opacity-90">{artist.name}</h2>)}
        <h3 className="text-white font-medium text-xl">{trackData.album.name}</h3>
        <div className="flex flex-col pb-4">
          <span className="text-white font-bold pr-2 text-xl pb-4">Popularity</span>
          <div className="h-[20px] w-[300px] bg-white rounded-full">
            <div className="bg-green rounded-full h-[20px] flex items-center" style={{width: `${trackData.popularity}%`}}>
              <span className="font-bold text-white pl-2">{trackData.popularity}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Track