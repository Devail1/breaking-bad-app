import { useState, useEffect, useCallback } from "react"
import Card from "../components/Card"

export default function Main({ episodes }) {
  const [seasons, setSeasons] = useState([])

  const getSeasonsFilters = useCallback(() => {
    let seasons = episodes.map((episode) => episode.season.trim())
    let uniqueItems = [...new Set(seasons)]
    setSeasons(uniqueItems)
  }, [episodes])

  useEffect(() => {
    if (episodes?.length) getSeasonsFilters()
  }, [episodes, getSeasonsFilters])

  return (
    <div>
      {seasons?.map((season) => {
        return (
          <div key={season}>
            <h1 className="my-6 text-2xl text-white">{`Season ${season}`}</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {episodes?.map((episode) => {
                return episode.season === season ? (
                  <Card
                    key={episode.episode_id}
                    id={episode.episode_id}
                    title={episode.title}
                    airDate={episode.air_date}
                    list={episode.characters}
                  ></Card>
                ) : null
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
