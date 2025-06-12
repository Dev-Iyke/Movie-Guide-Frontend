import { useState, useEffect } from 'react';
import { AuthContext } from './features';

// export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(() => {
    const storedData = localStorage.getItem('authToken');
    if (!storedData) return null;
    try {
      const { value, expiry } = JSON.parse(storedData);
      if (expiry && Date.now() > expiry) {
        localStorage.removeItem('authToken');
        return null;
      }
      return value;
    } catch {
      localStorage.removeItem('authToken');
      return null;
    }
  });

  useEffect(() => {
    if (token) {
      // Set expiry to 1 day from now
      const expiry = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("authToken", JSON.stringify({ value: token, expiry }));
    } else {
      localStorage.removeItem("authToken");
    }
  }, [token]);

  const isAuthenticated = !!token;
  console.log(isAuthenticated)

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;