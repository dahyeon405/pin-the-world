import { CityPolaroid } from "./CityPolaroid";
import { Cities, citiesScrollMap } from "@/constants";

const isCity = (city: string): city is Cities => {
  if (Object.keys(citiesScrollMap).includes(city)) return true;
  return false;
};

export function CityPolaroidBoard() {
  return (
    <>
      {Object.keys(citiesScrollMap).map((city) => {
        if (!isCity(city)) return <></>;
        return (
          <CityPolaroid
            cityName={city}
            positionTop={citiesScrollMap[city][0] + 500}
            height={800}
            key={city}
          ></CityPolaroid>
        );
      })}
    </>
  );
}
