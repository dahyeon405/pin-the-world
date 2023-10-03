import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react'
import { ResizedImage } from '@/components/ResizedImage'
import youtubeIcon from '@/assets/icons/youtube-icon.svg'
import instagramIcon from '@/assets/icons/instagram-icon.svg'

export default function AboutPage() {
  return (
    <Box px="6" py="16">
      <Heading as="h1" fontWeight="400" size="4xl">
        About
      </Heading>

      <Heading as="h2" fontSize="lg" fontWeight="500" mt="8">
        About me
      </Heading>
      <Text fontSize="sm" mt="2">
        A frontend developer <br />
        who loves to travel and take photos
      </Text>

      <Heading as="h2" fontSize="lg" fontWeight="500" mt="8">
        Youtube channel
      </Heading>

      <Link href={'https://www.youtube.com/@twntytw22'}>
        <Flex
          border="1px"
          borderColor="gray.200"
          borderRadius="16px"
          mt="2"
          px="6"
          py="3"
        >
          <ResizedImage
            imageName={'thumbnailyoutube.png'}
            width="60px"
            height="60px"
            borderRadius="100px"
            objectFit="cover"
            alt="youtube thumbnail"
          />

          <Flex ml="5" my="auto">
            <img src={youtubeIcon} width={24} alt="youtube icon" />
            <Text fontFamily="Clash Display" ml="2">
              twentytwo
            </Text>
          </Flex>
        </Flex>
        {/* <Text */}
        {/*  fontSize="xs" */}
        {/*  mt="2" */}
        {/*  align="center" */}
        {/*  color="gray.600" */}
        {/*  fontStyle="italic" */}
        {/* > */}
        {/*  클릭해서 이동하기 */}
        {/* </Text> */}
      </Link>

      <Heading as="h2" fontSize="lg" fontWeight="500" mt="8">
        Instagram
      </Heading>

      <Flex mt="3">
        <img src={instagramIcon} width={24} alt="instagram icon" />
        <Link
          href={'https://www.instagram.com/twntytw_22/'}
          fontFamily="Clash Display"
          textDecoration="underline"
          ml="2"
        >
          @twntytw_22
        </Link>
      </Flex>

      <Text fontSize="sm" my="12">
        Thank you for visiting my website 🤗
      </Text>

      <Text fontSize="sm" mt="24" fontFamily="Clash Display">
        2023.08.05 dahyeon
      </Text>
    </Box>
  )
}
