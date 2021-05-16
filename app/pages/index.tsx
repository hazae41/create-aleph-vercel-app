import React, { createContext, useContext } from 'react'
import { useDeno } from "framework/react"
import useSWR from "swr"
import { isDevMode } from "../libs/aleph.ts";

export const Context =
  createContext<string | undefined>(undefined)

export default function Home() {
  const API = useDeno(isDevMode)
    ? "//localhost:3000/api" : "/api"

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <main>
        <Context.Provider value={API}>
          <Hello />
        </Context.Provider>
      </main>
    </div>
  )
}

const Hello = () => {
  const API = useContext(Context)!

  const { data, error } = useSWR(API + "/hello",
    (url) => fetch(url).then(res => res.json()))

  if (error)
    return <div children={error.message} />
  if (!data)
    return <div children="Loading..." />
  return <div children={data} />
}
