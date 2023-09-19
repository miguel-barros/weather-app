"use client"
import React from "react"
import Icon from "../Icon/Icon"
import { useLocation } from "@/contexts/locationContext"
import { getWeather } from "@/requests/weather"

export function SearchBar() {
  const { location, setLocation, setCurrentLocation } = useLocation()

  const handleSearch = async () => {
    const res = await getWeather(location)
    setCurrentLocation(res)
  }

  return (
    <div className="flex w-full items-center justify-center gap-5 rounded-xl bg-white p-10">
      <Icon icon={"faLocationDot"} />
      <input
        className="text-md w-full outline-none"
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <span
        className="group cursor-pointer rounded-full bg-[#dff6ff] p-3 duration-300 hover:bg-[#06283D]"
        onClick={handleSearch}
      >
        <Icon
          icon={"faMagnifyingGlass"}
          className="duration-200 group-hover:text-white"
        />
      </span>
    </div>
  )
}
