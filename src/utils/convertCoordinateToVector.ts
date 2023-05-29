export const convertCoordinateToVector = (
  [longitude, latitude]: [number, number],
  radius: number
) => {
  const lambda = (longitude * Math.PI) / 180;
  const phi = (latitude * Math.PI) / 180;

  return [
    radius * Math.cos(phi) * Math.cos(lambda),
    radius * Math.sin(phi),
    -radius * Math.cos(phi) * Math.sin(lambda),
  ];
};
