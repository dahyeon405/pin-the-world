/*
 * city name: [longitude, latitude]
 */
export const cityCoordinates = {
  Copenhagen: [12.6502778, 55.6202778],
  Iceland: [-19.020835, 64.963051],
  "New York": [-73.990494, 40.7569545],
  Seoul: [126.9779692, 37.566535],
} as const;

export type Cities = keyof typeof cityCoordinates;
