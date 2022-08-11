import styled from "styled-components";

export const ProfileContent = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  padding: 2rem 0;
  margin-top: 4rem;

  @media (max-width: 768px) {
    justify-content: ${({ mobile }) => mobile && "start"};
    gap: ${({ mobile }) => mobile && "2rem"};

  }
`;

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
  align-self: center;
  margin: 0;
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

export const Header = styled.header`
  background-color: #0693e3;
  color: #000;
  max-height: 75px;
  padding: 10px;
  display: flex;
  margin-bottom: 0;
`;

export const UsernameContainer = styled.div`
  padding: 25px;
  font-weight: bold;
  align-self: start;
`;

export const PhotoContainer = styled.img`
  display: inline-block;
  width: auto;
  box-sizing: border-box;
  border-radius: 50%;
  margin-left: 18%;
  padding: 10px;
  height: 9vh;
`;

export const LogoutButton = styled.button`
  margin-left: auto;
  order: 2;
  height: 30px;
  margin-top: 25px;
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const InputImage = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
  color: #000;
  cursor: pointer;

  :hover {
    color: #999;
  }
`;

export const UploadImage = styled.img`
  height: 100px;
  border-radius: 50%;
`;
