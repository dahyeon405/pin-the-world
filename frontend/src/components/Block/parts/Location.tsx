import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function Location({
  locationUrl,
  locationName,
}: {
  locationUrl?: string
  locationName?: string
}) {
  return (
    <>
      {locationUrl && (
        <Flex flexDirection="row-reverse">
          <Link
            to={locationUrl}
            rel="external"
            aria-labelledby={`open ${locationName} on google map`}
          >
            <Text as="span">📍</Text>
            <Text
              as="span"
              fontFamily="Clash Display"
              align="right"
              fontSize="sm"
              textDecoration="underline"
            >
              {locationName ?? '구글 맵에서 보기'}
            </Text>
          </Link>
        </Flex>
      )}
    </>
  )
}
