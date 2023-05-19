import SingleCoastLine from "./singleCoastLine";
import { useCoordinatesList } from "@/models/useCoordinatesList";

export default function CoastLine({ radius }: { radius: number }) {
  const coordinatesList = useCoordinatesList();

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
