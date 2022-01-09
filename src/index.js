import "./index.css"
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Episode from "./components/Episode"

const rootElement = document.getElementById("root")

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/episode/:episodeId" element={<Episode />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)
