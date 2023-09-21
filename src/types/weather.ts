export interface Weather {
  name: string
  main: {
    temp: string
    humidity: number
  }
  weather: {
    main: string
    description: string
  }[]
  wind: {
    speed: string
    deg: number
  }
}
