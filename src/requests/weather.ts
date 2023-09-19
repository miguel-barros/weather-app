import api_client from "@/config/api_client"
import { type Weather } from "@/types/weather"

export async function getWeather(city: string) {
  const res = await api_client<Weather>({
    endpoint: `/weather?q=${city}`,
  }).catch((err) => {
    return err.response.status
  })

  return res
}
