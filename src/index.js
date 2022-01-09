import "./index.css"
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Episode from "./views/Episode"
import Character from "./views/Character"

const rootElement = document.getElementById("root")

render(
  <BrowserRouter basename="/breaking-bad-app" >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/episode/:episodeId" element={<Episode />} />
      <Route path="/character/:characterId" element={<Character />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)
