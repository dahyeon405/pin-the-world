import { Text } from '@chakra-ui/react'
import { Polaroid } from './Polaroid'
import { polaroidsMap } from '@/constants/cityPolaroid'
import { type Cities } from '@/constants'

export function CityPolaroidView({ cityName }: { cityName: Cities }) {
  return (
    <>
      <Text fontSize="5xl" fontWeight="300" mb="-5" fontFamily="Clash Display">
        {cityName}
      </Text>
      <Polaroid polaroidList={polaroidsMap[cityName]} size={300}></Polaroid>
    </>
  )
}
