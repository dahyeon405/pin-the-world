import { type ReactNode, createContext, useState } from 'react'
import { Flex } from '@chakra-ui/react'

export interface PolaroidContextValue {
  polaroidList?: PolaroidItem[]
  currentIndex?: number
  onNext?: () => void
  onPrev?: () => void
  size?: number
}

export interface PolaroidItem {
  imageName: string
  description: string
  alt?: string
}

export const PolaroidContext = createContext<PolaroidContextValue | undefined>({
  currentIndex: 0,
})

export function PolaroidContainer({
  children,
  polaroidList,
  size,
}: {
  children?: ReactNode
  polaroidList: PolaroidItem[]
  size: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = () => {
    if (currentIndex >= polaroidList.length - 1) return
    setCurrentIndex(currentIndex + 1)
  }

  const onPrev = () => {
    if (currentIndex <= 0) return
    setCurrentIndex(currentIndex - 1)
  }

  return (
    <Flex
      direction="column"
      justify="center"
      pos="relative"
      backgroundColor="white"
      p="3"
      filter="drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1))"
    >
      <PolaroidContext.Provider
        value={{ currentIndex, onNext, onPrev, polaroidList, size }}
      >
        {children}
      </PolaroidContext.Provider>
    </Flex>
  )
}
