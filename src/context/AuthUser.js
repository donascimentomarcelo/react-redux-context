import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthUserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  function login(user) {
    setUser(user);
  }

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
