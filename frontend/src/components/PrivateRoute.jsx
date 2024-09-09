import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

// Componente que renderiza a rota privada
const PrivateRoute = ({ children }) => {
    const { auth } = useAuth();

    return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;