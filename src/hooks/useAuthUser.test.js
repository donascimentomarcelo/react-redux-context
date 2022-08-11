import { waitFor } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useAuthUser } from "./useAuthUser.js";

jest.mock("./useAuthUser.js", () => ({
  useAuthUser: () => ({
    user: null,
    login: mockLogin,
    logout: mockLogout,
  }),
}));

const mockLogin = jest.fn((user) => user);
const mockLogout = jest.fn();

describe("useUserAuth", () => {
  it("should be able to call login function", async () => {
    const { result } = renderHook(() => useAuthUser());
    const mockUser = {
      username: "username",
      password: "123156",
    };

    act(() => {
      mockLogin.mockImplementation((user) => {
        result.current.user = user;
      });
    });

    act(() => {
      result.current.login(mockUser);
    });

    await waitFor(() => {
      expect(result.current.login).toBeCalledWith(mockUser);
    });

    await waitFor(() => {
      expect(result.current.user).toEqual(mockUser);
    });
  });

  it("should be able to call logout function", async () => {
    const { result } = renderHook(() => useAuthUser());
    mockLogout.mockImplementation(() => {
      result.current.user = null;
    });

    act(() => {
      result.current.logout();
    });

    expect(result.current.logout).toBeCalledTimes(1);
    expect(result.current.user).toEqual(null);
  });
});
