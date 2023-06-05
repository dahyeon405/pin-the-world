import styled, { keyframes } from "styled-components";

export const LoadingIndicator = () => {
  return (
    <Container>
      <Spinner />
      <LoadingText>Loading . . .</LoadingText>
    </Container>
  );
};

const animloader = keyframes`
0% {
    box-shadow: -72px 0 #7187F9 inset;
}
100% {
    box-shadow: 48px 0 #7187F9 inset;
}
`;

const Spinner = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${animloader} 1s linear infinite;
`;

const LoadingText = styled.span`
  font-weight: normal;
  color: #7187f9;
`;

const Container = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
