import styled from "styled-components";

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  width: 70%;
`;

export const ProfileFormTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  align-self: start;
`;

export const ProfileInputsContainer = styled.div`
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
  }`;

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

export const FormButton = styled.button`
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
  color: #0693e3;
  border-color: #0693e3;
  :hover {
    color: #fff;
    background-color: #0693e3;
    border-color: #0693e3;
  }
`;
