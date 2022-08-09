import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const initialValue = { username: "", password: "" };
export const AuthUserProvider = ({ children }) => {
  const [user, setUser] = useState(initialValue);

  function login(user) {
    setUser(user);
  }

  const logout = () => setUser(initialValue);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuthUser = () => {
  const { user, login, logout } = useContext(AuthContext);

  return {
    user,
    login,
    logout,
  };
};
