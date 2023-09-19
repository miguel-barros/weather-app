import axios, {
  type RawAxiosRequestHeaders,
  type AxiosRequestConfig,
} from "axios"
import { API_KEY, API_URL } from "./constants"

export default async function api_client<T>({
  endpoint,
  method = "GET",
  data = {},
  headers = {},
}: API): Promise<T> {
  const config: AxiosRequestConfig = {
    method,
    url: API_URL + endpoint + `&units=metric&appid=${API_KEY}`,
    headers: {
      ...headers,
      ...(method !== "GET" && { "Content-Type": "application/json" }),
      Accept: "application/json",
    } as RawAxiosRequestHeaders,
    data: method !== "GET" ? data : null,
  }
  const response = (await axios(config)).data
  return response as T
}

interface API {
  endpoint: string
  method?: "GET" | "POST" | "PUT" | "DELETE"
  data?: Record<string, unknown> | string
  headers?: Record<string, string> | string[][] | Headers
}
