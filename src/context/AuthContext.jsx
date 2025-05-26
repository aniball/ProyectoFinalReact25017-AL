import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null); // 👈 importante que tenga valor inicial

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth') === 'true');

  const login = () => {
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
