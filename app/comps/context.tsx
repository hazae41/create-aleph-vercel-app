import { useDeno } from "framework/react";
import React, { ReactNode } from "react";
import { isDevMode } from "../libs/aleph.ts";
import { Context } from "../libs/context.ts";

export const ContextProvider = (props: {
  children: ReactNode
}) => {
  const { children } = props

  const API = useDeno(isDevMode)
    ? "//localhost:3000/api" : "/api"

  return <Context.Provider value={API}>
    {children}
  </Context.Provider>
}