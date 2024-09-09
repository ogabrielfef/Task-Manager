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
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">404</h1>
                <p className="text-lg text-gray-600 mb-4">Página não encontrada</p>
                <p className="text-md text-gray-500">Você será redirecionado para a página inicial em breve...</p>
                <p className="text-sm text-gray-400 mt-6">Se você não for redirecionado automaticamente, <a href="/" className="text-blue-500 underline">clique aqui</a>.</p>
            </div>
        </div>
    );
};

export default NotFoundPage;