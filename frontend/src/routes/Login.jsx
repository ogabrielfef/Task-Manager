import React, { useState } from "react";
import { useAuth } from '../contexts/authContext';
import { UserLogin } from '../services/apiLogin';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [emailUser, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { token, email, userId } = await UserLogin(emailUser, password);

            // localStorage.setItem('userEmail', email);
            // localStorage.setItem('userId', userId);
            // localStorage.setItem('authToken', token);

            login(email, userId, token);

            navigate('/tasks');
        } catch (err) {
                setError(err.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="email"
                value={emailUser}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" 
            />
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
            />
            <button onClick={handleLogin}>
                Login
            </button>
            {error && <span>{error}</span>}
        </div>
    );
};

export default LoginPage;