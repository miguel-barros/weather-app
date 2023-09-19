import { Search } from "@/components/Search"
import React from "react"

export default function Home() {
  return (
    <Search.Root>
      <Search.Bar />
      <Search.Status temperature={29} description="Clear" />
      <Search.Details humidity={90} windSpeed={80} />
    </Search.Root>
  )
}
