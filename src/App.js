import Main from "./views/Main"
import { episodes } from "./hooks/simpleFetch"

function App() {
  const episodesData = episodes.use()

  return (
    <div className="w-full bg-gray-800">
      <Main episodes={episodesData} />
    </div>
  )
}

export default App
