import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAuthUser } from "./../../hooks/useAuthUser";
import { useImageUser } from "./../../hooks/useImageUser";
import { MainContainer } from "../../components/MainContainer";

import {
  ProfileForm,
  ProfileFormTitle,
  ProfileInputsContainer,
  ContainerInput,
  Input,
  Header,
  HeaderContent,
  UsernameContainer,
  PhotoContainer,
  UploadImage,
  ImageContainer,
  InputImage,
  FileInputLabel,
  ProfileContent,
  HeaderAvatarContainer,
} from "./styles";
import { CustomButton } from "../../components/CustomButton/CustomButton";

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
    setValue("username", user.username);
  }, [user]);

  const onSubmit = (user) => login(user);

  const toLogout = () => logout();

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    updateImage({ url: URL.createObjectURL(file) });
  };

  return (
    <>
      <Header>
        <HeaderContent>
          <HeaderAvatarContainer>
            <PhotoContainer
              role="photoContainer"
              data-testid="avatar"
              src={image.url}
            />
            <UsernameContainer role="usernameContainer" data-testid="userName">
              {user.username}
            </UsernameContainer>
          </HeaderAvatarContainer>

          <CustomButton invertColors onClick={toLogout}>
            Logout
          </CustomButton>
        </HeaderContent>
      </Header>
      <MainContainer>
        <ProfileContent backgroundColor="#fff">
          <ProfileFormTitle role="profileEdit">Editar Perfil</ProfileFormTitle>

          <ImageContainer>
            <UploadImage data-testid="profileImage" src={image.url} />
            <FileInputLabel htmlFor="fileInput">Trocar Foto</FileInputLabel>
            <InputImage id="fileInput" type="file" onChange={handleFile} />
          </ImageContainer>

          <ProfileForm onSubmit={handleSubmit(onSubmit)}>
            <ProfileInputsContainer>
              <ContainerInput>
                <Input
                  type="text"
                  id="username"
                  inputName="username"
                  placeholder="Username"
                  error={!!errors}
                  data-testid="username"
                  {...register("username", { required: "Informe o usuário" })}
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
                  {...register("password", { required: "Informe a senha" })}
                />
                <ErrorMessage as="span" errors={errors} name="password" />
              </ContainerInput>
            </ProfileInputsContainer>

            <CustomButton>Salvar</CustomButton>
          </ProfileForm>
        </ProfileContent>
      </MainContainer>
    </>
  );
};
