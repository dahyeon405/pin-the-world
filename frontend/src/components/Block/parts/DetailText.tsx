import { parseNewline } from '@/components/Block/utils/parseNewline.ts'
import { Text } from '@chakra-ui/react'

export function DetailText({ text }: { text: string }) {
  return (
    <Text align="center" pt="4" fontSize="sm" whiteSpace="pre-line">
      {parseNewline(text ?? '')}
    </Text>
  )
}
