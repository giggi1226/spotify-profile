import { useParams } from "react-router-dom"
import { useTrack } from "./useTrack"
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from "react";

type Params = {
  id: string
}


const Track = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  

  const {id} = useParams<Params>()
  const {trackData, trackFeatures, isLoading} = useTrack(id || '')

  const [barChartData, setBarChartData] = useState<Array<number>>([]);

  useEffect(() => {
    if(!isLoading){
      const { danceability, acousticness, energy, instrumentalness, liveness, speechiness, valence} = trackFeatures
      setBarChartData([
        danceability,
        acousticness,
        energy,
        instrumentalness,
        liveness,
        speechiness, 
        valence
      ])
    }
  }, [isLoading])


  const image = trackData && trackData.album.images[Math.floor(trackData.album.images.length/2)]

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        grid: {
          // drawOnChartArea: false,
          color: ['#afafaf'],
          borderColor:'#fff',
        }
      },
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Audio Features',
        color: '#fff',
        font: {
          size: 32,
        }
      },
    },
  };

  const data = trackFeatures && ({
    labels: ['dance', 'acoustic', 'energy', 'instrument', 'liveness', 'speechiness', 'valence'],
    datasets: [
      {
        data: barChartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ]
      },
    ],
  })

  return !isLoading ? (
    <div className="flex flex-col h-screen overflow-scroll w-full">
      <section className="flex pl-16 pt-16">
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
      </section>
      <section className="flex justify-around pt-16">
        {!isLoading && (
          <>
            <div className="w-[500px] h-[500px]">
              <Bar data={data} options={options} height={'500px'} width={'100px'}/>
            </div>
          
            <div className="flex flex-col justify-around">
              <h3 className="text-green text-3xl font-bold">Loudness</h3>
              <h2 className="text-white text-2xl">{trackFeatures.loudness} db</h2>
              <h3 className="text-green text-3xl font-bold">Duration</h3>
              <h2 className="text-white text-2xl">{trackFeatures.duration_ms}</h2>
            </div>
          </>
        )}
      </section>
    </div>
  ) : <div/>
}

export default Track;