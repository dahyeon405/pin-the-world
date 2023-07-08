import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { CitiesBoard } from "@/components/CitiesBoard";
import { EarthCanvas } from "@/components/EarthCanvas";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header>
        <Link to="/">
          <Logo>dahyeon</Logo>
        </Link>
        <MenuButton>Menu</MenuButton>
      </Header>
      <HomeLayout>
        <HomeTitle>Pin the World</HomeTitle>
        <CanvasContainer>
          <Canvas
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 4] }}
          >
            <pointLight position={[0, 0, 3]} />
            <EarthCanvas />
          </Canvas>
        </CanvasContainer>
        <CitiesBoardContainer>
          <CitiesBoard />
        </CitiesBoardContainer>
      </HomeLayout>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0rem;
  padding: 1rem;
  font-size: 1.25rem;
  width: 100%;
  z-index: 3;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(5px);
  height: 3.5rem;
`;

const Logo = styled.span`
  position: absolute;
  left: 1.5rem;
  top: 1rem;
  cursor: pointer;
  font-family: "Clash Display";
  backdrop-filter: invert(70%);
`;

const MenuButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  cursor: pointer;
  font-family: "Clash Display";
`;

const HomeTitle = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  width: fit-content;
  line-height: 3.5rem;
  padding: 0rem 1.5rem;
  font-family: "Clash Display";
`;

const HomeLayout = styled.div`
  width: 100%;
  position: absolute;
  top: 4rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 3%,
    rgba(255, 235, 138, 1) 41%,
    rgba(104, 203, 192, 1) 63%,
    rgba(215, 151, 251, 1) 81%,
    rgba(251, 162, 151, 1) 93%
  );
`;

const CanvasContainer = styled.div`
  height: 70%;
  width: 100%;
  position: fixed;
  left: 0rem;
  top: 8rem;
`;

const CitiesBoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
