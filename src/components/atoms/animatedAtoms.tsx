import { motion } from "framer-motion";
import { ResizedImage } from "../ResizedImage";
import styled from "styled-components";

export const TextSmall = styled(motion.div)`
  font-size: 0.9rem;
`;

export const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 400;
  padding-left: 1rem;
  font-family: "Clash Display";
`;

export const ImageFadeIn = ({
  style,
  imageName,
}: {
  style?: any;
  imageName: string;
}) => {
  return (
    <motion.span
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{
        margin: "0% 0% -40% 0%",
      }}
    >
      <ResizedImage imageName={imageName}></ResizedImage>
    </motion.span>
  );
};

export const TitleSlideIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <Title
      initial={{ translateY: "-38px", opacity: 1 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{
        margin: "0% 0% -40% 0%",
      }}
    >
      {children}
    </Title>
  );
};

export const TextSmallFadeIn = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) => {
  return (
    <TextSmall
      initial={{ opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{
        margin: "0% 0% -40% 0%",
      }}
      style={style}
    >
      {children}
    </TextSmall>
  );
};
