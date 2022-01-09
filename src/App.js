import "./App.css"

import { useEffect } from "react"
import { useEpisodesFetch } from "./hooks/useEpisodesFetch"
import Main from "./components/Main"

function App() {
  const { episodes, error, isLoading, fetchEpisodes } = useEpisodesFetch()

  useEffect(() => {
    fetchEpisodes()
    //eslint-disable-next-line
  }, [])

  return (
    <div className="w-full  bg-gray-800">
      <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4">
        {error ? (
          <> An Error has been occured. Please check your connection</>
        ) : isLoading ? (
          <>Loading data..</>
        ) : (
          <Main episodes={episodes} />
        )}
      </section>
    </div>
  )
}

export default App
