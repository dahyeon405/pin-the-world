import { styled } from "styled-components";
import { ResizedImage } from "../ResizedImage";
import { motion } from "framer-motion";
import {
  SingleLine,
  BoardContainer,
  TitleSlideIn,
  TextSmallFadeIn,
  ImageFadeIn,
  TextSmall,
} from "../atoms";

export const CopenhagenBoard = () => {
  return (
    <BoardContainer>
      <TitleSlideIn>Copenhagen</TitleSlideIn>
      <SingleLine />
      <ImageContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          margin: "0% 0% -50% 0%",
        }}
      >
        <ResizedImage imageName="IMG_0040.JPG" />
      </ImageContainer>
      <Contents>
        <TextSmallFadeIn style={{ textAlign: "center", marginBottom: "2rem" }}>
          교환학생으로 머물렀던 도시이자,
          <br></br>
          가장 다시 가고 싶은 도시 ✈️
        </TextSmallFadeIn>
        <motion.div
          initial={{ translateX: "-200px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          viewport={{
            margin: "0% 0% -50% 0%",
          }}
        >
          <ResizedImage
            imageName="IMG_4367.JPG"
            style={{ margin: "0px -48px 16px", width: "80%" }}
          />
        </motion.div>
        <TextSmallFadeIn>도시 전체가 알록달록하니 예쁘고,</TextSmallFadeIn>
        <MultipleImageContainer>
          <ImageFadeIn
            imageName="IMG_6172.JPG"
            style={{
              margin: "1rem",
              width: "50%",
              display: "block",
            }}
          />
          <ImageFadeIn
            imageName="IMG_7702.JPG"
            style={{
              width: "90%",
              margin: "-3rem -3rem 0rem auto",
              display: "block",
            }}
          />
          <ImageFadeIn
            imageName="IMG_7484.JPG"
            style={{
              width: "70%",
              margin: "-3rem 0rem 0rem -3rem",
              display: "block",
            }}
          />
        </MultipleImageContainer>
        <TextSmall style={{ textAlign: "center", marginBottom: "2rem" }}>
          매일매일이 그저 평화로웠던 곳 😌
        </TextSmall>
      </Contents>
      <SingleLine />
      <GoToPhotos>
        👇 Click to see <br></br>more pictures<br></br>of Copenhagen
      </GoToPhotos>
      <Button>Copenhagen ✈️</Button>
    </BoardContainer>
  );
};

const Contents = styled.div`
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  margin-top: -5px;
  padding: 1rem;
  position: relative;
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
`;

const MultipleImageContainer = styled.div`
  margin-bottom: 1rem;
`;

const GoToPhotos = styled.div`
  font-family: "Clash Display";
  cursor: pointer;
  font-size: 3rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-family: "Clash Display";
  backdrop-filter: invert(100%);
  -webkit-backdrop-filter: invert(100%);
  color: white;
  display: block;
  margin: 0 auto;
`;
