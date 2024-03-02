import { CityCountrytag } from '@/components/Block/parts/CityCountryTag'
import { PageTitle } from '@/components/Page/parts/PageTitle'
import { cityPins } from '@/constants/pins'
import { Box, Flex } from '@chakra-ui/react'

const flattenCityPins = cityPins.flatMap(({ country, city }) =>
  city.map((c) => ({ country, city: c }))
)

export default function PinsPage() {
  return (
    <>
      <Box px="6" mb="8" mt="16">
        <PageTitle title={'Pins'} />
      </Box>

      <Flex gap="4" px="6" flexWrap="wrap">
        {flattenCityPins.map(({ country, city }) => (
          <Box width="fit-content" key={`${country}-${city}`}>
            <CityCountrytag city={city} country={country} />
          </Box>
        ))}
      </Flex>
    </>
  )
}
