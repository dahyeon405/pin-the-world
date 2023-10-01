import { useContext, useMemo } from "react";
import { PolaroidContext } from "./PolaroidContainer";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";
import { IconButton, Flex } from "@chakra-ui/react";

export function ArrowButtons() {
  const polaroidContext = useContext(PolaroidContext);

  const polaroidListLength = useMemo(() => {
    return polaroidContext?.polaroidList?.length ?? 0;
  }, [polaroidContext?.polaroidList]);

  return (
    <Flex
      width={`${polaroidContext?.size ?? 0}px`}
      justify="space-between"
      pos="absolute"
      top="162px"
      px="6px"
    >
      <IconButton
        size="s"
        isRound={true}
        onClick={polaroidContext?.onPrev}
        visibility={polaroidContext?.currentIndex === 0 ? "hidden" : undefined}
        icon={<img src={arrowLeft} />}
        aria-label="to previous image"
        backgroundColor="rgba(255, 255, 255, 0.7)"
      />
      <IconButton
        size="s"
        isRound={true}
        onClick={polaroidContext?.onNext}
        visibility={
          polaroidContext?.currentIndex === polaroidListLength - 1
            ? "hidden"
            : undefined
        }
        icon={<img src={arrowRight} />}
        aria-label="to next image"
        backgroundColor="rgba(255, 255, 255, 0.7)"
      />
    </Flex>
  );
}
