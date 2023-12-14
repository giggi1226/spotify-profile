import {map} from 'lodash/fp'

import { usePodcasts } from "./usePodcasts";


const Podcasts = () => {
  const {
    podcasts
  } = usePodcasts()

  // console.log(podcasts)

  

  const Podcast = (podcast:any) => {
    console.log(podcast)

    const image = podcast?.podcast?.images[Math.floor(podcast?.podcast?.images.length/2)]

    return (
    <div className="flex flex-col items-center">
      <img src={image.url} className={`h-[${image.height}px] w-[${image.width}px]`}/>
      <div className="mt-4">
        <h1 className="text-white font-bold text-xl">{podcast.podcast.name}</h1>
      </div>
    </div>
  )}


  return (
    <div className="flex flex-col items-center pt-8 w-full pr-4 pl-4 h-screen overflow-scroll">
      <h2 className="text-white font-bold text-4xl pb-16">Your Saved Podcast</h2>
      <div className="flex items-center grid gap-16 grid-cols-4">
        {map((podcast:any) => <Podcast podcast={podcast}/>, podcasts)}
      </div>
    </div>
  )
};

export default Podcasts;