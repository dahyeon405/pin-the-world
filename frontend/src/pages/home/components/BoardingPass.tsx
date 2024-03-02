import { type Cities, cityCoordinates } from '@/constants'
import { cityPins, countryEmojiMap } from '@/constants/pins'
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const tickerVariants = {
  ticker: {
    backgroundColor: '#E0E0E0',
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
  initial: {
    backgroundColor: '#fff',
  },
}

const boardingPassVariants = {
  hide: {
    translateY: 200,
    transition: {
      type: 'spring',
      duration: 1.5,
    },
  },
  initial: {
    translateY: 30,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
}

export function BoardingPass({
  onSelect,
  show,
}: {
  onSelect: (cityName: Cities) => void
  show: boolean
}) {
  const today = new Date()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSelectCity = (cityName: Cities) => {
    onSelect(cityName)
  }

  return (
    <>
      <CitySelectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        onSelect={onSelectCity}
      />

      <Box
        px="8"
        pos="absolute"
        bottom="0"
        left="0"
        width="100%"
        zIndex="3"
        overflow="hidden"
        paddingTop="100"
      >
        <Flex
          as={motion.div}
          direction="column"
          backgroundColor="#ffffff"
          width="100%"
          height="300px"
          border="1px solid #A0A0A0"
          borderRadius="20"
          px="4"
          py="2"
          variants={boardingPassVariants}
          animate={show ? 'hide' : 'initial'}
        >
          <Flex justify="space-between" width="100%" alignItems="center">
            <Box fontFamily="Clash Display" fontWeight="600" fontSize="12">
              PIN THE WORLD AIR
            </Box>
            <Flex direction="column">
              <Box fontSize="12" fontWeight="400" fontFamily="Clash Display">
                BOARDING OPENS
              </Box>
              <Box
                fontSize="16"
                fontWeight="400"
                fontFamily="Clash Display"
                lineHeight="1"
              >
                {today.getMonth() + 1}/{today.getDate()} {today.getHours() + 2}
                :00
              </Box>
            </Flex>
          </Flex>

          <Flex justify="space-between" width="100%" alignItems="center" mt="2">
            <Box fontSize="12" fontFamily="Clash Display" flex="1">
              <Box fontSize="12" fontFamily="Clash Display">
                INCHEON
              </Box>
              <Box fontSize="32" fontFamily="Clash Display" lineHeight="1">
                ICN
              </Box>
            </Box>
            <Box fontSize="60">✈︎</Box>
            <Box fontSize="12" fontFamily="Clash Display" flex="1">
              <Flex alignItems="center" gap="3" justifyContent="flex-end">
                <Flex
                  alignItems="center"
                  gap="3"
                  justifyContent="flex-end"
                  px="2"
                  borderRadius="8"
                  as={motion.button}
                  initial="initial"
                  variants={tickerVariants}
                  animate="ticker"
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                >
                  <Flex direction="column">
                    <Box fontSize="12" fontFamily="Clash Display">
                      DEST.
                    </Box>
                    <Box
                      fontSize="32"
                      fontFamily="Clash Display"
                      lineHeight="1"
                    >
                      ???
                    </Box>
                  </Flex>
                  <Box fontSize="24">▾</Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>

          <Flex justify="space-between" width="100%" alignItems="center" mt="2">
            <Box flex="1">
              <Box fontSize="12" fontFamily="Clash Display">
                FLIGHT
              </Box>
              <Box fontSize="16" fontFamily="Clash Display" lineHeight="1">
                FI212
              </Box>
            </Box>
            <Flex direction="row" justify="space-between" flex="1">
              <Box>
                <Box fontSize="12" fontFamily="Clash Display">
                  DEPARTURE
                </Box>
                <Box fontSize="16" fontFamily="Clash Display" lineHeight="1">
                  {today.getHours() + 2}:40
                </Box>
              </Box>
              <Box>
                <Box fontSize="12" fontFamily="Clash Display">
                  GATE
                </Box>
                <Box fontSize="16" fontFamily="Clash Display" lineHeight="1">
                  45
                </Box>
              </Box>
            </Flex>
          </Flex>

          <Flex justify="space-between" width="100%" alignItems="center" mt="4">
            <Box flex="1">
              <Box fontSize="12" fontFamily="Clash Display">
                SEAT
              </Box>
              <Box fontSize="16" fontFamily="Clash Display" lineHeight="1">
                3A
              </Box>
            </Box>
            <Flex direction="row" justify="space-between" flex="1">
              <Box>
                <Box fontSize="12" fontFamily="Clash Display">
                  CLASS
                </Box>
                <Box fontSize="16" fontFamily="Clash Display" lineHeight="1">
                  BUSINESS CLASS
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

const cityWithEmoji = Object.keys(cityCoordinates).map((cityName) => {
  const country = cityPins.find((pin) => pin.city.includes(cityName as never))
    ?.country
  const emoji = country ? countryEmojiMap[country] : ''

  return {
    emoji,
    cityName,
  }
})

function CitySelectModal({
  isOpen,
  onClose,
  onSelect,
}: {
  isOpen: boolean
  onClose: () => void
  onSelect: (cityName: Cities) => void
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent py="2" width="fit-content">
        <ModalHeader fontSize="14" fontWeight="500" pb="2">
          탐험할 도시를 선택하세요 🌎
        </ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <Flex
            direction="column"
            gap="1"
            borderTop="1px solid #E0E0E0"
            pt="4"
            pr="20"
          >
            {cityWithEmoji.map(({ cityName, emoji }, index) => {
              return (
                <Box
                  as="button"
                  key={index}
                  fontFamily="Clash Display"
                  fontSize="16"
                  onClick={() => {
                    onClose()
                    onSelect(cityName as Cities)
                  }}
                >
                  {emoji} {cityName}
                </Box>
              )
            })}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
