import { render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthUserProvider, useAuthUser } from '../context/AuthUser';
import Login from './Login';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
    useRoutes: () => jest.fn()
}));

// jest.spyOn(useAuthUser, 'useAuthUser').mockImplementation(() => ({
//     login: () => jest.fn()
// }));

jest.mock('../context/AuthUser', () => ({
    useAuthUser: () => { login: () => jest.fn().mockReturnValue('test') },
    login: () => jest.fn().mockReturnValue('test')
}));

describe('Login', () => {

    it('Invalid password', async () => {
        const { getByText, findByText } = render(<Login />);
        const btn = getByText('Submit');

        await userEvent.click(btn);

        const passwordError = await findByText('Informe a senha');

        expect(passwordError).toBeInTheDocument();
        expect(passwordError).toHaveClass('invalid-feedback');
    });

    it('Valid password input', async () => {
        const { getByTestId } = render(<Login />);
        const passwordInput = getByTestId('password');

        await userEvent.type(passwordInput, 'p@ss');

        expect(passwordInput).not.toHaveClass('is-invalid')
    });

    it('Valid email input', async () => {
        const { getByTestId } = render(<Login />);
        const emailInput = getByTestId('email');

        await userEvent.type(emailInput, 'user@email.com');

        expect(emailInput).not.toHaveClass('is-invalid')
    });
});

describe('Form', () => {

});