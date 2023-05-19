import Earth from "@/components/Earth";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <HomeLayout>
      <HomeTitle>Pin the World</HomeTitle>
      <CanvasContainer>
        <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 4] }}>
          <OrbitControls />
          <pointLight position={[0, 0, 8]} />
          <Earth />
        </Canvas>
      </CanvasContainer>
    </HomeLayout>
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
