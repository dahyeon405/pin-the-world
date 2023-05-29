import * as THREE from "three";
import { useRef } from "react";
import CoastLine from "./Coastline";
import Pins from "./Pins";
import React from "react";

export const Earth = React.memo(
  ({ radius }: { radius: number }) => {
    const ref = useRef<THREE.Mesh>(null!);

    return (
      <>
        <mesh ref={ref}>
          <sphereGeometry args={[radius, 32, 32]} />
          <CoastLine radius={radius} />
          <Pins radius={radius} />
        </mesh>
      </>
    );
  },
  () => true
);
