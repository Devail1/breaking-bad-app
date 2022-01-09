import "./index.css"
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Episode from "./views/Episode"

const rootElement = document.getElementById("root")

render(
  <BrowserRouter basename="/breaking-bad-app" >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/episode/:episodeId" element={<Episode />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)
