import { renderHook, act } from "@testing-library/react-hooks";
import { useAuthUser } from "./useAuthUser.js";

jest.mock("./useAuthUser.js", () => ({
  useAuthUser: () => ({
    user: null,
    login: mockLogin,
    logout: mockLogout,
  }),
}));

const mockLogin = jest.fn();
const mockLogout = jest.fn();

describe("useUserAuth", () => {

  it("should be able to call login function", async () => {
    const { result } = renderHook(() => useAuthUser());

    act(() => {
      result.current.login();
      result.current.user = {
        username: "andre",
        password: "123156",
      };
    });

    expect(result.current.login).toBeCalledTimes(1);

    expect(result.current.user).toEqual({
      username: "andre",
      password: "123156",
    });
  });

  it("should be able to call logout function", async () => {
    const { result } = renderHook(() => useAuthUser());

    act(() => {
      result.current.logout();
      result.current.user = null;
    }
    );

    expect(result.current.logout).toBeCalledTimes(1);
    expect(result.current.user).toEqual(null);
  })
});
