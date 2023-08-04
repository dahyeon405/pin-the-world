import { Box } from "@chakra-ui/react";

export function MenuAccordionPanelItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box fontFamily="Clash Display" textAlign="left" h="8">
      {children}
    </Box>
  );
}
