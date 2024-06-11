// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Aquí puedes agregar lógica de inicio de sesión real
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  const register = (userData) => {
    // Aquí puedes agregar lógica para registrar al usuario
    console.log("Registrando usuario:", userData);
    // Después de registrar al usuario, podrías iniciar sesión automáticamente
    
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
