import { useState } from "react"
import axios from "axios"

export const useEpisodesFetch = () => {
  const [episodes, setEpisodes] = useState()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  async function fetchEpisodes() {
    setIsLoading(true)
    try {
      const response = await axios.get("https://www.breakingbadapi.com/api/episodes")
      setIsLoading(false)
      if (response.data) {
        setEpisodes(response.data)
      }
    } catch (error) {
      setError("Something went wrong")
    }
  }
  return { episodes, error, isLoading, fetchEpisodes }
}
