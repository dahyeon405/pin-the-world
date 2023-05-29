import { VectorXYZ } from "@/types";

export const convertArrayToVector = (coordinates: Array<number>): VectorXYZ => {
  return {
    x: coordinates[0],
    y: coordinates[1],
    z: coordinates[2],
  };
};
