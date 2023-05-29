import { cityCoordinates } from "@/constants/cityCoordinates";
import { convertCoordinateToVector } from "../../../../utils/convertCoordinateToVector";
import SinglePin from "./singlePin";

export default function Pins({ radius }: { radius: number }) {
  return (
    <group>
      {Object.values(cityCoordinates).map((coordinate, index) => {
        return (
          <SinglePin
            position={convertCoordinateToVector(
              coordinate as [number, number],
              radius
            )}
            scale={0.08}
            key={index}
          />
        );
      })}
    </group>
  );
}
