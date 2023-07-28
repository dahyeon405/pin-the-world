import { useContext, useEffect, useMemo } from "react";
import { PolaroidContext } from "./PolaroidContainer";
import styled from "styled-components";

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

  return <Description>{description}</Description>;
}

const Description = styled.div`
  color: black;
  height: 64px;
  font-weight: 300;
  font-size: 11px;
  white-space: pre-line;
  text-align: center;
  margin: 12px;
`;
