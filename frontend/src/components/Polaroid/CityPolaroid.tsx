import { type Cities } from '@/constants'
import { useEffect, useState } from 'react'
import { useScroll } from '@/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { Flex } from '@chakra-ui/react'
import { CityPolaroidView } from './CityPolaroidView'

export function CityPolaroid({
  cityName,
  scrollStart,
  scrollHeight,
}: {
  cityName: Cities
  scrollStart: number
  scrollHeight: number
}) {
  const { y: scrollY } = useScroll(100)

  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    if (scrollY > scrollStart && scrollY < scrollHeight + scrollStart) {
      setIsShown(true)
    } else setIsShown(false)
  }, [scrollY])

  return (
    <AnimatePresence>
      {isShown && (
        <Flex
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          pos="fixed"
          top="20"
          align="center"
          direction="column"
          width="100%"
        >
          <CityPolaroidView cityName={cityName} onClickTitle={() => {}} />
        </Flex>
      )}
    </AnimatePresence>
  )
}
