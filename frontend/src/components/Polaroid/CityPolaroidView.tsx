import { Flex, Button } from '@chakra-ui/react'
import { Polaroid } from './Polaroid'
import { polaroidsMap } from '@/constants/cityPolaroid'
import { type Cities } from '@/constants'

export function CityPolaroidView({
  cityName,
  onClickTitle,
}: {
  cityName: Cities
  onClickTitle: () => void
}) {
  return (
    <Flex align="center" direction="column" width="100%">
      <Flex justify="left" align="center" mb="-2" width="100%">
        <Button
          fontSize="3xl"
          fontWeight="300"
          color="white"
          fontFamily="Clash Display"
          textAlign="center"
          background="transparent"
          onClick={onClickTitle}
        >
          {cityName}
        </Button>
        {/* <Text fontFamily="Clash Display" fontSize="sm" color="white">
          👈 Click
        </Text> */}
      </Flex>

      <Polaroid polaroidList={polaroidsMap[cityName]} size={300}></Polaroid>
    </Flex>
  )
}
