import useSWR from "swr";
import React, { useContext } from "react";
import { Context } from "../libs/context.ts";

export const Hello = () => {
  const API = useContext(Context)!
  console.log("API", API)

  const { data, error } = useSWR(API + "/hello",
    (url) => fetch(url).then(res => res.json()))

  if (error)
    return <div children={error.message} />
  if (!data)
    return <div children="Loading..." />
  return <div children={data} />
}
