import { LoginForm, LoginFormTitle, LoginInputsContainer } from "./styles";

export const FormComponent = ({
  titleForm,
  buttonText,
  children,
}) => {
  return (
    <LoginForm>
      <LoginFormTitle>{titleForm}</LoginFormTitle>

      <LoginInputsContainer>{children}</LoginInputsContainer>

      <button type="submit">{buttonText}</button>
    </LoginForm>
  );
};
