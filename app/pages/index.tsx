import React, { useEffect, useState } from 'react'
import { useDeno } from "framework/react"

/**
 * Check whether the app is running in dev move
 * @returns if the app runs in dev mode
 */
function isDevMode() {
  return Deno.env.get("ALEPH_BUILD_MODE") === "development"
}

/**
 * Hook to check whether the app is running in dev move
 * @returns if the app runs in dev mode
 */
function useDevMode() {
  return useDeno(() => isDevMode())
}

export default function Home() {
  const [state, setState] = useState<string>()

  const API = useDevMode()
    ? "//localhost:3000/api" : "/api"

  useEffect(() => {
    refresh()
  }, [])

  async function refresh() {
    const res = await fetch(API + "/hello")
    setState(await res.json())
  }

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <main>
        <div children={state} />
      </main>
    </div>
  )
}
