import { Search } from "@/components/Search"
import React from "react"

export default function Home() {
  return (
    <Search.Root>
      <Search.Bar />
      <Search.Status temperature={0} description="404" />
      <Search.Details humidity={0} windSpeed={0} />
    </Search.Root>
  )
}
