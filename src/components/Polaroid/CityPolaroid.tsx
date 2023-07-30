import { polaroidsMap } from "@/constants/cityPolaroid";
import { Polaroid } from "./Polaroid";
import styled from "styled-components";
import { Cities } from "@/constants";
import { useEffect, useState } from "react";
import { useScroll } from "@/hooks";
import { AnimatePresence, motion } from "framer-motion";

export function CityPolaroid({
  cityName,
  scrollStart,
  scrollHeight,
}: {
  cityName: Cities;
  scrollStart: number;
  scrollHeight: number;
}) {
  const { y: scrollY } = useScroll(300);

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (scrollY > scrollStart && scrollY < scrollHeight + scrollStart) {
      setIsShown(true);
    } else setIsShown(false);
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isShown && (
        <CitiesPolaroidContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Title>{cityName}</Title>
          <Polaroid polaroidList={polaroidsMap[cityName]} size={300}></Polaroid>
        </CitiesPolaroidContainer>
      )}
    </AnimatePresence>
  );
}

const CitiesPolaroidContainer = styled(motion.div)`
  position: fixed;
  top: 80px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Title = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: -16px;
  font-family: "Clash Display";
`;
