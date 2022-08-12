import styled from "styled-components";

export const CustomButton = styled.button`
  height: 3rem;
  width: 8rem;
  cursor: pointer;
  outline: 0;
  display: inline-block;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  color: ${({ invertColors }) => (invertColors ? "#fff" : "#0693e3")};
  border-color: ${({ invertColors }) => (invertColors ? "#fff" : "#0693e3")};

  :hover {
    color: ${({ invertColors }) => (invertColors ? "#0693e3" : "#fff")};
    background-color: ${({ invertColors }) =>
      invertColors ? "#fff" : "#0693e3"};
    border-color: ${({ invertColors }) => (invertColors ? "#fff" : "#0693e3")};
  }

  @media (max-width: 768px) {
    background: #fff;
    color: #0693e3;

    :hover {
      color: #0693e3;
      background: #fff;
    }
  }
`;
