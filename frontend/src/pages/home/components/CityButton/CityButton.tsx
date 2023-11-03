import { type Cities } from '@/constants'
import { Button } from '@chakra-ui/react'

export function CityButton(props: {
  cityName: Cities
  onClick: () => void
  [key: string]: any
}) {
  const { cityName, onClick, ...rest } = props

  return (
    <Button
      fontWeight="400"
      size="md"
      fontFamily="Clash Display"
      border="1px"
      borderRadius="24px"
      borderColor="gray.600"
      backgroundColor="white"
      onClick={onClick}
      {...rest}
    >
      {cityName}
    </Button>
  )
}
