import { motion } from 'framer-motion'
import { Flex, Text, keyframes } from '@chakra-ui/react'
import arrowDown from '@/assets/arrow-down.svg'
import { useScroll } from '@/hooks'
import { useEffect, useRef, useState } from 'react'

export function ScrollDownIndicator(props: any) {
  const { y: scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(true)
  const timeoutId = useRef<any>(null)

  // 처음에 나타나고, 이후 스크롤 3초 이상 안 움직이면 나타남
  useEffect(() => {
    if (scrollY === 0) {
      setIsVisible(true)
      return
    }

    setIsVisible(false)

    // 맨 아래에서는 나타나지 않음
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight) {
      return
    }

    timeoutId.current = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => {
      clearTimeout(timeoutId.current)
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
