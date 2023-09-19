"use client"
import React, { createContext, useState } from "react"

interface LocationContextProps {
  location: string
  setLocation: (location: string) => void
  useLocation: () => void
  currentLocation: string
  setCurrentLocation: (currentLocation: string) => void
}

export const LocationContext = createContext({} as LocationContextProps)

export const useLocation = () => React.useContext(LocationContext)

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState("")

  const [currentLocation, setCurrentLocation] = useState("")

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
