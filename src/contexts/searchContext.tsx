"use client"
import React, { useContext, createContext, useState } from "react"
import { getWeather } from "@/requests/weather"
import { type SearchContextProps } from "@/types/search"
import { type Weather } from "@/types/weather"

export const SearchContext = createContext({} as SearchContextProps)

export const useSearch = () => useContext(SearchContext)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState<string>("")
  const [location, setLocation] = useState<Weather>({} as Weather)

  const handleSearch = async () =>
    getWeather(search).then((res) => setLocation(res))

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        location,
        setLocation,
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
