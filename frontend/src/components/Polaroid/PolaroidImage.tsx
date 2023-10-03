import { useContext, useEffect, useRef, useMemo } from 'react'
import { PolaroidContext } from './PolaroidContainer'
import { ResizedImage } from '../ResizedImage'
import { Box, Flex } from '@chakra-ui/react'

export function PolaroidImage() {
  const polaroidContext = useContext(PolaroidContext)
  const isCompounded = polaroidContext !== undefined

  const previousIndex = useRef(0)

  const imageListRef = useRef<HTMLDivElement>(null)

  const imageSize = useMemo(() => {
    return polaroidContext?.size ?? 0
  }, [polaroidContext?.size])

  useEffect(() => {
    const currentIndex = polaroidContext?.currentIndex
    const size = polaroidContext?.size ?? 0

    if (
      currentIndex === undefined ||
      !imageListRef.current ||
      currentIndex === previousIndex.current
    ) {
      return
    }

    imageListRef.current?.animate(
      {
        transform: [
          `translateX(-${previousIndex.current * size}px)`, // 시작 값
          `translateX(-${currentIndex * size}px)`, // 종료 값
        ],
      },
      {
        duration: 1000,
        fill: 'forwards',
        easing: 'ease',
      }
    )

    previousIndex.current = polaroidContext?.currentIndex ?? 0
  }, [polaroidContext?.currentIndex])

  return (
    <Box
      width={`${imageSize}px`}
      height={`${imageSize}px`}
      overflow="hidden"
      boxShadow="0px 0px 5px 2px rgba(0, 0, 0, 0.09) inset"
    >
      <Flex ref={imageListRef} width="100%" height="100%">
        {isCompounded &&
          polaroidContext.polaroidList?.map((item, index) => {
            return (
              <Box
                minWidth={`${imageSize}px`}
                minHeight={`${imageSize}px`}
                key={index}
              >
                <ResizedImage
                  imageName={item.imageName}
                  alt={item.alt ?? 'polaroid image'}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  width="100%"
                  height="100%"
                />
              </Box>
            )
          })}
      </Flex>
    </Box>
  )
}
