import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Box, Flex } from "@chakra-ui/react";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <Flex
      pos="fixed"
      top="0"
      zIndex="4"
      width="100%"
      height="56px"
      px="6"
      py="4"
      justify="space-between"
      backdropFilter="blur(2px)"
    >
      <Link to="/">
        <Logo />
      </Link>
      <Box
        as="button"
        my="auto"
        fontFamily="Clash Display"
        lineHeight="24px"
        onClick={onMenuClick}
      >
        Menu
      </Box>
    </Flex>
  );
}
