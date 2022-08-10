import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAuthUser } from './../../hooks/useAuthUser';
import { useImageUser } from "./../../hooks/useImageUser";
import { MainContainer } from "../../components/MainContainer";
import { SectionContainer } from "../../components/SectionContainer";

import {
  ProfileForm,
  ProfileFormTitle,
  ProfileInputsContainer,
  ContainerInput,
  Input,
  FormButton,
  Header,
  UsernameContainer,
  PhotoContainer,
  LogoutButton,
  UploadImage,
  ImageContainer,
  InputImage,
  FileInputLabel,
} from "./styles";

export const Profile = () => {
  const { logout, login, user } = useAuthUser();
  const { updateImage, image } = useImageUser();

  // console.log(user);
  // console.log(image);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('username', user.username);
  }, [user]);

  const onSubmit = (user) => login(user);

  const toLogout = () => logout();

  const handleFile = e => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    updateImage({ url: URL.createObjectURL(file) })
  };

  return (
    <>
      <Header>
        <PhotoContainer
        data-testid="avatar"
          src={image.url} />
        <UsernameContainer
        data-testid="userName">
          {user.username}
          {/* email@email.com */}
        </UsernameContainer>

        <LogoutButton onClick={toLogout}> Logout </LogoutButton>
      </Header>
      <MainContainer>
        <SectionContainer>

          <ImageContainer>
            <UploadImage
              data-testid="profileImage"
              src={image.url} />
            <FileInputLabel htmlFor="fileInput">Trocar Foto</FileInputLabel>
            <InputImage
              id="fileInput"
              type="file"
              onChange={handleFile} />
          </ImageContainer>

          <ProfileForm onSubmit={handleSubmit(onSubmit)}>

            <ProfileFormTitle>Editar Perfil</ProfileFormTitle>

            <ProfileInputsContainer>
              <ContainerInput>
                <Input
                  type="text"
                  id="username"
                  inputName="username"
                  placeholder="Username"
                  error={!!errors}
                  data-testid="username"
                  {...register("username", { required: "Informe um nome de usuário" })}
                />
                <ErrorMessage as="span" errors={errors} name="username" />
              </ContainerInput>

              <ContainerInput>
                <Input
                  type="password"
                  id="password"
                  inputName="password"
                  placeholder="Password"
                  error={!!errors}
                  data-testid="password"
                  {...register("password", { required: "Informe uma senha" })}
                />
                <ErrorMessage as="span" errors={errors} name="password" />
              </ContainerInput>
            </ProfileInputsContainer>

            <FormButton >Salvar</FormButton>
          </ProfileForm>
        </SectionContainer>
      </MainContainer>
    </>
  );
};
