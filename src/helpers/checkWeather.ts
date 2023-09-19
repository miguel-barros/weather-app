export default function checkWeather(weather: string) {
  if (weather === "clear") {
    return "clear"
  }
  if (weather === "cloud") {
    return "cloud"
  }
  if (weather === "mist") {
    return "mist"
  }
  if (weather === "rain") {
    return "rain"
  }
  if (weather === "snow") {
    return "snow"
  }
  return "404"
}
