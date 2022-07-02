import { useParams } from "react-router";

const Artist = () => {
  const {id} = useParams()
  console.log(id)

  return (
    <div className="height-[100%] bg-black">
      <h1 className="text-white">{id}</h1>
    </div>
  )
}

export default Artist;