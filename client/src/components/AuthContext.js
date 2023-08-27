// AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  const [memberId, setMemberId] = useState(
    JSON.parse(localStorage.getItem("memberId")) || ""
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("memberId", JSON.stringify(memberId));
  }, [memberId]);

  const memberIdSet = (id) => {
    setMemberId(id);
  };
  const memberIdClearn = () => {
    setMemberId(false);
  };

  const login = () => {
    // 在實際應用中，你可能會在此處執行實際的登入邏輯
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, memberId, memberIdSet, memberIdClearn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
