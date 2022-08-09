import { useContext } from "react";
import { AuthContext } from "../context/AuthUser";

export const useAuthUser = () => {
  const { user, login, logout } = useContext(AuthContext);

  return {
    user,
    login,
    logout,
  };
};
