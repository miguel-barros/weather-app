import api_client from "@/config/api_client"

interface Weather {
  name: string
  main: {
    temp: number
    humidity: number
  }
  weather: {
    main: string
    description: string
  }[]
  wind: {
    speed: number
    deg: number
  }
}

export async function getWeather(city: string) {
  const res = await api_client<Weather>({
    endpoint: `/weather?q=${city}`,
  })

  return res
}
