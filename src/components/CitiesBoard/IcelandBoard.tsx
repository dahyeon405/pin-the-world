import { styled } from "styled-components";
import { BoardContainer, TitleSlideIn, SingleLine } from "../atoms";
import { motion } from "framer-motion";
import { ResizedImage } from "../ResizedImage";

export function IcelandBoard() {
  return (
    <BoardContainer>
      <TitleSlideIn>Iceland</TitleSlideIn>
      <SingleLine />
      <ImageContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          margin: "0% 0% -50% 0%",
        }}
      >
        <ResizedImage imageName="IMG_2224.JPG" />
      </ImageContainer>
    </BoardContainer>
  );
}

const ImageContainer = styled(motion.div)`
  width: 100%;
`;
