import { useEffect, useState } from "react"
import { Link, NavLink, useParams } from "react-router-dom"
import { episodes, characters } from "../hooks/simpleFetch"

export default function Episode() {
  const episodesData = episodes.use()
  const charactersData = characters.use()

  const [episode, setEpisode] = useState(null)
  const [cast, setCast] = useState([])

  let params = useParams()

  //Get episode using params
  useEffect(() => {
    if (episodesData && params.episodeId) {
      setEpisode(episodesData.find((ep) => ep.episode_id === parseInt(params.episodeId)))
    }
  }, [episodesData, params.episodeId])

  //Get cast
  useEffect(() => {
    if (episode && charactersData) {
      setCast(charactersData.filter((actor) => episode.characters.includes(actor.name)))
    }
  }, [charactersData, episode])

  return (
    <div className="w-full h-screen bg-gray-800">
      <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4 text-white">
        <Link to="/" className="mr-2 text-blue-400">
          <h1 className="text-2xl">All Episodes</h1>
        </Link>
        {episode ? (
          <>
            <h1 className="text-2xl ">{episode.title}</h1>
            <h2 className="my-5 text-muted">{`Aired on: ${episode.air_date}`}</h2>
            {cast?.length ? (
              <>
                <h4 className="text-md font-bold">Cast:</h4>
                <ul>
                  {cast?.map((actor, index) => {
                    return (
                      <NavLink key={index} to={`/character/${actor.char_id}`}>
                        <li className="text-sm hover:underline">{actor.name}</li>
                      </NavLink>
                    )
                  })}
                </ul>
              </>
            ) : null}
          </>
        ) : null}
      </section>
    </div>
  )
}
