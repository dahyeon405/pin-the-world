import { useContext, useEffect, useMemo } from "react";
import { PolaroidContext } from "./PolaroidContainer";
import { Text } from "@chakra-ui/react";

export function PolaroidDescription() {
  const polaroidContext = useContext(PolaroidContext);

  useEffect(() => {}, [polaroidContext?.currentIndex]);

  const description = useMemo(() => {
    if (
      !polaroidContext ||
      !polaroidContext.polaroidList ||
      polaroidContext.currentIndex == undefined
    ) {
      return "";
    }

    return polaroidContext.polaroidList[polaroidContext.currentIndex]
      .description;
  }, [polaroidContext?.currentIndex]);

  return (
    <Text
      color="black"
      h="16"
      m="3"
      fontSize="xs"
      whiteSpace="pre-line"
      textAlign="center"
    >
      {description}
    </Text>
  );
}
