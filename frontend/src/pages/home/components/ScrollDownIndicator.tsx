import { motion } from 'framer-motion'
import { Flex, Text, keyframes } from '@chakra-ui/react'
import arrowDown from '@/assets/arrow-down.svg'
import { useScroll } from '@/hooks'
import { useState, useEffect } from 'react'

export function ScrollDownIndicator(props: any) {
  const { y: scrollY } = useScroll(100)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (scrollY > 100) {
      setIsVisible(false)
    } else if (scrollY <= 100) {
      setIsVisible(true)
    }
  }, [scrollY])

  const bounceKeyFrames = keyframes`
    0% { transform:translateY(0%); }
    40% { transform:translateY(-15%); }
    60% { transform:translateY(0%); }
    80% { transform:translateY(-7%); }
    100% { transform:translateY(0%); }
  `

  const animation = `${bounceKeyFrames} 1.2s ease infinite`

  return (
    <>
      {isVisible && (
        <Flex
          as={motion.div}
          direction="column"
          align="center"
          gap="1rem"
          {...props}
          animation={animation}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          w="100%"
          viewport={{ margin: '0px' }}
        >
          <Text
            fontSize="1xl"
            fontWeight="400"
            mb="-5"
            fontFamily="Clash Display"
            align="center"
          >
            Scroll Down
          </Text>
          <img src={arrowDown} alt="arrow-down" style={{ height: '1.5rem' }} />
        </Flex>
      )}
    </>
  )
}
