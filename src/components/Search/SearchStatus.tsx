import React from "react"
import Image from "next/image"
import { useSearch } from "@/contexts/searchContext"
import checkWeather from "@/helpers/checkWeather"

export function SearchStatus() {
  const { main, weather } = useSearch().location
  if (!main || !weather) return null

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={`/assets/${checkWeather(weather[0]?.main)}.png`}
        alt="Status image"
        width={180}
        height={180}
      />
      <div className="mt-5 flex flex-col gap-3">
        <p className="flex items-start text-6xl font-bold">
          {parseInt(main?.temp) | 0}
          <span>
            <span className="absolute flex text-start text-sm">
              º <span className="self-end text-xl">C</span>
            </span>
          </span>
        </p>
        <p className="text-md text-center">{weather[0]?.description}</p>
      </div>
    </div>
  )
}
