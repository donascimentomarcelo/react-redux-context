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

  @media (max-width: 768px) {
    justify-content: "start";
    gap: 1rem;
    padding: 1rem 0;
  }
`;

export const HeaderAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  width: 350px;
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

export const Header = styled.header`
  background-color: #0693e3;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  max-height: 75px;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 935px;
  padding: 0 2rem;
`;

export const UsernameContainer = styled.h2`
  font-size: 1.25rem;
`;

export const PhotoContainer = styled.img`
  border-radius: 50%;
  height: 7vh;
  margin-right: 1rem;
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
