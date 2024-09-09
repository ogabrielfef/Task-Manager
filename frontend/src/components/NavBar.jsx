import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserLogout } from '../services/apiLogin';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        UserLogout();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">TaskManager</h2>
            <button
                onClick={handleLogout}
                className="py-2 px-4 bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                Logout
            </button>
        </nav>
    );
};

export default NavBar;
