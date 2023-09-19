"use client"
import { Search } from "@/components/Search"
import { useLocation } from "@/contexts/locationContext"
import React from "react"

export default function Home() {
  const { currentLocation } = useLocation()

  return (
    <Search.Root>
      <Search.Bar />
      {currentLocation.length > 0 && (
        <>
          <Search.Status temperature={0} description="404" />
          <Search.Details humidity={0} windSpeed={0} />
        </>
      )}
    </Search.Root>
  )
}
