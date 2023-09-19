export default function checkWeather(weather: string) {
  switch (weather) {
    case "Clear":
      return "clear"
    case "Rain":
      return "rain"
    case "Snow":
      return "snow"
    case "Clouds":
      return "cloud"
    case "Mist":
      return "mist"
    default:
      return "404"
  }
}
