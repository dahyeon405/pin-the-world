import { ReactNode, createContext, useState } from "react";
import styled from "styled-components";

export interface PolaroidContextValue {
  polaroidList?: PolaroidItem[];
  currentIndex?: number;
  onNext?: () => void;
  onPrev?: () => void;
  size?: number;
}

export interface PolaroidItem {
  imageName: string;
  description: string;
  alt?: string;
}

export const PolaroidContext = createContext<PolaroidContextValue | undefined>({
  currentIndex: 0,
});

export function PolaroidContainer({
  children,
  polaroidList,
  size,
}: {
  children?: ReactNode;
  polaroidList: PolaroidItem[];
  size: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    if (currentIndex >= polaroidList.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const onPrev = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <PolaroidBackground>
      <PolaroidContext.Provider
        value={{ currentIndex, onNext, onPrev, polaroidList, size }}
      >
        {children}
      </PolaroidContext.Provider>
    </PolaroidBackground>
  );
}

const PolaroidBackground = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  background-color: white;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.2));
  position: relative;
`;
