import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { CitiesBoard } from "@/components/CitiesBoard";
import { EarthCanvas } from "@/components/EarthCanvas";
import { useEffect, useState } from "react";
import { LoadingIndicator } from "@/components/LoadingIndicator/LoadingIndicator";
import { useDisableScroll } from "@/hooks";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { enableScroll, disableScroll } = useDisableScroll();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isLoading) enableScroll();
    else disableScroll();
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <LoadingIndicatorContainer>
          <LoadingIndicator />
        </LoadingIndicatorContainer>
      )}
      <HomeLayout>
        <HomeTitle>Pin the World</HomeTitle>
        <CitiesBoardContainer>
          <CitiesBoard />
        </CitiesBoardContainer>
        <CanvasContainer>
          <Canvas
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 4] }}
          >
            <pointLight position={[0, 0, 3]} />
            <EarthCanvas />
          </Canvas>
        </CanvasContainer>
      </HomeLayout>
    </>
  );
}

const LoadingIndicatorContainer = styled.h1`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 5;
`;

const HomeTitle = styled.h1`
  font-size: 128px;
  font-weight: 400;
  margin: 0 auto;
  width: fit-content;
`;

const HomeLayout = styled.div`
  width: 100%;
  padding: 48px 0px;
`;

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
`;

const CitiesBoardContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
`;
