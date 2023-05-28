import * as THREE from "three";
import { useRef } from "react";
import CoastLine from "./Coastline";
import Pins from "./Pins";
import { OrbitControls } from "@react-three/drei";

export const Earth = () => {
  const ref = useRef<THREE.Mesh>(null!);

  const radius = 1;

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[radius, 32, 32]} />
        <CoastLine radius={radius} />
        <Pins radius={radius} />
      </mesh>
      <OrbitControls
        enableZoom={false}
        enableDamping={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
};
