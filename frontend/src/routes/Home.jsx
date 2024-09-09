import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Bem-vindo à TaskManager
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Descubra a melhor maneira de gerenciar suas tarefas com nossa ferramenta intuitiva.
                </p>
                <button
                    onClick={handleLoginClick}
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Acessar Login
                </button>
            </div>
        </div>
    );
};

export default HomePage;
