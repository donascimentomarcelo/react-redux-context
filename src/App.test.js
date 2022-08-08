import React from "react";
import { render, cleanup } from "@testing-library/react";

import { renderHook, act } from "@testing-library/react-hooks";

import { Login } from "./pages/Login";
import { useAuthUser } from "./context/AuthUser";
import { AuthUserProvider } from "./context/AuthUser";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock("./context/AuthUser", () => ({
  useAuthUser: () => ({
    user: null,
    login: mockLogin,
    logout: mockLogout,
  }),
}));

const mockLogin = jest.fn();
const mockLogout = jest.fn();

describe("Login", () => {
  afterEach(cleanup);

  test("returns user undefined", () => {
    render(<Login />, { wrapper: AuthUserProvider });
    const { result } = renderHook(() => useAuthUser());
    expect(result.current.user).toBeFalsy();
  });

  test("returns logged in user", async () => {
    const { result } = renderHook(() => useAuthUser());

    act(() => {
      result.current.login();
      result.current.user = {
        username: "andre",
        password: "123156",
      }
    });

    expect(result.current.login).toBeCalledTimes(1);

    expect(result.current.user).toEqual({
      username: "andre",
      password: "123156",
    })
  });
});
