import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";

import { Login } from "./index";
import { AuthUserProvider } from "../../context/AuthUser";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("Login", () => {
  afterEach(cleanup);

  it("should be render a heading", () => {
    render(<Login />, { wrapper: AuthUserProvider });

    const formTitle = screen.getByRole("heading", { name: "Welcome" });
    expect(formTitle).toBeInTheDocument();
  });

  it("should be render a username input", () => {
    render(<Login />, { wrapper: AuthUserProvider });

    const inputUsername = screen.getByPlaceholderText("Username");
    expect(inputUsername).toBeInTheDocument();
  });

  it("username input should be empty", () => {
    render(<Login />, { wrapper: AuthUserProvider });

    const inputUsername = screen.getByPlaceholderText("Username");
    expect(inputUsername.value).toBe("");
  });

  it("should be input username change value", () => {
    render(<Login />, { wrapper: AuthUserProvider });
    const value = "fakseUsername";
    const userNameInput = screen.getByPlaceholderText("Username");

    userEvent.type(userNameInput, value);

    expect(userNameInput.value).toBe(value);
  });

  it("should be render a input password", () => {
    render(<Login />, { wrapper: AuthUserProvider });

    const inputPassword = screen.getByPlaceholderText("Password");
    expect(inputPassword).toBeInTheDocument();
  });

  it("password input should be empty", () => {
    render(<Login />, { wrapper: AuthUserProvider });

    const inputPassword = screen.getByPlaceholderText("Password");
    expect(inputPassword.value).toBe("");
  });

  it("should be input password change value", () => {
    render(<Login />, { wrapper: AuthUserProvider });
    const value = "faksePassword";
    const passwordInput = screen.getByPlaceholderText("Password");

    userEvent.type(passwordInput, value);

    expect(passwordInput.value).toBe(value);
  });

  it("should be render a button", async () => {
    render(<Login />, { wrapper: AuthUserProvider });

    const buttonEntrar = screen.getByText("Entrar");
    expect(buttonEntrar).toBeInTheDocument();
  });

  it("should be show error message", async () => {
    render(<Login />, { wrapper: AuthUserProvider });
    const buttonElement = screen.getByText("Entrar");

    userEvent.click(buttonElement);

    await waitFor(() => {
      const userNameMessageError = screen.getByText("Informe o usuário");
      expect(userNameMessageError).toBeInTheDocument();
    });

    await waitFor(() => {
      const passwordMessageError = screen.getByText("Informe o usuário");
      expect(passwordMessageError).toBeInTheDocument();
    });
  });

  it("should be error message not visible", async () => {
    render(<Login />, { wrapper: AuthUserProvider });
    const userNameValue = "fakseUsername";
    const passwordValue = "faksePassword";
    const userNameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const buttonElement = screen.getByRole("button", { name: "Entrar" });

    userEvent.type(userNameInput, userNameValue);
    userEvent.type(passwordInput, passwordValue);

    userEvent.click(buttonElement);

    await waitFor(() => {
      const messageErrorUsername = screen.queryByText("Informe o usuário");
      expect(messageErrorUsername).not.toBeInTheDocument();
    });

    await waitFor(() => {
      const messageErrorPassword = screen.queryByText("Informe a senha");
      expect(messageErrorPassword).not.toBeInTheDocument();
    });
  });
});
