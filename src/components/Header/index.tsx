import { Logo } from "./Logo";
import { Box, Flex } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {

  const navigate = useNavigate();

  // Safari 에서는 Link 태그 안의 이미지가 렌더링되지 않는 이슈가 있어서
  // Button 컴포넌트로 변경, 클릭 시 navigate('/') 실행
  const onClickLogo = () => {
    navigate('/');
  }

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
      <Box as="button" height={'100%'} backgroundColor={'transparent'} px="0" onClick={onClickLogo}>
        <Logo />
      </Box>
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
