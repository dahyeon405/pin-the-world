import { useContext, useMemo } from "react";
import { PolaroidContext } from "./PolaroidContainer";
import styled from "styled-components";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";

export function ArrowButtons() {
  const polaroidContext = useContext(PolaroidContext);

  const polaroidListLength = useMemo(() => {
    return polaroidContext?.polaroidList?.length ?? 0;
  }, [polaroidContext?.polaroidList]);

  return (
    <ArrowButtonsContainer size={polaroidContext?.size ?? 0}>
      <ArrowButton
        onClick={polaroidContext?.onPrev}
        disabled={polaroidContext?.currentIndex === 0}
      >
        <img src={arrowLeft} />
      </ArrowButton>
      <ArrowButton
        onClick={polaroidContext?.onNext}
        disabled={polaroidContext?.currentIndex === polaroidListLength - 1}
      >
        <img src={arrowRight} />
      </ArrowButton>
    </ArrowButtonsContainer>
  );
}

const ArrowButton = styled.button<{ disabled: boolean }>`
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  visibility: ${(props) => (props.disabled ? "hidden" : "")};
`;

const ArrowButtonsContainer = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  position: absolute;
  top: 162px;
  padding: 0px 6px;
  display: flex;
  justify-content: space-between;
`;
