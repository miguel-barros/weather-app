"use client"
import React, { useContext, createContext, useState } from "react"
import { getWeather } from "@/requests/weather"
import { type SearchContextProps } from "@/types/search"
import { type Weather } from "@/types/weather"
import { toast } from "react-toastify"

export const SearchContext = createContext({} as SearchContextProps)

export const useSearch = () => useContext(SearchContext)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState<string>("")
  const [location, setLocation] = useState<Weather>({} as Weather)

  const handleSearch = async () =>
    getWeather(search)
      .then((res) => {
        setLocation(res)
        toast.success(`${res.name} weather has been updated`)
      })
      .catch(() =>
        toast.error(
          "It appears there was a problem searching for the city mentioned. Try again",
        ),
      )

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
