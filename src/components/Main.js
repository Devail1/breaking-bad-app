import { useState, useEffect, useCallback } from "react"

export default function Main({ episodes }) {
  console.log("~ episodes", episodes)

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
          <>
            <h1 className="my-6 text-2xl text-white">{`Season ${season}`}</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {episodes?.map((episode) => {
                return episode.season === season ? (
                  <div
                    key={episode.episode_id}
                    className="flex flex-col items-start justify-start w-full p-12 bg-gray-900 rounded-lg sahdow-lg"
                  >
                    <div className="text-white ">
                      <h1 className="text-xl">{`EP #${episode.episode_id}`}</h1>

                      <a className="mr-2 text-blue-400" href={"#"}>
                        <h1 className="text-2xl">{episode.title}</h1>
                      </a>
                      <h2 className="my-5 text-muted">{`Aired on: ${episode.air_date}`}</h2>
                      {/* <a className="mr-2 text-blue-400 underline " href={"#"}></a> */}
                    </div>
                  </div>
                ) : null
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}
