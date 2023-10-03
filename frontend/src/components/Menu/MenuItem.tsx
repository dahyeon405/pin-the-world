import { Button } from '@chakra-ui/react'

export function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <Button
      fontFamily="Clash Display"
      backgroundColor="transparent"
      fontWeight="normal"
      width="100%"
      borderRadius="0"
      textAlign="left"
      justifyContent="flex-start"
    >
      {children}
    </Button>
  )
}
