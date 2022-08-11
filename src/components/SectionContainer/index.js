import styled from "styled-components";

export const SectionContainer = styled.section`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: ${({ mobile }) => mobile && "none"};
  }
`;
