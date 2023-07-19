import { VectorXYZ } from "@/types";
import { convertVectorToVectorXYZ, convertCoordinateToVector } from "@/utils";
import { cityCoordinates } from "./cityCoordinates";
import { citiesScrollMap } from "./citiesScrollMap";
import { EARTH_RADIUS } from "./radius";

const cameraDistanceFromEarth = EARTH_RADIUS * 4;

/**
 * @description key: 스크롤 y값, value: 해당 스크롤 위치에서 카메라의 위치
 */
const scrollCameraPositionMap: Record<number, VectorXYZ> = {};

const getCameraPositionForCoordinate = (
  coordinate: [number, number],
  radius: number
) => {
  return convertVectorToVectorXYZ(
    convertCoordinateToVector(coordinate, radius)
  );
};

const makeScrollCameraPositionMap = () => {
  (Object.keys(citiesScrollMap) as string[]).forEach((city) => {
    let cityKey = city as keyof typeof cityCoordinates;
    const [start, end] = citiesScrollMap[city];
    const cameraPosition = getCameraPositionForCoordinate(
      cityCoordinates[cityKey] as [number, number],
      cameraDistanceFromEarth
    );
    scrollCameraPositionMap[start] = cameraPosition;
    scrollCameraPositionMap[end] = cameraPosition;
  });
};

makeScrollCameraPositionMap();

export { scrollCameraPositionMap };
