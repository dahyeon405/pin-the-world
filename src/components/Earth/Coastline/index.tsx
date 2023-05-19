import coastLineData from "@/assets/coastline.json";
import SingleCoastLine from "./singleCoastLine";
import { normalizeCoordinates } from "../normalizeCoordinates";

export default function CoastLine({ radius }: { radius: number }) {
  const coordinatesList = coastLineData.features.map((data) =>
    normalizeCoordinates(data.geometry.coordinates as Array<[number, number]>)
  );

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
