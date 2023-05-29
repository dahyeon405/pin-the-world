import { CopenhagenBoard } from "./CopenhagenBoard";
import { styled } from "styled-components";

export const CitiesBoard = () => {
  return (
    <CitiesBoardContainer>
      <CopenhagenBoardContainer>
        <CopenhagenBoard />
      </CopenhagenBoardContainer>
    </CitiesBoardContainer>
  );
};

const CitiesBoardContainer = styled.section`
  width: 100%;
  max-width: 600px;
  height: 25000px;
  position: relative;
`;

const CopenhagenBoardContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 3500px;
`;
