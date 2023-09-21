import { Weather } from "./weather"

export interface SearchContextProps {
  search: string
  setSearch: (search: string) => void
  location: Weather
  setLocation: (location: Weather) => void
  handleSearch: () => void
}
