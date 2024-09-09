import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchUserById } from '../services/apiAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');

        if(token && userId) {
            fetchUserById(userId)
                .then(user => setAuth(user))
                .catch(() => {
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('userId');
                    localStorage.removeItem('userEmail');
                })
        }
    }, [])

    const login = (email, userId, token) => {
        setAuth(email);

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', userId);
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setAuth(null);

        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};