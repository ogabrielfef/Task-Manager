import React, { useState } from "react";
import { useAuth } from '../contexts/authContext';
import { UserLogin, UserRegister } from '../services/apiLogin';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [emailUser, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const { login } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { token, email, userId } = await UserLogin(emailUser, password);

            login(email, userId, token);

            navigate('/tasks');
        } catch (err) {
                setError(err.message);
        }
    };

    const handleRegister = async () => {
        await UserRegister(emailRegister, passwordRegister);

        const { token, email, userId } = await UserLogin(emailRegister, passwordRegister);

        login(email, userId, token);

        navigate('/tasks');
    };

    return (
        <div>
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
            <div>
                <h1>Cadastre-se</h1>
                <input 
                    type="email"
                    value={emailRegister}
                    onChange={(e) => setEmailRegister(e.target.value)}
                    placeholder="Email" 
                />
                <input 
                    type="password"
                    value={passwordRegister}
                    onChange={(e) => setPasswordRegister(e.target.value)}
                    placeholder="Password" 
                />
                <button onClick={handleRegister}>
                    Cradastrar
                </button>
            </div>
        </div>
    );
};

export default LoginPage;