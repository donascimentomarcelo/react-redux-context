import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAuthUser } from "../../hooks/useAuthUser.js";
import { MainContainer } from "../../components/MainContainer";
import { SectionContainer } from "../../components/SectionContainer";
import logo from "../../assets/images/logo.png";

import {
  LoginForm,
  LoginFormTitle,
  LoginInputsContainer,
  ContainerInput,
  Input,
  LoginHeroContainer,
  LoginHeroTitle,
  LoginHeroLogo,
  LoginHeroText,
} from "./styles";
import { CustomButton } from "../../components/CustomButton/CustomButton.js";

export const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuthUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    login(user);
    navigate("/profile");
  };

  return (
    <MainContainer>
      <SectionContainer>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginHeroLogo
            fullscreen
            src={logo}
            alt="logo marca com a palavra programmers"
          />

          <LoginHeroText fullscreen>
            Let's learn about react, api context vs redux
          </LoginHeroText>

          <LoginFormTitle mobile>Welcome</LoginFormTitle>

          <LoginInputsContainer>
            <ContainerInput>
              <Input
                type="text"
                id="username"
                inputName="username"
                placeholder="Username"
                error={!!errors}
                data-testid="email"
                {...register("username", { required: "Informe o usuário" })}
              />
              <ErrorMessage
                data-testid="error-message-username"
                as="span"
                errors={errors}
                name="username"
              />
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
              <ErrorMessage
                data-testid="password-error-message"
                as="span"
                errors={errors}
                name="password"
              />
            </ContainerInput>
          </LoginInputsContainer>

          <CustomButton type="submit">Entrar</CustomButton>
        </LoginForm>
      </SectionContainer>

      <SectionContainer mobile backgroundColor="#0693e3">
        <LoginHeroContainer>
          <LoginHeroTitle>Learnig React</LoginHeroTitle>

          <div>
            <LoginHeroLogo
              src={logo}
              alt="logo marca com a palavra programmers"
            />
          </div>

          <LoginHeroText>
            Let's learn about react, api context vs redux
          </LoginHeroText>
        </LoginHeroContainer>
      </SectionContainer>
    </MainContainer>
  );
};
