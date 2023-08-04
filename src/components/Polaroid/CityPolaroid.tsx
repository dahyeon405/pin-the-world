import { polaroidsMap } from "@/constants/cityPolaroid";
import { Polaroid } from "./Polaroid";
import { Cities } from "@/constants";
import { useEffect, useState } from "react";
import { useScroll } from "@/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";

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
        <Flex
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          pos="fixed"
          top="20"
          align="center"
          direction="column"
          width="100%"
        >
          <Text
            fontSize="5xl"
            fontWeight="300"
            mb="-5"
            fontFamily="Clash Display"
          >
            {cityName}
          </Text>
          <Polaroid polaroidList={polaroidsMap[cityName]} size={300}></Polaroid>
        </Flex>
      )}
    </AnimatePresence>
  );
}
