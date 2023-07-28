import { useContext, useEffect, useRef } from "react";
import { PolaroidContext } from "./PolaroidContainer";
import { ResizedImage } from "../ResizedImage";
import styled from "styled-components";

export function PolaroidImage() {
  const polaroidContext = useContext(PolaroidContext);
  const isCompounded = polaroidContext !== undefined;

  const previousIndex = useRef(0);

  const imageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentIndex = polaroidContext?.currentIndex;
    const size = polaroidContext?.size ?? 0;

    if (
      currentIndex === undefined ||
      !imageListRef.current ||
      currentIndex === previousIndex.current
    )
      return;

    imageListRef.current?.animate(
      {
        transform: [
          `translateX(-${previousIndex.current * size}px)`, // 시작 값
          `translateX(-${currentIndex * size}px)`, // 종료 값
        ],
      },
      {
        duration: 1000,
        fill: "forwards",
        easing: "ease",
      }
    );

    previousIndex.current = polaroidContext?.currentIndex ?? 0;
  }, [polaroidContext?.currentIndex]);

  return (
    <ImageContainer size={polaroidContext?.size ?? 0}>
      <ImageList ref={imageListRef}>
        {isCompounded &&
          polaroidContext.polaroidList?.map((item, index) => {
            return (
              <Image size={polaroidContext?.size ?? 0} key={index}>
                <ResizedImage
                  imageName={item.imageName}
                  alt={item.alt}
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Image>
            );
          })}
      </ImageList>
    </ImageContainer>
  );
}

const ImageContainer = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.09) inset;

  overflow: hidden;
`;

const ImageList = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const Image = styled.div<{ size: number }>`
  min-width: ${(props) => props.size}px;
  min-height: ${(props) => props.size}px;
`;
