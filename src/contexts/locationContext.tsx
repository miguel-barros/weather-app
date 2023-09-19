"use client"
import { type Weather } from "@/types/weather"
import React, { createContext, useState } from "react"

interface LocationContextProps {
  location: string
  setLocation: (location: string) => void
  useLocation: () => void
  currentLocation: Weather
  setCurrentLocation: (currentLocation: Weather) => void
}

export const LocationContext = createContext({} as LocationContextProps)

export const useLocation = () => React.useContext(LocationContext)

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState("")

  const [currentLocation, setCurrentLocation] = useState<Weather>({} as Weather)

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        useLocation,
        currentLocation,
        setCurrentLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
