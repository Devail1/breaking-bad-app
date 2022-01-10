import Main from "./views/Main"
import { episodes } from "./hooks/simpleFetch"

function App() {
  const episodesData = episodes.use()

  return (
    <div className="w-full bg-gray-800">
      {episodesData ? (
        <Main episodes={episodesData} />
      ) : (
        <svg
          className="mx-auto h-screen w-10 animate-spin"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#85a2b6"
            strokeWidth="10"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          ></circle>
        </svg>
      )}
      <Main episodes={episodesData} />
    </div>
  )
}

export default App
