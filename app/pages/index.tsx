import React from 'react'
import { ContextProvider } from "../comps/context.tsx";
import { Hello } from "../comps/hello.tsx";

export default function Home() {
  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <main>
        <ContextProvider>
          <Hello />
        </ContextProvider>
      </main>
    </div>
  )
}