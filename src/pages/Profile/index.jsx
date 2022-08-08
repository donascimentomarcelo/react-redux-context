import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAuthUser } from "../../hooks/AuthUser";
import { MainContainer } from "../../components/MainContainer";
import { SectionContainer } from "../../components/SectionContainer";

import {
  ProfileForm,
  ProfileFormTitle,
  ProfileInputsContainer,
  ContainerInput,
  Input,
  FormButton,
} from "./styles";

export const Profile = () => {
  const { logout } = useAuthUser();
  const toLogout = () => logout();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
    <header>header</header>
      <MainContainer style={{backgroundColor: 'orange'}}>
        <SectionContainer>
          <ProfileForm onSubmit={handleSubmit(toLogout)}>
            <ProfileFormTitle>Welcome</ProfileFormTitle>

            <ProfileInputsContainer>
              <ContainerInput>
                <Input
                  type="text"
                  id="username"
                  inputName="username"
                  placeholder="Username"
                  error={!!errors}
                  {...register("username", { required: "Informe o username" })}
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
                  {...register("password", { required: "Informe a password" })}
                />
                <ErrorMessage as="span" errors={errors} name="password" />
              </ContainerInput>
            </ProfileInputsContainer>

            <FormButton onClick={toLogout}>Logout</FormButton>
          </ProfileForm>
        </SectionContainer>
      </MainContainer>
    </>
  );
};
