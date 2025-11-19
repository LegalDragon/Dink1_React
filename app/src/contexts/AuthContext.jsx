import { createContext, useContext, useEffect, useState } from "react";
import api from "../global-api/apiClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || null);
  const [loading, setLoading] = useState(true);

  // Try fast-login on startup
  useEffect(() => {
    async function tryFastLogin() {
      if (!authToken) {
        setLoading(false);
        return;
      }

      try {
        await api.post("/fastlogin", { token: authToken });
        // success → user stays logged in
      } catch {
        // failed → clear token
        localStorage.removeItem("authToken");
        setAuthToken(null);
      }

      setLoading(false);
    }

    tryFastLogin();
  }, []);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
