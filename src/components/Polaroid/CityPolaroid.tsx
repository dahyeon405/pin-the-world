import { polaroidsMap } from "@/constants/cityPolaroid";
import { Polaroid } from "./Polaroid";
import styled from "styled-components";
import { TitleSlideIn } from "../atoms";
import { Cities } from "@/constants";

export function CityPolaroid({
  cityName,
  positionTop,
  height,
}: {
  cityName: Cities;
  positionTop: number;
  height: number;
}) {
  return (
    <PolaroidPositioner positionTop={positionTop}>
      <PolaroidContainerParent height={height}>
        <CitiesPolaroidContainer>
          <TitleSlideIn>{cityName}</TitleSlideIn>
          <Polaroid polaroidList={polaroidsMap[cityName]} size={300}></Polaroid>
        </CitiesPolaroidContainer>
      </PolaroidContainerParent>
    </PolaroidPositioner>
  );
}

const PolaroidPositioner = styled.div<{ positionTop: number }>`
  position: absolute;
  top: ${(props) => props.positionTop}px;
  left: 0px;
  width: 100%;
`;

const PolaroidContainerParent = styled.div<{ height: number }>`
  position: relative;
  height: ${(props) => props.height}px;
`;

const CitiesPolaroidContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin: 0 auto;
  width: 100%;
  top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
