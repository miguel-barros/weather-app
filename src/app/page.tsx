"use client"
import { Search } from "@/components/Search"
import { useLocation } from "@/contexts/locationContext"
import React from "react"

export default function Home() {
  const { currentLocation } = useLocation()

  return (
    <Search.Root>
      <Search.Bar />
      {currentLocation?.name?.length > 0 && (
        <>
          <Search.Status
            temperature={currentLocation.main.temp}
            description={currentLocation.weather[0].main}
          />
          <Search.Details
            humidity={currentLocation.main.humidity}
            windSpeed={currentLocation.wind.speed}
          />
        </>
      )}
    </Search.Root>
  )
}
