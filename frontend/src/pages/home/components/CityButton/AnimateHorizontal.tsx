import { Box, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export function AnimateHorizontal({
  delay,
  size,
  children,
}: {
  delay: number
  size: number
  children: React.ReactNode
}) {
  const animateHorizontalKeyFrames = keyframes`
    0% { transform:translateX(calc(100vw + ${size / 2 + 30}px)); opacity: 1; }
    97% { transform:translateX(-${size}px); opacity: 1; }
    98% { transform:translateX(-${size}px); opacity: 0; }
    99% { transform:translateX(calc(100vw + ${size / 2 + 30}px)); opacity: 0; }
    100% { transform:translateX(calc(100vw + ${size / 2 + 30}px)); opacity: 1;}
  `

  const animation = `${animateHorizontalKeyFrames} 8s ${delay}ms infinite linear both`

  return (
    <Box as={motion.div} animation={animation} w="fit-content">
      {children}
    </Box>
  )
}
