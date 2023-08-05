import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";
import { ResizedImage } from "@/components/ResizedImage";
import youtubeIcon from "@/assets/icons/youtube-icon.svg";
import instagramIcon from "@/assets/icons/instagram-icon.svg";

export default function AboutPage() {
  return (
    <Box px="6" py="16">
      <Heading as="h1" fontWeight="400" size="4xl">
        About
      </Heading>

      <Text fontSize="sm" mt="8">
        음악과 여행과 사진을 사랑하는 <br /> 낭만파 개발자가 만든 페이지입니다
        😇 <br />
        <br />
        공간의 자유가 허락하는 곳에서 <br />
        일과 삶의 균형을 찾기를 꿈꾸고 있습니다 🤸‍♀️ <br />
        <br />
        (업데이트를 안 한 지 오래됐지만) <br />
        음악 유튜브도 운영 중이에요!
      </Text>

      <Link href={"https://www.youtube.com/@twntytw22"}>
        <Flex
          border="1px"
          borderColor="gray.200"
          borderRadius="16px"
          mt="8"
          px="6"
          py="3"
        >
          <ResizedImage
            imageName={"thumbnailyoutube.png"}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "100px",
              objectFit: "cover",
            }}
            alt="youtube thumbnail"
          />

          <Flex ml="5" my="auto">
            <img src={youtubeIcon} width={24} alt="youtube icon" />
            <Text fontFamily="Clash Display" ml="2">
              twentytwo
            </Text>
          </Flex>
        </Flex>
        <Text
          fontSize="xs"
          mt="2"
          align="center"
          color="gray.600"
          fontStyle="italic"
        >
          클릭해서 이동하기
        </Text>
      </Link>
      <Text fontSize="sm" mt="12">
        사진이 마음에 드셨다면 <br />
        인스타그램에도 놀러오세요 🤗
      </Text>

      <Flex mt="3">
        <img src={instagramIcon} width={24} alt="instagram icon" />
        <Link
          href={"https://www.instagram.com/twntytw_22/"}
          fontFamily="Clash Display"
          textDecoration="underline"
          ml="2"
        >
          @twntytw_22
        </Link>
      </Flex>

      <Text fontSize="sm" my="12">
        방문해주셔서 감사합니다. <br />
        좋은 하루 되세요 🍀
      </Text>

      <ResizedImage imageName={"000071560034.jpg"} />
      <Text
        fontSize="xs"
        mt="2"
        align="center"
        color="gray.600"
        fontStyle="italic"
      >
        마무리는 울창한 2023년 여름의 연남동 사진으로
      </Text>

      <Text fontSize="sm" mt="12" mb="2" fontFamily="Clash Display">
        2023.08.05 dahyeon
      </Text>
    </Box>
  );
}
