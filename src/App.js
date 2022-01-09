import Main from "./views/Main"
import { episodes } from "./hooks/simpleFetch"

function App() {
  const data = episodes.use()

  return (
    <div className="w-full bg-gray-800">
      <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4">
        <Main episodes={data} />
      </section>
    </div>
  )
}

export default App
