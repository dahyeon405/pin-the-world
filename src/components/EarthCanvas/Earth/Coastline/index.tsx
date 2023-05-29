import SingleCoastLine from "./singleCoastLine";
import { normalizedCoordinatesList } from "@/models/normalizedCoordinatesList";

export default function CoastLine({ radius }: { radius: number }) {
  const coordinatesList = normalizedCoordinatesList;

  return (
    <>
      {coordinatesList.map((coordinates, index) => {
        return (
          <SingleCoastLine
            coordinates={coordinates}
            material={{ color: "black" }}
            radius={radius}
            key={index}
          />
        );
      })}
    </>
  );
}
