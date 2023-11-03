import { type Cities, cityCoordinates } from '@/constants'
import { CityButton } from './CityButton'
import { AnimateHorizontal } from './AnimateHorizontal'
import { Flex, Text, Box, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const buttonSize = 240

export function CityButtonGroup(props: {
  onClick: (cityName: Cities) => void
  [key: string]: any
}) {
  const { onClick, ...rest } = props

  const animationDelay = [30, 2500, 1000, 4000]

  const bounceKeyFrames = keyframes`
    0% { transform:translateY(0%); }
    40% { transform:translateY(-15%); }
    60% { transform:translateY(0%); }
    80% { transform:translateY(-7%); }
    100% { transform:translateY(0%); }
  `

  const animation = `${bounceKeyFrames} 1.2s ease infinite`

  return (
    <Box {...rest} textAlign="center">
      <Flex direction="column">
        {Object.keys(cityCoordinates).map((cityName, index) => {
          return (
            <AnimateHorizontal
              key={cityName}
              delay={animationDelay[index]}
              size={buttonSize}
            >
              <CityButton
                cityName={cityName as Cities}
                w={buttonSize}
                onClick={() => {
                  onClick(cityName as Cities)
                }}
                my="4px"
                py="16px"
              ></CityButton>
            </AnimateHorizontal>
          )
        })}
      </Flex>
      <Text
        as={motion.div}
        fontSize="16px"
        fontWeight="400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: '-50px' }}
        animation={animation}
        mt="24px"
        fontFamily="Clash Display"
        fontStyle="italic"
      >
        탐험할 도시를 골라주세요 👆🌎
      </Text>
    </Box>
  )
}
