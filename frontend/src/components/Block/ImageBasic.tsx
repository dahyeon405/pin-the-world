import { Box, Text } from '@chakra-ui/react'
import { DetailText, Location } from './parts'
import { AnimatedImage } from '@/components/Block/parts/AnimatedImage.tsx'
import { type Image } from '@/requests/types/imageResponse'

export function ImageBasic({ data, ratio }: { data: Image; ratio: number }) {
  return (
    <Box>
      <AnimatedImage
        ratio={ratio}
        imageName={data.name ?? ''}
        alt={data.title}
      />

      <Box px="6" mt="3" mb="10">
        <Location locationName={data.location} locationUrl={data.locationUrl} />
        <DetailText text={data.description ?? ''} />
      </Box>
      <Text align="center" my="3" fontSize="sm" whiteSpace="pre-line">
        ➿
      </Text>
    </Box>
  )
}

export function ImageHorizontal({ data }: { data: Image }) {
  return <ImageBasic ratio={0.5625} data={data} />
}

export function ImageVertical({ data }: { data: Image }) {
  return <ImageBasic ratio={1.33} data={data} />
}

export function ImageSquare({ data }: { data: Image }) {
  return <ImageBasic ratio={1} data={data} />
}
