import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 935px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: ${({ mobile }) => mobile && "column"};
    background-color: ${({ mobile }) => mobile && "#0693e3"};
  }
`;
