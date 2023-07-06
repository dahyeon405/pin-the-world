import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { CitiesBoard } from "@/components/CitiesBoard";
import { EarthCanvas } from "@/components/EarthCanvas";

export default function Home() {
  return (
    <>
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
