import coastLineData from "@/assets/coastline.json";
import SingleCoastLine from "./singleCoastLine";

export default function CoastLine({ radius }: { radius: number }) {
  const coordinatesList = coastLineData.features.map(
    (data) => data.geometry.coordinates as Array<[number, number]>
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
