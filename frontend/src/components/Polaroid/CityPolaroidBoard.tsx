import { CityPolaroid } from './CityPolaroid'
import { type Cities, citiesScrollMap } from '@/constants'

const isCity = (city: string): city is Cities => {
  if (Object.keys(citiesScrollMap).includes(city)) return true
  return false
}

export function CityPolaroidBoard() {
  return (
    <>
      {Object.keys(citiesScrollMap).map((city) => {
        if (!isCity(city)) return null
        return (
          <CityPolaroid
            cityName={city}
            scrollStart={citiesScrollMap[city][0]}
            scrollHeight={800}
            key={city}
          ></CityPolaroid>
        )
      })}
    </>
  )
}
