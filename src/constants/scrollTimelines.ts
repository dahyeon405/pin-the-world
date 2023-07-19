import { VectorXYZ } from "@/types";
import { convertVectorToVectorXYZ, convertCoordinateToVector } from "@/utils";
import { cityCoordinates } from "./cityCoordinates";

const citiesScrollMap: Record<string, [number, number]> = {
  Copenhagen: [3000, 6000],
  Iceland: [9000, 12000],
  Seoul: [15000, 18000],
  "New York": [21000, 24000],
};

const radius = 4;

const scrollTimelines: Record<number, VectorXYZ> = {};

const getCameraPositionForCoordinate = (
  coordinate: [number, number],
  radius: number
) => {
  return convertVectorToVectorXYZ(
    convertCoordinateToVector(coordinate, radius)
  );
};

const makeScrollTimelines = () => {
  (Object.keys(citiesScrollMap) as string[]).forEach((city) => {
    let cityKey = city as keyof typeof cityCoordinates;
    const [start, end] = citiesScrollMap[city];
    const cameraPosition = getCameraPositionForCoordinate(
      cityCoordinates[cityKey] as [number, number],
      radius
    );
    scrollTimelines[start] = cameraPosition;
    scrollTimelines[end] = cameraPosition;
  });
};

makeScrollTimelines();

export { scrollTimelines };
