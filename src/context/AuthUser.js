import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthUserProvider = ({ children }) => {

    const [user, setUser] = useState({ email: '', password: '' });

    const login = user => setUser(user);

    const logout = () => setUser(null);

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