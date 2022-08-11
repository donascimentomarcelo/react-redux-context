import { render, screen, breforeEach, cleanup } from "@testing-library/react";
import { AuthUserProvider } from "../../context/AuthUser";
import { ProtectedRoute } from ".";

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

const mockUseNavigate = jest.fn();

const ProtectedRouteWrapper = ({ children }) => {
  return (
    <AuthUserProvider>
      <ProtectedRoute>{children}</ProtectedRoute>
    </AuthUserProvider>
  );
};

const ChildrenElement = () => <h1>Children Element</h1>;

describe("ProtectedRoute", () => {
  beforeEach(() => cleanup());

  it("should render children", () => {
    render(<ProtectedRouteWrapper children={<ChildrenElement />} />);
    const childrenElement = screen.getByRole("heading", {
      name: "Children Element",
    });
    expect(childrenElement).toBeInTheDocument();
  });

  it("should redirect to login page if user is not authenticated", () => {
    const user = { username: "" };

    render(
      <AuthUserProvider value={user}>
        <ProtectedRoute />
      </AuthUserProvider>
    );

    expect(mockUseNavigate).toHaveBeenCalledWith("/");
  });
});
