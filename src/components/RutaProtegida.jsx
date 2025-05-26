// src/components/RutaProtegida.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RutaProtegida({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/" />;
}