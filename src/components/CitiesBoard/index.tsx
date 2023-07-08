import { CopenhagenBoard } from "./CopenhagenBoard";
import { styled } from "styled-components";
import { IcelandBoard } from "./IcelandBoard";

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

const CitiesBoardContainer = styled.section`
  width: 100%;
  max-width: 900px;
  height: 25000px;
  position: relative;
`;

const CopenhagenBoardContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 3500px;
`;

const IcelandBoardContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 9500px;
`;
