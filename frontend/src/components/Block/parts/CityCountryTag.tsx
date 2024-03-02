import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

export function CityCountrytag({
  city,
  country,
}: {
  city?: string
  country?: string
}) {
  const countryEmojiMap = {
    Denmark: '🇩🇰',
    France: '🇫🇷',
    Germany: '🇩🇪',
    Italy: '🇮🇹',
    Japan: '🇯🇵',
    Korea: '🇰🇷',
    USA: '🇺🇸',
    Czech: '🇨🇿',
    Iceland: '🇮🇸',
  }

  const countryEmoji =
    country ?? '' in Object.keys(countryEmojiMap)
      ? countryEmojiMap[country as keyof typeof countryEmojiMap]
      : ''

  return (
    <Link to={`/photos?city=${city}&title=${city}`}>
      <Text
        fontFamily="Clash Display"
        fontSize="sm"
        background="red.50"
        px="8px"
        borderRadius="20px"
        whiteSpace="nowrap"
      >
        {countryEmoji} {city}
      </Text>
    </Link>
  )
}
