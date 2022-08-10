import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Profile } from ".";
import { AuthUserProvider } from "../../context/AuthUser";
import { ImageUserProvider } from "../../context/ImageUser";

const ProfileWrapper = () => {
  return (
    <AuthUserProvider>
      <ImageUserProvider>
        <Profile />
      </ImageUserProvider>
    </AuthUserProvider>
  );
};

describe("Profile", () => {
  afterEach(cleanup);
  it("should render a image user", () => {
    render(<ProfileWrapper />);

    const image = screen.getByTestId("avatar");
    expect(image).toBeInTheDocument();
  });

  it("should render a name user", () => {
    render(<ProfileWrapper />);

    const userName = screen.getByTestId("userName");
    expect(userName).toBeInTheDocument();
  });

  it("should render a button to logout", () => {
    render(<ProfileWrapper />);

    const button = screen.getByText("Logout");
    expect(button).toBeInTheDocument();
  });

  it("should render a profile image", () => {
    render(<ProfileWrapper />);

    const profileImage = screen.getByTestId("profileImage");
    expect(profileImage).toBeInTheDocument();
  });

  it("should render a label input to change profile image", () => {
    render(<ProfileWrapper />);

    const label = screen.getByText("Trocar Foto");
    expect(label).toBeInTheDocument();
  });

  it("should render a input to change user name", () => {
    render(<ProfileWrapper />);

    const input = screen.getByPlaceholderText("Username");
    expect(input).toBeInTheDocument();
  });

  it("should render a input to change password", () => {
    render(<ProfileWrapper />);

    const input = screen.getByPlaceholderText("Password");
    expect(input).toBeInTheDocument();
  });

  it("should render a button to submit changes", () => {
    render(<ProfileWrapper />);

    const button = screen.getByText("Salvar");
    expect(button).toBeInTheDocument();
  });

  it("shold render a error message when user name is empty", async () => {
    render(<ProfileWrapper />);

    const input = screen.getByPlaceholderText("Username");
    const button = screen.getByText("Salvar");

    userEvent.type(input, "");
    userEvent.click(button);

    const error = await screen.findByText("Informe um nome de usuário");
    expect(error).toBeInTheDocument();
  });

  it("shold render a error message when password is empty", async () => {
    render(<ProfileWrapper />);

    const input = screen.getByPlaceholderText("Password");
    const button = screen.getByText("Salvar");

    userEvent.type(input, "");
    userEvent.click(button);

    const error = await screen.findByText("Informe uma senha");
    expect(error).toBeInTheDocument();
  });
});
