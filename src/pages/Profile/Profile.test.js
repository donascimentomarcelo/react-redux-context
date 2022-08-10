import React from 'react';
import { render, screen } from '@testing-library/react';
import { Profile } from './index';
import { ImageUserProvider } from '../../context/ImageUser';
import { AuthUserProvider } from '../../context/AuthUser';
import userEvent from '@testing-library/user-event';

jest.mock("./../../hooks/useImageUser", () => ({
    useImageUser: () => ({
        image: {
            url: 'c://path'
        },
        updateImage: jest.fn(),
    }),
}));

jest.mock("../../hooks/useAuthUser", () => ({
    useAuthUser: () => ({
        user: {
            username: 'example@email.com'
        },
        logout: jest.fn(),
    }),
}));

describe("Profile Form", () => {

    it("should validate title form", () => {
        render(<Profile />, { wrapper: ImageUserProvider });

        const formTitle = screen.getByRole("profileEdit");
        expect(formTitle).toBeInTheDocument();
        expect(formTitle.firstChild.data).toEqual('Editar Perfil');
    });

    it("should validate title username", () => {
        render(<Profile />, { wrapper: AuthUserProvider });

        const usernameContainer = screen.getByRole("usernameContainer");
        expect(usernameContainer).toBeInTheDocument();
        expect(usernameContainer.firstChild.data).toEqual('example@email.com');
    });

    it("should validate empty username", () => {
        render(<Profile />, { wrapper: AuthUserProvider });
        const username = "fake"
        const userInput = screen.getByPlaceholderText("Username");

        userEvent.clear(userInput)
        userEvent.type(userInput, username);

        expect(userInput.value).toBe(username);
    });

    it("should validate empty password", () => {
        render(<Profile />, { wrapper: AuthUserProvider });
        const password = "p@ss"
        const passwordInput = screen.getByPlaceholderText("Password");

        userEvent.type(passwordInput, password);

        expect(passwordInput.value).toBe(password);
    });

    it("should have the save button", () => {
        render(<Profile />, { wrapper: AuthUserProvider });
        expect(screen.getByText("Salvar")).toBeInTheDocument();
    });

    it("should have the logout button", () => {
        render(<Profile />, { wrapper: AuthUserProvider });
        expect(screen.getByText("Logout")).toBeInTheDocument();
    });

    it("should have the image field", () => {
        render(<Profile />, { wrapper: ImageUserProvider });

        const photoContainer = screen.getByRole("photoContainer");
        expect(photoContainer).toBeInTheDocument();
        expect(photoContainer.src).toEqual('c://path');
    });

    it("should upload image", () => {
        render(<Profile />, { wrapper: ImageUserProvider });
        global.URL.createObjectURL = jest.fn();

        const changePhoto = screen.getByLabelText("Trocar Foto");
        const file = new File(["(⌐□_□)"], "myPicture.png", { type: "image/png" });
        userEvent.upload(changePhoto, file);
    });
});

describe("Form Validations", () => {


    it("should validate empty fields", async () => {
        render(<Profile />, { wrapper: AuthUserProvider });
        const userInput = screen.getByPlaceholderText("Username");
        userEvent.clear(userInput)

        const buttonElement = screen.getByText("Salvar");

        userEvent.click(buttonElement);

        const userNameMessageError = await screen.findByText("Informe o usuário");
        const passwordMessageError = await screen.findByText("Informe a senha");
        expect(userNameMessageError).toBeInTheDocument();
        expect(passwordMessageError).toBeInTheDocument();
    });
});