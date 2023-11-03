import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react'
import githubIcon from '@/assets/icons/github-icon.svg'

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
        여행 ✈️, 사진 📷, 음악 🎧을 좋아하는 <br />
        프론트엔드 개발자입니다
      </Text>

      <Heading as="h2" fontSize="lg" fontWeight="500" mt="8">
        Github
      </Heading>

      <Flex mt="3">
        <img src={githubIcon} width={24} alt="instagram icon" />
        <Link
          href={'https://github.com/dahyeon405'}
          fontFamily="Clash Display"
          textDecoration="underline"
          ml="2"
        >
          @dahyeon405
        </Link>
      </Flex>

      <Text fontSize="sm" mt="8">
        방문해주셔서 감사합니다 🤗
      </Text>

      <Text fontSize="sm" mt="2" fontFamily="Clash Display">
        2023.08.05 dahyeon
      </Text>
    </Box>
  )
}
