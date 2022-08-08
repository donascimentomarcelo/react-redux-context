import { render, cleanup } from '@testing-library/react';
import { renderHook, act } from "@testing-library/react-hooks";

import userEvent from '@testing-library/user-event';
import { AuthUserProvider, useAuthUser } from '../../context/AuthUser';
import { Login } from './';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
    useRoutes: () => jest.fn()
}));

jest.mock("../../context/AuthUser", () => ({
    useAuthUser: () => ({
        user: null,
        login: mockLogin,
        logout: mockLogout,
    }),
}));

const mockLogin = jest.fn();
const mockLogout = jest.fn();

describe('Login', () => {

    it('Invalid password', async () => {
        const { getByText, findByText } = render(<Login />);
        const btn = getByText('Entrar');

        await userEvent.click(btn);

        const passwordError = await findByText('Informe a password');

        expect(passwordError).toBeInTheDocument();
    });
});

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
