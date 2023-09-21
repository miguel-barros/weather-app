import React from "react"
import Icon from "../Icon/Icon"
import { useSearch } from "@/contexts/searchContext"

export function SearchDetails() {
  const { main, wind } = useSearch().location
  if (!main || !wind) return null

  return (
    <div className="my-10 flex h-20 w-9/12 justify-between">
      <span className="flex items-end gap-3">
        <Icon icon="faWater" size="2xl" />
        <span>
          <p className="text-xl">{main?.humidity | 0}%</p>
          <p className="text-sm">Humidity</p>
        </span>
      </span>
      <span className="flex items-end gap-3">
        <Icon icon="faWind" size="2xl" />
        <span>
          <p className="text-xl">{wind?.speed}Km/h</p>
          <p className="text-sm">Wind Speed</p>
        </span>
      </span>
    </div>
  )
}
