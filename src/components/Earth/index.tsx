import * as THREE from "three";
import { useRef } from "react";
import CoastLine from "./Coastline";

export default function Earth() {
  const ref = useRef<THREE.Mesh>(null!);

  const radius = 1;

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 32, 32]} />
      <CoastLine radius={radius} />
    </mesh>
  );
}
