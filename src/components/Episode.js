import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { episodes } from "../hooks/simpleFetch"

export default function Episode() {
  const data = episodes.use()

  const [episode, setEpisode] = useState(null)
  let params = useParams()

  useEffect(() => {
    if (params.episodeId && data) {
      setEpisode(data.find((ep) => ep.episode_id === parseInt(params.episodeId)))
    }
  }, [params, data])

  return (
    <div className="w-full h-screen bg-gray-800">
      <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4 text-white">
        <Link to="/" className="mr-2 text-blue-400">
          <h1 className="text-2xl">All Episodes</h1>
        </Link>
        {episode ? (
          <div className="">
            <h1 className="text-2xl ">{episode.title}</h1>
            <h2 className="my-5 text-muted">{`Aired on: ${episode.air_date}`}</h2>
          </div>
        ) : null}
      </section>
    </div>
  )
}
