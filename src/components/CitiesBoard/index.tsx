import { CopenhagenBoard } from "./CopenhagenBoard";
import { styled } from "styled-components";
import { IcelandBoard } from "./IcelandBoard";
import { citiesScrollMap } from "@/constants";

export const CitiesBoard = () => {
  return (
    <CitiesBoardContainer>
      <CopenhagenBoardContainer>
        <CopenhagenBoard />
      </CopenhagenBoardContainer>
      <IcelandBoardContainer>
        <IcelandBoard />
      </IcelandBoardContainer>
    </CitiesBoardContainer>
  );
};

const scrollSpare = 500;

const CitiesBoardContainer = styled.section`
  width: 100%;
  max-width: 900px;
  height: 21000px;
  position: relative;
`;

const CopenhagenBoardContainer = styled.div`
  width: 100%;
  position: absolute;
  top: ${citiesScrollMap.Copenhagen[0] + scrollSpare}px;
`;

const IcelandBoardContainer = styled.div`
  width: 100%;
  position: absolute;
  top: ${citiesScrollMap.Iceland[0] + scrollSpare}px;
`;
