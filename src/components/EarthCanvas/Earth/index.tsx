import CoastLine from "./Coastline";
import Pins from "./Pins";
import React from "react";

export const Earth = React.memo(
  ({ radius }: { radius: number }) => {
    return (
      <>
        <mesh>
          <sphereGeometry args={[radius, 32, 32]} />
          <CoastLine radius={radius} />
          <Pins radius={radius} />
        </mesh>
      </>
    );
  },
  () => true
);
