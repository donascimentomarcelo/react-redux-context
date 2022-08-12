import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  width: 70%;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const LoginFormTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  align-self: start;

  @media (max-width: 768px) {
    color: #fff;
    margin: 0;
  }
`;

export const LoginInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.25rem;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  height: 80px;
  width: 100%;

  span {
    color: #f00;
  }
`;

export const Input = styled.input`
  height: 3rem;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #0693e3;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;

export const LoginHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 450px;
  width: 100%;
`;

export const LoginHeroTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
`;

export const LoginHeroLogo = styled.img`
  height: 70px;
  width: auto;
  resize: cover;

  @media (min-width: 769px) {
    display: ${({ fullscreen }) => fullscreen && "none"};
  }
  
  @media (max-width: 768px) {
    align-self: start;
  }
`;

export const LoginHeroText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  width: 250px;

  @media (min-width: 769px) {
    display: ${({ fullscreen }) => fullscreen && "none"};
  }

  @media (max-width: 768px) {
    margin: 0;
    font-size: 0.85rem;
    width: 180px;
    align-self: start;
  }
`;
