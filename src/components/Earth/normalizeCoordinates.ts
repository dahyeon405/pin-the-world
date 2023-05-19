const isArrayOfCoordinates = (element: any): element is [number, number] => {
  return (
    Array.isArray(element) &&
    element.length === 2 &&
    element.every((el) => typeof el === "number")
  );
};

export const normalizeCoordinates = (coordinates: Array<[number, number]>) => {
  const normalizedCoordinates: Array<[number, number]> = [];

  coordinates.forEach((coordinate) => {
    for (let i = 0; i < coordinate.length; i++) {
      const coord: [number, number] | number = coordinate[i];
      if (isArrayOfCoordinates(coord)) {
        normalizedCoordinates.push(coord);
        continue;
      }
      if (coord !== 0 && !coord) return;
      if (coord > 180 || coord < -180) return;
    }
    normalizedCoordinates.push(coordinate);
  });

  return normalizedCoordinates;
};
