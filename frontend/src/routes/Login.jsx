import React, { useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { UserLogin, UserRegister } from '../services/apiLogin';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [emailUser, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        // Regex for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Regex to ensure password is between 8 and 20 characters
        const passwordRegex = /^(?=.{8,20}$).*/;
        return passwordRegex.test(password);
    };

    const handleLogin = async () => {
        setEmailError('');
        setPasswordError('');

        let valid = true;

        if (!validateEmail(emailUser)) {
            setEmailError('O email deve estar no formato correto.');
            valid = false;
        }

        if (!validatePassword(password)) {
            setPasswordError('A senha deve ter entre 8 e 20 caracteres.');
            valid = false;
        }

        if (!valid) return;

        try {
            const { token, email, userId } = await UserLogin(emailUser, password);

            login(email, userId, token);
            navigate('/tasks');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleRegister = async () => {
        setEmailError('');
        setPasswordError('');

        let valid = true;

        if (!validateEmail(emailRegister)) {
            setEmailError('O email deve estar no formato correto.');
            valid = false;
        }

        if (!validatePassword(passwordRegister)) {
            setPasswordError('A senha deve ter entre 8 e 20 caracteres.');
            valid = false;
        }

        if (!valid) return;

        try {
            await UserRegister(emailRegister, passwordRegister);

            const { token, email, userId } = await UserLogin(emailRegister, passwordRegister);

            login(email, userId, token);
            navigate('/tasks');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 p-4">
            <div className="flex flex-col gap-6 bg-white rounded-lg shadow-md p-8 w-full max-w-sm md:w-80">
                <h1 className="text-gray-700 text-lg font-medium mb-4 text-center">Login</h1>
                <div className="relative">
                    <input
                        type="email"
                        value={emailUser}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError(''); // Clear error on change
                        }}
                        placeholder="Email"
                        className={`w-full p-3 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {emailError && (
                        <p className="absolute text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                </div>
                <div className="relative">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(''); // Clear error on change
                        }}
                        placeholder="Password"
                        className={`w-full p-3 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {passwordError && (
                        <p className="absolute text-red-500 text-sm mt-1">{passwordError}</p>
                    )}
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Login
                </button>
                {error && <span className="text-red-500">{error}</span>}
            </div>
            <div className="flex flex-col gap-6 bg-white rounded-lg shadow-md p-8 w-full max-w-sm md:w-80">
                <h1 className="text-gray-700 text-lg font-medium mb-4 text-center">Cadastre-se</h1>
                <div className="relative">
                    <input
                        type="email"
                        value={emailRegister}
                        onChange={(e) => {
                            setEmailRegister(e.target.value);
                            setEmailError(''); // Clear error on change
                        }}
                        placeholder="Email"
                        className={`w-full p-3 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {emailError && (
                        <p className="absolute text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                </div>
                <div className="relative">
                    <input
                        type="password"
                        value={passwordRegister}
                        onChange={(e) => {
                            setPasswordRegister(e.target.value);
                            setPasswordError(''); // Clear error on change
                        }}
                        placeholder="Password"
                        className={`w-full p-3 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    {passwordError && (
                        <p className="absolute text-red-500 text-sm mt-1">{passwordError}</p>
                    )}
                </div>
                <button
                    onClick={handleRegister}
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Cadastrar
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
