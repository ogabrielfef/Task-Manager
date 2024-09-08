import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

// Componente que renderiza a rota privada
const PrivateRoute = ({ element: Element, ...rest }) => {
    const { auth } = useAuth();

    return auth ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;