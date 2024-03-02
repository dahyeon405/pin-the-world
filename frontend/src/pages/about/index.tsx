import { ResizedImage } from '@/components/ResizedImage'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function AboutPage() {
  return (
    <Box px="6" py="16">
      <Heading as="h1" fontWeight="400" size="4xl" mb="8">
        About
      </Heading>

      <ResizedImage
        imageName="IMG_5211.png"
        alt="about"
        width="168px"
        height="168px"
        objectFit="cover"
        borderRadius="1000"
      />

      <Text fontSize="sm" mt="8" fontFamily="Clash Display">
        Frontend Developer
      </Text>
    </Box>
  )
}
