import { useEffect, useState } from "react"
import { Link, NavLink, useParams } from "react-router-dom"
import { characters } from "../hooks/simpleFetch"

export default function Character() {
  const charactersData = characters.use()

  const [character, setCharacter] = useState(null)

  let params = useParams()

  // Get character using params
  useEffect(() => {
    if (charactersData && params.characterId) {
      setCharacter(charactersData.find((ch) => ch.char_id === parseInt(params.characterId)))
    }
  }, [charactersData, params.characterId])

  // displays name of the character, birth, nickname, image, status and the list of occupations.

  return (
    <div className="w-full h-screen bg-gray-800">
      <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4 text-white">
        {character ? (
          <>
            <h1 className="mb-4 text-3xl font-bold ">{character.name}</h1>
            <h2 className="mb-4 text-xl ">{character.birthday}</h2>
            <h2 className="mb-4 text-xl ">{character.nickname}</h2>
            <img className="w-64" src={character.img}></img>
            {character.occupation?.length ? (
              <>
                <h4 className="mt-5 text-md font-bold">Occupation:</h4>
                <ul>
                  {character.occupation?.map((element, index) => {
                    return (
                      <li key={index} className="text-sm">
                        {element}
                      </li>
                    )
                  })}
                </ul>
              </>
            ) : null}
            <h2 className={character.status === "Alive" ? "my-5 text-green-600" : "my-5 text-red-600"}>
              {character.status}
            </h2>
          </>
        ) : null}
      </section>
    </div>
  )
}
