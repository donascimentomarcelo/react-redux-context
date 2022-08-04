import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthUserProvider = ({ children }) => {

    const [user, setUser] = useState({ username: '', password: '' });

    const login = creds => console.log(creds);

    const logout = () => console.log('logout');

    return <AuthContext.Provider value={{ user, login, logout }}> {children} </AuthContext.Provider>
}

export const useAuthUser = () => {

    const { user, login, logout } = useContext(AuthContext);

    return {
        user,
        login,
        logout
    }
}