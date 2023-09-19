import React from "react"
import Icon from "../Icon/Icon"

interface SearchDetailsProps {
  humidity: number
  windSpeed: string | number
}

export function SearchDetails({ humidity, windSpeed }: SearchDetailsProps) {
  return (
    <div className="my-10 flex h-20 w-9/12 justify-between">
      <span className="flex items-end gap-3">
        <Icon icon="faWater" size="2xl" />
        <span>
          <p className="text-xl">{humidity}%</p>
          <p className="text-sm">Humidity</p>
        </span>
      </span>
      <span className="flex items-end gap-3">
        <Icon icon="faWind" size="2xl" />
        <span>
          <p className="text-xl">{parseInt(windSpeed as string)}Km/h</p>
          <p className="text-sm">Wind Speed</p>
        </span>
      </span>
    </div>
  )
}
