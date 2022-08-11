import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 935px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #0693e3;
  }
`;
