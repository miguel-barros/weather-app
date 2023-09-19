export interface Weather {
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
