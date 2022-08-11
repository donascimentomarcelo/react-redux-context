import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthContext, AuthUserProvider } from "./AuthUser";

const AuthProviderWrapper = () => {
  const mockUser = { username: "user-test", password: "pasword-test" };
  return (
    <AuthUserProvider>
      <AuthContext.Consumer>
        {({ user, login, logout }) => (
          <>
            <span>username: {(!!user.username).toString()}</span>
            <span>password: {(!!user.password).toString()}</span>
            <button onClick={logout}>logout</button>
            <button onClick={() => login(mockUser)}>login</button>
          </>
        )}
      </AuthContext.Consumer>
    </AuthUserProvider>
  );
};

describe("AuthUserProvider", () => {
  beforeEach(() => cleanup());

  it("should initialize the user with username and password with empty values", () => {
    render(<AuthProviderWrapper />);

    const username = screen.getByText("username: false");
    const password = screen.getByText("password: false");

    expect(username).toBeTruthy();
    expect(password).toBeTruthy();
  });

  describe("login", () => {
    it("should update the user with the given username and password", async () => {
      render(<AuthProviderWrapper />);

      const loginButton = screen.getByText("login");

      userEvent.click(loginButton);

      await waitFor(() => {
        const username = screen.getByText("username: true");
        expect(username).toBeTruthy();
      });

      await waitFor(() => {
        const password = screen.getByText("password: true");
        expect(password).toBeTruthy();
      });
    });
  });

  describe("logout", () => {
    it("should update the user with empty values", async () => {
      render(<AuthProviderWrapper />);

      const logoutButton = screen.getByText("logout");

      userEvent.click(logoutButton);

      await waitFor(() => {
        const username = screen.getByText("username: false");
        expect(username).toBeTruthy();
      });

      await waitFor(() => {
        const password = screen.getByText("password: false");
        expect(password).toBeTruthy();
      });
    });
  });
});
