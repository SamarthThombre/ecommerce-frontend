import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.jsx';
import { jwtDecode } from "jwt-decode";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  // ✅ Only run once on mount: check token expiry
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        if (decoded.exp * 1000 < Date.now()) {
          // Token expired
          logout();
        } else {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Invalid token",error);
        logout();
      }
    }
  }, []); // ← only on first mount

  // ✅ Save to localStorage when user or token changes
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    if (token) localStorage.setItem("token", token);
  }, [user, token]);

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
