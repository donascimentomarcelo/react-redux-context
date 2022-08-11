import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";

import { Login } from "./index";
import { AuthUserProvider } from "../../context/AuthUser";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

const mockNavigate = jest.fn((route) => console.log(route));

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

  it("should be login a user", async () => {
    const user = {
      userName: "fakseUsername",
      password: "faksePassword",
    };

    render(<Login />, { wrapper: AuthUserProvider });

    const userNameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const buttonElement = screen.getByRole("button", { name: "Entrar" });

    userEvent.type(userNameInput, user.userName);
    userEvent.type(passwordInput, user.password);

    mockNavigate("/login");

    userEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
