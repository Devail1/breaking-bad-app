import { entity } from "simpler-state"
import axios from "axios"

const fetchEpisodes = async () => {
  let data = []
  try {
    const response = await axios.get("https://www.breakingbadapi.com/api/episodes")
    if (response.data) data = response.data
  } catch (error) {
    console.log("~ error", error)
  }
  return data
}

export const episodes = entity(fetchEpisodes())
