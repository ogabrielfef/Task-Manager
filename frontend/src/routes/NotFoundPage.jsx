import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    // Redireciona para a home após alguns segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1>404 - Página não encontrada</h1>
            <p>Você será redirecionado para a página inicial em breve...</p>
        </div>
    );
};

export default NotFoundPage;