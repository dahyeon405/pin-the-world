import { Heading } from '@chakra-ui/react'

export function PageTitle({ title }: { title: string }) {
  const parsedTitle = title
    .split('\\n')
    .map((str) => str.trim())
    .join('\n')

  return (
    <Heading as="h1" fontWeight="400" size="3xl" whiteSpace="pre-line">
      {parsedTitle}
    </Heading>
  )
}
