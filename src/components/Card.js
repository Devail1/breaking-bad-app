import React from "react"
import { NavLink } from "react-router-dom"

export default function Card({ id, title, airDate, list, img }) {
  return (
    <div className="flex flex-col items-start justify-start w-full p-12 bg-gray-900 rounded-lg sahdow-lg">
      <div className="text-white ">
        <h1 className="text-xl">{`EP #${id}`}</h1>
        <NavLink to={`/episode/${id}`} className="mr-2 text-blue-400">
          <h1 className="mt-2 text-2xl">{title}</h1>
        </NavLink>
        <h2 className="mb-5 text-lg">{`Aired on: ${airDate}`}</h2>
        {list?.length ? (
          <>
            <h4 className="text-md font-bold">Cast:</h4>
            <ul>
              {list?.map((item, index) => {
                return (
                  <NavLink key={index} to={`/character/${item}`}>
                    <li className="text-sm hover:underline">{item}</li>
                  </NavLink>
                )
              })}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  )
}
