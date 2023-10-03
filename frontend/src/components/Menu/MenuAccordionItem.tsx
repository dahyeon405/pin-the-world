import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
} from '@chakra-ui/react'

export function MenuAccordionItem({
  children,
  text,
}: {
  children: React.ReactElement[] | React.ReactElement
  text: string
}) {
  return (
    <AccordionItem border={0}>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" fontFamily="Clash Display">
            {text}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      {children}
    </AccordionItem>
  )
}
